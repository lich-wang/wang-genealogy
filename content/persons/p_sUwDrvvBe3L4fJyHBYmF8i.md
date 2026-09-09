---
schema: wang-person/v1
id: p_sUwDrvvBe3L4fJyHBYmF8i
status: active
merged_into: null
display_name: 王士桓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e4jM3tdRscSxJDa2PHUXsi
        subject_person_id: p_sUwDrvvBe3L4fJyHBYmF8i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士桓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jQ9FLNbvpc5iPAm9eQaqBH
          claim_id: c_e4jM3tdRscSxJDa2PHUXsi
          source_id: s_xrA9pHUe44LA3zGv2u4Vyz
          stance: supports
          locator: CBDB:71323
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71323）
          source: &a1
            id: s_xrA9pHUe44LA3zGv2u4Vyz
            source_type: api_record
            title: 中国历代人物传记资料库：王士桓（CBDB 71323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71323&o=json
            external_identifier: CBDB:71323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.594Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_y7Dfav7byACtLkuVLGZLpY
        subject_person_id: p_sUwDrvvBe3L4fJyHBYmF8i
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1777年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1aRBFP6AYjVmRgCHAJmn9U
          claim_id: c_y7Dfav7byACtLkuVLGZLpY
          source_id: s_xrA9pHUe44LA3zGv2u4Vyz
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
        id: c_xZ4F2wREpVNhQqzYoQu7A8
        subject_person_id: p_sUwDrvvBe3L4fJyHBYmF8i
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
        - id: cs_JVx1DDzxvW8ZksVnE6rbMi
          claim_id: c_xZ4F2wREpVNhQqzYoQu7A8
          source_id: s_xrA9pHUe44LA3zGv2u4Vyz
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

# 王士桓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士桓 | accepted |
| birth.date | 1777年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士桓（CBDB 71323）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71323&o=json)
