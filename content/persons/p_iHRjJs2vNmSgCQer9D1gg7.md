---
schema: wang-person/v1
id: p_iHRjJs2vNmSgCQer9D1gg7
status: active
merged_into: null
display_name: 王兆瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LrJJccy47DixNNLUQ6QfLg
        subject_person_id: p_iHRjJs2vNmSgCQer9D1gg7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M2BRaETtNXBvgdJ5fj16AB
          claim_id: c_LrJJccy47DixNNLUQ6QfLg
          source_id: s_5MWZBbCYV1W5ChsC29WNJg
          stance: supports
          locator: CBDB:636213
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636213）
          source: &a1
            id: s_5MWZBbCYV1W5ChsC29WNJg
            source_type: api_record
            title: 中国历代人物传记资料库：王兆瑞（CBDB 636213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636213&o=json
            external_identifier: CBDB:636213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1YNBPBKZmXhWgM3RDgWJcL
        subject_person_id: p_iHRjJs2vNmSgCQer9D1gg7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆瑞，清人物。籍贯南宮，入仕廩貢生，曾任經歷。（中国历代人物传记资料库 CBDB 636213）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5ySUp5DIcnJjFAYllkT4Y7
          claim_id: c_1YNBPBKZmXhWgM3RDgWJcL
          source_id: s_5MWZBbCYV1W5ChsC29WNJg
          stance: supports
          locator: CBDB:636213
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

# 王兆瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆瑞 | accepted |
| bio.summary | 王兆瑞，清人物。籍贯南宮，入仕廩貢生，曾任經歷。（中国历代人物传记资料库 CBDB 636213） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆瑞（CBDB 636213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636213&o=json)
