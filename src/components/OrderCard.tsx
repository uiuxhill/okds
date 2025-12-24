import React from 'react';

// Placeholder images from Figma
const imgLogo = "https://www.figma.com/api/mcp/asset/7e9e6f0d-8e3e-48f0-a06d-b56d4cb19c1a";
const imgIcon = "https://www.figma.com/api/mcp/asset/6f5f4391-38a2-497c-a17f-c5d67ed91b18";
const imgProduct = "https://www.figma.com/api/mcp/asset/429a9c19-7fb4-4575-83a1-0b9952565afc";
const imgInfo = "https://www.figma.com/api/mcp/asset/fb7e9d6f-ab71-41ed-88cf-022a773850f0";
const imgArrowActive = "https://www.figma.com/api/mcp/asset/88f7630b-fae1-4a7c-ab0c-160ed2933063";
const imgArrowInactive = "https://www.figma.com/api/mcp/asset/01262088-7c7c-4f47-ad1f-b32f4e30db03";

interface OrderCardProps {
  sellerName?: string;
  timestamp?: string;
  productTitle?: string;
  productImage?: string;
  productCondition?: string;
  productDetails?: string;
  price?: string;
  message?: string;
  infoMessage?: string;
  onConfirm?: () => void;
  onReject?: () => void;
}

export const OrderCard: React.FC<OrderCardProps> = ({
  sellerName = "Seller Vi1 store",
  timestamp = "21-11-2025 14:09",
  productTitle = "Hàng hoá 1.5% từ seller Vi1",
  productImage = imgProduct,
  productCondition = "Như mới",
  productDetails = "Annj: Kwjwja, Số lượng: 1",
  price = "500,000 vnđ",
  message = "Sản phẩm này của bạn đã được đặt mua. Hãy xác nhận đơn hàng để bán nhé",
  infoMessage = "Đơn đặt hàng này cần xác nhận. Thời hạn xác nhận: 22-11-2025 02:09",
  onConfirm,
  onReject,
}) => {
  return (
    <div className="w-full max-w-[1057px] mx-auto bg-bg-surface rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-2.5 border-b border-border-surface">
        <div className="flex items-center gap-1">
          {/* Logo */}
          <div className="w-5 h-[21.53px] flex-shrink-0">
            <img src={imgLogo} alt="Store logo" className="w-full h-full object-cover" />
          </div>
          {/* Store Name */}
          <h3 className="text-body-bold text-content-neutral">
            {sellerName}
          </h3>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Contact Link */}
          <button className="flex items-center gap-1 text-content-secondary hover:underline">
            <img src={imgIcon} alt="" className="w-[14px] h-[14px]" />
            <span className="text-body-regular">Yêu cầu liên hệ với người mua</span>
          </button>
          
          {/* Timestamp */}
          <span className="text-body-regular text-content-neutral">
            {timestamp}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-start gap-4 p-5 border-b border-border-surface">
        {/* Product Info */}
        <div className="flex flex-1 gap-3">
          {/* Product Image */}
          <div className="w-[100px] h-[100px] flex-shrink-0 overflow-hidden rounded">
            <img 
              src={productImage} 
              alt={productTitle}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 flex flex-col justify-between min-h-[100px]">
            {/* Title */}
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-h4-bold text-content-neutral-strong">
                {productTitle}
              </h4>
              <button className="text-body-regular text-content-secondary hover:underline">
                (Chi tiết)
              </button>
            </div>

            {/* Details and Status */}
            <div className="flex flex-col gap-1">
              {/* Condition */}
              <div className="flex items-center gap-1">
                <span className="text-body-regular text-content-neutral">
                  Tình trạng: {productCondition}
                </span>
                <img src={imgInfo} alt="" className="w-[18px] h-[14px]" />
              </div>

              {/* Product Details */}
              <p className="text-body-regular text-content-neutral">
                {productDetails}
              </p>

              {/* Status Progress */}
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className="text-body-regular text-content-selected-orange">
                  Xác nhận
                </span>
                <img src={imgArrowActive} alt="" className="w-[12.5px] h-[10px]" />
                
                <span className="text-body-regular text-content-neutral-light">
                  Vận chuyển
                </span>
                <img src={imgArrowInactive} alt="" className="w-[12.5px] h-[10px]" />
                
                <span className="text-body-regular text-content-neutral-light">
                  Đánh giá người mua
                </span>
                <img src={imgArrowInactive} alt="" className="w-[12.5px] h-[10px]" />
                
                <span className="text-body-regular text-content-neutral-light">
                  Hoàn thành
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="flex-shrink-0 text-body-regular text-content-neutral">
          {price}
        </div>
      </div>

      {/* Message */}
      <div className="px-5 py-2.5 bg-bg-surface">
        <p className="text-body-regular text-content-neutral-light">
          {message}
        </p>
      </div>

      {/* Info Banner with Actions */}
      <div className="flex items-center gap-4 px-5 py-2.5 bg-bg-info-light">
        <p className="flex-1 text-body-regular text-content-info">
          {infoMessage}
        </p>
        
        <div className="flex items-center gap-3">
          {/* Confirm Button */}
          <button
            onClick={onConfirm}
            className="
              px-3 py-1.5 rounded-sm
              bg-bg-primary hover:bg-bg-primary-hover active:bg-bg-primary-press
              text-action-medium text-content-on-action
              transition-colors focus-ring
            "
          >
            Xác nhận bán
          </button>

          {/* Reject Button */}
          <button
            onClick={onReject}
            className="
              px-3 py-1.5 rounded-sm
              border border-border-primary
              text-action-medium text-content-primary
              hover:bg-bg-primary-light
              transition-colors focus-ring
            "
          >
            Từ chối bán
          </button>
        </div>
      </div>
    </div>
  );
};

