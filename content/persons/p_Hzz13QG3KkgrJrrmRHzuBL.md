---
schema: wang-person/v1
id: p_Hzz13QG3KkgrJrrmRHzuBL
status: active
merged_into: null
display_name: 王宣
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iSTBPHyS79XqLy7j8h7gTP
        subject_person_id: p_Hzz13QG3KkgrJrrmRHzuBL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x3Zsb2KcH4afKbCK9yR9jX
          claim_id: c_iSTBPHyS79XqLy7j8h7gTP
          source_id: s_GcrseffxuQu6SyucJV6rd8
          stance: supports
          locator: CBDB:201094
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201094）
          source: &a1
            id: s_GcrseffxuQu6SyucJV6rd8
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 201094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201094&o=json
            external_identifier: CBDB:201094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.653Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_56DagijEkVh4UXJ8gKN7QM
        subject_person_id: p_Hzz13QG3KkgrJrrmRHzuBL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1470年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KuzHCPKE6TdD6fzWu51umD
          claim_id: c_56DagijEkVh4UXJ8gKN7QM
          source_id: s_GcrseffxuQu6SyucJV6rd8
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
        id: c_qu7E9FF5TuJUdiqCR9XraV
        subject_person_id: p_Hzz13QG3KkgrJrrmRHzuBL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣（生于1470年），明人物。明清進士進士，籍贯定州，入仕進士。（中国历代人物传记资料库 CBDB 201094）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zNVEuqhYpuz6LWiw5qzY9O
          claim_id: c_qu7E9FF5TuJUdiqCR9XraV
          source_id: s_GcrseffxuQu6SyucJV6rd8
          stance: supports
          locator: CBDB:201094
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QDRp24ZGQKzcCpEws0bovg
        subject_person_id: p_7zDtBoXJhHQDuC7LGFFtF6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hzz13QG3KkgrJrrmRHzuBL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yzJYs2wIZR0GaJONaWJFII
          claim_id: c_QDRp24ZGQKzcCpEws0bovg
          source_id: s_G9yR3MEaqvFb2RLT9A6TVA
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第二十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_G9yR3MEaqvFb2RLT9A6TVA
            source_type: api_record
            title: 中国历代人物传记资料库：王朝輔（CBDB 267017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267017&o=json
            external_identifier: CBDB:267017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7zDtBoXJhHQDuC7LGFFtF6
        status: active
        display_name: 王朝輔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_EHlO5wwumJw3jHkGlv_Fhv
        subject_person_id: p_1meANRjBEetnxL4bUgGNQH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Hzz13QG3KkgrJrrmRHzuBL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iSfLtmrtHAk53BYju6g_-4
          claim_id: c_EHlO5wwumJw3jHkGlv_Fhv
          source_id: s_g1JCXwFQFtBVqnLVPowN68
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第二十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g1JCXwFQFtBVqnLVPowN68
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 267014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267014&o=json
            external_identifier: CBDB:267014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.757Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1meANRjBEetnxL4bUgGNQH
        status: active
        display_name: 王琳
        merged_into_person_id: null
    - claim:
        id: c_EgTTkv6np4Tj0j7_i7J33M
        subject_person_id: p_ULELBwMik2U1wn4d9FWqsW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Hzz13QG3KkgrJrrmRHzuBL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oGuE-fjjNgmbYYqsdvKi6R
          claim_id: c_EgTTkv6np4Tj0j7_i7J33M
          source_id: s_wzt6XYsN6GXf9zfxTu1wmV
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第二十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wzt6XYsN6GXf9zfxTu1wmV
            source_type: api_record
            title: 中国历代人物传记资料库：王思恭（CBDB 267015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267015&o=json
            external_identifier: CBDB:267015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ULELBwMik2U1wn4d9FWqsW
        status: active
        display_name: 王思恭
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_haBRZ7vH7JLK04xTG3j9hx
        subject_person_id: p_9TFfPBPbuARXG78htBxBNo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Hzz13QG3KkgrJrrmRHzuBL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fGF8w0ok9FX0dZ22YV67B9
          claim_id: c_haBRZ7vH7JLK04xTG3j9hx
          source_id: s_ms0ED1IMQoqL5K4hhpHYxh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201094 王宣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ms0ED1IMQoqL5K4hhpHYxh
            source_type: api_record
            title: 中国历代人物传记资料库：王宥（CBDB 267024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267024&o=json
            external_identifier: CBDB:267024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9TFfPBPbuARXG78htBxBNo
        status: active
        display_name: 王宥
        merged_into_person_id: null
    - claim:
        id: c_y8EcJ7TxwRikBfmMVMLCWT
        subject_person_id: p_Hzz13QG3KkgrJrrmRHzuBL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QqTzi2VpVBUVXaBss511gD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GEn1oO9cAPSOtwD7w7Pqsw
          claim_id: c_y8EcJ7TxwRikBfmMVMLCWT
          source_id: s_hGr2ld0W3ZfMq_UWSC8H36
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201094 王宣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hGr2ld0W3ZfMq_UWSC8H36
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 267025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267025&o=json
            external_identifier: CBDB:267025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QqTzi2VpVBUVXaBss511gD
        status: active
        display_name: 王宜
        merged_into_person_id: null
    - claim:
        id: c_1uPDKdabaYQZ2SGpkRjzh3
        subject_person_id: p_Hzz13QG3KkgrJrrmRHzuBL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_T1TfDLuTZAccqowhsYwN5x
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EfowIu0r0auqPdINlplzvA
          claim_id: c_1uPDKdabaYQZ2SGpkRjzh3
          source_id: s_QuMRT5OpCv4-cncFQw3jwg
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201094 王宣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QuMRT5OpCv4-cncFQw3jwg
            source_type: api_record
            title: 中国历代人物传记资料库：王登（CBDB 267023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267023&o=json
            external_identifier: CBDB:267023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_T1TfDLuTZAccqowhsYwN5x
        status: active
        display_name: 王登
        merged_into_person_id: null
    - claim:
        id: c_as0XcePSixv4STzImhYC0T
        subject_person_id: p_Hzz13QG3KkgrJrrmRHzuBL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VBCCW8RrJa5vKyLH73DcCe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ekHsytGJHtUv9cngmWbE3G
          claim_id: c_as0XcePSixv4STzImhYC0T
          source_id: s_Qt8wLm0XVPBQJSbfFda-5y
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201094 王宣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Qt8wLm0XVPBQJSbfFda-5y
            source_type: api_record
            title: 中国历代人物传记资料库：王潛（CBDB 267022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267022&o=json
            external_identifier: CBDB:267022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VBCCW8RrJa5vKyLH73DcCe
        status: active
        display_name: 王潛
        merged_into_person_id: null
    - claim:
        id: c_M702ligJBfGhgi03D5rfPK
        subject_person_id: p_Hzz13QG3KkgrJrrmRHzuBL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rUxWN13HzHvQTaEFbgzcv9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pqGf_V9Y9xcy-od4cZZ8ah
          claim_id: c_M702ligJBfGhgi03D5rfPK
          source_id: s_OSaNxovwl29jUQKpySniBJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201094 王宣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OSaNxovwl29jUQKpySniBJ
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 267021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267021&o=json
            external_identifier: CBDB:267021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rUxWN13HzHvQTaEFbgzcv9
        status: active
        display_name: 王清
        merged_into_person_id: null
