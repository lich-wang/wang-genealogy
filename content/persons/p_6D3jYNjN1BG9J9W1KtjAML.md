---
schema: wang-person/v1
id: p_6D3jYNjN1BG9J9W1KtjAML
status: active
merged_into: null
display_name: 王麟定
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pzh7Nn4exN9e7FW7JWUNux
        subject_person_id: p_6D3jYNjN1BG9J9W1KtjAML
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟定
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5HUpPCmgZ2DzqPwujQd32j
          claim_id: c_pzh7Nn4exN9e7FW7JWUNux
          source_id: s_NhhCaE9AdpTspKVFKWCi5F
          stance: supports
          locator: CBDB:641033
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641033）
          source: &a1
            id: s_NhhCaE9AdpTspKVFKWCi5F
            source_type: api_record
            title: 中国历代人物传记资料库：王麟定（CBDB 641033）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641033&o=json
            external_identifier: CBDB:641033
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.447Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TgCTHFeUfAJBxuKaHVd9wj
        subject_person_id: p_6D3jYNjN1BG9J9W1KtjAML
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
        - id: cs_Dv6DW7y62wPfxCCQupGS7e
          claim_id: c_TgCTHFeUfAJBxuKaHVd9wj
          source_id: s_NhhCaE9AdpTspKVFKWCi5F
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

# 王麟定

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麟定 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王麟定（CBDB 641033）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641033&o=json)
