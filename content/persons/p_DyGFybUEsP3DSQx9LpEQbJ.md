---
schema: wang-person/v1
id: p_DyGFybUEsP3DSQx9LpEQbJ
status: active
merged_into: null
display_name: 王儀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qJ48U2PfU6VxNiabH75z2f
        subject_person_id: p_DyGFybUEsP3DSQx9LpEQbJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z5H159AtL1Sq5WFSKU4C6E
          claim_id: c_qJ48U2PfU6VxNiabH75z2f
          source_id: s_LD27sGPXnG3XgU3ztXd7pg
          stance: supports
          locator: CBDB:186375
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186375）
          source: &a1
            id: s_LD27sGPXnG3XgU3ztXd7pg
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 186375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186375&o=json
            external_identifier: CBDB:186375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2JFSB8tpF8m2KwNL6smWLX
        subject_person_id: p_DyGFybUEsP3DSQx9LpEQbJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 849年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6y4RE81sUD9GFp3FMdTvJX
          claim_id: c_2JFSB8tpF8m2KwNL6smWLX
          source_id: s_LD27sGPXnG3XgU3ztXd7pg
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
        id: c_ceKy6mTPFVvEYmJDEAJajA
        subject_person_id: p_DyGFybUEsP3DSQx9LpEQbJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儀（卒于849年），史料所见人物。本项目依据《中国历代人物传记资料库：王儀（CBDB 186375）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jBwRhsOFMykTOtdcVt_yYh
          claim_id: c_ceKy6mTPFVvEYmJDEAJajA
          source_id: s_LD27sGPXnG3XgU3ztXd7pg
          stance: supports
          locator: CBDB:186375
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

# 王儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儀 | accepted |
| death.date | 849年 | accepted |
| bio.summary | 王儀（卒于849年），史料所见人物。本项目依据《中国历代人物传记资料库：王儀（CBDB 186375）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儀（CBDB 186375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186375&o=json)
