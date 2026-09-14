---
schema: wang-person/v1
id: p_sSGZsmVuWDC2RLoBps8cmA
status: active
merged_into: null
display_name: 王炯
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vF8BvmrybZmJg2AFiwnXLZ
        subject_person_id: p_sSGZsmVuWDC2RLoBps8cmA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qib7qFfj9aEdaNW43jJiHp
          claim_id: c_vF8BvmrybZmJg2AFiwnXLZ
          source_id: s_PRttrMTF4NfhBLbkQXuoce
          stance: supports
          locator: CBDB:203137
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203137）
          source: &a1
            id: s_PRttrMTF4NfhBLbkQXuoce
            source_type: api_record
            title: 中国历代人物传记资料库：王炯（CBDB 203137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203137&o=json
            external_identifier: CBDB:203137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.777Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pa6s3C5ZeR6W2AvG5d8MLT
        subject_person_id: p_sSGZsmVuWDC2RLoBps8cmA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1515年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RwSCziN8nV6V4zBJvJejDN
          claim_id: c_pa6s3C5ZeR6W2AvG5d8MLT
          source_id: s_PRttrMTF4NfhBLbkQXuoce
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
        id: c_dKKfXStNz2M7Dzez1c4hYF
        subject_person_id: p_sSGZsmVuWDC2RLoBps8cmA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炯（生于1515年），明人物。嘉靖十七年進士，籍贯嵊縣，入仕進士。（中国历代人物传记资料库 CBDB 203137）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9RSiCp8QilFPFgOYHp_LCh
          claim_id: c_dKKfXStNz2M7Dzez1c4hYF
          source_id: s_PRttrMTF4NfhBLbkQXuoce
          stance: supports
          locator: CBDB:203137
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_B2bBEtj4zAmwMdnWXTzqPS
        status: active
        display_name: 王木
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_L8F6nM8_paA4sIIJerUoMU
        subject_person_id: p_inL3Vjn5QJ9Rhg2AbvxL25
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sSGZsmVuWDC2RLoBps8cmA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c5UknqVpFYY58VwPjyI16W
          claim_id: c_L8F6nM8_paA4sIIJerUoMU
          source_id: s_Mz32CVQzLKKjCsx4yBDxoh
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第六十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Mz32CVQzLKKjCsx4yBDxoh
            source_type: api_record
            title: 中国历代人物传记资料库：王聚（CBDB 300367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300367&o=json
            external_identifier: CBDB:300367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.628Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_inL3Vjn5QJ9Rhg2AbvxL25
        status: active
        display_name: 王聚
        merged_into_person_id: null
    - claim:
        id: c_p5HHqTd_p7OsQodfdfy2y9
        subject_person_id: p_MzHtEgyuL3B1cMeRrX552K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sSGZsmVuWDC2RLoBps8cmA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t1V11_24Co6f826XHKGOVO
          claim_id: c_p5HHqTd_p7OsQodfdfy2y9
          source_id: s_We75FPHvK3meWPKEV3B1fK
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第六十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_We75FPHvK3meWPKEV3B1fK
            source_type: api_record
            title: 中国历代人物传记资料库：王漳（CBDB 300368）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300368&o=json
            external_identifier: CBDB:300368
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.628Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MzHtEgyuL3B1cMeRrX552K
        status: active
        display_name: 王漳
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_qMrFy2A_5gn6F6o-ZJzE-L
        subject_person_id: p_Ho6fpou3VNZ9hm6M7awVYe
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sSGZsmVuWDC2RLoBps8cmA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qDJTPSMWP-x4xYrtlwB8t4
          claim_id: c_qMrFy2A_5gn6F6o-ZJzE-L
          source_id: s_G71lGyyba6A5wVpJlSeq9w
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203137 王炯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_JEKX2lW020SvSoBEl__X0p
        subject_person_id: p_LDHYTGoyzM9TQ49cExHALE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sSGZsmVuWDC2RLoBps8cmA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qJVpNBePpVP4YpmAn1ODY0
          claim_id: c_JEKX2lW020SvSoBEl__X0p
          source_id: s_sStu-3RLHj6Yf8d3n5OlOX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203137 王炯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_XeKj7u9SIIpfAQOp3h5Rmt
        subject_person_id: p_PVjkVyrBmYCvZQtrizC45v
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sSGZsmVuWDC2RLoBps8cmA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EitmBxk0Hr5PuZCQvhvjUY
          claim_id: c_XeKj7u9SIIpfAQOp3h5Rmt
          source_id: s_l4EHKu7MmkIC6F4iUggPD1
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203137 王炯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_Pi1erY7TXLqp2tDpL0VZbS
        subject_person_id: p_e66TrFhjcAGLAzEgGsqu9m
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sSGZsmVuWDC2RLoBps8cmA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tafyjBumiZOUp0UV2tzY4V
          claim_id: c_Pi1erY7TXLqp2tDpL0VZbS
          source_id: s_3tKCgN6vdCGhXfE_O3iljJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203137 王炯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_0D0dfHQeAnDIJG3NwaL8Q9
        subject_person_id: p_sSGZsmVuWDC2RLoBps8cmA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sqvDCLSjFBTdavMZN1J7vQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MrXQhXrnMQ0lLrcMLmyFNZ
          claim_id: c_0D0dfHQeAnDIJG3NwaL8Q9
          source_id: s_NPikcApruT7EmF9sXREyxk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203137 王炯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_iLadzErqrnWDG4s3COvSqB
        subject_person_id: p_sSGZsmVuWDC2RLoBps8cmA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vG7H1SdJfYxax2vyGzUGbR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FY4n8SYaIPZzL6x3qSVsHm
          claim_id: c_iLadzErqrnWDG4s3COvSqB
          source_id: s__BWXzOGpWSRA7y_k0mxJmo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203137 王炯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王炯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炯 | accepted |
