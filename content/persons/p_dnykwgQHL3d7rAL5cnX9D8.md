---
schema: wang-person/v1
id: p_dnykwgQHL3d7rAL5cnX9D8
status: active
merged_into: null
display_name: 王象震
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sgrkPF8jgg8aY5n6UB26UT
        subject_person_id: p_dnykwgQHL3d7rAL5cnX9D8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wey1sQQH4Uh94WNRyEsBme
          claim_id: c_sgrkPF8jgg8aY5n6UB26UT
          source_id: s_T7XD5ByvaHvYwNsgeCZ2iY
          stance: supports
          locator: CBDB:330756
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（330756）
          source: &a1
            id: s_T7XD5ByvaHvYwNsgeCZ2iY
            source_type: api_record
            title: 中国历代人物传记资料库：王象震（CBDB 330756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330756&o=json
            external_identifier: CBDB:330756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.358Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z5fWQr56rjck8sbvqaw6B3
        subject_person_id: p_dnykwgQHL3d7rAL5cnX9D8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象震，明人物。嘉靖四十四年進士，籍贯新城。（中国历代人物传记资料库 CBDB 330756）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MEZfe0NDW-WMHDTL2NAlPY
          claim_id: c_Z5fWQr56rjck8sbvqaw6B3
          source_id: s_T7XD5ByvaHvYwNsgeCZ2iY
          stance: supports
          locator: CBDB:330756
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6pnAGYPCSgzpHC6QbR6htV
        subject_person_id: p_AKu7Q79dhYjH69pKrRtR5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dnykwgQHL3d7rAL5cnX9D8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OdzGTHaviVK-ktinC4WKd3
          claim_id: c_6pnAGYPCSgzpHC6QbR6htV
          source_id: s_95oKJyvNCByYL_0ZPgYWhz
          stance: supports
          locator: CBDB：兄弟 王象坤（205267）之父／母 王之翰
          quotation: null
          interpretation_note: 由兄弟关系推断：王象震 与 王象坤 为同胞（CBDB 记「兄」），王象坤 之父／母即 王象震 之父／母。
          source:
            id: s_95oKJyvNCByYL_0ZPgYWhz
            source_type: api_record
            title: 中国历代人物传记资料库：王象震（CBDB 330756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330756&o=json
            external_identifier: CBDB:330756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AKu7Q79dhYjH69pKrRtR5y
        status: active
        display_name: 王之翰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nRIueMez_iAQV-bRBntcCt
        subject_person_id: p_dnykwgQHL3d7rAL5cnX9D8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hkxRnkwdABHFBvtuuQxejY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J0Lvhg60fzrHI233RR7Pax
          claim_id: c_nRIueMez_iAQV-bRBntcCt
          source_id: s_95oKJyvNCByYL_0ZPgYWhz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205267 王象坤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_95oKJyvNCByYL_0ZPgYWhz
            source_type: api_record
            title: 中国历代人物传记资料库：王象震（CBDB 330756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330756&o=json
            external_identifier: CBDB:330756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hkxRnkwdABHFBvtuuQxejY
        status: active
        display_name: 王象坤
        merged_into_person_id: null
---

# 王象震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象震 | accepted |
| bio.summary | 王象震，明人物。嘉靖四十四年進士，籍贯新城。（中国历代人物传记资料库 CBDB 330756） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AKu7Q79dhYjH69pKrRtR5y | 王之翰 | accepted |
| other | p_hkxRnkwdABHFBvtuuQxejY | 王象坤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象震（CBDB 330756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330756&o=json)
