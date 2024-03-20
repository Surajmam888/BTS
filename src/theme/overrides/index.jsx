import Accordion from "./Accordion";
import Button from "./Button";
import Checkbox from "./Checkbox";
import DataGrid from "./DataGrid";
import Icon from "./Icon";
import IconButton from "./IconButton";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Paper from "./Paper";
import Radio from "./Radio";
import Select from "./Select";
import Slider from "./Slider";
import Switch from "./Switch";
import TextField from "./TextField";
import Tooltip from "./Tooltip";
import Typography from "./Typography";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
    return Object.assign(
        Accordion(theme),
        Button(theme),
        Checkbox(theme),
        DataGrid(theme),
        Icon(theme),
        IconButton(theme),
        Menu(theme),
        MenuItem(theme),
        Paper(theme),
        Radio(theme),
        Select(theme),
        Switch(theme),
        Slider(theme),
        TextField(theme),
        Tooltip(theme),
        Typography(theme)
    );
}
