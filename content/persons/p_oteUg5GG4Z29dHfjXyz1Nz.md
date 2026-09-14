---
schema: wang-person/v1
id: p_oteUg5GG4Z29dHfjXyz1Nz
status: active
merged_into: null
display_name: 王道煦
cbdb_id: 223217
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uuDvBc5sfjvB6qWtiryjUx
        subject_person_id: p_oteUg5GG4Z29dHfjXyz1Nz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道煦，明人物。萬曆十一年進士，籍贯同安。（中国历代人物传记资料库 CBDB 223217）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ZoDguyBrzj1v4Cq3vE2qcP
          claim_id: c_uuDvBc5sfjvB6qWtiryjUx
          source_id: s_n6ieg14Y4wGGP2gKWUFQc2
          stance: supports
          locator: CBDB:223217
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_n6ieg14Y4wGGP2gKWUFQc2
            source_type: api_record
            title: 中国历代人物传记资料库：王道煦（CBDB 223217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223217&o=json
            external_identifier: CBDB:223217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_f1NE4HsWSDtcC6p6VtbS11
        subject_person_id: p_oteUg5GG4Z29dHfjXyz1Nz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道煦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KntGbQAU9UyfZAAvVomiCM
          claim_id: c_f1NE4HsWSDtcC6p6VtbS11
          source_id: s_n6ieg14Y4wGGP2gKWUFQc2
          stance: supports
          locator: CBDB:223217
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KBJ52dvkz8Gl6Pc1cdBxiL
        subject_person_id: p_nrgvXCkYedEAAAukDFwR1j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oteUg5GG4Z29dHfjXyz1Nz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gl6ser87RIH9nV3G4QyPnj
          claim_id: c_KBJ52dvkz8Gl6Pc1cdBxiL
          source_id: s_YfGJFKD6QFEMCyJ8YI_8cQ
          stance: supports
          locator: CBDB：兄弟 王道顯（206783）之父／母 王三錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王道煦 与 王道顯 为同胞（CBDB 记「兄」），王道顯 之父／母即 王道煦 之父／母。
          source:
            id: s_YfGJFKD6QFEMCyJ8YI_8cQ
            source_type: api_record
            title: 中国历代人物传记资料库：王道煦（CBDB 223217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223217&o=json
            external_identifier: CBDB:223217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nrgvXCkYedEAAAukDFwR1j
        status: active
        display_name: 王三錫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fUCoSIV7kaHZRCEGa8_Vy1
        subject_person_id: p_7J92XTKdKB1ZCqpjcGmNN6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oteUg5GG4Z29dHfjXyz1Nz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J5kCK1LHYfNLdp56sUo7rC
          claim_id: c_fUCoSIV7kaHZRCEGa8_Vy1
          source_id: s_YfGJFKD6QFEMCyJ8YI_8cQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206783 王道顯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YfGJFKD6QFEMCyJ8YI_8cQ
            source_type: api_record
            title: 中国历代人物传记资料库：王道煦（CBDB 223217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223217&o=json
            external_identifier: CBDB:223217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7J92XTKdKB1ZCqpjcGmNN6
        status: active
        display_name: 王道顯
        merged_into_person_id: null
---

# 王道煦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王道煦，明人物。萬曆十一年進士，籍贯同安。（中国历代人物传记资料库 CBDB 223217） | accepted |
| name.primary | 王道煦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nrgvXCkYedEAAAukDFwR1j | 王三錫 | accepted |
| other | p_7J92XTKdKB1ZCqpjcGmNN6 | 王道顯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道煦（CBDB 223217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223217&o=json)
