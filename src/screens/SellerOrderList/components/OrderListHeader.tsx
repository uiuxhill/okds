/**
 * Order List Header - Pixel-perfect from Figma
 * Figma: node-id=50-346
 * 
 * Contains:
 * - Sub Header (green disclaimer bar)
 * - Main Header (logo, search, profile, actions)
 * - Categories navigation
 */

import React from 'react';

// Figma asset URLs (7-day cache)
const imgLogoHeader = "https://www.figma.com/api/mcp/asset/54dd4168-27d3-408e-9459-2550cbb8fe53";
const imgImage2 = "https://www.figma.com/api/mcp/asset/52509665-84d9-4a82-bc75-ffde5756c309";
const imgIcon = "https://www.figma.com/api/mcp/asset/95cfe607-c525-4aef-a6df-341e055f8619";
const imgImg = "https://www.figma.com/api/mcp/asset/e56f71b3-3e16-48e1-9b10-89c00dcff388";
const imgGroup = "https://www.figma.com/api/mcp/asset/49a40ebc-8461-4537-9ccf-c42552b11c33";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/5c80193d-a3b0-4bcd-92f3-3e78e863e87a";
const imgImage = "https://www.figma.com/api/mcp/asset/49b30c8e-791b-4422-8a84-b9cce3c6288b";
const imgVnFlag = "https://www.figma.com/api/mcp/asset/49f816df-785e-48d3-8d3d-63c0a183ef2d";
const imgImg1 = "https://www.figma.com/api/mcp/asset/dfd7df97-de8d-402c-8648-ffc6256548c2";
const imgImage1 = "https://www.figma.com/api/mcp/asset/190fe780-bb45-4e25-968a-dd94a7b49e2d";
const imgImg2 = "https://www.figma.com/api/mcp/asset/157e2028-84c9-438f-bfd8-b6b2c03f0b59";
const imgImg3 = "https://www.figma.com/api/mcp/asset/d370fc54-ccb8-4a24-8829-5e9f3d7ad1bd";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/fcd1e906-ae2c-4d39-b153-53ac2b12fc7e";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/b38bd812-e46b-423f-a6d2-05d4a095414f";

export const OrderListHeader: React.FC = () => {
  const categories = [
    "Tất cả danh mục",
    "Sách",
    "Xe cộ",
    "Đồ cho nam",
    "Thời trang nữ",
    "Đồ cho mẹ và bé",
    "Đồ làm đẹp",
    "Đồ chơi & trò chơi",
    "Đồ thể thao & dã ngoại",
    "Đồ dùng nhà cửa",
    "Thiết bị điện tử",
  ];

  return (
    <header>
      {/* Sub Header - Green disclaimer bar (height: 44px) */}
      <div className="bg-accent-green-light flex items-center justify-between px-20 py-3">
        {/* Left: Disclaimers */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Disclaimer 1 */}
          <div className="flex items-center gap-1">
            <div className="w-5 h-5">
              <div className="w-full h-full">
                <div style={{ maskImage: `url('${imgGroup}')` }} className="w-full h-full">
                  <img src={imgGroup1} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <p className="text-body-regular text-content-neutral">
              Oreka - Nền tảng mua bán đồ cũ vì một trái đất xanh hơn!
            </p>
          </div>

          {/* Divider */}
          <div className="px-2">
            <p className="text-body-regular text-content-neutral">•</p>
          </div>

          {/* Disclaimer 2 */}
          <div className="flex items-center gap-1">
            <div className="w-4 h-4">
              <img src={imgImage} alt="" className="w-full h-full object-cover" />
            </div>
            <p className="text-body-regular text-content-neutral">
              Cam kết hoàn tiền 100% nếu sản phẩm không đúng mô tả!
            </p>
          </div>
        </div>

        {/* Right: Language & Support */}
        <div className="flex items-center gap-2">
          {/* Language selector */}
          <div className="flex items-center gap-0">
            <div className="py-0.5">
              <div className="w-6 h-4">
                <img src={imgVnFlag} alt="VN" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-5 h-5">
              <img src={imgImg1} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-5 bg-accent-gray-light" />

          {/* Support */}
          <div className="flex items-center gap-0">
            <div className="p-0.5">
              <img src={imgImage1} alt="" className="w-4 h-4" />
            </div>
            <p className="text-body-regular text-content-neutral text-center">Hỗ trợ</p>
          </div>
        </div>
      </div>

      {/* Main Header - White bar (height: 136px) */}
      <div className="bg-bg-surface flex flex-col gap-3 px-20 py-6">
        {/* Top row: Logo, Search, Profile, Actions (height: 40px) */}
        <div className="flex items-center gap-20 w-full">
          {/* Left: Logo + Search */}
          <div className="flex flex-1 items-center gap-4">
            {/* Logo (81px × 40px) */}
            <div className="py-2">
              <div className="w-[81px] h-6">
                <img src={imgLogoHeader} alt="Oreka" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Search bar */}
            <div className="flex-1 bg-bg-neutral-light border border-border-surface rounded-sm flex items-center justify-between p-2.5">
              <p className="text-body-regular text-content-neutral-strong">Tìm trên Oreka</p>
              <div className="w-5 h-5">
                <img src={imgImg2} alt="Search" className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* Right: Profile + Actions */}
          <div className="flex items-center justify-end gap-1">
            {/* Profile */}
            <div className="flex items-center gap-1 p-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <img src={imgImage2} alt="Profile" className="w-full h-full object-cover" style={{ objectPosition: '-39.21% 0' }} />
              </div>
              <div className="py-0.5">
                <p className="text-body-regular text-content-neutral-strong">Seller test (user)</p>
              </div>
              <div className="p-0.5">
                <div className="w-5 h-5">
                  <img src={imgImg3} alt="" className="w-full h-full" />
                </div>
              </div>
            </div>

            {/* Icon button 1 */}
            <div className="p-2 rounded-sm">
              <div className="p-1">
                <div className="w-4 h-4">
                  <img src={imgIcon1} alt="" className="w-full h-full" />
                </div>
              </div>
            </div>

            {/* Icon button 2 */}
            <div className="p-2 rounded-sm">
              <div className="p-1">
                <div className="w-4 h-4">
                  <img src={imgIcon2} alt="" className="w-full h-full" />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="bg-bg-primary px-10 py-2 rounded-sm">
              <p className="text-action-large-medium text-content-on-action text-center">Đăng bán</p>
            </div>
          </div>
        </div>

        {/* Categories row (height: 36px) */}
        <div className="flex items-center gap-2 overflow-x-auto w-full">
          {/* First category with icon */}
          <div className="flex items-center gap-1 p-2">
            <div className="w-5 h-5">
              <img src={imgIcon} alt="" className="w-full h-full" />
            </div>
            <p className="text-body-regular text-content-neutral-strong whitespace-nowrap">{categories[0]}</p>
            <div className="w-5 h-5">
              <img src={imgImg} alt="" className="w-full h-full" />
            </div>
          </div>

          {/* Divider */}
          <div className="h-9 w-px bg-accent-gray-light" />

          {/* Other categories */}
          {categories.slice(1).map((category, index) => (
            <div key={index} className="p-2">
              <p className="text-body-regular text-content-neutral-strong whitespace-nowrap">{category}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

