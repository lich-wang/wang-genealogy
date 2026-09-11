---
schema: wang-person/v1
id: p_uKEKHMLFo8LMTQLxyEYTqM
status: active
merged_into: null
display_name: 馬振飛
revision: 1
cbdb_id: 69813
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sjOlLPVkuriQW9LaXbeVUB
        subject_person_id: p_uKEKHMLFo8LMTQLxyEYTqM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 馬振飛
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dtLf4E8S4lxOp9RW8ATzeg
          claim_id: c_sjOlLPVkuriQW9LaXbeVUB
          source_id: s_fc6pJW97ijKZ-ICgRuREGD
          stance: supports
          locator: CBDB:69813
          quotation: null
          interpretation_note: CBDB 明确记录的王繡君配偶
          source: &a1
            id: s_fc6pJW97ijKZ-ICgRuREGD
            source_type: api_record
            title: 中国历代人物传记资料库：馬振飛（CBDB 69813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69813&o=json
            external_identifier: CBDB:69813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_BibpXplgZvDJRvs9mPu4Ub
        subject_person_id: p_i2UQKwz22Z88LRYj1TsSqo
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_uKEKHMLFo8LMTQLxyEYTqM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2VoeYMUnMUKtujybxYcbEO
          claim_id: c_BibpXplgZvDJRvs9mPu4Ub
          source_id: s_fc6pJW97ijKZ-ICgRuREGD
          stance: supports
          locator: CBDB 双向互证（丈夫 馬振飛）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_i2UQKwz22Z88LRYj1TsSqo
        status: active
        display_name: 王繡君
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 馬振飛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 馬振飛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_i2UQKwz22Z88LRYj1TsSqo | 王繡君 | accepted |

## 外部来源

- [中国历代人物传记资料库：馬振飛（CBDB 69813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69813&o=json)
