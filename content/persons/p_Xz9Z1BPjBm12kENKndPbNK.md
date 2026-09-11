---
schema: wang-person/v1
id: p_Xz9Z1BPjBm12kENKndPbNK
status: active
merged_into: null
display_name: 王諒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mEpXkAxz8mc618u3q826mq
        subject_person_id: p_Xz9Z1BPjBm12kENKndPbNK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xUqSvPArzbqhn9NZ2LQPAe
          claim_id: c_mEpXkAxz8mc618u3q826mq
          source_id: s_bX7KDBCPJCzQ52UuZDMGD3
          stance: supports
          locator: CBDB:100948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100948）
          source: &a1
            id: s_bX7KDBCPJCzQ52UuZDMGD3
            source_type: api_record
            title: 中国历代人物传记资料库：王諒（CBDB 100948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100948&o=json
            external_identifier: CBDB:100948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.594Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4wBpXoB646ZFgdFPv6E6PX
        subject_person_id: p_Xz9Z1BPjBm12kENKndPbNK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諒，元人物。曾任路同知。（中国历代人物传记资料库 CBDB 100948）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zqQvAW6hTOQIxaA8mp7sS_
          claim_id: c_4wBpXoB646ZFgdFPv6E6PX
          source_id: s_bX7KDBCPJCzQ52UuZDMGD3
          stance: supports
          locator: CBDB:100948
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

# 王諒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諒 | accepted |
| bio.summary | 王諒，元人物。曾任路同知。（中国历代人物传记资料库 CBDB 100948） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王諒（CBDB 100948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100948&o=json)
