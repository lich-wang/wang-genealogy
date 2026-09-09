---
schema: wang-person/v1
id: p_dYKqtGTqQx9nuqq8Wy6PJC
status: active
merged_into: null
display_name: 王祖崇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4pH6Vocs6AXXJpC3MJZ456
        subject_person_id: p_dYKqtGTqQx9nuqq8Wy6PJC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖崇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eK9fnbhLAXcke9tA4JPXYe
          claim_id: c_4pH6Vocs6AXXJpC3MJZ456
          source_id: s_uE5aSyWp8FEV3WVHAhL5Co
          stance: supports
          locator: CBDB:639570
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639570）
          source: &a1
            id: s_uE5aSyWp8FEV3WVHAhL5Co
            source_type: api_record
            title: 中国历代人物传记资料库：王祖崇（CBDB 639570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639570&o=json
            external_identifier: CBDB:639570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.975Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RdHzs5X6Gum1uNacb9H9HN
        subject_person_id: p_dYKqtGTqQx9nuqq8Wy6PJC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s2zqp4tsQ7jjc1Rvps2KBg
          claim_id: c_RdHzs5X6Gum1uNacb9H9HN
          source_id: s_uE5aSyWp8FEV3WVHAhL5Co
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

# 王祖崇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祖崇 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祖崇（CBDB 639570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639570&o=json)