| birth.date | 1515年 | accepted |
| bio.summary | 王炯（生于1515年），明人物。嘉靖十七年進士，籍贯嵊縣，入仕進士。（中国历代人物传记资料库 CBDB 203137） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B2bBEtj4zAmwMdnWXTzqPS | 王木 | accepted |
| ancestors | p_inL3Vjn5QJ9Rhg2AbvxL25 | 王聚 | accepted |
| ancestors | p_MzHtEgyuL3B1cMeRrX552K | 王漳 | accepted |
| other | p_Ho6fpou3VNZ9hm6M7awVYe | 王煉 | accepted |
| other | p_LDHYTGoyzM9TQ49cExHALE | 王學祖 | accepted |
| other | p_PVjkVyrBmYCvZQtrizC45v | 王承祖 | accepted |
| other | p_e66TrFhjcAGLAzEgGsqu9m | 王念祖 | accepted |
| other | p_sqvDCLSjFBTdavMZN1J7vQ | 王烺 | accepted |
| other | p_vG7H1SdJfYxax2vyGzUGbR | 王爟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承祖（CBDB 300373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300373&o=json)
- [中国历代人物传记资料库：王爟（CBDB 300376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300376&o=json)
- [中国历代人物传记资料库：王炯（CBDB 203137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203137&o=json)
- [中国历代人物传记资料库：王聚（CBDB 300367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300367&o=json)
- [中国历代人物传记资料库：王烺（CBDB 300378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300378&o=json)
- [中国历代人物传记资料库：王煉（CBDB 300377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300377&o=json)
- [中国历代人物传记资料库：王木（CBDB 300369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300369&o=json)
- [中国历代人物传记资料库：王念祖（CBDB 300375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300375&o=json)
- [中国历代人物传记资料库：王學祖（CBDB 300374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300374&o=json)
- [中国历代人物传记资料库：王漳（CBDB 300368）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300368&o=json)
