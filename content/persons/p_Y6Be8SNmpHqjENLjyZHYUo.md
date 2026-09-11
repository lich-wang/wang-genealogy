---
schema: wang-person/v1
id: p_Y6Be8SNmpHqjENLjyZHYUo
status: active
merged_into: null
display_name: 王繼春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v6LqAsw5sj1o7YH4KWT5PP
        subject_person_id: p_Y6Be8SNmpHqjENLjyZHYUo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7uGRDmmdyLyNcRsfx3ehVJ
          claim_id: c_v6LqAsw5sj1o7YH4KWT5PP
          source_id: s_6wCUC2reZJpbP9r5x2895x
          stance: supports
          locator: CBDB:639872
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639872）
          source: &a1
            id: s_6wCUC2reZJpbP9r5x2895x
            source_type: api_record
            title: 中国历代人物传记资料库：王繼春（CBDB 639872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639872&o=json
            external_identifier: CBDB:639872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.991Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j27V74ZzpDYbLyNUSM7psK
        subject_person_id: p_Y6Be8SNmpHqjENLjyZHYUo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼春，清人物。籍贯泰安，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 639872）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XPA-G24b8SrhvaBw4jvyYB
          claim_id: c_j27V74ZzpDYbLyNUSM7psK
          source_id: s_6wCUC2reZJpbP9r5x2895x
          stance: supports
          locator: CBDB:639872
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

# 王繼春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼春 | accepted |
| bio.summary | 王繼春，清人物。籍贯泰安，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 639872） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼春（CBDB 639872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639872&o=json)
