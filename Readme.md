## DEVLOPE A CHROME EXTENTION

### 1. Create a manifest.json file

```json
{
  "name": "X-blocker",
  "version": "1.0",
  "manifest_version": 2,
  "description": "My first extension!",
  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "popup.html"
  }
}
```

### 2. Create a popup.html file

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Extension</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

### 3. Create a icon.png file

### 4. Open chrome://extensions/ and click on the "Load unpacked extension..." button

### 5. Select the folder containing your extension

### 6. Click on the extension icon in the toolbar

### 7. Click on the "Inspect views: background page" link
