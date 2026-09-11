---
schema: wang-person/v1
id: p_EkPm542VxE9MQpF2Nw5QH7
status: active
merged_into: null
display_name: 王康
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8XBPChu1GPt9M53EzXJ7uB
        subject_person_id: p_EkPm542VxE9MQpF2Nw5QH7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wV2Q9rfVLKRUmGXK8UBMae
          claim_id: c_8XBPChu1GPt9M53EzXJ7uB
          source_id: s_BYEFiSzBxyvzy6E5LjQEpE
          stance: supports
          locator: CBDB:38021
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38021）
          source: &a1
            id: s_BYEFiSzBxyvzy6E5LjQEpE
            source_type: api_record
            title: 中国历代人物传记资料库：王康（CBDB 38021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38021&o=json
            external_identifier: CBDB:38021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.326Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oGVQpAP7AmL5wJ8M72FTXe
        subject_person_id: p_EkPm542VxE9MQpF2Nw5QH7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康，宋人物。籍贯金壇，入仕特賜補官、准赦文除授等，曾任縣尉。（中国历代人物传记资料库 CBDB 38021）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9M4aZvO3fDMeHr1fuiEU8r
          claim_id: c_oGVQpAP7AmL5wJ8M72FTXe
          source_id: s_BYEFiSzBxyvzy6E5LjQEpE
          stance: supports
          locator: CBDB:38021
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

# 王康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王康 | accepted |
| bio.summary | 王康，宋人物。籍贯金壇，入仕特賜補官、准赦文除授等，曾任縣尉。（中国历代人物传记资料库 CBDB 38021） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王康（CBDB 38021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38021&o=json)
