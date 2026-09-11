---
schema: wang-person/v1
id: p_jjAx5Y1YPbjFw34nFbu8m4
status: active
merged_into: null
display_name: 王宜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4h9sezfzw8Q5N5e2ERgnJB
        subject_person_id: p_jjAx5Y1YPbjFw34nFbu8m4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EvUAJDchn1C2nPKD3DKr99
          claim_id: c_4h9sezfzw8Q5N5e2ERgnJB
          source_id: s_66gKaG4Qsfw6gFHXVdUrN8
          stance: supports
          locator: CBDB:489325
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489325）
          source: &a1
            id: s_66gKaG4Qsfw6gFHXVdUrN8
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 489325）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489325&o=json
            external_identifier: CBDB:489325
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HjiwFBWRzV487J2aUYaEyn
        subject_person_id: p_jjAx5Y1YPbjFw34nFbu8m4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王宜，明人物。入仕監生: 例監(附監生)，曾任主簿。（中国历代人物传记资料库 CBDB 489325）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__P5YATS9oRrghKRE4DF-o9
          claim_id: c_HjiwFBWRzV487J2aUYaEyn
          source_id: s_66gKaG4Qsfw6gFHXVdUrN8
          stance: supports
          locator: CBDB:489325
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

# 王宜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宜 | accepted |
| bio.summary | 王宜，明人物。入仕監生: 例監(附監生)，曾任主簿。（中国历代人物传记资料库 CBDB 489325） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宜（CBDB 489325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489325&o=json)
