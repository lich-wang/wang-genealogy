---
schema: wang-person/v1
id: p_AJm6CQ4oPcuxLAr142KLDK
status: active
merged_into: null
display_name: 王固基
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w8wUkS4GQFTvypeF2DBxmV
        subject_person_id: p_AJm6CQ4oPcuxLAr142KLDK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王固基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T8DyX2CABkJkk8KLEBLVqM
          claim_id: c_w8wUkS4GQFTvypeF2DBxmV
          source_id: s_AxMDB8qa1LChdFc28BoNd3
          stance: supports
          locator: CBDB:175653
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175653）
          source: &a1
            id: s_AxMDB8qa1LChdFc28BoNd3
            source_type: api_record
            title: 中国历代人物传记资料库：王固基（CBDB 175653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175653&o=json
            external_identifier: CBDB:175653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.238Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_d5AjiRc9yAtEBmMJ91fJW6
        subject_person_id: p_AJm6CQ4oPcuxLAr142KLDK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 655年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e2wojz2RNbzW56zHcGbNfx
          claim_id: c_d5AjiRc9yAtEBmMJ91fJW6
          source_id: s_AxMDB8qa1LChdFc28BoNd3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YPvBqKq7842xHBAY2okAH9
        subject_person_id: p_AJm6CQ4oPcuxLAr142KLDK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RpmFyfbKWsL5zHUMR9Ccx5
          claim_id: c_YPvBqKq7842xHBAY2okAH9
          source_id: s_AxMDB8qa1LChdFc28BoNd3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王固基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王固基 | accepted |
| death.date | 655年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王固基（CBDB 175653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175653&o=json)
