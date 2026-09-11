---
schema: wang-person/v1
id: p_1BHG3BQh2GP7S17gzSDGpj
status: active
merged_into: null
display_name: 王贇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vQHkQh3gz6TbrPLsuNtHsV
        subject_person_id: p_1BHG3BQh2GP7S17gzSDGpj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ezHhppEeBHMRVpfM1JL3B3
          claim_id: c_vQHkQh3gz6TbrPLsuNtHsV
          source_id: s_P38FZwYsnmGtKfESnGXNLz
          stance: supports
          locator: CBDB:481816
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（481816）
          source: &a1
            id: s_P38FZwYsnmGtKfESnGXNLz
            source_type: api_record
            title: 中国历代人物传记资料库：王贇（CBDB 481816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=481816&o=json
            external_identifier: CBDB:481816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.700Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PxbxBqBvmFTXf9w6uzAdHM
        subject_person_id: p_1BHG3BQh2GP7S17gzSDGpj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贇，明人物。入仕世襲(替)，曾任百戶。（中国历代人物传记资料库 CBDB 481816）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K08FFSYVd7RV93zYedJmML
          claim_id: c_PxbxBqBvmFTXf9w6uzAdHM
          source_id: s_P38FZwYsnmGtKfESnGXNLz
          stance: supports
          locator: CBDB:481816
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王贇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王贇 | accepted |
| bio.summary | 王贇，明人物。入仕世襲(替)，曾任百戶。（中国历代人物传记资料库 CBDB 481816） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王贇（CBDB 481816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=481816&o=json)
