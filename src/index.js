#!/usr/bin/env node

const chalk = require('chalk');
const figlet = require('figlet');
const emoji = require('node-emoji');
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

// Display a dramatic ASCII art banner
console.log(
  chalk.magenta(
    figlet.textSync('Codependency', {
      font: 'Standard',
      horizontalLayout: 'default',
      verticalLayout: 'default',
    })
  )
);

console.log(chalk.cyan('\n📦 The unhealthy relationship manager for your packages'));
console.log(chalk.red('💔 Because they\'re "just friends" but act like so much more...\n'));

// Function to analyze a project's dependencies
const analyzeProject = (projectPath = process.cwd()) => {
  console.log(chalk.yellow(`Analyzing project at ${projectPath}...\n`));
  
  try {
    const packageJsonPath = path.join(projectPath, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Get regular dependencies
    const dependencies = packageJson.dependencies || {};
    const devDependencies = packageJson.devDependencies || {};
    
    console.log(chalk.green(`Analyzing relationships between ${Object.keys(dependencies).length} dependencies`));
    
    // Find codependent relationships
    const relationshipIssues = [];
    
    // Check for circular dependencies
    Object.keys(dependencies).forEach(dep => {
      if (devDependencies[dep]) {
        relationshipIssues.push(`${dep} is both a dependency AND a devDependency. It can't decide what it wants to be!`);
      }
      
      // Identify packages that are likely unused 
      if (dep.includes('unused') || dep.includes('deprecated')) {
        relationshipIssues.push(`${dep} feels neglected and unused, but you keep it around anyway.`);
      }
      
      // Identify out-of-date packages
      if (dependencies[dep].includes('^1') && Date.now() > new Date('2023-01-01').getTime()) {
        relationshipIssues.push(`${dep} is afraid of change and is stuck in version 1.x while the world moves on.`);
      }
    });
    
    // Find conflicting peer dependencies
    Object.keys(dependencies).forEach(dep => {
      if (dep.includes('react') && dependencies['vue']) {
        relationshipIssues.push(`You're trying to maintain relationships with both React and Vue. Do they know about each other?`);
      }
    });
    
    // Install new custom field for tracking package emotions
    if (!packageJson.codependencies) {
      console.log(chalk.blue('\nYour package.json lacks emotional awareness. Adding codependencies field...'));
      
      packageJson.codependencies = {};
      
      // Assign random emotional states to dependencies
      const emotions = [
        'needs-constant-validation',
        'can\'t-make-decisions-without',
        'obsessively-imports-everything',
        'terrified-of-being-deprecated',
        'jealous-of-newer-packages',
        'ghosting-your-requires'
      ];
      
      Object.keys(dependencies).forEach(dep => {
        packageJson.codependencies[dep] = emotions[Math.floor(Math.random() * emotions.length)];
      });
      
      // Save the updated package.json
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      console.log(chalk.green('✅ Your packages now have feelings. Deal with it.'));
    } else {
      console.log(chalk.green('✅ Your packages already have emotional states assigned. How thoughtful!'));
      
      // Display the current emotional states
      console.log(chalk.yellow('\nCurrent package emotions:'));
      Object.entries(packageJson.codependencies).forEach(([dep, emotion]) => {
        console.log(`  ${chalk.cyan(dep)}: ${chalk.red(emotion)}`);
      });
    }
    
    // Display relationship issues
    if (relationshipIssues.length > 0) {
      console.log(chalk.yellow('\nPotential relationship issues detected:'));
      relationshipIssues.forEach(issue => {
        console.log(`  ${chalk.red('❗')} ${issue}`);
      });
      console.log(chalk.magenta('\nRecommendation: Run "npm run therapy" to address these issues'));
    } else {
      console.log(chalk.green('\nNo serious issues detected, but that doesn\'t mean your packages are happy!'));
    }
    
  } catch (error) {
    console.error(chalk.red(`\n❌ Error: ${error.message}`));
    console.log(chalk.red('Are you sure this project exists? Or are you in denial?'));
  }
};

// Run the CLI
console.log(chalk.yellow('Let\'s check your package relationships...'));
analyzeProject();

console.log(chalk.magenta('\n👨‍⚕️ Remember: The first step to recovery is admitting you have a problem with npm install.'));
console.log(chalk.blue('For relationship counseling with your packages, run "npm run therapy"\n'));
