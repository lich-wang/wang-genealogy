---
schema: wang-person/v1
id: p_kRBB2TPp2HvKtyeTGMaw1D
status: active
merged_into: null
display_name: 王發越
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kZM3pWunfHRA7egkv6MrYd
        subject_person_id: p_kRBB2TPp2HvKtyeTGMaw1D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王發越
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RiT4Uh2SrJHbajNM9Z4nYr
          claim_id: c_kZM3pWunfHRA7egkv6MrYd
          source_id: s_pdX3XTBNmqKRsk3VtbRLsg
          stance: supports
          locator: CBDB:71514
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71514）
          source: &a1
            id: s_pdX3XTBNmqKRsk3VtbRLsg
            source_type: api_record
            title: 中国历代人物传记资料库：王發越（CBDB 71514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71514&o=json
            external_identifier: CBDB:71514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.731Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rjUDjXZLH3AVeqFY83rZRJ
        subject_person_id: p_kRBB2TPp2HvKtyeTGMaw1D
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1794年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FJtdrwhvLiVGnMyoi4XLdH
          claim_id: c_rjUDjXZLH3AVeqFY83rZRJ
          source_id: s_pdX3XTBNmqKRsk3VtbRLsg
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
        id: c_LJuvDGJ5id4dUExcWB72Jk
        subject_person_id: p_kRBB2TPp2HvKtyeTGMaw1D
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1858年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MdShQYLVDygSPmoRAxMzpK
          claim_id: c_LJuvDGJ5id4dUExcWB72Jk
          source_id: s_pdX3XTBNmqKRsk3VtbRLsg
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
        id: c_5Bc7PRgFC17f4S87iaKPHA
        subject_person_id: p_kRBB2TPp2HvKtyeTGMaw1D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VAxRo81rWxeVb4BsNyDAPj
          claim_id: c_5Bc7PRgFC17f4S87iaKPHA
          source_id: s_pdX3XTBNmqKRsk3VtbRLsg
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

# 王發越

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王發越 | accepted |
| birth.date | 1794年 | accepted |
| death.date | 1858年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王發越（CBDB 71514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71514&o=json)
