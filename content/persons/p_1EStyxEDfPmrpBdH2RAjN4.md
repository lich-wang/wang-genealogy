---
schema: wang-person/v1
id: p_1EStyxEDfPmrpBdH2RAjN4
status: active
merged_into: null
display_name: 王旅
cbdb_id: 295306
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_876oo7pj8ruknL3CnmuMEc
        subject_person_id: p_1EStyxEDfPmrpBdH2RAjN4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旅，明人物。天順元年進士，籍贯薊州。（中国历代人物传记资料库 CBDB 295306）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_xIurye6GbDEkqSn-rOv2D3
          claim_id: c_876oo7pj8ruknL3CnmuMEc
          source_id: s_Ajj4ZQc5Am9L5JCwA837Mc
          stance: supports
          locator: CBDB:295306
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Ajj4ZQc5Am9L5JCwA837Mc
            source_type: api_record
            title: 中国历代人物传记资料库：王旅（CBDB 295306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295306&o=json
            external_identifier: CBDB:295306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GJEAbS8D3vKdK8y3ZZ2xDP
        subject_person_id: p_1EStyxEDfPmrpBdH2RAjN4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8mLbAHnD7kZeFCFitCKEub
          claim_id: c_GJEAbS8D3vKdK8y3ZZ2xDP
          source_id: s_Ajj4ZQc5Am9L5JCwA837Mc
          stance: supports
          locator: CBDB:295306
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_F0sFLS4V3TnIO5FTRxVIjq
        subject_person_id: p_kXrauqiRDQXXD79d2V6tEj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1EStyxEDfPmrpBdH2RAjN4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RRPmYL26iP2TdAoFB7mxlY
          claim_id: c_F0sFLS4V3TnIO5FTRxVIjq
          source_id: s_x0LOA3U0zhhTmVjzTg0Ohq
          stance: supports
          locator: CBDB：兄弟 王冕（198620）之父／母 王觀
          quotation: null
          interpretation_note: 由兄弟关系推断：王旅 与 王冕 为同胞（CBDB 记「兄」），王冕 之父／母即 王旅 之父／母。
          source:
            id: s_x0LOA3U0zhhTmVjzTg0Ohq
            source_type: api_record
            title: 中国历代人物传记资料库：王旅（CBDB 295306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295306&o=json
            external_identifier: CBDB:295306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kXrauqiRDQXXD79d2V6tEj
        status: active
        display_name: 王觀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_j1EMo_z703eS6W2ZtDntfj
        subject_person_id: p_1EStyxEDfPmrpBdH2RAjN4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_7XvdYNGwLHctu4cLzYQ7kr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X771BrzH5bLM-vMApFNSOR
          claim_id: c_j1EMo_z703eS6W2ZtDntfj
          source_id: s_x0LOA3U0zhhTmVjzTg0Ohq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198620 王冕）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x0LOA3U0zhhTmVjzTg0Ohq
            source_type: api_record
            title: 中国历代人物传记资料库：王旅（CBDB 295306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295306&o=json
            external_identifier: CBDB:295306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7XvdYNGwLHctu4cLzYQ7kr
        status: active
        display_name: 王冕
        merged_into_person_id: null
---

# 王旅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王旅，明人物。天順元年進士，籍贯薊州。（中国历代人物传记资料库 CBDB 295306） | accepted |
| name.primary | 王旅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kXrauqiRDQXXD79d2V6tEj | 王觀 | accepted |
| other | p_7XvdYNGwLHctu4cLzYQ7kr | 王冕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王旅（CBDB 295306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295306&o=json)
