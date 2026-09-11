---
schema: wang-person/v1
id: p_oWoXAiqdg64CQUCpQSt7jB
status: active
merged_into: null
display_name: 王伯顏察兒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jgTpo7caUwEMQv6mQZz3aZ
        subject_person_id: p_oWoXAiqdg64CQUCpQSt7jB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯顏察兒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HH9dE6MMjPu8uzuk5Uurga
          claim_id: c_jgTpo7caUwEMQv6mQZz3aZ
          source_id: s_vBD77BLCxRCLbk53vfiAJC
          stance: supports
          locator: CBDB:101472
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101472）
          source: &a1
            id: s_vBD77BLCxRCLbk53vfiAJC
            source_type: api_record
            title: 中国历代人物传记资料库：王伯顏察兒（CBDB 101472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101472&o=json
            external_identifier: CBDB:101472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.855Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mAzx7UzdtryfTAP2tGtK12
        subject_person_id: p_oWoXAiqdg64CQUCpQSt7jB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯顏察兒，元人物。曾任祕書監怯里馬赤。（中国历代人物传记资料库 CBDB 101472）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tV3ay_BKBpW_9JEVUzMmPD
          claim_id: c_mAzx7UzdtryfTAP2tGtK12
          source_id: s_vBD77BLCxRCLbk53vfiAJC
          stance: supports
          locator: CBDB:101472
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

# 王伯顏察兒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯顏察兒 | accepted |
| bio.summary | 王伯顏察兒，元人物。曾任祕書監怯里馬赤。（中国历代人物传记资料库 CBDB 101472） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯顏察兒（CBDB 101472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101472&o=json)
