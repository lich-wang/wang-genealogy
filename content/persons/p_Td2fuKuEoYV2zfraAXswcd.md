---
schema: wang-person/v1
id: p_Td2fuKuEoYV2zfraAXswcd
status: active
merged_into: null
display_name: 王汝楫
revision: 15
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aLM3U24bGo6k7kvAgFNLJf
        subject_person_id: p_Td2fuKuEoYV2zfraAXswcd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝楫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gv8adPw19sA5uWNJbHSx6f
          claim_id: c_aLM3U24bGo6k7kvAgFNLJf
          source_id: s_ojVSoT42EcjGUkSQpDz5BQ
          stance: supports
          locator: CBDB:202580
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202580）
          source: &a1
            id: s_ojVSoT42EcjGUkSQpDz5BQ
            source_type: api_record
            title: 中国历代人物传记资料库：王汝楫（CBDB 202580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202580&o=json
            external_identifier: CBDB:202580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.745Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_si7dHrK1omY11TBRQHwR1n
        subject_person_id: p_Td2fuKuEoYV2zfraAXswcd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1492年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4NSgRP21ZaE2QYGP44E1AP
          claim_id: c_si7dHrK1omY11TBRQHwR1n
          source_id: s_ojVSoT42EcjGUkSQpDz5BQ
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
        id: c_Ym8pJdAEBZodhMBcrt7M2R
        subject_person_id: p_Td2fuKuEoYV2zfraAXswcd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝楫（生于1492年），明人物。明清進士進士，籍贯德州，入仕進士。（中国历代人物传记资料库 CBDB 202580）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zJnpCFF_UN1reTyslY5aD9
          claim_id: c_Ym8pJdAEBZodhMBcrt7M2R
          source_id: s_ojVSoT42EcjGUkSQpDz5BQ
          stance: supports
          locator: CBDB:202580
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_r9rOMRoNuOV_KkcBkWx7VN
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Td2fuKuEoYV2zfraAXswcd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SFpW8uv3T7LghPBbqR2vC7
          claim_id: c_r9rOMRoNuOV_KkcBkWx7VN
          source_id: s_M8X3wh89XBfdrbhLFWVZiq
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百八十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_M8X3wh89XBfdrbhLFWVZiq
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 290256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290256&o=json
            external_identifier: CBDB:290256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.326Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C5NJgthLEeWbSTDMxHE6iV
        status: active
        display_name: 王寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_MeFUi0iqIzYWJuz0Hgfxpk
        subject_person_id: p_LxHzuFLodDjYAodhqdeJE6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Td2fuKuEoYV2zfraAXswcd
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VIAA2qXzGW1h-LBmLDfmJI
          claim_id: c_MeFUi0iqIzYWJuz0Hgfxpk
          source_id: s_8cfnxRb3a7VhHGaSp2qEhP
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百八十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8cfnxRb3a7VhHGaSp2qEhP
            source_type: api_record
            title: 中国历代人物传记资料库：王中（CBDB 290255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290255&o=json
            external_identifier: CBDB:290255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.325Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LxHzuFLodDjYAodhqdeJE6
        status: active
        display_name: 王中
        merged_into_person_id: null
    - claim:
        id: c_B_dRh_vdAcrknuu2dM6dXT
        subject_person_id: p_ga1Zg1T9kuUr93iK7UoAH2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Td2fuKuEoYV2zfraAXswcd
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rxnZ2nvIfS7uDsfqmbJoM8
          claim_id: c_B_dRh_vdAcrknuu2dM6dXT
          source_id: s_wfuxpEU2NypZWYhr6zaNiq
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百八十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wfuxpEU2NypZWYhr6zaNiq
            source_type: api_record
            title: 中国历代人物传记资料库：王揀（CBDB 290254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290254&o=json
            external_identifier: CBDB:290254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_ga1Zg1T9kuUr93iK7UoAH2
        status: active
        display_name: 王揀
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_dkJT7bgp2RMMH43-yrt-HB
        subject_person_id: p_1ueQH48Ni7qioRn4MKx7LM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Td2fuKuEoYV2zfraAXswcd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l-ZQQxJQfJjxvirBj2QBvl
          claim_id: c_dkJT7bgp2RMMH43-yrt-HB
          source_id: s_t6Bu-6O52ghZS1HMTiQmte
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202580 王汝楫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_t6Bu-6O52ghZS1HMTiQmte
            source_type: api_record
            title: 中国历代人物传记资料库：王汝礪（CBDB 290264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290264&o=json
            external_identifier: CBDB:290264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1ueQH48Ni7qioRn4MKx7LM
        status: active
        display_name: 王汝礪
        merged_into_person_id: null
    - claim:
        id: c_frZYqXh1kXkKOvtSfC3W4N
        subject_person_id: p_HKDr4WqMxqe47AmDhxrfoZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Td2fuKuEoYV2zfraAXswcd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vUXM4RK7UMMnEs4KWTjc0G
          claim_id: c_frZYqXh1kXkKOvtSfC3W4N
          source_id: s_Aq2lWW-28AWyUfOyBW6aur
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202580 王汝楫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Aq2lWW-28AWyUfOyBW6aur
            source_type: api_record
            title: 中国历代人物传记资料库：王汝揆（CBDB 290269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290269&o=json
            external_identifier: CBDB:290269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HKDr4WqMxqe47AmDhxrfoZ
        status: active
        display_name: 王汝揆
        merged_into_person_id: null
    - claim:
        id: c_ODpQv_4VfPDsB0qMp24eAw
        subject_person_id: p_RkGCEEHr53n9knPvtwYcMx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Td2fuKuEoYV2zfraAXswcd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OSmbYLnmAeaI-rLrO4APxs
          claim_id: c_ODpQv_4VfPDsB0qMp24eAw
          source_id: s_8R6ygHS1BlPy-Azzh5iEFw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202580 王汝楫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8R6ygHS1BlPy-Azzh5iEFw
            source_type: api_record
            title: 中国历代人物传记资料库：王汝舟（CBDB 290267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290267&o=json
            external_identifier: CBDB:290267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RkGCEEHr53n9knPvtwYcMx
        status: active
        display_name: 王汝舟
        merged_into_person_id: null
    - claim:
        id: c_H8rbpB4cS2WlTsiMr1K8dT
        subject_person_id: p_SbwdTjQJ4U2AyWyjDGfSJT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Td2fuKuEoYV2zfraAXswcd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bGjHoOdiMNgvLfRwVk4TVU
          claim_id: c_H8rbpB4cS2WlTsiMr1K8dT
          source_id: s_-R1Vm2m-2WUOLx7f4I6AgT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202580 王汝楫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-R1Vm2m-2WUOLx7f4I6AgT
            source_type: api_record
            title: 中国历代人物传记资料库：王汝欽（CBDB 290265）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290265&o=json
            external_identifier: CBDB:290265
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SbwdTjQJ4U2AyWyjDGfSJT
        status: active
        display_name: 王汝欽
        merged_into_person_id: null
    - claim:
        id: c_4dM9K5cMs1gBYfDmzzuJG0
        subject_person_id: p_Td2fuKuEoYV2zfraAXswcd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aH4temuN1GwxFqxF8DG3DP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UBSQ3N1c6htmGAjF1lrRjW
          claim_id: c_4dM9K5cMs1gBYfDmzzuJG0
          source_id: s_UtQ_y1eMO_xir8e8TBNQYj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202580 王汝楫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UtQ_y1eMO_xir8e8TBNQYj
            source_type: api_record
            title: 中国历代人物传记资料库：王汝翼（CBDB 290260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290260&o=json
            external_identifier: CBDB:290260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aH4temuN1GwxFqxF8DG3DP
        status: active
        display_name: 王汝翼
        merged_into_person_id: null
    - claim:
        id: c_OceCEDtQv3VEeOUnxbKXB0
        subject_person_id: p_Td2fuKuEoYV2zfraAXswcd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_b3m7hRAK8FG8XFw2186M2U
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AJJpL8_3hwQWpfQoJGqctB
          claim_id: c_OceCEDtQv3VEeOUnxbKXB0
          source_id: s_Ncjda2XpjKjqs2-3TRlhH4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202580 王汝楫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ncjda2XpjKjqs2-3TRlhH4
            source_type: api_record
            title: 中国历代人物传记资料库：王汝咨（CBDB 290268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290268&o=json
            external_identifier: CBDB:290268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_b3m7hRAK8FG8XFw2186M2U
        status: active
        display_name: 王汝咨
        merged_into_person_id: null
    - claim:
        id: c_djG97ivgjAZlH-iEJwEOH5
        subject_person_id: p_Td2fuKuEoYV2zfraAXswcd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bSgTQ1SdX3ywE4pyrdpy6w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s9zLcjFPhaGpyDRfUJd_0P
          claim_id: c_djG97ivgjAZlH-iEJwEOH5
          source_id: s_O2OJnQ9SdLzU5qV-N46OB0
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202580 王汝楫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_O2OJnQ9SdLzU5qV-N46OB0
            source_type: api_record
            title: 中国历代人物传记资料库：王汝為（CBDB 290261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290261&o=json
            external_identifier: CBDB:290261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bSgTQ1SdX3ywE4pyrdpy6w
        status: active
        display_name: 王汝為
        merged_into_person_id: null
    - claim:
        id: c_HOeh1T8If3lsG3L9cPDjbv
        subject_person_id: p_Td2fuKuEoYV2zfraAXswcd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_giUkdBkH6m6S6QkQAtjAM9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CNa_9xDWjXBez_-0OR8jUW
          claim_id: c_HOeh1T8If3lsG3L9cPDjbv
          source_id: s_rcCNl-aUYvxDJi8hiaFfUl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202580 王汝楫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rcCNl-aUYvxDJi8hiaFfUl
            source_type: api_record
            title: 中国历代人物传记资料库：王汝甫（CBDB 290266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290266&o=json
            external_identifier: CBDB:290266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_giUkdBkH6m6S6QkQAtjAM9
        status: active
        display_name: 王汝甫
        merged_into_person_id: null
    - claim:
        id: c_mAz77y90m02L_Pe8SbAElf
        subject_person_id: p_Td2fuKuEoYV2zfraAXswcd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pU9NzrAvexDBjksMgBLf2x
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bv4nFEUmWyyBcR5o0I1T3-
          claim_id: c_mAz77y90m02L_Pe8SbAElf
          source_id: s_C-bg82DgptsyG1s13du3t0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202580 王汝楫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_C-bg82DgptsyG1s13du3t0
            source_type: api_record
            title: 中国历代人物传记资料库：王汝相（CBDB 290271）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290271&o=json
            external_identifier: CBDB:290271
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pU9NzrAvexDBjksMgBLf2x
        status: active
        display_name: 王汝相
        merged_into_person_id: null
    - claim:
        id: c_d9EO7DLY9C2Zw6uNPMG-3Q
        subject_person_id: p_Td2fuKuEoYV2zfraAXswcd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q6hJ3G7h1X6AKMxTGrzWNz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q4OZsqZW72TQLTznqdxYV2
          claim_id: c_d9EO7DLY9C2Zw6uNPMG-3Q
          source_id: s_x5c8OdogL04PkixstV9mUv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202580 王汝楫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x5c8OdogL04PkixstV9mUv
            source_type: api_record
            title: 中国历代人物传记资料库：王汝器（CBDB 290270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290270&o=json
            external_identifier: CBDB:290270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q6hJ3G7h1X6AKMxTGrzWNz
        status: active
        display_name: 王汝器
        merged_into_person_id: null
    - claim:
        id: c_MyMcOsV_HaJCv44rLtiXHS
        subject_person_id: p_Td2fuKuEoYV2zfraAXswcd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zstdLSCQipW4ZDdYUa7FBi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-tXgayD4hUrFRq4ar7ghje
          claim_id: c_MyMcOsV_HaJCv44rLtiXHS
          source_id: s_SywfDrJSArSubrJ5o5aosQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202580 王汝楫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SywfDrJSArSubrJ5o5aosQ
            source_type: api_record
            title: 中国历代人物传记资料库：王汝明（CBDB 290262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290262&o=json
            external_identifier: CBDB:290262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zstdLSCQipW4ZDdYUa7FBi
        status: active
        display_name: 王汝明
        merged_into_person_id: null
