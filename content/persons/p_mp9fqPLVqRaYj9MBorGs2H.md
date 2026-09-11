---
schema: wang-person/v1
id: p_mp9fqPLVqRaYj9MBorGs2H
status: active
merged_into: null
display_name: 王炎澤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_snPDyHVzzziF2oS6DAVcby
        subject_person_id: p_mp9fqPLVqRaYj9MBorGs2H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炎澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FvmUgh29GA9WCS9cq6X4xE
          claim_id: c_snPDyHVzzziF2oS6DAVcby
          source_id: s_uzCPGMUpAMX6b1wjW5hE99
          stance: supports
          locator: CBDB:10724
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10724）
          source: &a1
            id: s_uzCPGMUpAMX6b1wjW5hE99
            source_type: api_record
            title: 中国历代人物传记资料库：王炎澤（CBDB 10724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10724&o=json
            external_identifier: CBDB:10724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_a5HsNALJydkqrn5qkBG4F2
        subject_person_id: p_mp9fqPLVqRaYj9MBorGs2H
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1253年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ihCLwg9BD1KVNwTSm118NJ
          claim_id: c_a5HsNALJydkqrn5qkBG4F2
          source_id: s_uzCPGMUpAMX6b1wjW5hE99
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
        id: c_sLNXq5HMPQ2jbHj4zb6Ftr
        subject_person_id: p_mp9fqPLVqRaYj9MBorGs2H
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1332年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GSjsg1weuWbCVFaWcchNvG
          claim_id: c_sLNXq5HMPQ2jbHj4zb6Ftr
          source_id: s_uzCPGMUpAMX6b1wjW5hE99
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
        id: c_Mats8XLPfzZ6H7i9Ush4Vn
        subject_person_id: p_mp9fqPLVqRaYj9MBorGs2H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eCTjHmHDruoXwNvTGxCcn3
          claim_id: c_Mats8XLPfzZ6H7i9Ush4Vn
          source_id: s_uzCPGMUpAMX6b1wjW5hE99
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
  descendants:
    - claim:
        id: c_aJyF2i3w22xS1WeXUmR8qI
        subject_person_id: p_mp9fqPLVqRaYj9MBorGs2H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NxhVtsQFEKS3B7HARgTqxM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yxCdVWc9K0RZRCfEdVfdaa
          claim_id: c_aJyF2i3w22xS1WeXUmR8qI
          source_id: s_uzCPGMUpAMX6b1wjW5hE99
          stance: supports
          locator: 元人傳記資料索引，773：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NxhVtsQFEKS3B7HARgTqxM
        status: active
        display_name: 王褘
        merged_into_person_id: null
  other: []
---

# 王炎澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炎澤 | accepted |
| birth.date | 1253年 | accepted |
| death.date | 1332年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_NxhVtsQFEKS3B7HARgTqxM | 王褘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王炎澤（CBDB 10724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10724&o=json)
