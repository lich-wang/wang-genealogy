---
schema: wang-person/v1
id: p_i8QAXrFSTHaYhDd4TMMRoQ
status: active
merged_into: null
display_name: 王光祖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d1Nev2m8fKjnmhmApR85JR
        subject_person_id: p_i8QAXrFSTHaYhDd4TMMRoQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LCAYjHyEnjy8wuNADV3p8g
          claim_id: c_d1Nev2m8fKjnmhmApR85JR
          source_id: s_h6854TmxnyEPGL5tS6A8e1
          stance: supports
          locator: CBDB:236489
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236489）
          source: &a1
            id: s_h6854TmxnyEPGL5tS6A8e1
            source_type: api_record
            title: 中国历代人物传记资料库：王光祖（CBDB 236489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236489&o=json
            external_identifier: CBDB:236489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.792Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZbrFhBGZ1jgVXtSXyRTnn9
        subject_person_id: p_i8QAXrFSTHaYhDd4TMMRoQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光祖，明人物。籍贯武進。（中国历代人物传记资料库 CBDB 236489）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KWzSU_PfmVTgWItg1Mcogt
          claim_id: c_ZbrFhBGZ1jgVXtSXyRTnn9
          source_id: s_h6854TmxnyEPGL5tS6A8e1
          stance: supports
          locator: CBDB:236489
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2kGDaXLe5c7zw8HmwN4IFt
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i8QAXrFSTHaYhDd4TMMRoQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zh6ccxRJs0i6f6pGtoV1ZS
          claim_id: c_2kGDaXLe5c7zw8HmwN4IFt
          source_id: s_tAx9WrUrChsSDW4sYnjGDr
          stance: supports
          locator: CBDB：兄弟 王念祖（207816）之父／母 王舜卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王光祖 与 王念祖 为同胞（CBDB 记「弟」），王念祖 之父／母即 王光祖 之父／母。
          source:
            id: s_tAx9WrUrChsSDW4sYnjGDr
            source_type: api_record
            title: 中国历代人物传记资料库：王光祖（CBDB 236489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236489&o=json
            external_identifier: CBDB:236489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qoAdHHLt7NBY3aQndi4h7A
        status: active
        display_name: 王舜卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kfaKUZY-q79WljjLFFk_jA
        subject_person_id: p_i8QAXrFSTHaYhDd4TMMRoQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v-q8Zft3VgtROG74WAysh0
          claim_id: c_kfaKUZY-q79WljjLFFk_jA
          source_id: s_tAx9WrUrChsSDW4sYnjGDr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207816 王念祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tAx9WrUrChsSDW4sYnjGDr
            source_type: api_record
            title: 中国历代人物传记资料库：王光祖（CBDB 236489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236489&o=json
            external_identifier: CBDB:236489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nwL2xVd75q361KsBtDP6KW
        status: active
        display_name: 王念祖
        merged_into_person_id: null
---

# 王光祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光祖 | accepted |
| bio.summary | 王光祖，明人物。籍贯武進。（中国历代人物传记资料库 CBDB 236489） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qoAdHHLt7NBY3aQndi4h7A | 王舜卿 | accepted |
| other | p_nwL2xVd75q361KsBtDP6KW | 王念祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光祖（CBDB 236489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236489&o=json)
