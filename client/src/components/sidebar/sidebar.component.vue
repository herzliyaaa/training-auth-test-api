<template>
  <aside>
    <div class="sidebar">
      <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
      <router-link to="/cars" class="nav-link">Cars</router-link>
      <router-link to="/customers" class="nav-link">Customers</router-link>
      <router-link to="/salesperson" class="nav-link">Salesperson</router-link>
    </div>
  </aside>
</template>

<script>
export default {
  name: "SidebarComponent",
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
  --header-height: 3rem;
  --nav-width: 68px;
  --first-color: #6d28d9;
  --first-color-light: #fdfdfd;
  --white-color: #f7f6fb;
  --body-font: "Montserrat", sans-serif;
  --normal-font-size: 1rem;
  --z-fixed: 100;
}

*,
::before,
::after {
  box-sizing: border-box;
  font-family: var(--body-font) !important;
  font-weight: 700;
}

a {
  text-decoration: none;
  color: none;
}
a:hover {
  color: none;
}

h1 {
  font-family: var(--body-font) !important;
  font-weight: 700;
}

.primary-btn {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-bottom: 0.5rem;
  background-color: #6d28d9;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  cursor: pointer;
}

.primary-btn:hover,
.primary-btn:focus,
.primary-btn:focus:not(:focus-visible) {
  background-color: #5b21b6;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
}
/* The side navigation menu */
.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

/* Sidebar links */
.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

/* Active/current link */
.sidebar a.router-link-active {
  background-color: #04aa6d;
  color: white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {
    float: left;
  }
  div.content {
    margin-left: 0;
  }
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
</style>
