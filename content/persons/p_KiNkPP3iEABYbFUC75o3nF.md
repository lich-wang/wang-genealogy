---
schema: wang-person/v1
id: p_KiNkPP3iEABYbFUC75o3nF
status: active
merged_into: null
display_name: 王咨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MPR7nDzvQJu8xqVUo7p8YM
        subject_person_id: p_KiNkPP3iEABYbFUC75o3nF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王咨
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FU83TBa7JH5pqHsKhn3b1S
          claim_id: c_MPR7nDzvQJu8xqVUo7p8YM
          source_id: s_renVyFNaA6tpZUsDQ1Etft
          stance: supports
          locator: CBDB:298842
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298842）
          source: &a1
            id: s_renVyFNaA6tpZUsDQ1Etft
            source_type: api_record
            title: 中国历代人物传记资料库：王咨（CBDB 298842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298842&o=json
            external_identifier: CBDB:298842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.600Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MvUKMHGPDKNi1UjHqvGj17
        subject_person_id: p_KiNkPP3iEABYbFUC75o3nF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王咨，明人物。嘉靖十七年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 298842）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LtXRdLN5BiBcNia7zuU0ya
          claim_id: c_MvUKMHGPDKNi1UjHqvGj17
          source_id: s_renVyFNaA6tpZUsDQ1Etft
          stance: supports
          locator: CBDB:298842
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

# 王咨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王咨 | accepted |
| bio.summary | 王咨，明人物。嘉靖十七年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 298842） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王咨（CBDB 298842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298842&o=json)
