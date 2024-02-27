export interface IProductBannerItem {
  image: string;
  link: string;
  title: string;
  description: string;
  _id: string;
}

export interface IProductInstallment {
  installment: number;
  amounts: number[];
  active_status: boolean;
  _id: string;
}

export interface IInstallmentDetail {
  id: string;
  installment: number;
  amount: number;
  status: string;
  snap_url: string;
}
