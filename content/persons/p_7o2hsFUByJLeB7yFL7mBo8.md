---
schema: wang-person/v1
id: p_7o2hsFUByJLeB7yFL7mBo8
status: active
merged_into: null
display_name: 王凖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UG7eyTE2YspVx3hzJGZpCV
        subject_person_id: p_7o2hsFUByJLeB7yFL7mBo8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r6CWHQgMFnAa1sihztQYKj
          claim_id: c_UG7eyTE2YspVx3hzJGZpCV
          source_id: s_mx41z33JLF6G6ajFyERRJf
          stance: supports
          locator: CBDB:319430
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（319430）
          source: &a1
            id: s_mx41z33JLF6G6ajFyERRJf
            source_type: api_record
            title: 中国历代人物传记资料库：王凖（CBDB 319430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319430&o=json
            external_identifier: CBDB:319430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.042Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8QS6jPd8b1oWjQpm3CFBLT
        subject_person_id: p_7o2hsFUByJLeB7yFL7mBo8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凖，明人物。嘉靖三十五年進士，籍贯安福。（中国历代人物传记资料库 CBDB 319430）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FURPHkZqt67zgiwmUYVm7O
          claim_id: c_8QS6jPd8b1oWjQpm3CFBLT
          source_id: s_mx41z33JLF6G6ajFyERRJf
          stance: supports
          locator: CBDB:319430
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_X8xi2n8iKy1U-oSUXlzZhX
        subject_person_id: p_uAAyHX7RHTcurCnZEtd77T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7o2hsFUByJLeB7yFL7mBo8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mka_a77ZwbqRBWQj7an_57
          claim_id: c_X8xi2n8iKy1U-oSUXlzZhX
          source_id: s_NjgS6jWlofi64MwF2HeeNj
          stance: supports
          locator: CBDB：兄弟 王凝（126821）之父／母 王麒
          quotation: null
          interpretation_note: 由兄弟关系推断：王凖 与 王凝 为同胞（CBDB 记「兄」），王凝 之父／母即 王凖 之父／母。
          source:
            id: s_NjgS6jWlofi64MwF2HeeNj
            source_type: api_record
            title: 中国历代人物传记资料库：王凖（CBDB 319430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319430&o=json
            external_identifier: CBDB:319430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uAAyHX7RHTcurCnZEtd77T
        status: active
        display_name: 王麒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nLk5YZ4qiIcw11GMRuc2TH
        subject_person_id: p_7o2hsFUByJLeB7yFL7mBo8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RFP8uQh7mfvwWjCYzUDpGk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y7yiLxgs9hp7neWbRP9H4S
          claim_id: c_nLk5YZ4qiIcw11GMRuc2TH
          source_id: s_NjgS6jWlofi64MwF2HeeNj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126821 王凝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NjgS6jWlofi64MwF2HeeNj
            source_type: api_record
            title: 中国历代人物传记资料库：王凖（CBDB 319430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319430&o=json
            external_identifier: CBDB:319430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RFP8uQh7mfvwWjCYzUDpGk
        status: active
        display_name: 王凝
        merged_into_person_id: null
---

# 王凖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凖 | accepted |
| bio.summary | 王凖，明人物。嘉靖三十五年進士，籍贯安福。（中国历代人物传记资料库 CBDB 319430） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uAAyHX7RHTcurCnZEtd77T | 王麒 | accepted |
| other | p_RFP8uQh7mfvwWjCYzUDpGk | 王凝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王凖（CBDB 319430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319430&o=json)
