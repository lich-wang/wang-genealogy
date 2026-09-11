---
schema: wang-person/v1
id: p_YMRfqBqGcb2AtmuSSgfQHF
status: active
merged_into: null
display_name: 王治
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TQoVTMKtb25YgBf9bM2Nbf
        subject_person_id: p_YMRfqBqGcb2AtmuSSgfQHF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6wdi22aGrjdZ8s1jZA7qFH
          claim_id: c_TQoVTMKtb25YgBf9bM2Nbf
          source_id: s_Wh67PhpGypGR9xbv1EKvQR
          stance: supports
          locator: CBDB:69158
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69158）
          source: &a1
            id: s_Wh67PhpGypGR9xbv1EKvQR
            source_type: api_record
            title: 中国历代人物传记资料库：王治（CBDB 69158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69158&o=json
            external_identifier: CBDB:69158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.131Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ntwps67QMQejjaEXphsBM8
        subject_person_id: p_YMRfqBqGcb2AtmuSSgfQHF
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
        - id: cs_k129oTxkGR1juB95shhpNk
          claim_id: c_ntwps67QMQejjaEXphsBM8
          source_id: s_Wh67PhpGypGR9xbv1EKvQR
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
        id: c_FdmVvSqE3eY13dO3RAd-fk
        subject_person_id: p_6gnG64NLM7FygM7auGB75c
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YMRfqBqGcb2AtmuSSgfQHF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g4QhqLOA7RfFTLLE8p8ebT
          claim_id: c_FdmVvSqE3eY13dO3RAd-fk
          source_id: s_6Bgn64aqECK6fS233CxiTP
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百六十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6Bgn64aqECK6fS233CxiTP
            source_type: api_record
            title: 中国历代人物传记资料库：王聚奎（CBDB 318693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318693&o=json
            external_identifier: CBDB:318693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.009Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6gnG64NLM7FygM7auGB75c
        status: active
        display_name: 王聚奎
        merged_into_person_id: null
    - claim:
        id: c_8bhpwjFFkOWucssGUB21Mm
        subject_person_id: p_mcdGPudr9Mz3JaFtAEB75S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YMRfqBqGcb2AtmuSSgfQHF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X7pAG3U-cjQadqdwfoJzi8
          claim_id: c_8bhpwjFFkOWucssGUB21Mm
          source_id: s_DsAMATBCM1YfoUzUFdyABc
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百六十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DsAMATBCM1YfoUzUFdyABc
            source_type: api_record
            title: 中国历代人物传记资料库：王堯臣（CBDB 318692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318692&o=json
            external_identifier: CBDB:318692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.008Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mcdGPudr9Mz3JaFtAEB75S
        status: active
        display_name: 王堯臣
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王治 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_6gnG64NLM7FygM7auGB75c | 王聚奎 | accepted |
| ancestors | p_mcdGPudr9Mz3JaFtAEB75S | 王堯臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聚奎（CBDB 318693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318693&o=json)
- [中国历代人物传记资料库：王堯臣（CBDB 318692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318692&o=json)
- [中国历代人物传记资料库：王治（CBDB 69158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69158&o=json)
