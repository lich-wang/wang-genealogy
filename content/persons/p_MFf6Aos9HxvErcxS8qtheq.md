---
schema: wang-person/v1
id: p_MFf6Aos9HxvErcxS8qtheq
status: active
merged_into: null
display_name: 王德藩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gXkjtzHrHsPLM9R82xVCK1
        subject_person_id: p_MFf6Aos9HxvErcxS8qtheq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德藩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CjA4mP2AUQtXJcMKxhBjFE
          claim_id: c_gXkjtzHrHsPLM9R82xVCK1
          source_id: s_z6aGb2HJ562jMCLtTBqPQz
          stance: supports
          locator: CBDB:637713
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637713）
          source: &a1
            id: s_z6aGb2HJ562jMCLtTBqPQz
            source_type: api_record
            title: 中国历代人物传记资料库：王德藩（CBDB 637713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637713&o=json
            external_identifier: CBDB:637713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eFp4N4c4qo6eEety3KAHH2
        subject_person_id: p_MFf6Aos9HxvErcxS8qtheq
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
        - id: cs_35A6dM2ePHEwNC4hUJDdnf
          claim_id: c_eFp4N4c4qo6eEety3KAHH2
          source_id: s_z6aGb2HJ562jMCLtTBqPQz
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

# 王德藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德藩 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德藩（CBDB 637713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637713&o=json)
