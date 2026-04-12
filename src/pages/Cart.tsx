import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

const Cart = () => {
  const { i18n } = useTranslation();
  const { state, dispatch, totalPrice } = useCart();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 sm:py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="luxury-subheading mb-3 sm:mb-4">Your Selection</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
              Shopping Bag
            </h1>
            <div className="luxury-divider" />
          </motion.div>
        </div>
      </section>

      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {state.items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12 sm:py-16"
            >
              <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8">
                Your shopping bag is empty.
              </p>
              <Button variant="luxuryOutline" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/collections">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Continue Shopping
                </Link>
              </Button>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                {state.items.map((item, index) => (
                  <motion.div
                    key={item.product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-border"
                  >
                    <Link
                      to={`/product/${item.product.id}`}
                      className="flex-shrink-0 self-center sm:self-start"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.id}
                        className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-sm"
                      />
                    </Link>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-1">
                            {item.product.category}
                          </p>
                          <Link to={`/product/${item.product.id}`}>
                            <h3 className="font-serif text-lg sm:text-xl hover:text-primary transition-colors break-words">
                              {item.product.name[i18n.language]}
                            </h3>
                          </Link>
                        </div>
                        <p className="font-serif text-lg sm:text-xl mt-2 sm:mt-0">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4 sm:mt-6">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <button
                            onClick={() =>
                              dispatch({
                                type: "UPDATE_QUANTITY",
                                productId: item.product.id,
                                quantity: item.quantity - 1,
                              })
                            }
                            className="p-2 hover:bg-muted rounded-sm transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              dispatch({
                                type: "UPDATE_QUANTITY",
                                productId: item.product.id,
                                quantity: item.quantity + 1,
                              })
                            }
                            className="p-2 hover:bg-muted rounded-sm transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <button
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_ITEM",
                              productId: item.product.id,
                            })
                          }
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}

                <Link
                  to="/collections"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Continue Shopping
                </Link>
              </div>

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-1"
              >
                <div className="bg-secondary p-6 sm:p-8 rounded-sm sticky top-24">
                  <h2 className="font-serif text-xl sm:text-2xl mb-4 sm:mb-6">Order Summary</h2>

                  <div className="space-y-3 sm:space-y-4 pb-4 sm:pb-6 border-b border-border">
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-primary">Complimentary</span>
                    </div>
                  </div>

                  <div className="flex justify-between py-4 sm:py-6 text-base sm:text-lg">
                    <span className="font-medium">Total</span>
                    <span className="font-serif text-lg sm:text-xl">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>

                  <Button variant="luxury" size="lg" className="sm:size-xl w-full" asChild>
                    <Link to="/checkout">Proceed to Checkout</Link>
                  </Button>

                  <p className="text-muted-foreground text-xs sm:text-sm text-center mt-4 sm:mt-6">
                    Secure checkout with 256-bit SSL encryption
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
