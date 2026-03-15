export type ExperimentStatus = "live" | "wip" | "concept";

export type Experiment = {
  id: string;
  title: string;
  description: string;
  status: ExperimentStatus;
  tags: string[];
  link?: string;
};
