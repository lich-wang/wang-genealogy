---
schema: wang-person/v1
id: p_ds1EunL7j7phN36xPt2mhB
status: active
merged_into: null
display_name: 王世武
cbdb_id: 276005
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3bmNwyVWPxZmNE8vGgurMY
        subject_person_id: p_ds1EunL7j7phN36xPt2mhB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世武，明人物。正德六年進士，籍贯安福，曾任知縣。（中国历代人物传记资料库 CBDB 276005）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PYgOXko6dIF_3OgIw2QGPe
          claim_id: c_3bmNwyVWPxZmNE8vGgurMY
          source_id: s_JAjugioKMwnrmSovHPz7HE
          stance: supports
          locator: CBDB:276005
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JAjugioKMwnrmSovHPz7HE
            source_type: api_record
            title: 中国历代人物传记资料库：王世武（CBDB 276005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276005&o=json
            external_identifier: CBDB:276005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gc4qDRKtPe7WH395Dbo7ft
        subject_person_id: p_ds1EunL7j7phN36xPt2mhB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cDEE5wBFTfCAyCDJjQSrsG
          claim_id: c_gc4qDRKtPe7WH395Dbo7ft
          source_id: s_JAjugioKMwnrmSovHPz7HE
          stance: supports
          locator: CBDB:276005
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
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

# 王世武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世武，明人物。正德六年進士，籍贯安福，曾任知縣。（中国历代人物传记资料库 CBDB 276005） | accepted |
| name.primary | 王世武 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世武（CBDB 276005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276005&o=json)
