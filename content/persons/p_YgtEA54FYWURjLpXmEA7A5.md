---
schema: wang-person/v1
id: p_YgtEA54FYWURjLpXmEA7A5
status: active
merged_into: null
display_name: 王敬貽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7CvFJkGeMr2zoFxY97TMX9
        subject_person_id: p_YgtEA54FYWURjLpXmEA7A5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬貽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R3Y58koRWx4GejdrtjmgVz
          claim_id: c_7CvFJkGeMr2zoFxY97TMX9
          source_id: s_fixnFEb2GsJLoPiUVvjMCM
          stance: supports
          locator: CBDB:192944
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192944）
          source: &a1
            id: s_fixnFEb2GsJLoPiUVvjMCM
            source_type: api_record
            title: 中国历代人物传记资料库：王敬貽（CBDB 192944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192944&o=json
            external_identifier: CBDB:192944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.291Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qW1Ecb8e4g1wiiLUnsd286
        subject_person_id: p_YgtEA54FYWURjLpXmEA7A5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 909年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_46ZkbdJzHHbAe1HFxkW8mP
          claim_id: c_qW1Ecb8e4g1wiiLUnsd286
          source_id: s_fixnFEb2GsJLoPiUVvjMCM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4BxE5RzA5GhZ9Fqn8yjwE8
        subject_person_id: p_YgtEA54FYWURjLpXmEA7A5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Te1TuXvMeBb86t3Si3NCxs
          claim_id: c_4BxE5RzA5GhZ9Fqn8yjwE8
          source_id: s_fixnFEb2GsJLoPiUVvjMCM
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

# 王敬貽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬貽 | accepted |
| death.date | 909年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬貽（CBDB 192944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192944&o=json)
