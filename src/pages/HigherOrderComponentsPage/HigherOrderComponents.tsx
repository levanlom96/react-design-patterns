import React from 'react';

const HigherOrderComponent = <T extends { name: string }>(Component: React.ComponentType<T>) => {
  return (props: Omit<T, 'name'>) => {
    const name = 'John Doe';
    return <Component {...(props as T)} name={name} />;
  };
};

interface AvatarProps {
  name: string;
  description: string;
}

const AvatarComponent: React.FC<AvatarProps> = (props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="rounded-full bg-red p-4">
        {props.name}
      </div>
      <div>
        <p>I am a {props.description}.</p>
      </div>
    </div>
  );
};

const SampleHoc = HigherOrderComponent(AvatarComponent);

const HigherOrderComponentWrapper: React.FC = () => {
  return (
    <div>
      <SampleHoc description="Frontend Engineer" />
    </div>
  );
};

export default HigherOrderComponentWrapper;