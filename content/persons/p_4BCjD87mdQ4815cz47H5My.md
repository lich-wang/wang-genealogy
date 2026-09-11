---
schema: wang-person/v1
id: p_4BCjD87mdQ4815cz47H5My
status: active
merged_into: null
display_name: 王渥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CvPrpS4VKy88Mz78q3Yrzi
        subject_person_id: p_4BCjD87mdQ4815cz47H5My
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_16U8va9CGBhn3m1LfC2a1G
          claim_id: c_CvPrpS4VKy88Mz78q3Yrzi
          source_id: s_zwFn14MpRgk15n5p1eZwr2
          stance: supports
          locator: CBDB:466238
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（466238）
          source: &a1
            id: s_zwFn14MpRgk15n5p1eZwr2
            source_type: api_record
            title: 中国历代人物传记资料库：王渥（CBDB 466238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466238&o=json
            external_identifier: CBDB:466238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EgY1tKdMhkAFfkgnFkMfCR
        subject_person_id: p_4BCjD87mdQ4815cz47H5My
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渥，宋人物。曾任提舉。（中国历代人物传记资料库 CBDB 466238）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DRkF5-LeldocZTb1bKVcvO
          claim_id: c_EgY1tKdMhkAFfkgnFkMfCR
          source_id: s_zwFn14MpRgk15n5p1eZwr2
          stance: supports
          locator: CBDB:466238
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

# 王渥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渥 | accepted |
| bio.summary | 王渥，宋人物。曾任提舉。（中国历代人物传记资料库 CBDB 466238） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王渥（CBDB 466238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466238&o=json)
