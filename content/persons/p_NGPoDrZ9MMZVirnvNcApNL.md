---
schema: wang-person/v1
id: p_NGPoDrZ9MMZVirnvNcApNL
status: active
merged_into: null
display_name: 王美
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EXcy8f73cCweQvQ9A7i4U1
        subject_person_id: p_NGPoDrZ9MMZVirnvNcApNL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王美
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EGVhkVKg59PUiK1CBGFHx3
          claim_id: c_EXcy8f73cCweQvQ9A7i4U1
          source_id: s_kqwoDG4H19vuMYTh5qEzJq
          stance: supports
          locator: CBDB:260635
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260635）
          source: &a1
            id: s_kqwoDG4H19vuMYTh5qEzJq
            source_type: api_record
            title: 中国历代人物传记资料库：王美（CBDB 260635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260635&o=json
            external_identifier: CBDB:260635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.520Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wxMc9jCwm6kJjG3b9VjR3G
        subject_person_id: p_NGPoDrZ9MMZVirnvNcApNL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王美，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 260635）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9HLZ8cpAjfoV1gNJYujina
          claim_id: c_wxMc9jCwm6kJjG3b9VjR3G
          source_id: s_kqwoDG4H19vuMYTh5qEzJq
          stance: supports
          locator: CBDB:260635
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oUKsz71vne32VDZD-2U8vi
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NGPoDrZ9MMZVirnvNcApNL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2sHMD1IBO_IwIa9lDq6qdI
          claim_id: c_oUKsz71vne32VDZD-2U8vi
          source_id: s_E2aEWoBc30_gmFUJD8foBH
          stance: supports
          locator: CBDB：兄弟 王存忠（200628）之父／母 王永潮
          quotation: null
          interpretation_note: 由兄弟关系推断：王美 与 王存忠 为同胞（CBDB 记「弟」），王存忠 之父／母即 王美 之父／母。
          source:
            id: s_E2aEWoBc30_gmFUJD8foBH
            source_type: api_record
            title: 中国历代人物传记资料库：王美（CBDB 260635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260635&o=json
            external_identifier: CBDB:260635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zYsGWZ26RZr9NP9BPEi82D
        status: active
        display_name: 王永潮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_8qlAnl3hKtQGWyWJZZztg6
        subject_person_id: p_NGPoDrZ9MMZVirnvNcApNL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-b73PyhjUyLaorhXO_xXM7
          claim_id: c_8qlAnl3hKtQGWyWJZZztg6
          source_id: s_E2aEWoBc30_gmFUJD8foBH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200628 王存忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_E2aEWoBc30_gmFUJD8foBH
            source_type: api_record
            title: 中国历代人物传记资料库：王美（CBDB 260635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260635&o=json
            external_identifier: CBDB:260635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ybLqBE5H4AFTdmTJtgwy2w
        status: active
        display_name: 王存忠
        merged_into_person_id: null
---

# 王美

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王美 | accepted |
| bio.summary | 王美，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 260635） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zYsGWZ26RZr9NP9BPEi82D | 王永潮 | accepted |
| other | p_ybLqBE5H4AFTdmTJtgwy2w | 王存忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王美（CBDB 260635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260635&o=json)
