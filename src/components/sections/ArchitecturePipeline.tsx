import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { 
  Smartphone, 
  Code2, 
  Network, 
  Server, 
  FileJson, 
  Database, 
  Flame, 
  MapPin, 
  GitBranch, 
  Lock, 
  Zap
} from 'lucide-react';

interface Node {
  id: string;
  name: string;
  sub: string;
  icon: any;
  color: string;
  description: string;
  protocols: string;
  role: string;
}

export const ArchitecturePipeline: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('android_app');

  const corePipelineNodes: Node[] = [
    {
      id: 'android_app',
      name: 'Android Client',
      sub: 'Mobile OS & Runtime',
      icon: Smartphone,
      color: 'border-orange-500 text-orange-400',
      description: 'The native Android runtime capturing user interactions, touch inputs, and triggering background asynchronous workers.',
      protocols: 'Android ART / Dalvik • Intent System • Lifecycle Observers',
      role: 'Entry Point & Presentation Layer'
    },
    {
      id: 'java_xml',
      name: 'Java + XML UI',
      sub: 'Layouts & Business Logic',
      icon: Code2,
      color: 'border-amber-500 text-amber-400',
      description: 'Declarative XML layouts paired with structured Java OOP controllers, RecyclerView adapters, and ViewModel event dispatchers.',
      protocols: 'POJO Data Models • AsyncHttpClient • ViewHolder Pattern',
      role: 'Client-Side Processing & State'
    },
    {
      id: 'rest_api',
      name: 'REST API Gateway',
      sub: 'Network Protocol',
      icon: Network,
      color: 'border-cyan-500 text-cyan-400',
      description: 'Stateless HTTP GET/POST endpoints facilitating secure mobile-to-cloud data routing with status code validation.',
      protocols: 'HTTP / HTTPS • Header Authorization • JSON Payloads',
      role: 'Network Transmission Layer'
    },
    {
      id: 'php_backend',
      name: 'PHP Backend',
      sub: 'Server Logic & Processing',
      icon: Server,
      color: 'border-purple-500 text-purple-400',
      description: 'Modular PHP scripts parsing incoming requests, executing business validation, sanitizing parameters, and orchestrating database interactions.',
      protocols: 'Apache Server • PDO Prepared Statements • Session Tokenization',
      role: 'Server-Side Business Logic'
    },
    {
      id: 'json_parser',
      name: 'JSON Serialization',
      sub: 'Data Interchange Format',
      icon: FileJson,
      color: 'border-emerald-500 text-emerald-400',
      description: 'Strict schema encoding and decoding converting complex database records into lightweight, readable JSON data streams.',
      protocols: 'UTF-8 String Parsing • JSON Object / Arrays • Error Envelope',
      role: 'Data Interchange Bridge'
    },
    {
      id: 'mysql_db',
      name: 'MySQL Database',
      sub: 'Relational Persistence',
      icon: Database,
      color: 'border-blue-500 text-blue-400',
      description: 'Normalized relational SQL database executing ACID-compliant CRUD operations, indexing, and transactional integrity.',
      protocols: 'SQL InnoDB • Foreign Key Constraints • Indexed Queries',
      role: 'Persistent Storage Tier'
    },
  ];

  const integrationNodes = [
    { name: 'Firebase Cloud', icon: Flame, tag: 'FCM / Auth' },
    { name: 'Google Maps SDK', icon: MapPin, tag: 'Location' },
    { name: 'Git & GitHub', icon: GitBranch, tag: 'VCS & CI' },
    { name: 'Security & Auth', icon: Lock, tag: 'Sanitization' },
  ];

  const activeNode = corePipelineNodes.find((n) => n.id === activeNodeId) || corePipelineNodes[0];

  return (
    <section id="architecture" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        tag="FULL-STACK ARCHITECTURE"
        title="HOW I BUILD APPLICATIONS"
        subtitle="An interactive simulation of the end-to-end data pipeline connecting mobile clients, REST endpoints, server processors, and databases."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT / CENTER: Animated Connected Glowing Node Pipeline (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#09090E] border border-white/15 relative overflow-hidden">
            {/* Animated Data Packets Flow Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-warm via-accent-cyan to-accent-warm opacity-30 pointer-events-none hidden md:block" />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
              {corePipelineNodes.map((node, idx) => {
                const Icon = node.icon;
                const isSelected = activeNodeId === node.id;

                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    onClick={() => setActiveNodeId(node.id)}
                    onMouseEnter={() => setActiveNodeId(node.id)}
                    className={`p-4 rounded-2xl cursor-pointer border transition-all duration-300 relative group text-center flex flex-col items-center ${
                      isSelected
                        ? 'bg-[#151522] border-accent-warm shadow-glow-orange scale-105'
                        : 'bg-card/70 border-white/10 hover:border-white/20 hover:bg-card'
                    }`}
                  >
                    {/* Node Number indicator */}
                    <span className="font-mono text-[10px] text-white/40 mb-2">
                      LAYER 0{idx + 1}
                    </span>

                    {/* Node Icon */}
                    <div
                      className={`w-12 h-12 rounded-2xl bg-white/5 border flex items-center justify-center mb-3 transition-colors ${
                        isSelected ? node.color : 'border-white/10 text-white/70'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h4 className="font-heading font-bold text-sm text-white mb-1">
                      {node.name}
                    </h4>

                    <span className="font-mono text-[10px] text-textMuted">
                      {node.sub}
                    </span>

                    {/* Active Pulse indicator */}
                    {isSelected && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent-warm animate-ping" />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Optional Auxiliary Integrations Strip */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <span className="font-mono text-xs text-textMuted uppercase tracking-wider block mb-3">
                INTEGRATED EXTENSIONS & CLOUD SERVICES:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {integrationNodes.map((ext) => {
                  const ExtIcon = ext.icon;
                  return (
                    <div
                      key={ext.name}
                      className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2 text-xs font-mono text-white/80"
                    >
                      <ExtIcon className="w-3.5 h-3.5 text-accent-cyan" />
                      <div className="overflow-hidden">
                        <p className="truncate font-semibold">{ext.name}</p>
                        <p className="text-[10px] text-textMuted">{ext.tag}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Live Layer Inspector & Protocol Analyzer (5 cols) */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-[#0F0F17] border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent-warm/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent-warm" />
                <span className="font-mono text-xs uppercase tracking-widest text-white/70 font-semibold">
                  LIVE LAYER TELEMETRY
                </span>
              </div>
              <span className="font-mono text-xs text-accent-cyan font-bold">
                {activeNode.role}
              </span>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs text-accent-warm font-bold uppercase tracking-wider">
                SELECTED ARCHITECTURAL NODE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                {activeNode.name}
              </h3>
              <p className="font-mono text-xs text-textMuted">
                {activeNode.sub}
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="font-mono text-xs text-white/60 uppercase tracking-widest">
                Functional Overview
              </h5>
              <p className="text-sm text-textMuted leading-relaxed font-sans">
                {activeNode.description}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5 font-mono text-xs">
              <span className="text-accent-cyan uppercase tracking-wider font-semibold block">
                APPLIED PROTOCOLS & DATA STRUCTURES:
              </span>
              <p className="text-white/90">
                {activeNode.protocols}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-textMuted">
              <span>DATA FLOW: BIDIRECTIONAL</span>
              <span className="text-emerald-400 font-bold">SYSTEM_OPTIMAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
