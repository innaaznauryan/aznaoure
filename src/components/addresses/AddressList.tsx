import { useState } from "react";
import { Plus, Trash2, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { useAddresses } from "@/hooks/use-addresses";
import { AddressFormModal } from "./AddressFormModal";
import { Address } from "@/lib/addresses";

export function AddressList() {
  const { t } = useTranslation();
  const { addresses, loading, error, addAddress, removeAddress } = useAddresses();
  const [modalOpen, setModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const handleDelete = async (id: number) => {
    setDeletingId(id);
    try {
      await removeAddress(id);
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="animate-fade-in text-center py-16 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{t("address.list.title")}</h2>
        <Button size="sm" onClick={() => setModalOpen(true)}>
          <Plus className="h-4 w-4 mr-1" />
          {t("address.list.addNew")}
        </Button>
      </div>

      {addresses.length === 0 ? (
        <p className="text-muted-foreground text-sm">{t("address.list.empty")}</p>
      ) : (
        <ul className="space-y-3">
          {addresses.map((addr: Address) => (
            <li key={addr.id} className="flex items-start justify-between rounded-lg border p-4">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{addr.address}, {addr.city}</p>
                  <p className="text-sm text-muted-foreground">{addr.zip_code}, {addr.country}</p>
                  {addr.phone && <p className="text-sm text-muted-foreground">{addr.phone}</p>}
                  {addr.is_default && (
                    <Badge variant="secondary" className="mt-1">
                      {t("address.list.default")}
                    </Badge>
                  )}
                </div>
              </div>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="ghost" size="icon" disabled={deletingId === addr.id}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>{t("address.deleteAddress")}</AlertDialogTitle>
                    <AlertDialogDescription>{t("address.deleteDesc")}</AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>{t("address.cancel")}</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDelete(addr.id)}>
                      {t("address.delete")}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </li>
          ))}
        </ul>
      )}

      <AddressFormModal open={modalOpen} onOpenChange={setModalOpen} onSubmit={addAddress} />
    </div>
  );
}