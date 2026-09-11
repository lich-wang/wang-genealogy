---
schema: wang-person/v1
id: p_sSM4LF9AAPNVQ51D7otD4r
status: active
merged_into: null
display_name: 王郅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4HFh8QoM8RfNMXAJdjPihE
        subject_person_id: p_sSM4LF9AAPNVQ51D7otD4r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B6NX6uZ3ymrkJxvoFcbiKT
          claim_id: c_4HFh8QoM8RfNMXAJdjPihE
          source_id: s_DCVLxy3yDfS7yQJbsQzLfB
          stance: supports
          locator: CBDB:141272
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141272）
          source: &a1
            id: s_DCVLxy3yDfS7yQJbsQzLfB
            source_type: api_record
            title: 中国历代人物传记资料库：王郅（CBDB 141272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141272&o=json
            external_identifier: CBDB:141272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qzUxbk43o13MVJBDtSLk3s
        subject_person_id: p_sSM4LF9AAPNVQ51D7otD4r
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 737年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yQB6CGMBMeiC3NZNoV1L3Z
          claim_id: c_qzUxbk43o13MVJBDtSLk3s
          source_id: s_DCVLxy3yDfS7yQJbsQzLfB
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
        id: c_e5pRWm5w5zA1udmQQBJ5uC
        subject_person_id: p_sSM4LF9AAPNVQ51D7otD4r
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 789年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VbxDT9PKNEw9MvaPSRRrdt
          claim_id: c_e5pRWm5w5zA1udmQQBJ5uC
          source_id: s_DCVLxy3yDfS7yQJbsQzLfB
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
        id: c_yjNe7HfzcWm9PLHjtiZ6U3
        subject_person_id: p_sSM4LF9AAPNVQ51D7otD4r
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
        - id: cs_1uq8o3Hpxe5sReFdBKLLeg
          claim_id: c_yjNe7HfzcWm9PLHjtiZ6U3
          source_id: s_DCVLxy3yDfS7yQJbsQzLfB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_BHFpjbImT4jzHaZJusWntV
        subject_person_id: p_sSM4LF9AAPNVQ51D7otD4r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1Yww3BArYHAwhUU3c4fhMK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mkdOsScTv-cPYir85mSLwH
          claim_id: c_BHFpjbImT4jzHaZJusWntV
          source_id: s_r9EM8Km6cyZtg8KGJ7yJ1g
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 21：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r9EM8Km6cyZtg8KGJ7yJ1g
            source_type: api_record
            title: 中国历代人物传记资料库：王遘（CBDB 155482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155482&o=json
            external_identifier: CBDB:155482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1Yww3BArYHAwhUU3c4fhMK
        status: active
        display_name: 王遘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王郅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王郅 | accepted |
| birth.date | 737年 | accepted |
| death.date | 789年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1Yww3BArYHAwhUU3c4fhMK | 王遘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遘（CBDB 155482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155482&o=json)
- [中国历代人物传记资料库：王郅（CBDB 141272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141272&o=json)
