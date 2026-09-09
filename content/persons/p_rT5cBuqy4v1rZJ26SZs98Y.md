---
schema: wang-person/v1
id: p_rT5cBuqy4v1rZJ26SZs98Y
status: active
merged_into: null
display_name: 王有凴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wFDBVcA2X2NxBUB2BgbPhZ
        subject_person_id: p_rT5cBuqy4v1rZJ26SZs98Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有凴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HnQ1mdBeXXznLHpJX8oxwJ
          claim_id: c_wFDBVcA2X2NxBUB2BgbPhZ
          source_id: s_A7qi1XiYjnRht9JEvU53hA
          stance: supports
          locator: CBDB:638582
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638582）
          source: &a1
            id: s_A7qi1XiYjnRht9JEvU53hA
            source_type: api_record
            title: 中国历代人物传记资料库：王有凴（CBDB 638582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638582&o=json
            external_identifier: CBDB:638582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.683Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SKjqzYP9tARk8cv8TEJyWY
        subject_person_id: p_rT5cBuqy4v1rZJ26SZs98Y
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
        - id: cs_C9BSTnfkUUNLAZ4921StfQ
          claim_id: c_SKjqzYP9tARk8cv8TEJyWY
          source_id: s_A7qi1XiYjnRht9JEvU53hA
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

# 王有凴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有凴 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有凴（CBDB 638582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638582&o=json)
