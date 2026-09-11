---
schema: wang-person/v1
id: p_thiF1H5Z24YJrMKyh67X2Q
status: active
merged_into: null
display_name: 王寶
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7rBUfBFisabYS43MniWCXs
        subject_person_id: p_thiF1H5Z24YJrMKyh67X2Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UAh3uKua6MxcPL2dHnCG3n
          claim_id: c_7rBUfBFisabYS43MniWCXs
          source_id: s_Jty3rbjtsWBdp7dXG61vp5
          stance: supports
          locator: CBDB:185730
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（185730）
          source: &a1
            id: s_Jty3rbjtsWBdp7dXG61vp5
            source_type: api_record
            title: 中国历代人物传记资料库：王寶（CBDB 185730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185730&o=json
            external_identifier: CBDB:185730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.249Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_zSogJpfkAZxM1fJUCM7cFN
        subject_person_id: p_thiF1H5Z24YJrMKyh67X2Q
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 830年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kL5CKF8nSeu1FxeD2xiURs
          claim_id: c_zSogJpfkAZxM1fJUCM7cFN
          source_id: s_Jty3rbjtsWBdp7dXG61vp5
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
        id: c_MX3kKQ4sueFZcNoGwLizkE
        subject_person_id: p_thiF1H5Z24YJrMKyh67X2Q
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
        - id: cs_GFR1urEEHX8dxv2CXmCXyM
          claim_id: c_MX3kKQ4sueFZcNoGwLizkE
          source_id: s_Jty3rbjtsWBdp7dXG61vp5
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
        id: c_1LLcccg4Pxyr1yE3Qnjmyw
        subject_person_id: p_AGf77oH1g2Km2abJyQmNEP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_thiF1H5Z24YJrMKyh67X2Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i5Op5ItTQap_Vrws8Czwcz
          claim_id: c_1LLcccg4Pxyr1yE3Qnjmyw
          source_id: s_Kz9fdZJB9V8XVMspsYaBa7
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Kz9fdZJB9V8XVMspsYaBa7
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 185914）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185914&o=json
            external_identifier: CBDB:185914
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AGf77oH1g2Km2abJyQmNEP
        status: active
        display_name: 王清
        merged_into_person_id: null
  children:
    - claim:
        id: c_MKUWdBWq_YKPpjLYZ8LAeb
        subject_person_id: p_thiF1H5Z24YJrMKyh67X2Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5r67yH2LpW1quL5wgmewEu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w6rfeRCiQsAiocDl56CqY7
          claim_id: c_MKUWdBWq_YKPpjLYZ8LAeb
          source_id: s_JGG6WmjpB6jac3DKfHvtA4
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JGG6WmjpB6jac3DKfHvtA4
            source_type: api_record
            title: 中国历代人物传记资料库：王廉（CBDB 186094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186094&o=json
            external_identifier: CBDB:186094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5r67yH2LpW1quL5wgmewEu
        status: active
        display_name: 王廉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶 | accepted |
| death.date | 830年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AGf77oH1g2Km2abJyQmNEP | 王清 | accepted |
| children | p_5r67yH2LpW1quL5wgmewEu | 王廉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寶（CBDB 185730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185730&o=json)
- [中国历代人物传记资料库：王廉（CBDB 186094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186094&o=json)
- [中国历代人物传记资料库：王清（CBDB 185914）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185914&o=json)
