---
schema: wang-person/v1
id: p_2Gg2dVT5LbvzpTvdctCVfH
status: active
merged_into: null
display_name: 王禹佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7MTzGPt3qqEK3DVPHQP7yM
        subject_person_id: p_2Gg2dVT5LbvzpTvdctCVfH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禹佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6Njnwphd3Q8NDqdaq46zJo
          claim_id: c_7MTzGPt3qqEK3DVPHQP7yM
          source_id: s_F2xVSFoBuLM7MV5gYvbKRe
          stance: supports
          locator: CBDB:560335
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（560335）
          source: &a1
            id: s_F2xVSFoBuLM7MV5gYvbKRe
            source_type: api_record
            title: 中国历代人物传记资料库：王禹佐（CBDB 560335）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560335&o=json
            external_identifier: CBDB:560335
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mp76C2zPHq2X9mx5yyCumA
        subject_person_id: p_2Gg2dVT5LbvzpTvdctCVfH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禹佐，明人物。籍贯嵊縣，入仕薦舉 (保任,保舉)，曾任府通判、知縣。（中国历代人物传记资料库 CBDB 560335）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-auDU95ZRRYxTwjDOhEfrR
          claim_id: c_Mp76C2zPHq2X9mx5yyCumA
          source_id: s_F2xVSFoBuLM7MV5gYvbKRe
          stance: supports
          locator: CBDB:560335
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

# 王禹佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禹佐 | accepted |
| bio.summary | 王禹佐，明人物。籍贯嵊縣，入仕薦舉 (保任,保舉)，曾任府通判、知縣。（中国历代人物传记资料库 CBDB 560335） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禹佐（CBDB 560335）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560335&o=json)
