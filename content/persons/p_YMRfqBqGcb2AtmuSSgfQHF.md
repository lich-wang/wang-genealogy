---
schema: wang-person/v1
id: p_YMRfqBqGcb2AtmuSSgfQHF
status: active
merged_into: null
display_name: 王治
revision: 10
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
          text: 王治，明人物。明清進士進士，籍贯忻州，入仕進士，曾任大理寺右少卿、工科右給事中、工科左給事中。（中国历代人物传记资料库 CBDB 69158）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Tp5iDm7oHGsdmutd5YKOtF
          claim_id: c_ntwps67QMQejjaEXphsBM8
          source_id: s_Wh67PhpGypGR9xbv1EKvQR
          stance: supports
          locator: CBDB:69158
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aUS0GTUS7ZD4mZpfgCumv8
        subject_person_id: p_UidqakXpG7WU72BqWJwGkC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YMRfqBqGcb2AtmuSSgfQHF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_39mM1QkL9SJnBw1BWfWpWS
          claim_id: c_aUS0GTUS7ZD4mZpfgCumv8
          source_id: s_EfdRYNxK4Pj7eDh9AcUE3R
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EfdRYNxK4Pj7eDh9AcUE3R
            source_type: api_record
            title: 中国历代人物传记资料库：王鎧（CBDB 318694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318694&o=json
            external_identifier: CBDB:318694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.010Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UidqakXpG7WU72BqWJwGkC
        status: active
        display_name: 王鎧
        merged_into_person_id: null
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
  other:
    - claim:
        id: c_cray88x3tUstPHRPGOTSNk
        subject_person_id: p_JKsw7KSay2qx2xFt6hpSGh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YMRfqBqGcb2AtmuSSgfQHF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8joHLP-MIKgpRO8eNszmIH
          claim_id: c_cray88x3tUstPHRPGOTSNk
          source_id: s_xA2lRVu7qqsqzvHi-YJ-Tf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69158 王治）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xA2lRVu7qqsqzvHi-YJ-Tf
            source_type: api_record
            title: 中国历代人物传记资料库：王洲（CBDB 318701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318701&o=json
            external_identifier: CBDB:318701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JKsw7KSay2qx2xFt6hpSGh
        status: active
        display_name: 王洲
        merged_into_person_id: null
    - claim:
        id: c_McwDHLpUEf0ILaxH50s9uH
        subject_person_id: p_MJ11nWNxmz8EbmbR1EQcQT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YMRfqBqGcb2AtmuSSgfQHF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__33W5TrxguIZ8Xohk3rhDS
          claim_id: c_McwDHLpUEf0ILaxH50s9uH
          source_id: s_hXZMT_GHY7C6dQ4NIQp-BI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69158 王治）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hXZMT_GHY7C6dQ4NIQp-BI
            source_type: api_record
            title: 中国历代人物传记资料库：王漸（CBDB 318703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318703&o=json
            external_identifier: CBDB:318703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MJ11nWNxmz8EbmbR1EQcQT
        status: active
        display_name: 王漸
        merged_into_person_id: null
    - claim:
        id: c_OWLrPrLNkQ-7jVfEBIdp3k
        subject_person_id: p_YMRfqBqGcb2AtmuSSgfQHF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_f6b1ybdq775DN4Ct5frMxH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lfQTbP9w7qIZpspMnEVAk3
          claim_id: c_OWLrPrLNkQ-7jVfEBIdp3k
          source_id: s_wKtw7R4ADsYRr1Bnf44gV7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69158 王治）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wKtw7R4ADsYRr1Bnf44gV7
            source_type: api_record
            title: 中国历代人物传记资料库：王浙（CBDB 318699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318699&o=json
            external_identifier: CBDB:318699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_f6b1ybdq775DN4Ct5frMxH
        status: active
        display_name: 王浙
        merged_into_person_id: null
    - claim:
        id: c_i_Z5WiRIfzkM_Y8VOhY9Cn
        subject_person_id: p_YMRfqBqGcb2AtmuSSgfQHF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nL2tw9aL9AFh9BPnEPVZWG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_79BboTQrZJeVAIJIALVZ27
          claim_id: c_i_Z5WiRIfzkM_Y8VOhY9Cn
          source_id: s_iYGoU3gq42YCxejut12iGb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69158 王治）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iYGoU3gq42YCxejut12iGb
            source_type: api_record
            title: 中国历代人物传记资料库：王洛（CBDB 318700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318700&o=json
            external_identifier: CBDB:318700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nL2tw9aL9AFh9BPnEPVZWG
        status: active
        display_name: 王洛
        merged_into_person_id: null
    - claim:
        id: c_e6kVLd7-iH1DYM23cUnFdv
        subject_person_id: p_YMRfqBqGcb2AtmuSSgfQHF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_p8kLx89qN1Xy9GxcnYY8cb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dPeusxmop2rHoYjPNkmWq0
          claim_id: c_e6kVLd7-iH1DYM23cUnFdv
          source_id: s_pUBYlji717tIDeY-xumKJH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69158 王治）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pUBYlji717tIDeY-xumKJH
            source_type: api_record
            title: 中国历代人物传记资料库：王汀（CBDB 318702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318702&o=json
            external_identifier: CBDB:318702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_p8kLx89qN1Xy9GxcnYY8cb
        status: active
        display_name: 王汀
        merged_into_person_id: null
    - claim:
        id: c_9tfzspTWnq4bSVXg7egcUo
        subject_person_id: p_YMRfqBqGcb2AtmuSSgfQHF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yXYyJZeNrKPaMQGeKQ1N4S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z1srb6LFac6gGUp_s7LCf4
          claim_id: c_9tfzspTWnq4bSVXg7egcUo
          source_id: s_vNRHh15lwEeNonRRfd1uPl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69158 王治）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vNRHh15lwEeNonRRfd1uPl
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 318698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318698&o=json
            external_identifier: CBDB:318698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yXYyJZeNrKPaMQGeKQ1N4S
        status: active
        display_name: 王浩
        merged_into_person_id: null
