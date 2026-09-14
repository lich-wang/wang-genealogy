---
schema: wang-person/v1
id: p_MiT45BEZABeDdxC6DUoAF7
status: active
merged_into: null
display_name: 王㒜
revision: 17
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hBt21LYdKzZYPZ3Vg5oUJ6
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㒜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b1dk2PAQaGrdZrNoe74xz7
          claim_id: c_hBt21LYdKzZYPZ3Vg5oUJ6
          source_id: s_J1u68EVEk9xSd6Ey8UHr4e
          stance: supports
          locator: CBDB:126815
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126815）
          source: &a1
            id: s_J1u68EVEk9xSd6Ey8UHr4e
            source_type: api_record
            title: 中国历代人物传记资料库：王㒜（CBDB 126815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126815&o=json
            external_identifier: CBDB:126815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.226Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_11tuBaBu9S4gDr6687jp3h
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1424年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LM8LQ9m5hY1EJRfJMsQqYy
          claim_id: c_11tuBaBu9S4gDr6687jp3h
          source_id: s_J1u68EVEk9xSd6Ey8UHr4e
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
        id: c_3VeQ9JEpAGq81S8U2jB6qL
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1495年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bQ54rA3XnRELgPa9StGCn9
          claim_id: c_3VeQ9JEpAGq81S8U2jB6qL
          source_id: s_J1u68EVEk9xSd6Ey8UHr4e
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
        id: c_c6eP5jUw458yh7pjvNo18b
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㒜（1424年—1495年），明人物。籍贯武進，身份为孝子/孝女，入仕進士，曾任編修、東宮講讀官、國子祭酒。（中国历代人物传记资料库 CBDB 126815）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v8hYLQRG4LgMDhCQscCFgm
          claim_id: c_c6eP5jUw458yh7pjvNo18b
          source_id: s_J1u68EVEk9xSd6Ey8UHr4e
          stance: supports
          locator: CBDB:126815
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__DVcSrWOjQ9GeGBuk2gv09
        subject_person_id: p_4PC2JzRydaXykTknqoVMo5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MiT45BEZABeDdxC6DUoAF7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zz1uuTGr4ZfydGU_PcJviT
          claim_id: c__DVcSrWOjQ9GeGBuk2gv09
          source_id: s_2e42p38nJLkAsMYS2UdA8i
          stance: supports
          locator: 江南通志，lgid=65779：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2e42p38nJLkAsMYS2UdA8i
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 126573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126573&o=json
            external_identifier: CBDB:126573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.033Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4PC2JzRydaXykTknqoVMo5
        status: active
        display_name: 王忠
        merged_into_person_id: null
  children:
    - claim:
        id: c_Lv_Mh59dmxxhIbyMxQ0HII
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AUAav2wMYc11o1wGoqCa9M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SCmbhAnbS2CXPr1v-qHhQL
          claim_id: c_Lv_Mh59dmxxhIbyMxQ0HII
          source_id: s_7sKxut838DNA7k1qTDbBK1
          stance: supports
          locator: 江南通志，lgid=65779：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7sKxut838DNA7k1qTDbBK1
            source_type: api_record
            title: 中国历代人物传记资料库：王沂（CBDB 126526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126526&o=json
            external_identifier: CBDB:126526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AUAav2wMYc11o1wGoqCa9M
        status: active
        display_name: 王沂
        merged_into_person_id: null
    - claim:
        id: c_Uv3483i2GnbDoY5cIXz0Ki
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5Ej5EPWBbMREeCsTW3vbPt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G17UhXj6nlAjHcaPl4jY44
          claim_id: c_Uv3483i2GnbDoY5cIXz0Ki
          source_id: s_b5AbGq0rWWCXgW66yV1mmw
          stance: supports
          locator: CBDB：兄弟 王沂（126526）之父／母 王㒜
          quotation: null
          interpretation_note: 由兄弟关系推断：王潔 与 王沂 为同胞（CBDB 记「兄」），王沂 之父／母即 王潔 之父／母。
          source:
            id: s_b5AbGq0rWWCXgW66yV1mmw
            source_type: api_record
            title: 中国历代人物传记资料库：王潔（CBDB 247652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247652&o=json
            external_identifier: CBDB:247652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5Ej5EPWBbMREeCsTW3vbPt
        status: active
        display_name: 王潔
        merged_into_person_id: null
    - claim:
        id: c_gWHM5l1gT4B0_E8m4oU4tE
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_As86GyXAxxTD7bFJaW2bvJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5N3Wkp0CdpfmTDdjHsK4he
          claim_id: c_gWHM5l1gT4B0_E8m4oU4tE
          source_id: s_buE6m_h0NJWu5B5IJMXed1
          stance: supports
          locator: CBDB：兄弟 王沂（126526）之父／母 王㒜
          quotation: null
          interpretation_note: 由兄弟关系推断：王清 与 王沂 为同胞（CBDB 记「兄」），王沂 之父／母即 王清 之父／母。
          source:
            id: s_buE6m_h0NJWu5B5IJMXed1
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 247651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247651&o=json
            external_identifier: CBDB:247651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_As86GyXAxxTD7bFJaW2bvJ
        status: active
        display_name: 王清
        merged_into_person_id: null
    - claim:
        id: c_hg9cAv3gjxJmsQonYqdwQt
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ghyq6yCJ1VwFtgR9wA4sxr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wAit3ezc2cZaZEPiCOmLpS
          claim_id: c_hg9cAv3gjxJmsQonYqdwQt
          source_id: s_G8HtGvptPViZMm6znAdvEs
          stance: supports
          locator: CBDB：兄弟 王沂（126526）之父／母 王㒜
          quotation: null
          interpretation_note: 由兄弟关系推断：王洛 与 王沂 为同胞（CBDB 记「兄」），王沂 之父／母即 王洛 之父／母。
          source:
            id: s_G8HtGvptPViZMm6znAdvEs
            source_type: api_record
            title: 中国历代人物传记资料库：王洛（CBDB 247656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247656&o=json
            external_identifier: CBDB:247656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ghyq6yCJ1VwFtgR9wA4sxr
        status: active
        display_name: 王洛
        merged_into_person_id: null
    - claim:
        id: c_cj4aeiIuyhGMDMt2_ZR-3U
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JG5RASaVF6uFZTx3VQyy5G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8WiKXw7oNahPP38IW-PWt2
          claim_id: c_cj4aeiIuyhGMDMt2_ZR-3U
          source_id: s_Mf4Eu1tcX2-quEiBgqxU47
          stance: supports
          locator: CBDB：兄弟 王沂（126526）之父／母 王㒜
          quotation: null
          interpretation_note: 由兄弟关系推断：王濟 与 王沂 为同胞（CBDB 记「兄」），王沂 之父／母即 王濟 之父／母。
          source:
            id: s_Mf4Eu1tcX2-quEiBgqxU47
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 247650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247650&o=json
            external_identifier: CBDB:247650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JG5RASaVF6uFZTx3VQyy5G
        status: active
        display_name: 王濟
        merged_into_person_id: null
    - claim:
        id: c_oCpJishW-YnyrX9xdPXHGy
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PHKyR9zX6kCH9NQv5g9SGp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nLtiOYkWUQ_cJSo4YN7lZ8
          claim_id: c_oCpJishW-YnyrX9xdPXHGy
          source_id: s_uyPPNH3Wm9-qjhMWVnJNmU
          stance: supports
          locator: CBDB：兄弟 王沂（126526）之父／母 王㒜
          quotation: null
          interpretation_note: 由兄弟关系推断：王深 与 王沂 为同胞（CBDB 记「兄」），王沂 之父／母即 王深 之父／母。
          source:
            id: s_uyPPNH3Wm9-qjhMWVnJNmU
            source_type: api_record
            title: 中国历代人物传记资料库：王深（CBDB 247657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247657&o=json
            external_identifier: CBDB:247657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PHKyR9zX6kCH9NQv5g9SGp
        status: active
        display_name: 王深
        merged_into_person_id: null
    - claim:
        id: c_vpm5x7bEeABHtpRKQXmEEF
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RasVUjVPSzcYV2X6MLZJ5z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WFYNdhBTnKKZBoKVU9Vtv1
          claim_id: c_vpm5x7bEeABHtpRKQXmEEF
          source_id: s_1vkTwmGhwYMqJRaTExqPSI
          stance: supports
          locator: CBDB：兄弟 王沂（126526）之父／母 王㒜
          quotation: null
          interpretation_note: 由兄弟关系推断：王浩 与 王沂 为同胞（CBDB 记「兄」），王沂 之父／母即 王浩 之父／母。
          source:
            id: s_1vkTwmGhwYMqJRaTExqPSI
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 247655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247655&o=json
            external_identifier: CBDB:247655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RasVUjVPSzcYV2X6MLZJ5z
        status: active
        display_name: 王浩
        merged_into_person_id: null
    - claim:
        id: c_17QEHXttIKgyhWuuV_GUvr
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nnmZo5H8qjjoxE7BDYUKqP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cS8wliOniwNI8uaA_y6E0_
          claim_id: c_17QEHXttIKgyhWuuV_GUvr
          source_id: s_B_9m6xLy9WhwM557Dn79QU
          stance: supports
          locator: CBDB：兄弟 王沂（126526）之父／母 王㒜
          quotation: null
          interpretation_note: 由兄弟关系推断：王澄 与 王沂 为同胞（CBDB 记「弟」），王沂 之父／母即 王澄 之父／母。
          source:
            id: s_B_9m6xLy9WhwM557Dn79QU
            source_type: api_record
            title: 中国历代人物传记资料库：王澄（CBDB 247649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247649&o=json
            external_identifier: CBDB:247649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nnmZo5H8qjjoxE7BDYUKqP
        status: active
        display_name: 王澄
        merged_into_person_id: null
    - claim:
        id: c_tJS7c5v77eWRZLcoZrrFsA
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zM2JvkUhjusXJU98V8wqpE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xMudCKOjCuv68I374HSmVi
          claim_id: c_tJS7c5v77eWRZLcoZrrFsA
          source_id: s_KEKZAj9EwVKMbXgFFo0E0a
          stance: supports
          locator: CBDB：兄弟 王沂（126526）之父／母 王㒜
          quotation: null
          interpretation_note: 由兄弟关系推断：王淇 与 王沂 为同胞（CBDB 记「兄」），王沂 之父／母即 王淇 之父／母。
          source:
            id: s_KEKZAj9EwVKMbXgFFo0E0a
            source_type: api_record
            title: 中国历代人物传记资料库：王淇（CBDB 247653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247653&o=json
            external_identifier: CBDB:247653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zM2JvkUhjusXJU98V8wqpE
        status: active
        display_name: 王淇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_L3jO5p1829JUqrK-5su2-w
        subject_person_id: p_K5rehYthr86ezK2PwWtEVK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MiT45BEZABeDdxC6DUoAF7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KXJsiLtflpMnMVPitMiiMx
          claim_id: c_L3jO5p1829JUqrK-5su2-w
          source_id: s_PrDhgdLUgyCMPTre2MNTjU
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第一甲第三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PrDhgdLUgyCMPTre2MNTjU
            source_type: api_record
            title: 中国历代人物传记资料库：王德甫（CBDB 244629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244629&o=json
            external_identifier: CBDB:244629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.034Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_K5rehYthr86ezK2PwWtEVK
        status: active
        display_name: 王德甫
        merged_into_person_id: null
    - claim:
        id: c_LKU0TKnjgUp3SEdGbRO7XV
        subject_person_id: p_Q5DgCHGiiyjLBHo197jWHB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MiT45BEZABeDdxC6DUoAF7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ofUcnfRQMa4kF4R0dJu17J
          claim_id: c_LKU0TKnjgUp3SEdGbRO7XV
          source_id: s_qBSN3v1b2zb2zCj254bq9w
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第一甲第三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qBSN3v1b2zb2zCj254bq9w
            source_type: api_record
            title: 中国历代人物传记资料库：王友諒（CBDB 244741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244741&o=json
            external_identifier: CBDB:244741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.039Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Q5DgCHGiiyjLBHo197jWHB
        status: active
        display_name: 王友諒
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_BRy0_0LJCGn-_yF-OMUr_9
        subject_person_id: p_Az5Rxcc1h3eSbemqTjYy8x
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MiT45BEZABeDdxC6DUoAF7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rq4oa6ykAsl-0h2ph7DmJb
          claim_id: c_BRy0_0LJCGn-_yF-OMUr_9
          source_id: s_6hAds4Olpj5iEGGbnkCMg_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126815 王㒜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6hAds4Olpj5iEGGbnkCMg_
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 245852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245852&o=json
            external_identifier: CBDB:245852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Az5Rxcc1h3eSbemqTjYy8x
        status: active
        display_name: 王儒
        merged_into_person_id: null
    - claim:
        id: c_xVn5fK71AeI0ewnUtgyKTa
        subject_person_id: p_FZXqNCAYwxbaNN1ABDTDqt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MiT45BEZABeDdxC6DUoAF7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OcnRPVyROP1KwHbiXGIaIX
          claim_id: c_xVn5fK71AeI0ewnUtgyKTa
          source_id: s_pHUVApfJQ_WxyGTDc-u7-l
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126815 王㒜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pHUVApfJQ_WxyGTDc-u7-l
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 245518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245518&o=json
            external_identifier: CBDB:245518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FZXqNCAYwxbaNN1ABDTDqt
        status: active
        display_name: 王倫
        merged_into_person_id: null
    - claim:
        id: c_YMXeB7_AGr2hMDEuvXRO4-
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UvUJEs7qb7FsNRsMJazCGa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__SUkflPruDpJzIIjTYYJr3
          claim_id: c_YMXeB7_AGr2hMDEuvXRO4-
          source_id: s_EVT0rH-o7OHia_sjRuhHMy
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126815 王㒜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EVT0rH-o7OHia_sjRuhHMy
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 245296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245296&o=json
            external_identifier: CBDB:245296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UvUJEs7qb7FsNRsMJazCGa
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_pzQmeYcalex5s0brJmPiMS
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwvPWjotHBdriKp9kFA9Nq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KCXo_utM1Dq6eHk1tQ-mOK
          claim_id: c_pzQmeYcalex5s0brJmPiMS
          source_id: s_p62BAug1juSlD_lot1IdiU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126815 王㒜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_p62BAug1juSlD_lot1IdiU
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 245629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245629&o=json
            external_identifier: CBDB:245629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nwvPWjotHBdriKp9kFA9Nq
        status: active
        display_name: 王侃
        merged_into_person_id: null
