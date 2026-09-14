---
schema: wang-person/v1
id: p_AXyBVkPGwHPT7CKdmQDD9u
status: active
merged_into: null
display_name: 王瑛
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PFBzu4zVDbMEC7dF9sH7TH
        subject_person_id: p_AXyBVkPGwHPT7CKdmQDD9u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vz1ow439NAap5nrvD2C8M8
          claim_id: c_PFBzu4zVDbMEC7dF9sH7TH
          source_id: s_FBHurV9AMKpeT4e948CTvT
          stance: supports
          locator: CBDB:242774
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242774）
          source: &a1
            id: s_FBHurV9AMKpeT4e948CTvT
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 242774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242774&o=json
            external_identifier: CBDB:242774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_54kZQnWJChGZtXJy2c5BQT
        subject_person_id: p_AXyBVkPGwHPT7CKdmQDD9u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑛，明人物。成化五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 242774）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SO5JkFQqWo8qsG5qZVhW5_
          claim_id: c_54kZQnWJChGZtXJy2c5BQT
          source_id: s_FBHurV9AMKpeT4e948CTvT
          stance: supports
          locator: CBDB:242774
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Q9uHXhg1zNelvgsuN-BF63
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AXyBVkPGwHPT7CKdmQDD9u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BRSYkEU33N2No0YDj4NIoc
          claim_id: c_Q9uHXhg1zNelvgsuN-BF63
          source_id: s_cQBxf8FWp5bkIyiv0ue-vR
          stance: supports
          locator: CBDB：兄弟 王瑞（67734）之父／母 王景
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑛 与 王瑞 为同胞（CBDB 记「兄」），王瑞 之父／母即 王瑛 之父／母。
          source:
            id: s_cQBxf8FWp5bkIyiv0ue-vR
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 242774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242774&o=json
            external_identifier: CBDB:242774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZBwZdB8tEY2KUEfDHqhpeB
        status: active
        display_name: 王景
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FEAyTdtHI9gUOEGlATuJj5
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AXyBVkPGwHPT7CKdmQDD9u
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HjegvT3fxPKtb2Fmlx2-oT
          claim_id: c_FEAyTdtHI9gUOEGlATuJj5
          source_id: s_cQBxf8FWp5bkIyiv0ue-vR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67734 王瑞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cQBxf8FWp5bkIyiv0ue-vR
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 242774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242774&o=json
            external_identifier: CBDB:242774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7nLDqRUiM1HQGsWK6gxVHc
        status: active
        display_name: 王瑞
        merged_into_person_id: null
    - claim:
        id: c_LJZThvcjHT1kv5FFFAJip1
        subject_person_id: p_AXyBVkPGwHPT7CKdmQDD9u
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BfqOcBWjrcA3aKWakkcF-v
          claim_id: c_LJZThvcjHT1kv5FFFAJip1
          source_id: s_cQBxf8FWp5bkIyiv0ue-vR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200633 王琚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cQBxf8FWp5bkIyiv0ue-vR
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 242774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242774&o=json
            external_identifier: CBDB:242774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fKzK34U3bvaoYweEWJgVKJ
        status: active
        display_name: 王琚
        merged_into_person_id: null
---

# 王瑛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑛 | accepted |
| bio.summary | 王瑛，明人物。成化五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 242774） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZBwZdB8tEY2KUEfDHqhpeB | 王景 | accepted |
| other | p_7nLDqRUiM1HQGsWK6gxVHc | 王瑞 | accepted |
| other | p_fKzK34U3bvaoYweEWJgVKJ | 王琚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑛（CBDB 242774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242774&o=json)
