---
schema: wang-person/v1
id: p_B2bBEtj4zAmwMdnWXTzqPS
status: active
merged_into: null
display_name: 王木
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LBkyMTf944zJ2oxWWB7Jxg
        subject_person_id: p_B2bBEtj4zAmwMdnWXTzqPS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王木
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X9VZi198wAAdng3J7eATGk
          claim_id: c_LBkyMTf944zJ2oxWWB7Jxg
          source_id: s_vHCTJAtTmVEVHsdzJDuFeg
          stance: supports
          locator: CBDB:300369
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（300369）
          source: &a1
            id: s_vHCTJAtTmVEVHsdzJDuFeg
            source_type: api_record
            title: 中国历代人物传记资料库：王木（CBDB 300369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300369&o=json
            external_identifier: CBDB:300369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.629Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LUjRsn7a3iyqrdnL1Drki3
        subject_person_id: p_B2bBEtj4zAmwMdnWXTzqPS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王木，明人物。嘉靖十七年進士，籍贯嵊縣，曾任提刑按察使司僉事。（中国历代人物传记资料库 CBDB 300369）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F0GuqF2ty3BAzT-wm2Z3-t
          claim_id: c_LUjRsn7a3iyqrdnL1Drki3
          source_id: s_vHCTJAtTmVEVHsdzJDuFeg
          stance: supports
          locator: CBDB:300369
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OH-ckdmf6KAb3kwEVj-j77
        subject_person_id: p_B2bBEtj4zAmwMdnWXTzqPS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sSGZsmVuWDC2RLoBps8cmA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1BtBHgcTU5bAIE2-Hvdml4
          claim_id: c_OH-ckdmf6KAb3kwEVj-j77
          source_id: s_vHCTJAtTmVEVHsdzJDuFeg
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第六十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sSGZsmVuWDC2RLoBps8cmA
        status: active
        display_name: 王炯
        merged_into_person_id: null
    - claim:
        id: c_mYjecC4SN89U2tyP5W8VoM
        subject_person_id: p_B2bBEtj4zAmwMdnWXTzqPS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ho6fpou3VNZ9hm6M7awVYe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fjud0BCjw8KeTH3Q0FyBHd
          claim_id: c_mYjecC4SN89U2tyP5W8VoM
          source_id: s_G71lGyyba6A5wVpJlSeq9w
          stance: supports
          locator: CBDB：兄弟 王炯（203137）之父／母 王木
          quotation: null
          interpretation_note: 由兄弟关系推断：王煉 与 王炯 为同胞（CBDB 记「兄」），王炯 之父／母即 王煉 之父／母。
          source:
            id: s_G71lGyyba6A5wVpJlSeq9w
            source_type: api_record
            title: 中国历代人物传记资料库：王煉（CBDB 300377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300377&o=json
            external_identifier: CBDB:300377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ho6fpou3VNZ9hm6M7awVYe
        status: active
        display_name: 王煉
        merged_into_person_id: null
    - claim:
        id: c_vVfGJjmcz3wBDI6hsMrK2c
        subject_person_id: p_B2bBEtj4zAmwMdnWXTzqPS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LDHYTGoyzM9TQ49cExHALE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GkK7gVzjM7Pr3GDwXH7y38
          claim_id: c_vVfGJjmcz3wBDI6hsMrK2c
          source_id: s_sStu-3RLHj6Yf8d3n5OlOX
          stance: supports
          locator: CBDB：兄弟 王炯（203137）之父／母 王木
          quotation: null
          interpretation_note: 由兄弟关系推断：王學祖 与 王炯 为同胞（CBDB 记「弟」），王炯 之父／母即 王學祖 之父／母。
          source:
            id: s_sStu-3RLHj6Yf8d3n5OlOX
            source_type: api_record
            title: 中国历代人物传记资料库：王學祖（CBDB 300374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300374&o=json
            external_identifier: CBDB:300374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LDHYTGoyzM9TQ49cExHALE
        status: active
        display_name: 王學祖
        merged_into_person_id: null
    - claim:
        id: c_qRcTbUIe1ihN2mvWkV0HML
        subject_person_id: p_B2bBEtj4zAmwMdnWXTzqPS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PVjkVyrBmYCvZQtrizC45v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lRdj7EDbK69YlpzmG66o6O
          claim_id: c_qRcTbUIe1ihN2mvWkV0HML
          source_id: s_l4EHKu7MmkIC6F4iUggPD1
          stance: supports
          locator: CBDB：兄弟 王炯（203137）之父／母 王木
          quotation: null
          interpretation_note: 由兄弟关系推断：王承祖 与 王炯 为同胞（CBDB 记「弟」），王炯 之父／母即 王承祖 之父／母。
          source:
            id: s_l4EHKu7MmkIC6F4iUggPD1
            source_type: api_record
            title: 中国历代人物传记资料库：王承祖（CBDB 300373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300373&o=json
            external_identifier: CBDB:300373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PVjkVyrBmYCvZQtrizC45v
        status: active
        display_name: 王承祖
        merged_into_person_id: null
    - claim:
        id: c_M8gqdcARxLE60AwF9xYM_Q
        subject_person_id: p_B2bBEtj4zAmwMdnWXTzqPS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e66TrFhjcAGLAzEgGsqu9m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v-tzHNTspkqp_bwLV32fTl
          claim_id: c_M8gqdcARxLE60AwF9xYM_Q
          source_id: s_3tKCgN6vdCGhXfE_O3iljJ
          stance: supports
          locator: CBDB：兄弟 王炯（203137）之父／母 王木
          quotation: null
          interpretation_note: 由兄弟关系推断：王念祖 与 王炯 为同胞（CBDB 记「弟」），王炯 之父／母即 王念祖 之父／母。
          source:
            id: s_3tKCgN6vdCGhXfE_O3iljJ
            source_type: api_record
            title: 中国历代人物传记资料库：王念祖（CBDB 300375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300375&o=json
            external_identifier: CBDB:300375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e66TrFhjcAGLAzEgGsqu9m
        status: active
        display_name: 王念祖
        merged_into_person_id: null
    - claim:
        id: c_1xgBlabJrqYFcqwA3EiJlV
        subject_person_id: p_B2bBEtj4zAmwMdnWXTzqPS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sqvDCLSjFBTdavMZN1J7vQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3URJaUWxIidvrOWDDp1Jpt
          claim_id: c_1xgBlabJrqYFcqwA3EiJlV
          source_id: s_NPikcApruT7EmF9sXREyxk
          stance: supports
          locator: CBDB：兄弟 王炯（203137）之父／母 王木
          quotation: null
          interpretation_note: 由兄弟关系推断：王烺 与 王炯 为同胞（CBDB 记「兄」），王炯 之父／母即 王烺 之父／母。
          source:
            id: s_NPikcApruT7EmF9sXREyxk
            source_type: api_record
            title: 中国历代人物传记资料库：王烺（CBDB 300378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300378&o=json
            external_identifier: CBDB:300378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sqvDCLSjFBTdavMZN1J7vQ
        status: active
        display_name: 王烺
        merged_into_person_id: null
    - claim:
        id: c_QWZX2TxaCIFdhLDAPg9egJ
        subject_person_id: p_B2bBEtj4zAmwMdnWXTzqPS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vG7H1SdJfYxax2vyGzUGbR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4781b5qkRVFB6mNhOwHAMA
          claim_id: c_QWZX2TxaCIFdhLDAPg9egJ
          source_id: s__BWXzOGpWSRA7y_k0mxJmo
          stance: supports
          locator: CBDB：兄弟 王炯（203137）之父／母 王木
          quotation: null
          interpretation_note: 由兄弟关系推断：王爟 与 王炯 为同胞（CBDB 记「兄」），王炯 之父／母即 王爟 之父／母。
          source:
            id: s__BWXzOGpWSRA7y_k0mxJmo
            source_type: api_record
            title: 中国历代人物传记资料库：王爟（CBDB 300376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300376&o=json
            external_identifier: CBDB:300376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vG7H1SdJfYxax2vyGzUGbR
        status: active
        display_name: 王爟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王木

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王木 | accepted |
| bio.summary | 王木，明人物。嘉靖十七年進士，籍贯嵊縣，曾任提刑按察使司僉事。（中国历代人物传记资料库 CBDB 300369） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_sSGZsmVuWDC2RLoBps8cmA | 王炯 | accepted |
| children | p_Ho6fpou3VNZ9hm6M7awVYe | 王煉 | accepted |
| children | p_LDHYTGoyzM9TQ49cExHALE | 王學祖 | accepted |
| children | p_PVjkVyrBmYCvZQtrizC45v | 王承祖 | accepted |
| children | p_e66TrFhjcAGLAzEgGsqu9m | 王念祖 | accepted |
| children | p_sqvDCLSjFBTdavMZN1J7vQ | 王烺 | accepted |
| children | p_vG7H1SdJfYxax2vyGzUGbR | 王爟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承祖（CBDB 300373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300373&o=json)
- [中国历代人物传记资料库：王爟（CBDB 300376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300376&o=json)
- [中国历代人物传记资料库：王烺（CBDB 300378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300378&o=json)
- [中国历代人物传记资料库：王煉（CBDB 300377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300377&o=json)
- [中国历代人物传记资料库：王木（CBDB 300369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300369&o=json)
- [中国历代人物传记资料库：王念祖（CBDB 300375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300375&o=json)
- [中国历代人物传记资料库：王學祖（CBDB 300374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300374&o=json)
