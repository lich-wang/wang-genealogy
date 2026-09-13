---
schema: wang-person/v1
id: p_HvY2bQf3ZMqCaBJMQK88sW
status: active
merged_into: null
display_name: 王鳳澤
cbdb_id: 280412
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y7xK65EaXo1174HiUpS5Jw
        subject_person_id: p_HvY2bQf3ZMqCaBJMQK88sW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳澤，明人物。正德十二年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 280412）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_6p8mmO8XMDBVPBbFkdIKoG
          claim_id: c_Y7xK65EaXo1174HiUpS5Jw
          source_id: s_HKkc3fjoM1PyU15sF1frxq
          stance: supports
          locator: CBDB:280412
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HKkc3fjoM1PyU15sF1frxq
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳澤（CBDB 280412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280412&o=json
            external_identifier: CBDB:280412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_o3Ne29yuAeqLpdQ66MbCB1
        subject_person_id: p_HvY2bQf3ZMqCaBJMQK88sW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MM4XUq1qZcuQBtcRdMkRzq
          claim_id: c_o3Ne29yuAeqLpdQ66MbCB1
          source_id: s_HKkc3fjoM1PyU15sF1frxq
          stance: supports
          locator: CBDB:280412
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

# 王鳳澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鳳澤，明人物。正德十二年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 280412） | accepted |
| name.primary | 王鳳澤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳澤（CBDB 280412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280412&o=json)
