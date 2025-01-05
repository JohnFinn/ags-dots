> [!NOTE]
> AGS V1 is no longer actively maintained. If you install AGS from any package manager, it will default to V2, which is a Scaffolding CLI for Astal+TypeScript. My configuration is based on V1. Since the two versions differ significantly, my config will not work with the latest AGS. To install AGS V1, follow [these instructions](https://github.com/ImRayy/ags-dots/issues/3#issuecomment-2563322949)
---

![banner](https://ik.imagekit.io/rayshold/dotfiles/hyprland-gruvbox-02.png?updatedAt=1736094024314)

|![wall-picker](https://ik.imagekit.io/rayshold/dotfiles/ags/2024-11-04-134310_hyprshot.png?updatedAt=1730733654687)|![image-old](https://ik.imagekit.io/rayshold/dotfiles/ags/2024-11-04-133359_hyprshot.png?updatedAt=1730733654701)|
|---|---|
|wall picker|[old config](https://github.com/ImRayy/ags-dots/tree/square-border) |

## Other Screenshots

<details>
    <summary><code>Flatpak widget with updates & no-updates</code></summary>
    <table>
      <tr>
        <td>
          <img src="https://ik.imagekit.io/rayshold/dotfiles/ags/ags-flatpakt.png?updatedAt=1730780831581" alt="flatpak full">
        </td>
        <td>
          <img src="https://ik.imagekit.io/rayshold/dotfiles/ags/flatpak-empty.png?updatedAt=1730781288069" alt="flatpak empty">
        </td>
      </tr>
      <tr>
        <td align="center">With Updates</td>
        <td align="center">No Updates</td>
      </tr>
    </table>
</details>



## Requirements

- `bun` - for building & compiling stuff
- `sassc` - to compile "scss" files to "css"
- `pipewire` - volume Control
- `libgtop` - resource usage
- `networkmanager`
- `hyprshade`, `hyprpicker` - nightlight & colorpicker
- `swww` - wallpaper-picker & other related stuff
- `imagemagick` - for compressing images
- `flatpak` - flatpak update widget
- `zenity` - file-picker

Sometimes I forget which packages are required, so I may not always update the README accordingly. Please keep that in mind. 🙈

**Fonts**

- `CommitMono Nerd Font`

**Optional**

- `inotify-tools` - for hot-reload script

## Installation

1. [Install AGS](https://aylur.github.io/ags-docs/config/installation/)
2. Clone this repo `git clone https://github.com/ImRayy/ags-dots ~/.config/ags`
3. On terminal `ags`, yes, it's that simple

## Notes

**ColorScheme :** Since I’m using NixOS, the color scheme file imported in `style/style.scss` could originally be `@import "/home/ray/.config/stylix/ags-colors.scss"`, which is generated by [stylix](https://github.com/danth/stylix). Change this to `@import "./colors.scss"`.

**Flatpak update widget & module :**  If you don’t use Flatpak, simply remove `Flatpak()` from `widgets/main.ts` and `FlatpakUpdatesCount()` from `widgets/bar/Bar.ts`. Otherwise, AGS might not run at all—though I’m not entirely sure.

**Wallpaper Picker :** It’s important to add wallpapers only using the wallpaper-picker widget. Why? Because if you add wallpapers manually, the file sizes are larger, which causes AGS to boot up slowly. Compressing the wallpapers fixes this issue, but setting them directly reduces quality. So, I created a method where you add wallpapers using the `Add Walls` button on the wallpaper-picker widget, which automatically compresses them and saves the actual file location in a file called `log.txt`. I hope that covers everything! Also, it’s recommended to `right-click` on any wallpaper to remove it from the list.
