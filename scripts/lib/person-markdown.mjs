import { parse, stringify } from 'yaml';

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/;

export function parsePersonMarkdown(text, file = '<markdown>') {
  const match = text.match(FRONTMATTER);
  if (!match) throw new Error(`${file}: 缺少 YAML front matter`);
  const record = parse(match[1]);
  if (!record || typeof record !== 'object') throw new Error(`${file}: front matter 必须是对象`);
  return record;
}

export function formatPersonMarkdown(summary) {
  const properties = cleanProperties(summary.properties);
  const relationships = Object.fromEntries(
    Object.entries(summary.relationships).map(([group, items]) => [group, items.map(cleanClaimItem)]),
  );
  const record = {
    schema: 'wang-person/v1',
    id: summary.person.id,
    status: summary.person.status,
    merged_into: summary.redirect_to_person_id,
    display_name: summary.display_name,
    revision: summary.current_revision,
    properties,
    relationships,
  };
  return formatPersonRecordMarkdown(record);
}

export function formatPersonRecordMarkdown(record) {
  const sourceLinks = collectRecordSourceLinks(record);
  const lines = [
    '---',
    stringify(record, { lineWidth: 0 }).trimEnd(),
    '---',
    '',
    `# ${record.display_name ?? record.id}`,
    '',
    '> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。',
    '',
    '## 基本信息',
    '',
    '| 字段 | 内容 | 状态 |',
    '| --- | --- | --- |',
    ...record.properties.flatMap((field) => {
      const claims = [field.recommended, ...field.alternatives].filter(Boolean);
      return claims.map((item) => `| ${field.predicate} | ${escapeCell(claimText(item.claim))} | ${item.claim.status} |`);
    }),
    '',
    '## 关联关系',
    '',
    '| 关系 | 人物 ID | 姓名 | 状态 |',
    '| --- | --- | --- | --- |',
    ...Object.entries(record.relationships).flatMap(([group, items]) =>
      items.map((item) => `| ${group} | ${item.object_person?.id ?? item.claim.object_person_id ?? ''} | ${escapeCell(item.object_person?.display_name ?? '')} | ${item.claim.status} |`),
    ),
    '',
    '## 外部来源',
    '',
    ...(sourceLinks.length ? sourceLinks.map((source) => `- [${escapeLink(source.title)}](${source.url})`) : ['- 暂无可点击的外部来源。']),
    '',
  ];
  return lines.join('\n');
}

function collectRecordSourceLinks(record) {
  const links = new Map();
  const items = [
    ...record.properties.flatMap((field) => [field.recommended, ...field.alternatives]),
    ...Object.values(record.relationships).flat(),
  ].filter(Boolean);
  for (const item of items) {
    for (const ref of item.sources ?? []) {
      const source = ref.source;
      if (source?.canonical_url) links.set(source.canonical_url, { title: source.title, url: source.canonical_url });
    }
  }
  return [...links.values()].sort((a, b) => a.title.localeCompare(b.title, 'zh'));
}

function cleanProperties(properties) {
  return properties.map((field) => ({
    predicate: field.predicate,
    recommended: field.recommended ? cleanClaimItem(field.recommended) : null,
    alternatives: field.alternatives.map(cleanClaimItem),
  }));
}

function cleanClaimItem(item) {
  const claim = { ...item.claim };
  delete claim.created_by_user_id;
  delete claim.created_at;
  delete claim.updated_at;
  const sources = item.sources.map((ref) => {
    const cleanRef = { ...ref, source: ref.source ? { ...ref.source } : null };
    delete cleanRef.added_by_user_id;
    delete cleanRef.created_at;
    if (cleanRef.source) {
      delete cleanRef.source.created_by_user_id;
      delete cleanRef.source.created_at;
    }
    return cleanRef;
  });
  return { claim, sources, object_person: item.object_person ?? null };
}

function collectSourceLinks(summary) {
  const links = new Map();
  const items = [
    ...summary.properties.flatMap((field) => [field.recommended, ...field.alternatives]),
    ...Object.values(summary.relationships).flat(),
  ].filter(Boolean);
  for (const item of items) {
    for (const ref of item.sources ?? []) {
      const source = ref.source;
      if (source?.canonical_url) links.set(source.canonical_url, { title: source.title, url: source.canonical_url });
    }
  }
  return [...links.values()].sort((a, b) => a.title.localeCompare(b.title, 'zh'));
}

function claimText(claim) {
  return claim.value_json?.date?.original_text ?? claim.value_json?.text ?? '';
}

function escapeCell(value) {
  return String(value).replaceAll('|', '\\|').replaceAll('\n', ' ');
}

function escapeLink(value) {
  return String(value).replaceAll('[', '\\[').replaceAll(']', '\\]');
}
