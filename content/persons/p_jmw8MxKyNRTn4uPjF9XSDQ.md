---
schema: wang-person/v1
id: p_jmw8MxKyNRTn4uPjF9XSDQ
status: active
merged_into: null
display_name: 王辰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gpc99o1cNuEATseMUQjrdB
        subject_person_id: p_jmw8MxKyNRTn4uPjF9XSDQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_94pxB1Z6XTvFWJ8jchFuAP
          claim_id: c_Gpc99o1cNuEATseMUQjrdB
          source_id: s_Rh8VDtsXrcK6EaBCPtY1iL
          stance: supports
          locator: CBDB:71072
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71072）
          source: &a1
            id: s_Rh8VDtsXrcK6EaBCPtY1iL
            source_type: api_record
            title: 中国历代人物传记资料库：王辰（CBDB 71072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71072&o=json
            external_identifier: CBDB:71072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.339Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XB7heeK61wB77yuFDdYyvf
        subject_person_id: p_jmw8MxKyNRTn4uPjF9XSDQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1610年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nTftzBMgDGoP26C6NRwVCd
          claim_id: c_XB7heeK61wB77yuFDdYyvf
          source_id: s_Rh8VDtsXrcK6EaBCPtY1iL
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
        id: c_HFF9Yiy8R5qWjrDS5JeCRQ
        subject_person_id: p_jmw8MxKyNRTn4uPjF9XSDQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辰（生于1610年），清人物。籍贯安福。（中国历代人物传记资料库 CBDB 71072）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S1M9v08lFeH8je77u0aX70
          claim_id: c_HFF9Yiy8R5qWjrDS5JeCRQ
          source_id: s_Rh8VDtsXrcK6EaBCPtY1iL
          stance: supports
          locator: CBDB:71072
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

# 王辰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王辰 | accepted |
| birth.date | 1610年 | accepted |
| bio.summary | 王辰（生于1610年），清人物。籍贯安福。（中国历代人物传记资料库 CBDB 71072） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王辰（CBDB 71072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71072&o=json)
