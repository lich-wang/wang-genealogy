---
schema: wang-person/v1
id: p_2LSGWLrXs7XnndXnW76V8U
status: active
merged_into: null
display_name: 王統
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5q7VYaAvdAshWkcgYuUD9x
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王統
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NsBMwdNSSGqkfNp9WCd8h7
          claim_id: c_5q7VYaAvdAshWkcgYuUD9x
          source_id: s_FzHANRPNeNFZ34nEd8FtEx
          stance: supports
          locator: CBDB:200725
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200725）
          source: &a1
            id: s_FzHANRPNeNFZ34nEd8FtEx
            source_type: api_record
            title: 中国历代人物传记资料库：王統（CBDB 200725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200725&o=json
            external_identifier: CBDB:200725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.631Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_x75vsGgzRDtqPSWJCEkuvh
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1451年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B7sNDDvCqcNwBgf2DjWKF4
          claim_id: c_x75vsGgzRDtqPSWJCEkuvh
          source_id: s_FzHANRPNeNFZ34nEd8FtEx
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
        id: c_Bq9LSbxsiy4hJKsGXEk6c9
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
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
        - id: cs_wfqJ6JXPGU8e353y6Tx7Qa
          claim_id: c_Bq9LSbxsiy4hJKsGXEk6c9
          source_id: s_FzHANRPNeNFZ34nEd8FtEx
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

# 王統

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王統 | accepted |
| birth.date | 1451年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王統（CBDB 200725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200725&o=json)
