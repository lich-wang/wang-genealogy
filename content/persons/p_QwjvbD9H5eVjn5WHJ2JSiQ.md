---
schema: wang-person/v1
id: p_QwjvbD9H5eVjn5WHJ2JSiQ
status: active
merged_into: null
display_name: 王倫章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JTXnDHPT9ihmaJMqndpHAh
        subject_person_id: p_QwjvbD9H5eVjn5WHJ2JSiQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倫章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6e8Q55xd4BjLTGpq9wqhr7
          claim_id: c_JTXnDHPT9ihmaJMqndpHAh
          source_id: s_mfNqAxBB5GLYTcn62XJth6
          stance: supports
          locator: CBDB:636081
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636081）
          source: &a1
            id: s_mfNqAxBB5GLYTcn62XJth6
            source_type: api_record
            title: 中国历代人物传记资料库：王倫章（CBDB 636081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636081&o=json
            external_identifier: CBDB:636081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RcfS6cPg1vTJCvM6qgwFCU
        subject_person_id: p_QwjvbD9H5eVjn5WHJ2JSiQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倫章，清人物。籍贯鹽山，入仕鄉貢舉人，曾任主簿。（中国历代人物传记资料库 CBDB 636081）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XMjk9nMd80ZCQSw7WEcIOa
          claim_id: c_RcfS6cPg1vTJCvM6qgwFCU
          source_id: s_mfNqAxBB5GLYTcn62XJth6
          stance: supports
          locator: CBDB:636081
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

# 王倫章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倫章 | accepted |
| bio.summary | 王倫章，清人物。籍贯鹽山，入仕鄉貢舉人，曾任主簿。（中国历代人物传记资料库 CBDB 636081） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王倫章（CBDB 636081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636081&o=json)
