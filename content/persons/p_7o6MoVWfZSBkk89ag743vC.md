---
schema: wang-person/v1
id: p_7o6MoVWfZSBkk89ag743vC
status: active
merged_into: null
display_name: 王章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tk6AGb7y6DN2Pz4pFLTTvw
        subject_person_id: p_7o6MoVWfZSBkk89ag743vC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7bevEEkyN6oc1TE8tj1BJY
          claim_id: c_tk6AGb7y6DN2Pz4pFLTTvw
          source_id: s_77vbon91g4fgUMPtvf2hFe
          stance: supports
          locator: CBDB:266735
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266735）
          source: &a1
            id: s_77vbon91g4fgUMPtvf2hFe
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 266735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266735&o=json
            external_identifier: CBDB:266735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.731Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1nMsQjehfpJihHhQksK5GA
        subject_person_id: p_7o6MoVWfZSBkk89ag743vC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章，明人物。弘治六年進士，籍贯邢臺。（中国历代人物传记资料库 CBDB 266735）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2VkJc3AMEDTWKWvP_3uQST
          claim_id: c_1nMsQjehfpJihHhQksK5GA
          source_id: s_77vbon91g4fgUMPtvf2hFe
          stance: supports
          locator: CBDB:266735
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

# 王章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王章 | accepted |
| bio.summary | 王章，明人物。弘治六年進士，籍贯邢臺。（中国历代人物传记资料库 CBDB 266735） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王章（CBDB 266735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266735&o=json)
