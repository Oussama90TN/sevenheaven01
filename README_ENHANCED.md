# Seven Heaven Spa - Enhanced Management System

## Overview
This is a comprehensive web-based management system for Seven Heaven Spa with features for both administrators and staff members. The system includes advanced features for revenue tracking, expense management, salary processing, and transportation logging.

## New Features Added

### Admin Features

#### 1. Revenue Reports
Access comprehensive revenue analytics from the Reports tab:
- **Daily Revenue**: Today's total revenue
- **Weekly Revenue**: Last 7 days revenue
- **Monthly Revenue**: Last 30 days revenue
- **Custom Date Range**: Generate reports for any specific date range
- **Service Breakdown**: See revenue by service category
- **Detailed Analytics**: View booking counts, averages, and trends

#### 2. Gift Management
- Click "Add Gift" button on dashboard or in bookings
- Create complimentary bookings marked as gifts
- Gift bookings are excluded from revenue calculations
- Clearly labeled with purple "GIFT" badges
- No payment required for gift bookings

#### 3. Expense Tracking (3 Categories)
Navigate to Expenses tab to manage three types of expenses:

**Consumables Expenses:**
- Products that are regularly consumed (oils, lotions, supplies)
- Track company, date, products, price, payment method, and notes
- View all consumables expenses in one place

**Assets Expenses:**
- Long-term equipment purchases (massage beds, tools, equipment)
- Same tracking fields as consumables
- Separate categorization for better accounting

**Admin Expenses:**
- Administrative and operational costs
- Office supplies, utilities, licenses, etc.
- Complete expense tracking with payment method

**For each expense type:**
- Company name
- Date of purchase
- Product description
- Price in QAR
- Payment method (Cash, Card, Bank Transfer, Fawran)
- Optional notes
- Delete functionality

#### 4. Salary Management
Process salaries from the Salaries tab with comprehensive components:

**Additions (+):**
1. Basic Salary
2. Accommodation Allowance
3. Transportation Allowance
4. Mobile Allowance
5. Overtime Pay
6. Incentive/Bonus

**Deductions (-):**
- Add multiple deductions with custom labels
- Each deduction has description and amount
- Remove individual deductions as needed

**Advance Payments (-):**
- Track advance payments separately
- Multiple advances can be recorded
- Each with description and amount

**Features:**
- Automatic total calculation
- Select staff member and month
- Payment method (Bank Transfer or Cash)
- Complete salary breakdown display
- Historical salary records
- Delete functionality

#### 5. Staff Performance Reports
Access from Reports tab with three time periods:

**Daily Reports:**
- Today's bookings per staff member
- Individual or all-staff view
- Revenue generated
- Completed vs pending bookings

**Weekly Reports:**
- Last 7 days performance
- Booking counts
- Revenue totals
- Staff comparison

**Monthly Reports:**
- Last 30 days analytics
- Comprehensive staff performance
- Revenue breakdown
- Service distribution

**Features:**
- Filter by individual staff or view all
- Visual statistics
- Booking details
- Revenue tracking

#### 6. Transportation Reports
(Admin can view transportation logs submitted by staff)

### Staff Features

#### 1. Enhanced My Schedule
Staff members see their personalized schedule with:
- All assigned bookings
- Date, time, and service details
- Customer information
- Payment status indicators
- Gift bookings clearly marked
- Quick access to booking details

#### 2. Payment Tracking with Invoices
For each booking (non-gift), staff can:
- View payment details
- Confirm payment receipt
- Select payment method (Cash or Fawran)
- Upload invoice/receipt photo
- View uploaded invoices
- Payment confirmation badge on schedule

**Payment Process:**
1. Open booking details
2. If payment not confirmed, see payment form
3. Select payment method (Cash/Fawran)
4. Upload photo of invoice (optional but recommended)
5. Click "Confirm Payment"
6. Booking shows "Payment Confirmed" badge

#### 3. Transportation Logging
Staff can log their transportation from the Transportation tab:

**Required Information:**
- Date of trips
- Number of trips (required)
- Tips received (optional, in QAR)
- Upload multiple photos (receipts, Uber screenshots, etc.)

**Features:**
- Image preview before upload
- Multiple photo uploads
- Trip history
- View uploaded photos
- Delete transportation logs
- Tips tracking

**Process:**
1. Click "Add Transportation"
2. Enter date and number of trips
3. Add tips amount if any
4. Upload photos (camera or gallery)
5. Preview images before saving
6. Submit transportation log

## How to Use

### For Administrators

