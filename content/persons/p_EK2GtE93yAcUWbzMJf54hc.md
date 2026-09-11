---
schema: wang-person/v1
id: p_EK2GtE93yAcUWbzMJf54hc
status: active
merged_into: null
display_name: 王世楨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1EmeB9etLozFkaFaATgLw5
        subject_person_id: p_EK2GtE93yAcUWbzMJf54hc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qdz6mBjgCaBVvwU12PfFEb
          claim_id: c_1EmeB9etLozFkaFaATgLw5
          source_id: s_xDp6H8Po9D9V28Q9Cg93v9
          stance: supports
          locator: CBDB:71466
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71466）
          source: &a1
            id: s_xDp6H8Po9D9V28Q9Cg93v9
            source_type: api_record
            title: 中国历代人物传记资料库：王世楨（CBDB 71466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71466&o=json
            external_identifier: CBDB:71466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.696Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gBwHAHjRrd3SoCKPCHeHET
        subject_person_id: p_EK2GtE93yAcUWbzMJf54hc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1626年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Wjv1N7aYxBt9oFSJdP8Pt
          claim_id: c_gBwHAHjRrd3SoCKPCHeHET
          source_id: s_xDp6H8Po9D9V28Q9Cg93v9
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
        id: c_XwCnmPSdzJBGufqDMgm73L
        subject_person_id: p_EK2GtE93yAcUWbzMJf54hc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1693年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JnF4t4ntDNeG5Bs559e9oK
          claim_id: c_XwCnmPSdzJBGufqDMgm73L
          source_id: s_xDp6H8Po9D9V28Q9Cg93v9
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
        id: c_67g41vupYn2gesLExeLDQB
        subject_person_id: p_EK2GtE93yAcUWbzMJf54hc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世楨（1626年—1693年），清人物。籍贯無錫。（中国历代人物传记资料库 CBDB 71466）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ayMcPL_BxoCKeHEMEbPbYA
          claim_id: c_67g41vupYn2gesLExeLDQB
          source_id: s_xDp6H8Po9D9V28Q9Cg93v9
          stance: supports
          locator: CBDB:71466
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

# 王世楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世楨 | accepted |
| birth.date | 1626年 | accepted |
| death.date | 1693年 | accepted |
| bio.summary | 王世楨（1626年—1693年），清人物。籍贯無錫。（中国历代人物传记资料库 CBDB 71466） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世楨（CBDB 71466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71466&o=json)
