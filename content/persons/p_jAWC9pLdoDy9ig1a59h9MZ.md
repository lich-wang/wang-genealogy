---
schema: wang-person/v1
id: p_jAWC9pLdoDy9ig1a59h9MZ
status: active
merged_into: null
display_name: 王永靖
cbdb_id: 221621
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hn9CxShADU7JAUr7pMc9V1
        subject_person_id: p_jAWC9pLdoDy9ig1a59h9MZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永靖，明人物。萬曆八年進士，籍贯烏程。（中国历代人物传记资料库 CBDB 221621）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_vm8Kzhfs1WXrsYfvybBsny
          claim_id: c_Hn9CxShADU7JAUr7pMc9V1
          source_id: s_VMFHJbmKyqjkmEcYkohG9y
          stance: supports
          locator: CBDB:221621
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VMFHJbmKyqjkmEcYkohG9y
            source_type: api_record
            title: 中国历代人物传记资料库：王永靖（CBDB 221621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221621&o=json
            external_identifier: CBDB:221621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_67nm8oKJM31hSsZFXHD62t
        subject_person_id: p_jAWC9pLdoDy9ig1a59h9MZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永靖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7UGMNSToPk1NQvDQDCtBrJ
          claim_id: c_67nm8oKJM31hSsZFXHD62t
          source_id: s_VMFHJbmKyqjkmEcYkohG9y
          stance: supports
          locator: CBDB:221621
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_j8YnEsvsdy4UugiIsTl6Sj
        subject_person_id: p_Syn7L23qcdCnWJH3gNVxhk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jAWC9pLdoDy9ig1a59h9MZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5NmEskfRdkd0XM7FclfJ1g
          claim_id: c_j8YnEsvsdy4UugiIsTl6Sj
          source_id: s_Q3RYAE0YdMwaz8erpC0IDZ
          stance: supports
          locator: CBDB：兄弟 王永寧（206689）之父／母 王國柱
          quotation: null
          interpretation_note: 由兄弟关系推断：王永靖 与 王永寧 为同胞（CBDB 记「兄」），王永寧 之父／母即 王永靖 之父／母。
          source:
            id: s_Q3RYAE0YdMwaz8erpC0IDZ
            source_type: api_record
            title: 中国历代人物传记资料库：王永靖（CBDB 221621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221621&o=json
            external_identifier: CBDB:221621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Syn7L23qcdCnWJH3gNVxhk
        status: active
        display_name: 王國柱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_sVgPHChdzjjPE8sEO5nf5A
        subject_person_id: p_Vu5wPFU9etB1mZyT3n6avf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jAWC9pLdoDy9ig1a59h9MZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Cl3R6g8thuA9g_ESRIG_E
          claim_id: c_sVgPHChdzjjPE8sEO5nf5A
          source_id: s_Q3RYAE0YdMwaz8erpC0IDZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206689 王永寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Q3RYAE0YdMwaz8erpC0IDZ
            source_type: api_record
            title: 中国历代人物传记资料库：王永靖（CBDB 221621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221621&o=json
            external_identifier: CBDB:221621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Vu5wPFU9etB1mZyT3n6avf
        status: active
        display_name: 王永寧
        merged_into_person_id: null
---

# 王永靖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王永靖，明人物。萬曆八年進士，籍贯烏程。（中国历代人物传记资料库 CBDB 221621） | accepted |
| name.primary | 王永靖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Syn7L23qcdCnWJH3gNVxhk | 王國柱 | accepted |
| other | p_Vu5wPFU9etB1mZyT3n6avf | 王永寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永靖（CBDB 221621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221621&o=json)
