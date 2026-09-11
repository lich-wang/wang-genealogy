---
schema: wang-person/v1
id: p_AuYDbrAKLKM5QfE8ZENZnw
status: active
merged_into: null
display_name: 王永
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4vDYR6MPm1Y6nQ3FBCB6Ri
        subject_person_id: p_AuYDbrAKLKM5QfE8ZENZnw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QBvNC2tMRM3P9f3WcB51ME
          claim_id: c_4vDYR6MPm1Y6nQ3FBCB6Ri
          source_id: s_NqmDQyu139TUhbZ1tgYugs
          stance: supports
          locator: CBDB:501857
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（501857）
          source: &a1
            id: s_NqmDQyu139TUhbZ1tgYugs
            source_type: api_record
            title: 中国历代人物传记资料库：王永（CBDB 501857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501857&o=json
            external_identifier: CBDB:501857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.856Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cLiYKrYzd7UFG2BCcKsPb8
        subject_person_id: p_AuYDbrAKLKM5QfE8ZENZnw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 501857）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O_nzUsGxO6GnEOK5ZMsyXq
          claim_id: c_cLiYKrYzd7UFG2BCcKsPb8
          source_id: s_NqmDQyu139TUhbZ1tgYugs
          stance: supports
          locator: CBDB:501857
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

# 王永

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永 | accepted |
| bio.summary | 王永，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 501857） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永（CBDB 501857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501857&o=json)
