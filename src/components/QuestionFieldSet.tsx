import {RadioGroup} from "@nextui-org/react";

import { CustomRadio } from "./custom/CustomRadio";

const QuestionFieldSet = () => {
  return (
    <RadioGroup
      label='Can I park here?'
    >
      <CustomRadio value='Sorry, I did that.'>Sorry, I did that.</CustomRadio>
      <CustomRadio value='It&apos;s the same place.'>It's the same place.</CustomRadio>
      <CustomRadio value='Only for half an hour.'>Only for half an hour.</CustomRadio>
    </RadioGroup>
  );
};

export default QuestionFieldSet;