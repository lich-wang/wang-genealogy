---
schema: wang-person/v1
id: p_dsdniay6HN8L8kYY9dkiZB
status: active
merged_into: null
display_name: 王縣太君
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PGgAcDDLc2itAhTjFFuA4b
        subject_person_id: p_dsdniay6HN8L8kYY9dkiZB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縣太君
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CLqv8hdj4uF9vYEvvub794
          claim_id: c_PGgAcDDLc2itAhTjFFuA4b
          source_id: s_ZAn2DY5NH7MSyRr6hmkcnC
          stance: supports
          locator: CBDB:5284
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（5284）
          source: &a1
            id: s_ZAn2DY5NH7MSyRr6hmkcnC
            source_type: api_record
            title: 中国历代人物传记资料库：王縣太君（CBDB 5284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5284&o=json
            external_identifier: CBDB:5284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.467Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ttqJSMYBhxrQBdkqBFuLLc
        subject_person_id: p_dsdniay6HN8L8kYY9dkiZB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1025年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L5YnM5DDkfN8pDAgUPy4Q5
          claim_id: c_ttqJSMYBhxrQBdkqBFuLLc
          source_id: s_ZAn2DY5NH7MSyRr6hmkcnC
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
        id: c_VYJ7jK1GBAy8pGDDbhLTPx
        subject_person_id: p_dsdniay6HN8L8kYY9dkiZB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1091年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CywUbDJ2VM4q5FJThzeX1E
          claim_id: c_VYJ7jK1GBAy8pGDDbhLTPx
          source_id: s_ZAn2DY5NH7MSyRr6hmkcnC
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
        id: c_hWkN8ypKo3HYPhNLybZLmc
        subject_person_id: p_dsdniay6HN8L8kYY9dkiZB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zg2PaaHqGVAcLp1bJHpNUx
          claim_id: c_hWkN8ypKo3HYPhNLybZLmc
          source_id: s_ZAn2DY5NH7MSyRr6hmkcnC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_2g8XlIaiWTS16f9Z0mnWya
        subject_person_id: p_dsdniay6HN8L8kYY9dkiZB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_A1HYX86gX11hGSYEDoUD5M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vRO68mO5R4ahPyHu9lFLOK
          claim_id: c_2g8XlIaiWTS16f9Z0mnWya
          source_id: s_a-LfAWG0JfO6S4T6hHL_Z2
          stance: supports
          locator: 宋人傳記資料索引(電子版)，13084;13085：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_a-LfAWG0JfO6S4T6hHL_Z2
            source_type: api_record
            title: 中国历代人物传记资料库：張仲莊（CBDB 17738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17738&o=json
            external_identifier: CBDB:17738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A1HYX86gX11hGSYEDoUD5M
        status: active
        display_name: 張仲莊
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王縣太君

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縣太君 | accepted |
| birth.date | 1025年 | accepted |
| death.date | 1091年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_A1HYX86gX11hGSYEDoUD5M | 張仲莊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王縣太君（CBDB 5284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5284&o=json)
- [中国历代人物传记资料库：張仲莊（CBDB 17738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17738&o=json)
