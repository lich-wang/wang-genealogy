---
schema: wang-person/v1
id: p_v5q8hACD2MdAUcJvnY39At
status: active
merged_into: null
display_name: 王佐聖
cbdb_id: 126549
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C7qimUKjU59zG76LQSz5mN
        subject_person_id: p_v5q8hACD2MdAUcJvnY39At
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐聖，明人物。籍贯元和，身份为熟諳兵法韜略、軍事家，入仕鄉貢舉人，曾任縣教諭、知縣。（中国历代人物传记资料库 CBDB 126549）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_wyYdEtKCW4cIhhFAl76_OX
          claim_id: c_C7qimUKjU59zG76LQSz5mN
          source_id: s_JzjMTu62AQbGpRWwTRDjuy
          stance: supports
          locator: CBDB:126549
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JzjMTu62AQbGpRWwTRDjuy
            source_type: api_record
            title: 中国历代人物传记资料库：王佐聖（CBDB 126549）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126549&o=json
            external_identifier: CBDB:126549
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_igXD5YTNEmc16TNxLVGHx5
        subject_person_id: p_v5q8hACD2MdAUcJvnY39At
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐聖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_g9tcV4GAJuAqxeE2szmJoY
          claim_id: c_igXD5YTNEmc16TNxLVGHx5
          source_id: s_JzjMTu62AQbGpRWwTRDjuy
          stance: supports
          locator: CBDB:126549
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_29Q2A609FEqfxVQJ9BNQSW
        subject_person_id: p_6RCMAmhm7ABKUBxzvWbX1A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v5q8hACD2MdAUcJvnY39At
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dNA40GZZG6OuRmR9df5nOK
          claim_id: c_29Q2A609FEqfxVQJ9BNQSW
          source_id: s_Tnw9rYtQtD7YYPTkC28Zz8
          stance: supports
          locator: "(乾隆)元和縣志: 三十六卷，lgid=178288：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Tnw9rYtQtD7YYPTkC28Zz8
            source_type: api_record
            title: 中国历代人物传记资料库：王騰程（CBDB 702574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702574&o=json
            external_identifier: CBDB:702574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.615Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6RCMAmhm7ABKUBxzvWbX1A
        status: active
        display_name: 王騰程
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佐聖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王佐聖，明人物。籍贯元和，身份为熟諳兵法韜略、軍事家，入仕鄉貢舉人，曾任縣教諭、知縣。（中国历代人物传记资料库 CBDB 126549） | accepted |
| name.primary | 王佐聖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6RCMAmhm7ABKUBxzvWbX1A | 王騰程 | accepted |

## 外部来源

- [中国历代人物传记资料库：王騰程（CBDB 702574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702574&o=json)
- [中国历代人物传记资料库：王佐聖（CBDB 126549）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126549&o=json)
