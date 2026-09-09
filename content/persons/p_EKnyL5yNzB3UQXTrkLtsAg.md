---
schema: wang-person/v1
id: p_EKnyL5yNzB3UQXTrkLtsAg
status: active
merged_into: null
display_name: 王鎮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M45cAyDbfozmFPg2EGXuKc
        subject_person_id: p_EKnyL5yNzB3UQXTrkLtsAg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cySg5zovR1KDC6mT6YHyFF
          claim_id: c_M45cAyDbfozmFPg2EGXuKc
          source_id: s_ocnBND2ZpeAEqtQToHFBV8
          stance: supports
          locator: CBDB:208004
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208004）
          source: &a1
            id: s_ocnBND2ZpeAEqtQToHFBV8
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 208004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208004&o=json
            external_identifier: CBDB:208004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9ZDtiDm3X63g3CEUR3Bctz
        subject_person_id: p_EKnyL5yNzB3UQXTrkLtsAg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1407年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cDCbwPMmVonMnxg235PULF
          claim_id: c_9ZDtiDm3X63g3CEUR3Bctz
          source_id: s_ocnBND2ZpeAEqtQToHFBV8
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
        id: c_7rfPH97QaRKLjCM2LW1XBd
        subject_person_id: p_EKnyL5yNzB3UQXTrkLtsAg
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
        - id: cs_YD6hwBGR68fZEPyRiVyLXP
          claim_id: c_7rfPH97QaRKLjCM2LW1XBd
          source_id: s_ocnBND2ZpeAEqtQToHFBV8
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

# 王鎮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮 | accepted |
| birth.date | 1407年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎮（CBDB 208004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208004&o=json)
