---
schema: wang-person/v1
id: p_tPmTeHviKcMCaYDJEonWx3
status: active
merged_into: null
display_name: 王業清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L1jvuW8N1vJBJzp3VK4LyM
        subject_person_id: p_tPmTeHviKcMCaYDJEonWx3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QcW7k1tDKsY7kb23u6DTCK
          claim_id: c_L1jvuW8N1vJBJzp3VK4LyM
          source_id: s_DV764EHRCuRFWQRXCgR8YV
          stance: supports
          locator: CBDB:638774
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638774）
          source: &a1
            id: s_DV764EHRCuRFWQRXCgR8YV
            source_type: api_record
            title: 中国历代人物传记资料库：王業清（CBDB 638774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638774&o=json
            external_identifier: CBDB:638774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.742Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K8zcSXRRhUFY8EgixgD7rm
        subject_person_id: p_tPmTeHviKcMCaYDJEonWx3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業清，清人物。籍贯吳縣，入仕軍功補授(軍功)，曾任都司。（中国历代人物传记资料库 CBDB 638774）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_leOjuXxerAz1dVGVUF7F3_
          claim_id: c_K8zcSXRRhUFY8EgixgD7rm
          source_id: s_DV764EHRCuRFWQRXCgR8YV
          stance: supports
          locator: CBDB:638774
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

# 王業清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王業清 | accepted |
| bio.summary | 王業清，清人物。籍贯吳縣，入仕軍功補授(軍功)，曾任都司。（中国历代人物传记资料库 CBDB 638774） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王業清（CBDB 638774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638774&o=json)
