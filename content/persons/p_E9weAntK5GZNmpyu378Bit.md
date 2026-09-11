---
schema: wang-person/v1
id: p_E9weAntK5GZNmpyu378Bit
status: active
merged_into: null
display_name: 王樹漢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ECvbwGjm3nE3QLPkibhCMy
        subject_person_id: p_E9weAntK5GZNmpyu378Bit
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹漢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LF5iFq4huX2LMFnK5GiMBu
          claim_id: c_ECvbwGjm3nE3QLPkibhCMy
          source_id: s_qKb6V4NEPjrYP8D6gRKnmc
          stance: supports
          locator: CBDB:638863
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638863）
          source: &a1
            id: s_qKb6V4NEPjrYP8D6gRKnmc
            source_type: api_record
            title: 中国历代人物传记资料库：王樹漢（CBDB 638863）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638863&o=json
            external_identifier: CBDB:638863
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HmCLi6brLqMZGqSrLAQSj6
        subject_person_id: p_E9weAntK5GZNmpyu378Bit
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹漢，清人物。籍贯沔陽州，入仕鄉貢舉人，曾任知府。（中国历代人物传记资料库 CBDB 638863）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0sWEtMJMblpVXef_YxihY5
          claim_id: c_HmCLi6brLqMZGqSrLAQSj6
          source_id: s_qKb6V4NEPjrYP8D6gRKnmc
          stance: supports
          locator: CBDB:638863
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

# 王樹漢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹漢 | accepted |
| bio.summary | 王樹漢，清人物。籍贯沔陽州，入仕鄉貢舉人，曾任知府。（中国历代人物传记资料库 CBDB 638863） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樹漢（CBDB 638863）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638863&o=json)
