---
schema: wang-person/v1
id: p_MBcUxEvd76sQe3S9hr9Um9
status: active
merged_into: null
display_name: 王墀璸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vj32k68rVxMMiA2pfazrUq
        subject_person_id: p_MBcUxEvd76sQe3S9hr9Um9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王墀璸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EToVUQdL3J2NG9ygmfAU3J
          claim_id: c_Vj32k68rVxMMiA2pfazrUq
          source_id: s_qjTKNazJY3QCMjfuWujbfy
          stance: supports
          locator: CBDB:636760
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636760）
          source: &a1
            id: s_qjTKNazJY3QCMjfuWujbfy
            source_type: api_record
            title: 中国历代人物传记资料库：王墀璸（CBDB 636760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636760&o=json
            external_identifier: CBDB:636760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XEtV758gKBpZfjghNKfnGV
        subject_person_id: p_MBcUxEvd76sQe3S9hr9Um9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王墀璸，清人物。籍贯新寧，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 636760）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jmX1IyicEfnrZYNdXvwrll
          claim_id: c_XEtV758gKBpZfjghNKfnGV
          source_id: s_qjTKNazJY3QCMjfuWujbfy
          stance: supports
          locator: CBDB:636760
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

# 王墀璸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王墀璸 | accepted |
| bio.summary | 王墀璸，清人物。籍贯新寧，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 636760） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王墀璸（CBDB 636760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636760&o=json)
