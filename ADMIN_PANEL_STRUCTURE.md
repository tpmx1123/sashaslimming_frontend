# Admin Panel Structure

## Overview

The admin panel is a comprehensive dashboard for managing the slimming clinic website. It's organized into separate components for better code maintainability and clarity.

## File Structure

```
frontend/src/
├── components/
│   ├── AdminPanel.jsx          # Main container with navigation
│   └── admin/
│       ├── Overview.jsx         # Dashboard overview with statistics
│       ├── Appointments.jsx     # Appointments management
│       ├── Blogs.jsx             # Blog post management
│       ├── Subscribers.jsx       # Newsletter subscribers management
│       └── ChangePassword.jsx    # Password change functionality
└── services/
    ├── authService.js           # Authentication & profile services
    ├── bookingService.js        # Appointments API calls
    ├── blogService.js           # Blog API calls
    └── subscriberService.js     # Subscriber API calls
```

## Components

### 1. AdminPanel.jsx (Main Container)
- **Purpose**: Main layout with navigation sidebar
- **Features**:
  - Tab-based navigation
  - Profile display
  - Logout functionality
  - Responsive design

### 2. Overview.jsx (Dashboard)
- **Purpose**: Display statistics and recent activities
- **Features**:
  - Total appointments count
  - Unread appointments count
  - Today's appointments
  - Subscriber statistics (total & active)
  - Blog statistics (total & published)
  - Recent appointments list
  - Real-time data fetching

### 3. Appointments.jsx
- **Purpose**: Manage all appointments/bookings
- **Features**:
  - View all appointments
  - Filter by status (all/read/unread)
  - Search functionality
  - Mark as read/unread
  - Delete appointments
  - Table view with details

### 4. Blogs.jsx
- **Purpose**: Manage blog posts
- **Features**:
  - View all blog posts
  - Filter by status (all/published/draft)
  - Search functionality
  - Create new blog posts
  - Edit existing posts
  - Delete blog posts
  - Grid/Card view
  - Modal form for create/edit

### 5. Subscribers.jsx
- **Purpose**: Manage newsletter subscribers
- **Features**:
  - View all subscribers
  - Filter by status (all/active/inactive)
  - Search by email
  - Add new subscribers manually
  - Activate/Deactivate subscribers
  - Delete subscribers
  - Table view

### 6. ChangePassword.jsx
- **Purpose**: Change admin password
- **Features**:
  - Current password verification
  - New password with confirmation
  - Password strength requirements
  - Security tips display
  - Form validation

## Services (API Integration)

### authService.js
- `login()` - Admin login
- `logout()` - Clear session
- `getProfile()` - Get admin profile
- `changePassword()` - Change password

### bookingService.js
- `getAllBookings()` - Get all appointments
- `getUnreadBookings()` - Get unread appointments
- `markAsRead()` - Mark appointment as read
- `deleteBooking()` - Delete appointment

### blogService.js
- `getAllBlogs()` - Get all blog posts
- `createBlog()` - Create new blog
- `updateBlog()` - Update existing blog
- `deleteBlog()` - Delete blog

### subscriberService.js
- `getAllSubscribers()` - Get all subscribers
- `getActiveSubscribers()` - Get active subscribers only
- `addSubscriber()` - Add new subscriber
- `deleteSubscriber()` - Delete subscriber
- `activateSubscriber()` - Activate subscriber
- `deactivateSubscriber()` - Deactivate subscriber

## Navigation Tabs

1. **Overview** 📊 - Dashboard with statistics
2. **Appointments** 📅 - Manage bookings/appointments
3. **Blogs** 📝 - Manage blog posts
4. **Subscribers** 👥 - Manage newsletter subscribers
5. **Change Password** 🔒 - Update admin password

## Features

### Responsive Design
- Mobile-friendly layout
- Sidebar navigation on desktop
- Stacked layout on mobile

### Real-time Updates
- Statistics update on component mount
- Data refreshes after CRUD operations
- Loading states for better UX

### Error Handling
- Error messages displayed to users
- Network error handling
- Validation feedback

### Security
- JWT token authentication
- Protected routes
- Secure password change

## Usage

1. **Login**: Navigate to `/admin-login` and enter credentials
2. **Navigate**: Click on tabs in the sidebar to switch sections
3. **Manage Data**: Use search, filters, and action buttons to manage content
4. **Logout**: Click logout button in header

## API Endpoints Used

- `POST /api/auth/login` - Login
- `GET /api/admin/profile` - Get profile
- `POST /api/auth/change-password` - Change password
- `GET /api/bookings/admin/all` - Get all bookings
- `GET /api/bookings/admin/unread` - Get unread bookings
- `PUT /api/bookings/admin/{id}/mark-read` - Mark as read
- `DELETE /api/bookings/admin/{id}` - Delete booking
- `GET /api/blogs/admin/all` - Get all blogs
- `POST /api/blogs/admin` - Create blog
- `PUT /api/blogs/admin/{id}` - Update blog
- `DELETE /api/blogs/admin/{id}` - Delete blog
- `GET /api/newsletter/admin/all` - Get all subscribers
- `GET /api/newsletter/admin/active` - Get active subscribers
- `POST /api/newsletter/admin/add` - Add subscriber
- `PUT /api/newsletter/admin/{id}/activate` - Activate subscriber
- `PUT /api/newsletter/admin/{id}/deactivate` - Deactivate subscriber
- `DELETE /api/newsletter/admin/{id}` - Delete subscriber

## Styling

- Uses Tailwind CSS
- Glassmorphism design (backdrop blur effects)
- Gradient backgrounds
- Consistent color scheme (blue, green, orange, purple accents)
- Dark theme optimized

## Future Enhancements

- Pagination for large datasets
- Export functionality (CSV/PDF)
- Bulk operations
- Advanced filtering options
- Activity logs
- Email notifications for new appointments
- Dashboard charts/graphs

