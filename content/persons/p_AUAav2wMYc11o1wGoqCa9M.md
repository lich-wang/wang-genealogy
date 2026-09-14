---
schema: wang-person/v1
id: p_AUAav2wMYc11o1wGoqCa9M
status: active
merged_into: null
display_name: 王沂
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D2jEo9Cjaj4uiq8f3dcfGS
        subject_person_id: p_AUAav2wMYc11o1wGoqCa9M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QT5Hk6mKyryXrqbj4SX3Kz
          claim_id: c_D2jEo9Cjaj4uiq8f3dcfGS
          source_id: s_7sKxut838DNA7k1qTDbBK1
          stance: supports
          locator: CBDB:126526
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126526）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2sN4TnGN9ec7x5METH7k1d
        subject_person_id: p_AUAav2wMYc11o1wGoqCa9M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沂，明人物。明清進士進士，籍贯武進，身份为孝子/孝女，入仕進士。（中国历代人物传记资料库 CBDB 126526）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4G8t8FfJl3kOyIobJ4l9Tg
          claim_id: c_2sN4TnGN9ec7x5METH7k1d
          source_id: s_7sKxut838DNA7k1qTDbBK1
          stance: supports
          locator: CBDB:126526
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
      object_person:
        id: p_MiT45BEZABeDdxC6DUoAF7
        status: active
        display_name: 王㒜
        merged_into_person_id: null
    - claim:
        id: c_LAIC9Sl5vaAK3w__VnFXi0
        subject_person_id: p_Zs5gecTe439MQSMXdKdr5j
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
        - id: cs_6Rq_7SyCYqH4WT05XzhFMA
          claim_id: c_LAIC9Sl5vaAK3w__VnFXi0
          source_id: s_7sKxut838DNA7k1qTDbBK1
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Zs5gecTe439MQSMXdKdr5j
        status: active
        display_name: 王㵰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_gNzMA10zqM3mWLE9G1sZwf
        subject_person_id: p_AUAav2wMYc11o1wGoqCa9M
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ikbCC8MsJXPVyBkRJmpPq8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uobKjj1Jmf1oxVGH8tTMXr
          claim_id: c_gNzMA10zqM3mWLE9G1sZwf
          source_id: s_3PHH7BnT8eZ2mrUwVGHHMg
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3PHH7BnT8eZ2mrUwVGHHMg
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(王沂妻)（CBDB 247648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247648&o=json
            external_identifier: CBDB:247648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ikbCC8MsJXPVyBkRJmpPq8
        status: active
        display_name: 楊氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_bd3bBOYtYGLFhn6pjQnN9b
        subject_person_id: p_pkraRhhFphQavzPodgyG7o
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AUAav2wMYc11o1wGoqCa9M
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_prVut3izybG3Hwu9EzCJOX
          claim_id: c_bd3bBOYtYGLFhn6pjQnN9b
          source_id: s_7sKxut838DNA7k1qTDbBK1
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pkraRhhFphQavzPodgyG7o
        status: active
        display_name: 王友諒
        merged_into_person_id: null
    - claim:
        id: c_zDb8k8ZIcftD2AaU1QoKle
        subject_person_id: p_ytW3PF5bJ7iCcWzAC9C94F
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AUAav2wMYc11o1wGoqCa9M
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q6UhLeik1sCo1Y1nubG9Yh
          claim_id: c_zDb8k8ZIcftD2AaU1QoKle
          source_id: s_7sKxut838DNA7k1qTDbBK1
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ytW3PF5bJ7iCcWzAC9C94F
        status: active
        display_name: 王守正
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_f6E-Ns9Qkhcn0nzpkc4kjo
        subject_person_id: p_5Ej5EPWBbMREeCsTW3vbPt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AUAav2wMYc11o1wGoqCa9M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__GcvfinGoRBdMo8LE4Bufz
          claim_id: c_f6E-Ns9Qkhcn0nzpkc4kjo
          source_id: s_b5AbGq0rWWCXgW66yV1mmw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126526 王沂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_35H3bPJ0sRMJCyTgWLbhIV
        subject_person_id: p_AUAav2wMYc11o1wGoqCa9M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_As86GyXAxxTD7bFJaW2bvJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4jxO_YmOUIB8lcOh6bBD75
          claim_id: c_35H3bPJ0sRMJCyTgWLbhIV
          source_id: s_buE6m_h0NJWu5B5IJMXed1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126526 王沂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_R5Et3PKSiTY3VBIQjc-Gbb
        subject_person_id: p_AUAav2wMYc11o1wGoqCa9M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Ghyq6yCJ1VwFtgR9wA4sxr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KqcT0tguNvIvNI3tOawDic
          claim_id: c_R5Et3PKSiTY3VBIQjc-Gbb
          source_id: s_G8HtGvptPViZMm6znAdvEs
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126526 王沂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_tOYvne1b34p8t-kxM6H-TL
        subject_person_id: p_AUAav2wMYc11o1wGoqCa9M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JG5RASaVF6uFZTx3VQyy5G
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4tHuhh7rMgyqASBj93w181
          claim_id: c_tOYvne1b34p8t-kxM6H-TL
          source_id: s_Mf4Eu1tcX2-quEiBgqxU47
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126526 王沂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_4TnyYP19iC4PbzJfNfuQqA
        subject_person_id: p_AUAav2wMYc11o1wGoqCa9M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PHKyR9zX6kCH9NQv5g9SGp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jiLwo6pS9-VuRimBY_yLTc
          claim_id: c_4TnyYP19iC4PbzJfNfuQqA
          source_id: s_uyPPNH3Wm9-qjhMWVnJNmU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126526 王沂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_rPekT0PNDH4JTYfwbrHXw1
        subject_person_id: p_AUAav2wMYc11o1wGoqCa9M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RasVUjVPSzcYV2X6MLZJ5z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9lJxDwyW__Uu99tDkIYuBZ
          claim_id: c_rPekT0PNDH4JTYfwbrHXw1
          source_id: s_1vkTwmGhwYMqJRaTExqPSI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126526 王沂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_jCHldEkuO1dCQvN2AHg_yH
        subject_person_id: p_AUAav2wMYc11o1wGoqCa9M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nnmZo5H8qjjoxE7BDYUKqP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ykdGmb8DJguoqxjBcxrivM
          claim_id: c_jCHldEkuO1dCQvN2AHg_yH
          source_id: s_B_9m6xLy9WhwM557Dn79QU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126526 王沂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_TCiVHVItsgjZKPl4QTnwFU
        subject_person_id: p_AUAav2wMYc11o1wGoqCa9M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zM2JvkUhjusXJU98V8wqpE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CTI310_ej8DqVXQADsGw10
          claim_id: c_TCiVHVItsgjZKPl4QTnwFU
          source_id: s_KEKZAj9EwVKMbXgFFo0E0a
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126526 王沂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王沂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沂 | accepted |
| bio.summary | 王沂，明人物。明清進士進士，籍贯武進，身份为孝子/孝女，入仕進士。（中国历代人物传记资料库 CBDB 126526） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MiT45BEZABeDdxC6DUoAF7 | 王㒜 | accepted |
| parents | p_Zs5gecTe439MQSMXdKdr5j | 王㵰 | accepted |
| spouses | p_ikbCC8MsJXPVyBkRJmpPq8 | 楊氏 | accepted |
| ancestors | p_pkraRhhFphQavzPodgyG7o | 王友諒 | accepted |
| ancestors | p_ytW3PF5bJ7iCcWzAC9C94F | 王守正 | accepted |
| other | p_5Ej5EPWBbMREeCsTW3vbPt | 王潔 | accepted |
| other | p_As86GyXAxxTD7bFJaW2bvJ | 王清 | accepted |
| other | p_Ghyq6yCJ1VwFtgR9wA4sxr | 王洛 | accepted |
| other | p_JG5RASaVF6uFZTx3VQyy5G | 王濟 | accepted |
| other | p_PHKyR9zX6kCH9NQv5g9SGp | 王深 | accepted |
| other | p_RasVUjVPSzcYV2X6MLZJ5z | 王浩 | accepted |
| other | p_nnmZo5H8qjjoxE7BDYUKqP | 王澄 | accepted |
| other | p_zM2JvkUhjusXJU98V8wqpE | 王淇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澄（CBDB 247649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247649&o=json)
- [中国历代人物传记资料库：王浩（CBDB 247655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247655&o=json)
- [中国历代人物传记资料库：王濟（CBDB 247650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247650&o=json)
- [中国历代人物传记资料库：王潔（CBDB 247652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247652&o=json)
- [中国历代人物传记资料库：王洛（CBDB 247656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247656&o=json)
- [中国历代人物传记资料库：王淇（CBDB 247653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247653&o=json)
- [中国历代人物传记资料库：王清（CBDB 247651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247651&o=json)
- [中国历代人物传记资料库：王深（CBDB 247657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247657&o=json)
- [中国历代人物传记资料库：王沂（CBDB 126526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126526&o=json)
- [中国历代人物传记资料库：楊氏(王沂妻)（CBDB 247648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247648&o=json)
