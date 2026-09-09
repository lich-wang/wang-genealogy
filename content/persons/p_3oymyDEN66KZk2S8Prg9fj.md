---
schema: wang-person/v1
id: p_3oymyDEN66KZk2S8Prg9fj
status: active
merged_into: null
display_name: 王元恭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xuCfNFFmLtHsk5iEtGHtNV
        subject_person_id: p_3oymyDEN66KZk2S8Prg9fj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hemr7yQdbPmJFPxX84gc8E
          claim_id: c_xuCfNFFmLtHsk5iEtGHtNV
          source_id: s_8t1t2WrCCAdua2LfPRSKjG
          stance: supports
          locator: CBDB:636149
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636149）
          source: &a1
            id: s_8t1t2WrCCAdua2LfPRSKjG
            source_type: api_record
            title: 中国历代人物传记资料库：王元恭（CBDB 636149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636149&o=json
            external_identifier: CBDB:636149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.108Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3NFRXNfLJ8YLkRwL8A33DQ
        subject_person_id: p_3oymyDEN66KZk2S8Prg9fj
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
        - id: cs_bEyuGuQ8edZewRZmu5VPF4
          claim_id: c_3NFRXNfLJ8YLkRwL8A33DQ
          source_id: s_8t1t2WrCCAdua2LfPRSKjG
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

# 王元恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元恭 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元恭（CBDB 636149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636149&o=json)
