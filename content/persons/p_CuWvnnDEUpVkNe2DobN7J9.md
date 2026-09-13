---
schema: wang-person/v1
id: p_CuWvnnDEUpVkNe2DobN7J9
status: active
merged_into: null
display_name: 王惟垣
cbdb_id: 336613
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3qWbmWtJSdtjcWBrjBfqci
        subject_person_id: p_CuWvnnDEUpVkNe2DobN7J9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟垣，明人物。隆慶二年進士，籍贯文安。（中国历代人物传记资料库 CBDB 336613）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_dGB7LXbVsNHBN1fG3zNrUk
          claim_id: c_3qWbmWtJSdtjcWBrjBfqci
          source_id: s_QTwz8baxnguhMVeNrKidx7
          stance: supports
          locator: CBDB:336613
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QTwz8baxnguhMVeNrKidx7
            source_type: api_record
            title: 中国历代人物传记资料库：王惟垣（CBDB 336613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336613&o=json
            external_identifier: CBDB:336613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sHqGr9nFicrorg91Qp1u5G
        subject_person_id: p_CuWvnnDEUpVkNe2DobN7J9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟垣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GcPPWRmaQ39vADL7XqTAeb
          claim_id: c_sHqGr9nFicrorg91Qp1u5G
          source_id: s_QTwz8baxnguhMVeNrKidx7
          stance: supports
          locator: CBDB:336613
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
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

# 王惟垣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惟垣，明人物。隆慶二年進士，籍贯文安。（中国历代人物传记资料库 CBDB 336613） | accepted |
| name.primary | 王惟垣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惟垣（CBDB 336613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336613&o=json)
