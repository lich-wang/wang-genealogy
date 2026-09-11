---
schema: wang-person/v1
id: p_RcTdiAtHHChTDXpnQJ33RJ
status: active
merged_into: null
display_name: 王朝用
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EPt9ayLhSrB2jYL85BFTWj
        subject_person_id: p_RcTdiAtHHChTDXpnQJ33RJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6SHmcVuVgLut73CrRzUAAD
          claim_id: c_EPt9ayLhSrB2jYL85BFTWj
          source_id: s_4Udr9y4aB9r4Ryq4emYo4i
          stance: supports
          locator: CBDB:492916
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492916）
          source: &a1
            id: s_4Udr9y4aB9r4Ryq4emYo4i
            source_type: api_record
            title: 中国历代人物传记资料库：王朝用（CBDB 492916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492916&o=json
            external_identifier: CBDB:492916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.338Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RX6KCDJrWRWZ21FG5RvvUJ
        subject_person_id: p_RcTdiAtHHChTDXpnQJ33RJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝用，明人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 492916）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7jnbd0_X1UdAoWoQYoPZHa
          claim_id: c_RX6KCDJrWRWZ21FG5RvvUJ
          source_id: s_4Udr9y4aB9r4Ryq4emYo4i
          stance: supports
          locator: CBDB:492916
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

# 王朝用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝用 | accepted |
| bio.summary | 王朝用，明人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 492916） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝用（CBDB 492916）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492916&o=json)
