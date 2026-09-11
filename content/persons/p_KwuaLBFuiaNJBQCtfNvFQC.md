---
schema: wang-person/v1
id: p_KwuaLBFuiaNJBQCtfNvFQC
status: active
merged_into: null
display_name: 王人騏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6hb2T6Zv9b7zqJ1LM5E3DJ
        subject_person_id: p_KwuaLBFuiaNJBQCtfNvFQC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王人騏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CBMiwDUvBSEaRxF13ACmP2
          claim_id: c_6hb2T6Zv9b7zqJ1LM5E3DJ
          source_id: s_t7enXL7wzoQPBoMPtESNqm
          stance: supports
          locator: CBDB:635873
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635873）
          source: &a1
            id: s_t7enXL7wzoQPBoMPtESNqm
            source_type: api_record
            title: 中国历代人物传记资料库：王人騏（CBDB 635873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635873&o=json
            external_identifier: CBDB:635873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.041Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dnpDmKQJif4nhjpAEqBjWP
        subject_person_id: p_KwuaLBFuiaNJBQCtfNvFQC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王人騏，清人物。籍贯江西省，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 635873）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e9zgp9xEj5XID3QJ6_MTql
          claim_id: c_dnpDmKQJif4nhjpAEqBjWP
          source_id: s_t7enXL7wzoQPBoMPtESNqm
          stance: supports
          locator: CBDB:635873
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

# 王人騏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王人騏 | accepted |
| bio.summary | 王人騏，清人物。籍贯江西省，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 635873） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王人騏（CBDB 635873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635873&o=json)
