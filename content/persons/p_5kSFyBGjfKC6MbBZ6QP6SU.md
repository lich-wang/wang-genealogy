---
schema: wang-person/v1
id: p_5kSFyBGjfKC6MbBZ6QP6SU
status: active
merged_into: null
display_name: 王宏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oqqzSB2eYh3ryNJC8EaTx2
        subject_person_id: p_5kSFyBGjfKC6MbBZ6QP6SU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KdxYqEX2eZdozzPfK9U4TY
          claim_id: c_oqqzSB2eYh3ryNJC8EaTx2
          source_id: s_QjwT9oNxESmGA1xD9iK7ZY
          stance: supports
          locator: CBDB:100670
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100670）
          source: &a1
            id: s_QjwT9oNxESmGA1xD9iK7ZY
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 100670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100670&o=json
            external_identifier: CBDB:100670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LiiYBksBLUHCHe2xPqX3rQ
        subject_person_id: p_5kSFyBGjfKC6MbBZ6QP6SU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏，元人物。籍贯保定路，入仕世襲(替)，曾任衛千戶、中書省左丞相。（中国历代人物传记资料库 CBDB 100670）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FZnlKib6zliHGwZRUV3rkH
          claim_id: c_LiiYBksBLUHCHe2xPqX3rQ
          source_id: s_QjwT9oNxESmGA1xD9iK7ZY
          stance: supports
          locator: CBDB:100670
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
  descendants: []
  other:
    - claim:
        id: c_T4wy43U1j6sYUrqKZ7D0Rf
        subject_person_id: p_5kSFyBGjfKC6MbBZ6QP6SU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EShCDUZbhaspfgaqpVmi6p
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wMcTOmDTlYBWUuVIU-oHlU
          claim_id: c_T4wy43U1j6sYUrqKZ7D0Rf
          source_id: s_qO9pCZB9hfyGcJdtcpKg_V
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 100899 王寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qO9pCZB9hfyGcJdtcpKg_V
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 100670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100670&o=json
            external_identifier: CBDB:100670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EShCDUZbhaspfgaqpVmi6p
        status: active
        display_name: 王寧
        merged_into_person_id: null
---

# 王宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏 | accepted |
| bio.summary | 王宏，元人物。籍贯保定路，入仕世襲(替)，曾任衛千戶、中書省左丞相。（中国历代人物传记资料库 CBDB 100670） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_EShCDUZbhaspfgaqpVmi6p | 王寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宏（CBDB 100670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100670&o=json)
