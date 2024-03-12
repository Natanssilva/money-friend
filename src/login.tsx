import { HandleClick } from "./functions/funcoes";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"

import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function SignIn() {
  const { statEye, toggleVisibility } = HandleClick();
  return (
    <main className="flex justify-center items-center h-screen w-full">
      <div className="grid grid-cols-3 gap-8 w-full max-w-screen-xl">
        {/* Coluna à esquerda  */}
        <section className="col-span-3 md:col-span-1 bg-gray-200 p-4">
          TESTE 2
        </section>

        {/* Coluna central */}
        <section className="col-span-3 md:col-span-1 bg-gray-200 p-4">
          Teste
        </section>

        {/* Coluna à direita */}
        <section className="col-span-3 md:col-span-1 bg-gray-200 p-4">
          <Card className="w-[350px] h-[350px]">
            <CardHeader>
              <CardTitle className="text-center">Login</CardTitle>
              <CardDescription className="text-center">Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Digite um email válido" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Senha</Label>
                    <div className="relative">
                      <Input id="password" type={statEye ? "text" : "password"} placeholder="Digite uma senha válido" />
                      <div className="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3" onClick={toggleVisibility}>
                        {statEye ? <FaEyeSlash /> : <FaEye />}
                      </div>
                    </div>

                    <span className="text-right ">
                      <a className=" text-gray-500 text-opacity-75 hover:text-gray-700 hover:underline text-sm" href="github.com/Natanssilva">Esqueceu a senha? </a>
                    </span>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="bg-sky-600 w-[250px]">Sign In</Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </main >
  );
}

export default SignIn;
