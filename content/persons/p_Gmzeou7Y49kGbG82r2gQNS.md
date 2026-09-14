---
schema: wang-person/v1
id: p_Gmzeou7Y49kGbG82r2gQNS
status: active
merged_into: null
display_name: 王弘幹
cbdb_id: 257397
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vUUQPRvKtfzC4P6KwPnAqN
        subject_person_id: p_Gmzeou7Y49kGbG82r2gQNS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘幹，明人物。成化十七年進士，籍贯仙居。（中国历代人物传记资料库 CBDB 257397）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_vHi1Wbl70tc-3EGXRIn_yA
          claim_id: c_vUUQPRvKtfzC4P6KwPnAqN
          source_id: s_uyR3kogDQP9sn1PE5gFF9i
          stance: supports
          locator: CBDB:257397
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_uyR3kogDQP9sn1PE5gFF9i
            source_type: api_record
            title: 中国历代人物传记资料库：王弘幹（CBDB 257397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257397&o=json
            external_identifier: CBDB:257397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EkE2nohN14eyJH5N7vynQv
        subject_person_id: p_Gmzeou7Y49kGbG82r2gQNS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘幹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rBCR6rPY58qxFof2Ud79fJ
          claim_id: c_EkE2nohN14eyJH5N7vynQv
          source_id: s_uyR3kogDQP9sn1PE5gFF9i
          stance: supports
          locator: CBDB:257397
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sES61M3IdbZ4u9ZIyqNc16
        subject_person_id: p_JRSMPB6yVrvoB4Rsfsm44J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Gmzeou7Y49kGbG82r2gQNS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t5oqW64aOKxJ29DH04z6wd
          claim_id: c_sES61M3IdbZ4u9ZIyqNc16
          source_id: s_o54-bjt3Ja9XiBeh3pzpKx
          stance: supports
          locator: CBDB：兄弟 王純（126657）之父／母 王懷廣
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘幹 与 王純 为同胞（CBDB 记「兄」），王純 之父／母即 王弘幹 之父／母。
          source:
            id: s_o54-bjt3Ja9XiBeh3pzpKx
            source_type: api_record
            title: 中国历代人物传记资料库：王弘幹（CBDB 257397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257397&o=json
            external_identifier: CBDB:257397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JRSMPB6yVrvoB4Rsfsm44J
        status: active
        display_name: 王懷廣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rWiB0rhr1uSLnwcENOQHDm
        subject_person_id: p_Gmzeou7Y49kGbG82r2gQNS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mQ1J7fd25Z6UXRPAETHXDi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v7d-BgQeXPXbSISatkLCKP
          claim_id: c_rWiB0rhr1uSLnwcENOQHDm
          source_id: s_o54-bjt3Ja9XiBeh3pzpKx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126657 王純）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_o54-bjt3Ja9XiBeh3pzpKx
            source_type: api_record
            title: 中国历代人物传记资料库：王弘幹（CBDB 257397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257397&o=json
            external_identifier: CBDB:257397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mQ1J7fd25Z6UXRPAETHXDi
        status: active
        display_name: 王純
        merged_into_person_id: null
---

# 王弘幹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弘幹，明人物。成化十七年進士，籍贯仙居。（中国历代人物传记资料库 CBDB 257397） | accepted |
| name.primary | 王弘幹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JRSMPB6yVrvoB4Rsfsm44J | 王懷廣 | accepted |
| other | p_mQ1J7fd25Z6UXRPAETHXDi | 王純 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘幹（CBDB 257397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257397&o=json)
