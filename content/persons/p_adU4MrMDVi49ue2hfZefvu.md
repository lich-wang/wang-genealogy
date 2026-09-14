---
schema: wang-person/v1
id: p_adU4MrMDVi49ue2hfZefvu
status: active
merged_into: null
display_name: 王官
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8av5LBDMtvMn2ui62mruUf
        subject_person_id: p_adU4MrMDVi49ue2hfZefvu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王官
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ys2pgimJkG6w8VnB7MygNg
          claim_id: c_8av5LBDMtvMn2ui62mruUf
          source_id: s_rHH3GQGg3QH3wL4nwy7u1E
          stance: supports
          locator: CBDB:317770
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317770）
          source: &a1
            id: s_rHH3GQGg3QH3wL4nwy7u1E
            source_type: api_record
            title: 中国历代人物传记资料库：王官（CBDB 317770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317770&o=json
            external_identifier: CBDB:317770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i5BEY9U5QDmDT1oCB7Mn4W
        subject_person_id: p_adU4MrMDVi49ue2hfZefvu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王官，明人物。嘉靖三十二年進士，籍贯興平。（中国历代人物传记资料库 CBDB 317770）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LJGs8GfrIPbjnLexp2KjKN
          claim_id: c_i5BEY9U5QDmDT1oCB7Mn4W
          source_id: s_rHH3GQGg3QH3wL4nwy7u1E
          stance: supports
          locator: CBDB:317770
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Y3qjsua6HHAlChFcsLUTbk
        subject_person_id: p_adU4MrMDVi49ue2hfZefvu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dw1HkJvxeQbGLvtDiNGqfE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YdfNxoOck2O33LIQ6s1P0H
          claim_id: c_Y3qjsua6HHAlChFcsLUTbk
          source_id: s_rHH3GQGg3QH3wL4nwy7u1E
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百七十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dw1HkJvxeQbGLvtDiNGqfE
        status: active
        display_name: 王惟寧
        merged_into_person_id: null
    - claim:
        id: c_9EG2aPmT-6Pd1kvrc48X-s
        subject_person_id: p_adU4MrMDVi49ue2hfZefvu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JW17QbGcGSWGHY8puPMAQY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ywi7vzn1lZTbVH_x053yn-
          claim_id: c_9EG2aPmT-6Pd1kvrc48X-s
          source_id: s__bUz1kazvKIi1rmCPYQZCX
          stance: supports
          locator: CBDB：兄弟 王惟寧（204346）之父／母 王官
          quotation: null
          interpretation_note: 由兄弟关系推断：王惟幾 与 王惟寧 为同胞（CBDB 记「兄」），王惟寧 之父／母即 王惟幾 之父／母。
          source:
            id: s__bUz1kazvKIi1rmCPYQZCX
            source_type: api_record
            title: 中国历代人物传记资料库：王惟幾（CBDB 317777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317777&o=json
            external_identifier: CBDB:317777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JW17QbGcGSWGHY8puPMAQY
        status: active
        display_name: 王惟幾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王官

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王官 | accepted |
| bio.summary | 王官，明人物。嘉靖三十二年進士，籍贯興平。（中国历代人物传记资料库 CBDB 317770） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dw1HkJvxeQbGLvtDiNGqfE | 王惟寧 | accepted |
| children | p_JW17QbGcGSWGHY8puPMAQY | 王惟幾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王官（CBDB 317770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317770&o=json)
- [中国历代人物传记资料库：王惟幾（CBDB 317777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317777&o=json)
