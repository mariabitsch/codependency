#!/usr/bin/env node

const chalk = require('chalk');
const emoji = require('node-emoji');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Display therapy session banner
console.log(chalk.blue('\n========================================'));
console.log(chalk.green('🧠 PACKAGE RELATIONSHIP THERAPY SESSION 🧠'));
console.log(chalk.blue('========================================\n'));

console.log(chalk.yellow('Welcome to dependency therapy. Let\'s work through your package issues together.\n'));

// Get the package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');
let packageJson;

try {
  packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
} catch (error) {
  console.error(chalk.red(`Error: Could not find or parse package.json: ${error.message}`));
  process.exit(1);
}

const dependencies = packageJson.dependencies || {};
const devDependencies = packageJson.devDependencies || {};
const codependencies = packageJson.codependencies || {};

// Display current emotions
console.log(chalk.cyan('Current package emotional states:'));
if (Object.keys(codependencies).length === 0) {
  console.log(chalk.red('  No emotions found. Your packages are repressing their feelings.'));
} else {
  Object.entries(codependencies).forEach(([dep, emotion]) => {
    console.log(`  ${chalk.green(dep)}: ${chalk.yellow(emotion)}`);
  });
}

// Therapy session
const startTherapy = async () => {
  console.log(chalk.magenta('\nLet\'s address some common dependency issues:\n'));
  
  const questions = [
    {
      type: 'list',
      name: 'therapyType',
      message: 'What kind of therapy would you like to perform?',
      choices: [
        'Organize dependency intervention',
        'Heal circular dependencies',
        'Work through version conflicts',
        'Package emotion reassignment',
        'Generate a dependency health report',
        'Break up with toxic dependencies'
      ]
    }
  ];
  
  const answers = await inquirer.prompt(questions);
  
  switch (answers.therapyType) {
    case 'Organize dependency intervention':
      await interventionTherapy();
      break;
    case 'Heal circular dependencies':
      await healCircularDependencies();
      break;
    case 'Work through version conflicts':
      await resolveVersionConflicts();
      break;
    case 'Package emotion reassignment':
      await reassignEmotions();
      break;
    case 'Generate a dependency health report':
      generateHealthReport();
      break;
    case 'Break up with toxic dependencies':
      await breakUpWithDependencies();
      break;
  }
};

// Function for dependency intervention
const interventionTherapy = async () => {
  console.log(chalk.green('\nDEPENDENCY INTERVENTION\n'));
  console.log(chalk.yellow('Sometimes we need to confront our dependencies about their behavior.'));
  
  // Find dependencies with the most dependents
  console.log(chalk.blue('\nThe following packages may have too much control over your project:'));
  
  const dependencyList = Object.keys(dependencies);
  const mostInfluential = dependencyList.slice(0, 3);
  
  mostInfluential.forEach(dep => {
    console.log(`  ${chalk.red(dep)}: Your project seems unable to function without this package.`);
    console.log(`     Consider: ${chalk.green('Gradually reducing reliance by abstracting its API')}`);
  });
  
  // Give advice on reducing dependencies
  console.log(chalk.magenta('\nTherapist recommendation:'));
  console.log('  • Try to implement simple functionality yourself instead of adding new dependencies');
  console.log('  • Consider using native JavaScript features that might have replaced old utility libraries');
  console.log('  • Audit your dependencies with "npm audit" regularly to maintain a healthy relationship');
  
  console.log(chalk.blue('\nRemember: A healthy project can stand on its own without too many dependencies.'));
};

// Function for healing circular dependencies
const healCircularDependencies = async () => {
  console.log(chalk.green('\nHEALING CIRCULAR DEPENDENCIES\n'));
  console.log(chalk.yellow('Circular dependencies are like toxic relationships that never end.'));
  
  console.log(chalk.blue('\nCreating a mock analysis to find potential circular dependencies...'));
  
  // Mock circular dependency analysis
  const circularGroups = [
    ['component-a', 'component-b', 'component-c'],
    ['util', 'helper', 'formatter']
  ];
  
  circularGroups.forEach((group, index) => {
    console.log(chalk.red(`\nCircular dependency group #${index + 1}:`));
    console.log(`  ${group.join(' → ')} → ${group[0]}`);
    
    console.log(chalk.green('\n  Therapy suggestions:'));
    console.log('    • Extract common functionality into a shared module');
    console.log('    • Use dependency injection instead of direct imports');
    console.log('    • Restructure your modules to follow a one-way data flow');
  });
  
  console.log(chalk.magenta('\nHomework assignment:'));
  console.log('  Draw a dependency graph of your project to visualize unhealthy relationships');
};

