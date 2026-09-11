---
schema: wang-person/v1
id: p_MnLrRdX6rf9t5n4XUDABDF
status: active
merged_into: null
display_name: 王九言
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fSStDCpkVgC9CzwaHqg3NA
        subject_person_id: p_MnLrRdX6rf9t5n4XUDABDF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NH8uueeF5CWD3veAKt3JmU
          claim_id: c_fSStDCpkVgC9CzwaHqg3NA
          source_id: s_WzJL8PHDSiEMhVGtEw4xF8
          stance: supports
          locator: CBDB:175978
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175978）
          source: &a1
            id: s_WzJL8PHDSiEMhVGtEw4xF8
            source_type: api_record
            title: 中国历代人物传记资料库：王九言（CBDB 175978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175978&o=json
            external_identifier: CBDB:175978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.230Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_bTYMNKK5eo9LmjH45aWoFH
        subject_person_id: p_MnLrRdX6rf9t5n4XUDABDF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 690年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G8r3KFKeFV4M6BtAYYM8w1
          claim_id: c_bTYMNKK5eo9LmjH45aWoFH
          source_id: s_WzJL8PHDSiEMhVGtEw4xF8
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
        id: c_zMbsTznynWcQCgfh4FodwE
        subject_person_id: p_MnLrRdX6rf9t5n4XUDABDF
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
        - id: cs_1dmTrDKaxHk7Cr85q1ZnCS
          claim_id: c_zMbsTznynWcQCgfh4FodwE
          source_id: s_WzJL8PHDSiEMhVGtEw4xF8
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
        id: c_6UqpttX37a--Mp8TLIuOUd
        subject_person_id: p_GsA3E3fpoGBL3KAwr5V6BX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MnLrRdX6rf9t5n4XUDABDF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m3qiT-fUxQKDigHcZXTtas
          claim_id: c_6UqpttX37a--Mp8TLIuOUd
          source_id: s_VkcHAaT9EifPMtdS3BV6Gf
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VkcHAaT9EifPMtdS3BV6Gf
            source_type: api_record
            title: 中国历代人物传记资料库：王德玄（CBDB 175975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175975&o=json
            external_identifier: CBDB:175975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.228Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GsA3E3fpoGBL3KAwr5V6BX
        status: active
        display_name: 王德玄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王九言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九言 | accepted |
| death.date | 690年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GsA3E3fpoGBL3KAwr5V6BX | 王德玄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德玄（CBDB 175975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175975&o=json)
- [中国历代人物传记资料库：王九言（CBDB 175978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175978&o=json)
