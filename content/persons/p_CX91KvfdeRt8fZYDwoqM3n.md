---
schema: wang-person/v1
id: p_CX91KvfdeRt8fZYDwoqM3n
status: active
merged_into: null
display_name: 王逵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B9pryyTa62Ka52bvEM6ihY
        subject_person_id: p_CX91KvfdeRt8fZYDwoqM3n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AMgDKjow9Ap3PQdZos6nZ2
          claim_id: c_B9pryyTa62Ka52bvEM6ihY
          source_id: s_R25MocnkkRC1cYQxV67dEy
          stance: supports
          locator: CBDB:313184
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313184）
          source: &a1
            id: s_R25MocnkkRC1cYQxV67dEy
            source_type: api_record
            title: 中国历代人物传记资料库：王逵（CBDB 313184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313184&o=json
            external_identifier: CBDB:313184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8Ni264zbhJDDPfR4uvrPXk
        subject_person_id: p_CX91KvfdeRt8fZYDwoqM3n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逵，明人物。天順四年進士，籍贯江陰。（中国历代人物传记资料库 CBDB 313184）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oo6nqkXUURvX8CCWt8cfJb
          claim_id: c_8Ni264zbhJDDPfR4uvrPXk
          source_id: s_R25MocnkkRC1cYQxV67dEy
          stance: supports
          locator: CBDB:313184
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Pp86SLwOf6A_O-y-aFCPG9
        subject_person_id: p_CX91KvfdeRt8fZYDwoqM3n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zG56y8x7pqkxtgFTWhmQg9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fyqLffM4ZPX9afnZmDZ1Zi
          claim_id: c_Pp86SLwOf6A_O-y-aFCPG9
          source_id: s_R25MocnkkRC1cYQxV67dEy
          stance: supports
          locator: 天順四年進士登科錄:一卷，第二甲第三十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zG56y8x7pqkxtgFTWhmQg9
        status: active
        display_name: 王誼
        merged_into_person_id: null
    - claim:
        id: c_2f8FDuFyjqdSLuyxWLoNmb
        subject_person_id: p_CX91KvfdeRt8fZYDwoqM3n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g5bi22C4Ho2YzmRhDdv7VD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TB3XtU0bw7-d2hR4gSBrwH
          claim_id: c_2f8FDuFyjqdSLuyxWLoNmb
          source_id: s_8JBMTS07OT5-qEL6YwFUqj
          stance: supports
          locator: CBDB：兄弟 王誼（338659）之父／母 王逵
          quotation: null
          interpretation_note: 由兄弟关系推断：王謨 与 王誼 为同胞（CBDB 记「兄」），王誼 之父／母即 王謨 之父／母。
          source:
            id: s_8JBMTS07OT5-qEL6YwFUqj
            source_type: api_record
            title: 中国历代人物传记资料库：王謨（CBDB 313218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313218&o=json
            external_identifier: CBDB:313218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g5bi22C4Ho2YzmRhDdv7VD
        status: active
        display_name: 王謨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王逵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逵 | accepted |
| bio.summary | 王逵，明人物。天順四年進士，籍贯江陰。（中国历代人物传记资料库 CBDB 313184） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zG56y8x7pqkxtgFTWhmQg9 | 王誼 | accepted |
| children | p_g5bi22C4Ho2YzmRhDdv7VD | 王謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王逵（CBDB 313184）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313184&o=json)
- [中国历代人物传记资料库：王謨（CBDB 313218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313218&o=json)
