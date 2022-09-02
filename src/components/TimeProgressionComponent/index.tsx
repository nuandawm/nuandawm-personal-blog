import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import TimeProgressionSVG from '../TimeProgressionSVG';

const Wrapper = styled.div`
  display: flex;
  padding-right: 10px;
  justify-content: space-evenly;
  
  .we-timeline {
    flex-grow: 1;
    display: flex;
    padding-right: 20px;
    justify-content: flex-end;
  }
`

type TimeProgressionComponentProps = {
  isFirst?: boolean;
  isLast?: boolean;
}

const TimeProgressionComponent: React.FC<TimeProgressionComponentProps> = ({
                                                                             children,
                                                                             isFirst,
                                                                             isLast
}) => {
  // Set a reference to the container div
  const timeProgressionContainerRef: React.RefObject<HTMLDivElement> = useRef(null);
  const [timelineHeight, setTimelineHeight] = useState(0);

  // Observe the container (and disconnect the observer on component destroy)
  useEffect(() => {
    setTimelineHeight(timeProgressionContainerRef.current?.clientHeight || 10)
  }, []);

  return <Wrapper>
    <div className="we-timeline" ref={timeProgressionContainerRef}>
      <TimeProgressionSVG timelineThickness={10}
                          timelineHeight={timelineHeight} isFirst={isFirst} isLast={isLast} />
    </div>
    {children}
  </Wrapper>
}

export default TimeProgressionComponent
