# 🚀 Portfolio Forms - Setup & Troubleshooting Guide

## ✅ Quick Start - Follow These Steps EXACTLY

### Step 1: Start Laravel Backend Server

**IMPORTANT:** You MUST have the Laravel server running for forms to work!

```bash
cd d:\xampp\htdocs\portfolio\backend
php artisan serve
```

You should see: `Server running on [http://localhost:8000]`

**Keep this terminal window open!** Don't close it.

---

### Step 2: Test if Backend is Working

Open in browser: **http://localhost:8000/form-test.html**

1. Click "Submit Test" button
2. If you see ✅ **Success!** → Backend is working correctly ✓
3. If you see ❌ **Error!** → Read the error message and follow the troubleshooting steps below

---

### Step 3: Start React Frontend (in a NEW terminal)

```bash
cd d:\xampp\htdocs\portfolio\frontend
npm run dev
```

You should see something like: `Local: http://localhost:5173/`

---

### Step 4: Test the Forms on Your Website

1. Open your website (usually http://localhost:5173)
2. Go to any pricing plan
3. Click "Enquire Now"
4. Fill the form and submit
5. Check browser console (F12) for any errors

---

## 🔍 Troubleshooting

### Problem: "Network Error" or "Failed to submit"

**Check these in order:**

#### 1. Is Laravel Server Running?
- Look at the terminal where you ran `php artisan serve`
- It should say "Server running on..."
- If not, run the command again

#### 2. Check Database Connection
Run this command:
```bash
cd d:\xampp\htdocs\portfolio\backend
php artisan tinker --execute="echo DB::connection()->getDatabaseName();"
```
Should output: `portfolio`

If error, check your `.env` file:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=portfolio
DB_USERNAME=root
DB_PASSWORD=
```

#### 3. Check Browser Console (F12)
- Press F12 in your browser
- Go to Console tab
- Look for RED errors
- Common errors:
  - `ERR_CONNECTION_REFUSED` → Laravel server not running
  - `CORS policy` → Need to restart Laravel server
  - `404 Not Found` → Wrong API endpoint

#### 4. Test Direct Database Insert
```bash
cd d:\xampp\htdocs\portfolio\backend
php artisan tinker --execute="DB::table('contacts')->insert(['name'=>'Test','email'=>'test@test.com','subject'=>'Test','message'=>'Test message','is_read'=>false,'created_at'=>now(),'updated_at'=>now()]); echo 'Inserted!';"
```

Then check in dashboard: http://localhost:5173/admin/messages

---

## 📊 How It Works

### Form Submission Flow:

```
User fills form
    ↓
Frontend sends POST to: http://localhost:8000/api/contact
    ↓
Laravel receives request
    ↓
Validates data (name, email, message required)
    ↓
Saves to 'contacts' table in database
    ↓
Returns success response
    ↓
Shows success message to user
```

### Data Storage:

All form submissions are saved in the `contacts` table with:
- `name` - User's name
- `email` - User's email
- `subject` - Auto-generated: "Lead Inquiry: [Service Name]"
- `message` - Contains phone + service interest + custom message
- `is_read` - false (until admin views it)
- `created_at` - Timestamp

---

## 🎯 Forms That Submit to Backend

### 1. Lead Inquiry Modal (Pricing Section)
- File: `frontend/src/components/LeadModal.jsx`
- Endpoint: `POST /api/contact`
- Fields: Name, Email, Phone, Service, Message

### 2. Contact Form (Contact Page)
- File: `frontend/src/pages/Contact.jsx`
- Endpoint: `POST /api/contact`
- Fields: Name, Email, Subject, Message

### 3. Contact Component (Home Page)
- File: `frontend/src/components/Contact.jsx`
- Endpoint: `POST /api/contact`
- Fields: Name, Email, Subject, Message

---

## 📬 Where to See Submissions

### Admin Dashboard:
1. Login: http://localhost:5173/login
   - Username: `admin`
   - Password: `admin123`

2. Go to Messages: http://localhost:5173/admin/messages

3. You'll see all submissions with:
   - Sender name and email
   - Subject line
   - Full message content
   - Timestamp
   - Unread messages highlighted in blue

---

## 🛠️ Common Issues & Solutions

### Issue: CORS Error
**Solution:** Restart Laravel server with:
```bash
# Stop current server (Ctrl+C)
php artisan config:clear
php artisan cache:clear
php artisan serve
```

### Issue: 404 Not Found
**Check:**
- Backend URL is correct: `http://localhost:8000/api`
- Route exists: Run `php artisan route:list --path=contact`
- Should show: `POST api/contact`

### Issue: Validation Error
**Check:**
- All required fields are filled
- Email format is valid
- Message is not empty

### Issue: Database Error
**Solution:**
```bash
php artisan migrate:status  # Check if migrations ran
php artisan migrate         # Run migrations if needed
```

---

## 🧪 Testing Commands

### Check if contacts exist:
```bash
php artisan tinker --execute="echo json_encode(DB::table('contacts')->count());"
```

### View all contacts:
```bash
php artisan tinker --execute="print_r(DB::table('contacts')->get()->toArray());"
```

### Clear all test contacts:
```bash
php artisan tinker --execute="DB::table('contacts')->where('name','Test')->delete(); echo 'Deleted!';"
```

---

## 📞 Quick Checklist

Before asking for help, verify:

- [ ] Laravel server is running (terminal shows "Server running")
- [ ] Database is created and migrated
- [ ] Test form at http://localhost:8000/form-test.html works
- [ ] Browser console shows no red errors
- [ ] Network tab shows 200/201 status for /contact requests

---

## ✨ Success Indicators

You'll know everything is working when:

1. ✅ Test form shows green success message
2. ✅ Browser console shows: `Response data: {id: 1, name: "...", ...}`
3. ✅ Admin messages page shows new submission
4. ✅ No red errors in browser console

---

**Last Updated:** 2026-03-26
**Backend Port:** 8000
**Frontend Port:** 5173 (Vite)
