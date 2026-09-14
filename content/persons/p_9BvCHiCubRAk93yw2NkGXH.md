---
schema: wang-person/v1
id: p_9BvCHiCubRAk93yw2NkGXH
status: active
merged_into: null
display_name: 王嘉言
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MYW6UaMMXggdvsXUwz4xaA
        subject_person_id: p_9BvCHiCubRAk93yw2NkGXH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XBoLHbCN71Fj9MCdh9Yzuq
          claim_id: c_MYW6UaMMXggdvsXUwz4xaA
          source_id: s_YYpGMsUpKpQouPH7dgRDNh
          stance: supports
          locator: CBDB:227992
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227992）
          source: &a1
            id: s_YYpGMsUpKpQouPH7dgRDNh
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉言（CBDB 227992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227992&o=json
            external_identifier: CBDB:227992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.543Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vzwWLdngTdUZhsay6R2vhD
        subject_person_id: p_9BvCHiCubRAk93yw2NkGXH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉言，明人物。萬曆丙戌科進士進士，籍贯來安，曾任王府引禮生。（中国历代人物传记资料库 CBDB 227992）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XtEb9pfggiMZdDPiirRfmB
          claim_id: c_vzwWLdngTdUZhsay6R2vhD
          source_id: s_YYpGMsUpKpQouPH7dgRDNh
          stance: supports
          locator: CBDB:227992
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_P3ybXyq5KuKgnthZ2AJWPr
        subject_person_id: p_QEHQVSVhwwmdKZM4tKcH7N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9BvCHiCubRAk93yw2NkGXH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n5BAr-gC6BFPSrvw2WAfue
          claim_id: c_P3ybXyq5KuKgnthZ2AJWPr
          source_id: s_5DOidZPXxeg6Px4eD7dSQ2
          stance: supports
          locator: CBDB：兄弟 王嘉賓（207120）之父／母 王可久
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉言 与 王嘉賓 为同胞（CBDB 记「兄」），王嘉賓 之父／母即 王嘉言 之父／母。
          source:
            id: s_5DOidZPXxeg6Px4eD7dSQ2
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉言（CBDB 227992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227992&o=json
            external_identifier: CBDB:227992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QEHQVSVhwwmdKZM4tKcH7N
        status: active
        display_name: 王可久
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_pdEq28WrgCd5tmiBHBd1Hr
        subject_person_id: p_9BvCHiCubRAk93yw2NkGXH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yt96UUYNj3ASszrYuN2kTm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Eaof825q2OdOxIJHk7Km58
          claim_id: c_pdEq28WrgCd5tmiBHBd1Hr
          source_id: s_5DOidZPXxeg6Px4eD7dSQ2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207120 王嘉賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5DOidZPXxeg6Px4eD7dSQ2
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉言（CBDB 227992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227992&o=json
            external_identifier: CBDB:227992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yt96UUYNj3ASszrYuN2kTm
        status: active
        display_name: 王嘉賓
        merged_into_person_id: null
---

# 王嘉言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉言 | accepted |
| bio.summary | 王嘉言，明人物。萬曆丙戌科進士進士，籍贯來安，曾任王府引禮生。（中国历代人物传记资料库 CBDB 227992） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QEHQVSVhwwmdKZM4tKcH7N | 王可久 | accepted |
| other | p_yt96UUYNj3ASszrYuN2kTm | 王嘉賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉言（CBDB 227992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227992&o=json)
