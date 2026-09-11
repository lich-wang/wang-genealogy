---
schema: wang-person/v1
id: p_yNNNmbkNz4tjQELrTMo9G6
status: active
merged_into: null
display_name: 王誠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7gzUQ2kHKt7mb5SffwhdDB
        subject_person_id: p_yNNNmbkNz4tjQELrTMo9G6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6VWSmNrv9rw9QKyCdgWoB9
          claim_id: c_7gzUQ2kHKt7mb5SffwhdDB
          source_id: s_nuNNKJZap1odZuCK5jyB8g
          stance: supports
          locator: CBDB:294328
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294328）
          source: &a1
            id: s_nuNNKJZap1odZuCK5jyB8g
            source_type: api_record
            title: 中国历代人物传记资料库：王誠（CBDB 294328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294328&o=json
            external_identifier: CBDB:294328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.446Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fGEkuzexzvf7wEsfWJ8gRu
        subject_person_id: p_yNNNmbkNz4tjQELrTMo9G6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zGW2KshnWGMWyUTFNfpvQj
          claim_id: c_fGEkuzexzvf7wEsfWJ8gRu
          source_id: s_nuNNKJZap1odZuCK5jyB8g
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_RELXBiI-GiEsjjNvbpFqfF
        subject_person_id: p_yNNNmbkNz4tjQELrTMo9G6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PFKy2HJXLwtKaAL9iVfW1Q
          claim_id: c_RELXBiI-GiEsjjNvbpFqfF
          source_id: s_GWdGKWBoQ5Yau2CR5qC4YT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GWdGKWBoQ5Yau2CR5qC4YT
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 126750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126750&o=json
            external_identifier: CBDB:126750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.175Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AKiZ73AHqEtzATAkDq6m9S
        status: active
        display_name: 王瑛
        merged_into_person_id: null
  other: []
---

# 王誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_AKiZ73AHqEtzATAkDq6m9S | 王瑛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誠（CBDB 294328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294328&o=json)
- [中国历代人物传记资料库：王瑛（CBDB 126750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126750&o=json)
