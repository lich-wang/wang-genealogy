---
schema: wang-person/v1
id: p_v3b97W1yi7J7kSEqJr8m4E
status: active
merged_into: null
display_name: 王玹
revision: 17
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z654PbvknDj2gec923APAB
        subject_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E7Lsb7TPmcKZ1B3CX34JTc
          claim_id: c_Z654PbvknDj2gec923APAB
          source_id: s_AL1nEWC9FLDBJct1qpiZDf
          stance: supports
          locator: CBDB:200596
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200596）
          source: &a1
            id: s_AL1nEWC9FLDBJct1qpiZDf
            source_type: api_record
            title: 中国历代人物传记资料库：王玹（CBDB 200596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200596&o=json
            external_identifier: CBDB:200596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.621Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MgMP44KBvbWGztZLxRnQGs
        subject_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1462年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rdgPm3vZ4KJhYAxgqo4d1V
          claim_id: c_MgMP44KBvbWGztZLxRnQGs
          source_id: s_AL1nEWC9FLDBJct1qpiZDf
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
        id: c_144kG2C8VY6KG7f1deHTDU
        subject_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玹（生于1462年），明人物。明清進士進士，籍贯海豐，入仕進士。（中国历代人物传记资料库 CBDB 200596）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jdNGs_2JVx6zTnlbZXO_If
          claim_id: c_144kG2C8VY6KG7f1deHTDU
          source_id: s_AL1nEWC9FLDBJct1qpiZDf
          stance: supports
          locator: CBDB:200596
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yVomOuItwIcCWSy6fXrzfi
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6il5sz4nf8NWu1AsCR9Vzu
          claim_id: c_yVomOuItwIcCWSy6fXrzfi
          source_id: s_supKiBCeqfoZKnhWAj2v7T
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百六十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_supKiBCeqfoZKnhWAj2v7T
            source_type: api_record
            title: 中国历代人物传记资料库：王豫（CBDB 260235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260235&o=json
            external_identifier: CBDB:260235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Y9VpT5a4bHRsBrje4LpbfA
        status: active
        display_name: 王豫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c__h5DXIb7AZQnZ5ud3-t1Tk
        subject_person_id: p_BbCkLEm6dMxpYfs2i2AZTe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xyMc5Ls9CqjjXZ2qY3-MlR
          claim_id: c__h5DXIb7AZQnZ5ud3-t1Tk
          source_id: s_hnnNXWtr3fLs6Lwb2TY7ea
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百六十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hnnNXWtr3fLs6Lwb2TY7ea
            source_type: api_record
            title: 中国历代人物传记资料库：王樸（CBDB 260232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260232&o=json
            external_identifier: CBDB:260232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BbCkLEm6dMxpYfs2i2AZTe
        status: active
        display_name: 王樸
        merged_into_person_id: null
    - claim:
        id: c_6cVnLATxKGgnvRU3Zndk-Q
        subject_person_id: p_hEsLuW6exDAGj1kfP5kxRw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lK04-RlaUkjafXz64fr_lF
          claim_id: c_6cVnLATxKGgnvRU3Zndk-Q
          source_id: s_GFHGj97FC7XyEUPjxpDBtw
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百六十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GFHGj97FC7XyEUPjxpDBtw
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 260233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260233&o=json
            external_identifier: CBDB:260233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hEsLuW6exDAGj1kfP5kxRw
        status: active
        display_name: 王佐
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_JKeCmTGRZQ2Oe2SrP5x6oU
        subject_person_id: p_354XDNnF2jP5CLDqCQoBca
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OuaYWgjyJIGycDihRbwcSx
          claim_id: c_JKeCmTGRZQ2Oe2SrP5x6oU
          source_id: s_x0HeFMJBxQ15xYGrey2oSw
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200596 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x0HeFMJBxQ15xYGrey2oSw
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 260247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260247&o=json
            external_identifier: CBDB:260247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_354XDNnF2jP5CLDqCQoBca
        status: active
        display_name: 王瑀
        merged_into_person_id: null
    - claim:
        id: c_XAYiIENy29na7v_JfIzLN1
        subject_person_id: p_4Uxjrthw52hnqawrYtUy6r
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BFvaMKCO-qp2AaoWkpbAwf
          claim_id: c_XAYiIENy29na7v_JfIzLN1
          source_id: s_9M-AUN2uqtVohOcPSkJkth
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200596 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9M-AUN2uqtVohOcPSkJkth
            source_type: api_record
            title: 中国历代人物传记资料库：王卿（CBDB 260243）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260243&o=json
            external_identifier: CBDB:260243
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4Uxjrthw52hnqawrYtUy6r
        status: active
        display_name: 王卿
        merged_into_person_id: null
    - claim:
        id: c_5DeeoYdo9inkzDn6q9kMhZ
        subject_person_id: p_C3uHGxBBKZGMcqnc8KrjRV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9SHx3XOSGGfWomE3PuHyJh
          claim_id: c_5DeeoYdo9inkzDn6q9kMhZ
          source_id: s_MIXZ2DoFPSdHuQTasDnV10
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200596 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MIXZ2DoFPSdHuQTasDnV10
            source_type: api_record
            title: 中国历代人物传记资料库：王珙（CBDB 260251）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260251&o=json
            external_identifier: CBDB:260251
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C3uHGxBBKZGMcqnc8KrjRV
        status: active
        display_name: 王珙
        merged_into_person_id: null
    - claim:
        id: c_EvRFr4se2A-cgRdGr_j-Bm
        subject_person_id: p_GqDKg1DUJK4ZTvwyBiZ9EU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_69YdnR4okIEoVcH670N4q7
          claim_id: c_EvRFr4se2A-cgRdGr_j-Bm
          source_id: s_qVrbBjoQADLhUE0UVfMXmt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200596 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qVrbBjoQADLhUE0UVfMXmt
            source_type: api_record
            title: 中国历代人物传记资料库：王玠（CBDB 260249）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260249&o=json
            external_identifier: CBDB:260249
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GqDKg1DUJK4ZTvwyBiZ9EU
        status: active
        display_name: 王玠
        merged_into_person_id: null
    - claim:
        id: c_xDJrlEYJPP_RPfORQfzU_d
        subject_person_id: p_GrqDC35rqQLHh6KATgrzMj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_snUjgLJWsx0T-IX4f05uyc
          claim_id: c_xDJrlEYJPP_RPfORQfzU_d
          source_id: s_LFA7lPrEaNid_NntZBMq1m
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200596 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LFA7lPrEaNid_NntZBMq1m
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 260238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260238&o=json
            external_identifier: CBDB:260238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GrqDC35rqQLHh6KATgrzMj
        status: active
        display_name: 王瑜
        merged_into_person_id: null
    - claim:
        id: c_MDlIFoD9I0MWWPipn7JLui
        subject_person_id: p_MG9BJcTnRYy7oqKWnx7Hyg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jsFQE8IyJl0YA2PlK6D3YE
          claim_id: c_MDlIFoD9I0MWWPipn7JLui
          source_id: s_EZknlB-qLJH-5_OEGTIiql
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200596 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EZknlB-qLJH-5_OEGTIiql
            source_type: api_record
            title: 中国历代人物传记资料库：王彥（CBDB 260242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260242&o=json
            external_identifier: CBDB:260242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MG9BJcTnRYy7oqKWnx7Hyg
        status: active
        display_name: 王彥
        merged_into_person_id: null
    - claim:
        id: c_TDjIqWfq6mDRa1vgsh2QBD
        subject_person_id: p_aBHAdFbb1fkaQCkqWLPDJg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5zZgSjXfLVfS-BV0YrgRfG
          claim_id: c_TDjIqWfq6mDRa1vgsh2QBD
          source_id: s_VfJkX19ft1fDXnrZeUdUOi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200596 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VfJkX19ft1fDXnrZeUdUOi
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 260240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260240&o=json
            external_identifier: CBDB:260240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aBHAdFbb1fkaQCkqWLPDJg
        status: active
        display_name: 王璽
        merged_into_person_id: null
    - claim:
        id: c__9SmjiayWTMFtBq_-SlwBY
        subject_person_id: p_cFedZB76AQZpjakNEZjEkd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2dvKp6yPmJ61BIPzKtUhZe
          claim_id: c__9SmjiayWTMFtBq_-SlwBY
          source_id: s_C8uSFaJ9pOHlXj9WXmA7iQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200596 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_C8uSFaJ9pOHlXj9WXmA7iQ
            source_type: api_record
            title: 中国历代人物传记资料库：王琇（CBDB 260250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260250&o=json
            external_identifier: CBDB:260250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cFedZB76AQZpjakNEZjEkd
        status: active
        display_name: 王琇
        merged_into_person_id: null
    - claim:
        id: c_dg88ufNPwYl9iJCz1ldfBz
        subject_person_id: p_gmqrGvGzDPv1ATq8M2VNE6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L-G3gxECbRbrWqKnig48oS
          claim_id: c_dg88ufNPwYl9iJCz1ldfBz
          source_id: s_N1y1CYa0F29PyTW6VTlv_0
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200596 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_N1y1CYa0F29PyTW6VTlv_0
            source_type: api_record
            title: 中国历代人物传记资料库：王現（CBDB 260244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260244&o=json
            external_identifier: CBDB:260244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gmqrGvGzDPv1ATq8M2VNE6
        status: active
        display_name: 王現
        merged_into_person_id: null
    - claim:
        id: c_SWiLeceXapeMAokmsZVYFA
        subject_person_id: p_iHoD5FZnf6MNjQYPVRJjoR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pblWzRgglK-o313WwcQjoZ
          claim_id: c_SWiLeceXapeMAokmsZVYFA
          source_id: s_uWnPAY59i-tce0RyTcGff0
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200596 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uWnPAY59i-tce0RyTcGff0
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 260246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260246&o=json
            external_identifier: CBDB:260246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iHoD5FZnf6MNjQYPVRJjoR
        status: active
        display_name: 王瑞
        merged_into_person_id: null
    - claim:
        id: c_u-4JEZ1dJ9C2f-ow7O35b0
        subject_person_id: p_rhxJkneEWB8jm8b59umBtT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7OixQ1iBZI5fmljrBjuYgG
          claim_id: c_u-4JEZ1dJ9C2f-ow7O35b0
          source_id: s_F2WzEIBIJXU4fp_-t4n0TU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200596 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_F2WzEIBIJXU4fp_-t4n0TU
            source_type: api_record
            title: 中国历代人物传记资料库：王珦（CBDB 260248）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260248&o=json
            external_identifier: CBDB:260248
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rhxJkneEWB8jm8b59umBtT
        status: active
        display_name: 王珦
        merged_into_person_id: null
    - claim:
        id: c_YDuP0ncgXgbEb6qlkhL0r1
        subject_person_id: p_tmF5xrpBms9iT9QL5bH6SF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o7Lg-yPRwLelwpydznZSEg
          claim_id: c_YDuP0ncgXgbEb6qlkhL0r1
          source_id: s_dOzCW3QtVYDb_II1SCcTAX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200596 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dOzCW3QtVYDb_II1SCcTAX
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 260239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260239&o=json
            external_identifier: CBDB:260239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tmF5xrpBms9iT9QL5bH6SF
        status: active
        display_name: 王瑄
        merged_into_person_id: null
    - claim:
        id: c_tufxYgdv98cULsOIKcum0Z
        subject_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xCUH2Emd6jxqrPz2wMXJZx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ttNigs08G0myghGWYzX2Hk
          claim_id: c_tufxYgdv98cULsOIKcum0Z
          source_id: s_5_meAe31Ll_kS54GBi50JS
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200596 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5_meAe31Ll_kS54GBi50JS
            source_type: api_record
            title: 中国历代人物传记资料库：王瑁（CBDB 260241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260241&o=json
            external_identifier: CBDB:260241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xCUH2Emd6jxqrPz2wMXJZx
        status: active
        display_name: 王瑁
        merged_into_person_id: null
