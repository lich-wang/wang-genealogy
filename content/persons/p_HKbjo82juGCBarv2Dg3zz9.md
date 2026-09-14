---
schema: wang-person/v1
id: p_HKbjo82juGCBarv2Dg3zz9
status: active
merged_into: null
display_name: 王相
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DLgM3j9N5BPQgEzgkcbAte
        subject_person_id: p_HKbjo82juGCBarv2Dg3zz9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QVQW6dcLQC4E2xo6GYqR9S
          claim_id: c_DLgM3j9N5BPQgEzgkcbAte
          source_id: s_Df2JuGWMMQ7nF6jfGSEbX3
          stance: supports
          locator: CBDB:270323
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270323）
          source: &a1
            id: s_Df2JuGWMMQ7nF6jfGSEbX3
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 270323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270323&o=json
            external_identifier: CBDB:270323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.829Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FC25NFZ1HXcy5ZrcB1MrG9
        subject_person_id: p_HKbjo82juGCBarv2Dg3zz9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相，明人物。弘治十五年進士，籍贯臨穎。（中国历代人物传记资料库 CBDB 270323）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F_nD7dzFf081MQ8Gn--tOP
          claim_id: c_FC25NFZ1HXcy5ZrcB1MrG9
          source_id: s_Df2JuGWMMQ7nF6jfGSEbX3
          stance: supports
          locator: CBDB:270323
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__GONuyjXQU2mt_pORT2tCr
        subject_person_id: p_HKbjo82juGCBarv2Dg3zz9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QqHZ53bR3BD9L2PF2yyQK7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5d2ZcMFThKXlM-Wo_Bi45J
          claim_id: c__GONuyjXQU2mt_pORT2tCr
          source_id: s_Df2JuGWMMQ7nF6jfGSEbX3
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第五十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QqHZ53bR3BD9L2PF2yyQK7
        status: active
        display_name: 王金
        merged_into_person_id: null
    - claim:
        id: c_6I1R6TpHU33w-CcrI4m14k
        subject_person_id: p_HKbjo82juGCBarv2Dg3zz9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F8Ub5ENR4VC221i4zhUzPv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8wdRD0qyUYb2MFOyv4spXb
          claim_id: c_6I1R6TpHU33w-CcrI4m14k
          source_id: s_KR29ytgQxNO7HmdqevswJY
          stance: supports
          locator: CBDB：兄弟 王金（126582）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王玉 与 王金 为同胞（CBDB 记「兄」），王金 之父／母即 王玉 之父／母。
          source:
            id: s_KR29ytgQxNO7HmdqevswJY
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 270327）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270327&o=json
            external_identifier: CBDB:270327
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F8Ub5ENR4VC221i4zhUzPv
        status: active
        display_name: 王玉
        merged_into_person_id: null
    - claim:
        id: c_7aowS5R3PRgN4HVyG15epD
        subject_person_id: p_HKbjo82juGCBarv2Dg3zz9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Nak6xGpwbwYTAqsHvqXAi7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J7koNTBGoiT-_5qmgfwejD
          claim_id: c_7aowS5R3PRgN4HVyG15epD
          source_id: s_zIkvwzVUho1_6C0WS_z9-6
          stance: supports
          locator: CBDB：兄弟 王金（126582）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王休 与 王金 为同胞（CBDB 记「兄」），王金 之父／母即 王休 之父／母。
          source:
            id: s_zIkvwzVUho1_6C0WS_z9-6
            source_type: api_record
            title: 中国历代人物传记资料库：王休（CBDB 270331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270331&o=json
            external_identifier: CBDB:270331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Nak6xGpwbwYTAqsHvqXAi7
        status: active
        display_name: 王休
        merged_into_person_id: null
    - claim:
        id: c_yz8tjbrg1nqdxRK8E89kAs
        subject_person_id: p_HKbjo82juGCBarv2Dg3zz9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b3o7c4w4d14TEvcZM5orX7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1HgfrhtTIsau6qG4CIM55Q
          claim_id: c_yz8tjbrg1nqdxRK8E89kAs
          source_id: s_W_QlelMfkV-l150bXtlv4i
          stance: supports
          locator: CBDB：兄弟 王金（126582）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王迹 与 王金 为同胞（CBDB 记「兄」），王金 之父／母即 王迹 之父／母。
          source:
            id: s_W_QlelMfkV-l150bXtlv4i
            source_type: api_record
            title: 中国历代人物传记资料库：王迹（CBDB 270329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270329&o=json
            external_identifier: CBDB:270329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_b3o7c4w4d14TEvcZM5orX7
        status: active
        display_name: 王迹
        merged_into_person_id: null
    - claim:
        id: c_lqfL63_neZfoi__1DRNvNM
        subject_person_id: p_HKbjo82juGCBarv2Dg3zz9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jLJFhnBtSBqKxxS1UeVkhT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3-WCX924RvbJjO26g8ihK8
          claim_id: c_lqfL63_neZfoi__1DRNvNM
          source_id: s_Hl5MjPaKgfJciPgbnodmZP
          stance: supports
          locator: CBDB：兄弟 王金（126582）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王業 与 王金 为同胞（CBDB 记「兄」），王金 之父／母即 王業 之父／母。
          source:
            id: s_Hl5MjPaKgfJciPgbnodmZP
            source_type: api_record
            title: 中国历代人物传记资料库：王業（CBDB 270330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270330&o=json
            external_identifier: CBDB:270330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jLJFhnBtSBqKxxS1UeVkhT
        status: active
        display_name: 王業
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| bio.summary | 王相，明人物。弘治十五年進士，籍贯臨穎。（中国历代人物传记资料库 CBDB 270323） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_QqHZ53bR3BD9L2PF2yyQK7 | 王金 | accepted |
| children | p_F8Ub5ENR4VC221i4zhUzPv | 王玉 | accepted |
| children | p_Nak6xGpwbwYTAqsHvqXAi7 | 王休 | accepted |
| children | p_b3o7c4w4d14TEvcZM5orX7 | 王迹 | accepted |
| children | p_jLJFhnBtSBqKxxS1UeVkhT | 王業 | accepted |

## 外部来源

- [中国历代人物传记资料库：王迹（CBDB 270329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270329&o=json)
- [中国历代人物传记资料库：王相（CBDB 270323）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270323&o=json)
- [中国历代人物传记资料库：王休（CBDB 270331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270331&o=json)
- [中国历代人物传记资料库：王業（CBDB 270330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270330&o=json)
- [中国历代人物传记资料库：王玉（CBDB 270327）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270327&o=json)
