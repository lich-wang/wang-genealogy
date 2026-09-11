---
schema: wang-person/v1
id: p_vseLG5yLuX8SCuGLfRCukQ
status: active
merged_into: null
display_name: 王萬芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pW3ocPeUMYUa4DSrQn8QQk
        subject_person_id: p_vseLG5yLuX8SCuGLfRCukQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nV5uBSQarTPV3KGFVTAEo6
          claim_id: c_pW3ocPeUMYUa4DSrQn8QQk
          source_id: s_P8UMmMFdDwzUqCGfEE23T2
          stance: supports
          locator: CBDB:71338
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71338）
          source: &a1
            id: s_P8UMmMFdDwzUqCGfEE23T2
            source_type: api_record
            title: 中国历代人物传记资料库：王萬芳（CBDB 71338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71338&o=json
            external_identifier: CBDB:71338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.151Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CMHnsEJjfr49eEmYj1muPh
        subject_person_id: p_vseLG5yLuX8SCuGLfRCukQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1855年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mF8YpYZTBVYXrQPrAaU6PJ
          claim_id: c_CMHnsEJjfr49eEmYj1muPh
          source_id: s_P8UMmMFdDwzUqCGfEE23T2
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
        id: c_opCTBz32pCvSa79fpr4aHv
        subject_person_id: p_vseLG5yLuX8SCuGLfRCukQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1901年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GGw2AMP573KEeQgA43ePo1
          claim_id: c_opCTBz32pCvSa79fpr4aHv
          source_id: s_P8UMmMFdDwzUqCGfEE23T2
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
        id: c_MqUDGZc1mNogGwKb5Buigp
        subject_person_id: p_vseLG5yLuX8SCuGLfRCukQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬芳（1855年—1901年），清人物。籍贯襄陽。（中国历代人物传记资料库 CBDB 71338）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dtg_4_5vJxF-mdte9LyVe4
          claim_id: c_MqUDGZc1mNogGwKb5Buigp
          source_id: s_P8UMmMFdDwzUqCGfEE23T2
          stance: supports
          locator: CBDB:71338
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

# 王萬芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬芳 | accepted |
| birth.date | 1855年 | accepted |
| death.date | 1901年 | accepted |
| bio.summary | 王萬芳（1855年—1901年），清人物。籍贯襄陽。（中国历代人物传记资料库 CBDB 71338） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬芳（CBDB 71338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71338&o=json)
