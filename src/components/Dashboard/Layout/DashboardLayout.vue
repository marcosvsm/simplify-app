<template>
  <div class="wrapper">
    <side-bar
      :active-color="activeColor"
      :background-color="backgroundColor"
      type="sidebar"
    >
      <user-menu></user-menu>
      <template slot-scope="props" slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'nc-icon nc-bank',
            path: '/admin/overview',
          }"
        >
        </sidebar-item>
        <sidebar-item
          opened
          class="example"
          :link="{ name: 'Examples (API)', icon: 'fab fa-vuejs fa-2x' }"
        >
          <sidebar-item
            :link="{
              name: 'User Profile',
              path: '/examples/user-profile',
            }"
          />
          <sidebar-item
            :link="{
              name: 'User Management',
              path: '/examples/user-management/list-users',
            }"
          />
        </sidebar-item>
        <sidebar-item
            class="example"
            :link="{
              name: 'Company',
              icon: 'fab fa-vuejs fa-2x',
              path: '/company',
            }"
          />
        </sidebar-item>
        <sidebar-item
            class="example"
            :link="{
              name: 'Invoices',
              icon: 'fab fa-vuejs fa-2x',
              path: '/invoice',
            }"
          />
        </sidebar-item>
      </template>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"> </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import UserMenu from "src/components/UIComponents/SidebarPlugin/UserMenu.vue";
import SidebarItem from "../../UIComponents/SidebarPlugin/SidebarItem.vue";

export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    UserMenu,
    SidebarItem,
  },
  data() {
    return {
      backgroundColor: "black",
      activeColor: "success",
    };
  },

  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
