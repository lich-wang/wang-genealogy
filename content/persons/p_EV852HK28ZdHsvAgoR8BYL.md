---
schema: wang-person/v1
id: p_EV852HK28ZdHsvAgoR8BYL
status: active
merged_into: null
display_name: 王雄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ATDHAhbmDm863A4PeSsGjW
        subject_person_id: p_EV852HK28ZdHsvAgoR8BYL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q2JLjozmLYVuFx7nLA75k3
          claim_id: c_ATDHAhbmDm863A4PeSsGjW
          source_id: s_NxGfxyY9sNtfAWbxok48j3
          stance: supports
          locator: CBDB:317015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317015）
          source: &a1
            id: s_NxGfxyY9sNtfAWbxok48j3
            source_type: api_record
            title: 中国历代人物传记资料库：王雄（CBDB 317015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317015&o=json
            external_identifier: CBDB:317015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.966Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LmAHL56APuUBA8V54Y92qR
        subject_person_id: p_EV852HK28ZdHsvAgoR8BYL
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
        - id: cs_m8HnE83R1ZyMmHQfE965oH
          claim_id: c_LmAHL56APuUBA8V54Y92qR
          source_id: s_NxGfxyY9sNtfAWbxok48j3
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

# 王雄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雄 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雄（CBDB 317015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317015&o=json)
