---
schema: wang-person/v1
id: p_grJ3t8tA8YcD9PpHUc4YGd
status: active
merged_into: null
display_name: 王廷儒
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TkV194CRuJp4F4spWZxrg8
        subject_person_id: p_grJ3t8tA8YcD9PpHUc4YGd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F9wrhyxoHesxWGJn4Ej6q2
          claim_id: c_TkV194CRuJp4F4spWZxrg8
          source_id: s_fwgiN9pQyxi17uZyiZj764
          stance: supports
          locator: CBDB:279543
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279543）
          source: &a1
            id: s_fwgiN9pQyxi17uZyiZj764
            source_type: api_record
            title: 中国历代人物传记资料库：王廷儒（CBDB 279543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279543&o=json
            external_identifier: CBDB:279543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5TbHZAHv4rBGb1a65zFwQu
        subject_person_id: p_grJ3t8tA8YcD9PpHUc4YGd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷儒，明人物。正德十二年進士，籍贯黃岡，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 279543）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nEwxO4_OUaL6JiR24NZ1As
          claim_id: c_5TbHZAHv4rBGb1a65zFwQu
          source_id: s_fwgiN9pQyxi17uZyiZj764
          stance: supports
          locator: CBDB:279543
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hwi50qsl-h3nliTUDN5VIy
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_grJ3t8tA8YcD9PpHUc4YGd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o4Yjy-VJWkpbEJ6S9i45bK
          claim_id: c_hwi50qsl-h3nliTUDN5VIy
          source_id: s_LpdnGnGnDYCqsjUknTbWFU
          stance: supports
          locator: CBDB：兄弟 王廷陳（34668）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷儒 与 王廷陳 为同胞（CBDB 记「弟」），王廷陳 之父／母即 王廷儒 之父／母。
          source:
            id: s_LpdnGnGnDYCqsjUknTbWFU
            source_type: api_record
            title: 中国历代人物传记资料库：王廷儒（CBDB 279543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279543&o=json
            external_identifier: CBDB:279543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CF5LJP7gMSDjjxZDLTJKd5
        status: active
        display_name: 王濟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_IVws9JchTgophG2GNbC3ut
        subject_person_id: p_grJ3t8tA8YcD9PpHUc4YGd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e72hVGeYbToDINjz8_7OLA
          claim_id: c_IVws9JchTgophG2GNbC3ut
          source_id: s_LpdnGnGnDYCqsjUknTbWFU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34668 王廷陳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LpdnGnGnDYCqsjUknTbWFU
            source_type: api_record
            title: 中国历代人物传记资料库：王廷儒（CBDB 279543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279543&o=json
            external_identifier: CBDB:279543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qLcC4SmUNJ1rkkQyeeqtKk
        status: active
        display_name: 王廷陳
        merged_into_person_id: null
---

# 王廷儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷儒 | accepted |
| bio.summary | 王廷儒，明人物。正德十二年進士，籍贯黃岡，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 279543） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CF5LJP7gMSDjjxZDLTJKd5 | 王濟 | accepted |
| other | p_qLcC4SmUNJ1rkkQyeeqtKk | 王廷陳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷儒（CBDB 279543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279543&o=json)
