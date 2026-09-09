---
schema: wang-person/v1
id: p_HfVWuiknn8S2heZUnhWDzJ
status: active
merged_into: null
display_name: 王紓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_17DBNJgXM2CeVBTdYMBG7B
        subject_person_id: p_HfVWuiknn8S2heZUnhWDzJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BzPDqMHorKvTumdZCMPuCw
          claim_id: c_17DBNJgXM2CeVBTdYMBG7B
          source_id: s_B1cChznPcofH7udrj7KYCC
          stance: supports
          locator: CBDB:193156
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（193156）
          source: &a1
            id: s_B1cChznPcofH7udrj7KYCC
            source_type: api_record
            title: 中国历代人物传记资料库：王紓（CBDB 193156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193156&o=json
            external_identifier: CBDB:193156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.432Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HBF2M7ev7dJP1WBFnFHiyy
        subject_person_id: p_HfVWuiknn8S2heZUnhWDzJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 813年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PGgvMC2sFeoXCfKLXUvv4S
          claim_id: c_HBF2M7ev7dJP1WBFnFHiyy
          source_id: s_B1cChznPcofH7udrj7KYCC
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
        id: c_HxzZiQJTAe7EXq7b4FKJcN
        subject_person_id: p_HfVWuiknn8S2heZUnhWDzJ
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
        - id: cs_KfF6zU1P8h1EXtYXdWBUyk
          claim_id: c_HxzZiQJTAe7EXq7b4FKJcN
          source_id: s_B1cChznPcofH7udrj7KYCC
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

# 王紓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紓 | accepted |
| death.date | 813年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紓（CBDB 193156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193156&o=json)
