---
schema: wang-person/v1
id: p_VsUEBsvkAXXbA9FWfTN5pA
status: active
merged_into: null
display_name: 王國禎
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5AWWL4dcf2jUAMRhg5kBQX
        subject_person_id: p_VsUEBsvkAXXbA9FWfTN5pA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國禎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jNXRH9AtTFXbF1J4y4gQ6T
          claim_id: c_5AWWL4dcf2jUAMRhg5kBQX
          source_id: s_QF4d9VCiywQ59DBDNxkXS1
          stance: supports
          locator: CBDB:126691
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126691）
          source: &a1
            id: s_QF4d9VCiywQ59DBDNxkXS1
            source_type: api_record
            title: 中国历代人物传记资料库：王國禎（CBDB 126691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126691&o=json
            external_identifier: CBDB:126691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.128Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eymijeEc5Naf3bq72i9AAH
        subject_person_id: p_VsUEBsvkAXXbA9FWfTN5pA
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
        - id: cs_LDCRU35HJ8LyPg5a3ndnkM
          claim_id: c_eymijeEc5Naf3bq72i9AAH
          source_id: s_QF4d9VCiywQ59DBDNxkXS1
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
        id: c_Y8ZY2Ll-u9AuQvYN8ownzN
        subject_person_id: p_nfDQpFcmyR41HhRtmj92PA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VsUEBsvkAXXbA9FWfTN5pA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U90p_UqBTCR3Y9MXVj5RC5
          claim_id: c_Y8ZY2Ll-u9AuQvYN8ownzN
          source_id: s_gLqYcPwPC3KJqKEtZKNiXV
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第六十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gLqYcPwPC3KJqKEtZKNiXV
            source_type: api_record
            title: 中国历代人物传记资料库：王愷（CBDB 300441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300441&o=json
            external_identifier: CBDB:300441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.632Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nfDQpFcmyR41HhRtmj92PA
        status: active
        display_name: 王愷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_mAdLTu8ykxBj1fa3VQLsZQ
        subject_person_id: p_AvcaPwSSq3Uk1GE9thkKb5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VsUEBsvkAXXbA9FWfTN5pA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W5vDVAAuX3nXyR-sGoe1XW
          claim_id: c_mAdLTu8ykxBj1fa3VQLsZQ
          source_id: s_7y4EiaxsnEtoTLrueGoZEK
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第六十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7y4EiaxsnEtoTLrueGoZEK
            source_type: api_record
            title: 中国历代人物传记资料库：王玉玭（CBDB 300440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300440&o=json
            external_identifier: CBDB:300440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_AvcaPwSSq3Uk1GE9thkKb5
        status: active
        display_name: 王玉玭
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王國禎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國禎 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nfDQpFcmyR41HhRtmj92PA | 王愷 | accepted |
| ancestors | p_AvcaPwSSq3Uk1GE9thkKb5 | 王玉玭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國禎（CBDB 126691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126691&o=json)
- [中国历代人物传记资料库：王愷（CBDB 300441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300441&o=json)
- [中国历代人物传记资料库：王玉玭（CBDB 300440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300440&o=json)
