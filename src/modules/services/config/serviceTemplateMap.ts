export type ServiceTemplateType = "audit" | "training";
export type TrainingHeroVariant = "shield" | "training";

export const SERVICE_MAP = {
  "energy-audit": {
    template: "audit",
    sanityType: "energyAudit",
  },
  "power-quality": {
    template: "audit",
    sanityType: "powerQuality",
  },
  "harmonic-study": {
    template: "audit",
    sanityType: "harmonicAudit",
  },
  "solar-panel-study": {
    template: "audit",
    sanityType: "solarPlantAudit",
  },
  "thermal-study": {
    template: "audit",
    sanityType: "thermalAudit",
  },
  "vibration-audit": {
    template: "audit",
    sanityType: "vibrationAudit",
  },
  "industrial-training": {
    template: "training",
    sanityType: "industrialTrainingProgram",
    heroVariant: "training",
  },
  "industrial-safety-audit": {
    template: "training",
    sanityType: "industrialSafetyAudit",
    heroVariant: "shield",
  },
} as const;
