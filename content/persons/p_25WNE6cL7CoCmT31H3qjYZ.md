---
schema: wang-person/v1
id: p_25WNE6cL7CoCmT31H3qjYZ
status: active
merged_into: null
display_name: 王掄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zszAWwWFJMdo1qB8X5vm8z
        subject_person_id: p_25WNE6cL7CoCmT31H3qjYZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王掄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HvsPtc6HaCDMYQuFsHg1LG
          claim_id: c_zszAWwWFJMdo1qB8X5vm8z
          source_id: s_pZNpn8kKt7ZNbk3i2hV9jz
          stance: supports
          locator: CBDB:442722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（442722）
          source: &a1
            id: s_pZNpn8kKt7ZNbk3i2hV9jz
            source_type: api_record
            title: 中国历代人物传记资料库：王掄（CBDB 442722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=442722&o=json
            external_identifier: CBDB:442722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.116Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7GYXaQ1CGxMAivtch7kJfB
        subject_person_id: p_25WNE6cL7CoCmT31H3qjYZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王掄，清人物。曾任司巡檢。（中国历代人物传记资料库 CBDB 442722）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_omwKosAaXfNhFAqpXA6VsP
          claim_id: c_7GYXaQ1CGxMAivtch7kJfB
          source_id: s_pZNpn8kKt7ZNbk3i2hV9jz
          stance: supports
          locator: CBDB:442722
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

# 王掄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王掄 | accepted |
| bio.summary | 王掄，清人物。曾任司巡檢。（中国历代人物传记资料库 CBDB 442722） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王掄（CBDB 442722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=442722&o=json)
