---
schema: wang-person/v1
id: p_nbxUAycRwb21TEe1VC36YJ
status: active
merged_into: null
display_name: 王彥自
cbdb_id: 97887
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C5sqxLTAFuAMxEUXokFhFp
        subject_person_id: p_nbxUAycRwb21TEe1VC36YJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥自，宋人物。曾任右朝奉大夫。（中国历代人物传记资料库 CBDB 97887）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_tbhmWsG0DdTRvQvlNJWYb0
          claim_id: c_C5sqxLTAFuAMxEUXokFhFp
          source_id: s_wG53sUXmnRw2Uf7tqnNhDR
          stance: supports
          locator: CBDB:97887
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wG53sUXmnRw2Uf7tqnNhDR
            source_type: api_record
            title: 中国历代人物传记资料库：王彥自（CBDB 97887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97887&o=json
            external_identifier: CBDB:97887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:49.564Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cmhgt62EwhktLLFPSJLSa1
        subject_person_id: p_nbxUAycRwb21TEe1VC36YJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥自
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_F3gx7Nm57DmsCEmrTid9CL
          claim_id: c_Cmhgt62EwhktLLFPSJLSa1
          source_id: s_wG53sUXmnRw2Uf7tqnNhDR
          stance: supports
          locator: CBDB:97887
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1601-1700）｜历史性依据：CBDB 朝代 = 宋
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

# 王彥自

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彥自，宋人物。曾任右朝奉大夫。（中国历代人物传记资料库 CBDB 97887） | accepted |
| name.primary | 王彥自 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥自（CBDB 97887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97887&o=json)
