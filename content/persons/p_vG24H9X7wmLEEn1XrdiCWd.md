---
schema: wang-person/v1
id: p_vG24H9X7wmLEEn1XrdiCWd
status: active
merged_into: null
display_name: 王戩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MU5Ry2gDoBGefhcp2JSUVk
        subject_person_id: p_vG24H9X7wmLEEn1XrdiCWd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王戩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TCMajc4iZGeHkc7kCP5uJu
          claim_id: c_MU5Ry2gDoBGefhcp2JSUVk
          source_id: s_KxxE8gnbM9JDzLQU7XkHZe
          stance: supports
          locator: CBDB:169453
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169453）
          source: &a1
            id: s_KxxE8gnbM9JDzLQU7XkHZe
            source_type: api_record
            title: 中国历代人物传记资料库：王戩（CBDB 169453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169453&o=json
            external_identifier: CBDB:169453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.017Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_W693pbuzAmcEzvMqLCJ2Er
        subject_person_id: p_vG24H9X7wmLEEn1XrdiCWd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 802年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ycUJ1LUGtBf1y6PaK2MMrt
          claim_id: c_W693pbuzAmcEzvMqLCJ2Er
          source_id: s_KxxE8gnbM9JDzLQU7XkHZe
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
        id: c_zbZNrfLMnCwFN51oSBnwME
        subject_person_id: p_vG24H9X7wmLEEn1XrdiCWd
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
        - id: cs_cPMppZN1ZeKn13UL8pK4C8
          claim_id: c_zbZNrfLMnCwFN51oSBnwME
          source_id: s_KxxE8gnbM9JDzLQU7XkHZe
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
        id: c_34lRrnIRRY1q5tMms6ZQdM
        subject_person_id: p_vG24H9X7wmLEEn1XrdiCWd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_65g8o6f3iNCjHS9Q5ojrP4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YSEPlmB4Zvb87dXD8f6VEs
          claim_id: c_34lRrnIRRY1q5tMms6ZQdM
          source_id: s_CH5cyGnFWoErX6LHxt9G4U
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CH5cyGnFWoErX6LHxt9G4U
            source_type: api_record
            title: 中国历代人物传记资料库：王公淑（CBDB 144996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144996&o=json
            external_identifier: CBDB:144996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_65g8o6f3iNCjHS9Q5ojrP4
        status: active
        display_name: 王公淑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王戩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王戩 | accepted |
| death.date | 802年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_65g8o6f3iNCjHS9Q5ojrP4 | 王公淑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公淑（CBDB 144996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144996&o=json)
- [中国历代人物传记资料库：王戩（CBDB 169453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169453&o=json)
