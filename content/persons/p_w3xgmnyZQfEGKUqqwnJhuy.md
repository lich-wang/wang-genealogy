---
schema: wang-person/v1
id: p_w3xgmnyZQfEGKUqqwnJhuy
status: active
merged_into: null
display_name: 王瓉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oJburCzeaREf3BF51DJ36D
        subject_person_id: p_w3xgmnyZQfEGKUqqwnJhuy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VyuFwn46FRLkfEobnTgYGh
          claim_id: c_oJburCzeaREf3BF51DJ36D
          source_id: s_HcrbouFaNSPZMePhx5M4MA
          stance: supports
          locator: CBDB:483252
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（483252）
          source: &a1
            id: s_HcrbouFaNSPZMePhx5M4MA
            source_type: api_record
            title: 中国历代人物传记资料库：王瓉（CBDB 483252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483252&o=json
            external_identifier: CBDB:483252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.788Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oP5mKVDkxWabvrQx3K3P7r
        subject_person_id: p_w3xgmnyZQfEGKUqqwnJhuy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓉，明人物。入仕世襲(替)，曾任百戶、僉事。（中国历代人物传记资料库 CBDB 483252）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y2a41tKKK1uoZqrnvaM0Gx
          claim_id: c_oP5mKVDkxWabvrQx3K3P7r
          source_id: s_HcrbouFaNSPZMePhx5M4MA
          stance: supports
          locator: CBDB:483252
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

# 王瓉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓉 | accepted |
| bio.summary | 王瓉，明人物。入仕世襲(替)，曾任百戶、僉事。（中国历代人物传记资料库 CBDB 483252） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓉（CBDB 483252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483252&o=json)
