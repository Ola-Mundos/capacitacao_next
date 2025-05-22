import {Button} from "@/components/ui/button"
function ButtonContact(props: React.ComponentProps<typeof Button>){
    return(
        <Button 
        {...props}
        className="bg-[var(--amarelo_om)] flex justify-center items-center text-black font-bold w-25 h-7 text-xs" 
        variant="default">
            Fale Conosco
        </Button>
    )
}

export default ButtonContact;