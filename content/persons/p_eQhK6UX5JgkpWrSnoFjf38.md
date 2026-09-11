---
schema: wang-person/v1
id: p_eQhK6UX5JgkpWrSnoFjf38
status: active
merged_into: null
display_name: 王麒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H26mi65Du6fvc18obWH1yZ
        subject_person_id: p_eQhK6UX5JgkpWrSnoFjf38
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n4xe6E9W1cKN57G1UvSwz1
          claim_id: c_H26mi65Du6fvc18obWH1yZ
          source_id: s_Y5W4hMQrT6dpGNt7BXdMtc
          stance: supports
          locator: CBDB:126868
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126868）
          source: &a1
            id: s_Y5W4hMQrT6dpGNt7BXdMtc
            source_type: api_record
            title: 中国历代人物传记资料库：王麒（CBDB 126868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126868&o=json
            external_identifier: CBDB:126868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Q1oPEJiQUVhZavv8cdE7E2
        subject_person_id: p_eQhK6UX5JgkpWrSnoFjf38
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1463年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A8pPHN4zYzPNSa9dkE7HwP
          claim_id: c_Q1oPEJiQUVhZavv8cdE7E2
          source_id: s_Y5W4hMQrT6dpGNt7BXdMtc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_3UJhWA113LFUS2BGBgvXqp
        subject_person_id: p_eQhK6UX5JgkpWrSnoFjf38
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1528年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5KRgnPS45URTLy4FKjBCsS
          claim_id: c_3UJhWA113LFUS2BGBgvXqp
          source_id: s_Y5W4hMQrT6dpGNt7BXdMtc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XeRv6KhkLw5C8mzvW1qXmG
        subject_person_id: p_eQhK6UX5JgkpWrSnoFjf38
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麒（1463年—1528年），明人物。籍贯鳳翔，身份为詩人、圍棋棋手，曾任知縣。（中国历代人物传记资料库 CBDB 126868）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6XgfClf_e6EjtJC9khnW0k
          claim_id: c_XeRv6KhkLw5C8mzvW1qXmG
          source_id: s_Y5W4hMQrT6dpGNt7BXdMtc
          stance: supports
          locator: CBDB:126868
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

# 王麒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麒 | accepted |
| birth.date | 1463年 | accepted |
| death.date | 1528年 | accepted |
| bio.summary | 王麒（1463年—1528年），明人物。籍贯鳳翔，身份为詩人、圍棋棋手，曾任知縣。（中国历代人物传记资料库 CBDB 126868） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王麒（CBDB 126868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126868&o=json)
