---
schema: wang-person/v1
id: p_sF2SnQKNvV3NAN319u2Fiw
status: active
merged_into: null
display_name: 王益
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vpop9eh1XnAqukHMHnTKpx
        subject_person_id: p_sF2SnQKNvV3NAN319u2Fiw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WaESzoTBuNcgxE3yiECEtM
          claim_id: c_Vpop9eh1XnAqukHMHnTKpx
          source_id: s_xkgD9QX5GHqq294D8Eu5EU
          stance: supports
          locator: CBDB:260641
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260641）
          source: &a1
            id: s_xkgD9QX5GHqq294D8Eu5EU
            source_type: api_record
            title: 中国历代人物传记资料库：王益（CBDB 260641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260641&o=json
            external_identifier: CBDB:260641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.523Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u2Sm6MGTBx6n4kJtdmvtsi
        subject_person_id: p_sF2SnQKNvV3NAN319u2Fiw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 260641）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZvP6EaiR8nzokycbY-V56u
          claim_id: c_u2Sm6MGTBx6n4kJtdmvtsi
          source_id: s_xkgD9QX5GHqq294D8Eu5EU
          stance: supports
          locator: CBDB:260641
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AAVAYXpQgZIM1tg60cuxbq
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sF2SnQKNvV3NAN319u2Fiw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AbEj9KMH3C6mpXFakoOP2z
          claim_id: c_AAVAYXpQgZIM1tg60cuxbq
          source_id: s_Lqr6y6aLNWFpEWDeBEtoMe
          stance: supports
          locator: CBDB：兄弟 王存忠（200628）之父／母 王永潮
          quotation: null
          interpretation_note: 由兄弟关系推断：王益 与 王存忠 为同胞（CBDB 记「弟」），王存忠 之父／母即 王益 之父／母。
          source:
            id: s_Lqr6y6aLNWFpEWDeBEtoMe
            source_type: api_record
            title: 中国历代人物传记资料库：王益（CBDB 260641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260641&o=json
            external_identifier: CBDB:260641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zYsGWZ26RZr9NP9BPEi82D
        status: active
        display_name: 王永潮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_QaP99i7OTV3zjE8bqlo_2a
        subject_person_id: p_sF2SnQKNvV3NAN319u2Fiw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TDrEIC5xFJZFmrALD3917t
          claim_id: c_QaP99i7OTV3zjE8bqlo_2a
          source_id: s_Lqr6y6aLNWFpEWDeBEtoMe
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200628 王存忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Lqr6y6aLNWFpEWDeBEtoMe
            source_type: api_record
            title: 中国历代人物传记资料库：王益（CBDB 260641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260641&o=json
            external_identifier: CBDB:260641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ybLqBE5H4AFTdmTJtgwy2w
        status: active
        display_name: 王存忠
        merged_into_person_id: null
---

# 王益

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王益 | accepted |
| bio.summary | 王益，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 260641） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zYsGWZ26RZr9NP9BPEi82D | 王永潮 | accepted |
| other | p_ybLqBE5H4AFTdmTJtgwy2w | 王存忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王益（CBDB 260641）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260641&o=json)
