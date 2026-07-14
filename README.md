# CoreCRM

CoreCRM is a responsive customer relationship management dashboard for tracking customers, deals, tasks, activities, and sales performance. Built with the Next.js App Router and TypeScript, it combines protected dashboard routes with interactive, typed mock CRM data. The interface supports desktop and mobile workflows, dark mode, notifications, and locally persisted user preferences.

## Live Demo

- [https://crm-system-eight-bay.vercel.app/](https://crm-system-eight-bay.vercel.app/)

## Features

- Mock credential-based login with validation and protected dashboard routes
- Sales dashboard with summary metrics, a monthly sales chart, upcoming tasks, and recent activity
- Searchable customer directory with status filters, sorting, pagination, responsive table and card layouts, and empty states
- Customer detail profiles containing contact and company information, assigned agent, linked deals, tasks, activities, and notes
- Six-stage deal pipeline with deal counts, stage totals, values, closing dates, and links to customer profiles
- Task overview with status totals plus search, status filtering, priority filtering, and linked customer records
- Reports for customer health, pipeline value, won revenue, task completion, and sales-team ownership
- Notification panel with unread counts and categorized CRM updates
- Light, dark, and system themes powered by `next-themes`
- Locally persisted notification and theme preferences
- Responsive sidebar and mobile navigation
- Route-level loading skeletons and a custom customer not-found state
- Vercel Analytics integration

## Tech Stack

- **Framework:** Next.js 16 App Router
- **UI:** React 19, Tailwind CSS 4, shadcn styling, and `tw-animate-css`
- **Language:** TypeScript 5 with strict type checking
- **Theming:** `next-themes`
- **Icons:** React Icons
- **Utilities:** `clsx` and `tailwind-merge`
- **Analytics:** Vercel Analytics
- **Tooling:** ESLint 9, PostCSS, and npm
- **Deployment:** Vercel

## Project Structure

```text
app/                  Next.js App Router pages, layouts, loading states, and styles
  (auth)/             Authentication routes
  (dashboard)/        Protected CRM routes and shared dashboard layout
components/           Feature, layout, common, and reusable UI components
data/                 Typed mock CRM datasets for users, customers, deals, and tasks
hooks/                Reusable client hooks, including local-storage state
lib/                  Shared utility functions
public/               Static assets
types/                TypeScript models for the CRM data
```

## Pages

| Route             | Functionality                                                                                  |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| `/`               | Redirects visitors to the login page.                                                          |
| `/login`          | Validates a mock user account, stores the authenticated user locally, and opens the dashboard. |
| `/dashboard`      | Presents sales metrics, a monthly chart, upcoming tasks, and recent CRM activity.              |
| `/customers`      | Displays searchable, filterable, sortable, and paginated customer records.                     |
| `/customers/[id]` | Shows a customer profile with company data, deals, tasks, activities, and notes.               |
| `/deals`          | Organizes deals into Lead, Contacted, Proposal, Negotiation, Won, and Lost pipeline stages.    |
| `/tasks`          | Summarizes task status and provides searchable status and priority filters.                    |
| `/reports`        | Calculates customer, pipeline, revenue, task, and sales-agent summaries from the mock data.    |
| `/settings`       | Displays the current user and persists notification and theme preferences in local storage.    |

## Reusable Components

- **Authentication:** `LoginForm`, `AuthGuard`
- **Layout:** `Sidebar`, `Navbar`, `NotificationsPanel`, `ThemeToggle`, `ThemeProvider`
- **Feature components:** `CustomerList`, `TaskList`, `SettingsControls`
- **Feedback components:** `EmptyState`, `LoadingSkeleton`
- **UI primitives:** `Badge`, `Button`, `Card`, `Input`, `Table`

## Screenshots

- ![Login Page](/screenshots/login.png)
- ![Dashboard](/screenshots/dashboard.png)
- ![Customers Page](/screenshots/customers.png)
- ![Customers Details](/screenshots/customer-details.png)
- ![Deals Page](/screenshots/deals.png)
- ![Tasks Page](/screenshots/tasks.png)
- ![Reports Page](/screenshots/reports.png)
- ![Settings Page](/screenshots/settings.png)

## Getting Started!

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Author

- Name: Ali Elsayed
- GitHub: [https://github.com/Alilool]
