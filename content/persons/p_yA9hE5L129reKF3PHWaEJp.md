---
schema: wang-person/v1
id: p_yA9hE5L129reKF3PHWaEJp
status: active
merged_into: null
display_name: 王杞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LjeNRq347g2Ewu6pvqJEmi
        subject_person_id: p_yA9hE5L129reKF3PHWaEJp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BxNFwKRXrTrMLLLv2sa8iJ
          claim_id: c_LjeNRq347g2Ewu6pvqJEmi
          source_id: s_e3F8Gix7PPoNjDbHiVvvtH
          stance: supports
          locator: CBDB:320125
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320125）
          source: &a1
            id: s_e3F8Gix7PPoNjDbHiVvvtH
            source_type: api_record
            title: 中国历代人物传记资料库：王杞（CBDB 320125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320125&o=json
            external_identifier: CBDB:320125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.049Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R7qArwhF69K5x8DgMK3cNP
        subject_person_id: p_yA9hE5L129reKF3PHWaEJp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杞，明人物。嘉靖三十五年進士，籍贯永康。（中国历代人物传记资料库 CBDB 320125）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0BRVWESnUF8n-ug2AyhyZJ
          claim_id: c_R7qArwhF69K5x8DgMK3cNP
          source_id: s_e3F8Gix7PPoNjDbHiVvvtH
          stance: supports
          locator: CBDB:320125
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_4TKB9CF1Pcy4hP4NGvXiGk
        status: active
        display_name: 王淮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
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
        id: p_R58pqFjKH7zhFPrnUA5Ato
        status: active
        display_name: 王楷
        merged_into_person_id: null
---

# 王杞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杞 | accepted |
| bio.summary | 王杞，明人物。嘉靖三十五年進士，籍贯永康。（中国历代人物传记资料库 CBDB 320125） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4TKB9CF1Pcy4hP4NGvXiGk | 王淮 | accepted |
| other | p_R58pqFjKH7zhFPrnUA5Ato | 王楷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王杞（CBDB 320125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320125&o=json)
