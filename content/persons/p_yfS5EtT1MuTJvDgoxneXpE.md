---
schema: wang-person/v1
id: p_yfS5EtT1MuTJvDgoxneXpE
status: active
merged_into: null
display_name: 王昇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XzFMj65DDbm4bThe4dcpz5
        subject_person_id: p_yfS5EtT1MuTJvDgoxneXpE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fGfZ4MpPjPmJJPGS9UJn7n
          claim_id: c_XzFMj65DDbm4bThe4dcpz5
          source_id: s_2QdbrDfg4k8UET5qzGt8f7
          stance: supports
          locator: CBDB:491872
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491872）
          source: &a1
            id: s_2QdbrDfg4k8UET5qzGt8f7
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 491872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491872&o=json
            external_identifier: CBDB:491872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.223Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WvcYwJM1QPMpFLjiy4CynB
        subject_person_id: p_yfS5EtT1MuTJvDgoxneXpE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o9u2UAXLpjken5vSNxE9pa
          claim_id: c_WvcYwJM1QPMpFLjiy4CynB
          source_id: s_2QdbrDfg4k8UET5qzGt8f7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昇（CBDB 491872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491872&o=json)
