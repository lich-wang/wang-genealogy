---
schema: wang-person/v1
id: p_d5eGFR1uQjQsDp6CmMFPb3
status: active
merged_into: null
display_name: 王彥威
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3thiKcv3y73pEY99AK4VXw
        subject_person_id: p_d5eGFR1uQjQsDp6CmMFPb3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥威
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_15oJuRw7HSdXmxQHMKt2Q6
          claim_id: c_3thiKcv3y73pEY99AK4VXw
          source_id: s_zTA2S5HCwYo24AaVtFdEXP
          stance: supports
          locator: CBDB:378759
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（378759）
          source: &a1
            id: s_zTA2S5HCwYo24AaVtFdEXP
            source_type: api_record
            title: 中国历代人物传记资料库：王彥威（CBDB 378759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378759&o=json
            external_identifier: CBDB:378759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.665Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VGzfB2JRznEqtv8SJM5u6q
        subject_person_id: p_d5eGFR1uQjQsDp6CmMFPb3
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
        - id: cs_SBcvhLjhrs97JMpppC6Kqb
          claim_id: c_VGzfB2JRznEqtv8SJM5u6q
          source_id: s_zTA2S5HCwYo24AaVtFdEXP
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

# 王彥威

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥威 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥威（CBDB 378759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378759&o=json)
