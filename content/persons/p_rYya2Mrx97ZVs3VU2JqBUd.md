---
schema: wang-person/v1
id: p_rYya2Mrx97ZVs3VU2JqBUd
status: active
merged_into: null
display_name: 王楷平
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jzSpig977HQpK4HU6B1prQ
        subject_person_id: p_rYya2Mrx97ZVs3VU2JqBUd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楷平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yC8N83hy5K5AaMnTU42EPb
          claim_id: c_jzSpig977HQpK4HU6B1prQ
          source_id: s_fj7Q4uoQQ99Y28K4NxSgj8
          stance: supports
          locator: CBDB:638779
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638779）
          source: &a1
            id: s_fj7Q4uoQQ99Y28K4NxSgj8
            source_type: api_record
            title: 中国历代人物传记资料库：王楷平（CBDB 638779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638779&o=json
            external_identifier: CBDB:638779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.744Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rv8MQbLvE8AtrcdSUAxfwz
        subject_person_id: p_rYya2Mrx97ZVs3VU2JqBUd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楷平，清人物。籍贯會稽，曾任典史。（中国历代人物传记资料库 CBDB 638779）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0EzySTOBcIQLMc3Og1Lg7f
          claim_id: c_Rv8MQbLvE8AtrcdSUAxfwz
          source_id: s_fj7Q4uoQQ99Y28K4NxSgj8
          stance: supports
          locator: CBDB:638779
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

# 王楷平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楷平 | accepted |
| bio.summary | 王楷平，清人物。籍贯會稽，曾任典史。（中国历代人物传记资料库 CBDB 638779） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楷平（CBDB 638779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638779&o=json)
