---
schema: wang-person/v1
id: p_7c57vbsCX5amL8hcYm4eB1
status: active
merged_into: null
display_name: 王體泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QbtE2MkF6S4Q4FPhPDp5U8
        subject_person_id: p_7c57vbsCX5amL8hcYm4eB1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XbAHjYHQ4M4qE5351TPbUF
          claim_id: c_QbtE2MkF6S4Q4FPhPDp5U8
          source_id: s_Qsk8LFDKpRC5EeobY4KVhq
          stance: supports
          locator: CBDB:334179
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334179）
          source: &a1
            id: s_Qsk8LFDKpRC5EeobY4KVhq
            source_type: api_record
            title: 中国历代人物传记资料库：王體泰（CBDB 334179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334179&o=json
            external_identifier: CBDB:334179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.437Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SCGCa8bTk9a4NxkXbWDfTH
        subject_person_id: p_7c57vbsCX5amL8hcYm4eB1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體泰，明人物。隆慶二年進士，籍贯太平。（中国历代人物传记资料库 CBDB 334179）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OKZ1OXYcR2UH4ybHo4Fbbp
          claim_id: c_SCGCa8bTk9a4NxkXbWDfTH
          source_id: s_Qsk8LFDKpRC5EeobY4KVhq
          stance: supports
          locator: CBDB:334179
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

# 王體泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王體泰 | accepted |
| bio.summary | 王體泰，明人物。隆慶二年進士，籍贯太平。（中国历代人物传记资料库 CBDB 334179） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王體泰（CBDB 334179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334179&o=json)