---

# 王㒜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王㒜 | accepted |
| birth.date | 1424年 | accepted |
| death.date | 1495年 | accepted |
| bio.summary | 王㒜（1424年—1495年），明人物。籍贯武進，身份为孝子/孝女，入仕進士，曾任編修、東宮講讀官、國子祭酒。（中国历代人物传记资料库 CBDB 126815） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4PC2JzRydaXykTknqoVMo5 | 王忠 | accepted |
| children | p_AUAav2wMYc11o1wGoqCa9M | 王沂 | accepted |
| children | p_5Ej5EPWBbMREeCsTW3vbPt | 王潔 | accepted |
| children | p_As86GyXAxxTD7bFJaW2bvJ | 王清 | accepted |
| children | p_Ghyq6yCJ1VwFtgR9wA4sxr | 王洛 | accepted |
| children | p_JG5RASaVF6uFZTx3VQyy5G | 王濟 | accepted |
| children | p_PHKyR9zX6kCH9NQv5g9SGp | 王深 | accepted |
| children | p_RasVUjVPSzcYV2X6MLZJ5z | 王浩 | accepted |
| children | p_nnmZo5H8qjjoxE7BDYUKqP | 王澄 | accepted |
| children | p_zM2JvkUhjusXJU98V8wqpE | 王淇 | accepted |
| ancestors | p_K5rehYthr86ezK2PwWtEVK | 王德甫 | accepted |
| ancestors | p_Q5DgCHGiiyjLBHo197jWHB | 王友諒 | accepted |
| other | p_Az5Rxcc1h3eSbemqTjYy8x | 王儒 | accepted |
| other | p_FZXqNCAYwxbaNN1ABDTDqt | 王倫 | accepted |
| other | p_UvUJEs7qb7FsNRsMJazCGa | 王俊 | accepted |
| other | p_nwvPWjotHBdriKp9kFA9Nq | 王侃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澄（CBDB 247649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247649&o=json)
- [中国历代人物传记资料库：王德甫（CBDB 244629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244629&o=json)
- [中国历代人物传记资料库：王浩（CBDB 247655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247655&o=json)
- [中国历代人物传记资料库：王濟（CBDB 247650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247650&o=json)
- [中国历代人物传记资料库：王潔（CBDB 247652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247652&o=json)
- [中国历代人物传记资料库：王俊（CBDB 245296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245296&o=json)
- [中国历代人物传记资料库：王侃（CBDB 245629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245629&o=json)
- [中国历代人物传记资料库：王倫（CBDB 245518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245518&o=json)
- [中国历代人物传记资料库：王洛（CBDB 247656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247656&o=json)
- [中国历代人物传记资料库：王淇（CBDB 247653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247653&o=json)
- [中国历代人物传记资料库：王清（CBDB 247651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247651&o=json)
- [中国历代人物传记资料库：王儒（CBDB 245852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245852&o=json)
- [中国历代人物传记资料库：王深（CBDB 247657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247657&o=json)
- [中国历代人物传记资料库：王沂（CBDB 126526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126526&o=json)
- [中国历代人物传记资料库：王友諒（CBDB 244741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244741&o=json)
- [中国历代人物传记资料库：王忠（CBDB 126573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126573&o=json)
- [中国历代人物传记资料库：王㒜（CBDB 126815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126815&o=json)