---

# 王汝楫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝楫 | accepted |
| birth.date | 1492年 | accepted |
| bio.summary | 王汝楫（生于1492年），明人物。明清進士進士，籍贯德州，入仕進士。（中国历代人物传记资料库 CBDB 202580） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_C5NJgthLEeWbSTDMxHE6iV | 王寧 | accepted |
| ancestors | p_LxHzuFLodDjYAodhqdeJE6 | 王中 | accepted |
| ancestors | p_ga1Zg1T9kuUr93iK7UoAH2 | 王揀 | accepted |
| other | p_1ueQH48Ni7qioRn4MKx7LM | 王汝礪 | accepted |
| other | p_HKDr4WqMxqe47AmDhxrfoZ | 王汝揆 | accepted |
| other | p_RkGCEEHr53n9knPvtwYcMx | 王汝舟 | accepted |
| other | p_SbwdTjQJ4U2AyWyjDGfSJT | 王汝欽 | accepted |
| other | p_aH4temuN1GwxFqxF8DG3DP | 王汝翼 | accepted |
| other | p_b3m7hRAK8FG8XFw2186M2U | 王汝咨 | accepted |
| other | p_bSgTQ1SdX3ywE4pyrdpy6w | 王汝為 | accepted |
| other | p_giUkdBkH6m6S6QkQAtjAM9 | 王汝甫 | accepted |
| other | p_pU9NzrAvexDBjksMgBLf2x | 王汝相 | accepted |
| other | p_q6hJ3G7h1X6AKMxTGrzWNz | 王汝器 | accepted |
| other | p_zstdLSCQipW4ZDdYUa7FBi | 王汝明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王揀（CBDB 290254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290254&o=json)
- [中国历代人物传记资料库：王寧（CBDB 290256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290256&o=json)
- [中国历代人物传记资料库：王汝甫（CBDB 290266）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290266&o=json)
- [中国历代人物传记资料库：王汝楫（CBDB 202580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202580&o=json)
- [中国历代人物传记资料库：王汝揆（CBDB 290269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290269&o=json)
- [中国历代人物传记资料库：王汝礪（CBDB 290264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290264&o=json)
- [中国历代人物传记资料库：王汝明（CBDB 290262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290262&o=json)
- [中国历代人物传记资料库：王汝器（CBDB 290270）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290270&o=json)
- [中国历代人物传记资料库：王汝欽（CBDB 290265）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290265&o=json)
- [中国历代人物传记资料库：王汝為（CBDB 290261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290261&o=json)
- [中国历代人物传记资料库：王汝相（CBDB 290271）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290271&o=json)
- [中国历代人物传记资料库：王汝翼（CBDB 290260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290260&o=json)
- [中国历代人物传记资料库：王汝舟（CBDB 290267）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290267&o=json)
- [中国历代人物传记资料库：王汝咨（CBDB 290268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290268&o=json)
- [中国历代人物传记资料库：王中（CBDB 290255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290255&o=json)