// Function for resolving version conflicts
const resolveVersionConflicts = async () => {
  console.log(chalk.green('\nVERSION CONFLICT RESOLUTION\n'));
  console.log(chalk.yellow('When packages argue about versions, nobody wins.'));
  
  // Mock version conflict detection
  console.log(chalk.blue('\nAnalyzing version requirements across your dependencies...'));
  
  const conflicts = [
    { name: 'react', versions: ['16.x', '17.x', '18.x'] },
    { name: 'typescript', versions: ['4.5.x', '4.9.x'] }
  ];
  
  if (conflicts.length > 0) {
    console.log(chalk.red('\nIdentified version conflicts:'));
    
    conflicts.forEach(conflict => {
      console.log(`  ${chalk.cyan(conflict.name)}: Required as ${conflict.versions.join(', ')}`);
    });
    
    console.log(chalk.green('\nTherapy approaches:'));
    console.log('  • Update all packages to use compatible versions');
    console.log('  • Use package resolutions or overrides to force version alignment');
    console.log('  • Consider a major dependency cleanup and standardization sprint');
  } else {
    console.log(chalk.green('\nNo major version conflicts detected. Your packages are communicating well!'));
  }
};

// Function for reassigning emotions
const reassignEmotions = async () => {
  console.log(chalk.green('\nPACKAGE EMOTION REASSIGNMENT\n'));
  console.log(chalk.yellow('Let\'s help your packages work through their feelings.'));
  
  const allDeps = [...Object.keys(dependencies), ...Object.keys(devDependencies)];
  
  if (allDeps.length === 0) {
    console.log(chalk.red('\nNo dependencies found to reassign emotions to.'));
    return;
  }
  
  // Randomly select 3 dependencies to work with
  const selectedDeps = allDeps
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.min(3, allDeps.length));
  
  console.log(chalk.blue('\nSelected packages for emotional work:'));
  selectedDeps.forEach(dep => {
    console.log(`  ${chalk.cyan(dep)}: Currently feeling ${chalk.red(codependencies[dep] || 'emotionally unavailable')}`);
  });
  
  // Emotion reassignment options
  const emotions = [
    'self-sufficient',
    'confident-in-api',
    'plays-well-with-others',
    'healthy-boundaries',
    'stable-and-reliable',
    'communicates-clearly'
  ];
  
  // Update emotions
  const updatedCodependencies = { ...codependencies };
  
  for (const dep of selectedDeps) {
    const { newEmotion } = await inquirer.prompt([
      {
        type: 'list',
        name: 'newEmotion',
        message: `Choose a healthier emotional state for ${dep}:`,
        choices: emotions
      }
    ]);
    
    updatedCodependencies[dep] = newEmotion;
    console.log(chalk.green(`  ✅ ${dep} is now feeling ${newEmotion}`));
  }
  
  // Save updated emotions
  packageJson.codependencies = updatedCodependencies;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  
  console.log(chalk.green('\nPackage emotions have been updated in your package.json!'));
  console.log(chalk.yellow('Remember that emotional growth is an ongoing process.'));
};

