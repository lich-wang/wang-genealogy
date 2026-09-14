---
schema: wang-person/v1
id: p_KjASpV4nMp6G93U6MZvKrH
status: active
merged_into: null
display_name: 王鑾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_35CzF5Mdmcj1u9V2ms17KC
        subject_person_id: p_KjASpV4nMp6G93U6MZvKrH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nLSvDQcoJf6yAdf5TkxSM2
          claim_id: c_35CzF5Mdmcj1u9V2ms17KC
          source_id: s_VKDRT5xEFaDQFGcV3XLr19
          stance: supports
          locator: CBDB:338064
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338064）
          source: &a1
            id: s_VKDRT5xEFaDQFGcV3XLr19
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 338064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338064&o=json
            external_identifier: CBDB:338064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8B45zR72pC1H8AGyxQv1sG
        subject_person_id: p_KjASpV4nMp6G93U6MZvKrH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑾，明人物。天順八年進士，籍贯寧晉。（中国历代人物传记资料库 CBDB 338064）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8bHOsw4fknplBpaydp8SW9
          claim_id: c_8B45zR72pC1H8AGyxQv1sG
          source_id: s_VKDRT5xEFaDQFGcV3XLr19
          stance: supports
          locator: CBDB:338064
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_llsF-mWhvoTE3_lXxEB5WM
        subject_person_id: p_mkEUUStA3H6zxa8Vzv7LyH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KjASpV4nMp6G93U6MZvKrH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ll3FCb5XXX4dMEwB9VO7Z8
          claim_id: c_llsF-mWhvoTE3_lXxEB5WM
          source_id: s_6llkNhKswqnk-ZzewW4Ogf
          stance: supports
          locator: CBDB：兄弟 王詔（67938）之父／母 王昂
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑾 与 王詔 为同胞（CBDB 记「兄」），王詔 之父／母即 王鑾 之父／母。
          source:
            id: s_6llkNhKswqnk-ZzewW4Ogf
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 338064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338064&o=json
            external_identifier: CBDB:338064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mkEUUStA3H6zxa8Vzv7LyH
        status: active
        display_name: 王昂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rsy_19EfiywO_MyWkNQ6TA
        subject_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KjASpV4nMp6G93U6MZvKrH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t-GTqARjjpIxbh-QRw9NIi
          claim_id: c_rsy_19EfiywO_MyWkNQ6TA
          source_id: s_6llkNhKswqnk-ZzewW4Ogf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67938 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6llkNhKswqnk-ZzewW4Ogf
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 338064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338064&o=json
            external_identifier: CBDB:338064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3NK6EhTAXgAtmFG5Dkqh4A
        status: active
        display_name: 王詔
        merged_into_person_id: null
---

# 王鑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑾 | accepted |
| bio.summary | 王鑾，明人物。天順八年進士，籍贯寧晉。（中国历代人物传记资料库 CBDB 338064） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mkEUUStA3H6zxa8Vzv7LyH | 王昂 | accepted |
| other | p_3NK6EhTAXgAtmFG5Dkqh4A | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑾（CBDB 338064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338064&o=json)
