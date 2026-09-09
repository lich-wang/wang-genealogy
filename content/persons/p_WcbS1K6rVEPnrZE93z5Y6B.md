---
schema: wang-person/v1
id: p_WcbS1K6rVEPnrZE93z5Y6B
status: active
merged_into: null
display_name: 王焯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NaP487QNBNnRxApWqeVZi9
        subject_person_id: p_WcbS1K6rVEPnrZE93z5Y6B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王焯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M57kTKG6aQHK7r8GAr9z5g
          claim_id: c_NaP487QNBNnRxApWqeVZi9
          source_id: s_2cV7D4vkLsaQpv52hgLCug
          stance: supports
          locator: CBDB:343907
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343907）
          source: &a1
            id: s_2cV7D4vkLsaQpv52hgLCug
            source_type: api_record
            title: 中国历代人物传记资料库：王焯（CBDB 343907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343907&o=json
            external_identifier: CBDB:343907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.573Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HehXCveKggxTNrN8JNtBMc
        subject_person_id: p_WcbS1K6rVEPnrZE93z5Y6B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gi1YsdHASWSJivNCpQe3Qw
          claim_id: c_HehXCveKggxTNrN8JNtBMc
          source_id: s_2cV7D4vkLsaQpv52hgLCug
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

# 王焯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王焯 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王焯（CBDB 343907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343907&o=json)
