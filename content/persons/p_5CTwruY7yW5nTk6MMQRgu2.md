---
schema: wang-person/v1
id: p_5CTwruY7yW5nTk6MMQRgu2
status: active
merged_into: null
display_name: 王秘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xA2angH3ZytjSXdSCTQDSi
        subject_person_id: p_5CTwruY7yW5nTk6MMQRgu2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秘
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RiVTNULB4n2593C2m2c4Jc
          claim_id: c_xA2angH3ZytjSXdSCTQDSi
          source_id: s_PkErSKEdFmSqE2SS4nrGxJ
          stance: supports
          locator: CBDB:192092
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192092）
          source: &a1
            id: s_PkErSKEdFmSqE2SS4nrGxJ
            source_type: api_record
            title: 中国历代人物传记资料库：王秘（CBDB 192092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192092&o=json
            external_identifier: CBDB:192092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.388Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_tVxJuiHMky2YkvNQm16eKx
        subject_person_id: p_5CTwruY7yW5nTk6MMQRgu2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 803年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TxGx6vFMNZ3NM7Vq2H7JVn
          claim_id: c_tVxJuiHMky2YkvNQm16eKx
          source_id: s_PkErSKEdFmSqE2SS4nrGxJ
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
        id: c_w8yFJnKTvMBVn4viXL866C
        subject_person_id: p_5CTwruY7yW5nTk6MMQRgu2
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
        - id: cs_cdHzpf6iWJEvSNQyrnBvaA
          claim_id: c_w8yFJnKTvMBVn4viXL866C
          source_id: s_PkErSKEdFmSqE2SS4nrGxJ
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

# 王秘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秘 | accepted |
| death.date | 803年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秘（CBDB 192092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192092&o=json)
