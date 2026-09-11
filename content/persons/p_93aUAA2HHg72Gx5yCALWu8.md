---
schema: wang-person/v1
id: p_93aUAA2HHg72Gx5yCALWu8
status: active
merged_into: null
display_name: 王國甫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KLE9cp1Y2bV8VFZ2s4rBcp
        subject_person_id: p_93aUAA2HHg72Gx5yCALWu8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LGt6YPeAQdkP4DgrU6yNiE
          claim_id: c_KLE9cp1Y2bV8VFZ2s4rBcp
          source_id: s_nD3Ny9CN8WHNGBjRSp2mre
          stance: supports
          locator: CBDB:69361
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69361）
          source: &a1
            id: s_nD3Ny9CN8WHNGBjRSp2mre
            source_type: api_record
            title: 中国历代人物传记资料库：王國甫（CBDB 69361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69361&o=json
            external_identifier: CBDB:69361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.108Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_v8wEdgXG6vXrSiBVVqK5PV
        subject_person_id: p_93aUAA2HHg72Gx5yCALWu8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1775年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A9UM7XDmYUUEXHSqwBdncb
          claim_id: c_v8wEdgXG6vXrSiBVVqK5PV
          source_id: s_nD3Ny9CN8WHNGBjRSp2mre
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_58X5kr2Fjn8TGmCSNUweX2
        subject_person_id: p_93aUAA2HHg72Gx5yCALWu8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國甫（卒于1775年），清人物。籍贯肅州直隸州，曾任外委。（中国历代人物传记资料库 CBDB 69361）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZNLsiM5LIV-0gNu6z1nAt2
          claim_id: c_58X5kr2Fjn8TGmCSNUweX2
          source_id: s_nD3Ny9CN8WHNGBjRSp2mre
          stance: supports
          locator: CBDB:69361
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

# 王國甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國甫 | accepted |
| death.date | 1775年 | accepted |
| bio.summary | 王國甫（卒于1775年），清人物。籍贯肅州直隸州，曾任外委。（中国历代人物传记资料库 CBDB 69361） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國甫（CBDB 69361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69361&o=json)
