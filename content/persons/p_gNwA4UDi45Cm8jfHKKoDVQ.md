---
schema: wang-person/v1
id: p_gNwA4UDi45Cm8jfHKKoDVQ
status: active
merged_into: null
display_name: 王永
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hFgymaQ4v1rCL7p5koyXME
        subject_person_id: p_gNwA4UDi45Cm8jfHKKoDVQ
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
        - id: cs_5zLh47861NM5BPg4mTV2eT
          claim_id: c_hFgymaQ4v1rCL7p5koyXME
          source_id: s_bYcaSXK52V15QkB9B2rZoB
          stance: supports
          locator: CBDB:489376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489376）
          source: &a1
            id: s_bYcaSXK52V15QkB9B2rZoB
            source_type: api_record
            title: 中国历代人物传记资料库：王永（CBDB 489376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489376&o=json
            external_identifier: CBDB:489376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.045Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2xWUKk8GFGiGxJE7yLs727
        subject_person_id: p_gNwA4UDi45Cm8jfHKKoDVQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永，明人物。曾任指揮使。（中国历代人物传记资料库 CBDB 489376）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5Nil9-OLzH2khL75DRKkVQ
          claim_id: c_2xWUKk8GFGiGxJE7yLs727
          source_id: s_bYcaSXK52V15QkB9B2rZoB
          stance: supports
          locator: CBDB:489376
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
| bio.summary | 王永，明人物。曾任指揮使。（中国历代人物传记资料库 CBDB 489376） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永（CBDB 489376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489376&o=json)
