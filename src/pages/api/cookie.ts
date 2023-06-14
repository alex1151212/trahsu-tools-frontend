export default class Cookie {
  private static sessionForSeconds: number = 3600;

  public static getCookie(key: string): string {
    const cookie = document.cookie;
    let cookieItem = cookie
      .split(";")
      .find((item) => item.split("=")[0].trim() === `${key}`);
    if (cookieItem) {
      cookieItem = cookieItem.trim();
      let value = cookieItem
        .substring(cookieItem.indexOf("=") + 1, cookieItem.length)
        .trim();
      return value;
    } else {
      return "";
    }
  }

  public static setCookie(key: string, value: string, sessionTime?: number) {
    const expireTime = sessionTime ?? this.sessionForSeconds;
    const expires = new Date(Date.now() + expireTime * 1000).toUTCString();
    document.cookie = `${key}=${value}; path=/;${
      expireTime ? expireTime : ` expires=${expires}`
    }`;
  }

  public static clearCookie(key: string) {
    const expires = new Date(Date.now()).toUTCString();
    document.cookie = `${key}=; path=/; expires=${expires}`;
  }

  public static resetLoginCookie() {
    // Cookie.clearCookie("funny");
    // Cookie.clearCookie("skip");
  }
}
