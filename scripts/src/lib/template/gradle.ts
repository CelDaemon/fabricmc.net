import type { ComputedConfiguration, TemplateWriter } from './template';
import { renderTemplate } from './eta';
import { addGroovyGradle } from './gradlegroovy';
import { addKotlinGradle } from './gradlekotlin';

import gradlePropertiesTemplate from './templates/gradle/gradle.properties.eta';

export async function addGradle(writer: TemplateWriter, config: ComputedConfiguration) {
    const out =  gradlePropertiesTemplate(config, {});
	await writer.write('gradle.properties', out);
	if (config.gradleKotlin) {
		await addKotlinGradle(writer, config);
	} else {
		await addGroovyGradle(writer, config);
	}
}
