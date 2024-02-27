export interface IPaymentMethod {
  bank_transfers: IPaymentBankTransfer[];
  ewallets: IPaymentWallet[];
}

export interface IPaymentWallet {
  payment_type: string;
  icon_urls?: string;
  display_name: string;
  admin_fee: {
    IDR: {
      currency_val: number;
      currency: string;
    };
  };
  waiting_time: {
    duration: number;
    unit: number;
  };
  value: {
    value: number;
    curency: string;
  };
}

export interface IPaymentBankTransfer {
  payment_type: string;
  icon_urls?: string;
  display_name: string;
  admin_fee: {
    IDR: {
      currency_val: number;
      currency: string;
    };
  };
  waiting_time: {
    duration: number;
    unit: number;
  };
  value: {
    value: number;
    curency: string;
  };
}
