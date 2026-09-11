---
schema: wang-person/v1
id: p_q8jv2duMSqfqCbpkkK9Wow
status: active
merged_into: null
display_name: 王魯
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Kf599PShzi63k3HHYGo96
        subject_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RptGrZewxpQnr9twQRF8TV
          claim_id: c_4Kf599PShzi63k3HHYGo96
          source_id: s_ZEDjW9qJAw7y5dYn9riCxJ
          stance: supports
          locator: CBDB:198398
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198398）
          source: &a1
            id: s_ZEDjW9qJAw7y5dYn9riCxJ
            source_type: api_record
            title: 中国历代人物传记资料库：王魯（CBDB 198398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198398&o=json
            external_identifier: CBDB:198398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.489Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pfi175XHb9fUaf4EmSQpyL
        subject_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1427年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1LPaxX12KM69LeRuqvyEBC
          claim_id: c_pfi175XHb9fUaf4EmSQpyL
          source_id: s_ZEDjW9qJAw7y5dYn9riCxJ
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
        id: c_Q6gppLPJRNMZYiNKBbE8RC
        subject_person_id: p_q8jv2duMSqfqCbpkkK9Wow
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
        - id: cs_3c68JSNzP3BpA2GjdGxWSN
          claim_id: c_Q6gppLPJRNMZYiNKBbE8RC
          source_id: s_ZEDjW9qJAw7y5dYn9riCxJ
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
        id: c_f--7Ef3bfwXRVwErnaEdjk
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B0LJomOgWEjeHsS8Evk1jj
          claim_id: c_f--7Ef3bfwXRVwErnaEdjk
          source_id: s_Cg2uT2jLBdKAn8ujADvzDV
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第六十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Cg2uT2jLBdKAn8ujADvzDV
            source_type: api_record
            title: 中国历代人物传记资料库：王文奎（CBDB 267005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267005&o=json
            external_identifier: CBDB:267005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.757Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CKPv9UAc3q29PWyukafcq8
        status: active
        display_name: 王文奎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_p_KBPg5Hs9JVufeRsWuorb
        subject_person_id: p_dFiwtZQDoCpys33mCXoLWB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__7wpfNMoRgtdt6DfRHVVLh
          claim_id: c_p_KBPg5Hs9JVufeRsWuorb
          source_id: s_HYj8ziYMW42GetXUrveVNt
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第六十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HYj8ziYMW42GetXUrveVNt
            source_type: api_record
            title: 中国历代人物传记资料库：王伯忠（CBDB 266994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266994&o=json
            external_identifier: CBDB:266994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.756Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dFiwtZQDoCpys33mCXoLWB
        status: active
        display_name: 王伯忠
        merged_into_person_id: null
    - claim:
        id: c_AujGplPhdSeg_OZRRq7xPE
        subject_person_id: p_GZiUYnnrLjUkWy49TPto1R
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BvYZ8kn5Y9Dq0G8THr5_6N
          claim_id: c_AujGplPhdSeg_OZRRq7xPE
          source_id: s_JxwaNHDTFD7kd93Z6EFvGZ
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第六十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JxwaNHDTFD7kd93Z6EFvGZ
            source_type: api_record
            title: 中国历代人物传记资料库：王德明（CBDB 266983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266983&o=json
            external_identifier: CBDB:266983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.755Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GZiUYnnrLjUkWy49TPto1R
        status: active
        display_name: 王德明
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王魯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王魯 | accepted |
| birth.date | 1427年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CKPv9UAc3q29PWyukafcq8 | 王文奎 | accepted |
| ancestors | p_dFiwtZQDoCpys33mCXoLWB | 王伯忠 | accepted |
| ancestors | p_GZiUYnnrLjUkWy49TPto1R | 王德明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯忠（CBDB 266994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266994&o=json)
- [中国历代人物传记资料库：王德明（CBDB 266983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266983&o=json)
- [中国历代人物传记资料库：王魯（CBDB 198398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198398&o=json)
- [中国历代人物传记资料库：王文奎（CBDB 267005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267005&o=json)
