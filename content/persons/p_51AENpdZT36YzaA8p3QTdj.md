---
schema: wang-person/v1
id: p_51AENpdZT36YzaA8p3QTdj
status: active
merged_into: null
display_name: 王修通
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wKFWgEBcMLBbjqMjX77aEf
        subject_person_id: p_51AENpdZT36YzaA8p3QTdj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_53Kpv4goGkQE9sSsuRov8a
          claim_id: c_wKFWgEBcMLBbjqMjX77aEf
          source_id: s_JF7hv3aGPvkXmfLbytB1Fn
          stance: supports
          locator: CBDB:636077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636077）
          source: &a1
            id: s_JF7hv3aGPvkXmfLbytB1Fn
            source_type: api_record
            title: 中国历代人物传记资料库：王修通（CBDB 636077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636077&o=json
            external_identifier: CBDB:636077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LtPXx13dCpftn3Exyz4cxN
        subject_person_id: p_51AENpdZT36YzaA8p3QTdj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修通，清人物。籍贯泰和，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636077）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DNwRVOfepK3NMDgJmR3L-J
          claim_id: c_LtPXx13dCpftn3Exyz4cxN
          source_id: s_JF7hv3aGPvkXmfLbytB1Fn
          stance: supports
          locator: CBDB:636077
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

# 王修通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王修通 | accepted |
| bio.summary | 王修通，清人物。籍贯泰和，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636077） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王修通（CBDB 636077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636077&o=json)
