---
schema: wang-person/v1
id: p_CiLSTCC3N8DAUR8xAJgkdT
status: active
merged_into: null
display_name: 王汝霖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pUoJqTd24KUkZhJnQHUARD
        subject_person_id: p_CiLSTCC3N8DAUR8xAJgkdT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CjKHsn8r3GxZzMdkrKYbdu
          claim_id: c_pUoJqTd24KUkZhJnQHUARD
          source_id: s_GM4XdDN8fk6raehJiRKDw8
          stance: supports
          locator: CBDB:327816
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327816）
          source: &a1
            id: s_GM4XdDN8fk6raehJiRKDw8
            source_type: api_record
            title: 中国历代人物传记资料库：王汝霖（CBDB 327816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327816&o=json
            external_identifier: CBDB:327816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YfoHF2uDh5PPzVNagvfATD
        subject_person_id: p_CiLSTCC3N8DAUR8xAJgkdT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝霖，明人物。嘉靖四十一年進士，籍贯安肅。（中国历代人物传记资料库 CBDB 327816）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0OM7G9M8WVElJ8duj6uxkW
          claim_id: c_YfoHF2uDh5PPzVNagvfATD
          source_id: s_GM4XdDN8fk6raehJiRKDw8
          stance: supports
          locator: CBDB:327816
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mHo6_DdbYE_j0ZuoqLVf3W
        subject_person_id: p_UKG4Ew4EBc4jxmGX5ju4GS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CiLSTCC3N8DAUR8xAJgkdT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HbZ8P_PYBSAb9HxVJcX8Ba
          claim_id: c_mHo6_DdbYE_j0ZuoqLVf3W
          source_id: s_b3L2WkSzzeyYCmeQgXfgw1
          stance: supports
          locator: CBDB：兄弟 王汝梅（205063）之父／母 王廷珪
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝霖 与 王汝梅 为同胞（CBDB 记「兄」），王汝梅 之父／母即 王汝霖 之父／母。
          source:
            id: s_b3L2WkSzzeyYCmeQgXfgw1
            source_type: api_record
            title: 中国历代人物传记资料库：王汝霖（CBDB 327816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327816&o=json
            external_identifier: CBDB:327816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UKG4Ew4EBc4jxmGX5ju4GS
        status: active
        display_name: 王廷珪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2ssaH_9SqOupn6JymPwiYH
        subject_person_id: p_CiLSTCC3N8DAUR8xAJgkdT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zhBu44YVnXVCpZPdAJQVQK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bbeWNfYSs-qLwDoqor9apx
          claim_id: c_2ssaH_9SqOupn6JymPwiYH
          source_id: s_b3L2WkSzzeyYCmeQgXfgw1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205063 王汝梅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_b3L2WkSzzeyYCmeQgXfgw1
            source_type: api_record
            title: 中国历代人物传记资料库：王汝霖（CBDB 327816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327816&o=json
            external_identifier: CBDB:327816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zhBu44YVnXVCpZPdAJQVQK
        status: active
        display_name: 王汝梅
        merged_into_person_id: null
---

# 王汝霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝霖 | accepted |
| bio.summary | 王汝霖，明人物。嘉靖四十一年進士，籍贯安肅。（中国历代人物传记资料库 CBDB 327816） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UKG4Ew4EBc4jxmGX5ju4GS | 王廷珪 | accepted |
| other | p_zhBu44YVnXVCpZPdAJQVQK | 王汝梅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝霖（CBDB 327816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327816&o=json)
