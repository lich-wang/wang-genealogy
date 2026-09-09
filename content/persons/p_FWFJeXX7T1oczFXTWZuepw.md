---
schema: wang-person/v1
id: p_FWFJeXX7T1oczFXTWZuepw
status: active
merged_into: null
display_name: 王遜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_suBQCTfLqBzGa2F2eUEY8f
        subject_person_id: p_FWFJeXX7T1oczFXTWZuepw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PgGCsULumgbs5Q5zmh5SWs
          claim_id: c_suBQCTfLqBzGa2F2eUEY8f
          source_id: s_QU7pExomsxyJL4F2qgor1J
          stance: supports
          locator: CBDB:126778
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126778）
          source: &a1
            id: s_QU7pExomsxyJL4F2qgor1J
            source_type: api_record
            title: 中国历代人物传记资料库：王遜（CBDB 126778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126778&o=json
            external_identifier: CBDB:126778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.196Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NumNqt7zC9M8E8aaZMoVak
        subject_person_id: p_FWFJeXX7T1oczFXTWZuepw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DF8GFogmCRyDmfCuxVm8n6
          claim_id: c_NumNqt7zC9M8E8aaZMoVak
          source_id: s_QU7pExomsxyJL4F2qgor1J
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

# 王遜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遜 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遜（CBDB 126778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126778&o=json)
