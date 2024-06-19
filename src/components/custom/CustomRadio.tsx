import {Radio, cn} from "@nextui-org/react";

export const CustomRadio = (props: any) => {
  const {children, ...otherProps} = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex flex-row max-w-[464px] gap-4 p-4 m-0 items-center",
          "bg-foreground-main rounded-lg border-2 border-transparent",
          "cursor-pointer hover:border-primary hover:text-primary",
          "data-[selected=true]:border-primary data-[selected=true]:bg-background-secondary data-[selected=true]:text-primary data-[selected=true]:font-bold"
        ),
      }}
    >
      {children}
    </Radio>
  );
};