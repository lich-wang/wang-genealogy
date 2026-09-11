---
schema: wang-person/v1
id: p_oxN9kPvZoLGr9MupRFHe59
status: active
merged_into: null
display_name: 王延嗣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ebQdwfA173gQF75tU9sPUF
        subject_person_id: p_oxN9kPvZoLGr9MupRFHe59
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延嗣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VPzUo4yG2EozuF8AXLp7iK
          claim_id: c_ebQdwfA173gQF75tU9sPUF
          source_id: s_jZXzire76djhNMUwXjkGVU
          stance: supports
          locator: CBDB:26288
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26288）
          source: &a1
            id: s_jZXzire76djhNMUwXjkGVU
            source_type: api_record
            title: 中国历代人物传记资料库：王延嗣（CBDB 26288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26288&o=json
            external_identifier: CBDB:26288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jhan8U4CeY8pAEp6x4YSqN
        subject_person_id: p_oxN9kPvZoLGr9MupRFHe59
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QEj62NFGcLsAAh7BjShEzT
          claim_id: c_Jhan8U4CeY8pAEp6x4YSqN
          source_id: s_jZXzire76djhNMUwXjkGVU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6rV7hvJoKvExAm9niIQ6up
        subject_person_id: p_oxN9kPvZoLGr9MupRFHe59
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_79hPf6iStJboBnBafhPxjH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gb-Cr2gdEbF6nrksny-HqV
          claim_id: c_6rV7hvJoKvExAm9niIQ6up
          source_id: s_XujjLmFUxRsao6imGnAoUM
          stance: supports
          locator: CBDB 双向互证（父 王延嗣 ⇄ 子 王廷節）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_XujjLmFUxRsao6imGnAoUM
            source_type: api_record
            title: 中国历代人物传记资料库：王廷節（CBDB 26289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26289&o=json
            external_identifier: CBDB:26289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.931Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_79hPf6iStJboBnBafhPxjH
        status: active
        display_name: 王廷節
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王延嗣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延嗣 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_79hPf6iStJboBnBafhPxjH | 王廷節 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷節（CBDB 26289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26289&o=json)
- [中国历代人物传记资料库：王延嗣（CBDB 26288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26288&o=json)
