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

# Update footers in all html files to include a link to the sitemap
footer_search = r'<a href="contact\.html" class="text-white">Contact Us</a>'
footer_replacement = '<a href="contact.html" class="text-white me-3">Contact Us</a>\n          <a href="sitemap.html" class="text-white">Sitemap</a>'

replace_in_files(footer_search, footer_replacement, "*.html")

# Update partials/navbar.html to include Sitemap
navbar_search = r'<li class="nav-item"><a class="nav-link" href="resources\.html">Resources</a></li>'
navbar_replacement = '<li class="nav-item"><a class="nav-link" href="resources.html">Resources</a></li>\n        <li class="nav-item"><a class="nav-link" href="sitemap.html">Sitemap</a></li>'

replace_in_files(navbar_search, navbar_replacement, "partials/navbar.html")

