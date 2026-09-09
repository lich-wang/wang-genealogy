---
schema: wang-person/v1
id: p_BDS4TbTFZhcBaJhksQ7i7v
status: active
merged_into: null
display_name: 王弘效
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4BJY99ESt25Q9rdMEPg8G2
        subject_person_id: p_BDS4TbTFZhcBaJhksQ7i7v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘效
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1SzwFbPqyBRKkdPEFUxz6x
          claim_id: c_4BJY99ESt25Q9rdMEPg8G2
          source_id: s_72vbHX3h4b4vBiPhHGxSyi
          stance: supports
          locator: CBDB:194718
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（194718）
          source: &a1
            id: s_72vbHX3h4b4vBiPhHGxSyi
            source_type: api_record
            title: 中国历代人物传记资料库：王弘效（CBDB 194718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194718&o=json
            external_identifier: CBDB:194718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.297Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jizwECLmYErZCPTG1YD7Jy
        subject_person_id: p_BDS4TbTFZhcBaJhksQ7i7v
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 700年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cWfDHekqFYUDprqJyXCHbK
          claim_id: c_jizwECLmYErZCPTG1YD7Jy
          source_id: s_72vbHX3h4b4vBiPhHGxSyi
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
        id: c_UHMpzoXoH1NjEZ7ZhP86Ak
        subject_person_id: p_BDS4TbTFZhcBaJhksQ7i7v
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
        - id: cs_ePYhVCDwtWGo9oZSAuJeZD
          claim_id: c_UHMpzoXoH1NjEZ7ZhP86Ak
          source_id: s_72vbHX3h4b4vBiPhHGxSyi
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
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弘效

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘效 | accepted |
| death.date | 700年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弘效（CBDB 194718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194718&o=json)
