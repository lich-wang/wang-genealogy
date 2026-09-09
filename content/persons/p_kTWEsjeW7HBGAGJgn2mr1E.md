---
schema: wang-person/v1
id: p_kTWEsjeW7HBGAGJgn2mr1E
status: active
merged_into: null
display_name: 王錕生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nBWNt6hrtgCZ8sHHrwcpt1
        subject_person_id: p_kTWEsjeW7HBGAGJgn2mr1E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錕生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E48GwMf44AESMyDwCioA3G
          claim_id: c_nBWNt6hrtgCZ8sHHrwcpt1
          source_id: s_4uwo9oKPgEUfqn2N8BVYai
          stance: supports
          locator: CBDB:640572
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640572）
          source: &a1
            id: s_4uwo9oKPgEUfqn2N8BVYai
            source_type: api_record
            title: 中国历代人物传记资料库：王錕生（CBDB 640572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640572&o=json
            external_identifier: CBDB:640572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n8n7smigeiayLiPvhySZoC
        subject_person_id: p_kTWEsjeW7HBGAGJgn2mr1E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mTTjBQoxJksKQN9Kb51vPX
          claim_id: c_n8n7smigeiayLiPvhySZoC
          source_id: s_4uwo9oKPgEUfqn2N8BVYai
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王錕生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錕生 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錕生（CBDB 640572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640572&o=json)
