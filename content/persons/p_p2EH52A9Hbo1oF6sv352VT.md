---
schema: wang-person/v1
id: p_p2EH52A9Hbo1oF6sv352VT
status: active
merged_into: null
display_name: 王公儼
cbdb_id: 101073
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_49wu3zA6RNheasNV8zULMx
        subject_person_id: p_p2EH52A9Hbo1oF6sv352VT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公儼，元人物。曾任監察御史。（中国历代人物传记资料库 CBDB 101073）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_kx06Gmd3Xdv4PYLWm8VsUa
          claim_id: c_49wu3zA6RNheasNV8zULMx
          source_id: s_XS22ARcTqCPaG2cLxFKnYK
          stance: supports
          locator: CBDB:101073
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XS22ARcTqCPaG2cLxFKnYK
            source_type: api_record
            title: 中国历代人物传记资料库：王公儼（CBDB 101073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101073&o=json
            external_identifier: CBDB:101073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:50.362Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BVPVCtJuFWX86e7q7nxu2v
        subject_person_id: p_p2EH52A9Hbo1oF6sv352VT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公儼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DXE8JDiTteBaQ6aG1Ts7fd
          claim_id: c_BVPVCtJuFWX86e7q7nxu2v
          source_id: s_XS22ARcTqCPaG2cLxFKnYK
          stance: supports
          locator: CBDB:101073
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1701-1800）｜历史性依据：CBDB 朝代 = 元
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

# 王公儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王公儼，元人物。曾任監察御史。（中国历代人物传记资料库 CBDB 101073） | accepted |
| name.primary | 王公儼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公儼（CBDB 101073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101073&o=json)
