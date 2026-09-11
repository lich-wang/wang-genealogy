---
schema: wang-person/v1
id: p_sSGZsmVuWDC2RLoBps8cmA
status: active
merged_into: null
display_name: 王炯
revision: 4
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
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fQG7xnN7FsfnFGpAnvqBs3
          claim_id: c_dKKfXStNz2M7Dzez1c4hYF
          source_id: s_PRttrMTF4NfhBLbkQXuoce
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
  other: []
---

# 王炯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炯 | accepted |
| birth.date | 1515年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B2bBEtj4zAmwMdnWXTzqPS | 王木 | accepted |
| ancestors | p_inL3Vjn5QJ9Rhg2AbvxL25 | 王聚 | accepted |
| ancestors | p_MzHtEgyuL3B1cMeRrX552K | 王漳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王炯（CBDB 203137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203137&o=json)
- [中国历代人物传记资料库：王聚（CBDB 300367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300367&o=json)
- [中国历代人物传记资料库：王木（CBDB 300369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300369&o=json)
- [中国历代人物传记资料库：王漳（CBDB 300368）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300368&o=json)
