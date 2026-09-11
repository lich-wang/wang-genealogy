---
schema: wang-person/v1
id: p_5u5yEVKWwcmDVHAcRyaHwg
status: active
merged_into: null
display_name: 王溥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WXGs18W6R6611gMjBaq5Bt
        subject_person_id: p_5u5yEVKWwcmDVHAcRyaHwg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ovGR3Z6QgbAL7K8UfWrwKs
          claim_id: c_WXGs18W6R6611gMjBaq5Bt
          source_id: s_dac1FCMVESnEY6WQcg9nSg
          stance: supports
          locator: CBDB:342690
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342690）
          source: &a1
            id: s_dac1FCMVESnEY6WQcg9nSg
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 342690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342690&o=json
            external_identifier: CBDB:342690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.019Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pf7v7vATaAGBfENaTn6hqn
        subject_person_id: p_5u5yEVKWwcmDVHAcRyaHwg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥，明人物。明清進士進士，籍贯龍州宣撫司，入仕進士。（中国历代人物传记资料库 CBDB 342690）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZUA77NUcoJnlIUfB2lY_Ap
          claim_id: c_Pf7v7vATaAGBfENaTn6hqn
          source_id: s_dac1FCMVESnEY6WQcg9nSg
          stance: supports
          locator: CBDB:342690
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

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| bio.summary | 王溥，明人物。明清進士進士，籍贯龍州宣撫司，入仕進士。（中国历代人物传记资料库 CBDB 342690） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王溥（CBDB 342690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342690&o=json)
