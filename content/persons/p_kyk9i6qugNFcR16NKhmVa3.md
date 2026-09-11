---
schema: wang-person/v1
id: p_kyk9i6qugNFcR16NKhmVa3
status: active
merged_into: null
display_name: 王琮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bStjSBceuB4VW1tXnBHPdX
        subject_person_id: p_kyk9i6qugNFcR16NKhmVa3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KxCSs82YskJ1xTDBFHNLn4
          claim_id: c_bStjSBceuB4VW1tXnBHPdX
          source_id: s_JavKf9yS6X6t2NpPCsjtY1
          stance: supports
          locator: CBDB:327594
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327594）
          source: &a1
            id: s_JavKf9yS6X6t2NpPCsjtY1
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 327594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327594&o=json
            external_identifier: CBDB:327594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xPnUBJffYxBqtJ4dBBab5i
        subject_person_id: p_kyk9i6qugNFcR16NKhmVa3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮，明人物。嘉靖四十一年進士，曾任知縣。（中国历代人物传记资料库 CBDB 327594）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WllHdxurYAe_plzqHpQhXO
          claim_id: c_xPnUBJffYxBqtJ4dBBab5i
          source_id: s_JavKf9yS6X6t2NpPCsjtY1
          stance: supports
          locator: CBDB:327594
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants:
    - claim:
        id: c_Mz8AAaUKpZ4lflghuVKwIu
        subject_person_id: p_kyk9i6qugNFcR16NKhmVa3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_G9ehKPfy4qHWDww9VqBgAg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_olwtGVQDTrvCBsMexwCoZL
          claim_id: c_Mz8AAaUKpZ4lflghuVKwIu
          source_id: s_ftz4oMb7kDPD8mWuGX6mYA
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第四十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ftz4oMb7kDPD8mWuGX6mYA
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉祥（CBDB 205047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205047&o=json
            external_identifier: CBDB:205047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.849Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_G9ehKPfy4qHWDww9VqBgAg
        status: active
        display_name: 王嘉祥
        merged_into_person_id: null
  other: []
---

# 王琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琮 | accepted |
| bio.summary | 王琮，明人物。嘉靖四十一年進士，曾任知縣。（中国历代人物传记资料库 CBDB 327594） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_G9ehKPfy4qHWDww9VqBgAg | 王嘉祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 327594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327594&o=json)
- [中国历代人物传记资料库：王嘉祥（CBDB 205047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205047&o=json)
