---
schema: wang-person/v1
id: p_4KwjEKTK6sYpWmbTQ9NecA
status: active
merged_into: null
display_name: 王安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_txZPnQHXiu7mU7nw56SUAA
        subject_person_id: p_4KwjEKTK6sYpWmbTQ9NecA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yzsqPJxxJMycRAPRtXoc6g
          claim_id: c_txZPnQHXiu7mU7nw56SUAA
          source_id: s_HY3fAbgqeGPX4fDGQCfTvf
          stance: supports
          locator: CBDB:253495
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253495）
          source: &a1
            id: s_HY3fAbgqeGPX4fDGQCfTvf
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 253495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253495&o=json
            external_identifier: CBDB:253495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.303Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nRChRzE64ak4T6FDCBYTA7
        subject_person_id: p_4KwjEKTK6sYpWmbTQ9NecA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安，明人物。成化十四年進士，籍贯銅梁。（中国历代人物传记资料库 CBDB 253495）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mnZ0WfnmNxW6gGljTn9Ucz
          claim_id: c_nRChRzE64ak4T6FDCBYTA7
          source_id: s_HY3fAbgqeGPX4fDGQCfTvf
          stance: supports
          locator: CBDB:253495
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安 | accepted |
| bio.summary | 王安，明人物。成化十四年進士，籍贯銅梁。（中国历代人物传记资料库 CBDB 253495） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 253495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253495&o=json)
