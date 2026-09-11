---
schema: wang-person/v1
id: p_H8xiGDEA4FNguQLBSYCnbR
status: active
merged_into: null
display_name: 王許
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N3BUmmvh2cg1A9Q395ug9h
        subject_person_id: p_H8xiGDEA4FNguQLBSYCnbR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王許
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JVFP9nxbUy2jBgdMuAhbLg
          claim_id: c_N3BUmmvh2cg1A9Q395ug9h
          source_id: s_f9iqqyAfjcc966RDZDQAVz
          stance: supports
          locator: CBDB:332117
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（332117）
          source: &a1
            id: s_f9iqqyAfjcc966RDZDQAVz
            source_type: api_record
            title: 中国历代人物传记资料库：王許（CBDB 332117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332117&o=json
            external_identifier: CBDB:332117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gBPMXnhZP5Et43uL5RABTq
        subject_person_id: p_H8xiGDEA4FNguQLBSYCnbR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王許，明人物。嘉靖四十四年進士，籍贯什邡。（中国历代人物传记资料库 CBDB 332117）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MGzbS34Br7UolD9qi44CeK
          claim_id: c_gBPMXnhZP5Et43uL5RABTq
          source_id: s_f9iqqyAfjcc966RDZDQAVz
          stance: supports
          locator: CBDB:332117
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

# 王許

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王許 | accepted |
| bio.summary | 王許，明人物。嘉靖四十四年進士，籍贯什邡。（中国历代人物传记资料库 CBDB 332117） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王許（CBDB 332117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332117&o=json)
