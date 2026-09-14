---
schema: wang-person/v1
id: p_GHesvNA4FmFj9NWynajwu7
status: active
merged_into: null
display_name: 王通
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dEF9jj7QncCN5MtDvqY7C3
        subject_person_id: p_GHesvNA4FmFj9NWynajwu7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_amG4D8gXCNy4BN8K52YDHg
          claim_id: c_dEF9jj7QncCN5MtDvqY7C3
          source_id: s_RnFgdtQEfTYmJiWPEvBefh
          stance: supports
          locator: CBDB:296151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296151）
          source: &a1
            id: s_RnFgdtQEfTYmJiWPEvBefh
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 296151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296151&o=json
            external_identifier: CBDB:296151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.519Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DX7Ym4vJAtjFfAis31fjNL
        subject_person_id: p_GHesvNA4FmFj9NWynajwu7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通，明人物。嘉靖十四年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 296151）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_anLBa6AnBftcGUFW4SULW3
          claim_id: c_DX7Ym4vJAtjFfAis31fjNL
          source_id: s_RnFgdtQEfTYmJiWPEvBefh
          stance: supports
          locator: CBDB:296151
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_78VOo_IfXffphR3NFUwocV
        subject_person_id: p_GFBurspQ3EyXZg3MXH57h2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GHesvNA4FmFj9NWynajwu7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lQBvhw_TdmXgbm8qD_qa-H
          claim_id: c_78VOo_IfXffphR3NFUwocV
          source_id: s_mbyRWBZDK_dnNlTs-6kMC9
          stance: supports
          locator: CBDB：兄弟 王達（202886）之父／母 王政
          quotation: null
          interpretation_note: 由兄弟关系推断：王通 与 王達 为同胞（CBDB 记「兄」），王達 之父／母即 王通 之父／母。
          source:
            id: s_mbyRWBZDK_dnNlTs-6kMC9
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 296151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296151&o=json
            external_identifier: CBDB:296151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GFBurspQ3EyXZg3MXH57h2
        status: active
        display_name: 王政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_y9TJihok_MrUOew_vvaWZY
        subject_person_id: p_GHesvNA4FmFj9NWynajwu7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x7zHx1JQBodQZpV9KHxSJL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xtcT0SnoyS5rnJ38pC0R_b
          claim_id: c_y9TJihok_MrUOew_vvaWZY
          source_id: s_mbyRWBZDK_dnNlTs-6kMC9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202886 王達）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mbyRWBZDK_dnNlTs-6kMC9
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 296151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296151&o=json
            external_identifier: CBDB:296151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_x7zHx1JQBodQZpV9KHxSJL
        status: active
        display_name: 王達
        merged_into_person_id: null
---

# 王通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王通 | accepted |
| bio.summary | 王通，明人物。嘉靖十四年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 296151） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GFBurspQ3EyXZg3MXH57h2 | 王政 | accepted |
| other | p_x7zHx1JQBodQZpV9KHxSJL | 王達 | accepted |

## 外部来源

- [中国历代人物传记资料库：王通（CBDB 296151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296151&o=json)
