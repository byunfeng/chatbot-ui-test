import useHotkey from "@/lib/hooks/use-hotkey"
import {
  IconCalendarStats,
  IconBrandX,
  IconHelpCircle,
  IconQuestionMark,
  IconFiles
} from "@tabler/icons-react"
import Link from "next/link"
import { FC, useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../ui/dropdown-menu"
import { Announcements } from "../utility/announcements"

interface ChatHelpProps {}

export const ChatHelp: FC<ChatHelpProps> = ({}) => {
  useHotkey("/", () => setIsOpen(prevState => !prevState))

  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <IconQuestionMark className="bg-primary text-secondary h-[24px] w-[24px] cursor-pointer rounded-full p-0.5 opacity-60 hover:opacity-50 lg:h-[30px] lg:w-[30px] lg:p-1" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="flex items-center justify-between">
          <div className="flex space-x-2">
            <Link
              className="cursor-pointer hover:opacity-50"
              href="https://twitter.com/HikaFeng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandX />
            </Link>

            <Link
              className="cursor-pointer hover:opacity-50"
              href="https://platform.apiskey.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFiles/>
            </Link>
          </div>

          <div className="flex space-x-2">
            <Announcements />

            <Link
              className="cursor-pointer hover:opacity-50"
              href="https://status.apiskey.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconCalendarStats size={24} />
            </Link>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="flex justify-between">
          <div>Show Help</div>
          <div className="flex opacity-60">
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              ⌘
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              Shift
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              /
            </div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex justify-between">
          <div>Show Workspaces</div>
          <div className="flex opacity-60">
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              ⌘
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              Shift
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              ;
            </div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex w-[300px] justify-between">
          <div>New Chat</div>
          <div className="flex opacity-60">
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              ⌘
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              Shift
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              O
            </div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex justify-between">
          <div>Focus Chat</div>
          <div className="flex opacity-60">
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              ⌘
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              Shift
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              L
            </div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex justify-between">
          <div>Open Settings</div>
          <div className="flex opacity-60">
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              ⌘
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              Shift
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              I
            </div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex justify-between">
          <div>Open Presets</div>
          <div className="flex opacity-60">
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              ⌘
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              Shift
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              P
            </div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex justify-between">
          <div>Toggle Sidebar</div>
          <div className="flex opacity-60">
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              ⌘
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              Shift
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              S
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
