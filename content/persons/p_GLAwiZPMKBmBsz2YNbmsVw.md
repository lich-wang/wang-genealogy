---
schema: wang-person/v1
id: p_GLAwiZPMKBmBsz2YNbmsVw
status: active
merged_into: null
display_name: 王寶珍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hDifS6mGaYMx4LbJyCb3Nj
        subject_person_id: p_GLAwiZPMKBmBsz2YNbmsVw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WmPWR1ACVE3XSMpaTJ5A33
          claim_id: c_hDifS6mGaYMx4LbJyCb3Nj
          source_id: s_pEcC5K58YYKn7H32BEfBWV
          stance: supports
          locator: CBDB:695014
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（695014）
          source: &a1
            id: s_pEcC5K58YYKn7H32BEfBWV
            source_type: api_record
            title: 中国历代人物传记资料库：王寶珍（CBDB 695014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695014&o=json
            external_identifier: CBDB:695014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.683Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JrQFtXycR3m1wk3AP3sr8C
        subject_person_id: p_GLAwiZPMKBmBsz2YNbmsVw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶珍，清人物。身份为死國難。（中国历代人物传记资料库 CBDB 695014）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CeXshAcjBOIeFBKd6V6ESC
          claim_id: c_JrQFtXycR3m1wk3AP3sr8C
          source_id: s_pEcC5K58YYKn7H32BEfBWV
          stance: supports
          locator: CBDB:695014
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

# 王寶珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶珍 | accepted |
| bio.summary | 王寶珍，清人物。身份为死國難。（中国历代人物传记资料库 CBDB 695014） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寶珍（CBDB 695014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695014&o=json)
