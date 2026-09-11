---
schema: wang-person/v1
id: p_M4hUSNjWjw7tqxTdkU57BA
status: active
merged_into: null
display_name: 王宸誼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hHUNk8P98N27n1nswLXxJL
        subject_person_id: p_M4hUSNjWjw7tqxTdkU57BA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸誼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AfJbEM42o9MuwLnvKdFLn3
          claim_id: c_hHUNk8P98N27n1nswLXxJL
          source_id: s_JCzvPWeQkJ3YxXSPSCDB43
          stance: supports
          locator: CBDB:637234
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637234）
          source: &a1
            id: s_JCzvPWeQkJ3YxXSPSCDB43
            source_type: api_record
            title: 中国历代人物传记资料库：王宸誼（CBDB 637234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637234&o=json
            external_identifier: CBDB:637234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.246Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5nBnMwHSQPsr4aV16kPSAV
        subject_person_id: p_M4hUSNjWjw7tqxTdkU57BA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸誼，清人物。籍贯臨汾，曾任藍翎侍衛。（中国历代人物传记资料库 CBDB 637234）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_keIdvrwe656Ss-JC7u5c8E
          claim_id: c_5nBnMwHSQPsr4aV16kPSAV
          source_id: s_JCzvPWeQkJ3YxXSPSCDB43
          stance: supports
          locator: CBDB:637234
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

# 王宸誼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宸誼 | accepted |
| bio.summary | 王宸誼，清人物。籍贯臨汾，曾任藍翎侍衛。（中国历代人物传记资料库 CBDB 637234） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宸誼（CBDB 637234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637234&o=json)
