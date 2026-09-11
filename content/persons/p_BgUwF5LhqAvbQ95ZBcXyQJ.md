---
schema: wang-person/v1
id: p_BgUwF5LhqAvbQ95ZBcXyQJ
status: active
merged_into: null
display_name: 王禎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RTJHAYigmJ3mMFEr3aqrDE
        subject_person_id: p_BgUwF5LhqAvbQ95ZBcXyQJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_euJYEXGAkQoPeUWey5sLT8
          claim_id: c_RTJHAYigmJ3mMFEr3aqrDE
          source_id: s_zXTxEiffdW23SJC3kyfJok
          stance: supports
          locator: CBDB:551571
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551571）
          source: &a1
            id: s_zXTxEiffdW23SJC3kyfJok
            source_type: api_record
            title: 中国历代人物传记资料库：王禎（CBDB 551571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551571&o=json
            external_identifier: CBDB:551571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.612Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_w6MkHwNZpfj4wjZMK7oV92
        subject_person_id: p_BgUwF5LhqAvbQ95ZBcXyQJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1315年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9HRnLxdF9Pmm6d9uH8mB4w
          claim_id: c_w6MkHwNZpfj4wjZMK7oV92
          source_id: s_zXTxEiffdW23SJC3kyfJok
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
        id: c_oUHrMk9Nu2h3XshN5yUXd9
        subject_person_id: p_BgUwF5LhqAvbQ95ZBcXyQJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1344年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xDDEDE3JCXT5pEznnups74
          claim_id: c_oUHrMk9Nu2h3XshN5yUXd9
          source_id: s_zXTxEiffdW23SJC3kyfJok
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
        id: c_ssARB3f1tTNj9i4A4V8y2B
        subject_person_id: p_BgUwF5LhqAvbQ95ZBcXyQJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禎（1315年—1344年），史料所见人物。本项目依据《中国历代人物传记资料库：王禎（CBDB 551571）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u0mimkr78-8JEvkDVjosk2
          claim_id: c_ssARB3f1tTNj9i4A4V8y2B
          source_id: s_zXTxEiffdW23SJC3kyfJok
          stance: supports
          locator: CBDB:551571
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王禎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禎 | accepted |
| birth.date | 1315年 | accepted |
| death.date | 1344年 | accepted |
| bio.summary | 王禎（1315年—1344年），史料所见人物。本项目依据《中国历代人物传记资料库：王禎（CBDB 551571）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禎（CBDB 551571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551571&o=json)
