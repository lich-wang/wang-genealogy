---
schema: wang-person/v1
id: p_R2HsLR5CDgPWMcyfCaygAw
status: active
merged_into: null
display_name: 王旭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8DPiLAPK2CEjo91u74QWCE
        subject_person_id: p_R2HsLR5CDgPWMcyfCaygAw
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
        - id: cs_Xw8NssNZSeDGpBQgP5UL9Q
          claim_id: c_8DPiLAPK2CEjo91u74QWCE
          source_id: s_4n7Gp3QBk5nc3shFc2PMya
          stance: supports
          locator: CBDB:30357
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30357）
          source: &a1
            id: s_4n7Gp3QBk5nc3shFc2PMya
            source_type: api_record
            title: 中国历代人物传记资料库：王旭（CBDB 30357）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30357&o=json
            external_identifier: CBDB:30357
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S41KzF8FJ8SCpKaShF1YjB
        subject_person_id: p_R2HsLR5CDgPWMcyfCaygAw
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
        - id: cs_1Z61uepB5LwAFHQjDP33zA
          claim_id: c_S41KzF8FJ8SCpKaShF1YjB
          source_id: s_4n7Gp3QBk5nc3shFc2PMya
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
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王旭（CBDB 30357）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30357&o=json)
