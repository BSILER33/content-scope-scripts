import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import classNames from "classnames";
import styles from "../src/js/styles.module.css";
import { Header } from "./Header";

function StepButtons({step, handleStepButtonClick}) {
return                   <div className={styles.buttons}>
{step.primaryLabel && (
  <button
    className={styles.primary}
    onClick={() => handleStepButtonClick(step.primaryFn)}
  >
    {step.primaryLabel}
  </button>
)}
{step.secondaryLabel && (
  <button
    className={styles.secondary}
    onClick={() => handleStepButtonClick(step.secondaryFn)}
  >
    {step.secondaryLabel}
  </button>
)}
</div>
}

export function StepsPages({ stepsPages, onNextPage }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  const [stepResults, setStepResults] = useState({});

  const page = stepsPages[pageIndex];
  const step = page.steps[stepIndex];

  const handleStepButtonClick = async (handler) => {
    const result = await handler();

    setStepResults({
      ...stepResults,
      [step.id]: result,
    });

    if (stepIndex + 1 <= page.steps.length) {
      setStepIndex(stepIndex + 1);
    }
  };

  const handleNextPageClick = () => {
    if (pageIndex + 1 < stepsPages.length) {
      setPageIndex(pageIndex + 1);
      setStepIndex(0);
    } else {
      onNextPage(stepResults);
    }
  };

  const progress = stepsPages.length > 0 && (
    <div className={styles.progressContainer}>
      <div>
        {pageIndex + 1} / {stepsPages.length}
      </div>
      <progress max={stepsPages.length} value={pageIndex + 1}>
        (Page {pageIndex + 1} of circa {stepsPages.length})
      </progress>
    </div>
  )

  return (
    <>
      <Header
        title={page.title}
        aside={progress}
      />

      <div className={styles.wrapper}>
        {page.detail && <h2>{page.detail}</h2>}

        <ul className={styles.steps}>
          {page.steps.slice(0, stepIndex + 1).map((step, i) => (
            <li className={styles.stepContainer}>
                <div className={classNames(styles.step, {
                    [styles.completed]: stepIndex !== i
                })}>
              <div className={styles.icon} style={{backgroundImage: `url("assets/img/steps/${step.icon}-32-Shadow.png")`}} />

              <div className={styles.contentWrapper}>
                <div className={styles.content}>
                  <h3>{step.title}</h3>
                  {stepIndex == i && <h4>{step.detail}</h4>}
                </div>

                {stepIndex == i && <StepButtons step={step} handleStepButtonClick={handleStepButtonClick} />}
              </div>

              {step.secondaryLabel ? (
                <div
                  className={classNames(
                    styles.status,
                    stepResults[step.id] === true ? styles.success : styles.skip
                  )}
                />
              ) : stepIndex == i ? (
                <div
                  className={classNames(
                    styles.status,
                    styles.success,
                    styles.alwaysOn
                  )}
                >
                  Always On
                </div>
              ) : (
                <div className={classNames(styles.status, styles.success)} />
              )}
              </div>

{stepIndex == i && <StepButtons step={step} handleStepButtonClick={handleStepButtonClick} />}
            </li>
          ))}
        </ul>

        {stepIndex === page.steps.length && (
          <button
            className={classNames(styles.primary, styles.large)}
            onClick={() => handleNextPageClick()}
          >
            Next
          </button>
        )}
      </div>

      {progress}
    </>
  );
}
