---
schema: wang-person/v1
id: p_p612mE4UDLg44MFT142Ax5
status: active
merged_into: null
display_name: 王嵩印
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZbLZFwvbXYZSp56tQE9fgf
        subject_person_id: p_p612mE4UDLg44MFT142Ax5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩印
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_scuxk1tG7bBC1BwNoKf19R
          claim_id: c_ZbLZFwvbXYZSp56tQE9fgf
          source_id: s_uLgSKMRpa6DcFYLa5Y8VEJ
          stance: supports
          locator: CBDB:637367
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637367）
          source: &a1
            id: s_uLgSKMRpa6DcFYLa5Y8VEJ
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩印（CBDB 637367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637367&o=json
            external_identifier: CBDB:637367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qx7J8i1XbMXrQnNrskMcRT
        subject_person_id: p_p612mE4UDLg44MFT142Ax5
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
        - id: cs_bGqMEddzS5XasrZa3y36sL
          claim_id: c_Qx7J8i1XbMXrQnNrskMcRT
          source_id: s_uLgSKMRpa6DcFYLa5Y8VEJ
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

# 王嵩印

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵩印 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嵩印（CBDB 637367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637367&o=json)
