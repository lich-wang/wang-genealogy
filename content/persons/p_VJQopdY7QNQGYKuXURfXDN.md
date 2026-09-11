---
schema: wang-person/v1
id: p_VJQopdY7QNQGYKuXURfXDN
status: active
merged_into: null
display_name: 王成
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3LFNQCKEwMMtVdMHCGWMJo
        subject_person_id: p_VJQopdY7QNQGYKuXURfXDN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_82xrAdLx7MDXdwNjHVzsDr
          claim_id: c_3LFNQCKEwMMtVdMHCGWMJo
          source_id: s_kAVHW2hxxC3wMci6HBMCKk
          stance: supports
          locator: CBDB:283097
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283097）
          source: &a1
            id: s_kAVHW2hxxC3wMci6HBMCKk
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 283097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283097&o=json
            external_identifier: CBDB:283097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gtHtqN3e8quCSyqvRXSV9s
        subject_person_id: p_VJQopdY7QNQGYKuXURfXDN
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
        - id: cs_pnJ6EjQhuQk9Ev5LZArNwa
          claim_id: c_gtHtqN3e8quCSyqvRXSV9s
          source_id: s_kAVHW2hxxC3wMci6HBMCKk
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
        id: c_3AEjgCYLevwPoA7VA2SbQK
        subject_person_id: p_VJQopdY7QNQGYKuXURfXDN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IpUncYFEauUm8D5Afsn7EC
          claim_id: c_3AEjgCYLevwPoA7VA2SbQK
          source_id: s_kAVHW2hxxC3wMci6HBMCKk
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_La7EdP44YnMK6A7Gvg2W3D
        status: active
        display_name: 王積
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_La7EdP44YnMK6A7Gvg2W3D | 王積 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 283097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283097&o=json)
