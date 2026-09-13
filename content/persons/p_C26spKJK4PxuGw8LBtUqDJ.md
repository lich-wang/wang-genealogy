---
schema: wang-person/v1
id: p_C26spKJK4PxuGw8LBtUqDJ
status: active
merged_into: null
display_name: 王陳範
cbdb_id: 310887
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4TGhzFevP1Ywzkypy4KDbg
        subject_person_id: p_C26spKJK4PxuGw8LBtUqDJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陳範，明人物。嘉靖二十六年進士，籍贯泰州。（中国历代人物传记资料库 CBDB 310887）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_rCp3QKnjEvMsp2TYn-w9Nz
          claim_id: c_4TGhzFevP1Ywzkypy4KDbg
          source_id: s_J54L58T4zY3LAE6WX4X2v6
          stance: supports
          locator: CBDB:310887
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_J54L58T4zY3LAE6WX4X2v6
            source_type: api_record
            title: 中国历代人物传记资料库：王陳範（CBDB 310887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310887&o=json
            external_identifier: CBDB:310887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_F1xMcURJDjS9ZTSA8fBRN7
        subject_person_id: p_C26spKJK4PxuGw8LBtUqDJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陳範
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TDP2N7UQVsuhJoe9nPbLck
          claim_id: c_F1xMcURJDjS9ZTSA8fBRN7
          source_id: s_J54L58T4zY3LAE6WX4X2v6
          stance: supports
          locator: CBDB:310887
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
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

# 王陳範

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王陳範，明人物。嘉靖二十六年進士，籍贯泰州。（中国历代人物传记资料库 CBDB 310887） | accepted |
| name.primary | 王陳範 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王陳範（CBDB 310887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310887&o=json)