#### Getting Started
1. Login with admin credentials
2. Dashboard shows overview statistics
3. Use navigation tabs to access different features

#### Managing Revenue
1. Go to Reports tab
2. View daily, weekly, monthly revenue
3. Set custom date range for detailed reports
4. Analyze service breakdown and trends

#### Adding Expenses
1. Go to Expenses tab
2. Select expense type (Consumables/Assets/Admin)
3. Click "Add Expense"
4. Fill in all required fields
5. Select payment method
6. Add optional notes
7. Save expense

#### Processing Salaries
1. Go to Salaries tab
2. Click "Process Salary"
3. Select staff member and month
4. Enter all salary components
5. Add deductions (click "+ Add Deduction")
6. Add advance payments (click "+ Add Advance Payment")
7. Review calculated total
8. Select payment method
9. Process salary

#### Viewing Staff Reports
1. Go to Reports tab
2. Scroll to Staff Performance Reports
3. Select staff member (or view all)
4. Choose period (Daily/Weekly/Monthly)
5. Review performance metrics

#### Creating Gift Bookings
1. Click "Add Gift" on dashboard, or
2. Create regular booking and check "This is a Gift"
3. Gift bookings won't require payment
4. Marked with purple badge

### For Staff

#### Viewing Schedule
1. Go to "My Schedule" tab
2. See all your assigned bookings
3. Click eye icon to view details
4. Check payment status

#### Confirming Payments
1. Open booking details
2. If not a gift and payment not confirmed:
   - Select payment method (Cash/Fawran)
   - Upload invoice photo
   - Click "Confirm Payment"
3. Booking updates with confirmation badge

#### Logging Transportation
1. Go to Transportation tab
2. Click "Add Transportation"
3. Enter date and number of trips
4. Add tips (if any)
5. Upload photos (receipts, screenshots)
6. Preview images
7. Save transportation log

## Technical Details

### Data Storage
- Uses browser localStorage
- All data stored client-side
- No server required
- Data persists between sessions
- Export/backup recommended for important data

### File Structure
- `index-enhanced.html`: Main HTML structure
- `app-enhanced.js`: JavaScript functionality
- `logo.png`: Seven Heaven Spa logo

### Browser Compatibility
- Works on modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Desktop and tablet optimized

### Image Handling
- Invoices and transportation photos stored as base64
- Click any image to view full size
- Camera or gallery upload support
- Multiple file upload supported

## Demo Credentials

**Administrator:**
- Username: `admin`
- Password: `admin123`

**Staff Members:**
- Username: `sara` / Password: `staff123`
- Username: `fatima` / Password: `staff123`
- Username: `aisha` / Password: `staff123`

## Key Features Summary

### Admin Dashboard
✅ Today's bookings count
✅ Today's revenue
✅ Active staff count
✅ Pending payments count
✅ Today's schedule overview
✅ Quick action buttons

### Booking Management
✅ Create, edit, delete bookings
✅ Multiple staff assignment
✅ Custom pricing
✅ Payment tracking
✅ Gift booking support
✅ Location links
✅ Notes and details

### Expense Management
✅ Three expense categories
✅ Complete expense tracking
✅ Payment method tracking
✅ Notes and descriptions
✅ Delete functionality

### Salary Processing
✅ 6 addition components
✅ Multiple deductions
✅ Multiple advances
✅ Automatic calculation
✅ Payment method selection
✅ Historical records

### Staff Reports
✅ Daily performance
✅ Weekly analytics
✅ Monthly overview
✅ Individual or all-staff view
✅ Revenue tracking
✅ Booking statistics

### Transportation
✅ Trip logging
✅ Tips tracking
✅ Photo uploads
✅ History view
✅ Delete functionality

### Staff Features
✅ Personal schedule
✅ Payment confirmation
✅ Invoice upload
✅ Transportation logging
✅ Booking details

## Installation

1. Extract all files to a folder
2. Open `index-enhanced.html` in a web browser
3. Login with demo credentials
4. Start using the system

## Important Notes

1. **Data Backup**: Regularly export your data as it's stored locally
2. **Photo Size**: Keep photo uploads reasonable (< 5MB each)
3. **Browser Storage**: Clear cache may delete data
4. **Gift Bookings**: Excluded from revenue calculations
5. **Payment Tracking**: Staff should confirm payments promptly
6. **Transportation**: Upload photos for record keeping

## Support

For issues or questions about the system, refer to this documentation or contact system administrator.

## Version
Enhanced Version 2.0 - January 2026

---

© Seven Heaven Spa - Mobile Spa Services Qatar
