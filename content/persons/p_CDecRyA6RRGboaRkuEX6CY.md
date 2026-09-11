---
schema: wang-person/v1
id: p_CDecRyA6RRGboaRkuEX6CY
status: active
merged_into: null
display_name: 王君玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nEL99rB3LWrXTiG2DVo4N9
        subject_person_id: p_CDecRyA6RRGboaRkuEX6CY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C3J6JabW2MbE7BV7zC76rC
          claim_id: c_nEL99rB3LWrXTiG2DVo4N9
          source_id: s_FcAiPbzprMqp9KHXWpHAnb
          stance: supports
          locator: CBDB:101207
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101207）
          source: &a1
            id: s_FcAiPbzprMqp9KHXWpHAnb
            source_type: api_record
            title: 中国历代人物传记资料库：王君玉（CBDB 101207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101207&o=json
            external_identifier: CBDB:101207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.749Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zwfdHEymhZ8bDdsjDZtYN2
        subject_person_id: p_CDecRyA6RRGboaRkuEX6CY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君玉，元人物。籍贯武清，曾任守禦。（中国历代人物传记资料库 CBDB 101207）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rruvLoHJXLVxAcBR5mN856
          claim_id: c_zwfdHEymhZ8bDdsjDZtYN2
          source_id: s_FcAiPbzprMqp9KHXWpHAnb
          stance: supports
          locator: CBDB:101207
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

# 王君玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王君玉 | accepted |
| bio.summary | 王君玉，元人物。籍贯武清，曾任守禦。（中国历代人物传记资料库 CBDB 101207） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王君玉（CBDB 101207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101207&o=json)
