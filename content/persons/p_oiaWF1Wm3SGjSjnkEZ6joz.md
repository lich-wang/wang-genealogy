---
schema: wang-person/v1
id: p_oiaWF1Wm3SGjSjnkEZ6joz
status: active
merged_into: null
display_name: 王復
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Z4AHce6NJjY9mN4JxepZu
        subject_person_id: p_oiaWF1Wm3SGjSjnkEZ6joz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CAKZ7yoLMfAp7XqxWZnZ1P
          claim_id: c_1Z4AHce6NJjY9mN4JxepZu
          source_id: s_ZEtaPXBPp9Lm67PqMGtovm
          stance: supports
          locator: CBDB:190803
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190803）
          source: &a1
            id: s_ZEtaPXBPp9Lm67PqMGtovm
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 190803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190803&o=json
            external_identifier: CBDB:190803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.340Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GzMxxwGCNn1vMnnXoyP5EA
        subject_person_id: p_oiaWF1Wm3SGjSjnkEZ6joz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 858年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DvLfpiLMwvnKfeKXcgLWK6
          claim_id: c_GzMxxwGCNn1vMnnXoyP5EA
          source_id: s_ZEtaPXBPp9Lm67PqMGtovm
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
        id: c_LDhFCw3DV2SLSNfedD3Zi3
        subject_person_id: p_oiaWF1Wm3SGjSjnkEZ6joz
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
        - id: cs_DKY4rxBUa7SskPauNhQJGH
          claim_id: c_LDhFCw3DV2SLSNfedD3Zi3
          source_id: s_ZEtaPXBPp9Lm67PqMGtovm
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
        id: c_0_wo5gwYGBfIhtHS-L6rtr
        subject_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oiaWF1Wm3SGjSjnkEZ6joz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W_WIA63FJPLPgy1kLgynmc
          claim_id: c_0_wo5gwYGBfIhtHS-L6rtr
          source_id: s_ZEtaPXBPp9Lm67PqMGtovm
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HeGfMzKQ5r77Gp7MCsAkL6
        status: active
        display_name: 王仲舒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復 | accepted |
| death.date | 858年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HeGfMzKQ5r77Gp7MCsAkL6 | 王仲舒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王復（CBDB 190803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190803&o=json)
