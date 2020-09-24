import React, {
  createContext,
  useMemo,
  useContext,
  useReducer,
  useEffect,
  useRef,
} from "react";
import { useHistory, useLocation } from "react-router-dom";
import RouteAction from "../constants/RouteAction";

export const RouteContext = createContext({});

function routeReducer(state, { type, payload }) {
  switch (type) {
    case RouteAction.next: {
      const nextRouteIndex = state.currentRouteIndex + 1;
      return {
        ...state,
        currentRouteIndex:
          nextRouteIndex < state.routes.length
            ? nextRouteIndex
            : state.routes.length - 1,
      };
    }
    case RouteAction.prev: {
      const prevRouteIndex = state.currentRouteIndex - 1;
      return {
        ...state,
        currentRouteIndex: prevRouteIndex > 0 ? prevRouteIndex : 0,
      };
    }
    default:
      return { ...state };
  }
}

function RouteContextProvider({ children, routes }) {
  const location = useLocation();
  const initialState = useMemo(
    () => ({
      routes,
      currentRouteIndex: routes.findIndex(
        (route) => route.path === location.pathname
      ),
    }),
    [routes, location.pathname]
  );
  const [state, dispatch] = useReducer(routeReducer, initialState);

  return (
    <RouteContext.Provider value={{ state, dispatch }}>
      {children}
    </RouteContext.Provider>
  );
}

export function useRoute() {
  const { state } = useContext(RouteContext);
  return state.routes;
}

export function useRouteAction() {
  const { state, dispatch } = useContext(RouteContext);
  const history = useHistory();
  const prevRouteIndex = useRef(state.currentRouteIndex);

  useEffect(() => {
    if (prevRouteIndex.current !== state.currentRouteIndex) {
      history.push(state.routes[state.currentRouteIndex].path);
      prevRouteIndex.current = state.currentRouteIndex;
    }
  }, [history, state.currentRouteIndex, state.routes]);

  const next = () => dispatch({ type: RouteAction.next });

  const prev = () => dispatch({ type: RouteAction.prev });

  return { next, prev };
}

export default RouteContextProvider;
