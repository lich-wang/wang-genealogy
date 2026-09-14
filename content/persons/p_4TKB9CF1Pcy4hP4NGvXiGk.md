---
schema: wang-person/v1
id: p_4TKB9CF1Pcy4hP4NGvXiGk
status: active
merged_into: null
display_name: 王淮
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iJn7F2MPCUYbNPE3q8yXPH
        subject_person_id: p_4TKB9CF1Pcy4hP4NGvXiGk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VC4Ktvpv113LnNZHQtHGTs
          claim_id: c_iJn7F2MPCUYbNPE3q8yXPH
          source_id: s_Hrb1yr3ZC2CAqEgJVv6zv4
          stance: supports
          locator: CBDB:320121
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320121）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k6BQJeq77BHffTd2rLES22
        subject_person_id: p_4TKB9CF1Pcy4hP4NGvXiGk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮，明人物。嘉靖三十五年進士，籍贯永康，曾任壽官。（中国历代人物传记资料库 CBDB 320121）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z0hOe-z4OEYFk-yHsT25zQ
          claim_id: c_k6BQJeq77BHffTd2rLES22
          source_id: s_Hrb1yr3ZC2CAqEgJVv6zv4
          stance: supports
          locator: CBDB:320121
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_R58pqFjKH7zhFPrnUA5Ato
        status: active
        display_name: 王楷
        merged_into_person_id: null
    - claim:
        id: c_KeQTh6iWNPsQr48wq6EqkV
        subject_person_id: p_4TKB9CF1Pcy4hP4NGvXiGk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3stFDkMB5KFsJBGCcP93yg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iBatEKRv3nhZNzzmMmIKfd
          claim_id: c_KeQTh6iWNPsQr48wq6EqkV
          source_id: s_KPP37cou9SL4nqEPFHu3TU
          stance: supports
          locator: CBDB：兄弟 王楷（126753）之父／母 王淮
          quotation: null
          interpretation_note: 由兄弟关系推断：王樸 与 王楷 为同胞（CBDB 记「兄」），王楷 之父／母即 王樸 之父／母。
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
        id: c_5KRmJ5T_pv9-KVgLB5QkjM
        subject_person_id: p_4TKB9CF1Pcy4hP4NGvXiGk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5ECZrP9D8YgakXRBwqEpHn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aKJxOVBMYbZperqgk5puSv
          claim_id: c_5KRmJ5T_pv9-KVgLB5QkjM
          source_id: s_npfXmZB4u5mNQz2lmkN_BE
          stance: supports
          locator: CBDB：兄弟 王楷（126753）之父／母 王淮
          quotation: null
          interpretation_note: 由兄弟关系推断：王彬 与 王楷 为同胞（CBDB 记「兄」），王楷 之父／母即 王彬 之父／母。
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
        id: c_hZn1GThYbC7-DT-hplA268
        subject_person_id: p_4TKB9CF1Pcy4hP4NGvXiGk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6177H18t82aEaiW6bfedH6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8NoiA5nFDRqdXycD_fEWjk
          claim_id: c_hZn1GThYbC7-DT-hplA268
          source_id: s_8wZFSPXHlZjvefzFpf9C4C
          stance: supports
          locator: CBDB：兄弟 王楷（126753）之父／母 王淮
          quotation: null
          interpretation_note: 由兄弟关系推断：王權 与 王楷 为同胞（CBDB 记「兄」），王楷 之父／母即 王權 之父／母。
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
        id: c_3PGS0VROjAMEYggy9DLe5c
        subject_person_id: p_4TKB9CF1Pcy4hP4NGvXiGk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KEXGqDYCH8uTiJN26wbnqL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qeD72IMW3rYFTpz7KiO34W
          claim_id: c_3PGS0VROjAMEYggy9DLe5c
          source_id: s_YrxUjtkz5kSR3QrINPut74
          stance: supports
          locator: CBDB：兄弟 王楷（126753）之父／母 王淮
          quotation: null
          interpretation_note: 由兄弟关系推断：王楠 与 王楷 为同胞（CBDB 记「兄」），王楷 之父／母即 王楠 之父／母。
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
        id: c_F9-PeOEVVA3ADoHYKdqJf8
        subject_person_id: p_4TKB9CF1Pcy4hP4NGvXiGk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KooGGHRrgfCTyHyEi2ixKC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9vnK-cN4QUYGY-SVLE9fL9
          claim_id: c_F9-PeOEVVA3ADoHYKdqJf8
          source_id: s_LN4girug6XFIWej5-CboWe
          stance: supports
          locator: CBDB：兄弟 王楷（126753）之父／母 王淮
          quotation: null
          interpretation_note: 由兄弟关系推断：王栈 与 王楷 为同胞（CBDB 记「兄」），王楷 之父／母即 王栈 之父／母。
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
        id: c_qlYTkfh4kJpFcWPjP4xJm1
        subject_person_id: p_4TKB9CF1Pcy4hP4NGvXiGk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NXHmb1pQmXHNkNCQNQX1DH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_peGfpfiLLT_R_FW_HTw5IL
          claim_id: c_qlYTkfh4kJpFcWPjP4xJm1
          source_id: s_PO-JRh0yFvgbput6ReJlue
          stance: supports
          locator: CBDB：兄弟 王楷（126753）之父／母 王淮
          quotation: null
          interpretation_note: 由兄弟关系推断：王橋 与 王楷 为同胞（CBDB 记「兄」），王楷 之父／母即 王橋 之父／母。
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
        id: c_QmNG_Eem6Z1FLbwKW0Ke1H
        subject_person_id: p_4TKB9CF1Pcy4hP4NGvXiGk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iP4yKPZdLXFDra4a93FyV8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WBJD9-Iy4JxiA66-8HFtoe
          claim_id: c_QmNG_Eem6Z1FLbwKW0Ke1H
          source_id: s_iTPrctbA46815lxrVIF5og
          stance: supports
          locator: CBDB：兄弟 王楷（126753）之父／母 王淮
          quotation: null
          interpretation_note: 由兄弟关系推断：王梧 与 王楷 为同胞（CBDB 记「兄」），王楷 之父／母即 王梧 之父／母。
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
        id: c_kkMuRYuryWu-2IjJGZRUUu
        subject_person_id: p_4TKB9CF1Pcy4hP4NGvXiGk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yA9hE5L129reKF3PHWaEJp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BcEN-9fRk9xp2QPGGnIM4X
          claim_id: c_kkMuRYuryWu-2IjJGZRUUu
          source_id: s_Pu4VQoKF5oUCq_vKvgDjnT
          stance: supports
          locator: CBDB：兄弟 王楷（126753）之父／母 王淮
          quotation: null
          interpretation_note: 由兄弟关系推断：王杞 与 王楷 为同胞（CBDB 记「弟」），王楷 之父／母即 王杞 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王淮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淮 | accepted |
