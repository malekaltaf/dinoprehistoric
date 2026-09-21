import re
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

# Replace missing PDF and Audio links with a placeholder
replace_in_files(r'href="PDFs/[^"]+"', 'href="#" onclick="alert(\'PDF coming soon!\'); return false;"', "resources.html")
replace_in_files(r'href="Songs/[^"]+"', 'href="#" onclick="alert(\'Audio coming soon!\'); return false;"', "resources.html")

