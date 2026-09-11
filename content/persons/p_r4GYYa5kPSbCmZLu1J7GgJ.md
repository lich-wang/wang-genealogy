---
schema: wang-person/v1
id: p_r4GYYa5kPSbCmZLu1J7GgJ
status: active
merged_into: null
display_name: 宇文氏
revision: 1
cbdb_id: 145638
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fDa3z6hjeHRumInVfNJBiz
        subject_person_id: p_r4GYYa5kPSbCmZLu1J7GgJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 宇文氏（751—809），唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 145638）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MbV41Z2rrA4g2zAEbbLSPq
          claim_id: c_fDa3z6hjeHRumInVfNJBiz
          source_id: s_YNK2xYnUNJCZZIe9R2K7uC
          stance: supports
          locator: CBDB:145638
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_YNK2xYnUNJCZZIe9R2K7uC
            source_type: api_record
            title: 中国历代人物传记资料库：宇文氏(宇文荃女)（CBDB 145638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145638&o=json
            external_identifier: CBDB:145638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vnindw1i0kQhrmF_bd2lLW
        subject_person_id: p_r4GYYa5kPSbCmZLu1J7GgJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 宇文氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zz6nI0sqGHrlWVtECX3N1i
          claim_id: c_vnindw1i0kQhrmF_bd2lLW
          source_id: s_YNK2xYnUNJCZZIe9R2K7uC
          stance: supports
          locator: CBDB:145638
          quotation: null
          interpretation_note: CBDB 明确记录的王堅配偶
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
        id: c_1tUw1E45QJWiO7MvSwlLIM
        subject_person_id: p_XLANjjKCBK7qVKBrPKgEcS
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_r4GYYa5kPSbCmZLu1J7GgJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NVpdsTKLwWcn2goZ8YrDZX
          claim_id: c_1tUw1E45QJWiO7MvSwlLIM
          source_id: s_YNK2xYnUNJCZZIe9R2K7uC
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XLANjjKCBK7qVKBrPKgEcS
        status: active
        display_name: 王堅
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 宇文氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 宇文氏（751—809），唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 145638） | accepted |
| name.primary | 宇文氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_XLANjjKCBK7qVKBrPKgEcS | 王堅 | accepted |

## 外部来源

- [中国历代人物传记资料库：宇文氏(宇文荃女)（CBDB 145638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145638&o=json)
