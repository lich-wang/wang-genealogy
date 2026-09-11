---
schema: wang-person/v1
id: p_ryM3jWQ36Hd9FhFqKJbG9J
status: active
merged_into: null
display_name: 王大倫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1pvvhbFbrGJdkAom914EkG
        subject_person_id: p_ryM3jWQ36Hd9FhFqKJbG9J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大倫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XSYa4K2ZC2ykRkqGFCMo61
          claim_id: c_1pvvhbFbrGJdkAom914EkG
          source_id: s_PeheQLxQJWmtjkXyRqAm19
          stance: supports
          locator: CBDB:636885
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636885）
          source: &a1
            id: s_PeheQLxQJWmtjkXyRqAm19
            source_type: api_record
            title: 中国历代人物传记资料库：王大倫（CBDB 636885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636885&o=json
            external_identifier: CBDB:636885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.282Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RWAqB32sgqsXXeu8fKNk8G
        subject_person_id: p_ryM3jWQ36Hd9FhFqKJbG9J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大倫，清人物。籍贯廣東省，入仕行伍，曾任右營遊擊。（中国历代人物传记资料库 CBDB 636885）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JXcg8zZGvABKlRf6JSnp7Z
          claim_id: c_RWAqB32sgqsXXeu8fKNk8G
          source_id: s_PeheQLxQJWmtjkXyRqAm19
          stance: supports
          locator: CBDB:636885
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

# 王大倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大倫 | accepted |
| bio.summary | 王大倫，清人物。籍贯廣東省，入仕行伍，曾任右營遊擊。（中国历代人物传记资料库 CBDB 636885） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大倫（CBDB 636885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636885&o=json)
