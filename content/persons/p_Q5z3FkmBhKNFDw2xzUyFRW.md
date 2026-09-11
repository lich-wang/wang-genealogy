---
schema: wang-person/v1
id: p_Q5z3FkmBhKNFDw2xzUyFRW
status: active
merged_into: null
display_name: 王履定
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AREctHkHB2gVrJ6bzy786Z
        subject_person_id: p_Q5z3FkmBhKNFDw2xzUyFRW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履定
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NQ3Ac2vr9yGESz5m2jpAfY
          claim_id: c_AREctHkHB2gVrJ6bzy786Z
          source_id: s_Ha4sSEi6zFhaHGbYMiPtFS
          stance: supports
          locator: CBDB:536676
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（536676）
          source: &a1
            id: s_Ha4sSEi6zFhaHGbYMiPtFS
            source_type: api_record
            title: 中国历代人物传记资料库：王履定（CBDB 536676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=536676&o=json
            external_identifier: CBDB:536676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.406Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yvLNvs9AjJqCHJUmA3N5ZZ
        subject_person_id: p_Q5z3FkmBhKNFDw2xzUyFRW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履定，宋人物。籍贯侯官，入仕進士。（中国历代人物传记资料库 CBDB 536676）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5M8Kt-rXyT2wxlFloDSknC
          claim_id: c_yvLNvs9AjJqCHJUmA3N5ZZ
          source_id: s_Ha4sSEi6zFhaHGbYMiPtFS
          stance: supports
          locator: CBDB:536676
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

# 王履定

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履定 | accepted |
| bio.summary | 王履定，宋人物。籍贯侯官，入仕進士。（中国历代人物传记资料库 CBDB 536676） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王履定（CBDB 536676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=536676&o=json)
