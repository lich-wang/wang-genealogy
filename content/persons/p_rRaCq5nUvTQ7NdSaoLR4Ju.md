---
schema: wang-person/v1
id: p_rRaCq5nUvTQ7NdSaoLR4Ju
status: active
merged_into: null
display_name: 王忠吉
cbdb_id: 264628
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YenNsxy1vbGcAZ1w4Hr8to
        subject_person_id: p_rRaCq5nUvTQ7NdSaoLR4Ju
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠吉，明人物。弘治六年進士。（中国历代人物传记资料库 CBDB 264628）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Wl9zPl73dQDeCAGdoTMStl
          claim_id: c_YenNsxy1vbGcAZ1w4Hr8to
          source_id: s_2q9Uwg7FRnpxVEW54vfTSq
          stance: supports
          locator: CBDB:264628
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2q9Uwg7FRnpxVEW54vfTSq
            source_type: api_record
            title: 中国历代人物传记资料库：王忠吉（CBDB 264628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264628&o=json
            external_identifier: CBDB:264628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_865CRwMM1AVe4Wj3ppCxVH
        subject_person_id: p_rRaCq5nUvTQ7NdSaoLR4Ju
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Q9Ca2DfZPmGvrKD6pGLoVB
          claim_id: c_865CRwMM1AVe4Wj3ppCxVH
          source_id: s_2q9Uwg7FRnpxVEW54vfTSq
          stance: supports
          locator: CBDB:264628
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_sCu90n1ovKd4Z-F0Mau1Il
        subject_person_id: p_rRaCq5nUvTQ7NdSaoLR4Ju
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2hJwbcefrPyv1Q4ce3xoc6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wRlqxsMjk8BhtZDTOVEXCi
          claim_id: c_sCu90n1ovKd4Z-F0Mau1Il
          source_id: s_mVwkG4e4H3d4chjvn3BAU2
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第八十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mVwkG4e4H3d4chjvn3BAU2
            source_type: api_record
            title: 中国历代人物传记资料库：王恂（CBDB 200921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200921&o=json
            external_identifier: CBDB:200921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.643Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2hJwbcefrPyv1Q4ce3xoc6
        status: active
        display_name: 王恂
        merged_into_person_id: null
  other: []
---

# 王忠吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王忠吉，明人物。弘治六年進士。（中国历代人物传记资料库 CBDB 264628） | accepted |
| name.primary | 王忠吉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2hJwbcefrPyv1Q4ce3xoc6 | 王恂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恂（CBDB 200921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200921&o=json)
- [中国历代人物传记资料库：王忠吉（CBDB 264628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264628&o=json)
