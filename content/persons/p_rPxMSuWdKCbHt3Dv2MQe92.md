---
schema: wang-person/v1
id: p_rPxMSuWdKCbHt3Dv2MQe92
status: active
merged_into: null
display_name: 王榛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YgdnmkCRNZRvUYWjqBqLn5
        subject_person_id: p_rPxMSuWdKCbHt3Dv2MQe92
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s11dHRoMiRVoPbH3GFqKxE
          claim_id: c_YgdnmkCRNZRvUYWjqBqLn5
          source_id: s_GyBJPT5rBFp1Z8WETUAgU4
          stance: supports
          locator: CBDB:638791
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638791）
          source: &a1
            id: s_GyBJPT5rBFp1Z8WETUAgU4
            source_type: api_record
            title: 中国历代人物传记资料库：王榛（CBDB 638791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638791&o=json
            external_identifier: CBDB:638791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rh7MJojLV38S1hCFTqFPXk
        subject_person_id: p_rPxMSuWdKCbHt3Dv2MQe92
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榛，清人物。籍贯江夏，曾任經歷。（中国历代人物传记资料库 CBDB 638791）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZLOftfSNfwRsmEKMhNWBtD
          claim_id: c_rh7MJojLV38S1hCFTqFPXk
          source_id: s_GyBJPT5rBFp1Z8WETUAgU4
          stance: supports
          locator: CBDB:638791
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

# 王榛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榛 | accepted |
| bio.summary | 王榛，清人物。籍贯江夏，曾任經歷。（中国历代人物传记资料库 CBDB 638791） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榛（CBDB 638791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638791&o=json)
