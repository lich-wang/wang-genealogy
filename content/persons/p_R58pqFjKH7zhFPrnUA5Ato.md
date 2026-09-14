---
schema: wang-person/v1
id: p_R58pqFjKH7zhFPrnUA5Ato
status: active
merged_into: null
display_name: 王楷
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gRmDe7TKJkZNknhnzgm3FG
        subject_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EfaoeoXBbfhM37SAe9i1yr
          claim_id: c_gRmDe7TKJkZNknhnzgm3FG
          source_id: s_WTGySF1Gh9mhG6G21h1d2r
          stance: supports
          locator: CBDB:126753
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126753）
          source: &a1
            id: s_WTGySF1Gh9mhG6G21h1d2r
            source_type: api_record
            title: 中国历代人物传记资料库：王楷（CBDB 126753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126753&o=json
            external_identifier: CBDB:126753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.177Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KHgn8vG24RyWrZZXexBWkc
        subject_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楷，明人物。明清進士進士，籍贯永康，入仕進士，曾任府推官。（中国历代人物传记资料库 CBDB 126753）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_04UjqeVXouAGtOEoVU55Ze
          claim_id: c_KHgn8vG24RyWrZZXexBWkc
          source_id: s_WTGySF1Gh9mhG6G21h1d2r
          stance: supports
          locator: CBDB:126753
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mDCWnUXKbFUIW0AyD74MeW
        subject_person_id: p_4TKB9CF1Pcy4hP4NGvXiGk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6aG-g_jwLQ06H7FzKHy5RU
          claim_id: c_mDCWnUXKbFUIW0AyD74MeW
          source_id: s_Hrb1yr3ZC2CAqEgJVv6zv4
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Hrb1yr3ZC2CAqEgJVv6zv4
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 320121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320121&o=json
            external_identifier: CBDB:320121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.048Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4TKB9CF1Pcy4hP4NGvXiGk
        status: active
        display_name: 王淮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Drxri5hZDZBSlbk1lKbyqL
        subject_person_id: p_6kY5sYCXypt3u98Ntpz45B
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b5e5wwe-v3lhJWZwJw-pRa
          claim_id: c_Drxri5hZDZBSlbk1lKbyqL
          source_id: s_zabaEGBW52SVHtkvWq5pNw
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zabaEGBW52SVHtkvWq5pNw
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 320120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320120&o=json
            external_identifier: CBDB:320120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.048Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6kY5sYCXypt3u98Ntpz45B
        status: active
        display_name: 王綸
        merged_into_person_id: null
    - claim:
        id: c_fsuwQnuua2WwwRLzEAbTYH
        subject_person_id: p_un89UE3uS9c7AraXePBzQd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JCIRR5HvPZKrnqaL5A7DyL
          claim_id: c_fsuwQnuua2WwwRLzEAbTYH
          source_id: s_GDhZp4yTa8qY5cCcLu4ocm
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GDhZp4yTa8qY5cCcLu4ocm
            source_type: api_record
            title: 中国历代人物传记资料库：王乾（CBDB 320119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320119&o=json
            external_identifier: CBDB:320119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_un89UE3uS9c7AraXePBzQd
        status: active
        display_name: 王乾
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_t4pTxqM83b8Dd10i5rNAOZ
        subject_person_id: p_3stFDkMB5KFsJBGCcP93yg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jpQcaox80yJhLL8mduzbNL
          claim_id: c_t4pTxqM83b8Dd10i5rNAOZ
          source_id: s_KPP37cou9SL4nqEPFHu3TU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126753 王楷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KPP37cou9SL4nqEPFHu3TU
            source_type: api_record
            title: 中国历代人物传记资料库：王樸（CBDB 320133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320133&o=json
            external_identifier: CBDB:320133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3stFDkMB5KFsJBGCcP93yg
        status: active
        display_name: 王樸
        merged_into_person_id: null
    - claim:
        id: c_YozrEJc9DrLoyZYhptp5UE
        subject_person_id: p_5ECZrP9D8YgakXRBwqEpHn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_foG3M-GSI_-wyCGddHZ7MS
          claim_id: c_YozrEJc9DrLoyZYhptp5UE
          source_id: s_npfXmZB4u5mNQz2lmkN_BE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126753 王楷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_npfXmZB4u5mNQz2lmkN_BE
            source_type: api_record
            title: 中国历代人物传记资料库：王彬（CBDB 320128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320128&o=json
            external_identifier: CBDB:320128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5ECZrP9D8YgakXRBwqEpHn
        status: active
        display_name: 王彬
        merged_into_person_id: null
    - claim:
        id: c_fhaWOymi0ycNxkivayis_o
        subject_person_id: p_6177H18t82aEaiW6bfedH6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hLH1b_HYvR8grqVPshcPxO
          claim_id: c_fhaWOymi0ycNxkivayis_o
          source_id: s_8wZFSPXHlZjvefzFpf9C4C
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126753 王楷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8wZFSPXHlZjvefzFpf9C4C
            source_type: api_record
            title: 中国历代人物传记资料库：王權（CBDB 320132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320132&o=json
            external_identifier: CBDB:320132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6177H18t82aEaiW6bfedH6
        status: active
        display_name: 王權
        merged_into_person_id: null
    - claim:
        id: c_GF0t-tebf3iWShi4ScUZ9m
        subject_person_id: p_KEXGqDYCH8uTiJN26wbnqL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hoWo8m1Yjiviu5ekbF4HEo
          claim_id: c_GF0t-tebf3iWShi4ScUZ9m
          source_id: s_YrxUjtkz5kSR3QrINPut74
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126753 王楷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YrxUjtkz5kSR3QrINPut74
            source_type: api_record
            title: 中国历代人物传记资料库：王楠（CBDB 320131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320131&o=json
            external_identifier: CBDB:320131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KEXGqDYCH8uTiJN26wbnqL
        status: active
        display_name: 王楠
        merged_into_person_id: null
    - claim:
        id: c_I7CX161QLyPX-7cijFxKcF
        subject_person_id: p_KooGGHRrgfCTyHyEi2ixKC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zBBS54B9D18XG-r_JCmoGJ
          claim_id: c_I7CX161QLyPX-7cijFxKcF
          source_id: s_LN4girug6XFIWej5-CboWe
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126753 王楷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LN4girug6XFIWej5-CboWe
            source_type: api_record
            title: 中国历代人物传记资料库：王栈（CBDB 320130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320130&o=json
            external_identifier: CBDB:320130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KooGGHRrgfCTyHyEi2ixKC
        status: active
        display_name: 王栈
        merged_into_person_id: null
    - claim:
        id: c_fnroA7DR02MZd9SYAbm2-i
        subject_person_id: p_NXHmb1pQmXHNkNCQNQX1DH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GHHbwoYWQL5QaVh8m02R8n
          claim_id: c_fnroA7DR02MZd9SYAbm2-i
          source_id: s_PO-JRh0yFvgbput6ReJlue
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126753 王楷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PO-JRh0yFvgbput6ReJlue
            source_type: api_record
            title: 中国历代人物传记资料库：王橋（CBDB 320127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320127&o=json
            external_identifier: CBDB:320127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NXHmb1pQmXHNkNCQNQX1DH
        status: active
        display_name: 王橋
        merged_into_person_id: null
    - claim:
        id: c_DwNxZGc5EYBSCxiqcIQVBi
        subject_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iP4yKPZdLXFDra4a93FyV8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lCkO9OVQUbsgLlfgvmNeqW
          claim_id: c_DwNxZGc5EYBSCxiqcIQVBi
          source_id: s_iTPrctbA46815lxrVIF5og
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126753 王楷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iTPrctbA46815lxrVIF5og
            source_type: api_record
            title: 中国历代人物传记资料库：王梧（CBDB 320126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320126&o=json
            external_identifier: CBDB:320126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iP4yKPZdLXFDra4a93FyV8
        status: active
        display_name: 王梧
        merged_into_person_id: null
    - claim:
        id: c_AGvHy8gBXixGA5DFOKiWSh
        subject_person_id: p_R58pqFjKH7zhFPrnUA5Ato
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yA9hE5L129reKF3PHWaEJp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DWQycylu-KIQWeRZc4K4Xd
          claim_id: c_AGvHy8gBXixGA5DFOKiWSh
          source_id: s_Pu4VQoKF5oUCq_vKvgDjnT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126753 王楷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Pu4VQoKF5oUCq_vKvgDjnT
            source_type: api_record
            title: 中国历代人物传记资料库：王杞（CBDB 320125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320125&o=json
            external_identifier: CBDB:320125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yA9hE5L129reKF3PHWaEJp
        status: active
        display_name: 王杞
        merged_into_person_id: null
