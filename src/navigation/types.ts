export type HomeStackParamList = {
  Home: undefined;
  Companion: {
    companionId: number;
    name: string;
    avatar: string;
    specialization: string;
  };
  Chat: {
    topic: string;
  };
  Library: undefined;
};

export type ToolsStackParamList = {
  Tools: undefined;
};

export type RootTabParamList = {
  YoLearn: undefined;
  Tools: undefined;
};

