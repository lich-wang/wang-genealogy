---
schema: wang-person/v1
id: p_MM7KWyMsCLLasX9X9VAU7R
status: active
merged_into: null
display_name: 王宗堯
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ieLLEfUwbv68s8qLLrVxFy
        subject_person_id: p_MM7KWyMsCLLasX9X9VAU7R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗堯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qm7Z1Yq47S3da49DvqpoMn
          claim_id: c_ieLLEfUwbv68s8qLLrVxFy
          source_id: s_BCMG9RajAtuuSMjXsFXvkC
          stance: supports
          locator: CBDB:203496
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203496）
          source: &a1
            id: s_BCMG9RajAtuuSMjXsFXvkC
            source_type: api_record
            title: 中国历代人物传记资料库：王宗堯（CBDB 203496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203496&o=json
            external_identifier: CBDB:203496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.790Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6VHmoWgJh6zHmnF1J9e8Q2
        subject_person_id: p_MM7KWyMsCLLasX9X9VAU7R
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1499年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sf34YoShcpHLiV7AC4xQPP
          claim_id: c_6VHmoWgJh6zHmnF1J9e8Q2
          source_id: s_BCMG9RajAtuuSMjXsFXvkC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1335iqnDTtz9pGDFtkpQjG
        subject_person_id: p_MM7KWyMsCLLasX9X9VAU7R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GpAaGz8Aty84XkzzmGM5Qx
          claim_id: c_1335iqnDTtz9pGDFtkpQjG
          source_id: s_BCMG9RajAtuuSMjXsFXvkC
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
  ancestors:
    - claim:
        id: c_jnP10IjD5Q5fH4FgAdlmxM
        subject_person_id: p_kMXFk2RMgWgsEh7BZJsmpC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MM7KWyMsCLLasX9X9VAU7R
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r9P6tO3c9AbmCBwa3FAS5W
          claim_id: c_jnP10IjD5Q5fH4FgAdlmxM
          source_id: s_YK4xjGbbiqTkzQi1BRGMns
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第二十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YK4xjGbbiqTkzQi1BRGMns
            source_type: api_record
            title: 中国历代人物传记资料库：王聘（CBDB 305533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305533&o=json
            external_identifier: CBDB:305533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.741Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kMXFk2RMgWgsEh7BZJsmpC
        status: active
        display_name: 王聘
        merged_into_person_id: null
    - claim:
        id: c_dirzWBek1Bn9wx3bUFyrtB
        subject_person_id: p_nyHGqvA9YTKT9YQnGQ6pMM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MM7KWyMsCLLasX9X9VAU7R
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_evB7Uc2W8O3oksXv7a6eV6
          claim_id: c_dirzWBek1Bn9wx3bUFyrtB
          source_id: s_HzGWmSex6535AXKT7cDc3R
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第二十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HzGWmSex6535AXKT7cDc3R
            source_type: api_record
            title: 中国历代人物传记资料库：王大賓（CBDB 305532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305532&o=json
            external_identifier: CBDB:305532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nyHGqvA9YTKT9YQnGQ6pMM
        status: active
        display_name: 王大賓
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宗堯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗堯 | accepted |
| birth.date | 1499年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_kMXFk2RMgWgsEh7BZJsmpC | 王聘 | accepted |
| ancestors | p_nyHGqvA9YTKT9YQnGQ6pMM | 王大賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大賓（CBDB 305532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305532&o=json)
- [中国历代人物传记资料库：王聘（CBDB 305533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305533&o=json)
- [中国历代人物传记资料库：王宗堯（CBDB 203496）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203496&o=json)
