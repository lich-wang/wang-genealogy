---
schema: wang-person/v1
id: p_KxF3ztvgDwAfsTzqzrkoSm
status: active
merged_into: null
display_name: 王繼燿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rJZpgjUmTaGf9h7Z1R1gMF
        subject_person_id: p_KxF3ztvgDwAfsTzqzrkoSm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼燿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eoGewheYPGr9KBy6MHdiEa
          claim_id: c_rJZpgjUmTaGf9h7Z1R1gMF
          source_id: s_KG961F2rX9i7dVP7rLDmDs
          stance: supports
          locator: CBDB:639876
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639876）
          source: &a1
            id: s_KG961F2rX9i7dVP7rLDmDs
            source_type: api_record
            title: 中国历代人物传记资料库：王繼燿（CBDB 639876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639876&o=json
            external_identifier: CBDB:639876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.070Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MLPSMon3HJgNtP7DBESz9m
        subject_person_id: p_KxF3ztvgDwAfsTzqzrkoSm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼燿，清人物。籍贯大興，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 639876）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LmmghnhElMbbJ3m48_i0lp
          claim_id: c_MLPSMon3HJgNtP7DBESz9m
          source_id: s_KG961F2rX9i7dVP7rLDmDs
          stance: supports
          locator: CBDB:639876
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

# 王繼燿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼燿 | accepted |
| bio.summary | 王繼燿，清人物。籍贯大興，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 639876） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼燿（CBDB 639876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639876&o=json)
