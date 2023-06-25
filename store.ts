import { create } from "zustand";
import { devtools } from "zustand/middleware";

/* this code creates a global state store using zustand for managing the state of a mobile menu, including whether it is open or not and providing functions for toggling and closing it. */

// defines an interface called MobileMenu that describes the shape of the state stored in the zustand store.
interface MobileMenu {
  isMobileMenuOpen: boolean; // indicates whether the mobile menu is open or not;
  toggleMobileMenu: () => void; // a function that toggles the value of isMobileMenuOpen
  closeMobileMenu: () => void; // a function that sets the value of isMobileMenuOpen to false.
}

const useMobileMenu = create<MobileMenu>()(
  // enables debugging of the store using the Redux DevTools browser extension
  devtools(
    set => ({
      // initial state of the store
      isMobileMenuOpen: false,
      toggleMobileMenu: () => set(state => ({ isMobileMenuOpen: !state.isMobileMenuOpen }), false, "toggleMobileMenu"),
      closeMobileMenu: () => set({ isMobileMenuOpen: false }, false, "closeMobileMenu")
    }),
    {
      name: "mobile-menu"
    }
  )
);

// exports a hook called 'useMobileMenu' so it can be used to access the zustand store from other parts of the website.
export { useMobileMenu };
