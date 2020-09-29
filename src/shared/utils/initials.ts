export const getInitials = (name: string) => {
  const fullName = name.split(' ');
  let initials = fullName[0].substring(0, 1).toUpperCase();

  if (fullName.length > 1) {
    initials += fullName[fullName.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};
