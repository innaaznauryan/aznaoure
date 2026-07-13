import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavLink } from "@/components/ui/nav-link.tsx";
import SEO from "@/components/SEO.tsx";
import { useAuth } from "@/context/AuthContext";

export default function ProfileLayout() {
  const { t } = useTranslation();
  const { logout } = useAuth();

  const linkClass =
    "block px-4 py-2 text-sm font-sans tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300";
  const activeLinkClass = "text-primary";

  return (
    <div className="min-h-screen">
      {/* Meta tags */}
      <SEO
        title="Profile"
        description="Manage your Aznaoure Art account, view your favorites and orders, and update your details."
        noindex
      />

      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <NavLink to="/profile" end className={linkClass} activeClassName={activeLinkClass}>
              {t("profile.nav.overview")}
            </NavLink>
            {/*<NavLink to="/profile/addresses" className={linkClass} activeClassName={activeLinkClass}>*/}
            {/*  {t("profile.nav.addresses")}*/}
            {/*</NavLink>*/}
            <NavLink to="/profile/favorites" className={linkClass} activeClassName={activeLinkClass}>
              {t("profile.nav.favorites")}
            </NavLink>
            {/*<NavLink to="/profile/orders" className={linkClass} activeClassName={activeLinkClass}>*/}
            {/*  {t("profile.nav.orders")}*/}
            {/*</NavLink>*/}
            <button
              onClick={logout}
              className="px-4 py-2 text-sm font-sans tracking-widest uppercase text-destructive hover:opacity-70 transition-opacity duration-300"
            >
              {t("profile.nav.logout")}
            </button>
          </div>

          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </section>
    </div>
  );
}