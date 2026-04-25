import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Check, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { getLang } from "@/lib/get-lang.ts";
import { formatPrice } from "@/lib/utils";

const Checkout = () => {
  const { i18n } = useTranslation();
  const lang = getLang(i18n.language);
  const { state, dispatch, totalPrice } = useCart();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simulate processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsComplete(true);
      dispatch({ type: "CLEAR_CART" });

      toast({
        title: "Order Confirmed",
        description: "Thank you for your purchase. You will receive a confirmation email shortly.",
      });
    } catch (error) {
      console.error("Error processing order:", error);
      toast({
        title: "Error",
        description: "There was an error processing your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 sm:py-24 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md text-center w-full"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 sm:mb-8">
            <Check className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">Thank You</h1>
          <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 px-4">
            Your order has been placed successfully. We'll send you an email
            confirmation with your order details and tracking information.
          </p>
          <Button variant="luxury" size="lg" className="w-full sm:w-auto" asChild>
            <Link to="/collections">Continue Shopping</Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 sm:py-24 px-4">
        <div className="text-center w-full">
          <h1 className="font-serif text-2xl sm:text-3xl mb-4">Your Bag is Empty</h1>
          <Button variant="luxuryOutline" className="w-full sm:w-auto" asChild>
            <Link to="/collections">Browse Collections</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Link
          to="/cart"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Cart
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Checkout Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="font-serif text-2xl sm:text-3xl mb-6 sm:mb-8">Checkout</h1>

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Contact */}
              <div className="bg-background p-4 sm:p-6 rounded-sm">
                <h2 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="mt-1 text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="mt-1 text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping */}
              <div className="bg-background p-4 sm:p-6 rounded-sm">
                <h2 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        required
                        placeholder="First name"
                        className="mt-1 text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        required
                        placeholder="Last name"
                        className="mt-1 text-base"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      required
                      placeholder="Street address"
                      className="mt-1 text-base"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        required
                        placeholder="City"
                        className="mt-1 text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input
                        id="zip"
                        required
                        placeholder="ZIP"
                        className="mt-1 text-base"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      required
                      placeholder="Country"
                      className="mt-1 text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-background p-4 sm:p-6 rounded-sm">
                <h2 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4">Payment</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      required
                      placeholder="1234 5678 9012 3456"
                      className="mt-1 text-base"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        required
                        placeholder="MM/YY"
                        className="mt-1 text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvc">CVC</Label>
                      <Input
                        id="cvc"
                        required
                        placeholder="123"
                        className="mt-1 text-base"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                variant="luxury"
                size="lg"
                className="sm:size-xl w-full"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  "Processing..."
                ) : (
                  <>
                    <Lock className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Place Order — </span>
                    {formatPrice(totalPrice)}
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:sticky lg:top-24 lg:self-start order-first lg:order-last"
          >
            <div className="bg-background p-6 sm:p-8 rounded-sm">
              <h2 className="font-serif text-xl sm:text-2xl mb-4 sm:mb-6">Order Summary</h2>

              <div className="space-y-4 sm:space-y-6 pb-4 sm:pb-6 border-b border-border">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex gap-3 sm:gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.id}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-sm flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm sm:text-base break-words">{item.product.name[lang]}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium text-sm sm:text-base flex-shrink-0">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 sm:space-y-4 py-4 sm:py-6 border-b border-border">
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
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
