---
schema: wang-person/v1
id: p_nrgvXCkYedEAAAukDFwR1j
status: active
merged_into: null
display_name: 王三錫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QKB8JytsMaMxgZbshWN9Fd
        subject_person_id: p_nrgvXCkYedEAAAukDFwR1j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_18BD2cMBcSwEo2SNWbhDPD
          claim_id: c_QKB8JytsMaMxgZbshWN9Fd
          source_id: s_hLRwkutCkncJbEnwgC7yQu
          stance: supports
          locator: CBDB:223208
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（223208）
          source: &a1
            id: s_hLRwkutCkncJbEnwgC7yQu
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 223208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223208&o=json
            external_identifier: CBDB:223208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.406Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cHRhV33P9LFA9Xn3J8LxqJ
        subject_person_id: p_nrgvXCkYedEAAAukDFwR1j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iBY7wmw3uJpyC53JgfVNgw
          claim_id: c_cHRhV33P9LFA9Xn3J8LxqJ
          source_id: s_hLRwkutCkncJbEnwgC7yQu
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
        id: c_QUSz47y_VfgIxi0orJ5SEm
        subject_person_id: p_nrgvXCkYedEAAAukDFwR1j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7J92XTKdKB1ZCqpjcGmNN6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2DW_wl348YffCg68rb6vxP
          claim_id: c_QUSz47y_VfgIxi0orJ5SEm
          source_id: s_hLRwkutCkncJbEnwgC7yQu
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第三十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7J92XTKdKB1ZCqpjcGmNN6
        status: active
        display_name: 王道顯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王三錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三錫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7J92XTKdKB1ZCqpjcGmNN6 | 王道顯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三錫（CBDB 223208）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223208&o=json)
