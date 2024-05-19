import { AvailableTopicsType } from "./types";

const availableTopics: AvailableTopicsType = {
  ABORTION: "ABORTION",
  AIR_POLLUTION: "AIR_POLLUTION",
  ANIMAL_RIGHTS: "ANIMAL_RIGHTS",
  CIVIL_RIGHTS: "CIVIL_RIGHTS",
  CLIMATE_CHANGE: "CLIMATE_CHANGE",
  CRIME: "CRIME",
  DISCRIMINATION: "DISCRIMINATION",
  ECONOMIC_INEQUALITY: "ECONOMIC_INEQUALITY",
  EDUCATION: "EDUCATION",
  ENVIRONMENTAL_POLITICS: "ENVIRONMENTAL_POLITICS",
  EQUALITY: "EQUALITY",
  HEALTHCARE: "HEALTHCARE",
  HOMELESSNESS: "HOMELESSNESS",
  IMMIGRATION: "IMMIGRATION",
  MENTAL_HEALTH: "MENTAL_HEALTH",
  OBESITY: "OBESITY",
  OVERPOPULATION: "OVERPOPULATION",
  POVERTY: "POVERTY",
  RACISM: "RACISM",
  REFUGEE_CRISIS: "REFUGEE_CRISIS",
  RIGHTS: "RIGHTS",
  UNEMPLOYMENT: "UNEMPLOYMENT",
  WOMEN_EMPOWERMENT: "WOMEN_EMPOWERMENT",
};

function translateTopic(topic: string) {
  const topicName = availableTopics[topic];

  if (!topicName) return "Common.InvalidValue";

  return `Topic.AvailableTopics.${topicName}`;
}

export { availableTopics, translateTopic };
