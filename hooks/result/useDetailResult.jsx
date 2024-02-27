import React from "react";

const useDetailResult = () => {
  const calculateAnswerPoint = (resultTest) => {
    let trueAnswer = 0;
    let falseAnswer = 0;
    let unAnswered = 0;
    let totalPoint = 0;
    resultTest?.map((item) => {
      totalPoint = totalPoint + item.point;
      if (item.point !== 0) trueAnswer = trueAnswer + 1;
      if (item.answer_user.length === 0) unAnswered = unAnswered + 1;
      if (item.point === 0) falseAnswer = falseAnswer + 1;
    });

    falseAnswer = falseAnswer - unAnswered;

    return { trueAnswer, falseAnswer, unAnswered, totalPoint };
  };
  return { calculateAnswerPoint };
};

export default useDetailResult;
