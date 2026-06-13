import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useState, useEffect } from "react";
import {
  Briefcase, Database, Code, Shuffle,
  Server, GitMerge, Shield, Activity, Lock,
  BarChart3, Settings, Layers, Terminal, Zap,
} from "lucide-react";
import { SiMongodb, SiApachekafka, SiApachespark, SiApacheairflow, SiDocker, SiKubernetes, SiTerraform, SiAnsible, SiGrafana, SiSnowflake, SiDatabricks } from "react-icons/si";

const roles = [
  {
    label: "Data Engineer",
    accentClass: "text-blue-600",
    skills: [
      { icon: <Database size={16} />, label: "SQL & NoSQL", sub: "PostgreSQL, MongoDB, Cassandra" },
      { icon: <Code size={16} />, label: "Python & Scala", sub: "pandas, PySpark, SQLAlchemy" },
      { icon: <Shuffle size={16} />, label: "ETL / ELT Pipelines", sub: "batch & real-time design" },
      { icon: <SiApachespark size={16} />, label: "Apache Spark", sub: "distributed processing" },
      { icon: <SiApachekafka size={16} />, label: "Apache Kafka", sub: "event streaming" },
      { icon: <SiApacheairflow size={16} />, label: "Apache Airflow", sub: "workflow orchestration" },
      { icon: <Server size={16} />, label: "Data Warehouse", sub: "Redshift, BigQuery, Snowflake" },
      { icon: <Layers size={16} />, label: "Data Lake", sub: "S3, Delta Lake, Iceberg" },
      { icon: <SiSnowflake size={16} />, label: "Snowflake", sub: "cloud data platform" },
      { icon: <SiDatabricks size={16} />, label: "Databricks", sub: "unified analytics" },
      { icon: <SiMongodb size={16} />, label: "NoSQL", sub: "MongoDB, Cassandra" },
      { icon: <BarChart3 size={16} />, label: "Data Modeling", sub: "star schema, dimensional" },
    ],
  },
  {
    label: "DevOps Engineer",
    accentClass: "text-orange",
    skills: [
      { icon: <GitMerge size={16} />, label: "GitOps", sub: "ArgoCD, GitHub Actions" },
      { icon: <SiDocker size={16} />, label: "Docker", sub: "containerisation" },
      { icon: <SiKubernetes size={16} />, label: "Kubernetes", sub: "K8s, Helm charts" },
      { icon: <SiTerraform size={16} />, label: "Terraform", sub: "infrastructure as code" },
      { icon: <SiAnsible size={16} />, label: "Ansible", sub: "config management" },
      { icon: <Terminal size={16} />, label: "Bash / Shell", sub: "scripting & automation" },
      { icon: <SiGrafana size={16} />, label: "Grafana & Prometheus", sub: "metrics & alerting" },
      { icon: <Activity size={16} />, label: "Distributed Tracing", sub: "Jaeger, OpenTelemetry" },
      { icon: <Settings size={16} />, label: "CI/CD Pipelines", sub: "GitHub Actions, Jenkins" },
      { icon: <Shield size={16} />, label: "Secrets Management", sub: "Vault, AWS Secrets Manager" },
      { icon: <Lock size={16} />, label: "Zero-trust Security", sub: "IAM, RBAC policies" },
      { icon: <Zap size={16} />, label: "SRE Practices", sub: "SLO/SLA, incident response" },
    ],
  },
];

const HeroText = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIdx((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const role = roles[roleIdx];

  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <h2
          className={`text-4xl font-bold uppercase tracking-tight ${role.accentClass}`}
          style={{
            opacity: fade ? 1 : 0,
            transform: fade ? "translateY(0)" : "translateY(-8px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {role.label}
        </h2>
      </motion.div>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold uppercase transition-transform duration-300 hover:scale-105"
      >
        Saroj Mishra
      </motion.h1>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-4 bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 hover:text-blue-500 transition-transform duration-300 hover:scale-105">
          <Briefcase className="text-blue-500" />
          About Me
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          I am a results-driven{" "}
          <span className="font-semibold text-blue-600">Data Engineer</span>{" "}
          actively expanding into{" "}
          <span className="font-semibold text-orange">DevOps</span>.
          I build robust data pipelines, streaming architectures, and scalable infrastructure
          to power data-driven products.
        </p>

        <div
          style={{
            opacity: fade ? 1 : 0,
            transform: fade ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${role.accentClass}`}>
            {role.label} skills
          </p>

          <div className="grid grid-cols-2 gap-3">
            {role.skills.map(({ icon, label, sub }, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                <span className={`transform transition-transform duration-300 hover:rotate-12 flex-shrink-0 ${role.accentClass}`}>
                  {icon}
                </span>
                <div>
                  <p className="text-gray-800 dark:text-white font-medium text-sm leading-tight">
                    {label}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-tight">
                    {sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroText;