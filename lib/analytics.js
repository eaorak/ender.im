export const initAnalytics = () => {
      if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
}