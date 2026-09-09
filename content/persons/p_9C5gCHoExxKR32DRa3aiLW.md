---
schema: wang-person/v1
id: p_9C5gCHoExxKR32DRa3aiLW
status: active
merged_into: null
display_name: 王畿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kCc2HL8L7WPYht1EG5tgX5
        subject_person_id: p_9C5gCHoExxKR32DRa3aiLW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王畿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZoGcQ5cCXWJB79W6gt86DL
          claim_id: c_kCc2HL8L7WPYht1EG5tgX5
          source_id: s_F4tavsXy61QdfD4pQdYw3m
          stance: supports
          locator: CBDB:97974
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97974）
          source: &a1
            id: s_F4tavsXy61QdfD4pQdYw3m
            source_type: api_record
            title: 中国历代人物传记资料库：王畿（CBDB 97974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97974&o=json
            external_identifier: CBDB:97974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ypCDF5RQx1paMjSPM74v7M
        subject_person_id: p_9C5gCHoExxKR32DRa3aiLW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RJnZRYxM7Q3DTQwsPkQjfk
          claim_id: c_ypCDF5RQx1paMjSPM74v7M
          source_id: s_F4tavsXy61QdfD4pQdYw3m
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

# 王畿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王畿 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王畿（CBDB 97974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97974&o=json)
