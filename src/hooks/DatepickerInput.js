import React from 'react'

const DatepickerInput = React.forwardRef((props, ref) => (
  <input type="text" {...props} ref={ref} readOnly />
));

export default DatepickerInput;