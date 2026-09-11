---
schema: wang-person/v1
id: p_53hFGp7arQhYc4A9JcmXwi
status: active
merged_into: null
display_name: 王昌期
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UqL5kqb7u3opd9EUhX4syw
        subject_person_id: p_53hFGp7arQhYc4A9JcmXwi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌期
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qTxpPT42K2LDu1Ub6wbWCC
          claim_id: c_UqL5kqb7u3opd9EUhX4syw
          source_id: s_5SpALbGXV2p3fS6PquGfoK
          stance: supports
          locator: CBDB:484164
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（484164）
          source: &a1
            id: s_5SpALbGXV2p3fS6PquGfoK
            source_type: api_record
            title: 中国历代人物传记资料库：王昌期（CBDB 484164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=484164&o=json
            external_identifier: CBDB:484164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jD7GNAA2wCLkRMRAV3jQPi
        subject_person_id: p_53hFGp7arQhYc4A9JcmXwi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌期，宋人物。曾任軍事判官。（中国历代人物传记资料库 CBDB 484164）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OyUksceuqUGLvBzF8Qcpt7
          claim_id: c_jD7GNAA2wCLkRMRAV3jQPi
          source_id: s_5SpALbGXV2p3fS6PquGfoK
          stance: supports
          locator: CBDB:484164
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

# 王昌期

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌期 | accepted |
| bio.summary | 王昌期，宋人物。曾任軍事判官。（中国历代人物传记资料库 CBDB 484164） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昌期（CBDB 484164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=484164&o=json)
