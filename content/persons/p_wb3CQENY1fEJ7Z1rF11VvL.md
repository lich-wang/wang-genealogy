---
schema: wang-person/v1
id: p_wb3CQENY1fEJ7Z1rF11VvL
status: active
merged_into: null
display_name: 王仍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y7hz2iQFrooMBYWRQmPkJz
        subject_person_id: p_wb3CQENY1fEJ7Z1rF11VvL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1ayQ6F76WcNPnbNHsPUZVe
          claim_id: c_Y7hz2iQFrooMBYWRQmPkJz
          source_id: s_kH8pgu7ieMwgN2n6cCyEc3
          stance: supports
          locator: CBDB:543318
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（543318）
          source: &a1
            id: s_kH8pgu7ieMwgN2n6cCyEc3
            source_type: api_record
            title: 中国历代人物传记资料库：王仍（CBDB 543318）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543318&o=json
            external_identifier: CBDB:543318
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.447Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sUP9CgDK4rZkGGb6jFP2FP
        subject_person_id: p_wb3CQENY1fEJ7Z1rF11VvL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仍，宋人物。籍贯麗水，入仕進士。（中国历代人物传记资料库 CBDB 543318）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v6Shnmo4s7YFr-H8WI3xZl
          claim_id: c_sUP9CgDK4rZkGGb6jFP2FP
          source_id: s_kH8pgu7ieMwgN2n6cCyEc3
          stance: supports
          locator: CBDB:543318
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

# 王仍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仍 | accepted |
| bio.summary | 王仍，宋人物。籍贯麗水，入仕進士。（中国历代人物传记资料库 CBDB 543318） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仍（CBDB 543318）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543318&o=json)
