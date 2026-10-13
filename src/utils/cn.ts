export const cn = (classes: CSSModuleClasses, appendClasses: string[]) =>
  appendClasses
    .filter(
      (className) =>
        Boolean(classes) && Object.values(classes).includes(className),
    )
    .join(" ");
