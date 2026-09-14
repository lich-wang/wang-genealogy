---
schema: wang-person/v1
id: p_B4kBEyDG3ChThKvonsA5be
status: active
merged_into: null
display_name: 王績
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hw9JUEtvAR7m5zouGB1EF5
        subject_person_id: p_B4kBEyDG3ChThKvonsA5be
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王績
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UcQdGNqcipfp7GgRZdbtmA
          claim_id: c_hw9JUEtvAR7m5zouGB1EF5
          source_id: s_EmwYs9RgRMoWkp6VGeqjWz
          stance: supports
          locator: CBDB:260404
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260404）
          source: &a1
            id: s_EmwYs9RgRMoWkp6VGeqjWz
            source_type: api_record
            title: 中国历代人物传记资料库：王績（CBDB 260404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260404&o=json
            external_identifier: CBDB:260404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.507Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8ia9wmdiUZV91K2TMbXbg1
        subject_person_id: p_B4kBEyDG3ChThKvonsA5be
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王績，明人物。成化二十三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 260404）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Fa6rovSx277Q9FboPoFTGH
          claim_id: c_8ia9wmdiUZV91K2TMbXbg1
          source_id: s_EmwYs9RgRMoWkp6VGeqjWz
          stance: supports
          locator: CBDB:260404
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NuRFcx-zQ_ImoGe6IZF4Re
        subject_person_id: p_v17Ui16KgEGN3E8zs7M4y6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B4kBEyDG3ChThKvonsA5be
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dH_H_BnV9weS_QN_rRNUNu
          claim_id: c_NuRFcx-zQ_ImoGe6IZF4Re
          source_id: s_0W3vNFn1mD-gw-e-s08mLI
          stance: supports
          locator: CBDB：兄弟 王約（126619）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王績 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王績 之父／母。
          source:
            id: s_0W3vNFn1mD-gw-e-s08mLI
            source_type: api_record
            title: 中国历代人物传记资料库：王績（CBDB 260404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260404&o=json
            external_identifier: CBDB:260404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v17Ui16KgEGN3E8zs7M4y6
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PsvKbbB3cC6x0oqSNzMQbX
        subject_person_id: p_B4kBEyDG3ChThKvonsA5be
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rH1VkL7e0BaMOax_XfOgam
          claim_id: c_PsvKbbB3cC6x0oqSNzMQbX
          source_id: s_0W3vNFn1mD-gw-e-s08mLI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126619 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0W3vNFn1mD-gw-e-s08mLI
            source_type: api_record
            title: 中国历代人物传记资料库：王績（CBDB 260404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260404&o=json
            external_identifier: CBDB:260404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bkiJd7fMDoFB71EF4g2i5Z
        status: active
        display_name: 王約
        merged_into_person_id: null
---

# 王績

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王績 | accepted |
| bio.summary | 王績，明人物。成化二十三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 260404） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_v17Ui16KgEGN3E8zs7M4y6 | 王義 | accepted |
| other | p_bkiJd7fMDoFB71EF4g2i5Z | 王約 | accepted |

## 外部来源

- [中国历代人物传记资料库：王績（CBDB 260404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260404&o=json)
