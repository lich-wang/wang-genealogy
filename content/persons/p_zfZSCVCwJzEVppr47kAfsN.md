---
schema: wang-person/v1
id: p_zfZSCVCwJzEVppr47kAfsN
status: active
merged_into: null
display_name: 王桓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m5SBgnHJox8ois4RAhGyZ8
        subject_person_id: p_zfZSCVCwJzEVppr47kAfsN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WKYZwhwKAgjpPYBpvxrqFV
          claim_id: c_m5SBgnHJox8ois4RAhGyZ8
          source_id: s_1V9kJ7T8rda92GWr2oEM7K
          stance: supports
          locator: CBDB:126643
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126643）
          source: &a1
            id: s_1V9kJ7T8rda92GWr2oEM7K
            source_type: api_record
            title: 中国历代人物传记资料库：王桓（CBDB 126643）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126643&o=json
            external_identifier: CBDB:126643
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.092Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1dsvFEHJF6VTBQg9FAFuw3
        subject_person_id: p_zfZSCVCwJzEVppr47kAfsN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桓，明人物。籍贯華亭，身份为詩人。（中国历代人物传记资料库 CBDB 126643）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BKSIwGRyZYxpauKuL8dx7G
          claim_id: c_1dsvFEHJF6VTBQg9FAFuw3
          source_id: s_1V9kJ7T8rda92GWr2oEM7K
          stance: supports
          locator: CBDB:126643
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

# 王桓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桓 | accepted |
| bio.summary | 王桓，明人物。籍贯華亭，身份为詩人。（中国历代人物传记资料库 CBDB 126643） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桓（CBDB 126643）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126643&o=json)
