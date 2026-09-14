---
schema: wang-person/v1
id: p_DnqqggnfiNL65xDyxEK2py
status: active
merged_into: null
display_name: 王叔杲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SJrCtsRGJ8r3GSbRCiGEo4
        subject_person_id: p_DnqqggnfiNL65xDyxEK2py
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔杲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YV35MMHnJiMSh6MrMkGiZS
          claim_id: c_SJrCtsRGJ8r3GSbRCiGEo4
          source_id: s_EVbX6Gwmt1tDNNqjtNZBtA
          stance: supports
          locator: CBDB:312432
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312432）
          source: &a1
            id: s_EVbX6Gwmt1tDNNqjtNZBtA
            source_type: api_record
            title: 中国历代人物传记资料库：王叔杲（CBDB 312432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312432&o=json
            external_identifier: CBDB:312432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.870Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2aKwAUBM3g4M6ZjbVd9csT
        subject_person_id: p_DnqqggnfiNL65xDyxEK2py
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔杲，明人物。嘉靖二十九年進士，籍贯永嘉，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 312432）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ibOFgGcCBueOlKFgAJ3c7w
          claim_id: c_2aKwAUBM3g4M6ZjbVd9csT
          source_id: s_EVbX6Gwmt1tDNNqjtNZBtA
          stance: supports
          locator: CBDB:312432
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Tk1VSIPNl9O7JSMXg7Cq0P
        subject_person_id: p_VyeEwdePu6TAbdxcb873Rk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DnqqggnfiNL65xDyxEK2py
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VUQv9ZJnqwOYDw6CWtQ6Uu
          claim_id: c_Tk1VSIPNl9O7JSMXg7Cq0P
          source_id: s_YOkUNxMxDdyTOyDFNYd8er
          stance: supports
          locator: CBDB：兄弟 王叔果（126578）之父／母 王澈
          quotation: null
          interpretation_note: 由兄弟关系推断：王叔杲 与 王叔果 为同胞（CBDB 记「兄」），王叔果 之父／母即 王叔杲 之父／母。
          source:
            id: s_YOkUNxMxDdyTOyDFNYd8er
            source_type: api_record
            title: 中国历代人物传记资料库：王叔杲（CBDB 312432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312432&o=json
            external_identifier: CBDB:312432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VyeEwdePu6TAbdxcb873Rk
        status: active
        display_name: 王澈
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_oL9mn8OJIcO3q0_kgzI3AW
        subject_person_id: p_DnqqggnfiNL65xDyxEK2py
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PjLFLca713vMspeHyzh9e2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T4xz2k5lf9K7e0tmH3wYm1
          claim_id: c_oL9mn8OJIcO3q0_kgzI3AW
          source_id: s_YOkUNxMxDdyTOyDFNYd8er
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126578 王叔果）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YOkUNxMxDdyTOyDFNYd8er
            source_type: api_record
            title: 中国历代人物传记资料库：王叔杲（CBDB 312432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312432&o=json
            external_identifier: CBDB:312432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PjLFLca713vMspeHyzh9e2
        status: active
        display_name: 王叔果
        merged_into_person_id: null
---

# 王叔杲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔杲 | accepted |
| bio.summary | 王叔杲，明人物。嘉靖二十九年進士，籍贯永嘉，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 312432） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VyeEwdePu6TAbdxcb873Rk | 王澈 | accepted |
| other | p_PjLFLca713vMspeHyzh9e2 | 王叔果 | accepted |

## 外部来源

- [中国历代人物传记资料库：王叔杲（CBDB 312432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312432&o=json)
