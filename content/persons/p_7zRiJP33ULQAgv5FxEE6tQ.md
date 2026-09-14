---
schema: wang-person/v1
id: p_7zRiJP33ULQAgv5FxEE6tQ
status: active
merged_into: null
display_name: 王啟光
cbdb_id: 216146
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J29pHZv9sHRy2BfdpUn5Wy
        subject_person_id: p_7zRiJP33ULQAgv5FxEE6tQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟光，明人物。萬曆五年進士，籍贯黃縣，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 216146）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_bFBUM8eGuHkIHKLZ6-OvKL
          claim_id: c_J29pHZv9sHRy2BfdpUn5Wy
          source_id: s_T12WHWMZq7G8N2RAPKKhoG
          stance: supports
          locator: CBDB:216146
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_T12WHWMZq7G8N2RAPKKhoG
            source_type: api_record
            title: 中国历代人物传记资料库：王啟光（CBDB 216146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216146&o=json
            external_identifier: CBDB:216146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TAmkRL43ofX9h9gD9y46RH
        subject_person_id: p_7zRiJP33ULQAgv5FxEE6tQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cL2hmEwHwghPdfuD14zckK
          claim_id: c_TAmkRL43ofX9h9gD9y46RH
          source_id: s_T12WHWMZq7G8N2RAPKKhoG
          stance: supports
          locator: CBDB:216146
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lP92oehDXnFD1LVUupKGX7
        subject_person_id: p_5j714BoeSUb9hXn4A1cAts
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7zRiJP33ULQAgv5FxEE6tQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sjQPisgaADJKSWtHBYzOgq
          claim_id: c_lP92oehDXnFD1LVUupKGX7
          source_id: s_oB-ewlPJyOF7ziPUDxl2iI
          stance: supports
          locator: CBDB：兄弟 王繼光（126878）之父／母 王守默
          quotation: null
          interpretation_note: 由兄弟关系推断：王啟光 与 王繼光 为同胞（CBDB 记「弟」），王繼光 之父／母即 王啟光 之父／母。
          source:
            id: s_oB-ewlPJyOF7ziPUDxl2iI
            source_type: api_record
            title: 中国历代人物传记资料库：王啟光（CBDB 216146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216146&o=json
            external_identifier: CBDB:216146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5j714BoeSUb9hXn4A1cAts
        status: active
        display_name: 王守默
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_M4UGzaeBhsWrJ0BrnAC0Gr
        subject_person_id: p_7zRiJP33ULQAgv5FxEE6tQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QQuUCHcAyLfkuJKD8SYwNJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ilKc4v4DapbNiHpXblGIlP
          claim_id: c_M4UGzaeBhsWrJ0BrnAC0Gr
          source_id: s_oB-ewlPJyOF7ziPUDxl2iI
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126878 王繼光）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oB-ewlPJyOF7ziPUDxl2iI
            source_type: api_record
            title: 中国历代人物传记资料库：王啟光（CBDB 216146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216146&o=json
            external_identifier: CBDB:216146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QQuUCHcAyLfkuJKD8SYwNJ
        status: active
        display_name: 王繼光
        merged_into_person_id: null
---

# 王啟光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王啟光，明人物。萬曆五年進士，籍贯黃縣，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 216146） | accepted |
| name.primary | 王啟光 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5j714BoeSUb9hXn4A1cAts | 王守默 | accepted |
| other | p_QQuUCHcAyLfkuJKD8SYwNJ | 王繼光 | accepted |

## 外部来源

- [中国历代人物传记资料库：王啟光（CBDB 216146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216146&o=json)
