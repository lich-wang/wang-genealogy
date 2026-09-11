---
schema: wang-person/v1
id: p_wZLsyUPWJEtvvYr3vt2i9j
status: active
merged_into: null
display_name: 王華
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M91CAS34Kxtj7PhCuMUwab
        subject_person_id: p_wZLsyUPWJEtvvYr3vt2i9j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kuxm8j8TD6U4gpaCaZcxFu
          claim_id: c_M91CAS34Kxtj7PhCuMUwab
          source_id: s_FQ4MNp8aniHMGMWeardCca
          stance: supports
          locator: CBDB:175735
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175735）
          source: &a1
            id: s_FQ4MNp8aniHMGMWeardCca
            source_type: api_record
            title: 中国历代人物传记资料库：王華（CBDB 175735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175735&o=json
            external_identifier: CBDB:175735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.089Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9EUYQ2NXmPc8bQFbUEdbtD
        subject_person_id: p_wZLsyUPWJEtvvYr3vt2i9j
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 806年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1W3hxtYehZW3DqWC9oAzLp
          claim_id: c_9EUYQ2NXmPc8bQFbUEdbtD
          source_id: s_FQ4MNp8aniHMGMWeardCca
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
        id: c_AQh5NGJJahQ5wyeu5KjiHt
        subject_person_id: p_wZLsyUPWJEtvvYr3vt2i9j
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
        - id: cs_4CvK7gJMLA4BMqH4qSHH4D
          claim_id: c_AQh5NGJJahQ5wyeu5KjiHt
          source_id: s_FQ4MNp8aniHMGMWeardCca
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
        id: c_1Y8XcrcqwHJS7gE37uz-ru
        subject_person_id: p_637jeGSPEF7GY1ZoDzn4rK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wZLsyUPWJEtvvYr3vt2i9j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I9n1D2bpAdEIGt7XfDPr8C
          claim_id: c_1Y8XcrcqwHJS7gE37uz-ru
          source_id: s_PscNhNpQtsMQwhBYs8xYDi
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PscNhNpQtsMQwhBYs8xYDi
            source_type: api_record
            title: 中国历代人物传记资料库：王令元（CBDB 175734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175734&o=json
            external_identifier: CBDB:175734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.252Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_637jeGSPEF7GY1ZoDzn4rK
        status: active
        display_name: 王令元
        merged_into_person_id: null
  children:
    - claim:
        id: c_SsrbjEWqxD10xWU743XdfQ
        subject_person_id: p_wZLsyUPWJEtvvYr3vt2i9j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HHcmHw5pSv5L47UNsuaSCC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qI9Wa1nRp359_2o-yApEB3
          claim_id: c_SsrbjEWqxD10xWU743XdfQ
          source_id: s_5NpUbDuQPXWq4a97FALFaP
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5NpUbDuQPXWq4a97FALFaP
            source_type: api_record
            title: 中国历代人物传记资料库：王藹（CBDB 175736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175736&o=json
            external_identifier: CBDB:175736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.089Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HHcmHw5pSv5L47UNsuaSCC
        status: active
        display_name: 王藹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王華 | accepted |
| death.date | 806年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_637jeGSPEF7GY1ZoDzn4rK | 王令元 | accepted |
| children | p_HHcmHw5pSv5L47UNsuaSCC | 王藹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王藹（CBDB 175736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175736&o=json)
- [中国历代人物传记资料库：王華（CBDB 175735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175735&o=json)
- [中国历代人物传记资料库：王令元（CBDB 175734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175734&o=json)
