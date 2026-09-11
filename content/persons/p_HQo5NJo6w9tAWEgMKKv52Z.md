---
schema: wang-person/v1
id: p_HQo5NJo6w9tAWEgMKKv52Z
status: active
merged_into: null
display_name: 王子陽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yS8XvqHQHCcWEEjZyyEZQ7
        subject_person_id: p_HQo5NJo6w9tAWEgMKKv52Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ss4sGXdkD6D2hDg199FX67
          claim_id: c_yS8XvqHQHCcWEEjZyyEZQ7
          source_id: s_1i2vp467YztHjuqHytELar
          stance: supports
          locator: CBDB:687441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687441）
          source: &a1
            id: s_1i2vp467YztHjuqHytELar
            source_type: api_record
            title: 中国历代人物传记资料库：王子陽（CBDB 687441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687441&o=json
            external_identifier: CBDB:687441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ry9fuALh9AieNMnACrdq2c
        subject_person_id: p_HQo5NJo6w9tAWEgMKKv52Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子陽，宋人物。籍贯長溪，入仕進士。（中国历代人物传记资料库 CBDB 687441）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_563cDhV5rC9bKYcdEm7p3t
          claim_id: c_ry9fuALh9AieNMnACrdq2c
          source_id: s_1i2vp467YztHjuqHytELar
          stance: supports
          locator: CBDB:687441
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

# 王子陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子陽 | accepted |
| bio.summary | 王子陽，宋人物。籍贯長溪，入仕進士。（中国历代人物传记资料库 CBDB 687441） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子陽（CBDB 687441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687441&o=json)
