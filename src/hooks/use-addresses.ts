import { useCallback, useEffect, useState } from "react";
import { Address, AddressFormData } from "@/lib/addresses.ts";
import { fetchAddresses, createAddress, deleteAddress } from "@/api/addresses.ts";
import { useTranslation } from "react-i18next";

export function useAddresses() {
  const { t } = useTranslation();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadAddresses = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setAddresses(await fetchAddresses());
    } catch {
      setError(t("address.errors.failedToFetch"));
    } finally {
      setLoading(false);
    }
  }, [t]);

  useEffect(() => {
    loadAddresses();
  }, [loadAddresses]);

  const addAddress = useCallback(async (data: AddressFormData) => {
    const newAddress = await createAddress(data);
    setAddresses((prev) => {
      const updated = newAddress.is_default
        ? prev.map((a) => ({ ...a, is_default: false }))
        : prev;
      return [...updated, newAddress];
    });
    return newAddress;
  }, []);

  const removeAddress = useCallback(
    async (id: number) => {
      const previous = addresses;
      setAddresses((prev) => prev.filter((a) => a.id !== id));
      try {
        await deleteAddress(id);
      } catch (err) {
        setAddresses(previous);
        throw err;
      }
    },
    [addresses]
  );

  return { addresses, loading, error, addAddress, removeAddress, reload: loadAddresses };
}