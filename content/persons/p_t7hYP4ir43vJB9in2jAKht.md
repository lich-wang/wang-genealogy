---
schema: wang-person/v1
id: p_t7hYP4ir43vJB9in2jAKht
status: active
merged_into: null
display_name: 王一袞
cbdb_id: 298423
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_husXJub83aW6DcX9zAKahG
        subject_person_id: p_t7hYP4ir43vJB9in2jAKht
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一袞，明人物。嘉靖十四年進士，籍贯福清。（中国历代人物传记资料库 CBDB 298423）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-eyUfHRxo5kfAXiSU5Nsrd
          claim_id: c_husXJub83aW6DcX9zAKahG
          source_id: s_BFU4ZRTGKgebGUqKLGBJ87
          stance: supports
          locator: CBDB:298423
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BFU4ZRTGKgebGUqKLGBJ87
            source_type: api_record
            title: 中国历代人物传记资料库：王一袞（CBDB 298423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298423&o=json
            external_identifier: CBDB:298423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TPgkf3Ltgay1JFKfb98gNj
        subject_person_id: p_t7hYP4ir43vJB9in2jAKht
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一袞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xT1SQcdkarV4sEQeC4P5Nn
          claim_id: c_TPgkf3Ltgay1JFKfb98gNj
          source_id: s_BFU4ZRTGKgebGUqKLGBJ87
          stance: supports
          locator: CBDB:298423
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
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

# 王一袞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一袞，明人物。嘉靖十四年進士，籍贯福清。（中国历代人物传记资料库 CBDB 298423） | accepted |
| name.primary | 王一袞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一袞（CBDB 298423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298423&o=json)
