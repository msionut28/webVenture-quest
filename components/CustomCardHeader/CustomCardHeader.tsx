import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const CustomCardHeader = (props: {title: string, description: string }) => {
    return (
        <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">{props.title}</CardTitle>
        <CardDescription>
          {props.description}
        </CardDescription>
      </CardHeader>
    )
}

export default CustomCardHeader