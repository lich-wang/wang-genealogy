---
schema: wang-person/v1
id: p_Wpd2oRwePXfQPUHmHK4oXp
status: active
merged_into: null
display_name: 王憲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xXHwiN3tjYSmUbHqA1386e
        subject_person_id: p_Wpd2oRwePXfQPUHmHK4oXp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9GyW99pv6LYwfvH4LdBFQm
          claim_id: c_xXHwiN3tjYSmUbHqA1386e
          source_id: s_soYD7Ho6yQvHqFtXe3QNkE
          stance: supports
          locator: CBDB:30103
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30103）
          source: &a1
            id: s_soYD7Ho6yQvHqFtXe3QNkE
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 30103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30103&o=json
            external_identifier: CBDB:30103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.024Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_udrj1xzsigofwZK7W2zMsY
        subject_person_id: p_Wpd2oRwePXfQPUHmHK4oXp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲，清人物。籍贯通州，入仕封贈。（中国历代人物传记资料库 CBDB 30103）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZerOUsP0zLmIHdRbikDRQ9
          claim_id: c_udrj1xzsigofwZK7W2zMsY
          source_id: s_soYD7Ho6yQvHqFtXe3QNkE
          stance: supports
          locator: CBDB:30103
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ueMXkgbBsQK0bTXaZGf8YJ
        subject_person_id: p_Wpd2oRwePXfQPUHmHK4oXp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JCAwtuueM2nKFDGAzxYPej
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uwnAPD4luCLRXTrKBMwfxS
          claim_id: c_ueMXkgbBsQK0bTXaZGf8YJ
          source_id: s_XYij-Q9k_jcQpR-cfDMrDT
          stance: supports
          locator: CBDB 亲属：父（KinPerson 30103）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_XYij-Q9k_jcQpR-cfDMrDT
            source_type: api_record
            title: 中国历代人物传记资料库：王大鵬（CBDB 30102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30102&o=json
            external_identifier: CBDB:30102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JCAwtuueM2nKFDGAzxYPej
        status: active
        display_name: 王大鵬
        merged_into_person_id: null
    - claim:
        id: c_KvwI7G1MeMYxinTXvquezo
        subject_person_id: p_Wpd2oRwePXfQPUHmHK4oXp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oBeZ6E9ZNEv9NSM41NvL18
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zJwR_OsSsViR7wOHxOgr9h
          claim_id: c_KvwI7G1MeMYxinTXvquezo
          source_id: s_resfzNHTr4EWGhV1swpSZe
          stance: supports
          locator: CBDB 亲属：父（KinPerson 30103）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_resfzNHTr4EWGhV1swpSZe
            source_type: api_record
            title: 中国历代人物传记资料库：王大鶴（CBDB 30101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30101&o=json
            external_identifier: CBDB:30101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oBeZ6E9ZNEv9NSM41NvL18
        status: active
        display_name: 王大鶴
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲 | accepted |
| bio.summary | 王憲，清人物。籍贯通州，入仕封贈。（中国历代人物传记资料库 CBDB 30103） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_JCAwtuueM2nKFDGAzxYPej | 王大鵬 | accepted |
| children | p_oBeZ6E9ZNEv9NSM41NvL18 | 王大鶴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大鶴（CBDB 30101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30101&o=json)
- [中国历代人物传记资料库：王大鵬（CBDB 30102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30102&o=json)
- [中国历代人物传记资料库：王憲（CBDB 30103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30103&o=json)
