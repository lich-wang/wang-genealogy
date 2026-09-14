---
schema: wang-person/v1
id: p_HEcYmFiWFEDzbzkKdJkAmj
status: active
merged_into: null
display_name: 王翊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wqjQCDuR36z8g294Q99XaQ
        subject_person_id: p_HEcYmFiWFEDzbzkKdJkAmj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_agmhyf2fTfJqT1FHT7Kw43
          claim_id: c_wqjQCDuR36z8g294Q99XaQ
          source_id: s_JMG2d3zGG2Wp8BYFwi3FWT
          stance: supports
          locator: CBDB:298735
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298735）
          source: &a1
            id: s_JMG2d3zGG2Wp8BYFwi3FWT
            source_type: api_record
            title: 中国历代人物传记资料库：王翊（CBDB 298735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298735&o=json
            external_identifier: CBDB:298735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.592Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xEoaueGPUK6CrQ9JKpDjpH
        subject_person_id: p_HEcYmFiWFEDzbzkKdJkAmj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翊，明人物。天順元年進士，籍贯蘄州衛。（中国历代人物传记资料库 CBDB 298735）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DkEztE7-X0p5suCs-wvKM9
          claim_id: c_xEoaueGPUK6CrQ9JKpDjpH
          source_id: s_JMG2d3zGG2Wp8BYFwi3FWT
          stance: supports
          locator: CBDB:298735
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qT9XhTWm4S8WWNgqbHhh-2
        subject_person_id: p_EXMZPtghLZpQ12NTp4oe7P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HEcYmFiWFEDzbzkKdJkAmj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bs-ByKCMw6i6HJ3WziVVp9
          claim_id: c_qT9XhTWm4S8WWNgqbHhh-2
          source_id: s_kQHV9zoKsrJoMWjcu4fZDa
          stance: supports
          locator: CBDB：兄弟 王翰（198648）之父／母 王恭
          quotation: null
          interpretation_note: 由兄弟关系推断：王翊 与 王翰 为同胞（CBDB 记「弟」），王翰 之父／母即 王翊 之父／母。
          source:
            id: s_kQHV9zoKsrJoMWjcu4fZDa
            source_type: api_record
            title: 中国历代人物传记资料库：王翊（CBDB 298735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298735&o=json
            external_identifier: CBDB:298735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EXMZPtghLZpQ12NTp4oe7P
        status: active
        display_name: 王恭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_P--ZAVso27U7oCv9BheBpI
        subject_person_id: p_26otXuRvyNkWGBZaSdCQ3z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HEcYmFiWFEDzbzkKdJkAmj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B_8dO_Xj-ZESKfV43fHtnX
          claim_id: c_P--ZAVso27U7oCv9BheBpI
          source_id: s_kQHV9zoKsrJoMWjcu4fZDa
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198648 王翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kQHV9zoKsrJoMWjcu4fZDa
            source_type: api_record
            title: 中国历代人物传记资料库：王翊（CBDB 298735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298735&o=json
            external_identifier: CBDB:298735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_26otXuRvyNkWGBZaSdCQ3z
        status: active
        display_name: 王翰
        merged_into_person_id: null
---

# 王翊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翊 | accepted |
| bio.summary | 王翊，明人物。天順元年進士，籍贯蘄州衛。（中国历代人物传记资料库 CBDB 298735） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EXMZPtghLZpQ12NTp4oe7P | 王恭 | accepted |
| other | p_26otXuRvyNkWGBZaSdCQ3z | 王翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翊（CBDB 298735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298735&o=json)
