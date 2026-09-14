---
schema: wang-person/v1
id: p_EENMQg8ZujQT1unQPpMBb1
status: active
merged_into: null
display_name: 王介
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p6PJJjL2D1FJDnevWruWj9
        subject_person_id: p_EENMQg8ZujQT1unQPpMBb1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QqCwgXMwSseCo75m8nQBVm
          claim_id: c_p6PJJjL2D1FJDnevWruWj9
          source_id: s_ZcZWeKvjxMt4rBpGSfC73u
          stance: supports
          locator: CBDB:297194
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297194）
          source: &a1
            id: s_ZcZWeKvjxMt4rBpGSfC73u
            source_type: api_record
            title: 中国历代人物传记资料库：王介（CBDB 297194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297194&o=json
            external_identifier: CBDB:297194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RTP1tKMLZ2BmESKziRHueR
        subject_person_id: p_EENMQg8ZujQT1unQPpMBb1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介，明人物。嘉靖十四年進士，籍贯侯官，曾任府同知。（中国历代人物传记资料库 CBDB 297194）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SKiHZDhBCXcJdU8Ia4CzUh
          claim_id: c_RTP1tKMLZ2BmESKziRHueR
          source_id: s_ZcZWeKvjxMt4rBpGSfC73u
          stance: supports
          locator: CBDB:297194
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2wjC0S9K9dlJQWIxVm--U3
        subject_person_id: p_EENMQg8ZujQT1unQPpMBb1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ejkhqRyi6zguVhFhs63Ax7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1NQZYJVjeE1NoYf5gnjwIr
          claim_id: c_2wjC0S9K9dlJQWIxVm--U3
          source_id: s_ZcZWeKvjxMt4rBpGSfC73u
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百零六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ejkhqRyi6zguVhFhs63Ax7
        status: active
        display_name: 王鏜
        merged_into_person_id: null
    - claim:
        id: c_C58rq78_zjlNc86wC8dE99
        subject_person_id: p_EENMQg8ZujQT1unQPpMBb1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eXGSZwPADUzvcEdy63eXfF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dl8Xr4WWT7p8WRLwaw7px1
          claim_id: c_C58rq78_zjlNc86wC8dE99
          source_id: s_a4VULUqWzpyXJdZ1eHimkk
          stance: supports
          locator: CBDB：兄弟 王鏜（202946）之父／母 王介
          quotation: null
          interpretation_note: 由兄弟关系推断：王錡 与 王鏜 为同胞（CBDB 记「弟」），王鏜 之父／母即 王錡 之父／母。
          source:
            id: s_a4VULUqWzpyXJdZ1eHimkk
            source_type: api_record
            title: 中国历代人物传记资料库：王錡（CBDB 297199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297199&o=json
            external_identifier: CBDB:297199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eXGSZwPADUzvcEdy63eXfF
        status: active
        display_name: 王錡
        merged_into_person_id: null
    - claim:
        id: c_rQAoAnwp5KQT4NEv9-P9vx
        subject_person_id: p_EENMQg8ZujQT1unQPpMBb1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sha79QPrXDRqUC6cHGUngv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rLu0YWkGq5klm57lg6YB13
          claim_id: c_rQAoAnwp5KQT4NEv9-P9vx
          source_id: s_-WwlTZNMdn1osjHOPABwTo
          stance: supports
          locator: CBDB：兄弟 王鏜（202946）之父／母 王介
          quotation: null
          interpretation_note: 由兄弟关系推断：王鈞 与 王鏜 为同胞（CBDB 记「弟」），王鏜 之父／母即 王鈞 之父／母。
          source:
            id: s_-WwlTZNMdn1osjHOPABwTo
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞（CBDB 297200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297200&o=json
            external_identifier: CBDB:297200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sha79QPrXDRqUC6cHGUngv
        status: active
        display_name: 王鈞
        merged_into_person_id: null
    - claim:
        id: c_M5J3iOMGxePIy7mkOkUen3
        subject_person_id: p_EENMQg8ZujQT1unQPpMBb1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t5g9oPhqXzHzhY6A38GVm2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nyvjo1xxxg4gh1yuC-B1fF
          claim_id: c_M5J3iOMGxePIy7mkOkUen3
          source_id: s_1ZVV99TsreYhfqTkXfjX7E
          stance: supports
          locator: CBDB：兄弟 王鏜（202946）之父／母 王介
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎣 与 王鏜 为同胞（CBDB 记「弟」），王鏜 之父／母即 王鎣 之父／母。
          source:
            id: s_1ZVV99TsreYhfqTkXfjX7E
            source_type: api_record
            title: 中国历代人物传记资料库：王鎣（CBDB 297198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297198&o=json
            external_identifier: CBDB:297198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_t5g9oPhqXzHzhY6A38GVm2
        status: active
        display_name: 王鎣
        merged_into_person_id: null
    - claim:
        id: c_5l9iQZX1E19QZdLpZ8NW_j
        subject_person_id: p_EENMQg8ZujQT1unQPpMBb1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zEvbLRYX5qaXdwLfx7znvB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2bb9tsYJX5qMrsGU_Ep1aw
          claim_id: c_5l9iQZX1E19QZdLpZ8NW_j
          source_id: s_hWfcMhqZosalHv5dyFmfUw
          stance: supports
          locator: CBDB：兄弟 王鏜（202946）之父／母 王介
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑒 与 王鏜 为同胞（CBDB 记「弟」），王鏜 之父／母即 王鑒 之父／母。
          source:
            id: s_hWfcMhqZosalHv5dyFmfUw
            source_type: api_record
            title: 中国历代人物传记资料库：王鑒（CBDB 297197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297197&o=json
            external_identifier: CBDB:297197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zEvbLRYX5qaXdwLfx7znvB
        status: active
        display_name: 王鑒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王介

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王介 | accepted |
| bio.summary | 王介，明人物。嘉靖十四年進士，籍贯侯官，曾任府同知。（中国历代人物传记资料库 CBDB 297194） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ejkhqRyi6zguVhFhs63Ax7 | 王鏜 | accepted |
| children | p_eXGSZwPADUzvcEdy63eXfF | 王錡 | accepted |
| children | p_sha79QPrXDRqUC6cHGUngv | 王鈞 | accepted |
| children | p_t5g9oPhqXzHzhY6A38GVm2 | 王鎣 | accepted |
| children | p_zEvbLRYX5qaXdwLfx7znvB | 王鑒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑒（CBDB 297197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297197&o=json)
- [中国历代人物传记资料库：王介（CBDB 297194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297194&o=json)
- [中国历代人物传记资料库：王鈞（CBDB 297200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297200&o=json)
- [中国历代人物传记资料库：王錡（CBDB 297199）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297199&o=json)
- [中国历代人物传记资料库：王鎣（CBDB 297198）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297198&o=json)
