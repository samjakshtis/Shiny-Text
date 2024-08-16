# Shiny-Text

A NPM package to display text that shines

The Shining Text component is a React component that adds a dynamic, animated shine effect to text elements. This effect can enhance the visual appeal of text in your application, making it stand out with a glowing, shifting gradient.

## Features

- **Dynamic Animation**: Customizable shine animation with adjustable duration.
- **Customizable Styling**: Allows you to set text color, animation duration, and apply additional CSS classes.
- **Responsive Design**: Adapts to different text sizes and adjusts the shine effect accordingly.

| Prop       | Type   | Description                                          | Default                 |
|------------|--------|------------------------------------------------------|-------------------------|
| `duration` | `string` | Duration of the shine animation.                    | `"2s"`                  |
| `textColor` | `string` | Color of the text. Supports gradient colors.        | `"rgba(100, 220, 255, 0.3)"` |
| `className` | `string` | Custom CSS class name for additional styling.        | `""`                    |

## Installation

To use the Shining Text component in your React application, follow these steps:

1. **Install the Component**

   If published on npm, you can install the component using npm or yarn:

   ```bash
   npm install shining-text-component
   # or
   yarn add shining-text-component
   ```
2. **Add to Project**
## Example

```
<ShiningText duration="3s" textColor="rgba(0, 55, 255,0.6)" className="text-xl">
          Shiny Text
        </ShiningText>
```

![ScreenRecording2024-08-16at11 45 47AM-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/47b2e461-db9e-42d8-baf0-5a32bd3490b7)

## Support

If you find this project useful and want to support my work, please consider [buying me a coffee](https://www.buymeacoffee.com/samjakshtis). Your support is greatly appreciated!

[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-blue.png)](https://www.buymeacoffee.com/samjakshtis)