// Function for generating health report
const generateHealthReport = () => {
  console.log(chalk.green('\nDEPENDENCY HEALTH REPORT\n'));
  console.log(chalk.yellow('A holistic view of your project\'s dependency well-being.'));
  
  // General statistics
  const totalDeps = Object.keys(dependencies).length;
  const totalDevDeps = Object.keys(devDependencies).length;
  
  console.log(chalk.blue('\nDependency Statistics:'));
  console.log(`  Regular Dependencies: ${totalDeps}`);
  console.log(`  Development Dependencies: ${totalDevDeps}`);
  console.log(`  Total Dependencies: ${totalDeps + totalDevDeps}`);
  console.log(`  Dependency-to-DevDependency Ratio: ${(totalDeps / (totalDevDeps || 1)).toFixed(2)}`);
  
  // Dependency health score (mock calculation)
  const healthScore = Math.min(100, Math.max(0, 100 - (totalDeps * 2) - (totalDevDeps * 0.5)));
  
  console.log(chalk.blue('\nDependency Health Score:'));
  let healthColor;
  let healthStatus;
  
  if (healthScore >= 80) {
    healthColor = chalk.green;
    healthStatus = 'EXCELLENT';
  } else if (healthScore >= 60) {
    healthColor = chalk.yellow;
    healthStatus = 'MODERATE';
  } else {
    healthColor = chalk.red;
    healthStatus = 'CONCERNING';
  }
  
  console.log(`  Score: ${healthColor(healthScore.toFixed(1))}/100 - ${healthStatus}`);
  
  // Health recommendations
  console.log(chalk.blue('\nRecommendations:'));
  
  if (totalDeps > 15) {
    console.log(chalk.red(`  ❗ Your project has ${totalDeps} dependencies, which may be excessive.`));
    console.log('     Consider consolidating or removing unnecessary packages.');
  } else {
    console.log(chalk.green(`  ✅ Your project has a reasonable number of dependencies (${totalDeps}).`));
  }
  
  if (totalDevDeps > 20) {
    console.log(chalk.yellow(`  ⚠️ Your project has ${totalDevDeps} development dependencies.`));
    console.log('     While not directly affecting production, this may complicate your build process.');
  }
  
  console.log(chalk.magenta('\nTherapist\'s Note:'));
  console.log('  A healthy project maintains balance between functionality and simplicity.');
  console.log('  Schedule regular "dependency cleanse" sprints to remove unused packages.');
};

// Function for breaking up with dependencies
const breakUpWithDependencies = async () => {
  console.log(chalk.green('\nBREAKING UP WITH TOXIC DEPENDENCIES\n'));
  console.log(chalk.yellow('Sometimes, the healthiest choice is to say goodbye.'));
  
  if (Object.keys(dependencies).length === 0) {
    console.log(chalk.red('\nNo dependencies found to break up with.'));
    return;
  }
  
  // List dependencies to potentially remove
  const { depsToRemove } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'depsToRemove',
      message: 'Select dependencies you want to break up with:',
      choices: Object.keys(dependencies)
    }
  ]);
  
  if (depsToRemove.length === 0) {
    console.log(chalk.yellow('\nNo dependencies selected for removal. That\'s okay too.'));
    console.log('Taking time to think about your relationships is healthy.');
    return;
  }
  
  // Create breakup letters
  console.log(chalk.blue('\nGenerating breakup letters:'));
  
  const reasons = [
    'I need to simplify my life.',
    'It\'s not you, it\'s your bundle size.',
    'We\'ve grown apart as you\'ve added more features I don\'t use.',
    'I found a native JavaScript method that does what you do.',
    'I\'ve decided to write my own implementation.'
  ];
  
  depsToRemove.forEach(dep => {
    const reason = reasons[Math.floor(Math.random() * reasons.length)];
    
    console.log(chalk.cyan(`\nDear ${dep},`));
    console.log(`I'm writing to let you know that I need to remove you from my project. ${reason}`);
    console.log('I appreciate all you\'ve done for me, but it\'s time we go our separate ways.');
    console.log('I wish you the best with all your future projects.');
    console.log(chalk.cyan('Regards,\nYour Project'));
  });
  
  // Offer to actually remove them
  const { confirmRemoval } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmRemoval',
      message: 'Would you like to actually remove these dependencies from your package.json?',
      default: false
    }
  ]);
  
  if (confirmRemoval) {
    // Remove the selected dependencies
    depsToRemove.forEach(dep => {
      delete dependencies[dep];
      if (codependencies[dep]) {
        delete codependencies[dep];
      }
    });
    
    // Save the updated package.json
    packageJson.dependencies = dependencies;
    packageJson.codependencies = codependencies;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    
    console.log(chalk.green('\n✅ The selected dependencies have been removed from your package.json.'));
    console.log(chalk.yellow('Don\'t forget to run "npm prune" to complete the breakup process.'));
  } else {
    console.log(chalk.yellow('\nNo changes made. Sometimes we need time to process our feelings before making changes.'));
  }
  
  console.log(chalk.magenta('\nRemember: It\'s okay to refactor and reduce dependencies. It\'s part of maintaining a healthy codebase.'));
};

// Start the therapy session
startTherapy();
