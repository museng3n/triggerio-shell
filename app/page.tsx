"use client";

import { useState, useEffect } from "react";

interface SubItem {
  id: string;
  nameAr: string;
  url: string;
  icon: React.ReactNode;
  iconBg: string;
}

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
  subItems?: SubItem[];
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

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#E1306C">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
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
    url: "https://contacts-management-plum.vercel.app",
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
    url: "https://triggerio-campaign-builder.vercel.app",
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
    subItems: [
      {
        id: "inbox-facebook",
        nameAr: "Facebook",
        url: "https://social-media-inbox.vercel.app?platform=facebook",
        icon: <FacebookIcon />,
        iconBg: "#EBF3FF",
      },
      {
        id: "inbox-instagram",
        nameAr: "Instagram",
        url: "https://social-media-inbox.vercel.app?platform=instagram",
        icon: <InstagramIcon />,
        iconBg: "#FDE8F0",
      },
    ],
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
    url: "https://analytics-dashboard-zeta-tawny.vercel.app",
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
  hasSubmenu,
  isOpen,
}: {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
  hasSubmenu?: boolean;
  isOpen?: boolean;
}) {
  const isLogout = item.isLogout;

  return (
    <button
      onClick={onClick}
      className="group w-full flex items-center gap-3 relative transition-colors"
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
          className="font-semibold leading-tight transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:via-pink-400 group-hover:to-orange-300 group-hover:bg-clip-text group-hover:text-transparent"
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

      {/* Chevron for submenu — between text and badge */}
      {hasSubmenu && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="flex-shrink-0"
          style={{
            transition: "transform 0.2s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <path
            d="M3.5 5.25L7 8.75L10.5 5.25"
            stroke="#9CA3AF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

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
  const [token, setToken] = useState<string | null>(null);
  const [activeUrl, setActiveUrl] = useState(
    "https://triggerio-dashboard.vercel.app"
  );
  const [activeId, setActiveId] = useState("dashboard");
  const [iframeError, setIframeError] = useState(false);
  const [inboxOpen, setInboxOpen] = useState(false);

  // Wake up Render backend (free tier sleeps after inactivity)
  useEffect(() => {
    fetch('https://triggerio-backend.onrender.com/api/health', {
      method: 'GET',
      signal: AbortSignal.timeout(90000)
    }).catch(() => {}); // Ignore errors - just wake it up
  }, []);

  // Listen for AUTH_REQUIRED from iframe apps on 401
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin.includes('vercel.app')) {
        if (event.data?.type === 'AUTH_REQUIRED') {
          // Don't redirect if token was just set (fresh login grace period)
          const tokenSetTime = localStorage.getItem('authTokenTime');
          const now = Date.now();
          if (tokenSetTime && (now - parseInt(tokenSetTime)) < 15000) {
            return; // Ignore AUTH_REQUIRED within 15 seconds of login
          }
          localStorage.removeItem('authToken');
          localStorage.removeItem('authTokenTime');
          window.location.href = 'https://triggerio-auth.vercel.app/login';
        }
        if (event.data?.type === 'NAVIGATE' && event.data.page) {
          const navItem = NAV_ITEMS.find(item => item.id === event.data.page);
          if (navItem) {
            let url = navItem.url;
            if (event.data.ruleId) {
              const sep = url.includes('?') ? '&' : '?';
              url = `${url}${sep}ruleId=${event.data.ruleId}`;
            }
            setActiveUrl(url);
            setActiveId(navItem.id);
            setIframeError(false);
          }
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Handle token from URL or localStorage
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get("token");
    if (urlToken && urlToken !== 'undefined' && urlToken.length > 10) {
      localStorage.setItem("authToken", urlToken);
      localStorage.setItem("authTokenTime", Date.now().toString());
      setToken(urlToken);
      window.history.replaceState({}, "", window.location.pathname);
    } else {
      const storedToken = localStorage.getItem("authToken");
      if (storedToken && storedToken !== "undefined" && storedToken.length > 10) {
        setToken(storedToken);
      } else {
        localStorage.removeItem("authToken");
        window.location.href = "https://triggerio-auth.vercel.app/login";
      }
    }
  }, []);

  // Build iframe URL with token
  const getIframeUrl = (baseUrl: string) => {
    console.log('getIframeUrl called - token:', token, 'baseUrl:', baseUrl);
    if (!token) return baseUrl;
    const separator = baseUrl.includes("?") ? "&" : "?";
    return `${baseUrl}${separator}token=${token}`;
  };

  const handleNavClick = (item: NavItem) => {
    if (item.isLogout) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("triggerio_user");
      window.location.href = "https://triggerio-auth.vercel.app";
      return;
    }
    if (item.subItems) {
      setInboxOpen((prev) => !prev);
      return;
    }
    setActiveUrl(item.url);
    setActiveId(item.id);
    setIframeError(false);
  };

  const handleSubItemClick = (subItem: SubItem) => {
    setActiveUrl(subItem.url);
    setActiveId(subItem.id);
    setIframeError(false);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Iframe area — left side (in RTL, this is the start) */}
      <div className="h-full relative" style={{ width: "calc(100vw - 280px)", minWidth: 0 }}>
        {token ? (
          <iframe
            key={activeUrl + token}
            src={getIframeUrl(activeUrl)}
            className="w-full h-full border-0"
            title="Triggerio App"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
            onError={() => setIframeError(true)}
            onLoad={() => { setIframeError(false); console.log('iframe loaded with src:', getIframeUrl(activeUrl)); }}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          </div>
        )}
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
        className="flex flex-col h-screen bg-white"
        style={{
          width: 280,
          minWidth: 280,
          flexShrink: 0,
          position: "relative",
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
        <nav className="flex-1 overflow-y-auto py-2" style={{ paddingBottom: 120 }}>
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
                {items.map((item) => {
                  const isSubmenuOpen = item.id === "social-inbox" && inboxOpen;
                  const hasSubmenu = !!item.subItems;
                  const isItemActive = activeId === item.id || (hasSubmenu && item.subItems!.some(s => activeId === s.id));

                  return (
                    <div key={item.id}>
                      <NavItemButton
                        item={item}
                        isActive={isItemActive}
                        onClick={() => handleNavClick(item)}
                        hasSubmenu={hasSubmenu}
                        isOpen={isSubmenuOpen}
                      />
                      {hasSubmenu && (
                        <div style={{ display: isSubmenuOpen ? "block" : "none" }}>
                          {item.subItems!.map((sub) => (
                            <button
                              key={sub.id}
                              onClick={() => handleSubItemClick(sub)}
                              className="group w-full flex items-center gap-3 transition-colors"
                              style={{
                                paddingRight: 52,
                                paddingLeft: 16,
                                paddingTop: 8,
                                paddingBottom: 8,
                                backgroundColor: activeId === sub.id ? "#F5F3FF" : undefined,
                                color: activeId === sub.id ? "#7C3AED" : "#6B7280",
                              }}
                              onMouseEnter={(e) => {
                                if (activeId !== sub.id) {
                                  e.currentTarget.style.backgroundColor = "#F9FAFB";
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (activeId !== sub.id) {
                                  e.currentTarget.style.backgroundColor = "transparent";
                                }
                              }}
                            >
                              <div
                                className="flex items-center justify-center flex-shrink-0"
                                style={{
                                  width: 28,
                                  height: 28,
                                  borderRadius: 7,
                                  backgroundColor: sub.iconBg,
                                }}
                              >
                                {sub.icon}
                              </div>
                              <span
                                className="font-medium leading-tight transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:via-pink-400 group-hover:to-orange-300 group-hover:bg-clip-text group-hover:text-transparent"
                                style={{ fontSize: 13 }}
                              >
                                {sub.nameAr}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "white",
            borderTop: "1px solid #E5E7EB",
          }}
          className="py-2"
        >
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
