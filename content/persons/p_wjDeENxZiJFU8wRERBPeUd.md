---
schema: wang-person/v1
id: p_wjDeENxZiJFU8wRERBPeUd
status: active
merged_into: null
display_name: 王明远
cbdb_id: 175937
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YabLtTTDuCvyAAo43gqAGe
        subject_person_id: p_wjDeENxZiJFU8wRERBPeUd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明远
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T82xCoJS5NRZxPGoSSE3Eq
          claim_id: c_YabLtTTDuCvyAAo43gqAGe
          source_id: s_dN76zU4uqPwowfDFaRB6fQ
          stance: supports
          locator: Q45679997
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_dN76zU4uqPwowfDFaRB6fQ
            source_type: api_record
            title: 维基数据：王明远（Q45679997）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45679997
            external_identifier: Q45679997
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_k1iQEnwacux4WNeG36qSQx
          claim_id: c_YabLtTTDuCvyAAo43gqAGe
          source_id: s_w2iqVCfLo2Dq8t7Vg5Kyw5
          stance: supports
          locator: CBDB:175937
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_w2iqVCfLo2Dq8t7Vg5Kyw5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王明遠（175937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175937&o=json
            external_identifier: CBDB:175937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_76PNT1DUCSGGQ9yQkrV3Fa
        subject_person_id: p_wjDeENxZiJFU8wRERBPeUd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: person, CBDB = 175937
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E5xanNytqesALEBX8VdV7d
          claim_id: c_76PNT1DUCSGGQ9yQkrV3Fa
          source_id: s_dN76zU4uqPwowfDFaRB6fQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9KEPrcn6nfz7d5KWGbGnuL
        subject_person_id: p_wjDeENxZiJFU8wRERBPeUd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 590年
            calendar_note: 维基数据 P570 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tBZZrEJA5HcEJEJqUo1BuB
          claim_id: c_9KEPrcn6nfz7d5KWGbGnuL
          source_id: s_dN76zU4uqPwowfDFaRB6fQ
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1LFxFSsMpQ1f6uvExdu9Mv
        subject_person_id: p_eSRcJG6YidrDKEjtoJGGoF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wjDeENxZiJFU8wRERBPeUd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aGWV5t5MPH79onVh6RSh74
          claim_id: c_1LFxFSsMpQ1f6uvExdu9Mv
          source_id: s_FNxSUx68S7PRyC1AAmAxw6
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FNxSUx68S7PRyC1AAmAxw6
            source_type: api_record
            title: 维基数据：王罴（Q18700798）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18700798
            external_identifier: Q18700798
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:27.413Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BE%86
        - id: cs_3u4DUMbmM9R4YGvdyLn23b
          claim_id: c_1LFxFSsMpQ1f6uvExdu9Mv
          source_id: s_dN76zU4uqPwowfDFaRB6fQ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_MizPy5s2HvD731V5JRPYpF
          claim_id: c_1LFxFSsMpQ1f6uvExdu9Mv
          source_id: s_FGmK32RSrcm2vo4c1Hv9Ye
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_FGmK32RSrcm2vo4c1Hv9Ye
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王羆（175927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175927&o=json
            external_identifier: CBDB:175927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:27.600Z
            metadata_json: null
      object_person:
        id: p_eSRcJG6YidrDKEjtoJGGoF
        status: active
        display_name: 王罴
        merged_into_person_id: null
  children:
    - claim:
        id: c_RBJKIppDjW3Odcn9x7-8KB
        subject_person_id: p_wjDeENxZiJFU8wRERBPeUd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_baVvLFfNr767DCkDPPU1AF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QxVPOjhJxHJqCUFyKaJlcP
          claim_id: c_RBJKIppDjW3Odcn9x7-8KB
          source_id: s_kvzDrNVczBi49TMUtmhkWx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kvzDrNVczBi49TMUtmhkWx
            source_type: api_record
            title: 中国历代人物传记资料库：王壽（CBDB 175938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175938&o=json
            external_identifier: CBDB:175938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.208Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_baVvLFfNr767DCkDPPU1AF
        status: active
        display_name: 王壽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王明远

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明远 | accepted |
| bio.summary | person, CBDB = 175937 | accepted |
| death.date | 590年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eSRcJG6YidrDKEjtoJGGoF | 王罴 | accepted |
| children | p_baVvLFfNr767DCkDPPU1AF | 王壽 | accepted |

## 外部来源

- [维基数据：王明远（Q45679997）](https://www.wikidata.org/wiki/Q45679997)
- [维基数据：王罴（Q18700798）](https://www.wikidata.org/wiki/Q18700798)
- [中国历代人物传记资料库：王壽（CBDB 175938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175938&o=json)
- [CBDB 中国历代人物传记资料库：王明遠（175937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175937&o=json)
- [CBDB 中国历代人物传记资料库：王羆（175927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175927&o=json)
