---
schema: wang-person/v1
id: p_69Wd3aw3CTX56SjzuzKuQY
status: active
merged_into: null
display_name: 王思忠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cnj1324G84AVZe1Gf649B1
        subject_person_id: p_69Wd3aw3CTX56SjzuzKuQY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZQSaHzcwF5vYJG4tKdBve4
          claim_id: c_cnj1324G84AVZe1Gf649B1
          source_id: s_qnC8h9i4B7ycHYF87CrRKG
          stance: supports
          locator: CBDB:322906
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322906）
          source: &a1
            id: s_qnC8h9i4B7ycHYF87CrRKG
            source_type: api_record
            title: 中国历代人物传记资料库：王思忠（CBDB 322906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322906&o=json
            external_identifier: CBDB:322906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.134Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xY1Qw7f11UL4C22mMNBsSj
        subject_person_id: p_69Wd3aw3CTX56SjzuzKuQY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思忠，明人物。宣德五年進士，籍贯公安。（中国历代人物传记资料库 CBDB 322906）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JSKlfqfjspavyDwOXXNLPr
          claim_id: c_xY1Qw7f11UL4C22mMNBsSj
          source_id: s_qnC8h9i4B7ycHYF87CrRKG
          stance: supports
          locator: CBDB:322906
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_NPL6P9BFMyJuLurCHCVYkH
        status: active
        display_name: 王貴華
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_cfNlH0KspnJ9d9ZNghGP8K
        subject_person_id: p_69Wd3aw3CTX56SjzuzKuQY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jqYHdYDCnzgGeD3VwT2HJQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m8vkuau-s5tvjhDwa4oeeL
          claim_id: c_cfNlH0KspnJ9d9ZNghGP8K
          source_id: s_2KfOeEs30hFTN3jHI1JSmC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126598 王恂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_jqYHdYDCnzgGeD3VwT2HJQ
        status: active
        display_name: 王恂
        merged_into_person_id: null
---

# 王思忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思忠 | accepted |
| bio.summary | 王思忠，明人物。宣德五年進士，籍贯公安。（中国历代人物传记资料库 CBDB 322906） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NPL6P9BFMyJuLurCHCVYkH | 王貴華 | accepted |
| other | p_jqYHdYDCnzgGeD3VwT2HJQ | 王恂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思忠（CBDB 322906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322906&o=json)
