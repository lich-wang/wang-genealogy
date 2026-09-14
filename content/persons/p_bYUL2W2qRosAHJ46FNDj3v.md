---
schema: wang-person/v1
id: p_bYUL2W2qRosAHJ46FNDj3v
status: active
merged_into: null
display_name: 王蓁
cbdb_id: 415372
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SeK4zNYvhTG9NDLDo7GtPT
        subject_person_id: p_bYUL2W2qRosAHJ46FNDj3v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蓁，明人物。籍贯高安，入仕鄉貢舉人，曾任教諭、縣令、知縣。（中国历代人物传记资料库 CBDB 415372）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_eBqKRusDySOuMgfCLD2Zvp
          claim_id: c_SeK4zNYvhTG9NDLDo7GtPT
          source_id: s_mREsiFMD8SG331QiZ89ZAJ
          stance: supports
          locator: CBDB:415372
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mREsiFMD8SG331QiZ89ZAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王蓁（CBDB 415372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415372&o=json
            external_identifier: CBDB:415372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:53.628Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_86b6uAZ5exqQU2AJa4PEKq
        subject_person_id: p_bYUL2W2qRosAHJ46FNDj3v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蓁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aHdJ2uA45xanEi9Y1P3ENK
          claim_id: c_86b6uAZ5exqQU2AJa4PEKq
          source_id: s_mREsiFMD8SG331QiZ89ZAJ
          stance: supports
          locator: CBDB:415372
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6201-6300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WX5LKlAVk5Ewwy7t4QjH6w
        subject_person_id: p_EYAGffN4T8Hvqaf8G9Trvm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bYUL2W2qRosAHJ46FNDj3v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OAdvzDfuImK65PdtKyRgQq
          claim_id: c_WX5LKlAVk5Ewwy7t4QjH6w
          source_id: s_peKVw--F5urY72zrfuqUo0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 415372 王蓁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_peKVw--F5urY72zrfuqUo0
            source_type: api_record
            title: 中国历代人物传记资料库：王莘（CBDB 550562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550562&o=json
            external_identifier: CBDB:550562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EYAGffN4T8Hvqaf8G9Trvm
        status: active
        display_name: 王莘
        merged_into_person_id: null
---

# 王蓁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王蓁，明人物。籍贯高安，入仕鄉貢舉人，曾任教諭、縣令、知縣。（中国历代人物传记资料库 CBDB 415372） | accepted |
| name.primary | 王蓁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_EYAGffN4T8Hvqaf8G9Trvm | 王莘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王莘（CBDB 550562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550562&o=json)
- [中国历代人物传记资料库：王蓁（CBDB 415372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415372&o=json)
