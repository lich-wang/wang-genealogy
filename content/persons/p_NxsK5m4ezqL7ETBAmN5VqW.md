---
schema: wang-person/v1
id: p_NxsK5m4ezqL7ETBAmN5VqW
status: active
merged_into: null
display_name: 王應舉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jUFy2xg7rGKLps83VoWQTr
        subject_person_id: p_NxsK5m4ezqL7ETBAmN5VqW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qRhgLDtdiVs4Jwm3QZ9LQE
          claim_id: c_jUFy2xg7rGKLps83VoWQTr
          source_id: s_CgHShFrdemQPm2HWrBsMre
          stance: supports
          locator: CBDB:499584
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（499584）
          source: &a1
            id: s_CgHShFrdemQPm2HWrBsMre
            source_type: api_record
            title: 中国历代人物传记资料库：王應舉（CBDB 499584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499584&o=json
            external_identifier: CBDB:499584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.769Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EWvCegCePyxukU1Fj3qqad
        subject_person_id: p_NxsK5m4ezqL7ETBAmN5VqW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應舉，明人物。曾任典史。（中国历代人物传记资料库 CBDB 499584）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rQBPizzUQIEK-swiwHTHgL
          claim_id: c_EWvCegCePyxukU1Fj3qqad
          source_id: s_CgHShFrdemQPm2HWrBsMre
          stance: supports
          locator: CBDB:499584
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

# 王應舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應舉 | accepted |
| bio.summary | 王應舉，明人物。曾任典史。（中国历代人物传记资料库 CBDB 499584） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應舉（CBDB 499584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499584&o=json)
