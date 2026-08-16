# Dhiman Group Enterprise Architecture

## Vision

Build **one enterprise-grade Next.js application** that represents the
entire Dhiman Group ecosystem.

The platform should have: - One shared codebase - One design system -
One deployment - Separate business divisions - Shared branding -
Scalable architecture

------------------------------------------------------------------------

# Website Hierarchy

``` text
DHIMAN GROUP
│
├── Home
├── About
├── Companies
│
├── Dhiman Engineering Company
│   ├── Home
│   ├── About
│   ├── Solutions
│   ├── Products
│   ├── Projects
│   ├── Gallery
│   └── Contact
│
├── Naman Agro Udyog
│   ├── Home
│   ├── About
│   ├── Products
│   ├── Dealer Network
│   ├── Gallery
│   └── Contact
│
└── Contact
```

------------------------------------------------------------------------

# Routing

Recommended URLs

-   /
-   /about
-   /companies
-   /contact

Engineering

-   /engineering
-   /engineering/products
-   /engineering/projects
-   /engineering/gallery

Naman Agro

-   /naman-agro
-   /naman-agro/products
-   /naman-agro/dealers
-   /naman-agro/gallery

------------------------------------------------------------------------

# Shared Design System

-   Typography
-   Colors
-   Buttons
-   Cards
-   Forms
-   Navbar
-   Footer
-   Icons
-   Animations

Each business division reuses these components.

------------------------------------------------------------------------

# Repository Structure

``` text
src/
├── app/
│   ├── (group)
│   ├── engineering
│   └── naman-agro
├── components/
│   ├── common
│   ├── engineering
│   ├── agro
│   └── shared
├── data
├── lib
├── hooks
├── styles
└── types
```

------------------------------------------------------------------------

# Design Principles

-   Premium corporate UI
-   Clean layout
-   Minimal navigation
-   Responsive
-   SEO-first
-   Accessible
-   Reusable components
-   Performance focused

------------------------------------------------------------------------

# Development Order

1.  Design System
2.  Dhiman Group
3.  Dhiman Engineering
4.  Naman Agro
5.  Shared CMS/Admin
6.  SEO
7.  Performance
8.  Deployment
