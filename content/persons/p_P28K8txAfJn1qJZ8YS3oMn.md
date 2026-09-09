---
schema: wang-person/v1
id: p_P28K8txAfJn1qJZ8YS3oMn
status: active
merged_into: null
display_name: 王汝舟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bdfKvh3KCTr1hiJhFRTtwW
        subject_person_id: p_P28K8txAfJn1qJZ8YS3oMn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝舟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tFpbLYw4qhDmdydLQFBp9A
          claim_id: c_bdfKvh3KCTr1hiJhFRTtwW
          source_id: s_o7P72TGD6fiMpTP1UGiRQF
          stance: supports
          locator: CBDB:484772
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（484772）
          source: &a1
            id: s_o7P72TGD6fiMpTP1UGiRQF
            source_type: api_record
            title: 中国历代人物传记资料库：王汝舟（CBDB 484772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=484772&o=json
            external_identifier: CBDB:484772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jpEfC9CXe9vM3NrkMKgwgF
        subject_person_id: p_P28K8txAfJn1qJZ8YS3oMn
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
        - id: cs_jiuBRGaBNq4G9jQVC1h55i
          claim_id: c_jpEfC9CXe9vM3NrkMKgwgF
          source_id: s_o7P72TGD6fiMpTP1UGiRQF
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

# 王汝舟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝舟 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝舟（CBDB 484772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=484772&o=json)
