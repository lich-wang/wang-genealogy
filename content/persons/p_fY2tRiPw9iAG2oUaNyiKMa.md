---
schema: wang-person/v1
id: p_fY2tRiPw9iAG2oUaNyiKMa
status: active
merged_into: null
display_name: 王如暄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CvQ5YxfBJgX1mdAW15PtVP
        subject_person_id: p_fY2tRiPw9iAG2oUaNyiKMa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如暄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_daDSuN6WYUNQgnS7KdVYVG
          claim_id: c_CvQ5YxfBJgX1mdAW15PtVP
          source_id: s_uf9rp3ANu8GhQ2xiXC4crX
          stance: supports
          locator: CBDB:636969
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636969）
          source: &a1
            id: s_uf9rp3ANu8GhQ2xiXC4crX
            source_type: api_record
            title: 中国历代人物传记资料库：王如暄（CBDB 636969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636969&o=json
            external_identifier: CBDB:636969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_baFNkjXSLbCgC331b3MWuv
        subject_person_id: p_fY2tRiPw9iAG2oUaNyiKMa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如暄，清人物。籍贯黃岡，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636969）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GVFj1_5FL5a4c8bPwQhaPd
          claim_id: c_baFNkjXSLbCgC331b3MWuv
          source_id: s_uf9rp3ANu8GhQ2xiXC4crX
          stance: supports
          locator: CBDB:636969
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

# 王如暄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王如暄 | accepted |
| bio.summary | 王如暄，清人物。籍贯黃岡，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636969） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王如暄（CBDB 636969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636969&o=json)
