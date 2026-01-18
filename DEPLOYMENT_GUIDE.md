# 🚀 Deployment Guide for sevenheavenqa.com

## 📦 Files You Need to Upload

These 3 files MUST be uploaded to your website:

1. **index.html** - Main application file (already renamed)
2. **app.js** - JavaScript functionality (already renamed)
3. **logo.png** - Seven Heaven logo

**Optional (for documentation):**
- README_ENHANCED.md
- QUICK_START.md

---

## 🌐 Deployment Methods

### METHOD 1: cPanel File Manager (Most Common)

**Step-by-Step Instructions:**

1. **Login to cPanel**
   - Visit: `https://sevenheavenqa.com/cpanel`
   - Or: `https://cpanel.yourhostingprovider.com`
   - Enter your username and password

2. **Open File Manager**
   - Find "Files" section in cPanel
   - Click "File Manager"

3. **Navigate to Web Root**
   - Click on `public_html` folder
   - This is where your website files go

4. **Backup Current Files (Important!)**
   - Select the current `index.html` file
   - Click "Download" to save it as backup
   - Or rename it to `index-old.html`

5. **Upload New Files**
   - Click "Upload" button at the top
   - Select all 3 files:
     - index.html
     - app.js
     - logo.png
   - Wait for upload to complete (you'll see 100%)

6. **Verify Upload**
   - Go back to File Manager
   - Confirm all 3 files are in `public_html`
   - File sizes should be:
     - index.html: ~40-50 KB
     - app.js: ~30-40 KB
     - logo.png: ~60 KB

7. **Test Your Website**
   - Visit: `https://www.sevenheavenqa.com`
   - Press Ctrl+F5 to hard refresh
   - You should see the login page!

---

### METHOD 2: FTP Upload (FileZilla)

**Step-by-Step Instructions:**

1. **Download FileZilla** (if you don't have it)
   - Visit: https://filezilla-project.org
   - Download FileZilla Client (FREE)
   - Install it

2. **Get Your FTP Credentials**
   - Check your hosting email for FTP details
   - You need:
     - FTP Host: `ftp.sevenheavenqa.com` or similar
     - Username: Usually your cPanel username
     - Password: Usually your cPanel password
     - Port: 21 (default) or 22 (SFTP)

3. **Connect via FileZilla**
   - Open FileZilla
   - Enter:
     - Host: `ftp.sevenheavenqa.com`
     - Username: Your FTP username
     - Password: Your FTP password
     - Port: 21
   - Click "Quickconnect"

4. **Navigate to Web Root**
   - In the "Remote site" panel (right side)
   - Find and open: `public_html` or `www` or `httpdocs`

5. **Backup Current Files**
   - Right-click current `index.html`
   - Rename to `index-old.html`

6. **Upload New Files**
   - In "Local site" panel (left side)
   - Navigate to folder with your files
   - Select all 3 files
   - Drag them to the Remote site panel
   - Wait for upload to complete

7. **Verify and Test**
   - Check all files uploaded successfully
   - Visit `https://www.sevenheavenqa.com`
   - Hard refresh: Ctrl+F5

---

### METHOD 3: GitHub Pages (Alternative/Backup)

**For Testing Before Main Deployment:**

1. **Create GitHub Repository**
   - Go to https://github.com
   - Click "New repository"
   - Name: `seven-heaven-spa`
   - Make it PUBLIC
   - Click "Create repository"

2. **Upload Files**
   - Click "uploading an existing file"
   - Drag and drop all 3 files
   - Commit changes

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: `main`
   - Folder: `/ (root)`
   - Click Save

4. **Get Your URL**
   - Wait 2-3 minutes
   - Your site: `https://oussama90tn.github.io/seven-heaven-spa/`
   - Test there first!

5. **Deploy to Main Site**
   - Once working on GitHub Pages
   - Use Method 1 or 2 to deploy to sevenheavenqa.com

---

## 📋 Common Hosting Providers - Specific Instructions

### Hostinger
- cPanel: `https://hpanel.hostinger.com`
- File Manager → public_html
- Use Method 1 (cPanel)

### GoDaddy
- cPanel or Plesk access
- File Manager → public_html or httpdocs
- Use Method 1 (cPanel)

### Bluehost
- cPanel: `https://my.bluehost.com`
- File Manager → public_html
- Use Method 1 (cPanel)

### SiteGround
- Site Tools → File Manager
- Navigate to public_html
- Upload files
- Use Method 1

### Namecheap
- cPanel File Manager
- public_html folder
- Use Method 1

### DigitalOcean / VPS
- Use SFTP (FileZilla with Port 22)
- Navigate to `/var/www/html`
- Use Method 2 (FTP)

---

## ✅ Post-Deployment Checklist

After uploading, verify:

- [ ] Visit https://www.sevenheavenqa.com
- [ ] Hard refresh (Ctrl+F5 or Cmd+Shift+R)
- [ ] Login page appears with Seven Heaven logo
- [ ] Can login with: admin / admin123
- [ ] Dashboard loads correctly
- [ ] All tabs work (Bookings, Schedule, Services, etc.)
- [ ] Images display properly
- [ ] Mobile view works (test on phone)
- [ ] No console errors (F12 → Console tab)

---

## 🔧 Troubleshooting

### Problem: Still seeing "Coming soon"
**Solution:**
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito/private mode
- Wait 5 minutes for server cache to clear
- Verify files uploaded to correct folder

### Problem: Blank white page
**Solution:**
- Open browser console (F12)
- Check for errors
- Verify `app.js` is in same folder as `index.html`
- Check file names are exactly: `index.html` and `app.js`

### Problem: Logo not showing
**Solution:**
- Verify `logo.png` uploaded
- Check it's in same folder as index.html
- Re-upload logo.png

### Problem: 404 Error
**Solution:**
- Verify files in `public_html` (not a subfolder)
- Check file name is `index.html` (lowercase)
- Contact hosting support to verify web root folder

### Problem: Login not working
**Solution:**
- This is expected - demo credentials work offline
- Use: admin / admin123
- Or: sara / staff123
- Browser must support localStorage

---

## 📱 Testing on Mobile

1. **After deployment**
2. **Open on your phone**: https://www.sevenheavenqa.com
3. **Add to Home Screen** (optional):
   - iOS: Safari → Share → Add to Home Screen
   - Android: Chrome → Menu → Add to Home Screen
4. **Test all features**:
   - Login
   - View bookings
   - Upload photos (transportation)
   - All navigation

---

## 🔐 Security Recommendations

### After Deployment:

1. **Change Default Passwords**
   - Login as admin
   - Go to Staff tab
   - Change all staff passwords
   - Change admin password in browser console:
   ```javascript
   let users = JSON.parse(localStorage.getItem('users'));
   users[0].password = 'your-new-password';
   localStorage.setItem('users', JSON.stringify(users));
   ```

2. **HTTPS/SSL Certificate**
   - Verify site uses HTTPS (https://www.sevenheavenqa.com)
   - If not, enable SSL in cPanel or hosting settings
   - Most hosts offer free SSL (Let's Encrypt)

3. **Regular Backups**
   - Export data regularly (future feature)
   - Download localStorage data
   - Keep backup of files

---

## 📞 Need Help?

### If you get stuck:

1. **Check your hosting provider's knowledge base**
   - Search: "How to upload files to website"
   - Most have video tutorials

2. **Contact hosting support**
   - Tell them: "I need to upload my website files to public_html"
   - They can guide you through their specific system

3. **Take screenshots**
   - If errors appear, screenshot them
   - Check browser console (F12) for error messages

---

## 🎉 Quick Start After Deployment

Once deployed successfully:

1. **Admin First Login**
   - Go to: https://www.sevenheavenqa.com
   - Login: admin / admin123
   - Explore the dashboard

2. **Set Up Your Spa**
   - Go to Staff tab → Add your real staff members
   - Services tab → Review services
   - Create first real booking

3. **Train Your Staff**
   - Give them their usernames/passwords
   - Show them "My Schedule" tab
   - Teach payment confirmation
   - Show transportation logging

4. **Start Using!**
   - Create bookings
   - Track revenue
   - Manage expenses
   - Process salaries

---

## 🔄 Future Updates

To update the system later:

1. **Backup current version**
   - Download existing files from server

2. **Upload new files**
   - Replace index.html and app.js
   - Keep logo.png

3. **Test thoroughly**
   - Verify all features work
   - Check data is preserved

---

## ✨ File Structure on Server

After deployment, your public_html should look like:

```
public_html/
├── index.html          (40-50 KB)
├── app.js             (30-40 KB)
└── logo.png           (~60 KB)
```

That's it! Just 3 files.

---

**Ready to deploy? Follow Method 1 (cPanel) - it's the easiest!**

Good luck! 🚀
