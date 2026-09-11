---
schema: wang-person/v1
id: p_s91dnPRqMJdG7bgXAhHHH8
status: active
merged_into: null
display_name: 王大章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dko59DNrBW7puQKGszb914
        subject_person_id: p_s91dnPRqMJdG7bgXAhHHH8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UrPY4Ne12btcyQ7p51LfK4
          claim_id: c_dko59DNrBW7puQKGszb914
          source_id: s_9jmMM49NnSi11tanKWNudD
          stance: supports
          locator: CBDB:327162
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327162）
          source: &a1
            id: s_9jmMM49NnSi11tanKWNudD
            source_type: api_record
            title: 中国历代人物传记资料库：王大章（CBDB 327162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327162&o=json
            external_identifier: CBDB:327162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dsC4f2ns8hTVjyPv6CWToD
        subject_person_id: p_s91dnPRqMJdG7bgXAhHHH8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大章，明人物。嘉靖四十一年進士，籍贯東陽。（中国历代人物传记资料库 CBDB 327162）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sZiFK2DfDvctALZrXqt2a3
          claim_id: c_dsC4f2ns8hTVjyPv6CWToD
          source_id: s_9jmMM49NnSi11tanKWNudD
          stance: supports
          locator: CBDB:327162
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

# 王大章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大章 | accepted |
| bio.summary | 王大章，明人物。嘉靖四十一年進士，籍贯東陽。（中国历代人物传记资料库 CBDB 327162） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大章（CBDB 327162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327162&o=json)
