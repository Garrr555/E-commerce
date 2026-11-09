import React from "react";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image?: string;
  variant?: string;
}

interface CheckoutOrderSummaryProps {
  cart: CartItem[];
  subtotal: number;
  shippingCost: number;
  isFreeShipping: boolean;
  grandTotal: number;
  submitting: boolean;
}

export const CheckoutOrderSummary: React.FC<CheckoutOrderSummaryProps> = ({
  cart,
  subtotal,
  shippingCost,
  isFreeShipping,
  grandTotal,
  submitting,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200 p-5">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-4">
        Order Summary
      </h2>

      {/* Cart preview */}
      <div className="divide-y divide-neutral-100 max-h-60 overflow-y-auto mb-4">
        {cart.map((item, idx) => (
          <div key={idx} className="py-2.5 flex items-center gap-3 text-xs">
            <div className="w-9 h-9 rounded-xs bg-neutral-100 overflow-hidden shrink-0 border border-neutral-200">
              {item.image && (
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-neutral-900 truncate">
                {item.name}
              </p>
              <p className="text-[11px] text-neutral-400">
                Qty: {item.quantity} {item.variant ? `(${item.variant})` : ""}
              </p>
            </div>
            <span className="font-mono font-medium text-neutral-900">
              Rp {(item.price * item.quantity).toLocaleString("id-ID")}
            </span>{" "}
          </div>
        ))}
      </div>

      {/* Calculations */}
      <div className="space-y-2 text-xs border-t border-neutral-100 pt-3 text-neutral-600">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-mono font-medium text-neutral-900">
            Rp {subtotal.toLocaleString("id-ID")}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Ongkos Kirim</span>
          <span className="font-mono font-medium text-neutral-900">
            {isFreeShipping ? (
              <span className="store-accent-text font-medium font-sans">
                GRATIS
              </span>
            ) : (
              `Rp ${shippingCost.toLocaleString("id-ID")}`
            )}
          </span>
        </div>
        <div className="flex justify-between text-sm font-semibold text-neutral-900 pt-2 border-t border-neutral-100">
          <span>Total Pembayaran</span>
          <span className="font-mono font-bold">
            Rp {grandTotal.toLocaleString("id-ID")}
          </span>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full mt-5 py-2.5 px-4 rounded-full text-white text-xs font-semibold transition flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-xs active:scale-[0.98] store-accent-btn"
      >
        {submitting
          ? "Memproses Pesanan..."
          : `Buat Pesanan • Rp ${grandTotal.toLocaleString("id-ID")}`}
      </button>
    </div>
  );
};