---

# 王玹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玹 | accepted |
| birth.date | 1462年 | accepted |
| bio.summary | 王玹（生于1462年），明人物。明清進士進士，籍贯海豐，入仕進士。（中国历代人物传记资料库 CBDB 200596） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y9VpT5a4bHRsBrje4LpbfA | 王豫 | accepted |
| ancestors | p_BbCkLEm6dMxpYfs2i2AZTe | 王樸 | accepted |
| ancestors | p_hEsLuW6exDAGj1kfP5kxRw | 王佐 | accepted |
| other | p_354XDNnF2jP5CLDqCQoBca | 王瑀 | accepted |
| other | p_4Uxjrthw52hnqawrYtUy6r | 王卿 | accepted |
| other | p_C3uHGxBBKZGMcqnc8KrjRV | 王珙 | accepted |
| other | p_GqDKg1DUJK4ZTvwyBiZ9EU | 王玠 | accepted |
| other | p_GrqDC35rqQLHh6KATgrzMj | 王瑜 | accepted |
| other | p_MG9BJcTnRYy7oqKWnx7Hyg | 王彥 | accepted |
| other | p_aBHAdFbb1fkaQCkqWLPDJg | 王璽 | accepted |
| other | p_cFedZB76AQZpjakNEZjEkd | 王琇 | accepted |
| other | p_gmqrGvGzDPv1ATq8M2VNE6 | 王現 | accepted |
| other | p_iHoD5FZnf6MNjQYPVRJjoR | 王瑞 | accepted |
| other | p_rhxJkneEWB8jm8b59umBtT | 王珦 | accepted |
| other | p_tmF5xrpBms9iT9QL5bH6SF | 王瑄 | accepted |
| other | p_xCUH2Emd6jxqrPz2wMXJZx | 王瑁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珙（CBDB 260251）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260251&o=json)
- [中国历代人物传记资料库：王玠（CBDB 260249）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260249&o=json)
- [中国历代人物传记资料库：王瑁（CBDB 260241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260241&o=json)
- [中国历代人物传记资料库：王樸（CBDB 260232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260232&o=json)
- [中国历代人物传记资料库：王卿（CBDB 260243）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260243&o=json)
- [中国历代人物传记资料库：王瑞（CBDB 260246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260246&o=json)
- [中国历代人物传记资料库：王璽（CBDB 260240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260240&o=json)
- [中国历代人物传记资料库：王現（CBDB 260244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260244&o=json)
- [中国历代人物传记资料库：王珦（CBDB 260248）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260248&o=json)
- [中国历代人物传记资料库：王琇（CBDB 260250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260250&o=json)
- [中国历代人物传记资料库：王瑄（CBDB 260239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260239&o=json)
- [中国历代人物传记资料库：王玹（CBDB 200596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200596&o=json)
- [中国历代人物传记资料库：王彥（CBDB 260242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260242&o=json)
- [中国历代人物传记资料库：王瑜（CBDB 260238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260238&o=json)
- [中国历代人物传记资料库：王瑀（CBDB 260247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260247&o=json)
- [中国历代人物传记资料库：王豫（CBDB 260235）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260235&o=json)
- [中国历代人物传记资料库：王佐（CBDB 260233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260233&o=json)
