---
schema: wang-person/v1
id: p_3HCaNXxL8AgjTTECHqX6T9
status: active
merged_into: null
display_name: 王岳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6fUD5vrkCWh1yTZCd9bRDp
        subject_person_id: p_3HCaNXxL8AgjTTECHqX6T9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岳
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UY41WejPEvn1YG69LffLTp
          claim_id: c_6fUD5vrkCWh1yTZCd9bRDp
          source_id: s_7KNeUdNeVN6CuaWUXtNTjA
          stance: supports
          locator: CBDB:169880
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169880）
          source: &a1
            id: s_7KNeUdNeVN6CuaWUXtNTjA
            source_type: api_record
            title: 中国历代人物传记资料库：王岳（CBDB 169880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169880&o=json
            external_identifier: CBDB:169880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_284FRRQfVZVERetkbR14Aw
        subject_person_id: p_3HCaNXxL8AgjTTECHqX6T9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 777年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YHJ1n5HbkHCdJ4fzFmBwgh
          claim_id: c_284FRRQfVZVERetkbR14Aw
          source_id: s_7KNeUdNeVN6CuaWUXtNTjA
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
        id: c_DwYyPvASGdu59zha9HhUhm
        subject_person_id: p_3HCaNXxL8AgjTTECHqX6T9
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
        - id: cs_dmTwsBMgnfVNNnCNJSWTQX
          claim_id: c_DwYyPvASGdu59zha9HhUhm
          source_id: s_7KNeUdNeVN6CuaWUXtNTjA
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

# 王岳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王岳 | accepted |
| death.date | 777年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王岳（CBDB 169880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169880&o=json)
