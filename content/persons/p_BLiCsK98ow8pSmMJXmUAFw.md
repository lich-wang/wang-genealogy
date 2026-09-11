---
schema: wang-person/v1
id: p_BLiCsK98ow8pSmMJXmUAFw
status: active
merged_into: null
display_name: 王達
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B4dgSQKEMBqgDXK7ZF4agi
        subject_person_id: p_BLiCsK98ow8pSmMJXmUAFw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7sqAcCbR17Beg5C3j6jhb5
          claim_id: c_B4dgSQKEMBqgDXK7ZF4agi
          source_id: s_vdDXf2fL9omywm9X9f8N8p
          stance: supports
          locator: CBDB:342746
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342746）
          source: &a1
            id: s_vdDXf2fL9omywm9X9f8N8p
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 342746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342746&o=json
            external_identifier: CBDB:342746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K5dMdUEKrbTjNsoDpiHgZi
        subject_person_id: p_BLiCsK98ow8pSmMJXmUAFw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達，明人物。明清進士進士，籍贯絳州，入仕進士。（中国历代人物传记资料库 CBDB 342746）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cfI_rxhlzP9JulyvMQsRz7
          claim_id: c_K5dMdUEKrbTjNsoDpiHgZi
          source_id: s_vdDXf2fL9omywm9X9f8N8p
          stance: supports
          locator: CBDB:342746
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

# 王達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王達 | accepted |
| bio.summary | 王達，明人物。明清進士進士，籍贯絳州，入仕進士。（中国历代人物传记资料库 CBDB 342746） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 342746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342746&o=json)
