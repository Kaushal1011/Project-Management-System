import React from "react";
import { withStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import List from "@material-ui/core/List";
import Listelemproj from "./listelemproj";

const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
  },
  list: {
    width: "100%",
    maxWidth: 360,
  },
}));

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      projectlist: this.props.projectlist,
    };
  }
  componentDidUpdate() {
    console.log(this.state.value);
  }
  render() {
    const classes = useStyles();
    let ListElement;
    if (this.state.value === 0) {
      let projectson = this.state.projectlist.ongoing;
      let projectscom = this.state.projectlist.ongoing;
      let listItems1 = projectson.map((projectson) => (
        <Listelemproj project={projectson} />
      ));
      let listItems2 = projectscom.map((projectscom) => (
        <Listelemproj project={projectscom} />
      ));
      ListElement = (
        <List className={classes.list}>
          {listItems1}
          {listItems2}
        </List>
      );
    }
    if (this.state.value === 1) {
      let projectson = this.state.projectlist.ongoing;
      let listItems1 = projectson.map((projectson) => (
        <Listelemproj project={projectson} />
      ));
      ListElement = <List className={classes.list}>{listItems1}</List>;
    }
    if (this.state.value === 2) {
      let projectscom = this.state.projectlist.ongoing;
      let listItems2 = projectscom.map((projectscom) => (
        <Listelemproj project={projectscom} />
      ));
      ListElement = <List className={classes.list}>{listItems2}</List>;
    }

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={(event, value) => this.setState({ value: value })}
          indicatorColor="primary"
          textColor="primary"
          centered
          variant="fullWidth"
        >
          <Tab label="All Projects" />
          <Tab label="Ongoing Projects" />
          <Tab label="Completed Projects" />
        </Tabs>
        {ListElement}
      </Paper>
    );
  }
}

export default withStyles(useStyles)(ProjectList);
// export default ProjectList;
