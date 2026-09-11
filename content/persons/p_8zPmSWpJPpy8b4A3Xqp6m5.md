---
schema: wang-person/v1
id: p_8zPmSWpJPpy8b4A3Xqp6m5
status: active
merged_into: null
display_name: 王楹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EN994AvqSiNoDef7mfVepY
        subject_person_id: p_8zPmSWpJPpy8b4A3Xqp6m5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nFJUMJ7ZTrpqXPKyjoSxLf
          claim_id: c_EN994AvqSiNoDef7mfVepY
          source_id: s_4XdPGMPGgJ2Y3ZX77S631J
          stance: supports
          locator: CBDB:291888
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291888）
          source: &a1
            id: s_4XdPGMPGgJ2Y3ZX77S631J
            source_type: api_record
            title: 中国历代人物传记资料库：王楹（CBDB 291888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291888&o=json
            external_identifier: CBDB:291888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.370Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7USjMMUTuDy41NuZeKX9x6
        subject_person_id: p_8zPmSWpJPpy8b4A3Xqp6m5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楹，明人物。嘉靖十一年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 291888）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kpYR0E7HVXUzxRBTo22hdS
          claim_id: c_7USjMMUTuDy41NuZeKX9x6
          source_id: s_4XdPGMPGgJ2Y3ZX77S631J
          stance: supports
          locator: CBDB:291888
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

# 王楹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楹 | accepted |
| bio.summary | 王楹，明人物。嘉靖十一年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 291888） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楹（CBDB 291888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291888&o=json)
