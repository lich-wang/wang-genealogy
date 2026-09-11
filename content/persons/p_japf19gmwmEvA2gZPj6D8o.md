---
schema: wang-person/v1
id: p_japf19gmwmEvA2gZPj6D8o
status: active
merged_into: null
display_name: 王繩曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z9tkUS3AqQcPDApxwaa5Eg
        subject_person_id: p_japf19gmwmEvA2gZPj6D8o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繩曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XAbc4T3bhtK4YXj7Eawmxj
          claim_id: c_Z9tkUS3AqQcPDApxwaa5Eg
          source_id: s_9XJinWgiYfqJg66B6oo1nC
          stance: supports
          locator: CBDB:342418
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342418）
          source: &a1
            id: s_9XJinWgiYfqJg66B6oo1nC
            source_type: api_record
            title: 中国历代人物传记资料库：王繩曾（CBDB 342418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342418&o=json
            external_identifier: CBDB:342418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.925Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vWUu2bQPTZtBTwLGwkVSTE
        subject_person_id: p_japf19gmwmEvA2gZPj6D8o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繩曾，清人物。明清進士進士，籍贯金匱，入仕進士。（中国历代人物传记资料库 CBDB 342418）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YaNDz7HhQ0A-qIgpO4T66S
          claim_id: c_vWUu2bQPTZtBTwLGwkVSTE
          source_id: s_9XJinWgiYfqJg66B6oo1nC
          stance: supports
          locator: CBDB:342418
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王繩曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繩曾 | accepted |
| bio.summary | 王繩曾，清人物。明清進士進士，籍贯金匱，入仕進士。（中国历代人物传记资料库 CBDB 342418） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繩曾（CBDB 342418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342418&o=json)
