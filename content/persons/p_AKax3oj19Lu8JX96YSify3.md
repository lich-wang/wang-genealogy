---
schema: wang-person/v1
id: p_AKax3oj19Lu8JX96YSify3
status: active
merged_into: null
display_name: 王行敏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1bc25fhKd2LbHMDaXRxByM
        subject_person_id: p_AKax3oj19Lu8JX96YSify3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v1Drcvyod18t4regu5W6ec
          claim_id: c_1bc25fhKd2LbHMDaXRxByM
          source_id: s_FJDsqqUPBG7KJZRSbpufSL
          stance: supports
          locator: CBDB:148810
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148810）
          source: &a1
            id: s_FJDsqqUPBG7KJZRSbpufSL
            source_type: api_record
            title: 中国历代人物传记资料库：王行敏（CBDB 148810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148810&o=json
            external_identifier: CBDB:148810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.773Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BFbk7TU12k5RMYJcXVdu9J
        subject_person_id: p_AKax3oj19Lu8JX96YSify3
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
        - id: cs_zomv3EHkuC8GeAK8oTxcnz
          claim_id: c_BFbk7TU12k5RMYJcXVdu9J
          source_id: s_FJDsqqUPBG7KJZRSbpufSL
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

# 王行敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王行敏 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王行敏（CBDB 148810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148810&o=json)
