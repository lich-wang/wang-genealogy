---
schema: wang-person/v1
id: p_KbJkuGqFWE5TNp2YNzLaQb
status: active
merged_into: null
display_name: 王璽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sw9bi8u78N95uhC5xKAYV5
        subject_person_id: p_KbJkuGqFWE5TNp2YNzLaQb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aYKEx1ZF7W8NVLJjiFZjC5
          claim_id: c_sw9bi8u78N95uhC5xKAYV5
          source_id: s_arSTR7rLYJ8X7eEhqPJgqf
          stance: supports
          locator: CBDB:67601
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67601）
          source: &a1
            id: s_arSTR7rLYJ8X7eEhqPJgqf
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 67601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67601&o=json
            external_identifier: CBDB:67601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_L8M1L9KEmi3QvC85QJp46S
        subject_person_id: p_KbJkuGqFWE5TNp2YNzLaQb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1651年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WdDRCErpw2R2Yd3VY7aCBX
          claim_id: c_L8M1L9KEmi3QvC85QJp46S
          source_id: s_arSTR7rLYJ8X7eEhqPJgqf
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
        id: c_5q8QermyFctfichVpKhqxX
        subject_person_id: p_KbJkuGqFWE5TNp2YNzLaQb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽（卒于1651年），史料所见人物。本项目依据《中国历代人物传记资料库：王璽（CBDB 67601）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ku7ubRzzAyhoZ_oRONWtHq
          claim_id: c_5q8QermyFctfichVpKhqxX
          source_id: s_arSTR7rLYJ8X7eEhqPJgqf
          stance: supports
          locator: CBDB:67601
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

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| death.date | 1651年 | accepted |
| bio.summary | 王璽（卒于1651年），史料所见人物。本项目依据《中国历代人物传记资料库：王璽（CBDB 67601）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璽（CBDB 67601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67601&o=json)
