// ============================================================
// PROJECTS DATA
// Replace these lab/learning placeholders with your real work
// as it develops. Keep the "Lab / Learning Project" tag on
// anything that isn't a production deployment.
// ============================================================

export type Project = {
  id: string;
  number: string;
  title: string;
  status: "Lab / Learning Project" | "Project";
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  thumbnail: string; // path inside /public/projects
};

export const projects: Project[] = [
  {
    id: "linux-server-lab",
    number: "01",
    title: "Linux Server Lab",
    status: "Lab / Learning Project",
    description:
      "Experimental Linux environment focused on system administration, service configuration, monitoring, and security hardening.",
    technologies: ["Arch Linux", "Linux", "Bash", "SSH"],
    githubUrl: "https://github.com/YOUR_GITHUB/linux-server-lab",
    thumbnail: "/projects/linux-server-lab.svg",
  },
  {
    id: "mikrotik-network-lab",
    number: "02",
    title: "MikroTik Network Lab",
    status: "Lab / Learning Project",
    description:
      "Network laboratory for experimenting with routing, firewall rules, VLAN, DHCP, NAT, and network segmentation.",
    technologies: ["MikroTik", "RouterOS", "TCP/IP", "VLAN"],
    githubUrl: "https://github.com/YOUR_GITHUB/mikrotik-network-lab",
    thumbnail: "/projects/mikrotik-network-lab.svg",
  },
  {
    id: "security-monitoring-lab",
    number: "03",
    title: "Security Monitoring Lab",
    status: "Lab / Learning Project",
    description:
      "Personal cybersecurity laboratory for learning network monitoring, log analysis, vulnerability assessment, and security fundamentals.",
    technologies: ["Linux", "Wireshark", "Nmap", "Security"],
    githubUrl: "https://github.com/YOUR_GITHUB/security-monitoring-lab",
    thumbnail: "/projects/security-monitoring-lab.svg",
  },
];
