import { CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const CustomCardFooter = (props: {href: string, text: string}) => {
    return (
        <CardFooter className="flex flex-col">
        <Link href={props.href}>
          <Button className="w-80 bg-lime-300" variant="outline">
            {props.text}
          </Button>
        </Link>
      </CardFooter>
    )
}

export default CustomCardFooter