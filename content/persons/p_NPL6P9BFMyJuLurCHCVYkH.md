---
schema: wang-person/v1
id: p_NPL6P9BFMyJuLurCHCVYkH
status: active
merged_into: null
display_name: 王貴華
cbdb_id: 322902
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bCZNDymoEfDQe7PawSm9TW
        subject_person_id: p_NPL6P9BFMyJuLurCHCVYkH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴華，明人物。宣德五年進士，籍贯公安。（中国历代人物传记资料库 CBDB 322902）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-JElriCs1_aqLyOFeTtvJe
          claim_id: c_bCZNDymoEfDQe7PawSm9TW
          source_id: s_A88LcQcFYbxkzdGoN5M9TE
          stance: supports
          locator: CBDB:322902
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_A88LcQcFYbxkzdGoN5M9TE
            source_type: api_record
            title: 中国历代人物传记资料库：王貴華（CBDB 322902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322902&o=json
            external_identifier: CBDB:322902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EGcvGUGua52cMJQhspHDEH
        subject_person_id: p_NPL6P9BFMyJuLurCHCVYkH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_i8WNAeHxbiYhTKmdjYxWAb
          claim_id: c_EGcvGUGua52cMJQhspHDEH
          source_id: s_A88LcQcFYbxkzdGoN5M9TE
          stance: supports
          locator: CBDB:322902
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_T8d9TROzG_IsOwTv7iwRW0
        subject_person_id: p_NPL6P9BFMyJuLurCHCVYkH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jqYHdYDCnzgGeD3VwT2HJQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-B-JNi8ck1GHv5RQXPNLef
          claim_id: c_T8d9TROzG_IsOwTv7iwRW0
          source_id: s_A8mfRA1Q8JxLwPQKEgaVDE
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第三甲第五十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_A8mfRA1Q8JxLwPQKEgaVDE
            source_type: api_record
            title: 中国历代人物传记资料库：王恂（CBDB 126598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126598&o=json
            external_identifier: CBDB:126598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.048Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jqYHdYDCnzgGeD3VwT2HJQ
        status: active
        display_name: 王恂
        merged_into_person_id: null
    - claim:
        id: c_2L6aNQV2YhdVLrqB8jqP29
        subject_person_id: p_NPL6P9BFMyJuLurCHCVYkH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_69Wd3aw3CTX56SjzuzKuQY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1znCDtEEA3qt86yx2xNxQi
          claim_id: c_2L6aNQV2YhdVLrqB8jqP29
          source_id: s_2KfOeEs30hFTN3jHI1JSmC
          stance: supports
          locator: CBDB：兄弟 王恂（126598）之父／母 王貴華
          quotation: null
          interpretation_note: 由兄弟关系推断：王思忠 与 王恂 为同胞（CBDB 记「弟」），王恂 之父／母即 王思忠 之父／母。
          source:
            id: s_2KfOeEs30hFTN3jHI1JSmC
            source_type: api_record
            title: 中国历代人物传记资料库：王思忠（CBDB 322906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322906&o=json
            external_identifier: CBDB:322906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_69Wd3aw3CTX56SjzuzKuQY
        status: active
        display_name: 王思忠
        merged_into_person_id: null
    - claim:
        id: c_gbpJmvNH67WfyxHVSWphL8
        subject_person_id: p_NPL6P9BFMyJuLurCHCVYkH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y6pBzeVgTjUtyAuzCyRoUb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t9MCXuwcfu8O6oBNZOnCqq
          claim_id: c_gbpJmvNH67WfyxHVSWphL8
          source_id: s_DQbUJs200jJW5o-6aRg-i9
          stance: supports
          locator: CBDB：兄弟 王恂（126598）之父／母 王貴華
          quotation: null
          interpretation_note: 由兄弟关系推断：王思聰 与 王恂 为同胞（CBDB 记「弟」），王恂 之父／母即 王思聰 之父／母。
          source:
            id: s_DQbUJs200jJW5o-6aRg-i9
            source_type: api_record
            title: 中国历代人物传记资料库：王思聰（CBDB 322905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322905&o=json
            external_identifier: CBDB:322905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y6pBzeVgTjUtyAuzCyRoUb
        status: active
        display_name: 王思聰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貴華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王貴華，明人物。宣德五年進士，籍贯公安。（中国历代人物传记资料库 CBDB 322902） | accepted |
| name.primary | 王貴華 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_jqYHdYDCnzgGeD3VwT2HJQ | 王恂 | accepted |
| children | p_69Wd3aw3CTX56SjzuzKuQY | 王思忠 | accepted |
| children | p_y6pBzeVgTjUtyAuzCyRoUb | 王思聰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貴華（CBDB 322902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322902&o=json)
- [中国历代人物传记资料库：王思聰（CBDB 322905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322905&o=json)
- [中国历代人物传记资料库：王思忠（CBDB 322906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322906&o=json)
- [中国历代人物传记资料库：王恂（CBDB 126598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126598&o=json)
