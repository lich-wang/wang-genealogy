---
schema: wang-person/v1
id: p_DH3cdxEBekGFnLswxt2AJm
status: active
merged_into: null
display_name: 王惟
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZdeyeJr25HhbCtLB5VswHL
        subject_person_id: p_DH3cdxEBekGFnLswxt2AJm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eGwWgQ21VdtMb9PLZV1pr8
          claim_id: c_ZdeyeJr25HhbCtLB5VswHL
          source_id: s_FZpHhu2cXTQkTo9WpyeTDz
          stance: supports
          locator: CBDB:263529
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（263529）
          source: &a1
            id: s_FZpHhu2cXTQkTo9WpyeTDz
            source_type: api_record
            title: 中国历代人物传记资料库：王惟（CBDB 263529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263529&o=json
            external_identifier: CBDB:263529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.625Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m1LkbHELPr45fQBJCxZiKG
        subject_person_id: p_DH3cdxEBekGFnLswxt2AJm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟，明人物。弘治三年進士，籍贯鉅鹿。（中国历代人物传记资料库 CBDB 263529）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bzY7UMLwKQdjMC_vQiTQ9t
          claim_id: c_m1LkbHELPr45fQBJCxZiKG
          source_id: s_FZpHhu2cXTQkTo9WpyeTDz
          stance: supports
          locator: CBDB:263529
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7LxEZXDEKREKPJJy4ONXot
        subject_person_id: p_DH3cdxEBekGFnLswxt2AJm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3aWXbEScEDV2akyzL58TPm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BWbeJDl4L4AD1qSBusOnul
          claim_id: c_7LxEZXDEKREKPJJy4ONXot
          source_id: s_P9Q1v9Dux4zedhvCVweS3V
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第一百八十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P9Q1v9Dux4zedhvCVweS3V
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 67757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67757&o=json
            external_identifier: CBDB:67757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.010Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3aWXbEScEDV2akyzL58TPm
        status: active
        display_name: 王鼎
        merged_into_person_id: null
    - claim:
        id: c_JoyPbRWw2dcbRbas9fOKYs
        subject_person_id: p_DH3cdxEBekGFnLswxt2AJm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kpKZa5Rui7RBUb1WeJKFuc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ci0w0hw-JxuXsxoRhSw727
          claim_id: c_JoyPbRWw2dcbRbas9fOKYs
          source_id: s_Bzd9Vb_Jyqc9NDN05SC2oX
          stance: supports
          locator: CBDB：兄弟 王鼎（67757）之父／母 王惟
          quotation: null
          interpretation_note: 由兄弟关系推断：王鼐 与 王鼎 为同胞（CBDB 记「兄」），王鼎 之父／母即 王鼐 之父／母。
          source:
            id: s_Bzd9Vb_Jyqc9NDN05SC2oX
            source_type: api_record
            title: 中国历代人物传记资料库：王鼐（CBDB 263533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263533&o=json
            external_identifier: CBDB:263533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kpKZa5Rui7RBUb1WeJKFuc
        status: active
        display_name: 王鼐
        merged_into_person_id: null
    - claim:
        id: c_KjiKWLmlFaW9SEFwiDu3DA
        subject_person_id: p_DH3cdxEBekGFnLswxt2AJm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rZeCJCHw9xk17KFtzkMuLH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RRBFHjk09-52eUhpI1oQck
          claim_id: c_KjiKWLmlFaW9SEFwiDu3DA
          source_id: s_hwvl-kcdZLYlZU5MlyyR3V
          stance: supports
          locator: CBDB：兄弟 王鼎（67757）之父／母 王惟
          quotation: null
          interpretation_note: 由兄弟关系推断：王鏞 与 王鼎 为同胞（CBDB 记「弟」），王鼎 之父／母即 王鏞 之父／母。
          source:
            id: s_hwvl-kcdZLYlZU5MlyyR3V
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 263532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263532&o=json
            external_identifier: CBDB:263532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rZeCJCHw9xk17KFtzkMuLH
        status: active
        display_name: 王鏞
        merged_into_person_id: null
    - claim:
        id: c_MqHOl9GwOh0xtgS8uGUi9o
        subject_person_id: p_DH3cdxEBekGFnLswxt2AJm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vNmUWpNro5HZDiJA77F6D7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fECMxL1u39jV4azqYNBy6I
          claim_id: c_MqHOl9GwOh0xtgS8uGUi9o
          source_id: s_Z_xaNNmTDyqqs9qHtlHxAI
          stance: supports
          locator: CBDB：兄弟 王鼎（67757）之父／母 王惟
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎮 与 王鼎 为同胞（CBDB 记「兄」），王鼎 之父／母即 王鎮 之父／母。
          source:
            id: s_Z_xaNNmTDyqqs9qHtlHxAI
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 263534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263534&o=json
            external_identifier: CBDB:263534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vNmUWpNro5HZDiJA77F6D7
        status: active
        display_name: 王鎮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟 | accepted |
| bio.summary | 王惟，明人物。弘治三年進士，籍贯鉅鹿。（中国历代人物传记资料库 CBDB 263529） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3aWXbEScEDV2akyzL58TPm | 王鼎 | accepted |
| children | p_kpKZa5Rui7RBUb1WeJKFuc | 王鼐 | accepted |
| children | p_rZeCJCHw9xk17KFtzkMuLH | 王鏞 | accepted |
| children | p_vNmUWpNro5HZDiJA77F6D7 | 王鎮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 67757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67757&o=json)
- [中国历代人物传记资料库：王鼐（CBDB 263533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263533&o=json)
- [中国历代人物传记资料库：王惟（CBDB 263529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263529&o=json)
- [中国历代人物传记资料库：王鏞（CBDB 263532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263532&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 263534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263534&o=json)
