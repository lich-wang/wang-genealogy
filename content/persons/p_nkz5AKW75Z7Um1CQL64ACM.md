---
schema: wang-person/v1
id: p_nkz5AKW75Z7Um1CQL64ACM
status: active
merged_into: null
display_name: 王無咎
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X1WbE51EKEe24YFf2bW3am
        subject_person_id: p_nkz5AKW75Z7Um1CQL64ACM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王無咎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JU4sNGdvGat49qiC4UF31u
          claim_id: c_X1WbE51EKEe24YFf2bW3am
          source_id: s_hfyBVaHKZi3XnB3VGssG5p
          stance: supports
          locator: CBDB:7384
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7384）
          source: &a1
            id: s_hfyBVaHKZi3XnB3VGssG5p
            source_type: api_record
            title: 中国历代人物传记资料库：王無咎（CBDB 7384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7384&o=json
            external_identifier: CBDB:7384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HBZND99ghLQsqFAGuuQ2fQ
        subject_person_id: p_nkz5AKW75Z7Um1CQL64ACM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1024年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_16mMru8mrYzFGQVzTZ7K96
          claim_id: c_HBZND99ghLQsqFAGuuQ2fQ
          source_id: s_hfyBVaHKZi3XnB3VGssG5p
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
        id: c_thkZB1CjkaS9TDJBGWXAu3
        subject_person_id: p_nkz5AKW75Z7Um1CQL64ACM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1069年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D4EXjh5HpjsZCHjGcgj3RT
          claim_id: c_thkZB1CjkaS9TDJBGWXAu3
          source_id: s_hfyBVaHKZi3XnB3VGssG5p
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
        id: c_JPjJrXPuP9gHtR66jey2FL
        subject_person_id: p_nkz5AKW75Z7Um1CQL64ACM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王無咎（1024年—1069年），宋人物。籍贯南城，入仕進士，曾任秘書省校書郎、縣令、縣尉。（中国历代人物传记资料库 CBDB 7384）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P9X0IMT4VTXnrp4Ctb-Z68
          claim_id: c_JPjJrXPuP9gHtR66jey2FL
          source_id: s_hfyBVaHKZi3XnB3VGssG5p
          stance: supports
          locator: CBDB:7384
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_C2TG_5qGrylsaAWHGxwPPZ
        subject_person_id: p_x3rbR5j8t6gesj5PRTbFHt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nkz5AKW75Z7Um1CQL64ACM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pt_0tMzVhOgcTowMcAy5Zd
          claim_id: c_C2TG_5qGrylsaAWHGxwPPZ
          source_id: s_hfyBVaHKZi3XnB3VGssG5p
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1604：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x3rbR5j8t6gesj5PRTbFHt
        status: active
        display_name: 王君玉
        merged_into_person_id: null
  children:
    - claim:
        id: c_nXnbzM1iK4Ry2XTKEzhAeB
        subject_person_id: p_nkz5AKW75Z7Um1CQL64ACM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7uG1R4PRQFD4a7x5Nh4xjD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JX8MGY4gELTSUKjUX9p7_S
          claim_id: c_nXnbzM1iK4Ry2XTKEzhAeB
          source_id: s_iVFdzWN6MltONnzOkeQv7U
          stance: supports
          locator: CBDB 亲属：父（KinPerson 7384）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_iVFdzWN6MltONnzOkeQv7U
            source_type: api_record
            title: 中国历代人物传记资料库：王縕（CBDB 16589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16589&o=json
            external_identifier: CBDB:16589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7uG1R4PRQFD4a7x5Nh4xjD
        status: active
        display_name: 王縕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王無咎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王無咎 | accepted |
| birth.date | 1024年 | accepted |
| death.date | 1069年 | accepted |
| bio.summary | 王無咎（1024年—1069年），宋人物。籍贯南城，入仕進士，曾任秘書省校書郎、縣令、縣尉。（中国历代人物传记资料库 CBDB 7384） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_x3rbR5j8t6gesj5PRTbFHt | 王君玉 | accepted |
| children | p_7uG1R4PRQFD4a7x5Nh4xjD | 王縕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王無咎（CBDB 7384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7384&o=json)
- [中国历代人物传记资料库：王縕（CBDB 16589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16589&o=json)
