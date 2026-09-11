---
schema: wang-person/v1
id: p_FDdQovhwaQVUYWatnPME3c
status: active
merged_into: null
display_name: 王希琮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C1VviDKQLCXwoeMuJuNNpG
        subject_person_id: p_FDdQovhwaQVUYWatnPME3c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j4cXxsM3hyCLA6D3X3u6gw
          claim_id: c_C1VviDKQLCXwoeMuJuNNpG
          source_id: s_EX2mC6VG5SL4nLPLgCRC5R
          stance: supports
          locator: CBDB:637391
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637391）
          source: &a1
            id: s_EX2mC6VG5SL4nLPLgCRC5R
            source_type: api_record
            title: 中国历代人物传记资料库：王希琮（CBDB 637391）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637391&o=json
            external_identifier: CBDB:637391
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.303Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1Hoki1GhAEyGnwE5M1oTf2
        subject_person_id: p_FDdQovhwaQVUYWatnPME3c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希琮，清人物。籍贯南陵，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 637391）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Uh0kj7JGCgGb_IGzS84Rrs
          claim_id: c_1Hoki1GhAEyGnwE5M1oTf2
          source_id: s_EX2mC6VG5SL4nLPLgCRC5R
          stance: supports
          locator: CBDB:637391
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

# 王希琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希琮 | accepted |
| bio.summary | 王希琮，清人物。籍贯南陵，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 637391） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希琮（CBDB 637391）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637391&o=json)
