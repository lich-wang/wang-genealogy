---
schema: wang-person/v1
id: p_41qvot3sCFEuGH5MJMdABn
status: active
merged_into: null
display_name: 王玨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T2kc5h3kegFwfFNgucgbi8
        subject_person_id: p_41qvot3sCFEuGH5MJMdABn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qBF5PecfHQ7HZX9dUiaLjg
          claim_id: c_T2kc5h3kegFwfFNgucgbi8
          source_id: s_gFTVgvwJfuTVGW7xDjw3g4
          stance: supports
          locator: CBDB:696395
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696395）
          source: &a1
            id: s_gFTVgvwJfuTVGW7xDjw3g4
            source_type: api_record
            title: 中国历代人物传记资料库：王玨（CBDB 696395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696395&o=json
            external_identifier: CBDB:696395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.549Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9KbZHJQS8G4B31v1Aq6GCa
        subject_person_id: p_41qvot3sCFEuGH5MJMdABn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玨，宋人物。入仕進士，曾任太學博士、同群牧事知州、軍。（中国历代人物传记资料库 CBDB 696395）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_62yeZfTvBwLtEzElFKql8e
          claim_id: c_9KbZHJQS8G4B31v1Aq6GCa
          source_id: s_gFTVgvwJfuTVGW7xDjw3g4
          stance: supports
          locator: CBDB:696395
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

# 王玨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玨 | accepted |
| bio.summary | 王玨，宋人物。入仕進士，曾任太學博士、同群牧事知州、軍。（中国历代人物传记资料库 CBDB 696395） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玨（CBDB 696395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696395&o=json)
