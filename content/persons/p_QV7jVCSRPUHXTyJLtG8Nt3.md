---
schema: wang-person/v1
id: p_QV7jVCSRPUHXTyJLtG8Nt3
status: active
merged_into: null
display_name: 王悌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z186zypf4X1k7dNstAiaKu
        subject_person_id: p_QV7jVCSRPUHXTyJLtG8Nt3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ofvT6MBx2WPc9H7QPiWnFR
          claim_id: c_z186zypf4X1k7dNstAiaKu
          source_id: s_fdfJLzpWhgDS3tCRaqTPed
          stance: supports
          locator: CBDB:264635
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264635）
          source: &a1
            id: s_fdfJLzpWhgDS3tCRaqTPed
            source_type: api_record
            title: 中国历代人物传记资料库：王悌（CBDB 264635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264635&o=json
            external_identifier: CBDB:264635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.653Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pMCd6CwmMvqn7qyBrVMjTL
        subject_person_id: p_QV7jVCSRPUHXTyJLtG8Nt3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悌，明人物。弘治六年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 264635）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r4ilVx4NJE-G3T7ZszYpZG
          claim_id: c_pMCd6CwmMvqn7qyBrVMjTL
          source_id: s_fdfJLzpWhgDS3tCRaqTPed
          stance: supports
          locator: CBDB:264635
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

# 王悌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王悌 | accepted |
| bio.summary | 王悌，明人物。弘治六年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 264635） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王悌（CBDB 264635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264635&o=json)
