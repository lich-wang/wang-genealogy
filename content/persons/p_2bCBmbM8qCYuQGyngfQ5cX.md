---
schema: wang-person/v1
id: p_2bCBmbM8qCYuQGyngfQ5cX
status: active
merged_into: null
display_name: 王士俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qAdtaKLzVWnMQd3RUMfXVj
        subject_person_id: p_2bCBmbM8qCYuQGyngfQ5cX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PBaJq4YaFdQzCjHNBoH56x
          claim_id: c_qAdtaKLzVWnMQd3RUMfXVj
          source_id: s_WCJQPNrQCeBrqnVbxcyFa9
          stance: supports
          locator: CBDB:698753
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698753）
          source: &a1
            id: s_WCJQPNrQCeBrqnVbxcyFa9
            source_type: api_record
            title: 中国历代人物传记资料库：王士俊（CBDB 698753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698753&o=json
            external_identifier: CBDB:698753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.746Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BW6ZfL2Pf1qSJ1Z2gWfAEP
        subject_person_id: p_2bCBmbM8qCYuQGyngfQ5cX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士俊，清人物。曾任總督。（中国历代人物传记资料库 CBDB 698753）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ShFijatnhvvictGaM4Bn8Q
          claim_id: c_BW6ZfL2Pf1qSJ1Z2gWfAEP
          source_id: s_WCJQPNrQCeBrqnVbxcyFa9
          stance: supports
          locator: CBDB:698753
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

# 王士俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士俊 | accepted |
| bio.summary | 王士俊，清人物。曾任總督。（中国历代人物传记资料库 CBDB 698753） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士俊（CBDB 698753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698753&o=json)
