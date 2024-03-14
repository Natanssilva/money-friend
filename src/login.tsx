import { HandleClick } from "./functions/funcoes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./components/ui/hover-card"

import { CalendarDays } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./components/ui/avatar"

import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"
import moneyFriend from "./images/moneyFriend.jpg";
import moneyHome from "./images/moneyHome.svg";
import perfil from "./images/perfil.png";

import { Flex, Text, Divider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '@aws-amplify/ui-react/styles/reset.layer.css' // global CSS reset
import '@aws-amplify/ui-react/styles/base.layer.css' // base styling needed for Amplify UI
import '@aws-amplify/ui-react/styles/button.layer.css' // component specific styles
import { EnvelopeOpenIcon, GitHubLogoIcon } from "@radix-ui/react-icons/"


export const LabelDivider = () => (
  <div className="mt-6">
    <Flex direction="row" justifyContent="space-around">
      <Button>
        <GitHubLogoIcon className="mr-2 h-4 w-4" /> Login com Github
      </Button>
      <Divider orientation="vertical" />
      <Button>
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login com Gmail
      </Button>
    </Flex>
  </div>
);

export const LabelDivider2 = () => (
  <div className="mt-5">
    <Flex direction="column">
      <Text></Text>
      <Divider label="OU" />
      <Text></Text>
      <span className="flex justify-center text-center text-sm">
        <p className="text-gray-500">Não possui uma conta? <a className=" text-black  hover:text-gray-700 hover:underline text-sm" href="github.com/Natanssilva"> Registre-se agora</a></p>
      </span>
    </Flex>
  </div>
);

interface User {
  name: string,
  imageUrl: string
};

const user: User = {
  name: "MoneyFriend",
  imageUrl: moneyFriend
};

function IconLogin() {
  return (
    <div className="flex justify-center m-6" >
      <img className="w-60" src={user.imageUrl} alt={user.name} />
    </div>
  )
}

function MyProfile() {
  return (
    <HoverCard >
      <HoverCardTrigger asChild>
        <Button variant="link">@Desenvolvedor</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={perfil} alt="me" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@Desenvolvedor</h4>
            <p className="text-sm">
              Desenvolvido e mantido por <a className="hover:underline" href="http://github.com/Natanssilva" target="_blank" >Natanssilva</a> &copy;
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Criado em 2024
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

function SignIn() {
  const { statEye, toggleVisibility } = HandleClick();
  return (
    <main className="flex justify-evenly items-center h-screen w-full">
      <section>

        <div className="flex-col items-center text-wrap text-2xl">
          <div className="italic">
            <h1>Seja bem-vindo ao <span className="text-lime-700">Money Friend</span>,</h1>
            <h2>seu parceiro financeiro para alcançar suas metas com confiança e simplicidade.</h2>
            <img className="w-96" src={moneyHome} alt={user.name} />
          </div>
        </div>
      </section>
      {/* coluna direita */}
      <section className="p-4">
        <IconLogin></IconLogin>
        <form>

          <Card className="w-[400px] h-[490px]">
            <CardHeader>
              <CardTitle className="text-center">Login</CardTitle>
              <CardDescription className="text-center">Seja Bem-Vindo de volta.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="exemplo@email.com" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Input id="password" type={statEye ? "text" : "password"} placeholder="*************" />
                    <div className="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3" onClick={toggleVisibility}>
                      {statEye ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>

                  <span className="text-right ">
                    <a className=" text-gray-500 text-opacity-75 hover:text-gray-700 hover:underline text-sm" href="github.com/Natanssilva">Esqueceu a senha? </a>
                  </span>
                </div>
              </div>
              <div className="flex justify-center m-6">
                <Button className="w-[250px]">Entrar</Button>
              </div>

              <LabelDivider2></LabelDivider2>
              <LabelDivider></LabelDivider>

            </CardContent>


          </Card>
        </form>
        <MyProfile></MyProfile>

      </section>

    </main >


  );
}

export default SignIn;
