---
schema: wang-person/v1
id: p_WRE3osrZoFy6HJRbmS6gdN
status: active
merged_into: null
display_name: 王深
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_abJJSW7B6TQ9fQ8PhNbMoN
        subject_person_id: p_WRE3osrZoFy6HJRbmS6gdN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王深
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HLqc1j5DZLgLnLbDq6NGFH
          claim_id: c_abJJSW7B6TQ9fQ8PhNbMoN
          source_id: s_a987Xq9rYP5Zw6Xz1Bq1h7
          stance: supports
          locator: CBDB:37340
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37340）
          source: &a1
            id: s_a987Xq9rYP5Zw6Xz1Bq1h7
            source_type: api_record
            title: 中国历代人物传记资料库：王深（CBDB 37340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37340&o=json
            external_identifier: CBDB:37340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.200Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7C7ALxqMdJRWy4bHgchS2k
        subject_person_id: p_WRE3osrZoFy6HJRbmS6gdN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王深，宋人物。籍贯樂至。（中国历代人物传记资料库 CBDB 37340）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ojgidfr7KcoM6lDIoxcW6C
          claim_id: c_7C7ALxqMdJRWy4bHgchS2k
          source_id: s_a987Xq9rYP5Zw6Xz1Bq1h7
          stance: supports
          locator: CBDB:37340
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

# 王深

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王深 | accepted |
| bio.summary | 王深，宋人物。籍贯樂至。（中国历代人物传记资料库 CBDB 37340） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王深（CBDB 37340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37340&o=json)
