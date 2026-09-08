// ============================================================
// SKILLS DATA
// Add or remove items freely — only list what you actually use.
// ============================================================

export type SkillGroup = {
  id: string;
  title: string;
  command: string; // shown as a small terminal-style label
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "security",
    title: "Cyber Security",
    command: "scan --category security",
    items: [
      "Security Fundamentals",
      "Network Security",
      "Vulnerability Assessment",
      "Linux Security",
      "Log Analysis",
      "Incident Response",
      "Security Monitoring",
    ],
  },
  {
    id: "linux",
    title: "Linux & Systems",
    command: "scan --category systems",
    items: [
      "Arch Linux",
      "Linux Administration",
      "Bash",
      "Systemd",
      "SSH",
      "Server Administration",
      "Virtualization",
      "Troubleshooting",
    ],
  },
  {
    id: "networking",
    title: "Networking",
    command: "scan --category network",
    items: [
      "TCP/IP",
      "DNS",
      "DHCP",
      "VLAN",
      "Routing",
      "Firewall",
      "NAT",
      "VPN",
      "Network Troubleshooting",
    ],
  },
  {
    id: "mikrotik",
    title: "MikroTik",
    command: "scan --category mikrotik",
    items: [
      "RouterOS",
      "Firewall",
      "NAT",
      "DHCP",
      "VLAN",
      "Routing",
      "Queue Management",
      "Wireless Configuration",
      "Network Monitoring",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    command: "scan --category tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Wireshark",
      "Nmap",
      "VirtualBox",
      "VMware",
      "VS Code",
    ],
  },
];
