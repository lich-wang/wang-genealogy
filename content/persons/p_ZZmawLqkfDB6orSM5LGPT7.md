---
schema: wang-person/v1
id: p_ZZmawLqkfDB6orSM5LGPT7
status: active
merged_into: null
display_name: 王回
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NP15HYQ9KMehGjKyus1DWW
        subject_person_id: p_ZZmawLqkfDB6orSM5LGPT7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王回
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cYDKhF45E3mKDU3mM6Lp7X
          claim_id: c_NP15HYQ9KMehGjKyus1DWW
          source_id: s_dogGtWNjGNU4tPUDSN6imv
          stance: supports
          locator: CBDB:380060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（380060）
          source: &a1
            id: s_dogGtWNjGNU4tPUDSN6imv
            source_type: api_record
            title: 中国历代人物传记资料库：王回（CBDB 380060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380060&o=json
            external_identifier: CBDB:380060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.703Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qKHKY52on3xMjhUWKRru7q
        subject_person_id: p_ZZmawLqkfDB6orSM5LGPT7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王回，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380060）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vhoLnohrz0m_3xx0loDXql
          claim_id: c_qKHKY52on3xMjhUWKRru7q
          source_id: s_dogGtWNjGNU4tPUDSN6imv
          stance: supports
          locator: CBDB:380060
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

# 王回

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王回 | accepted |
| bio.summary | 王回，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380060） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王回（CBDB 380060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380060&o=json)
