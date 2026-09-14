---
schema: wang-person/v1
id: p_NkL6rDLdfan6Ub6o5oytJ9
status: active
merged_into: null
display_name: 王之言
cbdb_id: 228833
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wt3TsYrMPjqBKq7UrZFK64
        subject_person_id: p_NkL6rDLdfan6Ub6o5oytJ9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之言，明人物。萬曆丙戌科進士進士，籍贯濬縣，入仕增廣生; 增廣生員。（中国历代人物传记资料库 CBDB 228833）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_6thxhTtydnDEqfNkihGF06
          claim_id: c_wt3TsYrMPjqBKq7UrZFK64
          source_id: s_JQNXo2kw7JFKk3C7v2TUu7
          stance: supports
          locator: CBDB:228833
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JQNXo2kw7JFKk3C7v2TUu7
            source_type: api_record
            title: 中国历代人物传记资料库：王之言（CBDB 228833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228833&o=json
            external_identifier: CBDB:228833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4KP5sG6U1nZ89K4pSxJPw7
        subject_person_id: p_NkL6rDLdfan6Ub6o5oytJ9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_o91oNuPcwQawdKWuGbQ7wd
          claim_id: c_4KP5sG6U1nZ89K4pSxJPw7
          source_id: s_JQNXo2kw7JFKk3C7v2TUu7
          stance: supports
          locator: CBDB:228833
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rAJvA-2eZUhbmMBSbWvKf1
        subject_person_id: p_53YdPXVcBwoNNtoe9v5t6c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NkL6rDLdfan6Ub6o5oytJ9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V-BkQmJLusFs0IOlBxARFH
          claim_id: c_rAJvA-2eZUhbmMBSbWvKf1
          source_id: s_yZfom446gxB9HCRnngfQEQ
          stance: supports
          locator: CBDB：兄弟 王之彥（207166）之父／母 王衣
          quotation: null
          interpretation_note: 由兄弟关系推断：王之言 与 王之彥 为同胞（CBDB 记「弟」），王之彥 之父／母即 王之言 之父／母。
          source:
            id: s_yZfom446gxB9HCRnngfQEQ
            source_type: api_record
            title: 中国历代人物传记资料库：王之言（CBDB 228833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228833&o=json
            external_identifier: CBDB:228833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_53YdPXVcBwoNNtoe9v5t6c
        status: active
        display_name: 王衣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Bm8xUqX-6cCgq5dYQ-lEQv
        subject_person_id: p_NkL6rDLdfan6Ub6o5oytJ9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oVB52nNYpQKMMkujZuH9Lj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0z1p3vOYMcWi9OEMC-ftYd
          claim_id: c_Bm8xUqX-6cCgq5dYQ-lEQv
          source_id: s_yZfom446gxB9HCRnngfQEQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207166 王之彥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yZfom446gxB9HCRnngfQEQ
            source_type: api_record
            title: 中国历代人物传记资料库：王之言（CBDB 228833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228833&o=json
            external_identifier: CBDB:228833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oVB52nNYpQKMMkujZuH9Lj
        status: active
        display_name: 王之彥
        merged_into_person_id: null
---

# 王之言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之言，明人物。萬曆丙戌科進士進士，籍贯濬縣，入仕增廣生; 增廣生員。（中国历代人物传记资料库 CBDB 228833） | accepted |
| name.primary | 王之言 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_53YdPXVcBwoNNtoe9v5t6c | 王衣 | accepted |
| other | p_oVB52nNYpQKMMkujZuH9Lj | 王之彥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之言（CBDB 228833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228833&o=json)
