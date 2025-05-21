import { createRouter, createWebHistory } from 'vue-router';
// Placeholder view components (to be created next)
import HomeView from '../views/HomeView.vue';
import GlowingGradientDemoView from '../views/GlowingGradientDemoView.vue';
import AnimatedBlobDemoView from '../views/AnimatedBlobDemoView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView, // Will be uncommented after creating the view
    // component: { template: '<div>Home View Placeholder</div>' } // Temporary placeholder
  },
  {
    path: '/glowing-gradient',
    name: 'GlowingGradientDemo',
    component: GlowingGradientDemoView, // Will be uncommented
    // component: { template: '<div>Glowing Gradient Demo Placeholder</div>' } // Temporary
  },
  {
    path: '/animated-blob',
    name: 'AnimatedBlobDemo',
    component: AnimatedBlobDemoView, // Will be uncommented
    // component: { template: '<div>Animated Blob Demo Placeholder</div>' } // Temporary
  }
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // import.meta.env.BASE_URL is Vite specific
  routes
});

export default router;
