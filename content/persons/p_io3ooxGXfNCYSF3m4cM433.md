---
schema: wang-person/v1
id: p_io3ooxGXfNCYSF3m4cM433
status: active
merged_into: null
display_name: 王宗敏
cbdb_id: 307077
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Ngqt4ktv7kaDknfstELUy
        subject_person_id: p_io3ooxGXfNCYSF3m4cM433
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗敏，明人物。嘉靖二十三年進士，籍贯沂州。（中国历代人物传记资料库 CBDB 307077）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5DCF47ENULgU-WGO-jZoRY
          claim_id: c_4Ngqt4ktv7kaDknfstELUy
          source_id: s_bhxZFSQF7ZKgAernWcR1iG
          stance: supports
          locator: CBDB:307077
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bhxZFSQF7ZKgAernWcR1iG
            source_type: api_record
            title: 中国历代人物传记资料库：王宗敏（CBDB 307077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307077&o=json
            external_identifier: CBDB:307077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6A6rqzP5cn2d6wZ7v3TthU
        subject_person_id: p_io3ooxGXfNCYSF3m4cM433
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6NgmeAj2xJ3vxtFHWYVfG6
          claim_id: c_6A6rqzP5cn2d6wZ7v3TthU
          source_id: s_bhxZFSQF7ZKgAernWcR1iG
          stance: supports
          locator: CBDB:307077
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

# 王宗敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗敏，明人物。嘉靖二十三年進士，籍贯沂州。（中国历代人物传记资料库 CBDB 307077） | accepted |
| name.primary | 王宗敏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗敏（CBDB 307077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307077&o=json)
