"use client";

import { useState } from "react";

interface NavItem {
  id: string;
  nameAr: string;
  nameEn: string;
  url: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  badge?: string;
  section: string;
  isLogout?: boolean;
}

const SECTIONS = [
  { id: "main", label: "الرئيسية" },
  { id: "marketing", label: "التسويق" },
  { id: "automation", label: "الأتمتة" },
  { id: "analytics", label: "التحليلات" },
];

function DashboardIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="1" width="7" height="7" rx="2" fill={color} />
      <rect x="10" y="1" width="7" height="7" rx="2" fill={color} opacity="0.7" />
      <rect x="1" y="10" width="7" height="7" rx="2" fill={color} opacity="0.5" />
      <rect x="10" y="10" width="7" height="7" rx="2" fill={color} opacity="0.3" />
    </svg>
  );
}

function ContactsIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="7" cy="6" r="3" fill={color} />
      <path d="M1 16c0-3.3 2.7-6 6-6s6 2.7 6 6" fill={color} />
      <circle cx="13" cy="6" r="2.5" fill={color} opacity="0.5" />
      <path d="M11 16c0-2.5 1.5-4.5 3.5-5.5 1.5.8 2.5 2.8 2.5 5.5" fill={color} opacity="0.5" />
    </svg>
  );
}

function CampaignsIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="4" width="16" height="11" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M1 6l8 5 8-5" stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function CampaignBuilderIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2l7 4v0L9 10 2 6v0l7-4z" fill={color} />
      <path d="M2 9l7 4 7-4" stroke={color} strokeWidth="1.5" fill="none" opacity="0.7" />
      <path d="M2 12l7 4 7-4" stroke={color} strokeWidth="1.5" fill="none" opacity="0.4" />
    </svg>
  );
}

function SocialInboxIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2 3h14a1 1 0 011 1v8a1 1 0 01-1 1H6l-4 3V4a1 1 0 011-1z" fill={color} />
      <circle cx="6" cy="8.5" r="1" fill="white" />
      <circle cx="9" cy="8.5" r="1" fill="white" />
      <circle cx="12" cy="8.5" r="1" fill="white" />
    </svg>
  );
}

function AutomationRulesIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M10 1L4 10h4l-1 7 7-9h-4l1-7z" fill={color} />
    </svg>
  );
}

function AutomationBuilderIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="3" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M9 1v3M9 14v3M1 9h3M14 9h3M3.3 3.3l2.1 2.1M12.6 12.6l2.1 2.1M3.3 14.7l2.1-2.1M12.6 5.4l2.1-2.1" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function AutoRepliesIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="2" width="16" height="11" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="13" r="4" stroke={color} strokeWidth="1.5" fill="white" />
      <path d="M12 10v3l2 1" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function AnalyticsIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="10" width="3" height="7" rx="1" fill={color} opacity="0.5" />
      <rect x="7.5" y="5" width="3" height="12" rx="1" fill={color} opacity="0.75" />
      <rect x="13" y="1" width="3" height="16" rx="1" fill={color} />
    </svg>
  );
}

function SettingsIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="2.5" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M9 1v2M9 15v2M1 9h2M15 9h2M3.3 3.3l1.4 1.4M13.3 13.3l1.4 1.4M3.3 14.7l1.4-1.4M13.3 4.7l1.4-1.4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LogoutIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M7 2H4a2 2 0 00-2 2v10a2 2 0 002 2h3" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 13l4-4-4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 9H7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const NAV_ITEMS: NavItem[] = [
  {
    id: "dashboard",
    nameAr: "لوحة التحكم",
    nameEn: "Dashboard",
    url: "https://triggerio-dashboard.vercel.app",
    icon: <DashboardIcon color="#0EA5E9" />,
    iconBg: "#EFF6FF",
    iconColor: "#0EA5E9",
    section: "main",
  },
  {
    id: "contacts",
    nameAr: "جهات الاتصال",
    nameEn: "Contacts",
    url: "https://contacts-management.vercel.app",
    icon: <ContactsIcon color="#7C3AED" />,
    iconBg: "#F5F3FF",
    iconColor: "#7C3AED",
    section: "main",
  },
  {
    id: "campaigns",
    nameAr: "الحملات",
    nameEn: "Campaigns",
    url: "https://cold-email-campaigns.vercel.app",
    icon: <CampaignsIcon color="#F59E0B" />,
    iconBg: "#FFFBEB",
    iconColor: "#F59E0B",
    section: "marketing",
  },
  {
    id: "campaign-builder",
    nameAr: "منشئ الحملات",
    nameEn: "Campaign Builder",
    url: "https://campaign-builder.vercel.app",
    icon: <CampaignBuilderIcon color="#F97316" />,
    iconBg: "#FFF7ED",
    iconColor: "#F97316",
    section: "marketing",
  },
  {
    id: "social-inbox",
    nameAr: "صندوق الوارد",
    nameEn: "Social Inbox",
    url: "https://social-media-inbox.vercel.app",
    icon: <SocialInboxIcon color="#3B82F6" />,
    iconBg: "#EFF6FF",
    iconColor: "#3B82F6",
    badge: "3",
    section: "marketing",
  },
  {
    id: "automation-rules",
    nameAr: "قواعد الأتمتة",
    nameEn: "Automation Rules",
    url: "https://automation-rules-page.vercel.app",
    icon: <AutomationRulesIcon color="#7C3AED" />,
    iconBg: "#EDE9FE",
    iconColor: "#7C3AED",
    section: "automation",
  },
  {
    id: "automation-builder",
    nameAr: "منشئ الأتمتة",
    nameEn: "Automation Builder",
    url: "https://automation-builder-page.vercel.app",
    icon: <AutomationBuilderIcon color="#D97706" />,
    iconBg: "#FEF3C7",
    iconColor: "#D97706",
    section: "automation",
  },
  {
    id: "auto-replies",
    nameAr: "الردود التلقائية",
    nameEn: "Auto Replies",
    url: "https://auto-replies-page.vercel.app",
    icon: <AutoRepliesIcon color="#059669" />,
    iconBg: "#D1FAE5",
    iconColor: "#059669",
    section: "automation",
  },
  {
    id: "analytics",
    nameAr: "التحليلات",
    nameEn: "Analytics",
    url: "https://analytics-dashboard.vercel.app",
    icon: <AnalyticsIcon color="#2563EB" />,
    iconBg: "#DBEAFE",
    iconColor: "#2563EB",
    section: "analytics",
  },
];

const SETTINGS_ITEM: NavItem = {
  id: "settings",
  nameAr: "الإعدادات",
  nameEn: "Settings",
  url: "https://settings-page-build.vercel.app",
  icon: <SettingsIcon color="#6B7280" />,
  iconBg: "#F3F4F6",
  iconColor: "#6B7280",
  section: "bottom",
};

const LOGOUT_ITEM: NavItem = {
  id: "logout",
  nameAr: "تسجيل الخروج",
  nameEn: "",
  url: "",
  icon: <LogoutIcon color="#EF4444" />,
  iconBg: "#FEE2E2",
  iconColor: "#EF4444",
  section: "bottom",
  isLogout: true,
};

