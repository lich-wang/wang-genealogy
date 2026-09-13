---
schema: wang-person/v1
id: p_NghqnvQpJa8P4vxxEpxjeJ
status: active
merged_into: null
display_name: 王劌
cbdb_id: 22180
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ayXcrWJ7wSRMV94yf5LkWK
        subject_person_id: p_NghqnvQpJa8P4vxxEpxjeJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王劌，五代人物。籍贯晉陽，入仕封贈。（中国历代人物传记资料库 CBDB 22180）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_1usWSbLIqkmVZ6xQJGFyMS
          claim_id: c_ayXcrWJ7wSRMV94yf5LkWK
          source_id: s_8uoDLwrRwBBpMaBmuiZgH4
          stance: supports
          locator: CBDB:22180
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8uoDLwrRwBBpMaBmuiZgH4
            source_type: api_record
            title: 中国历代人物传记资料库：王劌（CBDB 22180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22180&o=json
            external_identifier: CBDB:22180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7mGAcQoNSo5EpULtLEQe3k
        subject_person_id: p_NghqnvQpJa8P4vxxEpxjeJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王劌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gwzSEaSdFR88be7jiGUbDc
          claim_id: c_7mGAcQoNSo5EpULtLEQe3k
          source_id: s_8uoDLwrRwBBpMaBmuiZgH4
          stance: supports
          locator: CBDB:22180
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 五代
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RXlnoCXIMThC_vKHXxnf48
        subject_person_id: p_JRkz5yEJrK1z1rwqbwNJ45
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NghqnvQpJa8P4vxxEpxjeJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dO9V_19jrMkpdMZSL4xqzr
          claim_id: c_RXlnoCXIMThC_vKHXxnf48
          source_id: s_mcJ9A38DPmLXZkLLwHkEUK
          stance: supports
          locator: CBDB 双向互证（子 王劌 ⇄ 父 王襲）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_mcJ9A38DPmLXZkLLwHkEUK
            source_type: api_record
            title: 中国历代人物传记资料库：王襲（CBDB 22179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22179&o=json
            external_identifier: CBDB:22179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.841Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JRkz5yEJrK1z1rwqbwNJ45
        status: active
        display_name: 王襲
        merged_into_person_id: null
  children:
    - claim:
        id: c_JQXIREoeq_Km-_0Oq4e2t4
        subject_person_id: p_NghqnvQpJa8P4vxxEpxjeJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1nKt64gGCKiDcB8W4XD12c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Go2_ytaI3-YEm6hq4LeW2R
          claim_id: c_JQXIREoeq_Km-_0Oq4e2t4
          source_id: s_UxH42YMEfHKyZzwykoMUCQ
          stance: supports
          locator: PersonKinshipInfo：父（王劌）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UxH42YMEfHKyZzwykoMUCQ
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 22181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22181&o=json
            external_identifier: CBDB:22181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.842Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1nKt64gGCKiDcB8W4XD12c
        status: active
        display_name: 王恩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王劌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王劌，五代人物。籍贯晉陽，入仕封贈。（中国历代人物传记资料库 CBDB 22180） | accepted |
| name.primary | 王劌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JRkz5yEJrK1z1rwqbwNJ45 | 王襲 | accepted |
| children | p_1nKt64gGCKiDcB8W4XD12c | 王恩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恩（CBDB 22181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22181&o=json)
- [中国历代人物传记资料库：王劌（CBDB 22180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22180&o=json)
- [中国历代人物传记资料库：王襲（CBDB 22179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22179&o=json)
