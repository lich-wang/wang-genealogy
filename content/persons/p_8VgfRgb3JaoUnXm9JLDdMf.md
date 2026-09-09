---
schema: wang-person/v1
id: p_8VgfRgb3JaoUnXm9JLDdMf
status: active
merged_into: null
display_name: 王睿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JUBf2kRMAFeG1PQ937NcFR
        subject_person_id: p_8VgfRgb3JaoUnXm9JLDdMf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5Y2yLyTi7LAXghh6AUVc6W
          claim_id: c_JUBf2kRMAFeG1PQ937NcFR
          source_id: s_qyXKEtDpc425imj8DQ2TaN
          stance: supports
          locator: CBDB:120342
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（120342）
          source: &a1
            id: s_qyXKEtDpc425imj8DQ2TaN
            source_type: api_record
            title: 中国历代人物传记资料库：王睿（CBDB 120342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120342&o=json
            external_identifier: CBDB:120342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EFBXwBpSfhFtLiUCP4urvP
        subject_person_id: p_8VgfRgb3JaoUnXm9JLDdMf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1683年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MbX7YBZU9D8ib5bP9UHK3p
          claim_id: c_EFBXwBpSfhFtLiUCP4urvP
          source_id: s_qyXKEtDpc425imj8DQ2TaN
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
        id: c_PgsDrLNvAeB31dxGNKXqQg
        subject_person_id: p_8VgfRgb3JaoUnXm9JLDdMf
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
        - id: cs_egEUJG15Dp4g9jXULBLZ9s
          claim_id: c_PgsDrLNvAeB31dxGNKXqQg
          source_id: s_qyXKEtDpc425imj8DQ2TaN
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

# 王睿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王睿 | accepted |
| death.date | 1683年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王睿（CBDB 120342）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120342&o=json)
