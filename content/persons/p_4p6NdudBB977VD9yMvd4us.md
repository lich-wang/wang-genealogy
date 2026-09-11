---
schema: wang-person/v1
id: p_4p6NdudBB977VD9yMvd4us
status: active
merged_into: null
display_name: 王仁鑣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9Z9bNzXVtooBjAWPLUtN2P
        subject_person_id: p_4p6NdudBB977VD9yMvd4us
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁鑣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b7HBSKpVPGqBNoWPqXetbR
          claim_id: c_9Z9bNzXVtooBjAWPLUtN2P
          source_id: s_Q8HLFjarAuBEY671hjMqC8
          stance: supports
          locator: CBDB:635894
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635894）
          source: &a1
            id: s_Q8HLFjarAuBEY671hjMqC8
            source_type: api_record
            title: 中国历代人物传记资料库：王仁鑣（CBDB 635894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635894&o=json
            external_identifier: CBDB:635894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KeRrfYuyg1WQr1nY7MVP8Z
        subject_person_id: p_4p6NdudBB977VD9yMvd4us
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁鑣，清人物。籍贯吳江，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635894）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4GERvZrBnk3Y8Ngp0eL5mc
          claim_id: c_KeRrfYuyg1WQr1nY7MVP8Z
          source_id: s_Q8HLFjarAuBEY671hjMqC8
          stance: supports
          locator: CBDB:635894
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

# 王仁鑣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁鑣 | accepted |
| bio.summary | 王仁鑣，清人物。籍贯吳江，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635894） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁鑣（CBDB 635894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635894&o=json)
