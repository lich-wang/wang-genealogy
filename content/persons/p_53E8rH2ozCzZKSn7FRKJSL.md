---
schema: wang-person/v1
id: p_53E8rH2ozCzZKSn7FRKJSL
status: active
merged_into: null
display_name: 王椿年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y1ttPkUZwtkmHnRtM5hPk7
        subject_person_id: p_53E8rH2ozCzZKSn7FRKJSL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王椿年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FTiADc8rkmtDQ2eDDAFg8v
          claim_id: c_Y1ttPkUZwtkmHnRtM5hPk7
          source_id: s_V2BabQTdWe77Bib4y1SE41
          stance: supports
          locator: CBDB:638748
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638748）
          source: &a1
            id: s_V2BabQTdWe77Bib4y1SE41
            source_type: api_record
            title: 中国历代人物传记资料库：王椿年（CBDB 638748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638748&o=json
            external_identifier: CBDB:638748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.756Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R6MYDVpbeVDBYKJ8jUMXiC
        subject_person_id: p_53E8rH2ozCzZKSn7FRKJSL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王椿年，清人物。籍贯江蘇省，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 638748）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gNFl4BzksCq5HtE3iOXUDn
          claim_id: c_R6MYDVpbeVDBYKJ8jUMXiC
          source_id: s_V2BabQTdWe77Bib4y1SE41
          stance: supports
          locator: CBDB:638748
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

# 王椿年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王椿年 | accepted |
| bio.summary | 王椿年，清人物。籍贯江蘇省，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 638748） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王椿年（CBDB 638748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638748&o=json)
