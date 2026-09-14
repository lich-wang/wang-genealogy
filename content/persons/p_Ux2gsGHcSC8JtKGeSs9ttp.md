---
schema: wang-person/v1
id: p_Ux2gsGHcSC8JtKGeSs9ttp
status: active
merged_into: null
display_name: 王緘
revision: 18
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u8q8rPZB6L6TjhNETQN3xN
        subject_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S72ToRht3UYN3GHSqVw4GE
          claim_id: c_u8q8rPZB6L6TjhNETQN3xN
          source_id: s_E78mJpLEwT13keLvJqAiyD
          stance: supports
          locator: CBDB:68345
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68345）
          source: &a1
            id: s_E78mJpLEwT13keLvJqAiyD
            source_type: api_record
            title: 中国历代人物传记资料库：王緘（CBDB 68345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68345&o=json
            external_identifier: CBDB:68345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.069Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MbKH59WduoLJCbDD2tMTim
        subject_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緘，明人物。籍贯文安，入仕鄉貢舉人，曾任按察使、兵備道、參知政事。（中国历代人物传记资料库 CBDB 68345）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_12Ckn_FQR-gmV4z9nbqyFk
          claim_id: c_MbKH59WduoLJCbDD2tMTim
          source_id: s_E78mJpLEwT13keLvJqAiyD
          stance: supports
          locator: CBDB:68345
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Z_NwSl8NVkwuuYC0DKH-mS
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IJfNIjvMLWVvsb5FHkfQ8j
          claim_id: c_Z_NwSl8NVkwuuYC0DKH-mS
          source_id: s_LhLdZ1qqvScxSavV2YX4Dm
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LhLdZ1qqvScxSavV2YX4Dm
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 209198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209198&o=json
            external_identifier: CBDB:209198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.973Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_s94RydQTdDQooKZ8AoB28k
        status: active
        display_name: 王儀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_shfJagwFBZW1vE1IB9g00t
        subject_person_id: p_AkrRJo2uGtxGuXdXFmLbLr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-yNUYQpVE_z6YuA8t4F7gJ
          claim_id: c_shfJagwFBZW1vE1IB9g00t
          source_id: s_jMuZnBF7GVv2W1W3CiPsTH
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第三十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jMuZnBF7GVv2W1W3CiPsTH
            source_type: api_record
            title: 中国历代人物传记资料库：王能（CBDB 209196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209196&o=json
            external_identifier: CBDB:209196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AkrRJo2uGtxGuXdXFmLbLr
        status: active
        display_name: 王能
        merged_into_person_id: null
    - claim:
        id: c_9sDVz8q6ksEgWNKDLwdjab
        subject_person_id: p_xEqBVFzxb7NDs5qPchtQzM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ic1FREV60zT9SeGKX3waM3
          claim_id: c_9sDVz8q6ksEgWNKDLwdjab
          source_id: s_jzUvzhmxvuLFGQKZ8Ffq3q
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第三十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jzUvzhmxvuLFGQKZ8Ffq3q
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 209197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209197&o=json
            external_identifier: CBDB:209197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.973Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xEqBVFzxb7NDs5qPchtQzM
        status: active
        display_name: 王賢
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_KHMYy2Iwn1k0DYgZ1i18la
        subject_person_id: p_2mYyLk6eJWT5V7f1kLYXR5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jbSCR4J5U1lyhGGnEJYd2i
          claim_id: c_KHMYy2Iwn1k0DYgZ1i18la
          source_id: s_CqYDF1c9w7CABskz46lcrQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68345 王緘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CqYDF1c9w7CABskz46lcrQ
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 209204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209204&o=json
            external_identifier: CBDB:209204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2mYyLk6eJWT5V7f1kLYXR5
        status: active
        display_name: 王緒
        merged_into_person_id: null
    - claim:
        id: c_YesXt83DFZjgw-dR4fWQZS
        subject_person_id: p_3qcuzBqbTi9SfdBKxLmiQX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DiTQ4qF-wlIMH0ep5qge0X
          claim_id: c_YesXt83DFZjgw-dR4fWQZS
          source_id: s_CJMg7ZYvRmPJWFbzXkzkQL
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68345 王緘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CJMg7ZYvRmPJWFbzXkzkQL
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 209207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209207&o=json
            external_identifier: CBDB:209207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3qcuzBqbTi9SfdBKxLmiQX
        status: active
        display_name: 王紳
        merged_into_person_id: null
    - claim:
        id: c_J5cAJAegEzE39HDuEFXW0A
        subject_person_id: p_8XtTa11MPaSMjuGbv1Ed9Y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W1Yhp2EPdq7niIfSDffdvk
          claim_id: c_J5cAJAegEzE39HDuEFXW0A
          source_id: s_OkMhoEbFapkBBdWYWSgcF9
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68345 王緘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OkMhoEbFapkBBdWYWSgcF9
            source_type: api_record
            title: 中国历代人物传记资料库：王守訓（CBDB 209208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209208&o=json
            external_identifier: CBDB:209208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8XtTa11MPaSMjuGbv1Ed9Y
        status: active
        display_name: 王守訓
        merged_into_person_id: null
    - claim:
        id: c_c1Jn2ks7ILNQERh4qzjBja
        subject_person_id: p_AA29b6icXJkkAJBgWC2YHi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iPS1AB51_prvFK_Pf9L8-K
          claim_id: c_c1Jn2ks7ILNQERh4qzjBja
          source_id: s_pakgWt811YOD38uqMA6Gmf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68345 王緘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pakgWt811YOD38uqMA6Gmf
            source_type: api_record
            title: 中国历代人物传记资料库：王練（CBDB 209217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209217&o=json
            external_identifier: CBDB:209217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AA29b6icXJkkAJBgWC2YHi
        status: active
        display_name: 王練
        merged_into_person_id: null
    - claim:
        id: c_3Q5tHJaOlbs-qPbjPYsxtZ
        subject_person_id: p_BL6tHZSsBBfrc6uMtndoAU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YX44oMEByZCeMcG_7wi8Px
          claim_id: c_3Q5tHJaOlbs-qPbjPYsxtZ
          source_id: s_pkzNq8tdOswg2Ne89PKF_I
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68345 王緘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pkzNq8tdOswg2Ne89PKF_I
            source_type: api_record
            title: 中国历代人物传记资料库：王綵（CBDB 209209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209209&o=json
            external_identifier: CBDB:209209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BL6tHZSsBBfrc6uMtndoAU
        status: active
        display_name: 王綵
        merged_into_person_id: null
    - claim:
        id: c_9IaxxZHSsUKPFaojRB8Bhe
        subject_person_id: p_EPa4mGvnNFxVG6U2bdfUUq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BxIv6eq6kBCRifwM2m_W9K
          claim_id: c_9IaxxZHSsUKPFaojRB8Bhe
          source_id: s_cUmEu0kwrFVPqPo4r-pfeT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68345 王緘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cUmEu0kwrFVPqPo4r-pfeT
            source_type: api_record
            title: 中国历代人物传记资料库：王絡（CBDB 209211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209211&o=json
            external_identifier: CBDB:209211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EPa4mGvnNFxVG6U2bdfUUq
        status: active
        display_name: 王絡
        merged_into_person_id: null
    - claim:
        id: c_LOpEJkYSynbHUl7uZErhAu
        subject_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_X7nMZFJXx496NeuQJ5nEM8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1DCiX2va4DM9wfqMFSpNnQ
          claim_id: c_LOpEJkYSynbHUl7uZErhAu
          source_id: s_uN4u1dUSMXfO6Fue3kiwbC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68345 王緘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uN4u1dUSMXfO6Fue3kiwbC
            source_type: api_record
            title: 中国历代人物传记资料库：王織（CBDB 209210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209210&o=json
            external_identifier: CBDB:209210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X7nMZFJXx496NeuQJ5nEM8
        status: active
        display_name: 王織
        merged_into_person_id: null
    - claim:
        id: c_DoDqY-ZuS_fvkLmQnIAvCK
        subject_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YywxbhMRNj52NqwuHGEz7G
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gtu7NhOoDxB3DvKjikTgWe
          claim_id: c_DoDqY-ZuS_fvkLmQnIAvCK
          source_id: s_MAOemK-aQII4PnFxzrNWzz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68345 王緘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MAOemK-aQII4PnFxzrNWzz
            source_type: api_record
            title: 中国历代人物传记资料库：王絲（CBDB 209218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209218&o=json
            external_identifier: CBDB:209218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YywxbhMRNj52NqwuHGEz7G
        status: active
        display_name: 王絲
        merged_into_person_id: null
    - claim:
        id: c_9GWVu1wSUB57wuuIqoz6V7
        subject_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZKxy5hUbt7MJA1exnNYFRa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jcib-dRr-UwxaC_384Cvcr
          claim_id: c_9GWVu1wSUB57wuuIqoz6V7
          source_id: s_S2OJ0_lkF8Q1KO9ME4HI2S
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68345 王緘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_S2OJ0_lkF8Q1KO9ME4HI2S
            source_type: api_record
            title: 中国历代人物传记资料库：王緄（CBDB 209206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209206&o=json
            external_identifier: CBDB:209206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZKxy5hUbt7MJA1exnNYFRa
        status: active
        display_name: 王緄
        merged_into_person_id: null
    - claim:
        id: c_DjZ7UvO01DE_jcPbVvAp5-
        subject_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aWJRAJc9BxLAgY324fhqxj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6PafKe9JCSRPRpTIuEG9Dw
          claim_id: c_DjZ7UvO01DE_jcPbVvAp5-
          source_id: s_R6k2B16ighwwkTvtR9SMk_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68345 王緘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_R6k2B16ighwwkTvtR9SMk_
            source_type: api_record
            title: 中国历代人物传记资料库：王統（CBDB 209213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209213&o=json
            external_identifier: CBDB:209213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aWJRAJc9BxLAgY324fhqxj
        status: active
        display_name: 王統
        merged_into_person_id: null
    - claim:
        id: c_nm2phFQ6qmhM8pn28yiWV8
        subject_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ghgeffSPW5Q9YaaN4u6XSy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_41QRPlgCpgpsq79fR9o46Q
          claim_id: c_nm2phFQ6qmhM8pn28yiWV8
          source_id: s_80qFQRPY2UR5jUM7i8CM46
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68345 王緘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_80qFQRPY2UR5jUM7i8CM46
            source_type: api_record
            title: 中国历代人物传记资料库：王緼（CBDB 209219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209219&o=json
            external_identifier: CBDB:209219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ghgeffSPW5Q9YaaN4u6XSy
        status: active
        display_name: 王緼
        merged_into_person_id: null
    - claim:
        id: c_yV4yoNmkd4ZQUk1YK21weN
        subject_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_n3DaYoCYSw9QjJd9M6MZBM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NR-iSHXT1IcobHvYF6zUSC
          claim_id: c_yV4yoNmkd4ZQUk1YK21weN
          source_id: s_eJPZGVJwkN-bSHREGj4RAo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68345 王緘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eJPZGVJwkN-bSHREGj4RAo
            source_type: api_record
            title: 中国历代人物传记资料库：王綰（CBDB 209205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209205&o=json
            external_identifier: CBDB:209205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_n3DaYoCYSw9QjJd9M6MZBM
        status: active
        display_name: 王綰
        merged_into_person_id: null
    - claim:
        id: c_NIZ_H5qQJ03MfTbOCif2pa
        subject_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nQ4anmrjBHEgUtNREqoJvW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z1BQl5F9BjZsMSMnxsGPP5
          claim_id: c_NIZ_H5qQJ03MfTbOCif2pa
          source_id: s_mjm7SsYVDR-19wo73KHLzb
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68345 王緘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mjm7SsYVDR-19wo73KHLzb
            source_type: api_record
            title: 中国历代人物传记资料库：王繕（CBDB 209212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209212&o=json
            external_identifier: CBDB:209212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nQ4anmrjBHEgUtNREqoJvW
        status: active
        display_name: 王繕
        merged_into_person_id: null
    - claim:
        id: c_zBs8iGTZYRjvq0MOWZebUB
        subject_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_teNpXqzuh4Zr2K6MBacVUe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fl1larn_U_JvJjjw7pa2ID
          claim_id: c_zBs8iGTZYRjvq0MOWZebUB
          source_id: s_QKN92z2Nj2fUIvT9jFeh8u
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68345 王緘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QKN92z2Nj2fUIvT9jFeh8u
            source_type: api_record
            title: 中国历代人物传记资料库：王以纁（CBDB 209216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209216&o=json
            external_identifier: CBDB:209216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_teNpXqzuh4Zr2K6MBacVUe
        status: active
        display_name: 王以纁
        merged_into_person_id: null
