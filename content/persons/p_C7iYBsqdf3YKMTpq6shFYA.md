---
schema: wang-person/v1
id: p_C7iYBsqdf3YKMTpq6shFYA
status: active
merged_into: null
display_name: 王旭昇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y7ur2ZGN67J1cDQcoAw6ik
        subject_person_id: p_C7iYBsqdf3YKMTpq6shFYA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旭昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B4Puv299kKKgaJCRRvTJFA
          claim_id: c_Y7ur2ZGN67J1cDQcoAw6ik
          source_id: s_8fKrC2uZoD6uX2pndo6z5H
          stance: supports
          locator: CBDB:638343
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638343）
          source: &a1
            id: s_8fKrC2uZoD6uX2pndo6z5H
            source_type: api_record
            title: 中国历代人物传记资料库：王旭昇（CBDB 638343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638343&o=json
            external_identifier: CBDB:638343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.670Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LYhkjVP4tELD4563M7FDoB
        subject_person_id: p_C7iYBsqdf3YKMTpq6shFYA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旭昇，清人物。籍贯寶坻，入仕附貢生，曾任縣丞、知縣。（中国历代人物传记资料库 CBDB 638343）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IT8IFAmS1DTn1pPglKfy--
          claim_id: c_LYhkjVP4tELD4563M7FDoB
          source_id: s_8fKrC2uZoD6uX2pndo6z5H
          stance: supports
          locator: CBDB:638343
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

# 王旭昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旭昇 | accepted |
| bio.summary | 王旭昇，清人物。籍贯寶坻，入仕附貢生，曾任縣丞、知縣。（中国历代人物传记资料库 CBDB 638343） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王旭昇（CBDB 638343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638343&o=json)
