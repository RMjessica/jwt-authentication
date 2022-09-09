const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      authenticated: false,
    },
    actions: {
      login: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };

        try {
          const resp = await fetch(
            "https://3001-4geeksacade-reactflaskh-j0rcrl4w84s.ws-eu64.gitpod.io/api/token",
            opts
          );

          if (resp.status !== 200) {
            alert("Error");
            return;
          }

          const data = await resp.json();
          sessionStorage.setItem("token", data.access_token);
          localStorage.setItem("token", data.access_token);

          setStore({ token: data.access_token });
          setStore({ authenticated: true });
          return;
        } catch (error) {
          console.error("Error login in:", error);
        }
      },
      logout: () => {
        sessionStorage.removeItem("token");
        localStorage.removeItem("token");
        setStore({ authenticated: false });
      },
    },
  };
};

export default getState;
