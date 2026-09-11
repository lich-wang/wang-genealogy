---
schema: wang-person/v1
id: p_vM6985QJehceoGJD1bbJKF
status: active
merged_into: null
display_name: 王澄
revision: 15
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KPNHP29fPiu93Xi3nW7QUT
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_puumpcjRCAGTADHdjyP54m
          claim_id: c_KPNHP29fPiu93Xi3nW7QUT
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
          stance: supports
          locator: CBDB:100938
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100938）
          source: &a1
            id: s_L25tMjRPyRu4qPsx4K9Mwg
            source_type: api_record
            title: 中国历代人物传记资料库：王澄（CBDB 100938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100938&o=json
            external_identifier: CBDB:100938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BYuLCp3PZZn46NLUweGYt4
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1269年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qK2bzzY5CpTL7CWvGDEwGG
          claim_id: c_BYuLCp3PZZn46NLUweGYt4
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
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
        id: c_Hr4W8pEL6jo2jDNMxpzHJi
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1341年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GqCRcsD5TKGCzzDKXfkx9Z
          claim_id: c_Hr4W8pEL6jo2jDNMxpzHJi
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
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
        id: c_PvWBwFXMMehm8fyH661SjP
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jHkcLEywomB81ieqQD6Lb6
          claim_id: c_PvWBwFXMMehm8fyH661SjP
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
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
        id: c_PBQ6Z6ofsh1iPpY8Gy_nM5
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tSpXqwBE33pVWfFPYz5gPg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1T1lW6tgr92n7HZCS5Cvae
          claim_id: c_PBQ6Z6ofsh1iPpY8Gy_nM5
          source_id: s_y7FNEsGonfjXi7PPEnWuXe
          stance: supports
          locator: 元人傳記資料索引，870：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_y7FNEsGonfjXi7PPEnWuXe
            source_type: api_record
            title: 中国历代人物传记资料库：王士麟（CBDB 101037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101037&o=json
            external_identifier: CBDB:101037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.658Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tSpXqwBE33pVWfFPYz5gPg
        status: active
        display_name: 王士麟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_JMLvR74ocA20jQ6DbKnsw1
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2b14Pj9cMfbGVVm23QMpPW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lCHfJuDjEHq4wy4aTqvuu5
          claim_id: c_JMLvR74ocA20jQ6DbKnsw1
          source_id: s_zThzCvSwgPynFsUpZnkaoP
          stance: supports
          locator: 宋濂全集，1606：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zThzCvSwgPynFsUpZnkaoP
            source_type: api_record
            title: 中国历代人物传记资料库：王應（CBDB 134166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134166&o=json
            external_identifier: CBDB:134166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.306Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2b14Pj9cMfbGVVm23QMpPW
        status: active
        display_name: 王應
        merged_into_person_id: null
    - claim:
        id: c_yFOiZA1GHQaFJ6HR4JvXG2
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2M3Bp18QYjru654oK8qp9J
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SIrVaehwA8dj2UOd_eC61L
          claim_id: c_yFOiZA1GHQaFJ6HR4JvXG2
          source_id: s_K7a1s1KSf4be6uY4QxijWU
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_K7a1s1KSf4be6uY4QxijWU
            source_type: api_record
            title: 中国历代人物传记资料库：王瀹（CBDB 134187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134187&o=json
            external_identifier: CBDB:134187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.314Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2M3Bp18QYjru654oK8qp9J
        status: active
        display_name: 王瀹
        merged_into_person_id: null
    - claim:
        id: c_M1DDG8IpG1P4f0nSyOluJI
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_A41SYFNqMRpiFQWr968GE9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BCSx6vU66qaq9WiD_oyb39
          claim_id: c_M1DDG8IpG1P4f0nSyOluJI
          source_id: s_CMwGWyKHgyvt9D7oaqeNwz
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CMwGWyKHgyvt9D7oaqeNwz
            source_type: api_record
            title: 中国历代人物传记资料库：王淇（CBDB 134181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134181&o=json
            external_identifier: CBDB:134181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A41SYFNqMRpiFQWr968GE9
        status: active
        display_name: 王淇
        merged_into_person_id: null
    - claim:
        id: c_tizg2GmjB9_oNMu2qWYdmS
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_D9eJdq8ySQayL4dxPcs9FD
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gocb80w6TboHJcr9dlM0cy
          claim_id: c_tizg2GmjB9_oNMu2qWYdmS
          source_id: s_eUQZoPWBy2LRB2T4DFtHA7
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eUQZoPWBy2LRB2T4DFtHA7
            source_type: api_record
            title: 中国历代人物传记资料库：王沇（CBDB 134190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134190&o=json
            external_identifier: CBDB:134190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.316Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_D9eJdq8ySQayL4dxPcs9FD
        status: active
        display_name: 王沇
        merged_into_person_id: null
    - claim:
        id: c_LulSddOgyc98TD_4k1Fi7g
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_f3Kpde459iSuKNBG46WSjP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UA-uWwMMTuT5NpVTwtMzWV
          claim_id: c_LulSddOgyc98TD_4k1Fi7g
          source_id: s_Z6jJVVLFzByBtRiuWnDt8D
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z6jJVVLFzByBtRiuWnDt8D
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 134188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134188&o=json
            external_identifier: CBDB:134188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_f3Kpde459iSuKNBG46WSjP
        status: active
        display_name: 王溥
        merged_into_person_id: null
    - claim:
        id: c_VkjZVXAlCkqTFSqwvsPuKv
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FCSQdth7sQc3XHSLXg595T
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RbYpz6F4sE7XZdECEAGB4p
          claim_id: c_VkjZVXAlCkqTFSqwvsPuKv
          source_id: s_v8x9WjbthYqCdP6RDL9TXS
          stance: supports
          locator: 宋濂全集，1606：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v8x9WjbthYqCdP6RDL9TXS
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 134173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134173&o=json
            external_identifier: CBDB:134173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FCSQdth7sQc3XHSLXg595T
        status: active
        display_name: 王恩
        merged_into_person_id: null
    - claim:
        id: c_-j5ZVjFfjtjfXxwDgTSAv3
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hUNqjruZ372JDRxBbR4n3D
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AUWrx_yzzadRRHaLzArpqj
          claim_id: c_-j5ZVjFfjtjfXxwDgTSAv3
          source_id: s_X4vjiaAjxqJW9z1MAivxEX
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_X4vjiaAjxqJW9z1MAivxEX
            source_type: api_record
            title: 中国历代人物传记资料库：王涯（CBDB 134192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134192&o=json
            external_identifier: CBDB:134192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.319Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hUNqjruZ372JDRxBbR4n3D
        status: active
        display_name: 王涯
        merged_into_person_id: null
    - claim:
        id: c_AQyysKJNy3r7vg29Mg9SiK
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ibLtNY57TKY2kousyXGR55
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sHcUxMe1Fq8Z_W1HeKazoA
          claim_id: c_AQyysKJNy3r7vg29Mg9SiK
          source_id: s_FACr6CgMXX6SVsV4jjiZ8h
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FACr6CgMXX6SVsV4jjiZ8h
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 134176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134176&o=json
            external_identifier: CBDB:134176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ibLtNY57TKY2kousyXGR55
        status: active
        display_name: 王澤
        merged_into_person_id: null
    - claim:
        id: c_JzEIhuGMpWuDgu4pjZBD7k
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MEo2EuAoRqj8z9NEXK68tk
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B30mM_A8wC99FEEERAcJOo
          claim_id: c_JzEIhuGMpWuDgu4pjZBD7k
          source_id: s_zERaAAnS1hfxRe8iXQfmSY
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zERaAAnS1hfxRe8iXQfmSY
            source_type: api_record
            title: 中国历代人物传记资料库：王濠（CBDB 134194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134194&o=json
            external_identifier: CBDB:134194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MEo2EuAoRqj8z9NEXK68tk
        status: active
        display_name: 王濠
        merged_into_person_id: null
    - claim:
        id: c_5PHiOLTzzKgpTlnHv8qLFx
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nB8K3pn9j5dJy1VoGDE9sS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0KnumtBoKauJnMpuYDF64w
          claim_id: c_5PHiOLTzzKgpTlnHv8qLFx
          source_id: s_TxCFU6423iaWoN3DA4oNCT
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TxCFU6423iaWoN3DA4oNCT
            source_type: api_record
            title: 中国历代人物传记资料库：王潛（CBDB 134186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134186&o=json
            external_identifier: CBDB:134186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.314Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nB8K3pn9j5dJy1VoGDE9sS
        status: active
        display_name: 王潛
        merged_into_person_id: null
    - claim:
        id: c_7WcfKtNjr4gcVZKbKVCceE
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_P97nvyR1xhyFMweJFfn2sM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PsOHOnMqZwcbsbMhCyufMQ
          claim_id: c_7WcfKtNjr4gcVZKbKVCceE
          source_id: s_28QmCdaWPpWgN4jQ2KU2sF
          stance: supports
          locator: 宋濂全集，1606：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_28QmCdaWPpWgN4jQ2KU2sF
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 134171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134171&o=json
            external_identifier: CBDB:134171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_P97nvyR1xhyFMweJFfn2sM
        status: active
        display_name: 王慶
        merged_into_person_id: null
    - claim:
        id: c_6fL-UoHKCSDJX5qtAOC1jb
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PJnAmKKKTDH36Qb3sE8tHM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rS63wxMI6P0FHteBKqCNY_
          claim_id: c_6fL-UoHKCSDJX5qtAOC1jb
          source_id: s_yT1MonPFDuSGUMBZBrrrjb
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yT1MonPFDuSGUMBZBrrrjb
            source_type: api_record
            title: 中国历代人物传记资料库：王淦（CBDB 134191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134191&o=json
            external_identifier: CBDB:134191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.317Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PJnAmKKKTDH36Qb3sE8tHM
        status: active
        display_name: 王淦
        merged_into_person_id: null
    - claim:
        id: c_5UyNgyFmhDIPkOfYlPmMbz
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pLWyb7aYJGN29nL8akgz85
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h4PU6J2r2ZKPvv_ORSJ5Bk
          claim_id: c_5UyNgyFmhDIPkOfYlPmMbz
          source_id: s_b17FdwyjSvAxkGPvBuyap3
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b17FdwyjSvAxkGPvBuyap3
            source_type: api_record
            title: 中国历代人物传记资料库：王溫（CBDB 134180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134180&o=json
            external_identifier: CBDB:134180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pLWyb7aYJGN29nL8akgz85
        status: active
        display_name: 王溫
        merged_into_person_id: null
    - claim:
        id: c_ul2Ul3BIkQ31qKTE16MwEX
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qgLg9qsrb2hzM8tzo8Tq75
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8CnS8YmuTnidetBsIdvm8_
          claim_id: c_ul2Ul3BIkQ31qKTE16MwEX
          source_id: s_7NwGxsySQsceiF1gMaXvJn
          stance: supports
          locator: 宋濂全集，1606：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7NwGxsySQsceiF1gMaXvJn
            source_type: api_record
            title: 中国历代人物传记资料库：王念（CBDB 134167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134167&o=json
            external_identifier: CBDB:134167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.307Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qgLg9qsrb2hzM8tzo8Tq75
        status: active
        display_name: 王念
        merged_into_person_id: null
    - claim:
        id: c_lS8Cy3l1rAL1co4cdVW4pt
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Rd1HVTJaDR5nTuR82vpbGT
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eRjYMejI9Pvp5kMvWg0Vrg
          claim_id: c_lS8Cy3l1rAL1co4cdVW4pt
          source_id: s_G2KnHdoc6MsB9E3fcdCuEf
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_G2KnHdoc6MsB9E3fcdCuEf
            source_type: api_record
            title: 中国历代人物传记资料库：王涓（CBDB 134195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134195&o=json
            external_identifier: CBDB:134195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Rd1HVTJaDR5nTuR82vpbGT
        status: active
        display_name: 王涓
        merged_into_person_id: null
    - claim:
        id: c_8ZjqZjyEJFxNk2cvH-UNIk
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Rv6X6Y1QgrBdtTo99ejttG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dJQxHwGVecVbtBum5k_Rf1
          claim_id: c_8ZjqZjyEJFxNk2cvH-UNIk
          source_id: s_3Zou8zx692wpECSoDx1Kzk
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3Zou8zx692wpECSoDx1Kzk
            source_type: api_record
            title: 中国历代人物传记资料库：王江（CBDB 134179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134179&o=json
            external_identifier: CBDB:134179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Rv6X6Y1QgrBdtTo99ejttG
        status: active
        display_name: 王江
        merged_into_person_id: null
    - claim:
        id: c_d4RjXxs7Mi6QCWaJfqCwTy
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_utBhWPt4u7TMc4j2NqE3E1
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oPWKKY0J9pZ-dA_af_XQ5u
          claim_id: c_d4RjXxs7Mi6QCWaJfqCwTy
          source_id: s_fMdX88LteANPomtmJoU8Fa
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fMdX88LteANPomtmJoU8Fa
            source_type: api_record
            title: 中国历代人物传记资料库：王瀾（CBDB 134185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134185&o=json
            external_identifier: CBDB:134185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_utBhWPt4u7TMc4j2NqE3E1
        status: active
        display_name: 王瀾
        merged_into_person_id: null
    - claim:
        id: c_D190ds1rg2LqCOYckrvy-c
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xvLLpFaV8r5LeaoP4HFB7X
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uWcuOUZAYIcz85ZpEWHmaj
          claim_id: c_D190ds1rg2LqCOYckrvy-c
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
          stance: supports
          locator: 宋濂全集，1606：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xvLLpFaV8r5LeaoP4HFB7X
        status: active
        display_name: 王憲
        merged_into_person_id: null
    - claim:
        id: c_gzY3NKkuZNWz35RIqw2KNG
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zSbAX6pTq8syEKaPFcTUoJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-k81DRjylb94DOJSlqCg0S
          claim_id: c_gzY3NKkuZNWz35RIqw2KNG
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
          stance: supports
          locator: 宋濂全集，1606：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zSbAX6pTq8syEKaPFcTUoJ
        status: active
        display_name: 王㦛
        merged_into_person_id: null
    - claim:
        id: c_ZaI6Y0jZhtPP0haptEdTtb
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vGojsyaRpfn77AVXZL4ZEq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OEXBzx6ZsuB7Bomz6olIjK
          claim_id: c_ZaI6Y0jZhtPP0haptEdTtb
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
          stance: supports
          locator: 宋濂全集，1606：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vGojsyaRpfn77AVXZL4ZEq
        status: active
        display_name: 王懃
        merged_into_person_id: null
    - claim:
        id: c_-38CuJBI3Lh0d06Kwwsz0z
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LjhwxJ49z2NNTRWV53naxL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EjkOfIgadkBsiT6zRCCkHP
          claim_id: c_-38CuJBI3Lh0d06Kwwsz0z
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
          stance: supports
          locator: 宋濂全集，1606：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LjhwxJ49z2NNTRWV53naxL
        status: active
        display_name: 王忩
        merged_into_person_id: null
    - claim:
        id: c_wBwtSd5vQkjfNxZmPy5Wer
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_w98fNCKfsDVLeqhH6CzWwH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KNNEdxdtrfpTIQqglbsVBW
          claim_id: c_wBwtSd5vQkjfNxZmPy5Wer
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
          stance: supports
          locator: 宋濂全集，1606：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_w98fNCKfsDVLeqhH6CzWwH
        status: active
        display_name: 王涇
        merged_into_person_id: null
    - claim:
        id: c_FgX9aHEekksrKTCz5qf5Cy
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_w1e5yHXVcLxb45aWhqxjRz
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8BYNMGA2UVM2NsBRXwtZQf
          claim_id: c_FgX9aHEekksrKTCz5qf5Cy
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
          stance: supports
          locator: 宋濂全集，1606：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_w1e5yHXVcLxb45aWhqxjRz
        status: active
        display_name: 王浙
        merged_into_person_id: null
    - claim:
        id: c_APDCuGrGK9Oa4fP_Gp2h_0
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Pc7RZBwtu8oeAfjiE3RvYK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Si_UAxIEObOBkJ_Ql6u6hI
          claim_id: c_APDCuGrGK9Oa4fP_Gp2h_0
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
          stance: supports
          locator: 宋濂全集，1606：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Pc7RZBwtu8oeAfjiE3RvYK
        status: active
        display_name: 王湝
        merged_into_person_id: null
    - claim:
        id: c_ekipTlyMDq4CU2abJ4LsnR
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_n1CMWoEQDNZ6FnWTcUGQAH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cW3iFpG1ZKu4XpSMke74XH
          claim_id: c_ekipTlyMDq4CU2abJ4LsnR
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
          stance: supports
          locator: 宋濂全集，1606：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_n1CMWoEQDNZ6FnWTcUGQAH
        status: active
        display_name: 王瀏
        merged_into_person_id: null
    - claim:
        id: c__Mxq03T6jlGghEM8ZVLM5i
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WtvQS3ESjefyzCFCXsFmzA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xnr5cFVn8G9QCh9uJEPh9G
          claim_id: c__Mxq03T6jlGghEM8ZVLM5i
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
          stance: supports
          locator: 宋濂全集，1606：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WtvQS3ESjefyzCFCXsFmzA
        status: active
        display_name: 王溶
        merged_into_person_id: null
    - claim:
        id: c_KTq6-Q4BqEYud5yMXbsZHl
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yT2TJcuUuLh3LY5ombvrrB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dCladw75nzy88z7WPP4892
          claim_id: c_KTq6-Q4BqEYud5yMXbsZHl
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
          stance: supports
          locator: 宋濂全集，1606：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yT2TJcuUuLh3LY5ombvrrB
        status: active
        display_name: 王潚
        merged_into_person_id: null
    - claim:
        id: c__YmIgHLbZEGzK5vjyOjRoz
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_agBDpkjwQG73j8yBTm3pwR
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9LDE76TWH3OEOkSqFnP27k
          claim_id: c__YmIgHLbZEGzK5vjyOjRoz
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
          stance: supports
          locator: 宋濂全集，1606：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_agBDpkjwQG73j8yBTm3pwR
        status: active
        display_name: 王泓
        merged_into_person_id: null
  other: []
