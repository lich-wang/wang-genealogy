---
schema: wang-person/v1
id: p_f8MvsH6EMmDSJDVxK4dTau
status: active
merged_into: null
display_name: 王汝嘉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HHQY3BGp5KSpHiBaXvZvV6
        subject_person_id: p_f8MvsH6EMmDSJDVxK4dTau
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝嘉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fj684FnbPxNi5BDPaahN1z
          claim_id: c_HHQY3BGp5KSpHiBaXvZvV6
          source_id: s_S7qpiveVygEtpS3QFAJEZC
          stance: supports
          locator: CBDB:35730
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35730）
          source: &a1
            id: s_S7qpiveVygEtpS3QFAJEZC
            source_type: api_record
            title: 中国历代人物传记资料库：王汝嘉（CBDB 35730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35730&o=json
            external_identifier: CBDB:35730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.160Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yufEAhKqMcAbipDcFpBify
        subject_person_id: p_f8MvsH6EMmDSJDVxK4dTau
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝嘉，史料所见人物。本项目依据《中国历代人物传记资料库：王汝嘉（CBDB 35730）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F0L-n7wFuq-WfD2WdCtrTY
          claim_id: c_yufEAhKqMcAbipDcFpBify
          source_id: s_S7qpiveVygEtpS3QFAJEZC
          stance: supports
          locator: CBDB:35730
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王汝嘉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝嘉 | accepted |
| bio.summary | 王汝嘉，史料所见人物。本项目依据《中国历代人物传记资料库：王汝嘉（CBDB 35730）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝嘉（CBDB 35730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35730&o=json)
