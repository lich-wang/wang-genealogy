---
schema: wang-person/v1
id: p_C49cRVtvgLkUKUPRthcKXq
status: active
merged_into: null
display_name: 王顒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R81okHxgNj7LqEp92DQDRH
        subject_person_id: p_C49cRVtvgLkUKUPRthcKXq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7dfe6cDSgvRiJBewfzTAMB
          claim_id: c_R81okHxgNj7LqEp92DQDRH
          source_id: s_CWjtDZ4ta7EqYFz63w4EtQ
          stance: supports
          locator: CBDB:327156
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327156）
          source: &a1
            id: s_CWjtDZ4ta7EqYFz63w4EtQ
            source_type: api_record
            title: 中国历代人物传记资料库：王顒（CBDB 327156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327156&o=json
            external_identifier: CBDB:327156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WeBorXfhA71ZtB8bUUEhtM
        subject_person_id: p_C49cRVtvgLkUKUPRthcKXq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顒，明人物。嘉靖四十一年進士，籍贯東陽。（中国历代人物传记资料库 CBDB 327156）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FT5iepVZOBf5EOccVlfWM1
          claim_id: c_WeBorXfhA71ZtB8bUUEhtM
          source_id: s_CWjtDZ4ta7EqYFz63w4EtQ
          stance: supports
          locator: CBDB:327156
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

# 王顒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顒 | accepted |
| bio.summary | 王顒，明人物。嘉靖四十一年進士，籍贯東陽。（中国历代人物传记资料库 CBDB 327156） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顒（CBDB 327156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327156&o=json)
