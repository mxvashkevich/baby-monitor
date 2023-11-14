import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useState } from 'react';

export const DatePickerComponent = () => {
  const [isDisplay, setIsDisplay] = useState<boolean>(true);
  const [date, setDate] = useState(new Date());

  const onChange = (event: DateTimePickerEvent, date?: Date): void => {
    if(date) setDate(date);
  };
  console.log(date)
  return (
    <>
      { isDisplay && (
      <DateTimePicker
        maximumDate={new Date()}
        minimumDate={new Date(2022, 0, 1)}
        onChange={onChange}
        value={date}
        mode='date'
        />
    )}
    </>
  );
};
