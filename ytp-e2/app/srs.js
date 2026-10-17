const BOX_INTERVALS = [0, 1, 2, 4, 8, 16];

function scheduleReview(currentBox, remembered, today) {
  const box = remembered ? Math.min(currentBox + 1, 5) : 1;
  return { box, due: today + BOX_INTERVALS[box] };
}

function countDue(states, today) {
  return states.filter((state) => state.due <= today).length;
}

if (typeof module !== "undefined") {
  module.exports = { BOX_INTERVALS, scheduleReview, countDue };
}
