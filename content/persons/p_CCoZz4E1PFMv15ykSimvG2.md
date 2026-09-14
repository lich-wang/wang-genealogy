---
schema: wang-person/v1
id: p_CCoZz4E1PFMv15ykSimvG2
status: active
merged_into: null
display_name: 王若拙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cA8pcHwy4ZPqMfuHgL2yiC
        subject_person_id: p_CCoZz4E1PFMv15ykSimvG2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若拙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2aPFUZHYzM4Q2i68PY1X1Q
          claim_id: c_cA8pcHwy4ZPqMfuHgL2yiC
          source_id: s_NzsJcKjznbiZbe1YK9LGW8
          stance: supports
          locator: CBDB:22184
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22184）
          source: &a1
            id: s_NzsJcKjznbiZbe1YK9LGW8
            source_type: api_record
            title: 中国历代人物传记资料库：王若拙（CBDB 22184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22184&o=json
            external_identifier: CBDB:22184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cLmoM314VZKq3R8b3Q25Vw
        subject_person_id: p_CCoZz4E1PFMv15ykSimvG2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若拙，宋人物。籍贯上黨，入仕恩蔭、蔭補，曾任國子監博士、太常寺奉禮郎。（中国历代人物传记资料库 CBDB 22184）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PAYfp83byrqpvKl8__eQdF
          claim_id: c_cLmoM314VZKq3R8b3Q25Vw
          source_id: s_NzsJcKjznbiZbe1YK9LGW8
          stance: supports
          locator: CBDB:22184
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
  other:
    - claim:
        id: c_xTn_DnHK9o_fP7cvxwNd0L
        subject_person_id: p_68LHNKcuxf1uwMJ525gZiC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CCoZz4E1PFMv15ykSimvG2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_thHvQ6tCuRmKstmrP9Jrws
          claim_id: c_xTn_DnHK9o_fP7cvxwNd0L
          source_id: s_BM6bXujVvlSd7PmzYVjOyN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 22184 王若拙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BM6bXujVvlSd7PmzYVjOyN
            source_type: api_record
            title: 中国历代人物传记资料库：王若谷（CBDB 22185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22185&o=json
            external_identifier: CBDB:22185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_68LHNKcuxf1uwMJ525gZiC
        status: active
        display_name: 王若谷
        merged_into_person_id: null
---

# 王若拙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王若拙 | accepted |
| bio.summary | 王若拙，宋人物。籍贯上黨，入仕恩蔭、蔭補，曾任國子監博士、太常寺奉禮郎。（中国历代人物传记资料库 CBDB 22184） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_68LHNKcuxf1uwMJ525gZiC | 王若谷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王若谷（CBDB 22185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22185&o=json)
- [中国历代人物传记资料库：王若拙（CBDB 22184）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22184&o=json)
