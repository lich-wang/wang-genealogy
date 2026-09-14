---
schema: wang-person/v1
id: p_nyqs9ApnwkQcyXyVvZypWX
status: active
merged_into: null
display_name: 王佐
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xsJTLBz51Snn2wEqpJTd77
        subject_person_id: p_nyqs9ApnwkQcyXyVvZypWX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ExJzdW8x2HzRgfCbVkp6oZ
          claim_id: c_xsJTLBz51Snn2wEqpJTd77
          source_id: s_yj1GmQFf8eL7oKHtqhB2fa
          stance: supports
          locator: CBDB:256056
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（256056）
          source: &a1
            id: s_yj1GmQFf8eL7oKHtqhB2fa
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 256056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256056&o=json
            external_identifier: CBDB:256056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P8eFPoSnJS6ZYE5hVKMxJT
        subject_person_id: p_nyqs9ApnwkQcyXyVvZypWX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐，明人物。成化十七年進士，籍贯福州中衛，曾任教諭。（中国历代人物传记资料库 CBDB 256056）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uBi5JBmzs261m300LSLv-u
          claim_id: c_P8eFPoSnJS6ZYE5hVKMxJT
          source_id: s_yj1GmQFf8eL7oKHtqhB2fa
          stance: supports
          locator: CBDB:256056
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_5hP1tsmOV0yrUyO76J4r4d
        subject_person_id: p_nyqs9ApnwkQcyXyVvZypWX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xbM9HhzDmWYWXqKqbHR7tL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CCiMJluoY5neonDdpHvs14
          claim_id: c_5hP1tsmOV0yrUyO76J4r4d
          source_id: s_yj1GmQFf8eL7oKHtqhB2fa
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第四十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xbM9HhzDmWYWXqKqbHR7tL
        status: active
        display_name: 王鼎
        merged_into_person_id: null
    - claim:
        id: c_8LvY3Kqhn8dYuvQ640HdXK
        subject_person_id: p_nyqs9ApnwkQcyXyVvZypWX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FmDXfhm12BbFBkA7BFhH2E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aQPPs2dki16k4rDmNUpOfn
          claim_id: c_8LvY3Kqhn8dYuvQ640HdXK
          source_id: s_XfD2yTnUxcholpNDVwEUxd
          stance: supports
          locator: CBDB：兄弟 王鼎（67762）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王昪 与 王鼎 为同胞（CBDB 记「兄」），王鼎 之父／母即 王昪 之父／母。
          source:
            id: s_XfD2yTnUxcholpNDVwEUxd
            source_type: api_record
            title: 中国历代人物传记资料库：王昪（CBDB 256061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256061&o=json
            external_identifier: CBDB:256061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FmDXfhm12BbFBkA7BFhH2E
        status: active
        display_name: 王昪
        merged_into_person_id: null
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
        id: p_ZHVSa562VcxoUfYaxj72dG
        status: active
        display_name: 王鼐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | 王佐，明人物。成化十七年進士，籍贯福州中衛，曾任教諭。（中国历代人物传记资料库 CBDB 256056） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xbM9HhzDmWYWXqKqbHR7tL | 王鼎 | accepted |
| children | p_FmDXfhm12BbFBkA7BFhH2E | 王昪 | accepted |
| children | p_ZHVSa562VcxoUfYaxj72dG | 王鼐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昪（CBDB 256061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256061&o=json)
- [中国历代人物传记资料库：王鼐（CBDB 256060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256060&o=json)
- [中国历代人物传记资料库：王佐（CBDB 256056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256056&o=json)
