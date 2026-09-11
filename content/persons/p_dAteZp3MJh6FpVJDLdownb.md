---
schema: wang-person/v1
id: p_dAteZp3MJh6FpVJDLdownb
status: active
merged_into: null
display_name: 王佳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qhGt5iNa6irzaXptaG6E3y
        subject_person_id: p_dAteZp3MJh6FpVJDLdownb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZF95nRe33z7GwG9EZraZZs
          claim_id: c_qhGt5iNa6irzaXptaG6E3y
          source_id: s_TxW6yP8oFCmhaMYiYs349m
          stance: supports
          locator: CBDB:213751
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213751）
          source: &a1
            id: s_TxW6yP8oFCmhaMYiYs349m
            source_type: api_record
            title: 中国历代人物传记资料库：王佳（CBDB 213751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213751&o=json
            external_identifier: CBDB:213751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.124Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cHC7G6nYkFqxUBhEs9iYAM
        subject_person_id: p_dAteZp3MJh6FpVJDLdownb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佳，明人物。萬曆二年進士，籍贯太原府。（中国历代人物传记资料库 CBDB 213751）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TamKIq95Y1ACw-o2GFx8u8
          claim_id: c_cHC7G6nYkFqxUBhEs9iYAM
          source_id: s_TxW6yP8oFCmhaMYiYs349m
          stance: supports
          locator: CBDB:213751
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

# 王佳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佳 | accepted |
| bio.summary | 王佳，明人物。萬曆二年進士，籍贯太原府。（中国历代人物传记资料库 CBDB 213751） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佳（CBDB 213751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213751&o=json)
