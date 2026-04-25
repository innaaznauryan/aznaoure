import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { getLang } from "@/lib/get-lang.ts";
import { formatPrice } from "@/lib/utils";

export const CartDrawer = () => {
  const { i18n } = useTranslation();
  const lang = getLang(i18n.language);
  const { state, dispatch, totalItems, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/50 z-50"
            onClick={() => dispatch({ type: "CLOSE_CART" })}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-elevated flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
              <div className="flex items-center gap-2 sm:gap-3">
                <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
                <h2 className="font-serif text-lg sm:text-xl">Your Bag</h2>
                <span className="text-muted-foreground text-sm">({totalItems})</span>
              </div>
              <button
                onClick={() => dispatch({ type: "CLOSE_CART" })}
                className="p-2 hover:bg-muted rounded-sm transition-colors"
                aria-label="Close cart"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-4">
                  <ShoppingBag className="h-12 w-12 sm:h-16 sm:w-16 text-muted-foreground/30 mb-4" />
                  <p className="text-muted-foreground text-sm sm:text-base">Your bag is empty</p>
                  <Button
                    variant="luxuryOutline"
                    size="lg"
                    className="mt-6 w-full sm:w-auto"
                    onClick={() => dispatch({ type: "CLOSE_CART" })}
                    asChild
                  >
                    <Link to="/collections">Explore Collections</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-6">
                  {state.items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-border last:border-0"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.id}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-sm flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-base sm:text-lg break-words">{item.product.name[lang]}</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm capitalize">
                          {item.product.category}
                        </p>
                        <p className="font-medium mt-1 text-sm sm:text-base">
                          {formatPrice(item.product.price)}
                        </p>
                        <div className="flex items-center gap-2 sm:gap-3 mt-3">
                          <button
                            onClick={() =>
                              dispatch({
                                type: "UPDATE_QUANTITY",
                                productId: item.product.id,
                                quantity: item.quantity - 1,
                              })
                            }
                            className="p-1 hover:bg-muted rounded-sm transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                          </button>
                          <span className="w-6 sm:w-8 text-center text-sm sm:text-base">{item.quantity}</span>
                          <button
                            onClick={() =>
                              dispatch({
                                type: "UPDATE_QUANTITY",
                                productId: item.product.id,
                                quantity: item.quantity + 1,
                              })
                            }
                            className="p-1 hover:bg-muted rounded-sm transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                          </button>
                          <button
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_ITEM",
                                productId: item.product.id,
                              })
                            }
                            className="ml-auto text-muted-foreground hover:text-destructive text-xs sm:text-sm transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {state.items.length > 0 && (
              <div className="p-4 sm:p-6 border-t border-border space-y-3 sm:space-y-4">
                <div className="flex justify-between text-base sm:text-lg">
                  <span>Subtotal</span>
                  <span className="font-serif">{formatPrice(totalPrice)}</span>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Shipping and taxes calculated at checkout
                </p>
                <Button
                  variant="luxury"
                  size="lg"
                  className="sm:size-xl w-full"
                  onClick={() => dispatch({ type: "CLOSE_CART" })}
                  asChild
                >
                  <Link to="/checkout">Proceed to Checkout</Link>
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
