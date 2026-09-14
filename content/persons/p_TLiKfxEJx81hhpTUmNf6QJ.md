---
schema: wang-person/v1
id: p_TLiKfxEJx81hhpTUmNf6QJ
status: active
merged_into: null
display_name: 王建藩
cbdb_id: 227354
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FCA8oY7fM2iqtKum9nXaGz
        subject_person_id: p_TLiKfxEJx81hhpTUmNf6QJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建藩，明人物。萬曆丙戌科進士進士，籍贯平湖。（中国历代人物传记资料库 CBDB 227354）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_KJIGn1bDqkvMjAKDI3DOZg
          claim_id: c_FCA8oY7fM2iqtKum9nXaGz
          source_id: s_XzjVapfJ2vYJ68BfScmy8n
          stance: supports
          locator: CBDB:227354
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XzjVapfJ2vYJ68BfScmy8n
            source_type: api_record
            title: 中国历代人物传记资料库：王建藩（CBDB 227354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227354&o=json
            external_identifier: CBDB:227354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SWhAbN6KYtVVZQKcJYu145
        subject_person_id: p_TLiKfxEJx81hhpTUmNf6QJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建藩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vTrckYdrsQbDrkWHUdMhcq
          claim_id: c_SWhAbN6KYtVVZQKcJYu145
          source_id: s_XzjVapfJ2vYJ68BfScmy8n
          stance: supports
          locator: CBDB:227354
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_p6MmlGwkyMoPFW0IikT1kn
        subject_person_id: p_mk7g7S4D3bQEXDd4TQZ87J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TLiKfxEJx81hhpTUmNf6QJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o2eUfXZkdBisdwfprPXl2-
          claim_id: c_p6MmlGwkyMoPFW0IikT1kn
          source_id: s_HdNDyLs0DO8c7LTppU-8Wn
          stance: supports
          locator: CBDB：兄弟 王建中（207082）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王建藩 与 王建中 为同胞（CBDB 记「兄」），王建中 之父／母即 王建藩 之父／母。
          source:
            id: s_HdNDyLs0DO8c7LTppU-8Wn
            source_type: api_record
            title: 中国历代人物传记资料库：王建藩（CBDB 227354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227354&o=json
            external_identifier: CBDB:227354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mk7g7S4D3bQEXDd4TQZ87J
        status: active
        display_name: 王言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_LESnv5prGYTqMGY_FfstxY
        subject_person_id: p_TLiKfxEJx81hhpTUmNf6QJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uu4yjus8EVVwp6m8E5Qav5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SQzn_5v7IZ8KfqrT9MEzns
          claim_id: c_LESnv5prGYTqMGY_FfstxY
          source_id: s_HdNDyLs0DO8c7LTppU-8Wn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207082 王建中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HdNDyLs0DO8c7LTppU-8Wn
            source_type: api_record
            title: 中国历代人物传记资料库：王建藩（CBDB 227354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227354&o=json
            external_identifier: CBDB:227354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uu4yjus8EVVwp6m8E5Qav5
        status: active
        display_name: 王建中
        merged_into_person_id: null
---

# 王建藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王建藩，明人物。萬曆丙戌科進士進士，籍贯平湖。（中国历代人物传记资料库 CBDB 227354） | accepted |
| name.primary | 王建藩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mk7g7S4D3bQEXDd4TQZ87J | 王言 | accepted |
| other | p_uu4yjus8EVVwp6m8E5Qav5 | 王建中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王建藩（CBDB 227354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227354&o=json)
