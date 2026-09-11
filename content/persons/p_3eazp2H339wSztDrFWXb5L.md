---
schema: wang-person/v1
id: p_3eazp2H339wSztDrFWXb5L
status: active
merged_into: null
display_name: 王紹奎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XGEq6UiR6nq6JE1Xw2aVnJ
        subject_person_id: p_3eazp2H339wSztDrFWXb5L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_twsDFnApmrvyHnZxvRkYbB
          claim_id: c_XGEq6UiR6nq6JE1Xw2aVnJ
          source_id: s_2vCY8GDNYqtWDvucVh3dhJ
          stance: supports
          locator: CBDB:639760
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639760）
          source: &a1
            id: s_2vCY8GDNYqtWDvucVh3dhJ
            source_type: api_record
            title: 中国历代人物传记资料库：王紹奎（CBDB 639760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639760&o=json
            external_identifier: CBDB:639760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BVPbSD3nTr7xPUE2ewBhQ7
        subject_person_id: p_3eazp2H339wSztDrFWXb5L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹奎，清人物。籍贯沂州，曾任藍翎侍衛、三等侍衛。（中国历代人物传记资料库 CBDB 639760）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rYGhWoHcfvb67pX73SYIgS
          claim_id: c_BVPbSD3nTr7xPUE2ewBhQ7
          source_id: s_2vCY8GDNYqtWDvucVh3dhJ
          stance: supports
          locator: CBDB:639760
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

# 王紹奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹奎 | accepted |
| bio.summary | 王紹奎，清人物。籍贯沂州，曾任藍翎侍衛、三等侍衛。（中国历代人物传记资料库 CBDB 639760） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹奎（CBDB 639760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639760&o=json)
