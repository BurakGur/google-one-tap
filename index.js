function googleOneTap(
  {
    client_id,
    auto_select = false,
    cancel_on_tap_outside = false,
    context = "signin",
    ...otherOptions
  },
  callback
) {
  if (!client_id) {
    throw new Error("client_id is required");
  }

  if (typeof window !== "undefined" && window.document) {
    const contextValue = ["signin", "signup", "use"].includes(context)
      ? context
      : "signin";
    const googleScript = document.createElement("script");
    googleScript.src = "https://accounts.google.com/gsi/client";
    googleScript.async = true;
    googleScript.defer = true;
    document.head.appendChild(googleScript);
    window.onload = function () {
      window.google.accounts.id.initialize({
        client_id: client_id,
        callback: callback,
        auto_select: auto_select,
        cancel_on_tap_outside: cancel_on_tap_outside,
        context: contextValue,
        ...otherOptions,
      });
      window.google.accounts.id.prompt();
    };
  }
}

module.exports = googleOneTap;
