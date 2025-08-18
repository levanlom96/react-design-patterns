import React, { createContext, useContext, useState, ReactNode, ButtonHTMLAttributes } from "react";

interface ToggleContextType {
  on: boolean;
  toggle: () => void;
}

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

interface ToggleProps {
  children: ReactNode;
}

interface ToggleChildProps {
  children: ReactNode;
}

const Toggle = ({ children }: ToggleProps) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

Toggle.On = ({ children }: ToggleChildProps) => {
  const context = useContext(ToggleContext);
  if (!context) throw new Error('Toggle.On must be used within Toggle');
  const { on } = context;
  return on ? children : null;
};

Toggle.Off = ({ children }: ToggleChildProps) => {
  const context = useContext(ToggleContext);
  if (!context) throw new Error('Toggle.Off must be used within Toggle');
  const { on } = context;
  return on ? null : children;
};

Toggle.Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const context = useContext(ToggleContext);
  if (!context) throw new Error('Toggle.Button must be used within Toggle');
  const { toggle } = context;
  return <button onClick={toggle} {...props} />;
};

const CompoundComponents: React.FC = () => {
  return (
    <Toggle>
      <Toggle.On><span>The button is on</span></Toggle.On>
      <Toggle.Off><span>The button is off</span></Toggle.Off>
      <Toggle.Button>Toggle</Toggle.Button>
    </Toggle>
  );
};

export default CompoundComponents;