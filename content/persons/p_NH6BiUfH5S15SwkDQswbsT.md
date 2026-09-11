---
schema: wang-person/v1
id: p_NH6BiUfH5S15SwkDQswbsT
status: active
merged_into: null
display_name: 王慎思
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hNFTSPDgq9DeJd541iVZBt
        subject_person_id: p_NH6BiUfH5S15SwkDQswbsT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎思
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kdLxMjfgCpNpu5g6E88dZ2
          claim_id: c_hNFTSPDgq9DeJd541iVZBt
          source_id: s_U4yAdvv862vsNMg7KsvBXD
          stance: supports
          locator: CBDB:265197
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265197）
          source: &a1
            id: s_U4yAdvv862vsNMg7KsvBXD
            source_type: api_record
            title: 中国历代人物传记资料库：王慎思（CBDB 265197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265197&o=json
            external_identifier: CBDB:265197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.675Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J7REcPdzi2DkHU5Ef4EMEi
        subject_person_id: p_NH6BiUfH5S15SwkDQswbsT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎思，明人物。弘治六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 265197）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NYE7j4SIPM_pZTiKuxEX_3
          claim_id: c_J7REcPdzi2DkHU5Ef4EMEi
          source_id: s_U4yAdvv862vsNMg7KsvBXD
          stance: supports
          locator: CBDB:265197
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

# 王慎思

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慎思 | accepted |
| bio.summary | 王慎思，明人物。弘治六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 265197） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慎思（CBDB 265197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265197&o=json)
