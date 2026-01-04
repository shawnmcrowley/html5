"use client"

import * as React from "react"
import {
  ChevronRight,
  ChevronDown,
  Home,
  ShoppingCart,
  Package,
  Factory,
  CreditCard,
  BarChart2,
  Lightbulb,
  CheckSquare,
  Calculator,
  Users,
  ListTodo,
  Settings,
  FileText,
  Plus,
  Star,
  ExternalLink,
} from "lucide-react"

// TypeScript interface removed

// Unified menu data structure with recursive nesting
const menuItems = [
  {
    title: "Home",
    icon: Home,
    url: "#",
    type: "link",
  },
  {
    title: "Sales & Purchase",
    icon: ShoppingCart,
    type: "category",
    children: [
      {
        title: "PAGES",
        type: "category",
        children: [
          {
            title: "Sales Transactions (Active)",
            url: "#",
            icon: FileText,
            type: "link",
          },
          {
            title: "Purchase Transactions (Active)",
            url: "#",
            icon: FileText,
            type: "link",
          },
          {
            title: "View Sales Quotations",
            url: "#",
            icon: FileText,
            type: "link",
          },
          {
            title: "All Documents",
            url: "#",
            icon: FileText,
            type: "link",
          },
          {
            title: "All Reminders",
            url: "#",
            icon: FileText,
            type: "link",
          },
        ],
      },
      {
        title: "ACTIONS",
        type: "category",
        children: [
          {
            title: "Create Order Confirmation",
            url: "#",
            icon: Plus,
            type: "action",
          },
          {
            title: "Create Purchase Order",
            url: "#",
            icon: Plus,
            type: "action",
          },
          {
            title: "Create Invoice",
            url: "#",
            icon: Plus,
            type: "action",
          },
          {
            title: "Create Sales Quotation",
            url: "#",
            icon: Plus,
            type: "action",
          },
        ],
      },
    ],
  },
  {
    title: "Inventory",
    icon: Package,
    type: "category",
    children: [
      {
        title: "Inventory Items",
        url: "#",
        type: "link",
      },
      {
        title: "Stock Management",
        url: "#",
        type: "link",
      },
      {
        title: "Advanced Inventory",
        type: "category",
        children: [
          {
            title: "Batch Tracking",
            url: "#",
            type: "link",
          },
          {
            title: "Serial Numbers",
            url: "#",
            type: "link",
          },
          {
            title: "Warehouse Management",
            type: "category",
            children: [
              {
                title: "Locations",
                url: "#",
                type: "link",
              },
              {
                title: "Transfers",
                url: "#",
                type: "link",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Production",
    icon: Factory,
    type: "category",
    children: [
      {
        title: "Production Planning",
        url: "#",
        type: "link",
      },
      {
        title: "Work Orders",
        url: "#",
        type: "link",
      },
    ],
  },
  {
    title: "Payments",
    icon: CreditCard,
    type: "category",
    children: [
      {
        title: "Invoices",
        url: "#",
        type: "link",
      },
      {
        title: "Payment History",
        url: "#",
        type: "link",
      },
    ],
  },
  {
    title: "Reports & Intelligence",
    icon: BarChart2,
    type: "category",
    children: [
      {
        title: "Sales Reports",
        url: "#",
        type: "link",
      },
      {
        title: "Financial Reports",
        url: "#",
        type: "link",
      },
    ],
  },
  {
    title: "Resource planning",
    icon: Lightbulb,
    type: "category",
    children: [
      {
        title: "Resource Allocation",
        url: "#",
        type: "link",
      },
      {
        title: "Capacity Planning",
        url: "#",
        type: "link",
      },
    ],
  },
  {
    title: "Approvals",
    icon: CheckSquare,
    type: "category",
    children: [
      {
        title: "Pending Approvals",
        url: "#",
        type: "link",
      },
      {
        title: "Approval History",
        url: "#",
        type: "link",
      },
    ],
  },
  {
    title: "Accounting Integration",
    icon: Calculator,
    type: "category",
    children: [
      {
        title: "Accounting Settings",
        url: "#",
        type: "link",
      },
      {
        title: "Sync Status",
        url: "#",
        type: "link",
      },
    ],
  },
  {
    title: "Buyers & Suppliers",
    icon: Users,
    type: "category",
    children: [
      {
        title: "Manage Buyers",
        url: "#",
        type: "link",
      },
      {
        title: "Manage Suppliers",
        url: "#",
        type: "link",
      },
    ],
  },
  {
    title: "Task Dashboard",
    icon: ListTodo,
    type: "category",
    children: [
      {
        title: "My Tasks",
        url: "#",
        type: "link",
      },
      {
        title: "Team Tasks",
        url: "#",
        type: "link",
      },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    type: "category",
    children: [
      {
        title: "User Settings",
        url: "#",
        type: "link",
      },
      {
        title: "Company Settings",
        url: "#",
        type: "link",
      },
    ],
  },
]

export function MultiLevelSidebar() {
  const [activeModule, setActiveModule] = React.useState(null)
  const [isAllModulesOpen, setIsAllModulesOpen] = React.useState(false)
  const [isSecondSidebarOpen, setIsSecondSidebarOpen] = React.useState(false)
  // Track open accordion sections
  const [openAccordions, setOpenAccordions] = React.useState({
    // Set some accordions to be open by default
    "Sales & Purchase.PAGES": true,
    "Sales & Purchase.ACTIONS": true,
  })

  // Create refs for both sidebars
  const firstSidebarRef = React.useRef(null)
  const secondSidebarRef = React.useRef(null)

  // Function to handle clicking on the "ALL MODULES" button
  const handleAllModulesClick = () => {
    setIsAllModulesOpen(!isAllModulesOpen)
    if (!isAllModulesOpen) {
      setIsSecondSidebarOpen(false)
      setActiveModule(null)
    }
  }

  // Function to handle hovering over a module with children
  const handleModuleHover = (module) => {
    if (module.children && module.children.length > 0) {
      setActiveModule(module)
      setIsSecondSidebarOpen(true)
    }
  }

  // Function to close sidebars when clicking on overlay
  const handleOverlayClick = () => {
    setIsAllModulesOpen(false)
    setIsSecondSidebarOpen(false)
    setActiveModule(null)
  }

  // Function to toggle accordion state
  const toggleAccordion = (title) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  // Use a single event handler for mouse movement
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isAllModulesOpen || !activeModule) return

      // Get the bounding rectangles of both sidebars
      const firstSidebarRect = firstSidebarRef.current?.getBoundingClientRect()
      const secondSidebarRect = secondSidebarRef.current?.getBoundingClientRect()

      // Check if mouse is inside either sidebar
      const isInFirstSidebar =
        firstSidebarRect &&
        e.clientX >= firstSidebarRect.left &&
        e.clientX <= firstSidebarRect.right &&
        e.clientY >= firstSidebarRect.top &&
        e.clientY <= firstSidebarRect.bottom

      const isInSecondSidebar =
        secondSidebarRect &&
        e.clientX >= secondSidebarRect.left &&
        e.clientX <= secondSidebarRect.right &&
        e.clientY >= secondSidebarRect.top &&
        e.clientY <= secondSidebarRect.bottom

      // If mouse is not in either sidebar, close the second sidebar
      if (!isInFirstSidebar && !isInSecondSidebar) {
        setIsSecondSidebarOpen(false)
      }
    }

    // Add event listener
    document.addEventListener("mousemove", handleMouseMove)

    // Clean up
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isAllModulesOpen, activeModule])

  // Recursive function to render menu items with accordion support
  const renderMenuItem = (item, depth = 0, path = "") => {
    const itemPath = path ? `${path}.${item.title}` : item.title

    // For action items
    if (item.type === "action") {
      return (
        <a
          key={itemPath}
          href={item.url || "#"}
          className="flex items-center py-2 px-2 hover:bg-zinc-800 rounded-md transition-colors"
        >
          {item.icon && <item.icon className="h-5 w-5 mr-2 text-emerald-400" />}
          <span className="text-sm">{item.title}</span>
          <ExternalLink className="ml-auto h-4 w-4" />
          <Star className="ml-2 h-4 w-4 text-emerald-400" />
        </a>
      )
    }

    // For regular link items
    if (item.type === "link") {
      return (
        <a
          key={itemPath}
          href={item.url || "#"}
          className="flex items-center py-2 px-2 hover:bg-zinc-800 rounded-md transition-colors"
        >
          {item.icon && <item.icon className="h-5 w-5 mr-2" />}
          <span className="text-sm">{item.title}</span>
          <ExternalLink className="ml-auto h-4 w-4" />
          {item.type !== "category" && <Star className="ml-2 h-4 w-4 text-emerald-400" />}
        </a>
      )
    }

    // For category items (in second sidebar) - convert to accordion if it has children
    if (item.type === "category" && item.children) {
      const isOpen = openAccordions[itemPath] || false
      const borderClass = depth > 0 ? "border-l-2 border-zinc-700" : ""

      // All categories with children become accordions
      return (
        <div key={itemPath} className={`mb-3 ${borderClass} pl-2`}>
          <button
            onClick={() => toggleAccordion(itemPath)}
            className={`flex items-center justify-between w-full py-2 px-2 rounded-md transition-colors ${
              isOpen ? "bg-zinc-800" : "hover:bg-zinc-800"
            }`}
            aria-expanded={isOpen}
          >
            <div className="flex items-center">
              {item.icon && <item.icon className="h-5 w-5 mr-2" />}
              <span className={`${depth === 0 ? "text-sm font-medium text-zinc-400" : "text-sm font-medium"}`}>
                {item.title}
              </span>
            </div>
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>

          {/* Accordion content with left border */}
          <div
            className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out border-l-2 border-zinc-700 ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent"
            }`}
          >
            {item.children.map((child) => renderMenuItem(child, depth + 1, itemPath))}
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <div className="flex h-screen">
      {/* Dark overlay when sidebar is open */}
      {isAllModulesOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={handleOverlayClick} aria-hidden="true" />
      )}

      {/* All Modules vertical button with company logo */}
      <div className="flex flex-col items-center justify-center bg-zinc-800 text-white w-[52px] z-50">
        {/* Company Logo */}
        <div className="absolute top-0 left-0 w-[52px] flex justify-center items-center py-4 border-b border-zinc-600">
          <div className="w-10 h-10 bg-emerald-500 rounded-md flex items-center justify-center">
            <span className="font-bold text-lg">ERP</span>
          </div>
        </div>

        {/* All Modules Button */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-[52px]">
          <button
            onClick={handleAllModulesClick}
            className="flex flex-col items-center justify-center p-2 w-full h-[120px] text-xs font-medium border-y border-zinc-600 hover:bg-zinc-700 transition-colors"
            aria-label="Open all modules"
          >
            <span className="rotate-[270deg] uppercase tracking-widest">ALL MODULES</span>
          </button>
        </div>

        {/* User Profile */}
        <div className="absolute bottom-4 left-0 w-[52px] flex justify-center">
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-700 text-white">YS</button>
        </div>
      </div>

      {/* First sidebar - Main modules */}
      <div className={`fixed top-0 left-[52px] h-full z-50 ${isAllModulesOpen ? "block" : "hidden"}`}>
        <div
          className="w-[280px] bg-zinc-800 text-white h-full overflow-y-auto border-l border-zinc-600"
          ref={firstSidebarRef}
        >
          <div className="py-2">
            {menuItems.map((item) => (
              <div key={item.title} className="relative" onMouseEnter={() => handleModuleHover(item)}>
                <a
                  href={item.url || "#"}
                  className={`flex items-center gap-3 px-4 py-3 hover:bg-zinc-700 transition-colors ${
                    activeModule?.title === item.title ? "bg-zinc-700" : ""
                  }`}
                >
                  {item.icon && <item.icon className="h-5 w-5 text-white" />}
                  <span className="text-sm font-medium">{item.title}</span>
                  {item.children && item.children.length > 0 && <ChevronRight className="ml-auto h-4 w-4" />}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second sidebar - Module details with accordions */}
      {isAllModulesOpen && isSecondSidebarOpen && activeModule && (
        <div
          ref={secondSidebarRef}
          className="fixed top-0 left-[332px] h-full w-[350px] bg-zinc-900 text-white overflow-y-auto z-50 border-l border-zinc-700"
          role="dialog"
          aria-labelledby="module-title"
        >
          <div className="p-4 border-b border-zinc-700">
            <h2 id="module-title" className="text-xl font-semibold flex items-center gap-2">
              {activeModule.icon && <activeModule.icon className="h-5 w-5" />}
              {activeModule.title}
            </h2>
            <p className="text-sm text-zinc-400 mt-1">{activeModule.title} related documents and transactions.</p>
            <a href="#" className="text-emerald-400 text-sm flex items-center mt-2 hover:underline">
              Explore {activeModule.title} <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>

          <div className="p-4">
            {/* Recursively render the children based on their type with accordion support */}
            {activeModule.children?.map((child) => renderMenuItem(child))}
          </div>
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 bg-blue-50 p-8 ml-[52px]">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="mb-4">Click on "ALL MODULES" to open the sidebar, then hover over items to see their children.</p>

        {/* Sample dashboard content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Recent Orders</h2>
            <p className="text-gray-500">You have 12 new orders today</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Inventory Status</h2>
            <p className="text-gray-500">5 items are low in stock</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Revenue</h2>
            <p className="text-gray-500">$12,500 this month</p>
          </div>
        </div>
      </div>
    </div>
  )
}