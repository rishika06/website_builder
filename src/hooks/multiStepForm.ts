import { ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { setFormData } from "../redux/formReducer";

export function useMultiStepForm(steps: ReactElement[]) {
  const dispatch = useDispatch();

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next(data: any) {
    setCurrentStepIndex((i) => {
      if (i >= steps?.length - 1) return i;
      return i + 1;
    });
    dispatch(setFormData({ ...data }));
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex !== 0,
    isLastStep: currentStepIndex === steps?.length - 1,
    steps,
    goTo,
    next,
    back,
  };
}
