import React, { useEffect } from 'react';
import { View } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';

const AnimatedRect = Animated.createAnimatedComponent(Rect);

type StepProgressBarProps = {
  width?: number;
  height?: number;
  strokeWidth?: number;
  progress: number;
};

const color = '#EE0F55';
const backgroundColor = '#CCCCCC';

const StepProgressBar = ({
  width = 300,
  height = 20,
  strokeWidth = 5,
  progress,
}: StepProgressBarProps) => {
  const fill = useSharedValue(0);

  useEffect(() => {
    fill.value = withTiming(progress * width, { duration: 1500 });
  }, [progress]);

  const animatedProps = useAnimatedProps(() => ({
    width: fill.value,
  }));

  return (
    <View style={{ width, height, alignSelf: 'center' }}>
      <Svg width={width} height={height}>
        {/* Background */}
        <Rect width={width} height={height} fill={backgroundColor} rx={height / 2} ry={height / 2} />
        {/* Foreground */}
        <AnimatedRect animatedProps={animatedProps} height={height} fill={color} rx={height / 2} ry={height / 2} />
      </Svg>
    </View>
  );
};

export default StepProgressBar;
