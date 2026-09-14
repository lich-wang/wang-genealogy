---
schema: wang-person/v1
id: p_ZLbtvRZbm7sAMbjurg6W9G
status: active
merged_into: null
display_name: 王泰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MZ6HyFW8J328kmDfTr7mnv
        subject_person_id: p_ZLbtvRZbm7sAMbjurg6W9G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JqPaWdFPv38G2To5nF8Lmi
          claim_id: c_MZ6HyFW8J328kmDfTr7mnv
          source_id: s_dQtBLnPiCZ6S5MLZwmbVNr
          stance: supports
          locator: CBDB:249822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249822）
          source: &a1
            id: s_dQtBLnPiCZ6S5MLZwmbVNr
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 249822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249822&o=json
            external_identifier: CBDB:249822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.190Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LPNCiEWUfHe43XHNuRw2fZ
        subject_person_id: p_ZLbtvRZbm7sAMbjurg6W9G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰，明人物。成化十一年進士，籍贯汲縣，入仕監生。（中国历代人物传记资料库 CBDB 249822）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eotKOWN6C_7hZzZ07cWE7Z
          claim_id: c_LPNCiEWUfHe43XHNuRw2fZ
          source_id: s_dQtBLnPiCZ6S5MLZwmbVNr
          stance: supports
          locator: CBDB:249822
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_H-IqrU4U9stokdMknsxH6c
        subject_person_id: p_219jQxSbAi8XEaLPFhzHTg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZLbtvRZbm7sAMbjurg6W9G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CJo14-AlDTcepJ1njvkWNi
          claim_id: c_H-IqrU4U9stokdMknsxH6c
          source_id: s_D9K-ePPQ9et846E2TYQHRr
          stance: supports
          locator: CBDB：兄弟 王嵩（126762）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王泰 与 王嵩 为同胞（CBDB 记「弟」），王嵩 之父／母即 王泰 之父／母。
          source:
            id: s_D9K-ePPQ9et846E2TYQHRr
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 249822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249822&o=json
            external_identifier: CBDB:249822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_219jQxSbAi8XEaLPFhzHTg
        status: active
        display_name: 王信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_v5CWzNDbVBCs74byMrDiKk
        subject_person_id: p_3QDnXJ1yrE5aSbLLXiVLND
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZLbtvRZbm7sAMbjurg6W9G
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1NrQAtwaHGVcwtpJAcLpJb
          claim_id: c_v5CWzNDbVBCs74byMrDiKk
          source_id: s_D9K-ePPQ9et846E2TYQHRr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126762 王嵩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_D9K-ePPQ9et846E2TYQHRr
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 249822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249822&o=json
            external_identifier: CBDB:249822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3QDnXJ1yrE5aSbLLXiVLND
        status: active
        display_name: 王嵩
        merged_into_person_id: null
---

# 王泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰 | accepted |
| bio.summary | 王泰，明人物。成化十一年進士，籍贯汲縣，入仕監生。（中国历代人物传记资料库 CBDB 249822） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_219jQxSbAi8XEaLPFhzHTg | 王信 | accepted |
| other | p_3QDnXJ1yrE5aSbLLXiVLND | 王嵩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王泰（CBDB 249822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249822&o=json)
