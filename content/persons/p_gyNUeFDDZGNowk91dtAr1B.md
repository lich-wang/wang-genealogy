---
schema: wang-person/v1
id: p_gyNUeFDDZGNowk91dtAr1B
status: active
merged_into: null
display_name: 王惟賢
revision: 16
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FC1TrNMq411HpdLzsktezT
        subject_person_id: p_gyNUeFDDZGNowk91dtAr1B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qHarH3hdKNMYRiRfdVB6k5
          claim_id: c_FC1TrNMq411HpdLzsktezT
          source_id: s_BvmkGPXfQbyxPPw38AHawj
          stance: supports
          locator: CBDB:202709
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202709）
          source: &a1
            id: s_BvmkGPXfQbyxPPw38AHawj
            source_type: api_record
            title: 中国历代人物传记资料库：王惟賢（CBDB 202709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202709&o=json
            external_identifier: CBDB:202709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3M4akwiC8ErRbUTWckHrCt
        subject_person_id: p_gyNUeFDDZGNowk91dtAr1B
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1496年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_15MfKckkBaXkqbNPmi9HmV
          claim_id: c_3M4akwiC8ErRbUTWckHrCt
          source_id: s_BvmkGPXfQbyxPPw38AHawj
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
        id: c_wDWpUE1Wa5AUgC8KDEoFU9
        subject_person_id: p_gyNUeFDDZGNowk91dtAr1B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟賢（生于1496年），明人物。明清進士進士，籍贯中江，入仕進士，曾任刑部員外郎、刑部主事、都察院觀政。（中国历代人物传记资料库 CBDB 202709）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-lGqaKWzLdCyWcOow51jbe
          claim_id: c_wDWpUE1Wa5AUgC8KDEoFU9
          source_id: s_BvmkGPXfQbyxPPw38AHawj
          stance: supports
          locator: CBDB:202709
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f4NvjuyahVCFx-H_WJGAF8
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gyNUeFDDZGNowk91dtAr1B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__x4kScBruY3tbtDPxVe0Ni
          claim_id: c_f4NvjuyahVCFx-H_WJGAF8
          source_id: s_gDVxGFCkxFcG1JYveorKZf
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第七十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gDVxGFCkxFcG1JYveorKZf
            source_type: api_record
            title: 中国历代人物传记资料库：王錫（CBDB 292741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292741&o=json
            external_identifier: CBDB:292741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.415Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MfVeb7fgPLZUX4FfJniEs9
        status: active
        display_name: 王錫
        merged_into_person_id: null
  children:
    - claim:
        id: c_8ayC-38w2zoNzin9yuqYhR
        subject_person_id: p_gyNUeFDDZGNowk91dtAr1B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2UGwXzuLr1XfU6aXNcFopA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wLV74tcaIswsbSw1KuZ9MK
          claim_id: c_8ayC-38w2zoNzin9yuqYhR
          source_id: s_JNCFuPQLjmSAxvFAoL7iB3
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第七十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JNCFuPQLjmSAxvFAoL7iB3
            source_type: api_record
            title: 中国历代人物传记资料库：王伸（CBDB 292755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292755&o=json
            external_identifier: CBDB:292755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2UGwXzuLr1XfU6aXNcFopA
        status: active
        display_name: 王伸
        merged_into_person_id: null
    - claim:
        id: c_XwXWaoHvVPVt1SiYcjv7h1
        subject_person_id: p_gyNUeFDDZGNowk91dtAr1B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hJYN4oe1c1xPsQK1bDY1qs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d7KkVRziXKbbqvUp0JbWtl
          claim_id: c_XwXWaoHvVPVt1SiYcjv7h1
          source_id: s_9fy9kfPv3b9KBNcJ82p8BA
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第七十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9fy9kfPv3b9KBNcJ82p8BA
            source_type: api_record
            title: 中国历代人物传记资料库：王佶（CBDB 292756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292756&o=json
            external_identifier: CBDB:292756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.419Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hJYN4oe1c1xPsQK1bDY1qs
        status: active
        display_name: 王佶
        merged_into_person_id: null
    - claim:
        id: c_p7dQ9Ygcsf3p8i1liKNdeh
        subject_person_id: p_gyNUeFDDZGNowk91dtAr1B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_icYBEYR9zgQawiwAKaV75B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QvTjHWP9xTO4LxqaO-no3m
          claim_id: c_p7dQ9Ygcsf3p8i1liKNdeh
          source_id: s_Grbkr698b4nUMC9u6zrKPp
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第七十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Grbkr698b4nUMC9u6zrKPp
            source_type: api_record
            title: 中国历代人物传记资料库：王仔（CBDB 292757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292757&o=json
            external_identifier: CBDB:292757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.419Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_icYBEYR9zgQawiwAKaV75B
        status: active
        display_name: 王仔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_CK0rCwiySbTm182j4j3u1h
        subject_person_id: p_GxDL9ejJ5dxwKNZ9PCmbaa
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gyNUeFDDZGNowk91dtAr1B
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g10Bd-Jy1Csrf5AvFi5sC0
          claim_id: c_CK0rCwiySbTm182j4j3u1h
          source_id: s_c1p5GFMDx6PegFKePfxQfX
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第七十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_c1p5GFMDx6PegFKePfxQfX
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 292738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292738&o=json
            external_identifier: CBDB:292738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.412Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GxDL9ejJ5dxwKNZ9PCmbaa
        status: active
        display_name: 王宏
        merged_into_person_id: null
    - claim:
        id: c_zMTm8DZD4G2ga7A0NVfWAZ
        subject_person_id: p_oTGg6HQBF9rGe9dd4P5FEh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gyNUeFDDZGNowk91dtAr1B
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8oNm5KOWiFTk-k8QALc1JK
          claim_id: c_zMTm8DZD4G2ga7A0NVfWAZ
          source_id: s_A84mzWCnBHR82ScVab221E
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第七十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_A84mzWCnBHR82ScVab221E
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 292739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292739&o=json
            external_identifier: CBDB:292739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.413Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oTGg6HQBF9rGe9dd4P5FEh
        status: active
        display_name: 王溥
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_oxO9OnDbnuW6ZMQWdp3o1K
        subject_person_id: p_5c12iZN67E1UJGx7FWK1rK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gyNUeFDDZGNowk91dtAr1B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B1GAU48TilZtqvKv_Usk63
          claim_id: c_oxO9OnDbnuW6ZMQWdp3o1K
          source_id: s_hqrV6MMM8H7hPGEgJmImbJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202709 王惟賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hqrV6MMM8H7hPGEgJmImbJ
            source_type: api_record
            title: 中国历代人物传记资料库：王介賢（CBDB 292745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292745&o=json
            external_identifier: CBDB:292745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5c12iZN67E1UJGx7FWK1rK
        status: active
        display_name: 王介賢
        merged_into_person_id: null
    - claim:
        id: c_8tqF_mgEzv4x2lfESD2BRM
        subject_person_id: p_CnpyxECHZ2Sqyho2tBnR97
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gyNUeFDDZGNowk91dtAr1B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DG9haLeBGnCy47ifJcSwda
          claim_id: c_8tqF_mgEzv4x2lfESD2BRM
          source_id: s_Wn_st_YfIKSQqzy6fulDMf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202709 王惟賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Wn_st_YfIKSQqzy6fulDMf
            source_type: api_record
            title: 中国历代人物传记资料库：王崔賢（CBDB 292752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292752&o=json
            external_identifier: CBDB:292752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CnpyxECHZ2Sqyho2tBnR97
        status: active
        display_name: 王崔賢
        merged_into_person_id: null
    - claim:
        id: c_lHY_G9YfSWU3wIb19Obk91
        subject_person_id: p_QN14VWmqT7W6KKpsHCdtPp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gyNUeFDDZGNowk91dtAr1B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HPcmR-BDYBB_6606JRBMnR
          claim_id: c_lHY_G9YfSWU3wIb19Obk91
          source_id: s_Cb29OzORXzdrXgf_VcdMhR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202709 王惟賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Cb29OzORXzdrXgf_VcdMhR
            source_type: api_record
            title: 中国历代人物传记资料库：王希賢（CBDB 292744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292744&o=json
            external_identifier: CBDB:292744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QN14VWmqT7W6KKpsHCdtPp
        status: active
        display_name: 王希賢
        merged_into_person_id: null
    - claim:
        id: c_szXhr-xvq2IIRLcMpmaepB
        subject_person_id: p_UEniNJwGdcvc3hDGN4MsBK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gyNUeFDDZGNowk91dtAr1B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GOP0f0mHy7v2eg9fOYGW6d
          claim_id: c_szXhr-xvq2IIRLcMpmaepB
          source_id: s_yRneHzBuITCXm7EvsyPslJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202709 王惟賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yRneHzBuITCXm7EvsyPslJ
            source_type: api_record
            title: 中国历代人物传记资料库：王三賢（CBDB 292747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292747&o=json
            external_identifier: CBDB:292747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UEniNJwGdcvc3hDGN4MsBK
        status: active
        display_name: 王三賢
        merged_into_person_id: null
    - claim:
        id: c_jJhrdxR4lEgLbzdUGdf7Sa
        subject_person_id: p_WZDmbds81hz72ibPbytT9p
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gyNUeFDDZGNowk91dtAr1B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__WsYLZe4U7PQmpYSToN-su
          claim_id: c_jJhrdxR4lEgLbzdUGdf7Sa
          source_id: s_2A9GF1tvIUf9jQNYSRDt-Z
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202709 王惟賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2A9GF1tvIUf9jQNYSRDt-Z
            source_type: api_record
            title: 中国历代人物传记资料库：王次賢（CBDB 292749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292749&o=json
            external_identifier: CBDB:292749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WZDmbds81hz72ibPbytT9p
        status: active
        display_name: 王次賢
        merged_into_person_id: null
    - claim:
        id: c_jLHLGy_bRPvzIxgeBgaiUO
        subject_person_id: p_XdtDFjMTu3YEdr574aNAWC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gyNUeFDDZGNowk91dtAr1B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4zjWcUhNvxDhje7jJWZv27
          claim_id: c_jLHLGy_bRPvzIxgeBgaiUO
          source_id: s_hZA6G-JplYYwKDaph34Pzb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202709 王惟賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hZA6G-JplYYwKDaph34Pzb
            source_type: api_record
            title: 中国历代人物传记资料库：王慶賢（CBDB 292746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292746&o=json
            external_identifier: CBDB:292746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XdtDFjMTu3YEdr574aNAWC
        status: active
        display_name: 王慶賢
        merged_into_person_id: null
    - claim:
        id: c_OHFfLo_KWtXNeYZxdYSONA
        subject_person_id: p_gyNUeFDDZGNowk91dtAr1B
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hAFDA2mr5LdafaVzTv7DgL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e8RH_Ov90GV-y59jxy4TV0
          claim_id: c_OHFfLo_KWtXNeYZxdYSONA
          source_id: s_xm9yvmDpPGFH-SH4fjFV3h
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202709 王惟賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xm9yvmDpPGFH-SH4fjFV3h
            source_type: api_record
            title: 中国历代人物传记资料库：王立賢（CBDB 292750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292750&o=json
            external_identifier: CBDB:292750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hAFDA2mr5LdafaVzTv7DgL
        status: active
        display_name: 王立賢
        merged_into_person_id: null
    - claim:
        id: c_EJN2vtOBkhIMdtx-NsMKhO
        subject_person_id: p_gyNUeFDDZGNowk91dtAr1B
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oPXfGu41nRvAjDhHN9KMCe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lrm6meIyqSd1KrpAN_gQk8
          claim_id: c_EJN2vtOBkhIMdtx-NsMKhO
          source_id: s_UkRQa4UkVsR_Ure2UPD-IX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202709 王惟賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UkRQa4UkVsR_Ure2UPD-IX
            source_type: api_record
            title: 中国历代人物传记资料库：王某賢（CBDB 292753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292753&o=json
            external_identifier: CBDB:292753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oPXfGu41nRvAjDhHN9KMCe
        status: active
        display_name: 王某賢
        merged_into_person_id: null
    - claim:
        id: c_NuKVrb8lX-MKGkkbPiQwmD
        subject_person_id: p_gyNUeFDDZGNowk91dtAr1B
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_swGoifyYMCGzEttLSRtgNF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HW7iEdjh8ivv32KN-u-DSi
          claim_id: c_NuKVrb8lX-MKGkkbPiQwmD
          source_id: s_n8wSNdznkYeYnhIsz9EvAo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202709 王惟賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_n8wSNdznkYeYnhIsz9EvAo
            source_type: api_record
            title: 中国历代人物传记资料库：王可賢（CBDB 292754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292754&o=json
            external_identifier: CBDB:292754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_swGoifyYMCGzEttLSRtgNF
        status: active
        display_name: 王可賢
        merged_into_person_id: null
    - claim:
        id: c_wpsqHqzWZ1YCUe9ploJlpt
        subject_person_id: p_gyNUeFDDZGNowk91dtAr1B
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xspHGTMTrdySUKmYASS629
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NO0ZC9laDkAWzyaaym3rJZ
          claim_id: c_wpsqHqzWZ1YCUe9ploJlpt
          source_id: s_YiMj2XF7R_O6UfBBpsmsiF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202709 王惟賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YiMj2XF7R_O6UfBBpsmsiF
            source_type: api_record
            title: 中国历代人物传记资料库：王用賢（CBDB 292748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292748&o=json
            external_identifier: CBDB:292748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xspHGTMTrdySUKmYASS629
        status: active
        display_name: 王用賢
        merged_into_person_id: null
