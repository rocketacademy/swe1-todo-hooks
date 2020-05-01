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
    toolbar: theme.mixins.toolbar,
    root: {
      flexGrow: 1,
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    appBar: {
      boxShadow: 'none',
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    title: {
      flexGrow: 1,
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    body: {
      margin: theme.spacing(2),
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
        <div className={classes.toolbar} />
        <ScrollToTopButton />
        <Grid className={classes.body} container spacing={4} dense>
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
