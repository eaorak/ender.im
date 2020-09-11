import ReactGA from "react-ga"

export const initAnalytics = () => {
  if (!window.GA_INITIALIZED) {
    ReactGA.initialize("UA-177836540-1")
    window.GA_INITIALIZED = true
  }
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}