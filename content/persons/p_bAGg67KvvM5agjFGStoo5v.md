---
schema: wang-person/v1
id: p_bAGg67KvvM5agjFGStoo5v
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 5130
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AOtDJIJIgNxfXgncM5I1q6
        subject_person_id: p_bAGg67KvvM5agjFGStoo5v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏（卒於1067），宋人物。籍贯太和，入仕封贈，曾任郡君。（中国历代人物传记资料库 CBDB 5130）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xwx1Dr64fSJSSZoRSCGI8P
          claim_id: c_AOtDJIJIgNxfXgncM5I1q6
          source_id: s_0Md-QDTLzKQWQVBv3O7u98
          stance: supports
          locator: CBDB:5130
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_0Md-QDTLzKQWQVBv3O7u98
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王贄妻)（CBDB 5130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5130&o=json
            external_identifier: CBDB:5130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sStFrJbUE1ts7ndf81Fu7Z
        subject_person_id: p_bAGg67KvvM5agjFGStoo5v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eEnq8JSpq_7zkp0eTj8mGj
          claim_id: c_sStFrJbUE1ts7ndf81Fu7Z
          source_id: s_0Md-QDTLzKQWQVBv3O7u98
          stance: supports
          locator: CBDB:5130
          quotation: null
          interpretation_note: CBDB 明确记录的王贄配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_CZNePMuUmL-XS9Qs-5xTM8
        subject_person_id: p_BsUPyN3PgHdrLvMeySeRLR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_bAGg67KvvM5agjFGStoo5v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6zFYknsReQ4NNHQYBt5Fwk
          claim_id: c_CZNePMuUmL-XS9Qs-5xTM8
          source_id: s_0Md-QDTLzKQWQVBv3O7u98
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1265;1266：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BsUPyN3PgHdrLvMeySeRLR
        status: active
        display_name: 王贄
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 劉氏（卒於1067），宋人物。籍贯太和，入仕封贈，曾任郡君。（中国历代人物传记资料库 CBDB 5130） | accepted |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BsUPyN3PgHdrLvMeySeRLR | 王贄 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王贄妻)（CBDB 5130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5130&o=json)
