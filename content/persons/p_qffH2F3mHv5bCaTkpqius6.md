---
schema: wang-person/v1
id: p_qffH2F3mHv5bCaTkpqius6
status: active
merged_into: null
display_name: 王寧
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2WQJhd51xnMzt65z3VHHJ9
        subject_person_id: p_qffH2F3mHv5bCaTkpqius6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2x6Cggk8uZQHS9r4G2G8xF
          claim_id: c_2WQJhd51xnMzt65z3VHHJ9
          source_id: s_s45EbtsqSBG2D2GEPvLWhH
          stance: supports
          locator: CBDB:271836
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271836）
          source: &a1
            id: s_s45EbtsqSBG2D2GEPvLWhH
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 271836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271836&o=json
            external_identifier: CBDB:271836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gZUZsGNf6uoi3D4fQkHxDi
        subject_person_id: p_qffH2F3mHv5bCaTkpqius6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧，明人物。弘治十五年進士，籍贯定遼左衛，入仕監生。（中国历代人物传记资料库 CBDB 271836）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wcpJFauTH5rQXyaBwmzPav
          claim_id: c_gZUZsGNf6uoi3D4fQkHxDi
          source_id: s_s45EbtsqSBG2D2GEPvLWhH
          stance: supports
          locator: CBDB:271836
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_enncq81IkCYD2LXqNDeLAw
        subject_person_id: p_qffH2F3mHv5bCaTkpqius6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DF9QV6BkQyQ4o3h3Yhn8e4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kIOVTRWo0_djhDkhkxXc3W
          claim_id: c_enncq81IkCYD2LXqNDeLAw
          source_id: s_BtUPuCZjyPjh1RLikrHQE4
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百一十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BtUPuCZjyPjh1RLikrHQE4
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 201409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201409&o=json
            external_identifier: CBDB:201409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DF9QV6BkQyQ4o3h3Yhn8e4
        status: active
        display_name: 王鉉
        merged_into_person_id: null
    - claim:
        id: c_5FixF-vUIQ3Q5OrtGWKh6x
        subject_person_id: p_qffH2F3mHv5bCaTkpqius6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D9u234QtrbAguRnhxHF9v7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2N4CKLbp9RT8nHuOZUBE4p
          claim_id: c_5FixF-vUIQ3Q5OrtGWKh6x
          source_id: s_YIKQjTPa56M08pcWfIa22v
          stance: supports
          locator: CBDB：兄弟 王鉉（201409）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王錡 与 王鉉 为同胞（CBDB 记「弟」），王鉉 之父／母即 王錡 之父／母。
          source:
            id: s_YIKQjTPa56M08pcWfIa22v
            source_type: api_record
            title: 中国历代人物传记资料库：王錡（CBDB 271841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271841&o=json
            external_identifier: CBDB:271841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D9u234QtrbAguRnhxHF9v7
        status: active
        display_name: 王錡
        merged_into_person_id: null
    - claim:
        id: c_XVmjDRTIL_CAsgGVx6QZmm
        subject_person_id: p_qffH2F3mHv5bCaTkpqius6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RE8oGxyQjuPS91HGwbGa4V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mHcZnD-xq_qB1cuOmFk_CT
          claim_id: c_XVmjDRTIL_CAsgGVx6QZmm
          source_id: s_WYasWTYICikxp1SCOfbF7z
          stance: supports
          locator: CBDB：兄弟 王鉉（201409）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎛 与 王鉉 为同胞（CBDB 记「兄」），王鉉 之父／母即 王鎛 之父／母。
          source:
            id: s_WYasWTYICikxp1SCOfbF7z
            source_type: api_record
            title: 中国历代人物传记资料库：王鎛（CBDB 271842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271842&o=json
            external_identifier: CBDB:271842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RE8oGxyQjuPS91HGwbGa4V
        status: active
        display_name: 王鎛
        merged_into_person_id: null
    - claim:
        id: c_DomweTa1v6eCO6F1QHCoLp
        subject_person_id: p_qffH2F3mHv5bCaTkpqius6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a7FVmHiWaVByPZJHRS69g2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lLYSghB60Dn2K_XtLfXiPM
          claim_id: c_DomweTa1v6eCO6F1QHCoLp
          source_id: s_FZz2WJy6LEw_IAQRJdYkUS
          stance: supports
          locator: CBDB：兄弟 王鉉（201409）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王鉦 与 王鉉 为同胞（CBDB 记「兄」），王鉉 之父／母即 王鉦 之父／母。
          source:
            id: s_FZz2WJy6LEw_IAQRJdYkUS
            source_type: api_record
            title: 中国历代人物传记资料库：王鉦（CBDB 271843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271843&o=json
            external_identifier: CBDB:271843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_a7FVmHiWaVByPZJHRS69g2
        status: active
        display_name: 王鉦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧 | accepted |
| bio.summary | 王寧，明人物。弘治十五年進士，籍贯定遼左衛，入仕監生。（中国历代人物传记资料库 CBDB 271836） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DF9QV6BkQyQ4o3h3Yhn8e4 | 王鉉 | accepted |
| children | p_D9u234QtrbAguRnhxHF9v7 | 王錡 | accepted |
| children | p_RE8oGxyQjuPS91HGwbGa4V | 王鎛 | accepted |
| children | p_a7FVmHiWaVByPZJHRS69g2 | 王鉦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎛（CBDB 271842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271842&o=json)
- [中国历代人物传记资料库：王寧（CBDB 271836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271836&o=json)
- [中国历代人物传记资料库：王錡（CBDB 271841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271841&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 201409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201409&o=json)
- [中国历代人物传记资料库：王鉦（CBDB 271843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271843&o=json)
