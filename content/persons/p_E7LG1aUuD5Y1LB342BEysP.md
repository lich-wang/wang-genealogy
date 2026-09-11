---
schema: wang-person/v1
id: p_E7LG1aUuD5Y1LB342BEysP
status: active
merged_into: null
display_name: 王履芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TnjtSsSERWcgG9ERv78kum
        subject_person_id: p_E7LG1aUuD5Y1LB342BEysP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AZTSz6B6RkQkSNHEZBLHmq
          claim_id: c_TnjtSsSERWcgG9ERv78kum
          source_id: s_xA4AdMVNtyrgRmiya2YtGV
          stance: supports
          locator: CBDB:637329
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637329）
          source: &a1
            id: s_xA4AdMVNtyrgRmiya2YtGV
            source_type: api_record
            title: 中国历代人物传记资料库：王履芳（CBDB 637329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637329&o=json
            external_identifier: CBDB:637329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.282Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dchNnL1nV1qod1mz95LkXE
        subject_person_id: p_E7LG1aUuD5Y1LB342BEysP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履芳，清人物。籍贯瓊州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637329）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3u4utbbDpy2LLl6hN3p5og
          claim_id: c_dchNnL1nV1qod1mz95LkXE
          source_id: s_xA4AdMVNtyrgRmiya2YtGV
          stance: supports
          locator: CBDB:637329
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

# 王履芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履芳 | accepted |
| bio.summary | 王履芳，清人物。籍贯瓊州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637329） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王履芳（CBDB 637329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637329&o=json)
