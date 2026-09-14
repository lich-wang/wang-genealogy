---
schema: wang-person/v1
id: p_32EMVaGAfBPgDeQdJGDuHq
status: active
merged_into: null
display_name: 王曾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZJPpPynRfFNNn8QddJWAnx
        subject_person_id: p_32EMVaGAfBPgDeQdJGDuHq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QfdC7DCnbijtEbQoT4PYAj
          claim_id: c_ZJPpPynRfFNNn8QddJWAnx
          source_id: s_6P5TkrSC74idnQH9n4tQus
          stance: supports
          locator: CBDB:212082
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212082）
          source: &a1
            id: s_6P5TkrSC74idnQH9n4tQus
            source_type: api_record
            title: 中国历代人物传记资料库：王曾（CBDB 212082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212082&o=json
            external_identifier: CBDB:212082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kL57m667HNhMT74mjnKXwy
        subject_person_id: p_32EMVaGAfBPgDeQdJGDuHq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曾，明人物。隆慶五年進士，籍贯咸寧。（中国历代人物传记资料库 CBDB 212082）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AXN7uiDl8jkxaUssxJX2fm
          claim_id: c_kL57m667HNhMT74mjnKXwy
          source_id: s_6P5TkrSC74idnQH9n4tQus
          stance: supports
          locator: CBDB:212082
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KhGyMaCz7_x8rehefMLsTS
        subject_person_id: p_jknx5y8EMt4htEH5Jaj242
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_32EMVaGAfBPgDeQdJGDuHq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5vGXw7Gca0d-AZU9jstiIi
          claim_id: c_KhGyMaCz7_x8rehefMLsTS
          source_id: s__UkbvMrrg7a5WnM2RkczAD
          stance: supports
          locator: CBDB：兄弟 王煥（206011）之父／母 王獻箴
          quotation: null
          interpretation_note: 由兄弟关系推断：王曾 与 王煥 为同胞（CBDB 记「兄」），王煥 之父／母即 王曾 之父／母。
          source:
            id: s__UkbvMrrg7a5WnM2RkczAD
            source_type: api_record
            title: 中国历代人物传记资料库：王曾（CBDB 212082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212082&o=json
            external_identifier: CBDB:212082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jknx5y8EMt4htEH5Jaj242
        status: active
        display_name: 王獻箴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_7GFkxZB7qhp4GSnTHN8Pxw
        subject_person_id: p_1XLNfRiDAQG1jeNLog7rHV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_32EMVaGAfBPgDeQdJGDuHq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_STYk-gGfjn4spJz7SsS8GH
          claim_id: c_7GFkxZB7qhp4GSnTHN8Pxw
          source_id: s__UkbvMrrg7a5WnM2RkczAD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206011 王煥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__UkbvMrrg7a5WnM2RkczAD
            source_type: api_record
            title: 中国历代人物传记资料库：王曾（CBDB 212082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212082&o=json
            external_identifier: CBDB:212082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1XLNfRiDAQG1jeNLog7rHV
        status: active
        display_name: 王煥
        merged_into_person_id: null
---

# 王曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曾 | accepted |
| bio.summary | 王曾，明人物。隆慶五年進士，籍贯咸寧。（中国历代人物传记资料库 CBDB 212082） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jknx5y8EMt4htEH5Jaj242 | 王獻箴 | accepted |
| other | p_1XLNfRiDAQG1jeNLog7rHV | 王煥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王曾（CBDB 212082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212082&o=json)
