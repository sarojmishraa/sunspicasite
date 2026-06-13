import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import {
  Database, Server, Cloud, ArrowRight, Workflow,
  GitBranch, Monitor, Shield, Zap, Terminal, Container, BarChart3,
  Lock, Cpu, Network, Gauge, Settings, GitMerge
} from "lucide-react";
import {
  SiApachekafka, SiApachespark, SiApacheairflow,
  SiKubernetes, SiDocker, SiTerraform, SiAnsible,
  SiAmazonwebservices, SiGithubactions, SiPrometheus,
  SiPython, SiApachesqoop
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

/* ─── Data Engineering pipeline steps ─────────────────────────── */
const dataPipeline = [
  { label: "Ingest", icon: <SiApachekafka />, desc: "Apache Kafka", color: "text-red-400" },
  { label: "Process", icon: <SiApachespark />, desc: "Apache Spark", color: "text-orange-400" },
  { label: "Orchestrate", icon: <SiApacheairflow />, desc: "Airflow", color: "text-blue-400" },
  { label: "Store", icon: <Database size={22} />, desc: "Redshift / S3", color: "text-cyan-400" },
  { label: "Visualise", icon: <BarChart3 size={22} />, desc: "Power BI", color: "text-yellow-400" },
];

/* ─── DevOps pipeline steps ──────────────────────────────────── */
const devopsPipeline = [
  { label: "Code", icon: <GitBranch size={22} />, desc: "Git / GitHub", color: "text-white" },
  { label: "Build", icon: <SiGithubactions />, desc: "GitHub Actions", color: "text-purple-400" },
  { label: "Containerise", icon: <SiDocker />, desc: "Docker", color: "text-blue-400" },
  { label: "Orchestrate", icon: <SiKubernetes />, desc: "Kubernetes", color: "text-blue-300" },
  { label: "Provision", icon: <SiTerraform />, desc: "Terraform", color: "text-indigo-400" },
  { label: "Deploy", icon: <FaAws />, desc: "AWS Cloud", color: "text-orange-400" },
];

/* ─── Data Engineer Skills Grid ───────────────────────────────── */
const dataSkills = [
  { icon: <BarChart3 size={20} />, label: "Data Visualization", color: "text-orange-400" },
  { icon: <Database size={20} />, label: "Database Management", color: "text-purple-400" },
  { icon: <SiPython size={20} />, label: "Python, Scala & SQL", color: "text-gray-300" },
  { icon: <ArrowRight size={20} />, label: "Business Intelligence", color: "text-red-400" },
  { icon: <Workflow size={20} />, label: "ETL", color: "text-blue-400" },
  { icon: <Server size={20} />, label: "Data Processing", color: "text-yellow-400" },
  { icon: <Cloud size={20} />, label: "Data Warehouse", color: "text-green-400" },
  { icon: <Settings size={20} />, label: "NoSQL", color: "text-green-500" },
  { icon: <Cloud size={20} />, label: "Cloud: AWS", color: "text-gray-300" },
  { icon: <Gauge size={20} />, label: "Machine Learning", color: "text-cyan-400" },
  { icon: <SiApachekafka size={20} />, label: "Apache Kafka", color: "text-red-500" },
  { icon: <SiApachespark size={20} />, label: "Apache Spark", color: "text-red-400" },
];

/* ─── DevOps Engineer Skills Grid ────────────────────────────── */
const devopsSkills = [
  { icon: <GitMerge size={20} />, label: "CI/CD Pipeline Automation", color: "text-purple-400" },
  { icon: <Settings size={20} />, label: "Infrastructure as Code", color: "text-indigo-400" },
  { icon: <Container size={20} />, label: "Container Orchestration", color: "text-blue-400" },
  { icon: <Cloud size={20} />, label: "Cloud Architecture — AWS", color: "text-orange-400" },
  { icon: <Monitor size={20} />, label: "Monitoring & Alerting", color: "text-cyan-400" },
  { icon: <Shield size={20} />, label: "Security Hardening", color: "text-red-400" },
  { icon: <SiDocker size={20} />, label: "Docker", color: "text-blue-500" },
  { icon: <SiKubernetes size={20} />, label: "Kubernetes", color: "text-blue-600" },
  { icon: <SiTerraform size={20} />, label: "Terraform", color: "text-indigo-500" },
  { icon: <SiAnsible size={20} />, label: "Ansible", color: "text-red-500" },
  { icon: <SiPrometheus size={20} />, label: "Prometheus & Grafana", color: "text-orange-500" },
  { icon: <FaAws size={20} />, label: "AWS Services", color: "text-orange-600" },
];

/* ─── Skills Grid Item ───────────────────────────────────────── */
const SkillItem = ({ icon, label, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 group cursor-default"
    >
      <span className={`${color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </span>
      <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
        {label}
      </span>
    </motion.div>
  );
};

/* ─── Role Card (Updated) ────────────────────────────────────── */
const RoleCard = ({ role, pipeline, skills, theme, isData }) => {
  const [hovered, setHovered] = useState(false);

  const accent = isData ? "cyan" : "orange";
  const borderColor = isData ? "border-cyan-500/40" : "border-orange-500/40";
  const bgGlow = isData
    ? "hover:shadow-[0_0_60px_rgba(6,182,212,0.2)]"
    : "hover:shadow-[0_0_60px_rgba(249,115,22,0.2)]";
  const badgeBg = isData ? "bg-cyan-500/20 text-cyan-300" : "bg-orange-500/20 text-orange-300";
  const lineColor = isData ? "bg-cyan-400" : "bg-orange-400";
  const headerGrad = isData
    ? "from-cyan-900/60 to-blue-900/40"
    : "from-orange-900/60 to-amber-900/40";
  const arrowColor = isData ? "text-cyan-600" : "text-orange-600";

  return (
    <motion.div
      variants={fadeIn(isData ? "right" : "left", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`flex-1 min-w-[300px] rounded-3xl border ${borderColor} bg-gray-950/70 backdrop-blur-md overflow-hidden transition-all duration-500 ${bgGlow} cursor-default`}
    >
      {/* Card header */}
      <div className={`bg-gradient-to-br ${headerGrad} p-6 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full border ${isData ? "border-cyan-400" : "border-orange-400"}`}
              style={{
                width: `${60 + i * 30}px`,
                height: `${60 + i * 30}px`,
                top: `${-20 + i * 10}px`,
                right: `${-20 + i * 10}px`,
              }}
            />
          ))}
        </div>
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${badgeBg} mb-3`}>
          {isData ? "🗄️ Data Engineering" : "⚙️ DevOps & Cloud"}
        </span>
        <h3 className="text-2xl font-bold text-white">{role}</h3>
        <p className="text-gray-400 text-sm mt-1">
          {isData
            ? "From raw data to actionable insights at scale"
            : "From code commit to production — reliably & fast"}
        </p>
      </div>

      {/* Pipeline flow */}
      <div className="p-6 border-b border-gray-800/50">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
          Tool Pipeline
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {pipeline.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.15, y: -3 }}
                className={`flex flex-col items-center gap-1 p-2 rounded-xl bg-gray-900 border border-gray-800 hover:border-${accent}-500/60 transition-all duration-300 min-w-[64px]`}
              >
                <span className={`text-xl ${step.color}`}>{step.icon}</span>
                <span className="text-[10px] text-gray-400 text-center leading-tight">{step.desc}</span>
              </motion.div>
              {i < pipeline.length - 1 && (
                <ArrowRight size={14} className={`${arrowColor} flex-shrink-0`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
          Skills & Technologies
        </p>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {skills.map((skill, i) => (
            <SkillItem key={i} icon={skill.icon} label={skill.label} color={skill.color} />
          ))}
        </div>

        {/* Bottom accent bar */}
        <motion.div
          className={`h-1 rounded-full ${lineColor}`}
          initial={{ width: "30%" }}
          animate={hovered ? { width: "100%" } : { width: "30%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

/* ─── Main Section ───────────────────────────────────────────── */
const RoleShowcase = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20" id="roles">
      {/* Section heading */}
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="text-center mb-14"
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-white/5 text-gray-400 border border-gray-700 uppercase tracking-widest mb-4">
          Career Focus
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Building For{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Data
          </span>{" "}
          &{" "}
          <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
            DevOps
          </span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
          As a software developer transitioning into these roles, I combine strong
          engineering foundations with specialised tooling expertise.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row gap-8">
        <RoleCard
          role="Data Engineer"
          pipeline={dataPipeline}
          skills={dataSkills}
          theme="cyan"
          isData={true}
        />
        <RoleCard
          role="DevOps Engineer"
          pipeline={devopsPipeline}
          skills={devopsSkills}
          theme="orange"
          isData={false}
        />
      </div>

      {/* Bottom stats row */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
      >
        {[
          { value: "3+", label: "Years Dev Experience", color: "text-white" },
          { value: "12", label: "Data & DevOps Skills", color: "text-cyan-400" },
          { value: "24+", label: "Tools & Technologies", color: "text-orange-400" },
          { value: "2", label: "Target Roles", color: "text-purple-400" },
        ].map((stat, i) => (
          <div
            key={i}
            className="text-center p-5 rounded-2xl bg-gray-950/60 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105"
          >
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default RoleShowcase;