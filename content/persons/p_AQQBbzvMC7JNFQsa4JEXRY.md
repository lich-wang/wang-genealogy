---
schema: wang-person/v1
id: p_AQQBbzvMC7JNFQsa4JEXRY
status: active
merged_into: null
display_name: 王澍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ovbSYk5kFkiVsEsaJQLZ62
        subject_person_id: p_AQQBbzvMC7JNFQsa4JEXRY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_21wgh7uvCwvaErwPLAFtxv
          claim_id: c_ovbSYk5kFkiVsEsaJQLZ62
          source_id: s_L6Vp6Yx56abfRWoBhY8R7E
          stance: supports
          locator: CBDB:117611
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（117611）
          source: &a1
            id: s_L6Vp6Yx56abfRWoBhY8R7E
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 117611）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117611&o=json
            external_identifier: CBDB:117611
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_muWmEMA9DjK2W9dPwwME25
        subject_person_id: p_AQQBbzvMC7JNFQsa4JEXRY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1256年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DUx1R3UBPUrt9xD45DEAT8
          claim_id: c_muWmEMA9DjK2W9dPwwME25
          source_id: s_L6Vp6Yx56abfRWoBhY8R7E
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2LEjSo6MHPjcMhnPPxWFo1
        subject_person_id: p_AQQBbzvMC7JNFQsa4JEXRY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1277年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ThS1pPE6nVc37RvX8iZ9hb
          claim_id: c_2LEjSo6MHPjcMhnPPxWFo1
          source_id: s_L6Vp6Yx56abfRWoBhY8R7E
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
        id: c_n59ZLk1fiMyw3CRoEQ44eJ
        subject_person_id: p_AQQBbzvMC7JNFQsa4JEXRY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M61DsRSPTVCoyYVRhQk1b7
          claim_id: c_n59ZLk1fiMyw3CRoEQ44eJ
          source_id: s_L6Vp6Yx56abfRWoBhY8R7E
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

# 王澍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澍 | accepted |
| birth.date | 1256年 | accepted |
| death.date | 1277年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澍（CBDB 117611）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117611&o=json)