function NavItemButton({
  item,
  isActive,
  onClick,
}: {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}) {
  const isLogout = item.isLogout;

  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 relative transition-colors"
      style={{
        backgroundColor: isActive ? "#F5F3FF" : undefined,
        color: isLogout ? "#EF4444" : isActive ? "#7C3AED" : "#6B7280",
        padding: "11px 16px",
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = isLogout ? "#FEF2F2" : "#F9FAFB";
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = "transparent";
        }
      }}
    >
      {/* Active bar on right edge */}
      {isActive && (
        <div
          className="absolute top-0 right-0 h-full"
          style={{ width: 3, backgroundColor: "#7C3AED", borderRadius: "0 0 0 0" }}
        />
      )}

      {/* Icon wrapper */}
      <div
        className="flex items-center justify-center flex-shrink-0"
        style={{
          width: 38,
          height: 38,
          borderRadius: 9,
          backgroundColor: item.iconBg,
        }}
      >
        {item.icon}
      </div>

      {/* Text */}
      <div className="flex flex-col items-start min-w-0">
        <span
          className="font-semibold leading-tight"
          style={{ fontSize: 14 }}
        >
          {item.nameAr}
        </span>
        {item.nameEn && (
          <span
            className="leading-tight"
            style={{ fontSize: 11, color: "#9CA3AF" }}
          >
            {item.nameEn}
          </span>
        )}
      </div>

      {/* Badge */}
      {item.badge && (
        <span
          className="mr-auto flex items-center justify-center text-white font-semibold rounded-full"
          style={{
            fontSize: 10,
            minWidth: 18,
            height: 18,
            padding: "0 5px",
            backgroundColor: "#3B82F6",
          }}
        >
          {item.badge}
        </span>
      )}
    </button>
  );
}

export default function ShellPage() {
  const [activeUrl, setActiveUrl] = useState(
    "https://triggerio-dashboard.vercel.app"
  );
  const [activeId, setActiveId] = useState("dashboard");
  const [iframeError, setIframeError] = useState(false);

  const handleNavClick = (item: NavItem) => {
    if (item.isLogout) {
      localStorage.removeItem("triggerio_token");
      localStorage.removeItem("triggerio_user");
      window.location.href = "https://triggerio-auth.vercel.app";
      return;
    }
    setActiveUrl(item.url);
    setActiveId(item.id);
    setIframeError(false);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Iframe area — left side (in RTL, this is the start) */}
      <div className="flex-1 h-full relative">
        <iframe
          key={activeUrl}
          src={activeUrl}
          className="w-full h-full border-0"
          title="Triggerio App"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
          onError={() => setIframeError(true)}
          onLoad={() => setIframeError(false)}
        />
        {iframeError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white gap-4" dir="rtl">
            <p style={{ fontSize: 16, color: "#6B7280" }}>
              لا يمكن تحميل هذه الصفحة داخل الإطار
            </p>
            <button
              onClick={() => window.open(activeUrl, "_blank")}
              className="font-semibold rounded-lg"
              style={{
                padding: "10px 24px",
                backgroundColor: "#7C3AED",
                color: "white",
                fontSize: 14,
              }}
            >
              فتح في نافذة جديدة
            </button>
          </div>
        )}
      </div>

      {/* Sidebar — right side (in RTL, fixed right) */}
      <aside
        className="flex flex-col h-screen flex-shrink-0 bg-white"
        style={{
          width: 280,
          borderLeft: "1px solid #E5E7EB",
        }}
      >
        {/* Logo */}
        <div
          className="flex items-center"
          style={{
            padding: "18px 16px",
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <img src="/logo.png" alt="Triggerio" style={{ height: 40 }} />
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-2">
          {SECTIONS.map((section) => {
            const items = NAV_ITEMS.filter((i) => i.section === section.id);
            if (items.length === 0) return null;
            return (
              <div key={section.id}>
                <div
                  className="uppercase font-semibold"
                  style={{
                    fontSize: 11,
                    color: "#9CA3AF",
                    padding: "10px 20px 4px",
                  }}
                >
                  {section.label}
                </div>
                {items.map((item) => (
                  <NavItemButton
                    key={item.id}
                    item={item}
                    isActive={activeId === item.id}
                    onClick={() => handleNavClick(item)}
                  />
                ))}
              </div>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div style={{ borderTop: "1px solid #E5E7EB" }} className="py-2">
          <NavItemButton
            item={SETTINGS_ITEM}
            isActive={activeId === "settings"}
            onClick={() => handleNavClick(SETTINGS_ITEM)}
          />
          <NavItemButton
            item={LOGOUT_ITEM}
            isActive={false}
            onClick={() => handleNavClick(LOGOUT_ITEM)}
          />
        </div>
      </aside>
    </div>
  );
}
