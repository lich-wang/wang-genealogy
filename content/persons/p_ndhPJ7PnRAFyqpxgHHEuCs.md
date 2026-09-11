---
schema: wang-person/v1
id: p_ndhPJ7PnRAFyqpxgHHEuCs
status: active
merged_into: null
display_name: 王起宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kEG9B8mxHsE9XT6Rff8Pwu
        subject_person_id: p_ndhPJ7PnRAFyqpxgHHEuCs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3gEGE32c7B3NhuzrehbTLR
          claim_id: c_kEG9B8mxHsE9XT6Rff8Pwu
          source_id: s_1A63VbGitSYXpUAbZQyV8W
          stance: supports
          locator: CBDB:688599
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688599）
          source: &a1
            id: s_1A63VbGitSYXpUAbZQyV8W
            source_type: api_record
            title: 中国历代人物传记资料库：王起宗（CBDB 688599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688599&o=json
            external_identifier: CBDB:688599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.526Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4tr8T9k4QRWxz5fkFK3CWh
        subject_person_id: p_ndhPJ7PnRAFyqpxgHHEuCs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起宗，宋人物。籍贯湘鄉，入仕進士。（中国历代人物传记资料库 CBDB 688599）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jPcA_0uwSmmKUfYuOqpngx
          claim_id: c_4tr8T9k4QRWxz5fkFK3CWh
          source_id: s_1A63VbGitSYXpUAbZQyV8W
          stance: supports
          locator: CBDB:688599
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

# 王起宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王起宗 | accepted |
| bio.summary | 王起宗，宋人物。籍贯湘鄉，入仕進士。（中国历代人物传记资料库 CBDB 688599） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王起宗（CBDB 688599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688599&o=json)
