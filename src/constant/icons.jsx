import { FileText, UserRoundX } from "lucide-react";
import { Users } from "lucide-react";
import { MessageSquareMore } from "lucide-react";
import { Landmark } from "lucide-react";
import { Megaphone } from "lucide-react";
import { SendHorizonal } from "lucide-react";
import { Percent } from "lucide-react";
import { Layers3 } from "lucide-react";
import { FolderDown } from "lucide-react";
import {
  AlignJustify,
  AlignStartVertical,
  ArrowLeft,
  Bell,
  CalendarDays,
  ChevronDown,
  Eye,
  EyeOff,
  Filter,
  MoreHorizontal,
  Pencil,
  Plus,
  Search,
  Trash2,
  UploadCloud,
  User,
  X,
} from "lucide-react";

// Inputs
const EYEOFF = <EyeOff className="w-full h-auto" />;
const EYEOPEN = <Eye className="w-full h-auto" />;
const SEARCH = <Search className="w-full h-auto" />;
const PERCENTAGE = <Percent className="w-full h-auto" />;

// Buttons
const LEFTICON = <ArrowLeft className="w-full h-auto" />;

// Header
const USER = <User className="w-full h-auto" />;
const USERROUND = <UserRoundX className="w-full h-auto" />;
const NOTIFICATION = <Bell className="w-full h-auto" />;
const MENU = <AlignJustify className="w-full h-auto" />;

// Dropdown
const DOWN = <ChevronDown className="w-full h-auto" />;

const FILTER = <Filter className="w-full h-auto" />;
const PLUS = <Plus className="w-full h-auto" />;
const DELETE = <Trash2 className="w-full h-auto" />;
const EDIT = <Pencil className="w-full h-auto" />;
const VIEW = <Eye className="w-full h-auto" />;
const SHOWMORE = <MoreHorizontal className="w-full h-auto" />;
const CALENDER = <CalendarDays className="w-full h-auto" />;
const UPLOAD = <UploadCloud className="w-full h-auto" />;
const CLOSE = <X className="w-full h-auto" />;
const ALIGNVERTICAL = <AlignStartVertical className="w-full h-auto" />;
const DOWLOADFILE = <FolderDown className="w-full h-auto" />;
const SEND = <SendHorizonal className="w-full h-auto" />;

export {
  ALIGNVERTICAL,
  CALENDER,
  CLOSE,
  DELETE,
  DOWN,
  EDIT,
  EYEOFF,
  EYEOPEN,
  FILTER,
  LEFTICON,
  MENU,
  NOTIFICATION,
  PLUS,
  SEARCH,
  SHOWMORE,
  UPLOAD,
  USER,
  USERROUND,
  VIEW,
  DOWLOADFILE,
  PERCENTAGE,
  SEND,
};
