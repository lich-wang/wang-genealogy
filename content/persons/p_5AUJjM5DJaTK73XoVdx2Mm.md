---
schema: wang-person/v1
id: p_5AUJjM5DJaTK73XoVdx2Mm
status: active
merged_into: null
display_name: 王縉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mLH4HYB8HyTAuytBs3H6Js
        subject_person_id: p_5AUJjM5DJaTK73XoVdx2Mm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_htMA8AZkCMmTG4yuCZ2Ded
          claim_id: c_mLH4HYB8HyTAuytBs3H6Js
          source_id: s_5KJAr2EEoaMkEH3WrA7h4Q
          stance: supports
          locator: CBDB:201041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201041）
          source: &a1
            id: s_5KJAr2EEoaMkEH3WrA7h4Q
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 201041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201041&o=json
            external_identifier: CBDB:201041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.650Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PLJnn7AkdzUZvnvevZEb4Y
        subject_person_id: p_5AUJjM5DJaTK73XoVdx2Mm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1464年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aqsjCGsLtjFzQs2HWMktvD
          claim_id: c_PLJnn7AkdzUZvnvevZEb4Y
          source_id: s_5KJAr2EEoaMkEH3WrA7h4Q
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
        id: c_g12xAFefNkt4fybkFbvwDZ
        subject_person_id: p_5AUJjM5DJaTK73XoVdx2Mm
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
        - id: cs_MgNbY1JdtAn37kqg71wWJJ
          claim_id: c_g12xAFefNkt4fybkFbvwDZ
          source_id: s_5KJAr2EEoaMkEH3WrA7h4Q
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

# 王縉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縉 | accepted |
| birth.date | 1464年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王縉（CBDB 201041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201041&o=json)
