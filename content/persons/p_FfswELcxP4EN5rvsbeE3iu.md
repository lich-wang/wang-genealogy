---
schema: wang-person/v1
id: p_FfswELcxP4EN5rvsbeE3iu
status: active
merged_into: null
display_name: 王潤桂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BZMpW212fCtnGq2UmEBRhe
        subject_person_id: p_FfswELcxP4EN5rvsbeE3iu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9RgaPDZo9WNVBnPR1b6jrc
          claim_id: c_BZMpW212fCtnGq2UmEBRhe
          source_id: s_Pd8PnLPxK5r4ehFbm2cebU
          stance: supports
          locator: CBDB:639211
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639211）
          source: &a1
            id: s_Pd8PnLPxK5r4ehFbm2cebU
            source_type: api_record
            title: 中国历代人物传记资料库：王潤桂（CBDB 639211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639211&o=json
            external_identifier: CBDB:639211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jJcqHuA3WyFwzLY6SKEkdY
        subject_person_id: p_FfswELcxP4EN5rvsbeE3iu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤桂，清人物。籍贯河南省，入仕鄉貢舉人，曾任教授、訓導。（中国历代人物传记资料库 CBDB 639211）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J2pHv1SgHo0kYBy70YCj4g
          claim_id: c_jJcqHuA3WyFwzLY6SKEkdY
          source_id: s_Pd8PnLPxK5r4ehFbm2cebU
          stance: supports
          locator: CBDB:639211
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

# 王潤桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潤桂 | accepted |
| bio.summary | 王潤桂，清人物。籍贯河南省，入仕鄉貢舉人，曾任教授、訓導。（中国历代人物传记资料库 CBDB 639211） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潤桂（CBDB 639211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639211&o=json)
