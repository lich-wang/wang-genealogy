---
schema: wang-person/v1
id: p_Fv29LsF7P2WY7FTUydHDjj
status: active
merged_into: null
display_name: 王長春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i7bfkKCssPF7vfxhkRrB5G
        subject_person_id: p_Fv29LsF7P2WY7FTUydHDjj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DQskNZNmLgLj4uFMAMMXvt
          claim_id: c_i7bfkKCssPF7vfxhkRrB5G
          source_id: s_CErCcG9MqaeMGNAmCVWruk
          stance: supports
          locator: CBDB:530999
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（530999）
          source: &a1
            id: s_CErCcG9MqaeMGNAmCVWruk
            source_type: api_record
            title: 中国历代人物传记资料库：王長春（CBDB 530999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=530999&o=json
            external_identifier: CBDB:530999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JfL7nsgeNKLnUqJWLC3pEj
        subject_person_id: p_Fv29LsF7P2WY7FTUydHDjj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王長春，清人物。入仕科舉制舉: 武舉科，曾任千總。（中国历代人物传记资料库 CBDB 530999）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MFFsKAZYjvJILFQ4xiZQlW
          claim_id: c_JfL7nsgeNKLnUqJWLC3pEj
          source_id: s_CErCcG9MqaeMGNAmCVWruk
          stance: supports
          locator: CBDB:530999
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

# 王長春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王長春 | accepted |
| bio.summary | 王長春，清人物。入仕科舉制舉: 武舉科，曾任千總。（中国历代人物传记资料库 CBDB 530999） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王長春（CBDB 530999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=530999&o=json)
