---
schema: wang-person/v1
id: p_d2YL1ZvftSmBrN7Qjcf7hv
status: active
merged_into: null
display_name: 王敬承
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xVB3QJZocFmax2Drih7FA6
        subject_person_id: p_d2YL1ZvftSmBrN7Qjcf7hv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬承
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wH5zgFDUFUMuq2S3BDVSso
          claim_id: c_xVB3QJZocFmax2Drih7FA6
          source_id: s_UCBJt2SDhXfLZtMqePq6w6
          stance: supports
          locator: CBDB:638194
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638194）
          source: &a1
            id: s_UCBJt2SDhXfLZtMqePq6w6
            source_type: api_record
            title: 中国历代人物传记资料库：王敬承（CBDB 638194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638194&o=json
            external_identifier: CBDB:638194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nBDDxf7DXXho67NTGcbUAx
        subject_person_id: p_d2YL1ZvftSmBrN7Qjcf7hv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王敬承，清人物。籍贯鞏昌府，入仕貢生: 副貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 638194）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c_tAGhdes3HwjzouN3Ymt_
          claim_id: c_nBDDxf7DXXho67NTGcbUAx
          source_id: s_UCBJt2SDhXfLZtMqePq6w6
          stance: supports
          locator: CBDB:638194
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

# 王敬承

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬承 | accepted |
| bio.summary | 王敬承，清人物。籍贯鞏昌府，入仕貢生: 副貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 638194） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬承（CBDB 638194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638194&o=json)
