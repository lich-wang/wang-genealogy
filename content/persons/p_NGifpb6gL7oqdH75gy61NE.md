---
schema: wang-person/v1
id: p_NGifpb6gL7oqdH75gy61NE
status: active
merged_into: null
display_name: 王世傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hgUYAb1y4RrhfsXEDFp48g
        subject_person_id: p_NGifpb6gL7oqdH75gy61NE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rh182wiVhm822ngs1NG8Ho
          claim_id: c_hgUYAb1y4RrhfsXEDFp48g
          source_id: s_vuCjbAhcRAS7EWGA3e6XUU
          stance: supports
          locator: CBDB:238354
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（238354）
          source: &a1
            id: s_vuCjbAhcRAS7EWGA3e6XUU
            source_type: api_record
            title: 中国历代人物传记资料库：王世傑（CBDB 238354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238354&o=json
            external_identifier: CBDB:238354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gJ3CfsovaQEDrCaLBe1XWX
        subject_person_id: p_NGifpb6gL7oqdH75gy61NE
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
        - id: cs_FFPGkULTxM47m2KJJJyKEj
          claim_id: c_gJ3CfsovaQEDrCaLBe1XWX
          source_id: s_vuCjbAhcRAS7EWGA3e6XUU
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

# 王世傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世傑 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世傑（CBDB 238354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238354&o=json)