---

# 王惟賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟賢 | accepted |
| birth.date | 1496年 | accepted |
| bio.summary | 王惟賢（生于1496年），明人物。明清進士進士，籍贯中江，入仕進士，曾任刑部員外郎、刑部主事、都察院觀政。（中国历代人物传记资料库 CBDB 202709） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MfVeb7fgPLZUX4FfJniEs9 | 王錫 | accepted |
| children | p_2UGwXzuLr1XfU6aXNcFopA | 王伸 | accepted |
| children | p_hJYN4oe1c1xPsQK1bDY1qs | 王佶 | accepted |
| children | p_icYBEYR9zgQawiwAKaV75B | 王仔 | accepted |
| ancestors | p_GxDL9ejJ5dxwKNZ9PCmbaa | 王宏 | accepted |
| ancestors | p_oTGg6HQBF9rGe9dd4P5FEh | 王溥 | accepted |
| other | p_5c12iZN67E1UJGx7FWK1rK | 王介賢 | accepted |
| other | p_CnpyxECHZ2Sqyho2tBnR97 | 王崔賢 | accepted |
| other | p_QN14VWmqT7W6KKpsHCdtPp | 王希賢 | accepted |
| other | p_UEniNJwGdcvc3hDGN4MsBK | 王三賢 | accepted |
| other | p_WZDmbds81hz72ibPbytT9p | 王次賢 | accepted |
| other | p_XdtDFjMTu3YEdr574aNAWC | 王慶賢 | accepted |
| other | p_hAFDA2mr5LdafaVzTv7DgL | 王立賢 | accepted |
| other | p_oPXfGu41nRvAjDhHN9KMCe | 王某賢 | accepted |
| other | p_swGoifyYMCGzEttLSRtgNF | 王可賢 | accepted |
| other | p_xspHGTMTrdySUKmYASS629 | 王用賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王次賢（CBDB 292749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292749&o=json)
- [中国历代人物传记资料库：王崔賢（CBDB 292752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292752&o=json)
- [中国历代人物传记资料库：王宏（CBDB 292738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292738&o=json)
- [中国历代人物传记资料库：王佶（CBDB 292756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292756&o=json)
- [中国历代人物传记资料库：王介賢（CBDB 292745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292745&o=json)
- [中国历代人物传记资料库：王可賢（CBDB 292754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292754&o=json)
- [中国历代人物传记资料库：王立賢（CBDB 292750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292750&o=json)
- [中国历代人物传记资料库：王某賢（CBDB 292753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292753&o=json)
- [中国历代人物传记资料库：王溥（CBDB 292739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292739&o=json)
- [中国历代人物传记资料库：王慶賢（CBDB 292746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292746&o=json)
- [中国历代人物传记资料库：王三賢（CBDB 292747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292747&o=json)
- [中国历代人物传记资料库：王伸（CBDB 292755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292755&o=json)
- [中国历代人物传记资料库：王惟賢（CBDB 202709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202709&o=json)
- [中国历代人物传记资料库：王希賢（CBDB 292744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292744&o=json)
- [中国历代人物传记资料库：王錫（CBDB 292741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292741&o=json)
- [中国历代人物传记资料库：王用賢（CBDB 292748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292748&o=json)
- [中国历代人物传记资料库：王仔（CBDB 292757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292757&o=json)
