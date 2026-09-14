---
schema: wang-person/v1
id: p_11RhKLzn2Mi6Moy5jEp4MD
status: active
merged_into: null
display_name: 王汝猷
revision: 14
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6wM3VhXYJHn58RX13PCJ7g
        subject_person_id: p_11RhKLzn2Mi6Moy5jEp4MD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝猷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y9yEFmJnZuR7KY1soJYcqo
          claim_id: c_6wM3VhXYJHn58RX13PCJ7g
          source_id: s_5ARCmWyZdEEd1UcgNfncxT
          stance: supports
          locator: CBDB:291880
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291880）
          source: &a1
            id: s_5ARCmWyZdEEd1UcgNfncxT
            source_type: api_record
            title: 中国历代人物传记资料库：王汝猷（CBDB 291880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291880&o=json
            external_identifier: CBDB:291880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x6mnjNHgpoyyeYK9L2zHGW
        subject_person_id: p_11RhKLzn2Mi6Moy5jEp4MD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝猷，明人物。嘉靖十一年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 291880）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g_uQfbf8Qo0URG7IJ9xaHu
          claim_id: c_x6mnjNHgpoyyeYK9L2zHGW
          source_id: s_5ARCmWyZdEEd1UcgNfncxT
          stance: supports
          locator: CBDB:291880
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_YILQ7RzAt-O1YkUkB9QI4F
        subject_person_id: p_11RhKLzn2Mi6Moy5jEp4MD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_32UHQh4Fdj4J7BssaAtSLY
          claim_id: c_YILQ7RzAt-O1YkUkB9QI4F
          source_id: s_5ARCmWyZdEEd1UcgNfncxT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oDCtFv3cf2CiUbXVcBy9FF
        status: active
        display_name: 王廷榦
        merged_into_person_id: null
    - claim:
        id: c_08EGhEfQgUWy9c9wKEVa50
        subject_person_id: p_11RhKLzn2Mi6Moy5jEp4MD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4J9YJu8rjeYqar7Hg2YMUA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7CXXYHdF_lsfRbWPAGwIz_
          claim_id: c_08EGhEfQgUWy9c9wKEVa50
          source_id: s_gTH8GgJ4cdU_JFSDG8bhHI
          stance: supports
          locator: CBDB：兄弟 王廷榦（126553）之父／母 王汝猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王梓 与 王廷榦 为同胞（CBDB 记「兄」），王廷榦 之父／母即 王梓 之父／母。
          source:
            id: s_gTH8GgJ4cdU_JFSDG8bhHI
            source_type: api_record
            title: 中国历代人物传记资料库：王梓（CBDB 291889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291889&o=json
            external_identifier: CBDB:291889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4J9YJu8rjeYqar7Hg2YMUA
        status: active
        display_name: 王梓
        merged_into_person_id: null
    - claim:
        id: c_4L_HesYbvW03zbnPBQPcgK
        subject_person_id: p_11RhKLzn2Mi6Moy5jEp4MD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8zPmSWpJPpy8b4A3Xqp6m5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fzAKBC6F_KFFfbK7qYFcI_
          claim_id: c_4L_HesYbvW03zbnPBQPcgK
          source_id: s_5HNn6ncQ1ehnVMRpPjJw5M
          stance: supports
          locator: CBDB：兄弟 王廷榦（126553）之父／母 王汝猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王楹 与 王廷榦 为同胞（CBDB 记「兄」），王廷榦 之父／母即 王楹 之父／母。
          source:
            id: s_5HNn6ncQ1ehnVMRpPjJw5M
            source_type: api_record
            title: 中国历代人物传记资料库：王楹（CBDB 291888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291888&o=json
            external_identifier: CBDB:291888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8zPmSWpJPpy8b4A3Xqp6m5
        status: active
        display_name: 王楹
        merged_into_person_id: null
    - claim:
        id: c_l800om-pQ07wJMx7LltL7C
        subject_person_id: p_11RhKLzn2Mi6Moy5jEp4MD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DeJBBTDJzAqfa9itKrS7Ug
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FIJCkGhif6eN2CmOhmVXrg
          claim_id: c_l800om-pQ07wJMx7LltL7C
          source_id: s_fE1Uj3iqhTtLoB1dXyvLZ5
          stance: supports
          locator: CBDB：兄弟 王廷榦（126553）之父／母 王汝猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王栗 与 王廷榦 为同胞（CBDB 记「兄」），王廷榦 之父／母即 王栗 之父／母。
          source:
            id: s_fE1Uj3iqhTtLoB1dXyvLZ5
            source_type: api_record
            title: 中国历代人物传记资料库：王栗（CBDB 291893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291893&o=json
            external_identifier: CBDB:291893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DeJBBTDJzAqfa9itKrS7Ug
        status: active
        display_name: 王栗
        merged_into_person_id: null
    - claim:
        id: c_Drdh1wcA8pAjVPfUoy2XXP
        subject_person_id: p_11RhKLzn2Mi6Moy5jEp4MD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WA5sko5dY4oC4aTSjVEDme
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dtUzrZmJ4wKVsoQ9HTPVBU
          claim_id: c_Drdh1wcA8pAjVPfUoy2XXP
          source_id: s_eXhN4F1Ldj9EdF8k2D4guT
          stance: supports
          locator: CBDB：兄弟 王廷榦（126553）之父／母 王汝猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷 与 王廷榦 为同胞（CBDB 记「兄」），王廷榦 之父／母即 王廷 之父／母。
          source:
            id: s_eXhN4F1Ldj9EdF8k2D4guT
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 291886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291886&o=json
            external_identifier: CBDB:291886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WA5sko5dY4oC4aTSjVEDme
        status: active
        display_name: 王廷
        merged_into_person_id: null
    - claim:
        id: c_3uF2-D7zfLx1cP25fphWXm
        subject_person_id: p_11RhKLzn2Mi6Moy5jEp4MD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zzmui67U7CyDsMeJFVXKz1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-NKCeFf9ytFgKVFleq8e43
          claim_id: c_3uF2-D7zfLx1cP25fphWXm
          source_id: s_ToRn8b6CoIbZCrOPDPb77c
          stance: supports
          locator: CBDB：兄弟 王廷榦（126553）之父／母 王汝猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王樞 与 王廷榦 为同胞（CBDB 记「弟」），王廷榦 之父／母即 王樞 之父／母。
          source:
            id: s_ToRn8b6CoIbZCrOPDPb77c
            source_type: api_record
            title: 中国历代人物传记资料库：王樞（CBDB 291883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291883&o=json
            external_identifier: CBDB:291883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zzmui67U7CyDsMeJFVXKz1
        status: active
        display_name: 王樞
        merged_into_person_id: null
    - claim:
        id: c_v4pWPiXQW6DXiVhMLOHa6M
        subject_person_id: p_11RhKLzn2Mi6Moy5jEp4MD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dgGGiho7Jod4eno8cPBKed
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2hR8kJK0jyrqbjd5jPUpNJ
          claim_id: c_v4pWPiXQW6DXiVhMLOHa6M
          source_id: s_pyNOpiBD8XsRLxpv35dlK0
          stance: supports
          locator: CBDB：兄弟 王廷榦（126553）之父／母 王汝猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王樟 与 王廷榦 为同胞（CBDB 记「兄」），王廷榦 之父／母即 王樟 之父／母。
          source:
            id: s_pyNOpiBD8XsRLxpv35dlK0
            source_type: api_record
            title: 中国历代人物传记资料库：王樟（CBDB 291891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291891&o=json
            external_identifier: CBDB:291891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dgGGiho7Jod4eno8cPBKed
        status: active
        display_name: 王樟
        merged_into_person_id: null
    - claim:
        id: c_VOxNBOhTadBOs31-2zfQ72
        subject_person_id: p_11RhKLzn2Mi6Moy5jEp4MD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f1XwTRMVAYJExkGTa5bF92
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rE6X3TaoDBj13O0NRFcKPe
          claim_id: c_VOxNBOhTadBOs31-2zfQ72
          source_id: s_juzNLf6eq7K9DTvDTYKOrq
          stance: supports
          locator: CBDB：兄弟 王廷榦（126553）之父／母 王汝猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王傑 与 王廷榦 为同胞（CBDB 记「兄」），王廷榦 之父／母即 王傑 之父／母。
          source:
            id: s_juzNLf6eq7K9DTvDTYKOrq
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 291887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291887&o=json
            external_identifier: CBDB:291887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_f1XwTRMVAYJExkGTa5bF92
        status: active
        display_name: 王傑
        merged_into_person_id: null
    - claim:
        id: c_2jhw-jT1Lo56HowN5LNd3q
        subject_person_id: p_11RhKLzn2Mi6Moy5jEp4MD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fWwneV8r1G2iVJWGgF8cT1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XN6Vj4tOLrsr51mhFiON3t
          claim_id: c_2jhw-jT1Lo56HowN5LNd3q
          source_id: s_j7LUjFm8EDMNxzHQ_DgHP5
          stance: supports
          locator: CBDB：兄弟 王廷榦（126553）之父／母 王汝猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王欄 与 王廷榦 为同胞（CBDB 记「兄」），王廷榦 之父／母即 王欄 之父／母。
          source:
            id: s_j7LUjFm8EDMNxzHQ_DgHP5
            source_type: api_record
            title: 中国历代人物传记资料库：王欄（CBDB 291897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291897&o=json
            external_identifier: CBDB:291897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fWwneV8r1G2iVJWGgF8cT1
        status: active
        display_name: 王欄
        merged_into_person_id: null
    - claim:
        id: c_kdWbz1inZqLqvjP_e5o7fl
        subject_person_id: p_11RhKLzn2Mi6Moy5jEp4MD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hBEcoRHLpZFMNN6ewK4SfC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UX_RFL1eOHLd98y1eK3uDK
          claim_id: c_kdWbz1inZqLqvjP_e5o7fl
          source_id: s_zYdGrUgpgcYRRFByFbPEmm
          stance: supports
          locator: CBDB：兄弟 王廷榦（126553）之父／母 王汝猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王棐 与 王廷榦 为同胞（CBDB 记「兄」），王廷榦 之父／母即 王棐 之父／母。
          source:
            id: s_zYdGrUgpgcYRRFByFbPEmm
            source_type: api_record
            title: 中国历代人物传记资料库：王棐（CBDB 291894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291894&o=json
            external_identifier: CBDB:291894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hBEcoRHLpZFMNN6ewK4SfC
        status: active
        display_name: 王棐
        merged_into_person_id: null
    - claim:
        id: c_lzz6xN0ThkZzGs-ZVlVoLx
        subject_person_id: p_11RhKLzn2Mi6Moy5jEp4MD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m3uc26Dpb16ny9EsAfFfb6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eozIVX3znhqdGpVVbmSs0H
          claim_id: c_lzz6xN0ThkZzGs-ZVlVoLx
          source_id: s_douja9rodMHb9uXjlf9Fid
          stance: supports
          locator: CBDB：兄弟 王廷榦（126553）之父／母 王汝猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王極 与 王廷榦 为同胞（CBDB 记「兄」），王廷榦 之父／母即 王極 之父／母。
          source:
            id: s_douja9rodMHb9uXjlf9Fid
            source_type: api_record
            title: 中国历代人物传记资料库：王極（CBDB 291892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291892&o=json
            external_identifier: CBDB:291892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_m3uc26Dpb16ny9EsAfFfb6
        status: active
        display_name: 王極
        merged_into_person_id: null
    - claim:
        id: c_vSLkyP_D9iQrfq56LEFhdR
        subject_person_id: p_11RhKLzn2Mi6Moy5jEp4MD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qmNvDF2sUe4JHGGJosA5ms
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bEOWTyjPbWv8JXoShdkg4K
          claim_id: c_vSLkyP_D9iQrfq56LEFhdR
          source_id: s_v1ebsaTejayfIiwvJq_S0P
          stance: supports
          locator: CBDB：兄弟 王廷榦（126553）之父／母 王汝猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王杭 与 王廷榦 为同胞（CBDB 记「兄」），王廷榦 之父／母即 王杭 之父／母。
          source:
            id: s_v1ebsaTejayfIiwvJq_S0P
            source_type: api_record
            title: 中国历代人物传记资料库：王杭（CBDB 291895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291895&o=json
            external_identifier: CBDB:291895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qmNvDF2sUe4JHGGJosA5ms
        status: active
        display_name: 王杭
        merged_into_person_id: null
    - claim:
        id: c_MStPOVkbKGSygAMfEZHvBm
        subject_person_id: p_11RhKLzn2Mi6Moy5jEp4MD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x3R1rAebwTq6W53VbbXqQw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3oslD9STaizd8NfXRuJtcY
          claim_id: c_MStPOVkbKGSygAMfEZHvBm
          source_id: s_R4kOnGpqOyLXsVg6Pr7ifC
          stance: supports
          locator: CBDB：兄弟 王廷榦（126553）之父／母 王汝猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王梧 与 王廷榦 为同胞（CBDB 记「兄」），王廷榦 之父／母即 王梧 之父／母。
          source:
            id: s_R4kOnGpqOyLXsVg6Pr7ifC
            source_type: api_record
            title: 中国历代人物传记资料库：王梧（CBDB 291890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291890&o=json
            external_identifier: CBDB:291890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_x3R1rAebwTq6W53VbbXqQw
        status: active
        display_name: 王梧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汝猷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝猷 | accepted |
