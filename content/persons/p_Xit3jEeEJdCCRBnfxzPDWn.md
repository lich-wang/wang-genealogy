---
schema: wang-person/v1
id: p_Xit3jEeEJdCCRBnfxzPDWn
status: active
merged_into: null
display_name: 王謙
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ULKMt89SG9DoAF3mF6ppLG
        subject_person_id: p_Xit3jEeEJdCCRBnfxzPDWn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NNfL6P29BtgD2Uy3FRiJur
          claim_id: c_ULKMt89SG9DoAF3mF6ppLG
          source_id: s_E3BWQs7BLUdpBhBwLiNrVh
          stance: supports
          locator: CBDB:238061
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（238061）
          source: &a1
            id: s_E3BWQs7BLUdpBhBwLiNrVh
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 238061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238061&o=json
            external_identifier: CBDB:238061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aETCF9tUmYpSgdT16UAYWa
        subject_person_id: p_Xit3jEeEJdCCRBnfxzPDWn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙，明人物。正统七年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 238061）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-fUIuJZzSh-vbW0br0ZUxJ
          claim_id: c_aETCF9tUmYpSgdT16UAYWa
          source_id: s_E3BWQs7BLUdpBhBwLiNrVh
          stance: supports
          locator: CBDB:238061
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_t3xXCQJe2IxX9jaw9htGUr
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Xit3jEeEJdCCRBnfxzPDWn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x8J3CV-k9r0dtgXy2Zby29
          claim_id: c_t3xXCQJe2IxX9jaw9htGUr
          source_id: s_aFbKg3Oo42hoabAfDLjGVa
          stance: supports
          locator: CBDB：兄弟 王詔（67953）之父／母 王仕復
          quotation: null
          interpretation_note: 由兄弟关系推断：王謙 与 王詔 为同胞（CBDB 记「弟」），王詔 之父／母即 王謙 之父／母。
          source:
            id: s_aFbKg3Oo42hoabAfDLjGVa
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 238061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238061&o=json
            external_identifier: CBDB:238061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zr3cc57cGmUXGbD4psHLyS
        status: active
        display_name: 王仕復
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Awg4uHJc2RPfbzzq8awuLR
        subject_person_id: p_8Sfy82F6BmihArAucn9Vuw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Xit3jEeEJdCCRBnfxzPDWn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2O-NIfdpvJNR2lqauBBZ1_
          claim_id: c_Awg4uHJc2RPfbzzq8awuLR
          source_id: s_aFbKg3Oo42hoabAfDLjGVa
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67953 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_aFbKg3Oo42hoabAfDLjGVa
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 238061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238061&o=json
            external_identifier: CBDB:238061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8Sfy82F6BmihArAucn9Vuw
        status: active
        display_name: 王詔
        merged_into_person_id: null
---

# 王謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謙 | accepted |
| bio.summary | 王謙，明人物。正统七年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 238061） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Zr3cc57cGmUXGbD4psHLyS | 王仕復 | accepted |
| other | p_8Sfy82F6BmihArAucn9Vuw | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王謙（CBDB 238061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238061&o=json)
