export const loggerMiddleware = store => next => action => {
        console.log('dispatching ', action);
        next(action);
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