| bio.summary | 王淮，明人物。嘉靖三十五年進士，籍贯永康，曾任壽官。（中国历代人物传记资料库 CBDB 320121） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_R58pqFjKH7zhFPrnUA5Ato | 王楷 | accepted |
| children | p_3stFDkMB5KFsJBGCcP93yg | 王樸 | accepted |
| children | p_5ECZrP9D8YgakXRBwqEpHn | 王彬 | accepted |
| children | p_6177H18t82aEaiW6bfedH6 | 王權 | accepted |
| children | p_KEXGqDYCH8uTiJN26wbnqL | 王楠 | accepted |
| children | p_KooGGHRrgfCTyHyEi2ixKC | 王栈 | accepted |
| children | p_NXHmb1pQmXHNkNCQNQX1DH | 王橋 | accepted |
| children | p_iP4yKPZdLXFDra4a93FyV8 | 王梧 | accepted |
| children | p_yA9hE5L129reKF3PHWaEJp | 王杞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彬（CBDB 320128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320128&o=json)
- [中国历代人物传记资料库：王淮（CBDB 320121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320121&o=json)
- [中国历代人物传记资料库：王楠（CBDB 320131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320131&o=json)
- [中国历代人物传记资料库：王樸（CBDB 320133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320133&o=json)
- [中国历代人物传记资料库：王杞（CBDB 320125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320125&o=json)
- [中国历代人物传记资料库：王橋（CBDB 320127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320127&o=json)
- [中国历代人物传记资料库：王權（CBDB 320132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320132&o=json)
- [中国历代人物传记资料库：王梧（CBDB 320126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320126&o=json)
- [中国历代人物传记资料库：王栈（CBDB 320130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320130&o=json)
