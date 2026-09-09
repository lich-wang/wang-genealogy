---
schema: wang-person/v1
id: p_EUJLHoz7bgEkBD16u7UXiE
status: active
merged_into: null
display_name: 王炳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mgy59wFkr7Mb6mJKXAyTbu
        subject_person_id: p_EUJLHoz7bgEkBD16u7UXiE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u7m3y3Rz9jxRPETP697m66
          claim_id: c_mgy59wFkr7Mb6mJKXAyTbu
          source_id: s_ATykr1FPLj7VF4tgJ2V5x6
          stance: supports
          locator: CBDB:343895
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343895）
          source: &a1
            id: s_ATykr1FPLj7VF4tgJ2V5x6
            source_type: api_record
            title: 中国历代人物传记资料库：王炳（CBDB 343895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343895&o=json
            external_identifier: CBDB:343895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.568Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mvgJdowU4GYs3D7AkGz115
        subject_person_id: p_EUJLHoz7bgEkBD16u7UXiE
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
        - id: cs_kAKqH562DCe6pHU8wLKbvH
          claim_id: c_mvgJdowU4GYs3D7AkGz115
          source_id: s_ATykr1FPLj7VF4tgJ2V5x6
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

# 王炳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炳（CBDB 343895）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343895&o=json)
