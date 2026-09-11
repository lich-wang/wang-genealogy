---
schema: wang-person/v1
id: p_6GFNJN3RybBE7dopVUBEes
status: active
merged_into: null
display_name: 王嘉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fewH5dV2CSqjsYBnxjquJG
        subject_person_id: p_6GFNJN3RybBE7dopVUBEes
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M8C8pUBpnVyDkDSPrCmQsv
          claim_id: c_fewH5dV2CSqjsYBnxjquJG
          source_id: s_hFjoXob2TkFoVK2G51FAjj
          stance: supports
          locator: CBDB:324571
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324571）
          source: &a1
            id: s_hFjoXob2TkFoVK2G51FAjj
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉（CBDB 324571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324571&o=json
            external_identifier: CBDB:324571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.190Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3YC539w2dCrF45vmbMiX5y
        subject_person_id: p_6GFNJN3RybBE7dopVUBEes
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉，明人物。嘉靖三十八年進士，籍贯南充。（中国历代人物传记资料库 CBDB 324571）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YRA3sk6Hdi0t0SExLhlDqT
          claim_id: c_3YC539w2dCrF45vmbMiX5y
          source_id: s_hFjoXob2TkFoVK2G51FAjj
          stance: supports
          locator: CBDB:324571
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

# 王嘉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉 | accepted |
| bio.summary | 王嘉，明人物。嘉靖三十八年進士，籍贯南充。（中国历代人物传记资料库 CBDB 324571） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉（CBDB 324571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324571&o=json)
