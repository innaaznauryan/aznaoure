import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/context/AuthContext";

export default function ProfileOverview() {
  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-md mx-auto text-center"
    >
      <h2 className="font-serif text-2xl sm:text-3xl my-6 sm:mb-8">
        {t("profile.heading")}
      </h2>

      <div className="space-y-4 sm:space-y-6">
        <div>
          <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-1">
            {t("profile.name")}
          </p>
          <p className="text-base sm:text-lg">
            {user?.first_name} {user?.last_name}
          </p>
        </div>

        <div>
          <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-1">
            {t("profile.email")}
          </p>
          <p className="text-base sm:text-lg">{user?.email}</p>
        </div>

        <div>
          <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-1">
            {t("profile.phone")}
          </p>
          <p className="text-base sm:text-lg">{user?.phone || "—"}</p>
        </div>
      </div>
    </motion.div>
  );
}