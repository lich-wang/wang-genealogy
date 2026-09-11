---
schema: wang-person/v1
id: p_57bmMkPNTLujinASpm1vfU
status: active
merged_into: null
display_name: 王宗哲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bx3huKG23EkLxoSys4Mdmd
        subject_person_id: p_57bmMkPNTLujinASpm1vfU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FNZJMHw4Qq4RDWK8ESDeyp
          claim_id: c_bx3huKG23EkLxoSys4Mdmd
          source_id: s_HUWLVDGkGD3U5dxVRcm4FP
          stance: supports
          locator: CBDB:37653
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37653）
          source: &a1
            id: s_HUWLVDGkGD3U5dxVRcm4FP
            source_type: api_record
            title: 中国历代人物传记资料库：王宗哲（CBDB 37653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37653&o=json
            external_identifier: CBDB:37653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sHfo3LhCk1giULLPpJYzXA
        subject_person_id: p_57bmMkPNTLujinASpm1vfU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗哲，宋人物。籍贯長汀，入仕進士，曾任禮儀院、司理參軍、縣令。（中国历代人物传记资料库 CBDB 37653）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fF3T_X2hK9II_XGz5ZtWIi
          claim_id: c_sHfo3LhCk1giULLPpJYzXA
          source_id: s_HUWLVDGkGD3U5dxVRcm4FP
          stance: supports
          locator: CBDB:37653
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

# 王宗哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗哲 | accepted |
| bio.summary | 王宗哲，宋人物。籍贯長汀，入仕進士，曾任禮儀院、司理參軍、縣令。（中国历代人物传记资料库 CBDB 37653） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗哲（CBDB 37653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37653&o=json)
