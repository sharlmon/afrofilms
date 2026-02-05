# Deployment Guide for AfroFilms Website

This guide will help you replace your existing website on Plesk with the new version.

**IMPORTANT:** The full site is large (~260MB) because of the images/uploads. To make deployment easier, we will upload the **Code** separately from the **Images**.

## Prerequisites
- **Plesk File Manager** access.
- The `deploy_code_only.zip` file (small, ~1MB).

## Step-by-Step Instructions

### 1. Backup Existing Site
1.  Log in to your **Plesk File Manager**.
2.  Locate the **`httpdocs`** folder.
3.  **Rename** this folder to `httpdocs_backup_2024`.

### 2. Prepare New Directory
1.  Create a **New Folder** and name it **`httpdocs`**.

### 3. Upload Code (Small Zip)
1.  Open the new **`httpdocs`** folder.
2.  Upload **`deploy_code_only.zip`**.
3.  **Extract Files** into the current directory.
    *   You should now see `index.html`, `assets` folder, etc.

### 4. Restore Images (Copy from Backup)
1.  Go back to your FileManager root.
2.  Open **`httpdocs_backup_2024`** > **`wp-content`**.
3.  Find the **`uploads`** folder.
4.  **Copy** (or Move) this `uploads` folder.
5.  Paste it into the **NEW `httpdocs`** folder.
    *   *Note:* It should sit right next to `index.html` and `assets`.

### 5. Final Verification
1.  Visit **afrofilmsinternational.com** in your browser.
2.  Hard Refresh (Ctrl+F5).
3.  Navigate to "Projects" or "Works" to ensure images are loading.

## Troubleshooting
- **Missing Images?** Ensure the `uploads` folder is directly inside `httpdocs`. path should look like `httpdocs/uploads/2024/...`
