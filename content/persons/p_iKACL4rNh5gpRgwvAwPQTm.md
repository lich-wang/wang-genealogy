---
schema: wang-person/v1
id: p_iKACL4rNh5gpRgwvAwPQTm
status: active
merged_into: null
display_name: 王樹枏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HqYS4FCp5o4tHLes13skvM
        subject_person_id: p_iKACL4rNh5gpRgwvAwPQTm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹枏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LYw919n8Ur1EBK3RnPNq1y
          claim_id: c_HqYS4FCp5o4tHLes13skvM
          source_id: s_1nwAufanUGQRCbhktS1kmT
          stance: supports
          locator: CBDB:439558
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（439558）
          source: &a1
            id: s_1nwAufanUGQRCbhktS1kmT
            source_type: api_record
            title: 中国历代人物传记资料库：王樹枏（CBDB 439558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439558&o=json
            external_identifier: CBDB:439558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PRnTUSEbjwyeQwKrMHpZkj
        subject_person_id: p_iKACL4rNh5gpRgwvAwPQTm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1851年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NMmeusU9K3g21aGsbppgM2
          claim_id: c_PRnTUSEbjwyeQwKrMHpZkj
          source_id: s_1nwAufanUGQRCbhktS1kmT
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
        id: c_nQeY1kgU1rK9mBWrmF6v9G
        subject_person_id: p_iKACL4rNh5gpRgwvAwPQTm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1936年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3PhJqUHYzYwWsF7i7YnQWB
          claim_id: c_nQeY1kgU1rK9mBWrmF6v9G
          source_id: s_1nwAufanUGQRCbhktS1kmT
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
        id: c_erioqWZSmBwPKSQAJbdkLN
        subject_person_id: p_iKACL4rNh5gpRgwvAwPQTm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹枏（1851年—1936年），清人物。籍贯新城，入仕進士，曾任縣知縣、知州。（中国历代人物传记资料库 CBDB 439558）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0J0DCcU3C9i-d_QARLP3cK
          claim_id: c_erioqWZSmBwPKSQAJbdkLN
          source_id: s_1nwAufanUGQRCbhktS1kmT
          stance: supports
          locator: CBDB:439558
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

# 王樹枏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹枏 | accepted |
| birth.date | 1851年 | accepted |
| death.date | 1936年 | accepted |
| bio.summary | 王樹枏（1851年—1936年），清人物。籍贯新城，入仕進士，曾任縣知縣、知州。（中国历代人物传记资料库 CBDB 439558） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樹枏（CBDB 439558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439558&o=json)
