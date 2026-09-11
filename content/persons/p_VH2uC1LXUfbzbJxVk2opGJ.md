---
schema: wang-person/v1
id: p_VH2uC1LXUfbzbJxVk2opGJ
status: active
merged_into: null
display_name: 王孟端
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kQLjya9fykF4jaGPUTangY
        subject_person_id: p_VH2uC1LXUfbzbJxVk2opGJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zy3Ku1DFdFKLWA5dYonwWr
          claim_id: c_kQLjya9fykF4jaGPUTangY
          source_id: s_QvtfHuCwqauU684tRPBWW9
          stance: supports
          locator: CBDB:566439
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（566439）
          source: &a1
            id: s_QvtfHuCwqauU684tRPBWW9
            source_type: api_record
            title: 中国历代人物传记资料库：王孟端（CBDB 566439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566439&o=json
            external_identifier: CBDB:566439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EMLA1t6gGGtg5xhhiLUh1S
        subject_person_id: p_VH2uC1LXUfbzbJxVk2opGJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟端，明人物。籍贯無錫。（中国历代人物传记资料库 CBDB 566439）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_thWU8_o6ToSba7RBOfD_Wr
          claim_id: c_EMLA1t6gGGtg5xhhiLUh1S
          source_id: s_QvtfHuCwqauU684tRPBWW9
          stance: supports
          locator: CBDB:566439
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

# 王孟端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孟端 | accepted |
| bio.summary | 王孟端，明人物。籍贯無錫。（中国历代人物传记资料库 CBDB 566439） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孟端（CBDB 566439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566439&o=json)
