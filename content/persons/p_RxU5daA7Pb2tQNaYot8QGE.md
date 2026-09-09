---
schema: wang-person/v1
id: p_RxU5daA7Pb2tQNaYot8QGE
status: active
merged_into: null
display_name: 王術
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SZMDRH62urrwGZ6SD445yY
        subject_person_id: p_RxU5daA7Pb2tQNaYot8QGE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王術
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GFMzdA61fmoSRnpL8zDGhk
          claim_id: c_SZMDRH62urrwGZ6SD445yY
          source_id: s_NHh8KUdFfDXqAWqWVrgED1
          stance: supports
          locator: CBDB:200545
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200545）
          source: &a1
            id: s_NHh8KUdFfDXqAWqWVrgED1
            source_type: api_record
            title: 中国历代人物传记资料库：王術（CBDB 200545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200545&o=json
            external_identifier: CBDB:200545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yzW7L99hUc5idmaXG8FEwm
        subject_person_id: p_RxU5daA7Pb2tQNaYot8QGE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1462年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1opC3LLDDwf9UFuTj3CNDX
          claim_id: c_yzW7L99hUc5idmaXG8FEwm
          source_id: s_NHh8KUdFfDXqAWqWVrgED1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6pBLM3Gs49yGXi68J43fo7
        subject_person_id: p_RxU5daA7Pb2tQNaYot8QGE
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
        - id: cs_sDFg6mn1KT9iJtp42cs1ZM
          claim_id: c_6pBLM3Gs49yGXi68J43fo7
          source_id: s_NHh8KUdFfDXqAWqWVrgED1
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

# 王術

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王術 | accepted |
| birth.date | 1462年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王術（CBDB 200545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200545&o=json)
