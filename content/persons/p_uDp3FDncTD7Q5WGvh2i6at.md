---
schema: wang-person/v1
id: p_uDp3FDncTD7Q5WGvh2i6at
status: active
merged_into: null
display_name: 王霈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ihRVjHJie7aR9JCUA5qQuy
        subject_person_id: p_uDp3FDncTD7Q5WGvh2i6at
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LL8Co6rkBBpvLPPVxHDjS3
          claim_id: c_ihRVjHJie7aR9JCUA5qQuy
          source_id: s_D7G5cMiCD9usMc5Ur3RHkE
          stance: supports
          locator: CBDB:576843
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576843）
          source: &a1
            id: s_D7G5cMiCD9usMc5Ur3RHkE
            source_type: api_record
            title: 中国历代人物传记资料库：王霈（CBDB 576843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576843&o=json
            external_identifier: CBDB:576843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Vq86qshPCT3JCbTvrR2J6m
        subject_person_id: p_uDp3FDncTD7Q5WGvh2i6at
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1860年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5226wxj1bBx8wQaYK8rPK8
          claim_id: c_Vq86qshPCT3JCbTvrR2J6m
          source_id: s_D7G5cMiCD9usMc5Ur3RHkE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jb2NJiZLohPRTwQnLSMdBm
        subject_person_id: p_uDp3FDncTD7Q5WGvh2i6at
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WP8f7XK8BWvSC7YzoEh6J5
          claim_id: c_Jb2NJiZLohPRTwQnLSMdBm
          source_id: s_D7G5cMiCD9usMc5Ur3RHkE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王霈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霈 | accepted |
| death.date | 1860年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霈（CBDB 576843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576843&o=json)
