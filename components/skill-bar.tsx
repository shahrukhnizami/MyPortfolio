"use client"

import { motion } from "framer-motion"

interface SkillBarProps {
  name: string
  percentage: number
  color: string
}

export function SkillBar({ name, percentage, color }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-muted">
        <motion.div
          className={`h-2 rounded-full ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
    </div>
  )
}
