import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import * as Progress from 'react-native-progress';

export default function ProgressBar() {
  const [step, setStep] = React.useState(0);
  // Progress from 0 to 100
  var progress = step > 0 ? step / 100 : 0;

  return (
    <View style={styles.app}>

      <Progress.Circle
        strokeCap="round"
        formatText={() =>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', color: '#6852CB' }}>${step}</Text>
            <Text style={{ fontSize: 15 }}><Text style={{ color: '#7659FB', textDecorationLine: 'underline' }}>Max</Text> $200</Text>
          </View>
        }
        unfilledColor="#FFDA69"
        onTouchMove={() => {
          setStep(step + 1);
        }}
        onTouchEnd={() => {
          if (step === 100) {
            setStep(0);
          }
          setStep(step >= 100 ? 0 : step);
        }}
        onTouchEndCapture={() => {
          if (step === 100) {
            setStep(0);
          }
          setStep(step >= 100 ? 0 : step);
        }}

        color='#232323' borderWidth={0} size={250} showsText={true} thickness={25} progress={progress} />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            onPress={() => {
              setStep(step - 5);
            }}
            disabled={step === 0}
            title="Previous"
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => {
              setStep(step + 5);
            }}
            disabled={step === 100}
            title="Next"
          />
        </View>
      </View >
    </View >
  );
}

const styles = StyleSheet.create({
  app: {
    height: '63%',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginBottom: 20,
    fontSize: 20
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 30
  },
  status: {
    marginBottom: 20,
    marginTop: 20
  },
  statusText: {
    fontWeight: "bold",
    fontSize: 25
  },
  buttonContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 20,
  }
});