class Helpers {
  static authLoader = self => {
    const { loader } = self.props.currentUser;
    let btnStatus = loader === true ? 'Connecting...' : 'Submit';
    return btnStatus;
  }
}

export default Helpers;
