import { Plus } from 'lucide-react';

type DataProps = {
    className?: string;
};

export default function Data({ className }: DataProps) {
    return(
        <div className={`${className} flex flex-row bg-[#4864AC] text-[#F8FBFF] font-[raleway] gap-[100px]`}>
            <div className="flex flex-col ">
                <h1 className="text-[60px] font-bold">
                    10
                </h1>
                <p className="text-[32px]">
                    Escolas visitadas
                </p>
            </div>
            <div className="flex flex-col">
                <div className='flex flex-row items-center'>
                    <Plus />
                    <h1 className='text-[60px] font-bold'>160</h1>
                </div>
                <p className="text-[32px]">
                    Alunos impactados
                </p>
            </div>
            <div className="flex flex-col">
                <h1 className="text-[60px] font-bold">32</h1>
                <p className="text-[32px]">
                    Membros no projeto
                </p>
            </div>
        </div>
    )
}