---
schema: wang-person/v1
id: p_kNvoZFnJm2KQZhvhLXYs7R
status: active
merged_into: null
display_name: 王惟中
revision: 16
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GXJ5CMHzdgjGNr8xzhE67e
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WHahhg6MHe5LWF1v45apeo
          claim_id: c_GXJ5CMHzdgjGNr8xzhE67e
          source_id: s_JdxuK8SMW5Cg89USVQp6Rs
          stance: supports
          locator: CBDB:228268
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（228268）
          source: &a1
            id: s_JdxuK8SMW5Cg89USVQp6Rs
            source_type: api_record
            title: 中国历代人物传记资料库：王惟中（CBDB 228268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228268&o=json
            external_identifier: CBDB:228268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8wMbnQHKWUrkLRQpcHN16c
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟中，明人物。萬曆丙戌科進士進士，籍贯晉江，入仕進士，曾任太僕寺少卿。（中国历代人物传记资料库 CBDB 228268）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zrBXciSsqvNQc89O8N_oab
          claim_id: c_8wMbnQHKWUrkLRQpcHN16c
          source_id: s_JdxuK8SMW5Cg89USVQp6Rs
          stance: supports
          locator: CBDB:228268
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_p0tj7EIMohCg0e_5rHN1FV
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GYhSm1gQZ0-d0_55qLU7r8
          claim_id: c_p0tj7EIMohCg0e_5rHN1FV
          source_id: s_JdxuK8SMW5Cg89USVQp6Rs
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MWFGy9uHg9NsSwK8c42QRv
        status: active
        display_name: 王同休
        merged_into_person_id: null
    - claim:
        id: c_t-uDgSlc7ZjG0IDszojrP7
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3qMgFHcRQvpK8sdeAZ4L1A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PRmP3Ms3_4oDLsng750YgU
          claim_id: c_t-uDgSlc7ZjG0IDszojrP7
          source_id: s_DFPD1d5mCY3Qh-3s2BhiAw
          stance: supports
          locator: CBDB：兄弟 王同休（207136）之父／母 王惟中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同廉 与 王同休 为同胞（CBDB 记「弟」），王同休 之父／母即 王同廉 之父／母。
          source:
            id: s_DFPD1d5mCY3Qh-3s2BhiAw
            source_type: api_record
            title: 中国历代人物传记资料库：王同廉（CBDB 228279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228279&o=json
            external_identifier: CBDB:228279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3qMgFHcRQvpK8sdeAZ4L1A
        status: active
        display_name: 王同廉
        merged_into_person_id: null
    - claim:
        id: c_UKtGz81VAFtc27v6Dq3qxZ
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7UeP8FttiN2sjK938QZYon
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_893TKpaEIf438JImCov67i
          claim_id: c_UKtGz81VAFtc27v6Dq3qxZ
          source_id: s_22RmRXrBFNpASPPjhvCy1c
          stance: supports
          locator: CBDB：兄弟 王同休（207136）之父／母 王惟中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同言 与 王同休 为同胞（CBDB 记「弟」），王同休 之父／母即 王同言 之父／母。
          source:
            id: s_22RmRXrBFNpASPPjhvCy1c
            source_type: api_record
            title: 中国历代人物传记资料库：王同言（CBDB 228277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228277&o=json
            external_identifier: CBDB:228277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7UeP8FttiN2sjK938QZYon
        status: active
        display_name: 王同言
        merged_into_person_id: null
    - claim:
        id: c_GaUENRfVyUs20QUcRFwlUp
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_86wTZFBZPTN3Z1XQarsVFQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t9tMEMywWYKzTbPGraVxFv
          claim_id: c_GaUENRfVyUs20QUcRFwlUp
          source_id: s_y0dNCFTQgMFxaHIGhclOg3
          stance: supports
          locator: CBDB：兄弟 王同休（207136）之父／母 王惟中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同康 与 王同休 为同胞（CBDB 记「弟」），王同休 之父／母即 王同康 之父／母。
          source:
            id: s_y0dNCFTQgMFxaHIGhclOg3
            source_type: api_record
            title: 中国历代人物传记资料库：王同康（CBDB 228276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228276&o=json
            external_identifier: CBDB:228276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_86wTZFBZPTN3Z1XQarsVFQ
        status: active
        display_name: 王同康
        merged_into_person_id: null
    - claim:
        id: c_REEaAZ97qULsNg8hpfouLg
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A9BFPQLEUgHVSFRY2Y99pq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sVv_b9h8G99zfaamLyHa2E
          claim_id: c_REEaAZ97qULsNg8hpfouLg
          source_id: s_sIWcGAe1NXtHULS36_kDNW
          stance: supports
          locator: CBDB：兄弟 王同休（207136）之父／母 王惟中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同文 与 王同休 为同胞（CBDB 记「弟」），王同休 之父／母即 王同文 之父／母。
          source:
            id: s_sIWcGAe1NXtHULS36_kDNW
            source_type: api_record
            title: 中国历代人物传记资料库：王同文（CBDB 228280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228280&o=json
            external_identifier: CBDB:228280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A9BFPQLEUgHVSFRY2Y99pq
        status: active
        display_name: 王同文
        merged_into_person_id: null
    - claim:
        id: c_KI3e8FIUg4IheUJ-YhY3T5
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CjS2biWiV8uLbydmFB48Cd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h71GGBsg-pNwmG4XDK3K1L
          claim_id: c_KI3e8FIUg4IheUJ-YhY3T5
          source_id: s_VUMGttAD8vXq7c61H9asUt
          stance: supports
          locator: CBDB：兄弟 王同休（207136）之父／母 王惟中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同任 与 王同休 为同胞（CBDB 记「弟」），王同休 之父／母即 王同任 之父／母。
          source:
            id: s_VUMGttAD8vXq7c61H9asUt
            source_type: api_record
            title: 中国历代人物传记资料库：王同任（CBDB 228278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228278&o=json
            external_identifier: CBDB:228278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CjS2biWiV8uLbydmFB48Cd
        status: active
        display_name: 王同任
        merged_into_person_id: null
    - claim:
        id: c_lwzFkHTM8afttv7NpYkMCB
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J7RLh9g8kkBqfkKSJnwL4p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BitB03js_5DRaoDmQLfySW
          claim_id: c_lwzFkHTM8afttv7NpYkMCB
          source_id: s_efKwOk68tKuxmyJyo4C8DE
          stance: supports
          locator: CBDB：兄弟 王同休（207136）之父／母 王惟中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同庶 与 王同休 为同胞（CBDB 记「兄」），王同休 之父／母即 王同庶 之父／母。
          source:
            id: s_efKwOk68tKuxmyJyo4C8DE
            source_type: api_record
            title: 中国历代人物传记资料库：王同庶（CBDB 228285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228285&o=json
            external_identifier: CBDB:228285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_J7RLh9g8kkBqfkKSJnwL4p
        status: active
        display_name: 王同庶
        merged_into_person_id: null
    - claim:
        id: c_W0MN989iZiXIWTjaN2lOQQ
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LMGs3ubexVRQy3nt9urZLc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SmEHiT6Wh3llnH5JVZvw7H
          claim_id: c_W0MN989iZiXIWTjaN2lOQQ
          source_id: s_uN3KNsyXHdf9IWEmddVROU
          stance: supports
          locator: CBDB：兄弟 王同休（207136）之父／母 王惟中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同賡 与 王同休 为同胞（CBDB 记「兄」），王同休 之父／母即 王同賡 之父／母。
          source:
            id: s_uN3KNsyXHdf9IWEmddVROU
            source_type: api_record
            title: 中国历代人物传记资料库：王同賡（CBDB 228283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228283&o=json
            external_identifier: CBDB:228283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LMGs3ubexVRQy3nt9urZLc
        status: active
        display_name: 王同賡
        merged_into_person_id: null
    - claim:
        id: c_htGOGDStZOrM_dQy3NjrKq
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NvNyxpEHnfKTqPCRw7joWN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zW3_eOnGuOMOCTTtKW3CeK
          claim_id: c_htGOGDStZOrM_dQy3NjrKq
          source_id: s_Nn_MOD-OykSZ9O9_AaSnxH
          stance: supports
          locator: CBDB：兄弟 王同休（207136）之父／母 王惟中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同廕 与 王同休 为同胞（CBDB 记「兄」），王同休 之父／母即 王同廕 之父／母。
          source:
            id: s_Nn_MOD-OykSZ9O9_AaSnxH
            source_type: api_record
            title: 中国历代人物传记资料库：王同廕（CBDB 228287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228287&o=json
            external_identifier: CBDB:228287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NvNyxpEHnfKTqPCRw7joWN
        status: active
        display_name: 王同廕
        merged_into_person_id: null
    - claim:
        id: c_k0Cd6ht_FDd09jxYbQe72e
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SxAezkkbL8Xi9KjRQRGAT1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q30n9WvBFdZCKYk6nSNO2W
          claim_id: c_k0Cd6ht_FDd09jxYbQe72e
          source_id: s_oEephQjlr4_QKYGnpuAqO-
          stance: supports
          locator: CBDB：兄弟 王同休（207136）之父／母 王惟中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同杲 与 王同休 为同胞（CBDB 记「兄」），王同休 之父／母即 王同杲 之父／母。
          source:
            id: s_oEephQjlr4_QKYGnpuAqO-
            source_type: api_record
            title: 中国历代人物传记资料库：王同杲（CBDB 228286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228286&o=json
            external_identifier: CBDB:228286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SxAezkkbL8Xi9KjRQRGAT1
        status: active
        display_name: 王同杲
        merged_into_person_id: null
    - claim:
        id: c_DjDBToiGZpRzRn4Bzp8Ylz
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eQN4y9LgUeW1EE3eV6uurj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HxKgDVQv3oJVxlZUO3326s
          claim_id: c_DjDBToiGZpRzRn4Bzp8Ylz
          source_id: s_7w0gBfGTppNSdjyH-eMunI
          stance: supports
          locator: CBDB：兄弟 王同休（207136）之父／母 王惟中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同讚 与 王同休 为同胞（CBDB 记「弟」），王同休 之父／母即 王同讚 之父／母。
          source:
            id: s_7w0gBfGTppNSdjyH-eMunI
            source_type: api_record
            title: 中国历代人物传记资料库：王同讚（CBDB 228274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228274&o=json
            external_identifier: CBDB:228274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eQN4y9LgUeW1EE3eV6uurj
        status: active
        display_name: 王同讚
        merged_into_person_id: null
    - claim:
        id: c_KVkihLNTIhhP5yfEkNy-2o
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g3UQBZAEVU2F537juVQrYi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LNkTKRXfRNb2kLrji8FETT
          claim_id: c_KVkihLNTIhhP5yfEkNy-2o
          source_id: s_H2S7IY13w4B4y-FGrpaXxI
          stance: supports
          locator: CBDB：兄弟 王同休（207136）之父／母 王惟中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同朝 与 王同休 为同胞（CBDB 记「兄」），王同休 之父／母即 王同朝 之父／母。
          source:
            id: s_H2S7IY13w4B4y-FGrpaXxI
            source_type: api_record
            title: 中国历代人物传记资料库：王同朝（CBDB 228282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228282&o=json
            external_identifier: CBDB:228282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g3UQBZAEVU2F537juVQrYi
        status: active
        display_name: 王同朝
        merged_into_person_id: null
    - claim:
        id: c_OvT325_trvDlyhtUHMkzgH
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gLRJKr7VDnTGS3DdpFvZbo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-TaczOIz-vTX0ENc5XOhIo
          claim_id: c_OvT325_trvDlyhtUHMkzgH
          source_id: s_7KHlCdfeUHOL69xyen3sjf
          stance: supports
          locator: CBDB：兄弟 王同休（207136）之父／母 王惟中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同衣 与 王同休 为同胞（CBDB 记「弟」），王同休 之父／母即 王同衣 之父／母。
          source:
            id: s_7KHlCdfeUHOL69xyen3sjf
            source_type: api_record
            title: 中国历代人物传记资料库：王同衣（CBDB 228281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228281&o=json
            external_identifier: CBDB:228281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gLRJKr7VDnTGS3DdpFvZbo
        status: active
        display_name: 王同衣
        merged_into_person_id: null
    - claim:
        id: c_-J1auZX6Y48ipqVL6LszFk
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h1x6uoqPx8KyBczJG44BbJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fyh6ZRMiQr00rn-jrdXgwH
          claim_id: c_-J1auZX6Y48ipqVL6LszFk
          source_id: s_pxkqmRAMwHC3-29nCQPypw
          stance: supports
          locator: CBDB：兄弟 王同休（207136）之父／母 王惟中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同京 与 王同休 为同胞（CBDB 记「兄」），王同休 之父／母即 王同京 之父／母。
          source:
            id: s_pxkqmRAMwHC3-29nCQPypw
            source_type: api_record
            title: 中国历代人物传记资料库：王同京（CBDB 228288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228288&o=json
            external_identifier: CBDB:228288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h1x6uoqPx8KyBczJG44BbJ
        status: active
        display_name: 王同京
        merged_into_person_id: null
    - claim:
        id: c_2NKIeVxPPDq_-sLuRWPpNc
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jJEyhLtJFmqq5UKdpjzWh2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8x-KupyV50B34cVePbHjKO
          claim_id: c_2NKIeVxPPDq_-sLuRWPpNc
          source_id: s_x0JVMLswN0CQwaI73vqpKK
          stance: supports
          locator: CBDB：兄弟 王同休（207136）之父／母 王惟中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同度 与 王同休 为同胞（CBDB 记「弟」），王同休 之父／母即 王同度 之父／母。
          source:
            id: s_x0JVMLswN0CQwaI73vqpKK
            source_type: api_record
            title: 中国历代人物传记资料库：王同度（CBDB 228275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228275&o=json
            external_identifier: CBDB:228275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jJEyhLtJFmqq5UKdpjzWh2
        status: active
        display_name: 王同度
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟中 | accepted |
| bio.summary | 王惟中，明人物。萬曆丙戌科進士進士，籍贯晉江，入仕進士，曾任太僕寺少卿。（中国历代人物传记资料库 CBDB 228268） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_MWFGy9uHg9NsSwK8c42QRv | 王同休 | accepted |
| children | p_3qMgFHcRQvpK8sdeAZ4L1A | 王同廉 | accepted |
| children | p_7UeP8FttiN2sjK938QZYon | 王同言 | accepted |
| children | p_86wTZFBZPTN3Z1XQarsVFQ | 王同康 | accepted |
| children | p_A9BFPQLEUgHVSFRY2Y99pq | 王同文 | accepted |
| children | p_CjS2biWiV8uLbydmFB48Cd | 王同任 | accepted |
| children | p_J7RLh9g8kkBqfkKSJnwL4p | 王同庶 | accepted |
| children | p_LMGs3ubexVRQy3nt9urZLc | 王同賡 | accepted |
| children | p_NvNyxpEHnfKTqPCRw7joWN | 王同廕 | accepted |
| children | p_SxAezkkbL8Xi9KjRQRGAT1 | 王同杲 | accepted |
| children | p_eQN4y9LgUeW1EE3eV6uurj | 王同讚 | accepted |
| children | p_g3UQBZAEVU2F537juVQrYi | 王同朝 | accepted |
| children | p_gLRJKr7VDnTGS3DdpFvZbo | 王同衣 | accepted |
| children | p_h1x6uoqPx8KyBczJG44BbJ | 王同京 | accepted |
| children | p_jJEyhLtJFmqq5UKdpjzWh2 | 王同度 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同朝（CBDB 228282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228282&o=json)
- [中国历代人物传记资料库：王同度（CBDB 228275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228275&o=json)
- [中国历代人物传记资料库：王同杲（CBDB 228286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228286&o=json)
- [中国历代人物传记资料库：王同賡（CBDB 228283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228283&o=json)
- [中国历代人物传记资料库：王同京（CBDB 228288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228288&o=json)
- [中国历代人物传记资料库：王同康（CBDB 228276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228276&o=json)
- [中国历代人物传记资料库：王同廉（CBDB 228279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228279&o=json)
- [中国历代人物传记资料库：王同任（CBDB 228278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228278&o=json)
- [中国历代人物传记资料库：王同庶（CBDB 228285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228285&o=json)
- [中国历代人物传记资料库：王同文（CBDB 228280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228280&o=json)
- [中国历代人物传记资料库：王同言（CBDB 228277）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228277&o=json)
- [中国历代人物传记资料库：王同衣（CBDB 228281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228281&o=json)
- [中国历代人物传记资料库：王同廕（CBDB 228287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228287&o=json)
- [中国历代人物传记资料库：王同讚（CBDB 228274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228274&o=json)
- [中国历代人物传记资料库：王惟中（CBDB 228268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228268&o=json)
