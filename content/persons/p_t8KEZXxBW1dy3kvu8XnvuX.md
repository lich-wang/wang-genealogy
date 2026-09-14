---
schema: wang-person/v1
id: p_t8KEZXxBW1dy3kvu8XnvuX
status: active
merged_into: null
display_name: 王詁
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wKimWCjgGnvJhhnhXNTpww
        subject_person_id: p_t8KEZXxBW1dy3kvu8XnvuX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vu1u2UAS8hJpJhj6GFyzg4
          claim_id: c_wKimWCjgGnvJhhnhXNTpww
          source_id: s_2D5u5G5iGMUeKdahVFtiNu
          stance: supports
          locator: CBDB:260097
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260097）
          source: &a1
            id: s_2D5u5G5iGMUeKdahVFtiNu
            source_type: api_record
            title: 中国历代人物传记资料库：王詁（CBDB 260097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260097&o=json
            external_identifier: CBDB:260097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gNPpeFmfkdcxfJBmeArPnB
        subject_person_id: p_t8KEZXxBW1dy3kvu8XnvuX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詁，明人物。成化二十三年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 260097）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xryhtYiKi64RGSRFAPR9J3
          claim_id: c_gNPpeFmfkdcxfJBmeArPnB
          source_id: s_2D5u5G5iGMUeKdahVFtiNu
          stance: supports
          locator: CBDB:260097
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_i1W2nh0h3BJksLSD7NyHak
        subject_person_id: p_t8KEZXxBW1dy3kvu8XnvuX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7THfMJodZEJjq2hbN5iKFW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bBaLhYRXNPay0NcLruQYtD
          claim_id: c_i1W2nh0h3BJksLSD7NyHak
          source_id: s_tHp2FnyoXei6ksmFF82P9Q
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百五十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tHp2FnyoXei6ksmFF82P9Q
            source_type: api_record
            title: 中国历代人物传记资料库：王秩（CBDB 200588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200588&o=json
            external_identifier: CBDB:200588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.620Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7THfMJodZEJjq2hbN5iKFW
        status: active
        display_name: 王秩
        merged_into_person_id: null
    - claim:
        id: c_grlpBq_rUYrGAIav82SXEF
        subject_person_id: p_t8KEZXxBW1dy3kvu8XnvuX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4gH3D3nu9rhKEL8mT7DNe7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pZVIIlPs_twWLlPY3-yxxs
          claim_id: c_grlpBq_rUYrGAIav82SXEF
          source_id: s_ahGuKLGq4_JRovEHLvbJBA
          stance: supports
          locator: CBDB：兄弟 王秩（200588）之父／母 王詁
          quotation: null
          interpretation_note: 由兄弟关系推断：王扆 与 王秩 为同胞（CBDB 记「兄」），王秩 之父／母即 王扆 之父／母。
          source:
            id: s_ahGuKLGq4_JRovEHLvbJBA
            source_type: api_record
            title: 中国历代人物传记资料库：王扆（CBDB 260103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260103&o=json
            external_identifier: CBDB:260103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4gH3D3nu9rhKEL8mT7DNe7
        status: active
        display_name: 王扆
        merged_into_person_id: null
    - claim:
        id: c_CNHwskBLmLOi_EeBx8bW2J
        subject_person_id: p_t8KEZXxBW1dy3kvu8XnvuX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7wMJEu4VBuvk1eo4J8qNM8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_02ymBBwZcqJz3J8Sxqtedf
          claim_id: c_CNHwskBLmLOi_EeBx8bW2J
          source_id: s_zqOrJx3I6gYq3KW3XoVnQy
          stance: supports
          locator: CBDB：兄弟 王秩（200588）之父／母 王詁
          quotation: null
          interpretation_note: 由兄弟关系推断：王稷 与 王秩 为同胞（CBDB 记「兄」），王秩 之父／母即 王稷 之父／母。
          source:
            id: s_zqOrJx3I6gYq3KW3XoVnQy
            source_type: api_record
            title: 中国历代人物传记资料库：王稷（CBDB 260102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260102&o=json
            external_identifier: CBDB:260102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7wMJEu4VBuvk1eo4J8qNM8
        status: active
        display_name: 王稷
        merged_into_person_id: null
    - claim:
        id: c_1Wfvz6k-YWAr5hNShxi5nj
        subject_person_id: p_t8KEZXxBW1dy3kvu8XnvuX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RF6NyvTa7Wx7i82yFF2rXG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sn6NnON_8h-a3cl9mh2tDA
          claim_id: c_1Wfvz6k-YWAr5hNShxi5nj
          source_id: s_ooUQnhIa3aCx3NdEUngTwF
          stance: supports
          locator: CBDB：兄弟 王秩（200588）之父／母 王詁
          quotation: null
          interpretation_note: 由兄弟关系推断：王褧 与 王秩 为同胞（CBDB 记「弟」），王秩 之父／母即 王褧 之父／母。
          source:
            id: s_ooUQnhIa3aCx3NdEUngTwF
            source_type: api_record
            title: 中国历代人物传记资料库：王褧（CBDB 260100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260100&o=json
            external_identifier: CBDB:260100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RF6NyvTa7Wx7i82yFF2rXG
        status: active
        display_name: 王褧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王詁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詁 | accepted |
| bio.summary | 王詁，明人物。成化二十三年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 260097） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7THfMJodZEJjq2hbN5iKFW | 王秩 | accepted |
| children | p_4gH3D3nu9rhKEL8mT7DNe7 | 王扆 | accepted |
| children | p_7wMJEu4VBuvk1eo4J8qNM8 | 王稷 | accepted |
| children | p_RF6NyvTa7Wx7i82yFF2rXG | 王褧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王詁（CBDB 260097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260097&o=json)
- [中国历代人物传记资料库：王稷（CBDB 260102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260102&o=json)
- [中国历代人物传记资料库：王褧（CBDB 260100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260100&o=json)
- [中国历代人物传记资料库：王扆（CBDB 260103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260103&o=json)
- [中国历代人物传记资料库：王秩（CBDB 200588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200588&o=json)
