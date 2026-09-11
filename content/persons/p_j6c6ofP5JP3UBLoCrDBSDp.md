---
schema: wang-person/v1
id: p_j6c6ofP5JP3UBLoCrDBSDp
status: active
merged_into: null
display_name: 王百度
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SKLPzNBXruwxVsYhWU7qHN
        subject_person_id: p_j6c6ofP5JP3UBLoCrDBSDp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王百度
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Maiaj5PKDXxhH821YUJ6vz
          claim_id: c_SKLPzNBXruwxVsYhWU7qHN
          source_id: s_DDAkMNGb3s24AnECdWAb4d
          stance: supports
          locator: CBDB:459524
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（459524）
          source: &a1
            id: s_DDAkMNGb3s24AnECdWAb4d
            source_type: api_record
            title: 中国历代人物传记资料库：王百度（CBDB 459524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459524&o=json
            external_identifier: CBDB:459524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.705Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RPi5zCKhRwUmcYAVoN24xA
        subject_person_id: p_j6c6ofP5JP3UBLoCrDBSDp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王百度，明人物。曾任把總。（中国历代人物传记资料库 CBDB 459524）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UfajA8EvjK0teGt1rSytKu
          claim_id: c_RPi5zCKhRwUmcYAVoN24xA
          source_id: s_DDAkMNGb3s24AnECdWAb4d
          stance: supports
          locator: CBDB:459524
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

# 王百度

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王百度 | accepted |
| bio.summary | 王百度，明人物。曾任把總。（中国历代人物传记资料库 CBDB 459524） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王百度（CBDB 459524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459524&o=json)
