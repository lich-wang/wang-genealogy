---
schema: wang-person/v1
id: p_5YjEERsh7utx747aGfmRrp
status: active
merged_into: null
display_name: 王綺
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7eV614cXXn7EJ3z6YuPoG7
        subject_person_id: p_5YjEERsh7utx747aGfmRrp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ebRF2VZM546cN8hAY2H4ZW
          claim_id: c_7eV614cXXn7EJ3z6YuPoG7
          source_id: s_ohFa8YFw7H2ALE9HP1d7Lv
          stance: supports
          locator: CBDB:259212
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259212）
          source: &a1
            id: s_ohFa8YFw7H2ALE9HP1d7Lv
            source_type: api_record
            title: 中国历代人物传记资料库：王綺（CBDB 259212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259212&o=json
            external_identifier: CBDB:259212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.449Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3FPHUStuE6J9PKdext6iK4
        subject_person_id: p_5YjEERsh7utx747aGfmRrp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綺，明人物。成化二十三年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 259212）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1NLWVdTWb_Z-e8YIZdk05u
          claim_id: c_3FPHUStuE6J9PKdext6iK4
          source_id: s_ohFa8YFw7H2ALE9HP1d7Lv
          stance: supports
          locator: CBDB:259212
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oL2aLYLJvwQPJdKfHr-scU
        subject_person_id: p_o8zvgJXd9bgohC9oUj28Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5YjEERsh7utx747aGfmRrp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h-SZ-EhbVOmwspWkM0gf2h
          claim_id: c_oL2aLYLJvwQPJdKfHr-scU
          source_id: s_h-uqWDKlUda85K2nqBAAte
          stance: supports
          locator: CBDB：兄弟 王恩（200520）之父／母 王敏
          quotation: null
          interpretation_note: 由兄弟关系推断：王綺 与 王恩 为同胞（CBDB 记「弟」），王恩 之父／母即 王綺 之父／母。
          source:
            id: s_h-uqWDKlUda85K2nqBAAte
            source_type: api_record
            title: 中国历代人物传记资料库：王綺（CBDB 259212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259212&o=json
            external_identifier: CBDB:259212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o8zvgJXd9bgohC9oUj28Xv
        status: active
        display_name: 王敏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OGb8Z9Cm1AhbBq6HwgtK-f
        subject_person_id: p_5YjEERsh7utx747aGfmRrp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_8kdsz31LsNcXBMccuK9UD2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F3CiGQuwhFzAcxzyNQzWuN
          claim_id: c_OGb8Z9Cm1AhbBq6HwgtK-f
          source_id: s_h-uqWDKlUda85K2nqBAAte
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200520 王恩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_h-uqWDKlUda85K2nqBAAte
            source_type: api_record
            title: 中国历代人物传记资料库：王綺（CBDB 259212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259212&o=json
            external_identifier: CBDB:259212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8kdsz31LsNcXBMccuK9UD2
        status: active
        display_name: 王恩
        merged_into_person_id: null
---

# 王綺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綺 | accepted |
| bio.summary | 王綺，明人物。成化二十三年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 259212） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_o8zvgJXd9bgohC9oUj28Xv | 王敏 | accepted |
| other | p_8kdsz31LsNcXBMccuK9UD2 | 王恩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綺（CBDB 259212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259212&o=json)
