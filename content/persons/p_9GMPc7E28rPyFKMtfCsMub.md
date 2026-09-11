---
schema: wang-person/v1
id: p_9GMPc7E28rPyFKMtfCsMub
status: active
merged_into: null
display_name: 王松
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Chw7HQ8dkeD6RhqhRB7vQ6
        subject_person_id: p_9GMPc7E28rPyFKMtfCsMub
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cpGk7eb7psKX29EfyAavuQ
          claim_id: c_Chw7HQ8dkeD6RhqhRB7vQ6
          source_id: s_PSEmY3uVD4cStAEDZ36TNY
          stance: supports
          locator: CBDB:504696
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（504696）
          source: &a1
            id: s_PSEmY3uVD4cStAEDZ36TNY
            source_type: api_record
            title: 中国历代人物传记资料库：王松（CBDB 504696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=504696&o=json
            external_identifier: CBDB:504696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.946Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_47oKh32nRfoSpVNwUdSQYR
        subject_person_id: p_9GMPc7E28rPyFKMtfCsMub
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松，明人物。曾任典史。（中国历代人物传记资料库 CBDB 504696）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sEAVoSVJ37Y9Xin4lvzTlM
          claim_id: c_47oKh32nRfoSpVNwUdSQYR
          source_id: s_PSEmY3uVD4cStAEDZ36TNY
          stance: supports
          locator: CBDB:504696
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

# 王松

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王松 | accepted |
| bio.summary | 王松，明人物。曾任典史。（中国历代人物传记资料库 CBDB 504696） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王松（CBDB 504696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=504696&o=json)
