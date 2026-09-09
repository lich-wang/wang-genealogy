---
schema: wang-person/v1
id: p_p1ZvsDfcYjP35es27bWuZP
status: active
merged_into: null
display_name: 王由義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jeRDVymn5zk5FC4SfJbRbQ
        subject_person_id: p_p1ZvsDfcYjP35es27bWuZP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王由義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G9MLnFnNV8USb9g6xA48Pt
          claim_id: c_jeRDVymn5zk5FC4SfJbRbQ
          source_id: s_XdowB1DAFs1es3W3sjoQEg
          stance: supports
          locator: CBDB:101133
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101133）
          source: &a1
            id: s_XdowB1DAFs1es3W3sjoQEg
            source_type: api_record
            title: 中国历代人物传记资料库：王由義（CBDB 101133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101133&o=json
            external_identifier: CBDB:101133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FMTyyYbNQws56o8jTPueju
        subject_person_id: p_p1ZvsDfcYjP35es27bWuZP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sxb5m2R1k7uXic72p3skyD
          claim_id: c_FMTyyYbNQws56o8jTPueju
          source_id: s_XdowB1DAFs1es3W3sjoQEg
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

# 王由義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王由義 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王由義（CBDB 101133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101133&o=json)
