---
schema: wang-person/v1
id: p_D4z9mWRZWdetNdzRfwASCL
status: active
merged_into: null
display_name: 王鏊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Whp2E2CwL6P8hhV4wAFjZ5
        subject_person_id: p_D4z9mWRZWdetNdzRfwASCL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ADirUNBak6wHeCoSDMCc6d
          claim_id: c_Whp2E2CwL6P8hhV4wAFjZ5
          source_id: s_L36KPdUT7QTHv5z6CzA85D
          stance: supports
          locator: CBDB:34579
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34579）
          source: &a1
            id: s_L36KPdUT7QTHv5z6CzA85D
            source_type: api_record
            title: 中国历代人物传记资料库：王鏊（CBDB 34579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34579&o=json
            external_identifier: CBDB:34579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.090Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hMvD59PGin12wkMrhcFZoy
        subject_person_id: p_D4z9mWRZWdetNdzRfwASCL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1450年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f74JrpkkbqjDEQxJ1VUnv2
          claim_id: c_hMvD59PGin12wkMrhcFZoy
          source_id: s_L36KPdUT7QTHv5z6CzA85D
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
        id: c_D32ujK6zfekyHw6YUztDvr
        subject_person_id: p_D4z9mWRZWdetNdzRfwASCL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1524年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NpR8MqK6jH7xTLYXSFQKAn
          claim_id: c_D32ujK6zfekyHw6YUztDvr
          source_id: s_L36KPdUT7QTHv5z6CzA85D
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
        id: c_zQ6EgMYB8R1CeqVZPJRDz4
        subject_person_id: p_D4z9mWRZWdetNdzRfwASCL
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
        - id: cs_gmJ4aBmmop7EJzNPxo7EzZ
          claim_id: c_zQ6EgMYB8R1CeqVZPJRDz4
          source_id: s_L36KPdUT7QTHv5z6CzA85D
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
        id: c_5WES65O26RFH5q6DEHRqUI
        subject_person_id: p_D4z9mWRZWdetNdzRfwASCL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7EWnYXtmTk1oqLCDzLFor6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RCm2Dt2pbdmOfqWLKumahC
          claim_id: c_5WES65O26RFH5q6DEHRqUI
          source_id: s_JxPuxpW3BgPDyZtaXRXHyA
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11510：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JxPuxpW3BgPDyZtaXRXHyA
            source_type: api_record
            title: 中国历代人物传记资料库：王延詰（CBDB 525608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525608&o=json
            external_identifier: CBDB:525608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_7EWnYXtmTk1oqLCDzLFor6
        status: active
        display_name: 王延詰
        merged_into_person_id: null
    - claim:
        id: c_MKRB8q1onXWGTeQT5YCHu1
        subject_person_id: p_D4z9mWRZWdetNdzRfwASCL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7sL8RLmuiFfTvhgxv4U3Hi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X2THtR_H5h1Cky5oxDmwvT
          claim_id: c_MKRB8q1onXWGTeQT5YCHu1
          source_id: s_SENcTgQS9UC8H3qnKDcdL4
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11510：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SENcTgQS9UC8H3qnKDcdL4
            source_type: api_record
            title: 中国历代人物传记资料库：王延昭（CBDB 525607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525607&o=json
            external_identifier: CBDB:525607
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_7sL8RLmuiFfTvhgxv4U3Hi
        status: active
        display_name: 王延昭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_JCnzOaELW9JqiLAvRf3oZ2
        subject_person_id: p_rfNi35kMF1FSma9nVH7tNg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_D4z9mWRZWdetNdzRfwASCL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Idh88eQzm0XrqJwdGpO3Ew
          claim_id: c_JCnzOaELW9JqiLAvRf3oZ2
          source_id: s_nZGqGfQ2NF4qEVQNq979KR
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第一甲第三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nZGqGfQ2NF4qEVQNq979KR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王彥祥（34584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34584&o=json
            external_identifier: CBDB:34584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_rfNi35kMF1FSma9nVH7tNg
        status: active
        display_name: 王彦祥
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鏊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏊 | accepted |
| birth.date | 1450年 | accepted |
| death.date | 1524年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7EWnYXtmTk1oqLCDzLFor6 | 王延詰 | accepted |
| children | p_7sL8RLmuiFfTvhgxv4U3Hi | 王延昭 | accepted |
| ancestors | p_rfNi35kMF1FSma9nVH7tNg | 王彦祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鏊（CBDB 34579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34579&o=json)
- [中国历代人物传记资料库：王延詰（CBDB 525608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525608&o=json)
- [中国历代人物传记资料库：王延昭（CBDB 525607）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525607&o=json)
- [CBDB 中国历代人物传记资料库：王彥祥（34584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34584&o=json)
