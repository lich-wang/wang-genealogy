---
schema: wang-person/v1
id: p_2oyVNz4SF3JQDMBQf7sD4F
status: active
merged_into: null
display_name: 王邦藩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7J1U75XoMHCdeGoKw7UnW1
        subject_person_id: p_2oyVNz4SF3JQDMBQf7sD4F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦藩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yqsKfD7u8o6gJCJKmY5Uvh
          claim_id: c_7J1U75XoMHCdeGoKw7UnW1
          source_id: s_obbDZqMQXavNi9kygX6Q32
          stance: supports
          locator: CBDB:640484
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640484）
          source: &a1
            id: s_obbDZqMQXavNi9kygX6Q32
            source_type: api_record
            title: 中国历代人物传记资料库：王邦藩（CBDB 640484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640484&o=json
            external_identifier: CBDB:640484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.273Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8d2nCEkSjR6KpQns7s4xwT
        subject_person_id: p_2oyVNz4SF3JQDMBQf7sD4F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦藩，清人物。籍贯蕭山，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 640484）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Bi5iBhBsL1EEogSQFd7afS
          claim_id: c_8d2nCEkSjR6KpQns7s4xwT
          source_id: s_obbDZqMQXavNi9kygX6Q32
          stance: supports
          locator: CBDB:640484
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

# 王邦藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦藩 | accepted |
| bio.summary | 王邦藩，清人物。籍贯蕭山，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 640484） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王邦藩（CBDB 640484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640484&o=json)
