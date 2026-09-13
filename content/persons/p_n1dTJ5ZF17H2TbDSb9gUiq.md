---
schema: wang-person/v1
id: p_n1dTJ5ZF17H2TbDSb9gUiq
status: active
merged_into: null
display_name: 王逹
cbdb_id: 415490
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QoXy1zvqsDkti3xBRygoBn
        subject_person_id: p_n1dTJ5ZF17H2TbDSb9gUiq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逹，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 415490）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_kWydQamE9usoWPQrtG_9-T
          claim_id: c_QoXy1zvqsDkti3xBRygoBn
          source_id: s_ZrMFtBAyrNHxhZJP9CqpFo
          stance: supports
          locator: CBDB:415490
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZrMFtBAyrNHxhZJP9CqpFo
            source_type: api_record
            title: 中国历代人物传记资料库：王逹（CBDB 415490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415490&o=json
            external_identifier: CBDB:415490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:02.698Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XrdMM8s2GyhRqE93D1KHCr
        subject_person_id: p_n1dTJ5ZF17H2TbDSb9gUiq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Gh7Jnek6qCG74ERz6L3m1y
          claim_id: c_XrdMM8s2GyhRqE93D1KHCr
          source_id: s_ZrMFtBAyrNHxhZJP9CqpFo
          stance: supports
          locator: CBDB:415490
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6301-6400）｜历史性依据：CBDB 朝代 = 明
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

# 王逹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王逹，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 415490） | accepted |
| name.primary | 王逹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逹（CBDB 415490）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415490&o=json)