---

# 王澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澄 | accepted |
| birth.date | 1269年 | accepted |
| death.date | 1341年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tSpXqwBE33pVWfFPYz5gPg | 王士麟 | accepted |
| descendants | p_2b14Pj9cMfbGVVm23QMpPW | 王應 | accepted |
| descendants | p_2M3Bp18QYjru654oK8qp9J | 王瀹 | accepted |
| descendants | p_A41SYFNqMRpiFQWr968GE9 | 王淇 | accepted |
| descendants | p_D9eJdq8ySQayL4dxPcs9FD | 王沇 | accepted |
| descendants | p_f3Kpde459iSuKNBG46WSjP | 王溥 | accepted |
| descendants | p_FCSQdth7sQc3XHSLXg595T | 王恩 | accepted |
| descendants | p_hUNqjruZ372JDRxBbR4n3D | 王涯 | accepted |
| descendants | p_ibLtNY57TKY2kousyXGR55 | 王澤 | accepted |
| descendants | p_MEo2EuAoRqj8z9NEXK68tk | 王濠 | accepted |
| descendants | p_nB8K3pn9j5dJy1VoGDE9sS | 王潛 | accepted |
| descendants | p_P97nvyR1xhyFMweJFfn2sM | 王慶 | accepted |
| descendants | p_PJnAmKKKTDH36Qb3sE8tHM | 王淦 | accepted |
| descendants | p_pLWyb7aYJGN29nL8akgz85 | 王溫 | accepted |
| descendants | p_qgLg9qsrb2hzM8tzo8Tq75 | 王念 | accepted |
| descendants | p_Rd1HVTJaDR5nTuR82vpbGT | 王涓 | accepted |
| descendants | p_Rv6X6Y1QgrBdtTo99ejttG | 王江 | accepted |
| descendants | p_utBhWPt4u7TMc4j2NqE3E1 | 王瀾 | accepted |
| descendants | p_xvLLpFaV8r5LeaoP4HFB7X | 王憲 | accepted |
| descendants | p_zSbAX6pTq8syEKaPFcTUoJ | 王㦛 | accepted |
| descendants | p_vGojsyaRpfn77AVXZL4ZEq | 王懃 | accepted |
| descendants | p_LjhwxJ49z2NNTRWV53naxL | 王忩 | accepted |
| descendants | p_w98fNCKfsDVLeqhH6CzWwH | 王涇 | accepted |
| descendants | p_w1e5yHXVcLxb45aWhqxjRz | 王浙 | accepted |
| descendants | p_Pc7RZBwtu8oeAfjiE3RvYK | 王湝 | accepted |
| descendants | p_n1CMWoEQDNZ6FnWTcUGQAH | 王瀏 | accepted |
| descendants | p_WtvQS3ESjefyzCFCXsFmzA | 王溶 | accepted |
| descendants | p_yT2TJcuUuLh3LY5ombvrrB | 王潚 | accepted |
| descendants | p_agBDpkjwQG73j8yBTm3pwR | 王泓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澄（CBDB 100938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100938&o=json)
- [中国历代人物传记资料库：王恩（CBDB 134173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134173&o=json)
- [中国历代人物传记资料库：王淦（CBDB 134191）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134191&o=json)
- [中国历代人物传记资料库：王濠（CBDB 134194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134194&o=json)
- [中国历代人物传记资料库：王江（CBDB 134179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134179&o=json)
- [中国历代人物传记资料库：王涓（CBDB 134195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134195&o=json)
- [中国历代人物传记资料库：王瀾（CBDB 134185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134185&o=json)
- [中国历代人物传记资料库：王念（CBDB 134167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134167&o=json)
- [中国历代人物传记资料库：王溥（CBDB 134188）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134188&o=json)
- [中国历代人物传记资料库：王淇（CBDB 134181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134181&o=json)
- [中国历代人物传记资料库：王潛（CBDB 134186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134186&o=json)
- [中国历代人物传记资料库：王慶（CBDB 134171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134171&o=json)
- [中国历代人物传记资料库：王士麟（CBDB 101037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101037&o=json)
- [中国历代人物传记资料库：王溫（CBDB 134180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134180&o=json)
- [中国历代人物传记资料库：王涯（CBDB 134192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134192&o=json)
- [中国历代人物传记资料库：王沇（CBDB 134190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134190&o=json)
- [中国历代人物传记资料库：王應（CBDB 134166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134166&o=json)
- [中国历代人物传记资料库：王瀹（CBDB 134187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134187&o=json)
- [中国历代人物传记资料库：王澤（CBDB 134176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134176&o=json)
