---
schema: wang-person/v1
id: p_D4xDmYYxaPbfAow2FpzQSg
status: active
merged_into: null
display_name: 王鼎臣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eViMXgv4ySfN2PE2zDjAnd
        subject_person_id: p_D4xDmYYxaPbfAow2FpzQSg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D4CjdTApydLd67o125P5it
          claim_id: c_eViMXgv4ySfN2PE2zDjAnd
          source_id: s_Kewjfei5cAgDhi4EPV2uup
          stance: supports
          locator: CBDB:297190
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297190）
          source: &a1
            id: s_Kewjfei5cAgDhi4EPV2uup
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎臣（CBDB 297190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297190&o=json
            external_identifier: CBDB:297190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.557Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DDJqA1wGe1hQ7diH7HRBC3
        subject_person_id: p_D4xDmYYxaPbfAow2FpzQSg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎臣，明人物。嘉靖十四年進士，籍贯內江。（中国历代人物传记资料库 CBDB 297190）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RDSreJO5hi4zqAjk33g3Ek
          claim_id: c_DDJqA1wGe1hQ7diH7HRBC3
          source_id: s_Kewjfei5cAgDhi4EPV2uup
          stance: supports
          locator: CBDB:297190
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GUxQYdIvMNektUiF5a3st8
        subject_person_id: p_AHR15NKctLwCWm6W5TBJEq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D4xDmYYxaPbfAow2FpzQSg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kg_xkRk9oRNhthNvrWFT4J
          claim_id: c_GUxQYdIvMNektUiF5a3st8
          source_id: s_FwytMr0jMSo8h_j6B8RY0o
          stance: supports
          locator: CBDB：兄弟 王之臣（202945）之父／母 王一言
          quotation: null
          interpretation_note: 由兄弟关系推断：王鼎臣 与 王之臣 为同胞（CBDB 记「兄」），王之臣 之父／母即 王鼎臣 之父／母。
          source:
            id: s_FwytMr0jMSo8h_j6B8RY0o
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎臣（CBDB 297190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297190&o=json
            external_identifier: CBDB:297190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AHR15NKctLwCWm6W5TBJEq
        status: active
        display_name: 王一言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_UPyyNCCOkAb2qnlbl7i8tu
        subject_person_id: p_D4xDmYYxaPbfAow2FpzQSg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DZwm7RH4zQwJTHWtWTtHUQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_arrGbzoaY8uVyLlvVLZKU0
          claim_id: c_UPyyNCCOkAb2qnlbl7i8tu
          source_id: s_FwytMr0jMSo8h_j6B8RY0o
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202945 王之臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FwytMr0jMSo8h_j6B8RY0o
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎臣（CBDB 297190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297190&o=json
            external_identifier: CBDB:297190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DZwm7RH4zQwJTHWtWTtHUQ
        status: active
        display_name: 王之臣
        merged_into_person_id: null
---

# 王鼎臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎臣 | accepted |
| bio.summary | 王鼎臣，明人物。嘉靖十四年進士，籍贯內江。（中国历代人物传记资料库 CBDB 297190） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AHR15NKctLwCWm6W5TBJEq | 王一言 | accepted |
| other | p_DZwm7RH4zQwJTHWtWTtHUQ | 王之臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎臣（CBDB 297190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297190&o=json)
