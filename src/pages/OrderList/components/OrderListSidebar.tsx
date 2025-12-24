import React from 'react';

// Placeholder avatar image
const imgAvatar = "https://www.figma.com/api/mcp/asset/316f77e3-d0e0-4214-8fe4-9c3904a3365b";

interface NavItem {
  id: string;
  label: string;
  icon?: string;
  isActive?: boolean;
  isTitle?: boolean;
}

export const OrderListSidebar: React.FC = () => {
  const topNavItems: NavItem[] = [
    { id: 'dashboard', label: 'Kênh người bán', icon: '🏠' },
    { id: 'orders', label: 'Đơn bán', icon: '📦', isActive: true },
    { id: 'products', label: 'Sản phẩm', icon: '📋' },
    { id: 'revenue', label: 'Doanh thu', icon: '💰' },
    { id: 'reviews', label: 'Đánh giá của tôi', icon: '⭐' },
  ];

  const salesNavItems: NavItem[] = [
    { id: 'sales-title', label: 'Bán hàng', isTitle: true },
    { id: 'promotion', label: 'Khuyến mãi', icon: '🎁' },
    { id: 'all-products', label: 'Tất cả sản phẩm', icon: '📦' },
    { id: 'violations', label: 'Sản phẩm vi phạm', icon: '⚠️' },
    { id: 'out-of-stock', label: 'Sản phẩm hết hàng', icon: '❌' },
    { id: 'product-stats', label: 'Thống kê sản phẩm', icon: '📊' },
    { id: 'return-refund', label: 'Trả hàng/Hoàn tiền', icon: '↩️' },
    { id: 'shop-rating', label: 'Đánh giá Shop', icon: '⭐' },
  ];

  const financeNavItems: NavItem[] = [
    { id: 'finance-title', label: 'Tài chính', isTitle: true },
    { id: 'revenue-stats', label: 'Doanh thu', icon: '💵' },
    { id: 'balance', label: 'Số dư TK Oreka', icon: '💳' },
  ];

  const accountNavItems: NavItem[] = [
    { id: 'account-title', label: 'Cài đặt', isTitle: true },
    { id: 'shop-profile', label: 'Hồ sơ Shop', icon: '👤' },
    { id: 'shipping', label: 'Vận chuyển', icon: '🚚' },
    { id: 'notifications', label: 'Cài đặt thông báo', icon: '🔔' },
  ];

  const renderNavItem = (item: NavItem) => {
    if (item.isTitle) {
      return (
        <div key={item.id} className="px-4 py-2">
          <h3 className="text-body-semibold text-content-neutral">
            {item.label}
          </h3>
        </div>
      );
    }

    return (
      <button
        key={item.id}
        className={`
          w-full flex items-center gap-3 px-4 py-2.5 rounded-md
          text-body-regular text-left transition-colors
          ${
            item.isActive
              ? 'bg-bg-primary-light text-content-primary'
              : 'text-content-neutral hover:bg-bg-canvas'
          }
        `}
      >
        {item.icon && <span className="text-lg">{item.icon}</span>}
        <span>{item.label}</span>
      </button>
    );
  };

  return (
    <aside className="w-[250px] flex-shrink-0">
      <div className="bg-bg-surface rounded-lg p-4 sticky top-4">
        {/* User Profile */}
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border-surface">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={imgAvatar}
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-body-bold text-content-neutral-strong truncate">
              Seller test (user)
            </p>
          </div>
        </div>

        {/* Navigation Groups */}
        <nav className="space-y-6">
          {/* Top Navigation */}
          <div className="space-y-1">
            {topNavItems.map(renderNavItem)}
          </div>

          {/* Sales Section */}
          <div className="space-y-1 pt-6 border-t border-border-surface">
            {salesNavItems.map(renderNavItem)}
          </div>

          {/* Finance Section */}
          <div className="space-y-1 pt-6 border-t border-border-surface">
            {financeNavItems.map(renderNavItem)}
          </div>

          {/* Account Section */}
          <div className="space-y-1 pt-6 border-t border-border-surface">
            {accountNavItems.map(renderNavItem)}
          </div>
        </nav>
      </div>
    </aside>
  );
};

