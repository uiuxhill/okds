/**
 * Order List Sidebar - Pixel-perfect from Figma
 * Figma: node-id=52-1508
 * 
 * Width: 250px
 * Contains: User profile + Navigation menu
 */

import React from 'react';

// Figma asset URLs
const imgAvatar = "https://www.figma.com/api/mcp/asset/1468e739-128c-4015-948a-b72e5bad83a2";
const imgIcon = "https://www.figma.com/api/mcp/asset/8eaf22c7-1e21-4659-bccd-84ce9d5cfe4d";
const imgIconActive = "https://www.figma.com/api/mcp/asset/675729de-4add-403b-8152-96a1adc0ac4c";

interface NavItemProps {
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, isActive = false }) => {
  return (
    <div
      className={`
        flex items-center gap-2.5 p-2.5 w-full
        ${isActive ? 'bg-bg-surface border-l-2 border-border-selected-orange rounded-r-full' : ''}
      `}
    >
      <div className="w-5 h-5 flex-shrink-0">
        <img src={isActive ? imgIconActive : imgIcon} alt="" className="w-full h-full" />
      </div>
      <p
        className={`
          text-body-regular flex-1
          ${isActive ? 'text-content-selected-orange' : 'text-content-neutral-strong'}
        `}
      >
        {label}
      </p>
    </div>
  );
};

interface SectionTitleProps {
  label: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ label }) => {
  return (
    <div className="py-1.5">
      <p className="text-h4-bold text-content-neutral-strong">{label}</p>
    </div>
  );
};

export const OrderListSidebar: React.FC = () => {
  return (
    <aside className="w-[250px] flex-shrink-0 flex flex-col gap-6">
      {/* User Profile (48px height) */}
      <div className="flex items-center gap-2 w-full">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={imgAvatar}
            alt="Profile"
            className="w-full h-full object-cover"
            style={{ objectPosition: '-39.21% 0', transform: 'scale(1.7842)' }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-body-large-bold text-content-neutral-strong max-h-12 overflow-hidden text-ellipsis">
            Seller Name Just 2 line, if longer it be showed like this...
          </p>
        </div>
      </div>

      {/* Top Navigation */}
      <div className="flex flex-col w-full">
        <NavItem label="Hồ sơ của tôi" />
        <NavItem label="Tin nhắn" />
        <NavItem label="Tiền của tôi" />
        <NavItem label="Thông báo" />
        <NavItem label="Đánh giá của tôi" />
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-accent-gray-light" />

      {/* Bán hàng Section */}
      <div className="flex flex-col w-full">
        <SectionTitle label="Bán hàng" />
        <NavItem label="Thêm sản phẩm" />
        <NavItem label="Tất cả sản phẩm" />
        <NavItem label="Đơn bán" isActive={true} />
        <NavItem label="Hồ sơ shop" />
        <NavItem label="Kết nối API" />
        <NavItem label="Hỏi đáp" />
        <NavItem label="Xác minh danh tính" />
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-accent-gray-light" />

      {/* Mua hàng Section */}
      <div className="flex flex-col w-full">
        <SectionTitle label="Mua hàng" />
        <NavItem label="Yêu thích" />
        <NavItem label="Đơn mua" />
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-accent-gray-light" />

      {/* Cài đặt Section */}
      <div className="flex flex-col w-full">
        <SectionTitle label="Cài đặt" />
        <NavItem label="Trung tâm trợ giúp" />
        <NavItem label="Đóng góp ý kiến" />
        <NavItem label="Đăng xuất" />
      </div>
    </aside>
  );
};

