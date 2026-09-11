---
schema: wang-person/v1
id: p_yEv3cDykdoYCKfMCBDgnkd
status: active
merged_into: null
display_name: 王密瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G2iU7zDNRkeF4SqFTP42Gg
        subject_person_id: p_yEv3cDykdoYCKfMCBDgnkd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王密瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_24kERP3EUyWVLRJpb48AqQ
          claim_id: c_G2iU7zDNRkeF4SqFTP42Gg
          source_id: s_GKMCgU95Qcb4MZDL1wUKZf
          stance: supports
          locator: CBDB:637243
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637243）
          source: &a1
            id: s_GKMCgU95Qcb4MZDL1wUKZf
            source_type: api_record
            title: 中国历代人物传记资料库：王密瑞（CBDB 637243）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637243&o=json
            external_identifier: CBDB:637243
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.252Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CGDWTPh7c4x4tnzxKNw2RZ
        subject_person_id: p_yEv3cDykdoYCKfMCBDgnkd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王密瑞，清人物。籍贯黟縣，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637243）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0BBo_T4IPVFS7m_orFcbtB
          claim_id: c_CGDWTPh7c4x4tnzxKNw2RZ
          source_id: s_GKMCgU95Qcb4MZDL1wUKZf
          stance: supports
          locator: CBDB:637243
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

# 王密瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王密瑞 | accepted |
| bio.summary | 王密瑞，清人物。籍贯黟縣，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637243） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王密瑞（CBDB 637243）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637243&o=json)
