---
schema: wang-person/v1
id: p_fFM18P6wXyPCx5sVAx6n8T
status: active
merged_into: null
display_name: 王之學
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q1R7X8PmXZyGzxm6chLBGE
        subject_person_id: p_fFM18P6wXyPCx5sVAx6n8T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gFKeVyyFd77GzBvgnQyCe4
          claim_id: c_q1R7X8PmXZyGzxm6chLBGE
          source_id: s_3iPYB4hGF9JKtGsqnyMJbP
          stance: supports
          locator: CBDB:635780
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635780）
          source: &a1
            id: s_3iPYB4hGF9JKtGsqnyMJbP
            source_type: api_record
            title: 中国历代人物传记资料库：王之學（CBDB 635780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635780&o=json
            external_identifier: CBDB:635780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.790Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M5P3JKx7Nw17xfDhgVNBTm
        subject_person_id: p_fFM18P6wXyPCx5sVAx6n8T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之學，清人物。籍贯安徽省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 635780）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gNqxlfSfjpL5a2bMhJWGlH
          claim_id: c_M5P3JKx7Nw17xfDhgVNBTm
          source_id: s_3iPYB4hGF9JKtGsqnyMJbP
          stance: supports
          locator: CBDB:635780
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

# 王之學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之學 | accepted |
| bio.summary | 王之學，清人物。籍贯安徽省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 635780） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之學（CBDB 635780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635780&o=json)