---

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| birth.date | 1470年 | accepted |
| bio.summary | 王宣（生于1470年），明人物。明清進士進士，籍贯定州，入仕進士。（中国历代人物传记资料库 CBDB 201094） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7zDtBoXJhHQDuC7LGFFtF6 | 王朝輔 | accepted |
| ancestors | p_1meANRjBEetnxL4bUgGNQH | 王琳 | accepted |
| ancestors | p_ULELBwMik2U1wn4d9FWqsW | 王思恭 | accepted |
| other | p_9TFfPBPbuARXG78htBxBNo | 王宥 | accepted |
| other | p_QqTzi2VpVBUVXaBss511gD | 王宜 | accepted |
| other | p_T1TfDLuTZAccqowhsYwN5x | 王登 | accepted |
| other | p_VBCCW8RrJa5vKyLH73DcCe | 王潛 | accepted |
| other | p_rUxWN13HzHvQTaEFbgzcv9 | 王清 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝輔（CBDB 267017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267017&o=json)
- [中国历代人物传记资料库：王登（CBDB 267023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267023&o=json)
- [中国历代人物传记资料库：王琳（CBDB 267014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267014&o=json)
- [中国历代人物传记资料库：王潛（CBDB 267022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267022&o=json)
- [中国历代人物传记资料库：王清（CBDB 267021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267021&o=json)
- [中国历代人物传记资料库：王思恭（CBDB 267015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267015&o=json)
- [中国历代人物传记资料库：王宣（CBDB 201094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201094&o=json)
- [中国历代人物传记资料库：王宜（CBDB 267025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267025&o=json)
- [中国历代人物传记资料库：王宥（CBDB 267024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267024&o=json)
