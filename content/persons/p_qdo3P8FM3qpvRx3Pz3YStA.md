---
schema: wang-person/v1
id: p_qdo3P8FM3qpvRx3Pz3YStA
status: active
merged_into: null
display_name: 王熙祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GxRNfhfjJGr7YG8T4uSDZL
        subject_person_id: p_qdo3P8FM3qpvRx3Pz3YStA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熙祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P3d7KGiwJ57B12Bbw2ti3c
          claim_id: c_GxRNfhfjJGr7YG8T4uSDZL
          source_id: s_haUtNZMUv21piMaqkVWGCJ
          stance: supports
          locator: CBDB:639313
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639313）
          source: &a1
            id: s_haUtNZMUv21piMaqkVWGCJ
            source_type: api_record
            title: 中国历代人物传记资料库：王熙祥（CBDB 639313）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639313&o=json
            external_identifier: CBDB:639313
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vpnw63Pr41CbNfF2hEZNo2
        subject_person_id: p_qdo3P8FM3qpvRx3Pz3YStA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熙祥，清人物。籍贯濟南府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 639313）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mc4YtDOIa5PgIGxuGFM0_X
          claim_id: c_Vpnw63Pr41CbNfF2hEZNo2
          source_id: s_haUtNZMUv21piMaqkVWGCJ
          stance: supports
          locator: CBDB:639313
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

# 王熙祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熙祥 | accepted |
| bio.summary | 王熙祥，清人物。籍贯濟南府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 639313） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王熙祥（CBDB 639313）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639313&o=json)
