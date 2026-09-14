---
schema: wang-person/v1
id: p_YbB5Z4MhgQnWDBLLWCtfKg
status: active
merged_into: null
display_name: 王懷
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ea7CqcP8rUKLMmnPXWCxPi
        subject_person_id: p_YbB5Z4MhgQnWDBLLWCtfKg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SfH3bfs23rFokPUF2ET1rC
          claim_id: c_Ea7CqcP8rUKLMmnPXWCxPi
          source_id: s_PsuxFyAL5Um7XehENQWGzQ
          stance: supports
          locator: CBDB:260643
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260643）
          source: &a1
            id: s_PsuxFyAL5Um7XehENQWGzQ
            source_type: api_record
            title: 中国历代人物传记资料库：王懷（CBDB 260643）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260643&o=json
            external_identifier: CBDB:260643
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.525Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GW5CLYutP1ce31PNwPpwkR
        subject_person_id: p_YbB5Z4MhgQnWDBLLWCtfKg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 260643）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4DU31v3JRAbP1K2vvggk3z
          claim_id: c_GW5CLYutP1ce31PNwPpwkR
          source_id: s_PsuxFyAL5Um7XehENQWGzQ
          stance: supports
          locator: CBDB:260643
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JLLRaKBPWldqyLydGmmDvU
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YbB5Z4MhgQnWDBLLWCtfKg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__CAMnZEVLcYXzzYFToqtSD
          claim_id: c_JLLRaKBPWldqyLydGmmDvU
          source_id: s_tUAw7WSWGTHTSy6WP8mVPc
          stance: supports
          locator: CBDB：兄弟 王存忠（200628）之父／母 王永潮
          quotation: null
          interpretation_note: 由兄弟关系推断：王懷 与 王存忠 为同胞（CBDB 记「弟」），王存忠 之父／母即 王懷 之父／母。
          source:
            id: s_tUAw7WSWGTHTSy6WP8mVPc
            source_type: api_record
            title: 中国历代人物传记资料库：王懷（CBDB 260643）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260643&o=json
            external_identifier: CBDB:260643
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zYsGWZ26RZr9NP9BPEi82D
        status: active
        display_name: 王永潮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XOGw0irPObhGYOYbhHd3-u
        subject_person_id: p_YbB5Z4MhgQnWDBLLWCtfKg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_83KAcX7ekmgwUxRIUo-Leg
          claim_id: c_XOGw0irPObhGYOYbhHd3-u
          source_id: s_tUAw7WSWGTHTSy6WP8mVPc
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200628 王存忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tUAw7WSWGTHTSy6WP8mVPc
            source_type: api_record
            title: 中国历代人物传记资料库：王懷（CBDB 260643）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260643&o=json
            external_identifier: CBDB:260643
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ybLqBE5H4AFTdmTJtgwy2w
        status: active
        display_name: 王存忠
        merged_into_person_id: null
---

# 王懷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懷 | accepted |
| bio.summary | 王懷，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 260643） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zYsGWZ26RZr9NP9BPEi82D | 王永潮 | accepted |
| other | p_ybLqBE5H4AFTdmTJtgwy2w | 王存忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷（CBDB 260643）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260643&o=json)
