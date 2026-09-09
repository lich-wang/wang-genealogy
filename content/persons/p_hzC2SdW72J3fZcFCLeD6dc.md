---
schema: wang-person/v1
id: p_hzC2SdW72J3fZcFCLeD6dc
status: active
merged_into: null
display_name: 王積善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1QCws4v9aqfTZNd69FiPEX
        subject_person_id: p_hzC2SdW72J3fZcFCLeD6dc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王積善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6AC8Wtsmnmf3sFzuHYezCt
          claim_id: c_1QCws4v9aqfTZNd69FiPEX
          source_id: s_Ru4pGo8aT4o55yGDsw8g4x
          stance: supports
          locator: CBDB:639681
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639681）
          source: &a1
            id: s_Ru4pGo8aT4o55yGDsw8g4x
            source_type: api_record
            title: 中国历代人物传记资料库：王積善（CBDB 639681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639681&o=json
            external_identifier: CBDB:639681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PTxp5cPUERZ5aShWCHA3kJ
        subject_person_id: p_hzC2SdW72J3fZcFCLeD6dc
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
        - id: cs_MbTP2DLW2eo4M4Y938HkYx
          claim_id: c_PTxp5cPUERZ5aShWCHA3kJ
          source_id: s_Ru4pGo8aT4o55yGDsw8g4x
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

# 王積善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王積善 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王積善（CBDB 639681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639681&o=json)
