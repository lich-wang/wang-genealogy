---
schema: wang-person/v1
id: p_u9fjM6KGQqR4uohNdLZR47
status: active
merged_into: null
display_name: 王棨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rizK1ngUZbCyv8dL4iU4uF
        subject_person_id: p_u9fjM6KGQqR4uohNdLZR47
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J2SKMQMPv1a85onzAuGdEv
          claim_id: c_rizK1ngUZbCyv8dL4iU4uF
          source_id: s_csSYv9vPjk3jw2ubWAFoJ1
          stance: supports
          locator: CBDB:638730
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638730）
          source: &a1
            id: s_csSYv9vPjk3jw2ubWAFoJ1
            source_type: api_record
            title: 中国历代人物传记资料库：王棨（CBDB 638730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638730&o=json
            external_identifier: CBDB:638730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q9q6qzBJo7rfqeX5HjU79Z
        subject_person_id: p_u9fjM6KGQqR4uohNdLZR47
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YPpeQTJK5t5ThDrCdRb46n
          claim_id: c_Q9q6qzBJo7rfqeX5HjU79Z
          source_id: s_csSYv9vPjk3jw2ubWAFoJ1
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

# 王棨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棨 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王棨（CBDB 638730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638730&o=json)
