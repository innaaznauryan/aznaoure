import SEO from "@/components/SEO.tsx";
import { AddressList } from "@/components/addresses/AddressList";

const ProfileAddresses = () => {

  return (
    <div className="min-h-screen">
      {/* Meta tags */}
      <SEO
        title="Addresses"
        description="Manage your saved shipping addresses for Aznaoure Art."
        noindex
      />

      {/* Addresses Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AddressList />
        </div>
      </section>
    </div>
  );
};

export default ProfileAddresses;