---
schema: wang-person/v1
id: p_q7Ny27rcHT6udA8FYaJNCV
status: active
merged_into: null
display_name: 王璠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_76h5FdoNzdQ9EMmyAH1esZ
        subject_person_id: p_q7Ny27rcHT6udA8FYaJNCV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2jgQPrMPGFCiBDUhFX74XL
          claim_id: c_76h5FdoNzdQ9EMmyAH1esZ
          source_id: s_AmNFKJr64wTM3kPZdmLFJ5
          stance: supports
          locator: CBDB:126825
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126825）
          source: &a1
            id: s_AmNFKJr64wTM3kPZdmLFJ5
            source_type: api_record
            title: 中国历代人物传记资料库：王璠（CBDB 126825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126825&o=json
            external_identifier: CBDB:126825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.234Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_otQFH5BAHLJDuMGHANz3zf
        subject_person_id: p_q7Ny27rcHT6udA8FYaJNCV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1457年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vatPH7fUGhTGsQKVPrQoFG
          claim_id: c_otQFH5BAHLJDuMGHANz3zf
          source_id: s_AmNFKJr64wTM3kPZdmLFJ5
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
        id: c_394JujfGLhKxBU23pRKEf4
        subject_person_id: p_q7Ny27rcHT6udA8FYaJNCV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1509年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f97BZJhLDu9ZLfG4XaJASP
          claim_id: c_394JujfGLhKxBU23pRKEf4
          source_id: s_AmNFKJr64wTM3kPZdmLFJ5
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
        id: c_DG1NM5bGZVsLwsRKo7mxai
        subject_person_id: p_q7Ny27rcHT6udA8FYaJNCV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠（1457年—1509年），明人物。籍贯鞏昌府。（中国历代人物传记资料库 CBDB 126825）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a96ku1g0onz7h1hZag8blZ
          claim_id: c_DG1NM5bGZVsLwsRKo7mxai
          source_id: s_AmNFKJr64wTM3kPZdmLFJ5
          stance: supports
          locator: CBDB:126825
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璠 | accepted |
| birth.date | 1457年 | accepted |
| death.date | 1509年 | accepted |
| bio.summary | 王璠（1457年—1509年），明人物。籍贯鞏昌府。（中国历代人物传记资料库 CBDB 126825） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璠（CBDB 126825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126825&o=json)
