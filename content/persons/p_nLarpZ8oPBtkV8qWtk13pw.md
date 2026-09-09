---
schema: wang-person/v1
id: p_nLarpZ8oPBtkV8qWtk13pw
status: active
merged_into: null
display_name: 王才
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G95b4zJ95WLqWB3FLTsijB
        subject_person_id: p_nLarpZ8oPBtkV8qWtk13pw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_evYNtmchg1UD5BqbmMyDFF
          claim_id: c_G95b4zJ95WLqWB3FLTsijB
          source_id: s_PXVtaKpJD7cM2CJ5pq9vg9
          stance: supports
          locator: CBDB:139770
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139770）
          source: &a1
            id: s_PXVtaKpJD7cM2CJ5pq9vg9
            source_type: api_record
            title: 中国历代人物传记资料库：王才（CBDB 139770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139770&o=json
            external_identifier: CBDB:139770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.455Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Y2d5B32r7X3xGmhrmwkGfG
        subject_person_id: p_nLarpZ8oPBtkV8qWtk13pw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 606年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J944dLBsj1zNQtZfM8Vk5M
          claim_id: c_Y2d5B32r7X3xGmhrmwkGfG
          source_id: s_PXVtaKpJD7cM2CJ5pq9vg9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_AbmjuyL16PBMnCLWxoTCTK
        subject_person_id: p_nLarpZ8oPBtkV8qWtk13pw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 677年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A7CfebyzFSBdjsGGFufNtJ
          claim_id: c_AbmjuyL16PBMnCLWxoTCTK
          source_id: s_PXVtaKpJD7cM2CJ5pq9vg9
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
        id: c_Pu7rKxGHSSpCKS3StQscGj
        subject_person_id: p_nLarpZ8oPBtkV8qWtk13pw
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
        - id: cs_1zDfj5aKQfG923P3cqUaRA
          claim_id: c_Pu7rKxGHSSpCKS3StQscGj
          source_id: s_PXVtaKpJD7cM2CJ5pq9vg9
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

# 王才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王才 | accepted |
| birth.date | 606年 | accepted |
| death.date | 677年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王才（CBDB 139770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139770&o=json)
