import re
import os
import glob

def replace_in_files(pattern, replacement, file_pattern):
    for filename in glob.glob(file_pattern):
        with open(filename, 'r', encoding='utf-8') as file:
            content = file.read()
        
        new_content = re.sub(pattern, replacement, content)
        
        if new_content != content:
            with open(filename, 'w', encoding='utf-8') as file:
                file.write(new_content)
            print(f"Updated {filename}")

# Replace missing logo with a reliable internet SVG
logo_svg_url = "https://www.svgrepo.com/show/305218/dinosaur.svg" # Simple dinosaur logo
replace_in_files(r'src="Images/Logo/download\.png"', f'src="{logo_svg_url}"', "*.html")
replace_in_files(r'src="Images/Logo/download\.png"', f'src="{logo_svg_url}"', "partials/*.html")

# Replace video placeholders with a reliable internet SVG
video_svg_url = "https://www.svgrepo.com/show/305219/play.svg"
replace_in_files(r'src="Images/Logo/videos\.png"', f'src="{video_svg_url}"', "video.html")

# Define CSS animated texts to replace the deleted GIFs
css_replacements = {
    'Images/Animated Text/About us.gif': '<h2 class="animated-text">About Us</h2>',
    'Images/Animated Text/Contact us.gif': '<h2 class="animated-text">Contact Us</h2>',
    'Images/Animated Text/Loading.gif': '<div class="spinner"></div>',
    'Images/Animated Text/history.gif': '<h2 class="animated-text">History</h2>',
    'Images/Animated Text/home.gif': '<h2 class="animated-text">Home</h2>',
    'Images/Animated Text/photogallery.gif': '<h2 class="animated-text">Photo Gallery</h2>',
    'Images/Animated Text/videogallery.gif': '<h2 class="animated-text">Video Gallery</h2>'
}

for gif, css_text in css_replacements.items():
    # Look for img tags with these exact sources and replace the whole tag
    pattern = r'<img[^>]*src="' + re.escape(gif) + r'"[^>]*>'
    replace_in_files(pattern, css_text, "*.html")

