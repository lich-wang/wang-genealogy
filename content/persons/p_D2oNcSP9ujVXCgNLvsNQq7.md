---
schema: wang-person/v1
id: p_D2oNcSP9ujVXCgNLvsNQq7
status: active
merged_into: null
display_name: 王璽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RHDw1aPYFRBrAhKnZdmNYZ
        subject_person_id: p_D2oNcSP9ujVXCgNLvsNQq7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5A9C6qHsTNi93kFEqEhqYQ
          claim_id: c_RHDw1aPYFRBrAhKnZdmNYZ
          source_id: s_kekNW4qJqBQs88vjAxByMp
          stance: supports
          locator: CBDB:201722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201722）
          source: &a1
            id: s_kekNW4qJqBQs88vjAxByMp
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 201722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201722&o=json
            external_identifier: CBDB:201722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.690Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ihHYTVPNq2kAsPBPiaraac
        subject_person_id: p_D2oNcSP9ujVXCgNLvsNQq7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1469年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YKznD2RVz7W1yY4Zt8DwK4
          claim_id: c_ihHYTVPNq2kAsPBPiaraac
          source_id: s_kekNW4qJqBQs88vjAxByMp
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
        id: c_WNsBviQ8VodPBbquoepjYU
        subject_person_id: p_D2oNcSP9ujVXCgNLvsNQq7
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
        - id: cs_vFDx5UX7d3MP23eeT1GVAU
          claim_id: c_WNsBviQ8VodPBbquoepjYU
          source_id: s_kekNW4qJqBQs88vjAxByMp
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

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| birth.date | 1469年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璽（CBDB 201722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201722&o=json)
