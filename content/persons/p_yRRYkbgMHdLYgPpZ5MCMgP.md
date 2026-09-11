---
schema: wang-person/v1
id: p_yRRYkbgMHdLYgPpZ5MCMgP
status: active
merged_into: null
display_name: 王衆仲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zu8zBoNbAEGoMcUeEo5BjC
        subject_person_id: p_yRRYkbgMHdLYgPpZ5MCMgP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衆仲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XMuiAceCYrANR2MuHe3Agh
          claim_id: c_Zu8zBoNbAEGoMcUeEo5BjC
          source_id: s_MMBZ5NNm3w1BqPq3NQYi3P
          stance: supports
          locator: CBDB:382026
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（382026）
          source: &a1
            id: s_MMBZ5NNm3w1BqPq3NQYi3P
            source_type: api_record
            title: 中国历代人物传记资料库：王衆仲（CBDB 382026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382026&o=json
            external_identifier: CBDB:382026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jmZqzvdWtR6tQ1sQ8t8iBX
        subject_person_id: p_yRRYkbgMHdLYgPpZ5MCMgP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衆仲，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 382026）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f6zDdF1B1WRONfGN7-z2CX
          claim_id: c_jmZqzvdWtR6tQ1sQ8t8iBX
          source_id: s_MMBZ5NNm3w1BqPq3NQYi3P
          stance: supports
          locator: CBDB:382026
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

# 王衆仲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衆仲 | accepted |
| bio.summary | 王衆仲，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 382026） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衆仲（CBDB 382026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382026&o=json)
