---
schema: wang-person/v1
id: p_N6zEFEEgStf5fQ4uCRBUU6
status: active
merged_into: null
display_name: 王方茂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fJmmDim6SBCFKYRwcp7TEp
        subject_person_id: p_N6zEFEEgStf5fQ4uCRBUU6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方茂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3cjE3XMeaTugh3yj9hz1sh
          claim_id: c_fJmmDim6SBCFKYRwcp7TEp
          source_id: s_wzH346Fo8wuaWyruQm3NXk
          stance: supports
          locator: CBDB:175650
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175650）
          source: &a1
            id: s_wzH346Fo8wuaWyruQm3NXk
            source_type: api_record
            title: 中国历代人物传记资料库：王方茂（CBDB 175650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175650&o=json
            external_identifier: CBDB:175650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.045Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_r1QPgdJnTPUXC2V6U51iA9
        subject_person_id: p_N6zEFEEgStf5fQ4uCRBUU6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 625年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GeDcf7v2cJN1Uyn2PR2y4S
          claim_id: c_r1QPgdJnTPUXC2V6U51iA9
          source_id: s_wzH346Fo8wuaWyruQm3NXk
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
        id: c_4UgiboXTaa6vA3c2LNMKpn
        subject_person_id: p_N6zEFEEgStf5fQ4uCRBUU6
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
        - id: cs_P7mBy28QSoExMNn4hxz6vE
          claim_id: c_4UgiboXTaa6vA3c2LNMKpn
          source_id: s_wzH346Fo8wuaWyruQm3NXk
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
        id: c_aHt2vuBu8N-DukH96XF8qU
        subject_person_id: p_yYWP56xYF7YEvgG32tAH3B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N6zEFEEgStf5fQ4uCRBUU6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yX2tJQRML6Z-u46-mFGUgy
          claim_id: c_aHt2vuBu8N-DukH96XF8qU
          source_id: s_wzH346Fo8wuaWyruQm3NXk
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yYWP56xYF7YEvgG32tAH3B
        status: active
        display_name: 王弘訓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王方茂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王方茂 | accepted |
| death.date | 625年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yYWP56xYF7YEvgG32tAH3B | 王弘訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王方茂（CBDB 175650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175650&o=json)
