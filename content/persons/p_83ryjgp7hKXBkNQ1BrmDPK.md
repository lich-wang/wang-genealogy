---
schema: wang-person/v1
id: p_83ryjgp7hKXBkNQ1BrmDPK
status: active
merged_into: null
display_name: 王定國
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q8uTTxiSEL2evsmd67hNTM
        subject_person_id: p_83ryjgp7hKXBkNQ1BrmDPK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_msTKKQAx9dgMd3WuAvZC9K
          claim_id: c_q8uTTxiSEL2evsmd67hNTM
          source_id: s_vTuyK7TQHpyL5g89Hoe4sD
          stance: supports
          locator: CBDB:45901
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45901）
          source: &a1
            id: s_vTuyK7TQHpyL5g89Hoe4sD
            source_type: api_record
            title: 中国历代人物传记资料库：王定國（CBDB 45901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45901&o=json
            external_identifier: CBDB:45901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.710Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7MR4XNnyn335eGh2WGzH5B
        subject_person_id: p_83ryjgp7hKXBkNQ1BrmDPK
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
        - id: cs_Au1JeCmtk54QWjCVJQ2trw
          claim_id: c_7MR4XNnyn335eGh2WGzH5B
          source_id: s_vTuyK7TQHpyL5g89Hoe4sD
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

# 王定國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定國 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定國（CBDB 45901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45901&o=json)
