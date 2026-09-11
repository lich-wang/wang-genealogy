---
schema: wang-person/v1
id: p_SMLyVkMQ9o4ijXr1HnrBDC
status: active
merged_into: null
display_name: 王阜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vu3UE3Jt2LHQb8UBx5wLH9
        subject_person_id: p_SMLyVkMQ9o4ijXr1HnrBDC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王阜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zo7dVJVERypDyFi28uzMm4
          claim_id: c_Vu3UE3Jt2LHQb8UBx5wLH9
          source_id: s_vBP5uBvyEDEpHu6dRVxqDe
          stance: supports
          locator: CBDB:458708
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（458708）
          source: &a1
            id: s_vBP5uBvyEDEpHu6dRVxqDe
            source_type: api_record
            title: 中国历代人物传记资料库：王阜（CBDB 458708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458708&o=json
            external_identifier: CBDB:458708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.660Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cz3xYMCv2HVMR91BmsJu6r
        subject_person_id: p_SMLyVkMQ9o4ijXr1HnrBDC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王阜，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 458708）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DYBsN1Yu2zB5l0BDunk6qa
          claim_id: c_cz3xYMCv2HVMR91BmsJu6r
          source_id: s_vBP5uBvyEDEpHu6dRVxqDe
          stance: supports
          locator: CBDB:458708
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

# 王阜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王阜 | accepted |
| bio.summary | 王阜，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 458708） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王阜（CBDB 458708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458708&o=json)
