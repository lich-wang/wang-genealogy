---
schema: wang-person/v1
id: p_HQwCgPv1NvwspN18mM5u4K
status: active
merged_into: null
display_name: 王尚文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jgnd6GN8QM9TBd1Biv3BRe
        subject_person_id: p_HQwCgPv1NvwspN18mM5u4K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qxLNUAg5RS9n6JjVnXBuse
          claim_id: c_Jgnd6GN8QM9TBd1Biv3BRe
          source_id: s_MGV5GkKPNTipsTD8zpK7Rs
          stance: supports
          locator: CBDB:244353
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244353）
          source: &a1
            id: s_MGV5GkKPNTipsTD8zpK7Rs
            source_type: api_record
            title: 中国历代人物传记资料库：王尚文（CBDB 244353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244353&o=json
            external_identifier: CBDB:244353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.027Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zYMLBnbo5ZCN5NUehNPNGf
        subject_person_id: p_HQwCgPv1NvwspN18mM5u4K
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
        - id: cs_DdLQGCHNtXLoeqG8qr7E9r
          claim_id: c_zYMLBnbo5ZCN5NUehNPNGf
          source_id: s_MGV5GkKPNTipsTD8zpK7Rs
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
  ancestors: []
  descendants:
    - claim:
        id: c_Q0Qt_bKJFTHtn5QDoTLxLU
        subject_person_id: p_HQwCgPv1NvwspN18mM5u4K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_epxa1325d3t8zGBhqaGATe
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oWR_vcZIxsQx10A15QUpM9
          claim_id: c_Q0Qt_bKJFTHtn5QDoTLxLU
          source_id: s_tsLSMzErps2tPShGmMQFWS
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tsLSMzErps2tPShGmMQFWS
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 199393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199393&o=json
            external_identifier: CBDB:199393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_epxa1325d3t8zGBhqaGATe
        status: active
        display_name: 王錦
        merged_into_person_id: null
  other: []
---

# 王尚文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚文 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_epxa1325d3t8zGBhqaGATe | 王錦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錦（CBDB 199393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199393&o=json)
- [中国历代人物传记资料库：王尚文（CBDB 244353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244353&o=json)
