---
schema: wang-person/v1
id: p_bpFZbANGrgk8E4jVLCM4N6
status: active
merged_into: null
display_name: 王旭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LgAUW9gon6AD6pw4x9vywc
        subject_person_id: p_bpFZbANGrgk8E4jVLCM4N6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oY4kRr5N8DNeWAXuD5HhrR
          claim_id: c_LgAUW9gon6AD6pw4x9vywc
          source_id: s_BDouUeAmFvS9JCUegL2HcB
          stance: supports
          locator: CBDB:494307
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（494307）
          source: &a1
            id: s_BDouUeAmFvS9JCUegL2HcB
            source_type: api_record
            title: 中国历代人物传记资料库：王旭（CBDB 494307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494307&o=json
            external_identifier: CBDB:494307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5UrdhmYAi1ErGie5vXnp3M
        subject_person_id: p_bpFZbANGrgk8E4jVLCM4N6
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
        - id: cs_GXbtmTZ95JdhPHRaDkHUgH
          claim_id: c_5UrdhmYAi1ErGie5vXnp3M
          source_id: s_BDouUeAmFvS9JCUegL2HcB
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

# 王旭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旭 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王旭（CBDB 494307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494307&o=json)
