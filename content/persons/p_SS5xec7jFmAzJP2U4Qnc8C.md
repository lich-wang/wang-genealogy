---
schema: wang-person/v1
id: p_SS5xec7jFmAzJP2U4Qnc8C
status: active
merged_into: null
display_name: 王德華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KAf83EMAkt9jzmKAiJ9t5R
        subject_person_id: p_SS5xec7jFmAzJP2U4Qnc8C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KPG4kJcbiCgQoq4C4GFXCs
          claim_id: c_KAf83EMAkt9jzmKAiJ9t5R
          source_id: s_5wCHF5UPrcF5PWvMF97FCd
          stance: supports
          locator: CBDB:637710
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637710）
          source: &a1
            id: s_5wCHF5UPrcF5PWvMF97FCd
            source_type: api_record
            title: 中国历代人物传记资料库：王德華（CBDB 637710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637710&o=json
            external_identifier: CBDB:637710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.502Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KqTUyPMpXoYsNo2ScA9Ncr
        subject_person_id: p_SS5xec7jFmAzJP2U4Qnc8C
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
        - id: cs_7ogMoaB4Fvik4U98TfCGZq
          claim_id: c_KqTUyPMpXoYsNo2ScA9Ncr
          source_id: s_5wCHF5UPrcF5PWvMF97FCd
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

# 王德華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德華 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德華（CBDB 637710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637710&o=json)
