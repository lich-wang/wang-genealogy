---
schema: wang-person/v1
id: p_8yEkMMZhbwZ7U5KkErHEa1
status: active
merged_into: null
display_name: 王曛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tNZY7tZqENDW3R8Mp96nvs
        subject_person_id: p_8yEkMMZhbwZ7U5KkErHEa1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HtHHbGFuVKC4AFW21vJ77k
          claim_id: c_tNZY7tZqENDW3R8Mp96nvs
          source_id: s_ChM3EnsLAqB6vEggCX84uQ
          stance: supports
          locator: CBDB:322412
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322412）
          source: &a1
            id: s_ChM3EnsLAqB6vEggCX84uQ
            source_type: api_record
            title: 中国历代人物传记资料库：王曛（CBDB 322412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322412&o=json
            external_identifier: CBDB:322412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.121Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e385KchnQ1qR3VEM9cJLPh
        subject_person_id: p_8yEkMMZhbwZ7U5KkErHEa1
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
        - id: cs_8HNFx7ELnz1AtHmyCpMaFT
          claim_id: c_e385KchnQ1qR3VEM9cJLPh
          source_id: s_ChM3EnsLAqB6vEggCX84uQ
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
  descendants: []
  other: []
---

# 王曛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曛 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曛（CBDB 322412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322412&o=json)
