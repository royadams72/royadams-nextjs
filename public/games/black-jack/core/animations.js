// game/core/animations.js
export function flipFaceUp(container, face, back, endWidth) {
  TweenMax.to(container, 0.3, { x: container.endX - 17 });
  TweenMax.to(back, 0.3, {
    width: 0,
    onComplete: () => {
      TweenMax.set(back, { alpha: 0 });
      TweenMax.set(face, { alpha: 1 });
      TweenMax.to(face, 0.3, { width: endWidth });
    },
  });
}

export function pulseGlow(container, tweens) {
  const glow = container.getChildAt(0);
  const t = TweenMax.to(glow, 1, {
    alpha: 1,
    onComplete: () => {
      t.reverse();
      const t1 = TweenMax.delayedCall(1, () => t.play());
      tweens.push(t1);
    },
  });
  tweens.push(t);
}

export function stopTweens(arr) {
  for (const t of arr) t.pause(0);
}
