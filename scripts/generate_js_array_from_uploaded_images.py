from PIL import Image
import json
import os
import subprocess

# Base directory of the script
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

INCOMING_DIR = os.path.join(SCRIPT_DIR, "..", "incoming_photos")

JS_FILE = "src/data/photos.js"
PUBLIC_DIR = os.path.join(SCRIPT_DIR, "..", "public/images")
THUMBNAILS_DIR = os.path.join(SCRIPT_DIR, "..", "public/images_thumbnails")



photos = []
photo_id = 1

# Thumbnail max size
THUMB_MAX_SIZE = 750
FULLRES_MAX_SIZE = 1920  

for folder in os.listdir(INCOMING_DIR):
    incoming_folder_path = os.path.join(INCOMING_DIR, folder)
    if not os.path.isdir(incoming_folder_path):
        continue  # skip files

    public_folder_path = os.path.join(PUBLIC_DIR, folder)
    thumbnail_folder_path = os.path.join(THUMBNAILS_DIR, folder)

    os.makedirs(public_folder_path, exist_ok=True)
    os.makedirs(thumbnail_folder_path, exist_ok=True)

    for filename in os.listdir(incoming_folder_path):
        # Only process original RAW files for metadata
        if filename.lower().endswith(('.jpg', '.jpeg', ".png")):
            
            
            prod_file_path = os.path.join(
                incoming_folder_path, filename)
            
            
            # Full-resolution output path
            fullres_output_path = os.path.join(public_folder_path, filename)
            # Thumbnail output path
            thumb_output_path = os.path.join(thumbnail_folder_path, filename)
            
            
            # --- Compress full-res using FFmpeg ---
            subprocess.run([
                "ffmpeg",
                "-y",
                "-i", prod_file_path,
                "-vf", f"scale='if(gt(iw,ih),{FULLRES_MAX_SIZE},-1)':'if(gt(ih,iw),{FULLRES_MAX_SIZE},-1)'",
                "-q:v", "2",  # high quality
                fullres_output_path
            ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
            
            
            
            # --- Generate thumbnail ---
            subprocess.run([
                "ffmpeg",
                "-y",
                "-i", prod_file_path,
                "-vf", f"scale='if(gt(iw,ih),{THUMB_MAX_SIZE},-1)':'if(gt(ih,iw),{THUMB_MAX_SIZE},-1)'",
                "-q:v", "2",  
                thumb_output_path
            ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
            
            


            # Open JPG/PNG to determine displayed orientation
            with Image.open(fullres_output_path) as img:
                width, height = img.size
                if width > height:
                    orientation = "wide"
                elif height > width:
                    orientation = "tall"
                else:
                    orientation = "square"

            production_image_url = f"/images/{folder}/{filename}"

            # Add to photos array with both thumbnail and full-res URLs
            photos.append({
                "id": photo_id,
                "imageUrl": f"/images_thumbnails/{folder}/{filename}",  # thumbnail
                "fullResUrl": f"/images/{folder}/{filename}",           # full-res
                "category": folder,
                "orientation": orientation
            })
            photo_id += 1
                    
                    

# Convert JSON to JS array string
js_array_content = json.dumps(photos, indent=4, ensure_ascii=False)

# Wrap in JS module with CATEGORIES import
js_content = f"""

const photos = {js_array_content};

export default photos;
"""


# Make sure the directory exists
os.makedirs(os.path.dirname(JS_FILE), exist_ok=True)

# Write to JS file
with open(JS_FILE, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Converted {len(photos)} photos to JS array in {JS_FILE}")
