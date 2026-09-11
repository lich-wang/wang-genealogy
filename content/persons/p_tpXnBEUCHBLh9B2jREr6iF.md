---
schema: wang-person/v1
id: p_tpXnBEUCHBLh9B2jREr6iF
status: active
merged_into: null
display_name: 王予公
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qKzfZhjoxG46tUNPDMY983
        subject_person_id: p_tpXnBEUCHBLh9B2jREr6iF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王予公
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SSM13cVdnp6zHjbYr5ab6Z
          claim_id: c_qKzfZhjoxG46tUNPDMY983
          source_id: s_C1W6jTXx6mvtWvUPdpMrW1
          stance: supports
          locator: CBDB:574246
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574246）
          source: &a1
            id: s_C1W6jTXx6mvtWvUPdpMrW1
            source_type: api_record
            title: 中国历代人物传记资料库：王予公（CBDB 574246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574246&o=json
            external_identifier: CBDB:574246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kmrDRQG5c5MwUVSS2GCv8V
        subject_person_id: p_tpXnBEUCHBLh9B2jREr6iF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王予公，清人物。籍贯黃岡，曾任翰林院檢討。（中国历代人物传记资料库 CBDB 574246）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hj4vP1x7ZHJ-4h93YDKUih
          claim_id: c_kmrDRQG5c5MwUVSS2GCv8V
          source_id: s_C1W6jTXx6mvtWvUPdpMrW1
          stance: supports
          locator: CBDB:574246
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

# 王予公

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王予公 | accepted |
| bio.summary | 王予公，清人物。籍贯黃岡，曾任翰林院檢討。（中国历代人物传记资料库 CBDB 574246） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王予公（CBDB 574246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574246&o=json)
