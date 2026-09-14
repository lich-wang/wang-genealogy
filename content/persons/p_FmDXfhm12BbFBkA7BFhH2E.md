---
schema: wang-person/v1
id: p_FmDXfhm12BbFBkA7BFhH2E
status: active
merged_into: null
display_name: 王昪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b7Fz8pfaMwKpy2ehDjSWWm
        subject_person_id: p_FmDXfhm12BbFBkA7BFhH2E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dXa4Mm2EdCe5mKeDu5BF2P
          claim_id: c_b7Fz8pfaMwKpy2ehDjSWWm
          source_id: s_AqFdjTWwS367Jc3SDDTWvr
          stance: supports
          locator: CBDB:256061
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（256061）
          source: &a1
            id: s_AqFdjTWwS367Jc3SDDTWvr
            source_type: api_record
            title: 中国历代人物传记资料库：王昪（CBDB 256061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256061&o=json
            external_identifier: CBDB:256061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.381Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YaznB994zqLYw4YKL1AvvG
        subject_person_id: p_FmDXfhm12BbFBkA7BFhH2E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昪，明人物。成化十七年進士，籍贯福州中衛。（中国历代人物传记资料库 CBDB 256061）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GO7sUfodoyMwmatFuvUtGl
          claim_id: c_YaznB994zqLYw4YKL1AvvG
          source_id: s_AqFdjTWwS367Jc3SDDTWvr
          stance: supports
          locator: CBDB:256061
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: c_X5CG4JjoTRNbrhKYTGrVXB
        subject_person_id: p_FmDXfhm12BbFBkA7BFhH2E
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
        - id: cs_h7e8j7T0AThSGyio62dHvr
          claim_id: c_X5CG4JjoTRNbrhKYTGrVXB
          source_id: s_XfD2yTnUxcholpNDVwEUxd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67762 王鼎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_xbM9HhzDmWYWXqKqbHR7tL
        status: active
        display_name: 王鼎
        merged_into_person_id: null
---

# 王昪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昪 | accepted |
| bio.summary | 王昪，明人物。成化十七年進士，籍贯福州中衛。（中国历代人物传记资料库 CBDB 256061） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nyqs9ApnwkQcyXyVvZypWX | 王佐 | accepted |
| other | p_xbM9HhzDmWYWXqKqbHR7tL | 王鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昪（CBDB 256061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256061&o=json)
