---
schema: wang-person/v1
id: p_HLXi5DJRpqVAgCc34cPXPR
status: active
merged_into: null
display_name: 王昇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x7a2BE1HY26TmByTSGXUD3
        subject_person_id: p_HLXi5DJRpqVAgCc34cPXPR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ULB8bwk36nfP5dQCerF46v
          claim_id: c_x7a2BE1HY26TmByTSGXUD3
          source_id: s_xtMCais92MECqNaEX2bSA1
          stance: supports
          locator: CBDB:484009
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（484009）
          source: &a1
            id: s_xtMCais92MECqNaEX2bSA1
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 484009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=484009&o=json
            external_identifier: CBDB:484009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.836Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rie99tSxL4vNPZB6UQMqt4
        subject_person_id: p_HLXi5DJRpqVAgCc34cPXPR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇，明人物。入仕世襲(替)，曾任副千戶、正千戶。（中国历代人物传记资料库 CBDB 484009）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GSjCPwliZosOmPUQ1TRJEk
          claim_id: c_rie99tSxL4vNPZB6UQMqt4
          source_id: s_xtMCais92MECqNaEX2bSA1
          stance: supports
          locator: CBDB:484009
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

# 王昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇 | accepted |
| bio.summary | 王昇，明人物。入仕世襲(替)，曾任副千戶、正千戶。（中国历代人物传记资料库 CBDB 484009） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昇（CBDB 484009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=484009&o=json)
