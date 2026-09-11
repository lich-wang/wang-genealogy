---
schema: wang-person/v1
id: p_pzNAnc123NBCqd9bKtUzoC
status: active
merged_into: null
display_name: 王夢廉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y4cdLwbMh1qwBGvBM1f2GX
        subject_person_id: p_pzNAnc123NBCqd9bKtUzoC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dN7tq8PoqAsHeq3W3DYx11
          claim_id: c_Y4cdLwbMh1qwBGvBM1f2GX
          source_id: s_7B22sypDDFpY2LXXNMoAdF
          stance: supports
          locator: CBDB:544593
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（544593）
          source: &a1
            id: s_7B22sypDDFpY2LXXNMoAdF
            source_type: api_record
            title: 中国历代人物传记资料库：王夢廉（CBDB 544593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544593&o=json
            external_identifier: CBDB:544593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vMbHu3XEEGz1KWJ2DfFJid
        subject_person_id: p_pzNAnc123NBCqd9bKtUzoC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢廉，宋人物。籍贯金華，入仕進士。（中国历代人物传记资料库 CBDB 544593）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0VlRg-Lg0FACa3NuLpDqoI
          claim_id: c_vMbHu3XEEGz1KWJ2DfFJid
          source_id: s_7B22sypDDFpY2LXXNMoAdF
          stance: supports
          locator: CBDB:544593
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

# 王夢廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢廉 | accepted |
| bio.summary | 王夢廉，宋人物。籍贯金華，入仕進士。（中国历代人物传记资料库 CBDB 544593） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢廉（CBDB 544593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544593&o=json)
