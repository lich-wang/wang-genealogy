---
schema: wang-person/v1
id: p_MS8XW1Etm23961EQcNMd64
status: active
merged_into: null
display_name: 王惠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UKo8DkPpv6EDmUAnLbGGU7
        subject_person_id: p_MS8XW1Etm23961EQcNMd64
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rcQZ3WGVhJNJJjvWb8QPD2
          claim_id: c_UKo8DkPpv6EDmUAnLbGGU7
          source_id: s_kQymbVD4yNCJyCYTp1VfbN
          stance: supports
          locator: CBDB:100828
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100828）
          source: &a1
            id: s_kQymbVD4yNCJyCYTp1VfbN
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 100828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100828&o=json
            external_identifier: CBDB:100828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CiQDp6W3D887hFY5P9oKMF
        subject_person_id: p_MS8XW1Etm23961EQcNMd64
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠，元人物。籍贯高郵府。（中国历代人物传记资料库 CBDB 100828）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WuY0pOUi8hyKj-OxYym0-B
          claim_id: c_CiQDp6W3D887hFY5P9oKMF
          source_id: s_kQymbVD4yNCJyCYTp1VfbN
          stance: supports
          locator: CBDB:100828
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

# 王惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惠 | accepted |
| bio.summary | 王惠，元人物。籍贯高郵府。（中国历代人物传记资料库 CBDB 100828） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惠（CBDB 100828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100828&o=json)
