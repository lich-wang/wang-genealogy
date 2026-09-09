---
schema: wang-person/v1
id: p_ZvcYSxF75Ub3o8A9bCQMfH
status: active
merged_into: null
display_name: 王志廣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wpQor7qELXiHB2Hc4DLYey
        subject_person_id: p_ZvcYSxF75Ub3o8A9bCQMfH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志廣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AHU3MAzZWD2H5SyYvdMjqo
          claim_id: c_wpQor7qELXiHB2Hc4DLYey
          source_id: s_r49wptKfM3WBmgLjfP3a83
          stance: supports
          locator: CBDB:255755
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255755）
          source: &a1
            id: s_r49wptKfM3WBmgLjfP3a83
            source_type: api_record
            title: 中国历代人物传记资料库：王志廣（CBDB 255755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255755&o=json
            external_identifier: CBDB:255755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U7igc6c7H2Sz1MEfRkivFM
        subject_person_id: p_ZvcYSxF75Ub3o8A9bCQMfH
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
        - id: cs_64D2GHLeWM9vhAAViQgme7
          claim_id: c_U7igc6c7H2Sz1MEfRkivFM
          source_id: s_r49wptKfM3WBmgLjfP3a83
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

# 王志廣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志廣 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志廣（CBDB 255755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255755&o=json)
