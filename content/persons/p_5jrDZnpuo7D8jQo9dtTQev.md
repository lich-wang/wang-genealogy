---
schema: wang-person/v1
id: p_5jrDZnpuo7D8jQo9dtTQev
status: active
merged_into: null
display_name: 王韶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YJ8gQrbCon9kjWdKLSZacF
        subject_person_id: p_5jrDZnpuo7D8jQo9dtTQev
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5vTRWCs7TvVGz8C78b4UNz
          claim_id: c_YJ8gQrbCon9kjWdKLSZacF
          source_id: s_Ynd7vGfp1yfYqS9tZC9TGC
          stance: supports
          locator: CBDB:162759
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（162759）
          source: &a1
            id: s_Ynd7vGfp1yfYqS9tZC9TGC
            source_type: api_record
            title: 中国历代人物传记资料库：王韶（CBDB 162759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162759&o=json
            external_identifier: CBDB:162759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.954Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yWWks4ZAxEdFuez5YQLwtQ
        subject_person_id: p_5jrDZnpuo7D8jQo9dtTQev
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
        - id: cs_g1d7guSvJjyPmr4F5nQthE
          claim_id: c_yWWks4ZAxEdFuez5YQLwtQ
          source_id: s_Ynd7vGfp1yfYqS9tZC9TGC
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

# 王韶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王韶 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王韶（CBDB 162759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162759&o=json)