---

# 王治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王治 | accepted |
| bio.summary | 王治，明人物。明清進士進士，籍贯忻州，入仕進士，曾任大理寺右少卿、工科右給事中、工科左給事中。（中国历代人物传记资料库 CBDB 69158） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UidqakXpG7WU72BqWJwGkC | 王鎧 | accepted |
| ancestors | p_6gnG64NLM7FygM7auGB75c | 王聚奎 | accepted |
| ancestors | p_mcdGPudr9Mz3JaFtAEB75S | 王堯臣 | accepted |
| other | p_JKsw7KSay2qx2xFt6hpSGh | 王洲 | accepted |
| other | p_MJ11nWNxmz8EbmbR1EQcQT | 王漸 | accepted |
| other | p_f6b1ybdq775DN4Ct5frMxH | 王浙 | accepted |
| other | p_nL2tw9aL9AFh9BPnEPVZWG | 王洛 | accepted |
| other | p_p8kLx89qN1Xy9GxcnYY8cb | 王汀 | accepted |
| other | p_yXYyJZeNrKPaMQGeKQ1N4S | 王浩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王浩（CBDB 318698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318698&o=json)
- [中国历代人物传记资料库：王漸（CBDB 318703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318703&o=json)
- [中国历代人物传记资料库：王聚奎（CBDB 318693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318693&o=json)
- [中国历代人物传记资料库：王鎧（CBDB 318694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318694&o=json)
- [中国历代人物传记资料库：王洛（CBDB 318700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318700&o=json)
- [中国历代人物传记资料库：王汀（CBDB 318702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318702&o=json)
- [中国历代人物传记资料库：王堯臣（CBDB 318692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318692&o=json)
- [中国历代人物传记资料库：王浙（CBDB 318699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318699&o=json)
- [中国历代人物传记资料库：王治（CBDB 69158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69158&o=json)
- [中国历代人物传记资料库：王洲（CBDB 318701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318701&o=json)
