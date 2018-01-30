export const loggerMiddleware = store => next => action => {
        console.log('dispatching ', action);
        next(action);
      }

export const promiseMiddleware = store => next => action => {
        if(action.promise){
            action.promise
            .then(rawResponse => rawResponse.json())
            .then(response => store.dispatch ({ type: action.type, payload: response}))
        } else {
            next(action)
        }
      }

export const confirmationMiddleware = store => next => action => {
        if (action.shouldConfirm) {
            if(window.confirm('Are you sure?')){
                next(action);
            }
        } else {
            next(action);
        }
      }