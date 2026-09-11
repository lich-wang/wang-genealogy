---
schema: wang-person/v1
id: p_x3rbR5j8t6gesj5PRTbFHt
status: active
merged_into: null
display_name: 王君玉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c9MBxmoRuGH6Qb28EfEmXk
        subject_person_id: p_x3rbR5j8t6gesj5PRTbFHt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7tvCmTGvsbCJD5BDgEVfD7
          claim_id: c_c9MBxmoRuGH6Qb28EfEmXk
          source_id: s_ZZTGG7D3BoBfdHKaWD2B8j
          stance: supports
          locator: CBDB:22230
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22230）
          source: &a1
            id: s_ZZTGG7D3BoBfdHKaWD2B8j
            source_type: api_record
            title: 中国历代人物传记资料库：王君玉（CBDB 22230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22230&o=json
            external_identifier: CBDB:22230
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.857Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LvCpS5zfBhFAXg2UQP66Qd
        subject_person_id: p_x3rbR5j8t6gesj5PRTbFHt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RZ3wyoCnGevZGJXWPaEFMa
          claim_id: c_LvCpS5zfBhFAXg2UQP66Qd
          source_id: s_ZZTGG7D3BoBfdHKaWD2B8j
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source:
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
      object_person:
        id: p_nkz5AKW75Z7Um1CQL64ACM
        status: active
        display_name: 王無咎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王君玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王君玉 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nkz5AKW75Z7Um1CQL64ACM | 王無咎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王君玉（CBDB 22230）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22230&o=json)
- [中国历代人物传记资料库：王無咎（CBDB 7384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7384&o=json)
