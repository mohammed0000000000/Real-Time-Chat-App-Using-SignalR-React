
export function AddOnlineUser(onlineUser: string[], user: string): string[] {
  return [...onlineUser, user];
}
export function RemoveOnlineUser(onlineUser: string[], user: string): string[] {
  return onlineUser.filter((u) => u !== user);
}