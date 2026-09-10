---
schema: wang-person/v1
id: p_1PHWxnMBkTahyhe3mpQdE4
status: active
merged_into: null
display_name: 王泰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WWFZuJQLNLU127cZx4ZrJS
        subject_person_id: p_1PHWxnMBkTahyhe3mpQdE4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CZ9hHv7eMsUwPJd7iLheWq
          claim_id: c_WWFZuJQLNLU127cZx4ZrJS
          source_id: s_nyEnxhFMZ6SWCXBCUPDwZG
          stance: supports
          locator: CBDB:190802
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190802）
          source: &a1
            id: s_nyEnxhFMZ6SWCXBCUPDwZG
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 190802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190802&o=json
            external_identifier: CBDB:190802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.339Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YHZNpT3qF1Emfuw9xp3KF1
        subject_person_id: p_1PHWxnMBkTahyhe3mpQdE4
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
        - id: cs_M4SenpAZ9d1DLPAFKsUMCu
          claim_id: c_YHZNpT3qF1Emfuw9xp3KF1
          source_id: s_nyEnxhFMZ6SWCXBCUPDwZG
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
        id: c_5BHYobfQQBpi5t6AFPADDR
        subject_person_id: p_1PHWxnMBkTahyhe3mpQdE4
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
        - id: cs_ZbMPYdzJpoA7T5V4CU2yh9
          claim_id: c_5BHYobfQQBpi5t6AFPADDR
          source_id: s_nyEnxhFMZ6SWCXBCUPDwZG
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
        id: c_8Uab57M6XaQd6DKW6jqfSm
        subject_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1PHWxnMBkTahyhe3mpQdE4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H2b7JDQkfPbqn8W_rrdOlF
          claim_id: c_8Uab57M6XaQd6DKW6jqfSm
          source_id: s_nyEnxhFMZ6SWCXBCUPDwZG
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 29312：父
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

# 王泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰 | accepted |
| death.date | 858年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HeGfMzKQ5r77Gp7MCsAkL6 | 王仲舒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王泰（CBDB 190802）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190802&o=json)
