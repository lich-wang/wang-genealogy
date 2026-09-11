---
schema: wang-person/v1
id: p_ZVDqNVJyMhTryQ7uBE6qXM
status: active
merged_into: null
display_name: 王承業
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MDFzaeMiipFwn9xWVgDy8x
        subject_person_id: p_ZVDqNVJyMhTryQ7uBE6qXM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MGT3rPBBjWPdjQk1E54kMh
          claim_id: c_MDFzaeMiipFwn9xWVgDy8x
          source_id: s_HVSKAuTngNPjnJDL8B5zsq
          stance: supports
          locator: CBDB:69245
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69245）
          source: &a1
            id: s_HVSKAuTngNPjnJDL8B5zsq
            source_type: api_record
            title: 中国历代人物传记资料库：王承業（CBDB 69245）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69245&o=json
            external_identifier: CBDB:69245
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.171Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jdXtVs4ydSaSrcRjwy7M6V
        subject_person_id: p_ZVDqNVJyMhTryQ7uBE6qXM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1680年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hjwEuBVMG3LqPWHJHNLv5i
          claim_id: c_jdXtVs4ydSaSrcRjwy7M6V
          source_id: s_HVSKAuTngNPjnJDL8B5zsq
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
        id: c_uFrguDpsaoHPBj1HvcM9VB
        subject_person_id: p_ZVDqNVJyMhTryQ7uBE6qXM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承業（卒于1680年），清人物。籍贯廬江，曾任營總兵官、主簿。（中国历代人物传记资料库 CBDB 69245）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JLmt7X4EJkLvfXh6S0suLo
          claim_id: c_uFrguDpsaoHPBj1HvcM9VB
          source_id: s_HVSKAuTngNPjnJDL8B5zsq
          stance: supports
          locator: CBDB:69245
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

# 王承業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承業 | accepted |
| death.date | 1680年 | accepted |
| bio.summary | 王承業（卒于1680年），清人物。籍贯廬江，曾任營總兵官、主簿。（中国历代人物传记资料库 CBDB 69245） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承業（CBDB 69245）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69245&o=json)
