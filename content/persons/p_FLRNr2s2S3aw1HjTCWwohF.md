---
schema: wang-person/v1
id: p_FLRNr2s2S3aw1HjTCWwohF
status: active
merged_into: null
display_name: 王回
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZdbFXfwBHhuNCme9MydruV
        subject_person_id: p_FLRNr2s2S3aw1HjTCWwohF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王回
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o7zdhuBnYbGmg3yX9R3oWA
          claim_id: c_ZdbFXfwBHhuNCme9MydruV
          source_id: s_WTf5GzdZzkK4wSb2kYEujP
          stance: supports
          locator: CBDB:22031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22031）
          source: &a1
            id: s_WTf5GzdZzkK4wSb2kYEujP
            source_type: api_record
            title: 中国历代人物传记资料库：王回（CBDB 22031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22031&o=json
            external_identifier: CBDB:22031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rtB8L1MD8b3jkmG3ydeZsT
        subject_person_id: p_FLRNr2s2S3aw1HjTCWwohF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1121年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VjarnSFnLApcCqupvnKqGP
          claim_id: c_rtB8L1MD8b3jkmG3ydeZsT
          source_id: s_WTf5GzdZzkK4wSb2kYEujP
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
        id: c_9mopXUuFTeanrr9jmw3D4Y
        subject_person_id: p_FLRNr2s2S3aw1HjTCWwohF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1192年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GhQGAA52SPzSBURyTE6ems
          claim_id: c_9mopXUuFTeanrr9jmw3D4Y
          source_id: s_WTf5GzdZzkK4wSb2kYEujP
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
        id: c_a5VdAcvVzc8jrVDDgw4VFY
        subject_person_id: p_FLRNr2s2S3aw1HjTCWwohF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2TBxjd2HYCDmHALxtWyjkM
          claim_id: c_a5VdAcvVzc8jrVDDgw4VFY
          source_id: s_WTf5GzdZzkK4wSb2kYEujP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_V1Iisnz-E4eF0OzEGUW3kS
        subject_person_id: p_RLNXQixvSPqbwRP8oYU2Vm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FLRNr2s2S3aw1HjTCWwohF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YKdTuDCbWmkR9nW5SGtCXP
          claim_id: c_V1Iisnz-E4eF0OzEGUW3kS
          source_id: s_WTf5GzdZzkK4wSb2kYEujP
          stance: supports
          locator: CBDB 双向互证（父 王佃 ⇄ 子 王回）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_RLNXQixvSPqbwRP8oYU2Vm
        status: active
        display_name: 王佃
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王回

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王回 | accepted |
| birth.date | 1121年 | accepted |
| death.date | 1192年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RLNXQixvSPqbwRP8oYU2Vm | 王佃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王回（CBDB 22031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22031&o=json)
