from PIL import Image, ImageDraw, ImageFont
import os

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'images', 'projects')
os.makedirs(OUTPUT_DIR, exist_ok=True)
OUTPUT_PATH = os.path.join(OUTPUT_DIR, 'neuroadapt.png')

img = Image.new('RGB', (1200, 800), '#f8fafc')
draw = ImageDraw.Draw(img)

try:
    font_bold = ImageFont.truetype('arial.ttf', 72)
    font_regular = ImageFont.truetype('arial.ttf', 32)
except IOError:
    font_bold = ImageFont.load_default()
    font_regular = ImageFont.load_default()

# Background panel
panel_margin = 60
panel_width = 1080
panel_height = 620
panel_x = panel_margin
panel_y = 80

# Draw panel and accent
accent_color = '#14b8a6'
panel_color = '#ffffff'
shadow_color = '#d1d5db'

for offset in range(1, 8):
    draw.rectangle([
        panel_x + offset,
        panel_y + offset,
        panel_x + panel_width + offset,
        panel_y + panel_height + offset
    ], fill=shadow_color)

draw.rectangle([panel_x, panel_y, panel_x + panel_width, panel_y + panel_height], fill=panel_color)

draw.rectangle([panel_x + 40, panel_y + 40, panel_x + 160, panel_y + 160], fill=accent_color)

# Title text
text = 'NeuroAdapt'
draw.text((panel_x + 220, panel_y + 60), text, fill='#0f172a', font=font_bold)

draw.text((panel_x + 220, panel_y + 150), 'Education that adapts to you.', fill='#475569', font=font_regular)

# Buttons
button_width = 320
button_height = 70
button_x = panel_x + 220
button_y = panel_y + 240

for i, label in enumerate(['Try Demo Lesson', 'Paste Text', 'Upload Lesson']):
    y = button_y + i * 110
    color = '#14b8a6' if i == 0 else '#e2e8f0'
    text_color = '#ffffff' if i == 0 else '#0f172a'
    draw.rounded_rectangle([button_x, y, button_x + button_width, y + button_height], radius=24, fill=color)
    draw.text((button_x + 30, y + 18), label, fill=text_color, font=font_regular)

# Footer note
footer_text = 'Designed for dyslexia, ADHD, low vision & more'
draw.text((panel_x + 220, panel_y + 460), footer_text, fill='#94a3b8', font=font_regular)

img.save(OUTPUT_PATH)
print('Generated', OUTPUT_PATH)
