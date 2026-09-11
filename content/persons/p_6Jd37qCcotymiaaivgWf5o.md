---
schema: wang-person/v1
id: p_6Jd37qCcotymiaaivgWf5o
status: active
merged_into: null
display_name: 王綸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F1yp6QAHpbLtEvGA4sQ911
        subject_person_id: p_6Jd37qCcotymiaaivgWf5o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RtjupfZSQZE2w6tD7u2sRR
          claim_id: c_F1yp6QAHpbLtEvGA4sQ911
          source_id: s_eoHJq17q96k1W3cr8BcMNx
          stance: supports
          locator: CBDB:686987
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686987）
          source: &a1
            id: s_eoHJq17q96k1W3cr8BcMNx
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 686987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686987&o=json
            external_identifier: CBDB:686987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.406Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iG6MFdu6GRzsCJHMExA3pj
        subject_person_id: p_6Jd37qCcotymiaaivgWf5o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸，宋人物。籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 686987）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gLfvc5v6-omxpM82MYh7aO
          claim_id: c_iG6MFdu6GRzsCJHMExA3pj
          source_id: s_eoHJq17q96k1W3cr8BcMNx
          stance: supports
          locator: CBDB:686987
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

# 王綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綸 | accepted |
| bio.summary | 王綸，宋人物。籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 686987） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綸（CBDB 686987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686987&o=json)
