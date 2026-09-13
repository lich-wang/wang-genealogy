---
schema: wang-person/v1
id: p_MPvLHtziNCGPCPEemK1JuV
status: active
merged_into: null
display_name: 王廷楊
cbdb_id: 325994
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_raR3yhQLmfCQLsvVNyAmiE
        subject_person_id: p_MPvLHtziNCGPCPEemK1JuV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷楊，明人物。嘉靖三十八年進士，籍贯黃岡，入仕監生。（中国历代人物传记资料库 CBDB 325994）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_RmtobSYE7G68aAypBWXYwp
          claim_id: c_raR3yhQLmfCQLsvVNyAmiE
          source_id: s_T5Lf8nL8nt3k69YQy2K5Lg
          stance: supports
          locator: CBDB:325994
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_T5Lf8nL8nt3k69YQy2K5Lg
            source_type: api_record
            title: 中国历代人物传记资料库：王廷楊（CBDB 325994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325994&o=json
            external_identifier: CBDB:325994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wCnC5H38MZTZd1GM8gAzcQ
        subject_person_id: p_MPvLHtziNCGPCPEemK1JuV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷楊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_J5oGawaptfT9eqQqgTNQAC
          claim_id: c_wCnC5H38MZTZd1GM8gAzcQ
          source_id: s_T5Lf8nL8nt3k69YQy2K5Lg
          stance: supports
          locator: CBDB:325994
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
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

# 王廷楊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷楊，明人物。嘉靖三十八年進士，籍贯黃岡，入仕監生。（中国历代人物传记资料库 CBDB 325994） | accepted |
| name.primary | 王廷楊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷楊（CBDB 325994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325994&o=json)
