import React from "react";

export interface ShippingAddress {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}

interface Props {
    address: ShippingAddress;
    onAddressChange: (address: ShippingAddress) => void;
}

const INPUT_CLS = "w-full px-3 py-2 text-xs border border-neutral-200 rounded-sm focus:outline-none focus:border-neutral-900 bg-white";
const LABEL_CLS = "block text-[11px] font-medium text-neutral-600 mb-1";

const Field = ({
    label,
    field,
    address,
    onAddressChange,
    placeholder,
    colSpan,
}: {
    label: string;
    field: keyof ShippingAddress;
    address: ShippingAddress;
    onAddressChange: (a: ShippingAddress) => void;
    placeholder: string;
    colSpan?: string;
}) => (
    <div className={colSpan}>
        <label className={LABEL_CLS}>{label}</label>
        <input
            type="text"
            required
            value={address[field]}
            onChange={(e) => onAddressChange({ ...address, [field]: e.target.value })}
            placeholder={placeholder}
            className={INPUT_CLS}
        />
    </div>
);

export const CheckoutShippingForm: React.FC<Props> = ({
  address,
  onAddressChange,
}) => (
  <div className="bg-white rounded-2xl border border-neutral-200 p-5 xl:p-6">
    <h2 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-4">
      2. Alamat Pengiriman
    </h2>
    <div className="space-y-3.5">
      <Field
        label="Alamat Jalan *"
        field="street"
        address={address}
        onAddressChange={onAddressChange}
        placeholder="Jl. Sudirman No. 123, RT 01/RW 02"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <Field
          label="Kota / Kabupaten *"
          field="city"
          address={address}
          onAddressChange={onAddressChange}
          placeholder="Jakarta"
        />
        <Field
          label="Provinsi *"
          field="state"
          address={address}
          onAddressChange={onAddressChange}
          placeholder="DKI Jakarta"
        />
        <Field
          label="Kode Pos *"
          field="zip"
          address={address}
          onAddressChange={onAddressChange}
          placeholder="10110"
          colSpan="col-span-2 sm:col-span-1"
        />
      </div>
    </div>
  </div>
);