---

# 王楷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楷 | accepted |
| bio.summary | 王楷，明人物。明清進士進士，籍贯永康，入仕進士，曾任府推官。（中国历代人物传记资料库 CBDB 126753） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4TKB9CF1Pcy4hP4NGvXiGk | 王淮 | accepted |
| ancestors | p_6kY5sYCXypt3u98Ntpz45B | 王綸 | accepted |
| ancestors | p_un89UE3uS9c7AraXePBzQd | 王乾 | accepted |
| other | p_3stFDkMB5KFsJBGCcP93yg | 王樸 | accepted |
| other | p_5ECZrP9D8YgakXRBwqEpHn | 王彬 | accepted |
| other | p_6177H18t82aEaiW6bfedH6 | 王權 | accepted |
| other | p_KEXGqDYCH8uTiJN26wbnqL | 王楠 | accepted |
| other | p_KooGGHRrgfCTyHyEi2ixKC | 王栈 | accepted |
| other | p_NXHmb1pQmXHNkNCQNQX1DH | 王橋 | accepted |
| other | p_iP4yKPZdLXFDra4a93FyV8 | 王梧 | accepted |
| other | p_yA9hE5L129reKF3PHWaEJp | 王杞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彬（CBDB 320128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320128&o=json)
- [中国历代人物传记资料库：王淮（CBDB 320121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320121&o=json)
- [中国历代人物传记资料库：王楷（CBDB 126753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126753&o=json)
- [中国历代人物传记资料库：王綸（CBDB 320120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320120&o=json)
- [中国历代人物传记资料库：王楠（CBDB 320131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320131&o=json)
- [中国历代人物传记资料库：王樸（CBDB 320133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320133&o=json)
- [中国历代人物传记资料库：王杞（CBDB 320125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320125&o=json)
- [中国历代人物传记资料库：王乾（CBDB 320119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320119&o=json)
- [中国历代人物传记资料库：王橋（CBDB 320127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320127&o=json)
- [中国历代人物传记资料库：王權（CBDB 320132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320132&o=json)
- [中国历代人物传记资料库：王梧（CBDB 320126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320126&o=json)
- [中国历代人物传记资料库：王栈（CBDB 320130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320130&o=json)
