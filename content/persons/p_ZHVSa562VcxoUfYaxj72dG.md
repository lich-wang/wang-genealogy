---
schema: wang-person/v1
id: p_ZHVSa562VcxoUfYaxj72dG
status: active
merged_into: null
display_name: 王鼐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PKgLt31pC7VrzjPR2HN2tv
        subject_person_id: p_ZHVSa562VcxoUfYaxj72dG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QTn2uH6WWepKzArJJD2JzG
          claim_id: c_PKgLt31pC7VrzjPR2HN2tv
          source_id: s_y4Zb1vJ9M9q786uyPHvB9b
          stance: supports
          locator: CBDB:256060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（256060）
          source: &a1
            id: s_y4Zb1vJ9M9q786uyPHvB9b
            source_type: api_record
            title: 中国历代人物传记资料库：王鼐（CBDB 256060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256060&o=json
            external_identifier: CBDB:256060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_57tgB2YhFbWZeyCoHNsHDN
        subject_person_id: p_ZHVSa562VcxoUfYaxj72dG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼐，明人物。成化十七年進士，籍贯福州中衛。（中国历代人物传记资料库 CBDB 256060）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FlAmS_ZToJbyx5oBRj_F81
          claim_id: c_57tgB2YhFbWZeyCoHNsHDN
          source_id: s_y4Zb1vJ9M9q786uyPHvB9b
          stance: supports
          locator: CBDB:256060
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ijgycssjlUOAmmXWyEY9af
        subject_person_id: p_nyqs9ApnwkQcyXyVvZypWX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZHVSa562VcxoUfYaxj72dG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RKONZ_FGv7x_Fgq2nFR3sC
          claim_id: c_ijgycssjlUOAmmXWyEY9af
          source_id: s_Lydm-GPTvAH0EVpVulZIUq
          stance: supports
          locator: CBDB：兄弟 王鼎（67762）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王鼐 与 王鼎 为同胞（CBDB 记「兄」），王鼎 之父／母即 王鼐 之父／母。
          source:
            id: s_Lydm-GPTvAH0EVpVulZIUq
            source_type: api_record
            title: 中国历代人物传记资料库：王鼐（CBDB 256060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256060&o=json
            external_identifier: CBDB:256060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nyqs9ApnwkQcyXyVvZypWX
        status: active
        display_name: 王佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_pA4ab3mDk0wgeYGRGbC6Kc
        subject_person_id: p_ZHVSa562VcxoUfYaxj72dG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xbM9HhzDmWYWXqKqbHR7tL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fYIz2cT9mnR54uilS4NBvn
          claim_id: c_pA4ab3mDk0wgeYGRGbC6Kc
          source_id: s_Lydm-GPTvAH0EVpVulZIUq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67762 王鼎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Lydm-GPTvAH0EVpVulZIUq
            source_type: api_record
            title: 中国历代人物传记资料库：王鼐（CBDB 256060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256060&o=json
            external_identifier: CBDB:256060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xbM9HhzDmWYWXqKqbHR7tL
        status: active
        display_name: 王鼎
        merged_into_person_id: null
---

# 王鼐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼐 | accepted |
| bio.summary | 王鼐，明人物。成化十七年進士，籍贯福州中衛。（中国历代人物传记资料库 CBDB 256060） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nyqs9ApnwkQcyXyVvZypWX | 王佐 | accepted |
| other | p_xbM9HhzDmWYWXqKqbHR7tL | 王鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼐（CBDB 256060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256060&o=json)
