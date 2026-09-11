---
schema: wang-person/v1
id: p_ErcVZDeQmCkd4KVAXNE9Mp
status: active
merged_into: null
display_name: 王愉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uiUK4Nw9z3WaZPsUkokX5P
        subject_person_id: p_ErcVZDeQmCkd4KVAXNE9Mp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qJ9AEnf83HKnrPK8t4E5VL
          claim_id: c_uiUK4Nw9z3WaZPsUkokX5P
          source_id: s_GAgPdpkag5nbK7QYsHhtJ3
          stance: supports
          locator: CBDB:264633
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264633）
          source: &a1
            id: s_GAgPdpkag5nbK7QYsHhtJ3
            source_type: api_record
            title: 中国历代人物传记资料库：王愉（CBDB 264633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264633&o=json
            external_identifier: CBDB:264633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ty9Aovn6ktRdRqAu3oCaJP
        subject_person_id: p_ErcVZDeQmCkd4KVAXNE9Mp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愉，明人物。弘治六年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 264633）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UDR3KjhDLlfgZ6r_1zSPQS
          claim_id: c_ty9Aovn6ktRdRqAu3oCaJP
          source_id: s_GAgPdpkag5nbK7QYsHhtJ3
          stance: supports
          locator: CBDB:264633
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

# 王愉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愉 | accepted |
| bio.summary | 王愉，明人物。弘治六年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 264633） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王愉（CBDB 264633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264633&o=json)
