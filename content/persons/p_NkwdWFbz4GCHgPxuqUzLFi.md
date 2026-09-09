---
schema: wang-person/v1
id: p_NkwdWFbz4GCHgPxuqUzLFi
status: active
merged_into: null
display_name: 王珉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DQN29HLtgdGFjGQRU7XWRQ
        subject_person_id: p_NkwdWFbz4GCHgPxuqUzLFi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6EiW6QcKs3AJW7CPZeCk8Q
          claim_id: c_DQN29HLtgdGFjGQRU7XWRQ
          source_id: s_Uq7zfN9vACDNnyiBbE1r6X
          stance: supports
          locator: CBDB:17887
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17887）
          source: &a1
            id: s_Uq7zfN9vACDNnyiBbE1r6X
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 17887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17887&o=json
            external_identifier: CBDB:17887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.696Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R2WBeVT9NkTv3RNfxwbvcJ
        subject_person_id: p_NkwdWFbz4GCHgPxuqUzLFi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2byAynL2CwZYtUVN9bGAsv
          claim_id: c_R2WBeVT9NkTv3RNfxwbvcJ
          source_id: s_Uq7zfN9vACDNnyiBbE1r6X
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

# 王珉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珉 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珉（CBDB 17887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17887&o=json)
