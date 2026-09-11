---
schema: wang-person/v1
id: p_NUy2brXM2kqqnyAGnw8Ln6
status: active
merged_into: null
display_name: 王學儉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6SgPszgRutH2mJ4Ubo6MRV
        subject_person_id: p_NUy2brXM2kqqnyAGnw8Ln6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學儉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y57DrNZa7nx8NwauhZf2cU
          claim_id: c_6SgPszgRutH2mJ4Ubo6MRV
          source_id: s_LFVFBpkbaTFtDZao11BGz8
          stance: supports
          locator: CBDB:637025
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637025）
          source: &a1
            id: s_LFVFBpkbaTFtDZao11BGz8
            source_type: api_record
            title: 中国历代人物传记资料库：王學儉（CBDB 637025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637025&o=json
            external_identifier: CBDB:637025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.186Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NLZtwhn2Q2GbHsKSoNcGdS
        subject_person_id: p_NUy2brXM2kqqnyAGnw8Ln6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學儉，清人物。籍贯永北直隸廳，入仕廩貢生，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 637025）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vlgCQyhp5KsBS2f5rKEMZm
          claim_id: c_NLZtwhn2Q2GbHsKSoNcGdS
          source_id: s_LFVFBpkbaTFtDZao11BGz8
          stance: supports
          locator: CBDB:637025
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

# 王學儉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學儉 | accepted |
| bio.summary | 王學儉，清人物。籍贯永北直隸廳，入仕廩貢生，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 637025） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學儉（CBDB 637025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637025&o=json)
