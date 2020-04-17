import React from "react";
import { createStyles, withStyles } from "@material-ui/core/styles";
import { Grid, TextField, Paper, Button } from "@material-ui/core";
const useStyles = createStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  root: {
    width: "80%",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "36%",
  },
}));

class EditProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectid: 42069,
      name: "ProjectPage",
      date: "",
      path: "",
      username: "",
      shortdescription: "",
      description: "",
      files: [],
      members: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    this.setState({
      projectid: this.props.projectid,
      name: this.props.name,
      date: this.props.date,
      path: this.props.path,
      username: this.props.username,
      shortdescription: this.props.shortdescription,
      description: this.props.description,
      members: this.props.members,
    });
  }
  handleClick(event) {
    event.preventDefault();
    console.log("Clicker");
    console.log(this.state.members);
    //if success redirect back
    this.props.handleToUpdate();
  }
  render() {
    const { classes } = this.props;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    return (
      <>
        <Paper className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="Name"
                name="Name"
                label="Project name"
                value={this.state.name}
                fullWidth
                onChange={(event) =>
                  this.setState({ name: event.target.value })
                }
                //   autoComplete="fname"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                id="description1"
                name="description1"
                label="Short Description 1"
                value={this.state.shortdescription}
                fullWidth
                onChange={(event) =>
                  this.setState({ shortdescription: event.target.value })
                }
                //   autoComplete="billing address-line1"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline
                id="description2"
                name="description2"
                label="Description"
                value={this.state.description}
                fullWidth
                onChange={(event) =>
                  this.setState({ description: event.target.value })
                }
                //   autoComplete="billing address-line2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="path"
                name="path"
                label="path"
                fullWidth
                value={this.state.path}
                onChange={(event) =>
                  this.setState({ path: event.target.value })
                }
                //   autoComplete="billing address-level2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="date"
                id="date"
                name="date"
                label="Date"
                value={this.state.date}
                defaultValue={today}
                fullWidth
                inputProps={{ readOnly: true }}
                onChange={(event) =>
                  this.setState({ date: event.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="title"
                name="titile"
                label="Member : Enter members in json format [{'username':'ksp','role':'leader'},{}]"
                fullWidth
                value={this.state.members[0].username}
                onChange={(event) => {
                  this.setState({
                    members: JSON.parse(event.target.value),
                  });
                }}
                //
                //   autoComplete="fname"
              />
            </Grid>
          </Grid>
        </Paper>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={(event) => this.handleClick(event)}
        >
          Edit Project
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={this.props.handleToUpdate}
        >
          Back
        </Button>
      </>
    );
  }
}

export default withStyles(useStyles)(EditProject);
