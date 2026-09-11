---
schema: wang-person/v1
id: p_J7D7mZY2Hh6FDLAfcyMWb1
status: active
merged_into: null
display_name: 王楹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_97PFehbC9qokH29kaThcjr
        subject_person_id: p_J7D7mZY2Hh6FDLAfcyMWb1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CDowFgAnBgBeiTLXcJkbhN
          claim_id: c_97PFehbC9qokH29kaThcjr
          source_id: s_NK12e9rjC2BQt5rJSZNZqp
          stance: supports
          locator: CBDB:26615
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26615）
          source: &a1
            id: s_NK12e9rjC2BQt5rJSZNZqp
            source_type: api_record
            title: 中国历代人物传记资料库：王楹（CBDB 26615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26615&o=json
            external_identifier: CBDB:26615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KLXff6yDiMnbz9V7M7ArMq
        subject_person_id: p_J7D7mZY2Hh6FDLAfcyMWb1
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
        - id: cs_DacsumZEdeG9szXH4NxgHn
          claim_id: c_KLXff6yDiMnbz9V7M7ArMq
          source_id: s_NK12e9rjC2BQt5rJSZNZqp
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
        id: c_JtJDDwHKzwNwyKqYI7pGBe
        subject_person_id: p_J7D7mZY2Hh6FDLAfcyMWb1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hDE1dEk7zop9PqWvJVDDap
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o2atXUPXGMbCTwb70hJzau
          claim_id: c_JtJDDwHKzwNwyKqYI7pGBe
          source_id: s_NK12e9rjC2BQt5rJSZNZqp
          stance: supports
          locator: CBDB 双向互证（子 王光逢 ⇄ 父 王楹）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_hDE1dEk7zop9PqWvJVDDap
        status: active
        display_name: 王光逢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王楹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楹 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hDE1dEk7zop9PqWvJVDDap | 王光逢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王楹（CBDB 26615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26615&o=json)
