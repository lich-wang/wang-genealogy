---
schema: wang-person/v1
id: p_ejTakyuitmdUs1Yo7xAHEs
status: active
merged_into: null
display_name: 王振鋌
cbdb_id: 414702
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t91xxepaedHGAA2LHFzfLC
        subject_person_id: p_ejTakyuitmdUs1Yo7xAHEs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振鋌，清人物。曾任右營守備。（中国历代人物传记资料库 CBDB 414702）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_UAhkYuSWvoD8fz-ckAmAzU
          claim_id: c_t91xxepaedHGAA2LHFzfLC
          source_id: s_ucuHJadGHX144mgi4wuLmz
          stance: supports
          locator: CBDB:414702
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ucuHJadGHX144mgi4wuLmz
            source_type: api_record
            title: 中国历代人物传记资料库：王振鋌（CBDB 414702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414702&o=json
            external_identifier: CBDB:414702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:38.799Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JHZS8fpduVNSLBVDhVJyS3
        subject_person_id: p_ejTakyuitmdUs1Yo7xAHEs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振鋌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_M5LtwxvGDrspqpNvkQR5v7
          claim_id: c_JHZS8fpduVNSLBVDhVJyS3
          source_id: s_ucuHJadGHX144mgi4wuLmz
          stance: supports
          locator: CBDB:414702
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5701-5800）｜历史性依据：CBDB 朝代 = 清
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

# 王振鋌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王振鋌，清人物。曾任右營守備。（中国历代人物传记资料库 CBDB 414702） | accepted |
| name.primary | 王振鋌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振鋌（CBDB 414702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414702&o=json)
