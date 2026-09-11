---
schema: wang-person/v1
id: p_dSH19U57YVcLTUHRM3pvo9
status: active
merged_into: null
display_name: 王知新
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1ApgLPcxbgyL11iwmg9BRE
        subject_person_id: p_dSH19U57YVcLTUHRM3pvo9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T2RWmDPWMVwAhLy4Peg2pU
          claim_id: c_1ApgLPcxbgyL11iwmg9BRE
          source_id: s_Qj14yHfLJyyo9xW6UxsMUV
          stance: supports
          locator: CBDB:503836
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（503836）
          source: &a1
            id: s_Qj14yHfLJyyo9xW6UxsMUV
            source_type: api_record
            title: 中国历代人物传记资料库：王知新（CBDB 503836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503836&o=json
            external_identifier: CBDB:503836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.917Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DMHPkdY3Hn8FfZDNMxjHkY
        subject_person_id: p_dSH19U57YVcLTUHRM3pvo9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知新，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 503836）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ux0iYwhISWrCsBzZnAOpZj
          claim_id: c_DMHPkdY3Hn8FfZDNMxjHkY
          source_id: s_Qj14yHfLJyyo9xW6UxsMUV
          stance: supports
          locator: CBDB:503836
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

# 王知新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王知新 | accepted |
| bio.summary | 王知新，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 503836） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王知新（CBDB 503836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503836&o=json)
