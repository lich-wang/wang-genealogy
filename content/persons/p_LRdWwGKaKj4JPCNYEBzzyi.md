---
schema: wang-person/v1
id: p_LRdWwGKaKj4JPCNYEBzzyi
status: active
merged_into: null
display_name: 王炳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TdLh3cKEKvPHkyhSpTyxfK
        subject_person_id: p_LRdWwGKaKj4JPCNYEBzzyi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tCHH5qh3dC17NauzRjPdrz
          claim_id: c_TdLh3cKEKvPHkyhSpTyxfK
          source_id: s_FsDsoZvcsjeDhfqg4nmCDB
          stance: supports
          locator: CBDB:124996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（124996）
          source: &a1
            id: s_FsDsoZvcsjeDhfqg4nmCDB
            source_type: api_record
            title: 中国历代人物传记资料库：王炳（CBDB 124996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124996&o=json
            external_identifier: CBDB:124996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oupBEM8ZMzxSUhiWKhqgcK
        subject_person_id: p_LRdWwGKaKj4JPCNYEBzzyi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳，清人物。明清進士進士，籍贯南鄭，入仕進士，曾任編修、同考官、鄉試考官。（中国历代人物传记资料库 CBDB 124996）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zb9WZY-iaMxC9ALdn65Bq1
          claim_id: c_oupBEM8ZMzxSUhiWKhqgcK
          source_id: s_FsDsoZvcsjeDhfqg4nmCDB
          stance: supports
          locator: CBDB:124996
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

# 王炳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳 | accepted |
| bio.summary | 王炳，清人物。明清進士進士，籍贯南鄭，入仕進士，曾任編修、同考官、鄉試考官。（中国历代人物传记资料库 CBDB 124996） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炳（CBDB 124996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124996&o=json)
