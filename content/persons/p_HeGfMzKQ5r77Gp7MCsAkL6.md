---
schema: wang-person/v1
id: p_HeGfMzKQ5r77Gp7MCsAkL6
status: active
merged_into: null
display_name: 王仲舒
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1dsFE4uHwsRBvyoTZA5ctd
        subject_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲舒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3KBmojg22pTyv3y1SjLnVM
          claim_id: c_1dsFE4uHwsRBvyoTZA5ctd
          source_id: s_ab1srMQ3PeiCZNBsYp79zB
          stance: supports
          locator: CBDB:91998
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（91998）
          source: &a1
            id: s_ab1srMQ3PeiCZNBsYp79zB
            source_type: api_record
            title: 中国历代人物传记资料库：王仲舒（CBDB 91998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91998&o=json
            external_identifier: CBDB:91998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DG9rLnjnzj9iCBKa4gbicP
        subject_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 762年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BZFgrK8pTf6WMzMSUy5eZL
          claim_id: c_DG9rLnjnzj9iCBKa4gbicP
          source_id: s_ab1srMQ3PeiCZNBsYp79zB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jrJL941MxcyTPZuP58ET9B
        subject_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 823年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RuEc26JeNBSMV5r8VSi5sm
          claim_id: c_jrJL941MxcyTPZuP58ET9B
          source_id: s_ab1srMQ3PeiCZNBsYp79zB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qcz9nGiFxtaW3BRRc5SDEH
        subject_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T7P3YvCVWXKCFrKAjdGXZM
          claim_id: c_qcz9nGiFxtaW3BRRc5SDEH
          source_id: s_ab1srMQ3PeiCZNBsYp79zB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SmXKipZNPBbDxJ3Nk4lchi
        subject_person_id: p_AJthCZJzr5eAL2kCMPefer
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mbBWiS9EvVjfoJevRlo4zb
          claim_id: c_SmXKipZNPBbDxJ3Nk4lchi
          source_id: s_9fnqQwS63W6YAWQtEUi1J4
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9fnqQwS63W6YAWQtEUi1J4
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 190795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190795&o=json
            external_identifier: CBDB:190795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AJthCZJzr5eAL2kCMPefer
        status: active
        display_name: 王政
        merged_into_person_id: null
  children:
    - claim:
        id: c_8Uab57M6XaQd6DKW6jqfSm
        subject_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1PHWxnMBkTahyhe3mpQdE4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H2b7JDQkfPbqn8W_rrdOlF
          claim_id: c_8Uab57M6XaQd6DKW6jqfSm
          source_id: s_nyEnxhFMZ6SWCXBCUPDwZG
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 29312：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nyEnxhFMZ6SWCXBCUPDwZG
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 190802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190802&o=json
            external_identifier: CBDB:190802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.339Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1PHWxnMBkTahyhe3mpQdE4
        status: active
        display_name: 王泰
        merged_into_person_id: null
    - claim:
        id: c_EjxPX51rc4p4t1nC2lsVGe
        subject_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nAKMzF2Ukga3jR3vi2vLF8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XY_C8k4U0p_TKlO5pLKWbO
          claim_id: c_EjxPX51rc4p4t1nC2lsVGe
          source_id: s_h2fwkLZFScFGG5g1D71fV4
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_h2fwkLZFScFGG5g1D71fV4
            source_type: api_record
            title: 中国历代人物传记资料库：王哲（CBDB 190799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190799&o=json
            external_identifier: CBDB:190799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.337Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nAKMzF2Ukga3jR3vi2vLF8
        status: active
        display_name: 王哲
        merged_into_person_id: null
    - claim:
        id: c_0_wo5gwYGBfIhtHS-L6rtr
        subject_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oiaWF1Wm3SGjSjnkEZ6joz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W_WIA63FJPLPgy1kLgynmc
          claim_id: c_0_wo5gwYGBfIhtHS-L6rtr
          source_id: s_ZEtaPXBPp9Lm67PqMGtovm
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZEtaPXBPp9Lm67PqMGtovm
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 190803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190803&o=json
            external_identifier: CBDB:190803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.340Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oiaWF1Wm3SGjSjnkEZ6joz
        status: active
        display_name: 王復
        merged_into_person_id: null
    - claim:
        id: c_I_DtxsBalXhB-I2mLkd19u
        subject_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QsMHiHx445hmeqx5eEYc9b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PopAPk2uXWudY20A1AUgcT
          claim_id: c_I_DtxsBalXhB-I2mLkd19u
          source_id: s_btb5mPpoogwo4S6yiCASmQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_btb5mPpoogwo4S6yiCASmQ
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 190801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190801&o=json
            external_identifier: CBDB:190801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.338Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QsMHiHx445hmeqx5eEYc9b
        status: active
        display_name: 王宏
        merged_into_person_id: null
    - claim:
        id: c_wUPuomlS4a-T2Qrb6SFSMA
        subject_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QUgQkTrn8xZi1gEd2SrxTK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xcoyAp4JtMOz1bguu1OU95
          claim_id: c_wUPuomlS4a-T2Qrb6SFSMA
          source_id: s_tGGFTQP8s4zNaWGrS9fDFQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tGGFTQP8s4zNaWGrS9fDFQ
            source_type: api_record
            title: 中国历代人物传记资料库：王貞（CBDB 190800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190800&o=json
            external_identifier: CBDB:190800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.337Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QUgQkTrn8xZi1gEd2SrxTK
        status: active
        display_name: 王貞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲舒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲舒 | accepted |
| birth.date | 762年 | accepted |
| death.date | 823年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AJthCZJzr5eAL2kCMPefer | 王政 | accepted |
| children | p_1PHWxnMBkTahyhe3mpQdE4 | 王泰 | accepted |
| children | p_nAKMzF2Ukga3jR3vi2vLF8 | 王哲 | accepted |
| children | p_oiaWF1Wm3SGjSjnkEZ6joz | 王復 | accepted |
| children | p_QsMHiHx445hmeqx5eEYc9b | 王宏 | accepted |
| children | p_QUgQkTrn8xZi1gEd2SrxTK | 王貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王復（CBDB 190803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190803&o=json)
- [中国历代人物传记资料库：王宏（CBDB 190801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190801&o=json)
- [中国历代人物传记资料库：王泰（CBDB 190802）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190802&o=json)
- [中国历代人物传记资料库：王哲（CBDB 190799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190799&o=json)
- [中国历代人物传记资料库：王貞（CBDB 190800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190800&o=json)
- [中国历代人物传记资料库：王政（CBDB 190795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190795&o=json)
- [中国历代人物传记资料库：王仲舒（CBDB 91998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91998&o=json)
