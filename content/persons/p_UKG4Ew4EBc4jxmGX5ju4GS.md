---
schema: wang-person/v1
id: p_UKG4Ew4EBc4jxmGX5ju4GS
status: active
merged_into: null
display_name: 王廷珪
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jkZbMNSgDXUhYkmBvHZGGx
        subject_person_id: p_UKG4Ew4EBc4jxmGX5ju4GS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gpa784Eoj214dZgzhSE3gB
          claim_id: c_jkZbMNSgDXUhYkmBvHZGGx
          source_id: s_rW3JPZvgLDcwDZ3eCYqxaB
          stance: supports
          locator: CBDB:327811
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327811）
          source: &a1
            id: s_rW3JPZvgLDcwDZ3eCYqxaB
            source_type: api_record
            title: 中国历代人物传记资料库：王廷珪（CBDB 327811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327811&o=json
            external_identifier: CBDB:327811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_581o7RfvMTC7W6c5YAV2XM
        subject_person_id: p_UKG4Ew4EBc4jxmGX5ju4GS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷珪，明人物。嘉靖四十一年進士，籍贯安肅，入仕進士，曾任知縣、聽選官。（中国历代人物传记资料库 CBDB 327811）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lx0skRb2y884YcKf_gqiMT
          claim_id: c_581o7RfvMTC7W6c5YAV2XM
          source_id: s_rW3JPZvgLDcwDZ3eCYqxaB
          stance: supports
          locator: CBDB:327811
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6sLabh4TSAHrIeJfUc6t7_
        subject_person_id: p_UKG4Ew4EBc4jxmGX5ju4GS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zhBu44YVnXVCpZPdAJQVQK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0K6NeP675w1r-DCjX6PGk7
          claim_id: c_6sLabh4TSAHrIeJfUc6t7_
          source_id: s_rW3JPZvgLDcwDZ3eCYqxaB
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第六十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zhBu44YVnXVCpZPdAJQVQK
        status: active
        display_name: 王汝梅
        merged_into_person_id: null
    - claim:
        id: c__qUNJNcg9qYJOynqJPHKUz
        subject_person_id: p_UKG4Ew4EBc4jxmGX5ju4GS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1Wxa53xetb3J3sQw5Cyh8C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pf5fE3056NSt8X104t_WtQ
          claim_id: c__qUNJNcg9qYJOynqJPHKUz
          source_id: s_LVJHwP32kITf88fsctVxDS
          stance: supports
          locator: CBDB：兄弟 王汝梅（205063）之父／母 王廷珪
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝極 与 王汝梅 为同胞（CBDB 记「兄」），王汝梅 之父／母即 王汝極 之父／母。
          source:
            id: s_LVJHwP32kITf88fsctVxDS
            source_type: api_record
            title: 中国历代人物传记资料库：王汝極（CBDB 327815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327815&o=json
            external_identifier: CBDB:327815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1Wxa53xetb3J3sQw5Cyh8C
        status: active
        display_name: 王汝極
        merged_into_person_id: null
    - claim:
        id: c_mHo6_DdbYE_j0ZuoqLVf3W
        subject_person_id: p_UKG4Ew4EBc4jxmGX5ju4GS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CiLSTCC3N8DAUR8xAJgkdT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HbZ8P_PYBSAb9HxVJcX8Ba
          claim_id: c_mHo6_DdbYE_j0ZuoqLVf3W
          source_id: s_b3L2WkSzzeyYCmeQgXfgw1
          stance: supports
          locator: CBDB：兄弟 王汝梅（205063）之父／母 王廷珪
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝霖 与 王汝梅 为同胞（CBDB 记「兄」），王汝梅 之父／母即 王汝霖 之父／母。
          source:
            id: s_b3L2WkSzzeyYCmeQgXfgw1
            source_type: api_record
            title: 中国历代人物传记资料库：王汝霖（CBDB 327816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327816&o=json
            external_identifier: CBDB:327816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CiLSTCC3N8DAUR8xAJgkdT
        status: active
        display_name: 王汝霖
        merged_into_person_id: null
    - claim:
        id: c_4JQFwpsiczjtcPtFvSdGE-
        subject_person_id: p_UKG4Ew4EBc4jxmGX5ju4GS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MvDJZDEzqAS25HLuuBsUHX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oY-DYxq4XGzdhzH730iDQ7
          claim_id: c_4JQFwpsiczjtcPtFvSdGE-
          source_id: s_-6da2U72qen45CSjSgfwtf
          stance: supports
          locator: CBDB：兄弟 王汝梅（205063）之父／母 王廷珪
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝樞 与 王汝梅 为同胞（CBDB 记「兄」），王汝梅 之父／母即 王汝樞 之父／母。
          source:
            id: s_-6da2U72qen45CSjSgfwtf
            source_type: api_record
            title: 中国历代人物传记资料库：王汝樞（CBDB 327814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327814&o=json
            external_identifier: CBDB:327814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MvDJZDEzqAS25HLuuBsUHX
        status: active
        display_name: 王汝樞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷珪 | accepted |
| bio.summary | 王廷珪，明人物。嘉靖四十一年進士，籍贯安肅，入仕進士，曾任知縣、聽選官。（中国历代人物传记资料库 CBDB 327811） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zhBu44YVnXVCpZPdAJQVQK | 王汝梅 | accepted |
| children | p_1Wxa53xetb3J3sQw5Cyh8C | 王汝極 | accepted |
| children | p_CiLSTCC3N8DAUR8xAJgkdT | 王汝霖 | accepted |
| children | p_MvDJZDEzqAS25HLuuBsUHX | 王汝樞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝極（CBDB 327815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327815&o=json)
- [中国历代人物传记资料库：王汝霖（CBDB 327816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327816&o=json)
- [中国历代人物传记资料库：王汝樞（CBDB 327814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327814&o=json)
- [中国历代人物传记资料库：王廷珪（CBDB 327811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327811&o=json)
