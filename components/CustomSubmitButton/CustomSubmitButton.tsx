import { Button } from "@/components/ui/button"

const CustomSubmitButton = (props: { text: string, function: any }) => {
    return(
        <Button
        className="w-full bg-lime-300"
        type="submit"
        onClick={props.function}
        variant="outline"
      >
        {props.text}
      </Button>
    )
}

export default CustomSubmitButton