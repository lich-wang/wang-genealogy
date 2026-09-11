---
schema: wang-person/v1
id: p_N8eZDasUFygnwPMjt8SAaY
status: active
merged_into: null
display_name: 王士毅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o6qu7uuWB8hQTFsxdNX3jM
        subject_person_id: p_N8eZDasUFygnwPMjt8SAaY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士毅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n5uzX3mc6dBVhRpcJ2YPao
          claim_id: c_o6qu7uuWB8hQTFsxdNX3jM
          source_id: s_sdXGP3JvcPvBxQoWn5vHBv
          stance: supports
          locator: CBDB:499362
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（499362）
          source: &a1
            id: s_sdXGP3JvcPvBxQoWn5vHBv
            source_type: api_record
            title: 中国历代人物传记资料库：王士毅（CBDB 499362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499362&o=json
            external_identifier: CBDB:499362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.753Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9gXLVmuxQBqVYF69fAQ6SV
        subject_person_id: p_N8eZDasUFygnwPMjt8SAaY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士毅，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 499362）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9OHyTpgYYL6TTkt-QWZ1Fn
          claim_id: c_9gXLVmuxQBqVYF69fAQ6SV
          source_id: s_sdXGP3JvcPvBxQoWn5vHBv
          stance: supports
          locator: CBDB:499362
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

# 王士毅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士毅 | accepted |
| bio.summary | 王士毅，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 499362） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士毅（CBDB 499362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499362&o=json)
