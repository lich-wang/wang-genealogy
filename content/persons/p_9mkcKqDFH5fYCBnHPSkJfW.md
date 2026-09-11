---
schema: wang-person/v1
id: p_9mkcKqDFH5fYCBnHPSkJfW
status: active
merged_into: null
display_name: 王安國
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kEUQacC12gFKxwPhC2LPga
        subject_person_id: p_9mkcKqDFH5fYCBnHPSkJfW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5kmMggt9cPDwG66foVVXLU
          claim_id: c_kEUQacC12gFKxwPhC2LPga
          source_id: s_D1rLtsHtiXmrNu2Dt7dxTP
          stance: supports
          locator: CBDB:69108
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69108）
          source: &a1
            id: s_D1rLtsHtiXmrNu2Dt7dxTP
            source_type: api_record
            title: 中国历代人物传记资料库：王安國（CBDB 69108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69108&o=json
            external_identifier: CBDB:69108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.121Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FM8AKsRebsiTeasBxpgJYK
        subject_person_id: p_9mkcKqDFH5fYCBnHPSkJfW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1661年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eM8eM9MDANUDaD2V6o3V79
          claim_id: c_FM8AKsRebsiTeasBxpgJYK
          source_id: s_D1rLtsHtiXmrNu2Dt7dxTP
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
        id: c_DRQz5BmoP6WC4yW76Axi98
        subject_person_id: p_9mkcKqDFH5fYCBnHPSkJfW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安國（生于1661年），清人物。曾任鎮總兵官。（中国历代人物传记资料库 CBDB 69108）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r4aNfZLWORTt-DJkcK4FIi
          claim_id: c_DRQz5BmoP6WC4yW76Axi98
          source_id: s_D1rLtsHtiXmrNu2Dt7dxTP
          stance: supports
          locator: CBDB:69108
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

# 王安國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安國 | accepted |
| birth.date | 1661年 | accepted |
| bio.summary | 王安國（生于1661年），清人物。曾任鎮總兵官。（中国历代人物传记资料库 CBDB 69108） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安國（CBDB 69108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69108&o=json)
