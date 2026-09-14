---
schema: wang-person/v1
id: p_UidqakXpG7WU72BqWJwGkC
status: active
merged_into: null
display_name: 王鎧
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d2yiPWgs4LkgAB3ecyeSTG
        subject_person_id: p_UidqakXpG7WU72BqWJwGkC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JVKD9dKML22Rw7VBZw9E4i
          claim_id: c_d2yiPWgs4LkgAB3ecyeSTG
          source_id: s_EfdRYNxK4Pj7eDh9AcUE3R
          stance: supports
          locator: CBDB:318694
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318694）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M2kWbuJU6nKB3KePbLCTFm
        subject_person_id: p_UidqakXpG7WU72BqWJwGkC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎧，明人物。嘉靖三十二年進士，籍贯忻州。（中国历代人物传记资料库 CBDB 318694）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PcbLn46uD8tqhkElqzenE5
          claim_id: c_M2kWbuJU6nKB3KePbLCTFm
          source_id: s_EfdRYNxK4Pj7eDh9AcUE3R
          stance: supports
          locator: CBDB:318694
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_YMRfqBqGcb2AtmuSSgfQHF
        status: active
        display_name: 王治
        merged_into_person_id: null
    - claim:
        id: c_TVCr980Eb0vDldLzPm-2C-
        subject_person_id: p_UidqakXpG7WU72BqWJwGkC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JKsw7KSay2qx2xFt6hpSGh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Atpn3WwTPnQZ90LWXL7O94
          claim_id: c_TVCr980Eb0vDldLzPm-2C-
          source_id: s_xA2lRVu7qqsqzvHi-YJ-Tf
          stance: supports
          locator: CBDB：兄弟 王治（69158）之父／母 王鎧
          quotation: null
          interpretation_note: 由兄弟关系推断：王洲 与 王治 为同胞（CBDB 记「兄」），王治 之父／母即 王洲 之父／母。
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
        id: c_dQza32aNEVEzM2P9zK3Vay
        subject_person_id: p_UidqakXpG7WU72BqWJwGkC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MJ11nWNxmz8EbmbR1EQcQT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9t1orp5-KfDLndzcfy6hmh
          claim_id: c_dQza32aNEVEzM2P9zK3Vay
          source_id: s_hXZMT_GHY7C6dQ4NIQp-BI
          stance: supports
          locator: CBDB：兄弟 王治（69158）之父／母 王鎧
          quotation: null
          interpretation_note: 由兄弟关系推断：王漸 与 王治 为同胞（CBDB 记「兄」），王治 之父／母即 王漸 之父／母。
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
        id: c_FB8JCQulR-mMxsCWxylXTB
        subject_person_id: p_UidqakXpG7WU72BqWJwGkC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f6b1ybdq775DN4Ct5frMxH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dl4IG-9GVG2N2u4CZrBh9J
          claim_id: c_FB8JCQulR-mMxsCWxylXTB
          source_id: s_wKtw7R4ADsYRr1Bnf44gV7
          stance: supports
          locator: CBDB：兄弟 王治（69158）之父／母 王鎧
          quotation: null
          interpretation_note: 由兄弟关系推断：王浙 与 王治 为同胞（CBDB 记「兄」），王治 之父／母即 王浙 之父／母。
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
        id: c_s_Bc230DarqYo4Q_dV6myl
        subject_person_id: p_UidqakXpG7WU72BqWJwGkC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nL2tw9aL9AFh9BPnEPVZWG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h0a5WgDea0UZUWt3MV7PUF
          claim_id: c_s_Bc230DarqYo4Q_dV6myl
          source_id: s_iYGoU3gq42YCxejut12iGb
          stance: supports
          locator: CBDB：兄弟 王治（69158）之父／母 王鎧
          quotation: null
          interpretation_note: 由兄弟关系推断：王洛 与 王治 为同胞（CBDB 记「兄」），王治 之父／母即 王洛 之父／母。
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
        id: c_jeZiz50SeuXH90hmWNPqP_
        subject_person_id: p_UidqakXpG7WU72BqWJwGkC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p8kLx89qN1Xy9GxcnYY8cb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nYfp4ayMlkp4O7ueK-tV9S
          claim_id: c_jeZiz50SeuXH90hmWNPqP_
          source_id: s_pUBYlji717tIDeY-xumKJH
          stance: supports
          locator: CBDB：兄弟 王治（69158）之父／母 王鎧
          quotation: null
          interpretation_note: 由兄弟关系推断：王汀 与 王治 为同胞（CBDB 记「兄」），王治 之父／母即 王汀 之父／母。
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
        id: c_0vRm-zEKWHbUpAnDPmbhoa
        subject_person_id: p_UidqakXpG7WU72BqWJwGkC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yXYyJZeNrKPaMQGeKQ1N4S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cmNC8YOTUKK45tn-_PcpCm
          claim_id: c_0vRm-zEKWHbUpAnDPmbhoa
          source_id: s_vNRHh15lwEeNonRRfd1uPl
          stance: supports
          locator: CBDB：兄弟 王治（69158）之父／母 王鎧
          quotation: null
          interpretation_note: 由兄弟关系推断：王浩 与 王治 为同胞（CBDB 记「兄」），王治 之父／母即 王浩 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鎧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎧 | accepted |
| bio.summary | 王鎧，明人物。嘉靖三十二年進士，籍贯忻州。（中国历代人物传记资料库 CBDB 318694） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_YMRfqBqGcb2AtmuSSgfQHF | 王治 | accepted |
| children | p_JKsw7KSay2qx2xFt6hpSGh | 王洲 | accepted |
| children | p_MJ11nWNxmz8EbmbR1EQcQT | 王漸 | accepted |
| children | p_f6b1ybdq775DN4Ct5frMxH | 王浙 | accepted |
| children | p_nL2tw9aL9AFh9BPnEPVZWG | 王洛 | accepted |
| children | p_p8kLx89qN1Xy9GxcnYY8cb | 王汀 | accepted |
| children | p_yXYyJZeNrKPaMQGeKQ1N4S | 王浩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王浩（CBDB 318698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318698&o=json)
- [中国历代人物传记资料库：王漸（CBDB 318703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318703&o=json)
- [中国历代人物传记资料库：王鎧（CBDB 318694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318694&o=json)
- [中国历代人物传记资料库：王洛（CBDB 318700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318700&o=json)
- [中国历代人物传记资料库：王汀（CBDB 318702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318702&o=json)
- [中国历代人物传记资料库：王浙（CBDB 318699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318699&o=json)
- [中国历代人物传记资料库：王洲（CBDB 318701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318701&o=json)
