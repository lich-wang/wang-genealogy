---
schema: wang-person/v1
id: p_RtbMaDgB4aPoZ2sWestmc6
status: active
merged_into: null
display_name: 王緯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8nW21G7yoJX1TSFi5qTGwG
        subject_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Et5TwJDvRPuuZVHvJeCDvk
          claim_id: c_8nW21G7yoJX1TSFi5qTGwG
          source_id: s_TZaKAbrGgqVnEHqF7JVPrE
          stance: supports
          locator: CBDB:200487
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200487）
          source: &a1
            id: s_TZaKAbrGgqVnEHqF7JVPrE
            source_type: api_record
            title: 中国历代人物传记资料库：王緯（CBDB 200487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200487&o=json
            external_identifier: CBDB:200487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.615Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_y6SekejQA1DmA84FDkG9KP
        subject_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1458年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YNStxZ2fV63JBFbYEeJqkx
          claim_id: c_y6SekejQA1DmA84FDkG9KP
          source_id: s_TZaKAbrGgqVnEHqF7JVPrE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hqsHgH68GBDxCvFMnpTv3r
        subject_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PBbkxGGqBkfPuH1wBXdisV
          claim_id: c_hqsHgH68GBDxCvFMnpTv3r
          source_id: s_TZaKAbrGgqVnEHqF7JVPrE
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

# 王緯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緯 | accepted |
| birth.date | 1458年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王緯（CBDB 200487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200487&o=json)
