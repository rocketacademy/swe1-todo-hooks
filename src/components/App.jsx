import React, { useContext, useEffect } from 'react'
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  createStyles,
  makeStyles,
  Grid,
} from '@material-ui/core'
import TodoCard from './TodoCard'
import ScrollToTopButton from './ScrollToTopButton'
import CreateTodoDialog from './CreateTodoDialog'
import StoreContext from '../store'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      boxShadow: 'none',
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
    title: {
      flexGrow: 1,
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    body: {
      margin: theme.spacing(3),
    },
  }),
)

const App = () => {
  // Used to control our create todo modal.
  const classes = useStyles()
  const { setOpenModal, todos } = useContext(StoreContext)

  useEffect(() => {
    // Any updates to the backend should come here.
    // Backend is not implemented in this todo version.
  }, [])

  return (
    <>
      <div className={classes.root}>
        <AppBar className={classes.appBar} color="transparent">
          <Toolbar id="back-to-top-anchor">
            <Typography variant="h5" className={classes.title}>
              Todo App
            </Typography>
            <Button
              variant="contained"
              onClick={() => setOpenModal(true)}
              color="primary"
              size="large"
            >
              Create Todo
            </Button>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <ScrollToTopButton />
        <Grid className={classes.body} container spacing={4}>
          {todos.map((todo) => (
            <Grid item>
              <TodoCard
                key={todo.id}
                id={todo.id}
                title={todo.title}
                body={todo.description}
                done={todo.done}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      {/* Relevant modals. */}
      <CreateTodoDialog />
    </>
  )
}

export default App
