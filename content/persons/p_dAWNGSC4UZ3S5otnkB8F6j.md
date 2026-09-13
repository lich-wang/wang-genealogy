---
schema: wang-person/v1
id: p_dAWNGSC4UZ3S5otnkB8F6j
status: active
merged_into: null
display_name: 王某祖
cbdb_id: 334093
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vnEQtcTa2u2MAFAkKT6AED
        subject_person_id: p_dAWNGSC4UZ3S5otnkB8F6j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某祖，明人物。隆慶二年進士，籍贯南陽。（中国历代人物传记资料库 CBDB 334093）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Y4_xlWS944aNhvcX1If14x
          claim_id: c_vnEQtcTa2u2MAFAkKT6AED
          source_id: s_2Ja6LP7HKGJxA45185n2cL
          stance: supports
          locator: CBDB:334093
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2Ja6LP7HKGJxA45185n2cL
            source_type: api_record
            title: 中国历代人物传记资料库：王某祖（CBDB 334093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334093&o=json
            external_identifier: CBDB:334093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QK2L1ah1rCbbbKU36Wifxn
        subject_person_id: p_dAWNGSC4UZ3S5otnkB8F6j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sGBKAr8UK5P76DsjJzwuDo
          claim_id: c_QK2L1ah1rCbbbKU36Wifxn
          source_id: s_2Ja6LP7HKGJxA45185n2cL
          stance: supports
          locator: CBDB:334093
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
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

# 王某祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王某祖，明人物。隆慶二年進士，籍贯南陽。（中国历代人物传记资料库 CBDB 334093） | accepted |
| name.primary | 王某祖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王某祖（CBDB 334093）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334093&o=json)
