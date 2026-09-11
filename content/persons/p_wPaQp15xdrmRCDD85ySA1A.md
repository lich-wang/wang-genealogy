---
schema: wang-person/v1
id: p_wPaQp15xdrmRCDD85ySA1A
status: active
merged_into: null
display_name: 王樗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t4GVtCYG27XU6898fh5oNL
        subject_person_id: p_wPaQp15xdrmRCDD85ySA1A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CLt84w1jhJZSYjFDAKD8NS
          claim_id: c_t4GVtCYG27XU6898fh5oNL
          source_id: s_FkChip59pBs9pQEsJTzqCD
          stance: supports
          locator: CBDB:175956
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175956）
          source: &a1
            id: s_FkChip59pBs9pQEsJTzqCD
            source_type: api_record
            title: 中国历代人物传记资料库：王樗（CBDB 175956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175956&o=json
            external_identifier: CBDB:175956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.220Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ncXYP1DBqUhU9AABnLppJW
        subject_person_id: p_wPaQp15xdrmRCDD85ySA1A
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 927年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5e8WeGTQEvLooJq5cQnxrq
          claim_id: c_ncXYP1DBqUhU9AABnLppJW
          source_id: s_FkChip59pBs9pQEsJTzqCD
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
        id: c_um8wZ8DfzC4tbqfRufWV9F
        subject_person_id: p_wPaQp15xdrmRCDD85ySA1A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Bi2QzoMArDncJaXX2rfGf
          claim_id: c_um8wZ8DfzC4tbqfRufWV9F
          source_id: s_FkChip59pBs9pQEsJTzqCD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YhPA3Pcwk64MeShIYs0C75
        subject_person_id: p_KXeybJ73LDv1DLLTr6v2Ev
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wPaQp15xdrmRCDD85ySA1A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vAPLrf0Je-81iD_fhYt9CX
          claim_id: c_YhPA3Pcwk64MeShIYs0C75
          source_id: s_Rg6P3qTXSH7GMSGxrhF1Hx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Rg6P3qTXSH7GMSGxrhF1Hx
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 175954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175954&o=json
            external_identifier: CBDB:175954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.217Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KXeybJ73LDv1DLLTr6v2Ev
        status: active
        display_name: 王徽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王樗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樗 | accepted |
| death.date | 927年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KXeybJ73LDv1DLLTr6v2Ev | 王徽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王樗（CBDB 175956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175956&o=json)
- [中国历代人物传记资料库：王徽（CBDB 175954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175954&o=json)
