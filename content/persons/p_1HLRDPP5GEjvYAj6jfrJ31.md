---
schema: wang-person/v1
id: p_1HLRDPP5GEjvYAj6jfrJ31
status: merged
merged_into: p_6BymFd7sw6j7GAmg7erqPj
display_name: 王智興
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P5V8BRHV53X5qJSVXSphT6
        subject_person_id: p_1HLRDPP5GEjvYAj6jfrJ31
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ypPJk2N8jRAiZJJuqQ2cEc
          claim_id: c_P5V8BRHV53X5qJSVXSphT6
          source_id: s_JMh7LD5fhnyT5XkRyPPbDx
          stance: supports
          locator: CBDB:184939
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（184939）
          source: &a1
            id: s_JMh7LD5fhnyT5XkRyPPbDx
            source_type: api_record
            title: 中国历代人物传记资料库：王智興（CBDB 184939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184939&o=json
            external_identifier: CBDB:184939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.233Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1UwcDPQukDBunvkivD2tMY
        subject_person_id: p_1HLRDPP5GEjvYAj6jfrJ31
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 757年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RPag6EHQfvo4fUK1i6E7gw
          claim_id: c_1UwcDPQukDBunvkivD2tMY
          source_id: s_JMh7LD5fhnyT5XkRyPPbDx
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
        id: c_Bdq5J6QSsCyJau7LE6HKks
        subject_person_id: p_1HLRDPP5GEjvYAj6jfrJ31
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 836年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NZvYcuevy2io2PHrtWXLvi
          claim_id: c_Bdq5J6QSsCyJau7LE6HKks
          source_id: s_JMh7LD5fhnyT5XkRyPPbDx
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
        id: c_Vis2t9oh5u1LurMGGzEjkk
        subject_person_id: p_1HLRDPP5GEjvYAj6jfrJ31
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
        - id: cs_vb8gN4sE4agbb8ihx8z1jz
          claim_id: c_Vis2t9oh5u1LurMGGzEjkk
          source_id: s_JMh7LD5fhnyT5XkRyPPbDx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_CD7lsOXb4RJjAl-9R-Ll3A
        subject_person_id: p_1HLRDPP5GEjvYAj6jfrJ31
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NFQFQxzo2TzfSa8GFRgZBu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1XkSpu28hzxx_J-Jc3P-j8
          claim_id: c_CD7lsOXb4RJjAl-9R-Ll3A
          source_id: s_QAkFsA6T3CMGyKCZronZDy
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QAkFsA6T3CMGyKCZronZDy
            source_type: api_record
            title: 中国历代人物传记资料库：王晏平（CBDB 184940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184940&o=json
            external_identifier: CBDB:184940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.235Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NFQFQxzo2TzfSa8GFRgZBu
        status: active
        display_name: 王晏平
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王智興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王智興 | accepted |
| birth.date | 757年 | accepted |
| death.date | 836年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NFQFQxzo2TzfSa8GFRgZBu | 王晏平 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晏平（CBDB 184940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184940&o=json)
- [中国历代人物传记资料库：王智興（CBDB 184939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184939&o=json)
