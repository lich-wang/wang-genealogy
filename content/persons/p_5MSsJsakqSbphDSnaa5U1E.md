---
schema: wang-person/v1
id: p_5MSsJsakqSbphDSnaa5U1E
status: active
merged_into: null
display_name: 王昭明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_trCWN9EXQYFbKFfWJ9mtQs
        subject_person_id: p_5MSsJsakqSbphDSnaa5U1E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LU64Jqzmios3BhMbTnSwgY
          claim_id: c_trCWN9EXQYFbKFfWJ9mtQs
          source_id: s_QF58wunk65WTa4iPAg4jTM
          stance: supports
          locator: CBDB:685447
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685447）
          source: &a1
            id: s_QF58wunk65WTa4iPAg4jTM
            source_type: api_record
            title: 中国历代人物传记资料库：王昭明（CBDB 685447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685447&o=json
            external_identifier: CBDB:685447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.339Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p46knkyQpnC96B48v4yv1e
        subject_person_id: p_5MSsJsakqSbphDSnaa5U1E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭明，宋人物。籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 685447）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JX-nkjRyp_gH4uVpx9tqZj
          claim_id: c_p46knkyQpnC96B48v4yv1e
          source_id: s_QF58wunk65WTa4iPAg4jTM
          stance: supports
          locator: CBDB:685447
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

# 王昭明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昭明 | accepted |
| bio.summary | 王昭明，宋人物。籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 685447） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昭明（CBDB 685447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685447&o=json)
