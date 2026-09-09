---
schema: wang-person/v1
id: p_MQTWSwRov7Z5rB9YgWyVJz
status: active
merged_into: null
display_name: 王鐸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UsNL1xXJ7Ezjm2dP2SE81k
        subject_person_id: p_MQTWSwRov7Z5rB9YgWyVJz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gycakcK9SjCKvTeTnYNkpS
          claim_id: c_UsNL1xXJ7Ezjm2dP2SE81k
          source_id: s_dAGRseQMFTNPAQeCRzhd9d
          stance: supports
          locator: CBDB:28793
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28793）
          source: &a1
            id: s_dAGRseQMFTNPAQeCRzhd9d
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 28793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28793&o=json
            external_identifier: CBDB:28793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2Z951Dxj1KvetvLwS6eGzv
        subject_person_id: p_MQTWSwRov7Z5rB9YgWyVJz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为金人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qqK1kDd7h5cNJW6eAseuEY
          claim_id: c_2Z951Dxj1KvetvLwS6eGzv
          source_id: s_dAGRseQMFTNPAQeCRzhd9d
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

# 王鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐸 | accepted |
| bio.summary | CBDB 记载为金人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 28793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28793&o=json)