| bio.summary | 王汝猷，明人物。嘉靖十一年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 291880） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_oDCtFv3cf2CiUbXVcBy9FF | 王廷榦 | accepted |
| children | p_4J9YJu8rjeYqar7Hg2YMUA | 王梓 | accepted |
| children | p_8zPmSWpJPpy8b4A3Xqp6m5 | 王楹 | accepted |
| children | p_DeJBBTDJzAqfa9itKrS7Ug | 王栗 | accepted |
| children | p_WA5sko5dY4oC4aTSjVEDme | 王廷 | accepted |
| children | p_Zzmui67U7CyDsMeJFVXKz1 | 王樞 | accepted |
| children | p_dgGGiho7Jod4eno8cPBKed | 王樟 | accepted |
| children | p_f1XwTRMVAYJExkGTa5bF92 | 王傑 | accepted |
| children | p_fWwneV8r1G2iVJWGgF8cT1 | 王欄 | accepted |
| children | p_hBEcoRHLpZFMNN6ewK4SfC | 王棐 | accepted |
| children | p_m3uc26Dpb16ny9EsAfFfb6 | 王極 | accepted |
| children | p_qmNvDF2sUe4JHGGJosA5ms | 王杭 | accepted |
| children | p_x3R1rAebwTq6W53VbbXqQw | 王梧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棐（CBDB 291894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291894&o=json)
- [中国历代人物传记资料库：王杭（CBDB 291895）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291895&o=json)
- [中国历代人物传记资料库：王極（CBDB 291892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291892&o=json)
- [中国历代人物传记资料库：王傑（CBDB 291887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291887&o=json)
- [中国历代人物传记资料库：王欄（CBDB 291897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291897&o=json)
- [中国历代人物传记资料库：王栗（CBDB 291893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291893&o=json)
- [中国历代人物传记资料库：王汝猷（CBDB 291880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291880&o=json)
- [中国历代人物传记资料库：王樞（CBDB 291883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291883&o=json)
- [中国历代人物传记资料库：王廷（CBDB 291886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291886&o=json)
- [中国历代人物传记资料库：王梧（CBDB 291890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291890&o=json)
- [中国历代人物传记资料库：王楹（CBDB 291888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291888&o=json)
- [中国历代人物传记资料库：王樟（CBDB 291891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291891&o=json)
- [中国历代人物传记资料库：王梓（CBDB 291889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291889&o=json)