---

# 王緘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緘 | accepted |
| bio.summary | 王緘，明人物。籍贯文安，入仕鄉貢舉人，曾任按察使、兵備道、參知政事。（中国历代人物传记资料库 CBDB 68345） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_s94RydQTdDQooKZ8AoB28k | 王儀 | accepted |
| ancestors | p_AkrRJo2uGtxGuXdXFmLbLr | 王能 | accepted |
| ancestors | p_xEqBVFzxb7NDs5qPchtQzM | 王賢 | accepted |
| other | p_2mYyLk6eJWT5V7f1kLYXR5 | 王緒 | accepted |
| other | p_3qcuzBqbTi9SfdBKxLmiQX | 王紳 | accepted |
| other | p_8XtTa11MPaSMjuGbv1Ed9Y | 王守訓 | accepted |
| other | p_AA29b6icXJkkAJBgWC2YHi | 王練 | accepted |
| other | p_BL6tHZSsBBfrc6uMtndoAU | 王綵 | accepted |
| other | p_EPa4mGvnNFxVG6U2bdfUUq | 王絡 | accepted |
| other | p_X7nMZFJXx496NeuQJ5nEM8 | 王織 | accepted |
| other | p_YywxbhMRNj52NqwuHGEz7G | 王絲 | accepted |
| other | p_ZKxy5hUbt7MJA1exnNYFRa | 王緄 | accepted |
| other | p_aWJRAJc9BxLAgY324fhqxj | 王統 | accepted |
| other | p_ghgeffSPW5Q9YaaN4u6XSy | 王緼 | accepted |
| other | p_n3DaYoCYSw9QjJd9M6MZBM | 王綰 | accepted |
| other | p_nQ4anmrjBHEgUtNREqoJvW | 王繕 | accepted |
| other | p_teNpXqzuh4Zr2K6MBacVUe | 王以纁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綵（CBDB 209209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209209&o=json)
- [中国历代人物传记资料库：王緄（CBDB 209206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209206&o=json)
- [中国历代人物传记资料库：王緘（CBDB 68345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68345&o=json)
- [中国历代人物传记资料库：王練（CBDB 209217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209217&o=json)
- [中国历代人物传记资料库：王絡（CBDB 209211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209211&o=json)
- [中国历代人物传记资料库：王能（CBDB 209196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209196&o=json)
- [中国历代人物传记资料库：王繕（CBDB 209212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209212&o=json)
- [中国历代人物传记资料库：王紳（CBDB 209207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209207&o=json)
- [中国历代人物传记资料库：王守訓（CBDB 209208）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209208&o=json)
- [中国历代人物传记资料库：王絲（CBDB 209218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209218&o=json)
- [中国历代人物传记资料库：王統（CBDB 209213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209213&o=json)
- [中国历代人物传记资料库：王綰（CBDB 209205）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209205&o=json)
- [中国历代人物传记资料库：王賢（CBDB 209197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209197&o=json)
- [中国历代人物传记资料库：王緒（CBDB 209204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209204&o=json)
- [中国历代人物传记资料库：王儀（CBDB 209198）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209198&o=json)
- [中国历代人物传记资料库：王以纁（CBDB 209216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209216&o=json)
- [中国历代人物传记资料库：王緼（CBDB 209219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209219&o=json)
- [中国历代人物传记资料库：王織（CBDB 209210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209210&o=json)
