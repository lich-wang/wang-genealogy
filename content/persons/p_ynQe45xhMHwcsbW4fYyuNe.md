---
schema: wang-person/v1
id: p_ynQe45xhMHwcsbW4fYyuNe
status: active
merged_into: null
display_name: 王命
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HjDrYA4JexNvzFYzjCNB93
        subject_person_id: p_ynQe45xhMHwcsbW4fYyuNe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UgBUqGGDCJHctgfp1K3wT9
          claim_id: c_HjDrYA4JexNvzFYzjCNB93
          source_id: s_PdAn2b9AhtdzeuR8Sxvi6R
          stance: supports
          locator: CBDB:336760
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336760）
          source: &a1
            id: s_PdAn2b9AhtdzeuR8Sxvi6R
            source_type: api_record
            title: 中国历代人物传记资料库：王命（CBDB 336760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336760&o=json
            external_identifier: CBDB:336760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.501Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TfY1vuodjjnLjVj7YTmszc
        subject_person_id: p_ynQe45xhMHwcsbW4fYyuNe
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
        - id: cs_VQKSazMgXTXXa9bnELs8er
          claim_id: c_TfY1vuodjjnLjVj7YTmszc
          source_id: s_PdAn2b9AhtdzeuR8Sxvi6R
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
        id: c_Wv7sIz6Y4I7KVo959sXB5f
        subject_person_id: p_ynQe45xhMHwcsbW4fYyuNe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PkVHbp7ooYr1QRfwUsQL7L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gB6u4swQ68jYahEzH6c00T
          claim_id: c_Wv7sIz6Y4I7KVo959sXB5f
          source_id: s_PdAn2b9AhtdzeuR8Sxvi6R
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百二十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PkVHbp7ooYr1QRfwUsQL7L
        status: active
        display_name: 王頤
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王命

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王命 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_PkVHbp7ooYr1QRfwUsQL7L | 王頤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王命（CBDB 336760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336760&o=json)
