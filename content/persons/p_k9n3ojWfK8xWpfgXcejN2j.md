---
schema: wang-person/v1
id: p_k9n3ojWfK8xWpfgXcejN2j
status: active
merged_into: null
display_name: 王星璧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JL9gHomMJTV9HttmVrmwB2
        subject_person_id: p_k9n3ojWfK8xWpfgXcejN2j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王星璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6585w7Cyp8YQGfZu7AAGAy
          claim_id: c_JL9gHomMJTV9HttmVrmwB2
          source_id: s_9aXUGC44bP32JZop3EebeF
          stance: supports
          locator: CBDB:555426
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555426）
          source: &a1
            id: s_9aXUGC44bP32JZop3EebeF
            source_type: api_record
            title: 中国历代人物传记资料库：王星璧（CBDB 555426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555426&o=json
            external_identifier: CBDB:555426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4BRG5QcdVzfsyyp4ngFK3F
        subject_person_id: p_k9n3ojWfK8xWpfgXcejN2j
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
        - id: cs_92d8vLt5hNq65A6bsunTC6
          claim_id: c_4BRG5QcdVzfsyyp4ngFK3F
          source_id: s_9aXUGC44bP32JZop3EebeF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_b0rm7lQBRm6KdsAHKEq2X6
        subject_person_id: p_8ct24JW85LFaBwBesKXW2J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k9n3ojWfK8xWpfgXcejN2j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sFRnbSN5WQIRg3GDaOoN7E
          claim_id: c_b0rm7lQBRm6KdsAHKEq2X6
          source_id: s_DpXnKmpa5iqAqQ81mNyebu
          stance: supports
          locator: (乾隆)信陽州志，Wang Xing bi：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DpXnKmpa5iqAqQ81mNyebu
            source_type: api_record
            title: 中国历代人物传记资料库：王延世（CBDB 555424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555424&o=json
            external_identifier: CBDB:555424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.638Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8ct24JW85LFaBwBesKXW2J
        status: active
        display_name: 王延世
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王星璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王星璧 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8ct24JW85LFaBwBesKXW2J | 王延世 | accepted |

## 外部来源

- [中国历代人物传记资料库：王星璧（CBDB 555426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555426&o=json)
- [中国历代人物传记资料库：王延世（CBDB 555424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555424&o=json)
