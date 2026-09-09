---
schema: wang-person/v1
id: p_Ck1H2DU3Tu57WhHrgQgTwz
status: active
merged_into: null
display_name: 王希倩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qSz3iaDqYZMBMoiqtcDeii
        subject_person_id: p_Ck1H2DU3Tu57WhHrgQgTwz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希倩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MNtgKENhZBJpQ7Kb89XCcD
          claim_id: c_qSz3iaDqYZMBMoiqtcDeii
          source_id: s_H3Pm1vF6jmgaNP8GGuMZzG
          stance: supports
          locator: CBDB:380837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（380837）
          source: &a1
            id: s_H3Pm1vF6jmgaNP8GGuMZzG
            source_type: api_record
            title: 中国历代人物传记资料库：王希倩（CBDB 380837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380837&o=json
            external_identifier: CBDB:380837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.739Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LX26HDrm4da4EQd1adh54Z
        subject_person_id: p_Ck1H2DU3Tu57WhHrgQgTwz
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
        - id: cs_RtRHXJCSkmXPQ2YU8FFpUB
          claim_id: c_LX26HDrm4da4EQd1adh54Z
          source_id: s_H3Pm1vF6jmgaNP8GGuMZzG
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

# 王希倩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希倩 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希倩（CBDB 380837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380837&o=json)
