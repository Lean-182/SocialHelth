import React, { useEffect } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withSpring } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const HeartProgress = ({ size = 150, color = '#EE0F55', strokeWidth = 2.5 }) => {
  const d = `M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z`;

  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withSpring(1, { damping: 2, stiffness: 80, restDisplacementThreshold: 0.01 });
  }, []);

  const animatedProps = useAnimatedProps(() => ({
    fill: progress.value === 1 ? color : 'transparent',
  }));

  return (
    <View style={{ width: size, height: size, alignSelf: 'center' }}>
      <Svg width={size} height={size} viewBox="0 0 24 24">
        <AnimatedPath
          d={d}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          animatedProps={animatedProps}
        />
      </Svg>
      <AntDesign
        name="arrowright"
        size={strokeWidth * 0.8}
        color="#fff"
        style={{
          position: 'absolute',
          alignSelf: 'center',
          top: strokeWidth * 0.1,
        }}
      />
    </View>
  );
};

export default HeartProgress;
