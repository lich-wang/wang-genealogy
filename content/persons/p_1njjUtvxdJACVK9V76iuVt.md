---
schema: wang-person/v1
id: p_1njjUtvxdJACVK9V76iuVt
status: active
merged_into: null
display_name: 王許
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R6gRRJbizKRq12epnemEmS
        subject_person_id: p_1njjUtvxdJACVK9V76iuVt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王許
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SGjg2bhC47WKmAKjGHVqZP
          claim_id: c_R6gRRJbizKRq12epnemEmS
          source_id: s_6Jh6xAnmLYCex7td7mjGtM
          stance: supports
          locator: CBDB:497661
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（497661）
          source: &a1
            id: s_6Jh6xAnmLYCex7td7mjGtM
            source_type: api_record
            title: 中国历代人物传记资料库：王許（CBDB 497661）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497661&o=json
            external_identifier: CBDB:497661
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.651Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w1GEGur2E5TQkvBiQ68eGT
        subject_person_id: p_1njjUtvxdJACVK9V76iuVt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王許，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 497661）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jXHFsnraAU_234cqOtsNSe
          claim_id: c_w1GEGur2E5TQkvBiQ68eGT
          source_id: s_6Jh6xAnmLYCex7td7mjGtM
          stance: supports
          locator: CBDB:497661
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

# 王許

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王許 | accepted |
| bio.summary | 王許，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 497661） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王許（CBDB 497661）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497661&o=json)
