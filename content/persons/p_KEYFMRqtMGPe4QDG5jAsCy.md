---
schema: wang-person/v1
id: p_KEYFMRqtMGPe4QDG5jAsCy
status: active
merged_into: null
display_name: 崔夫人
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fLYwGpQAgi7Ku8uGCH7CdY
        subject_person_id: p_KEYFMRqtMGPe4QDG5jAsCy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 崔夫人
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WypCqRc1Q1GC8eP1ZV4i87
          claim_id: c_fLYwGpQAgi7Ku8uGCH7CdY
          source_id: s_XqG8bMamF8R9wahUh53HeM
          stance: supports
          locator: Q4846238
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_XqG8bMamF8R9wahUh53HeM
            source_type: api_record
            title: 维基数据：崔夫人（Q4846238）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4846238
            external_identifier: Q4846238
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%B4%94%E5%A4%AB%E4%BA%BA_(%E7%8E%8B%E5%BB%B6%E7%BF%B0)
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_XQ5TUqioaGvizrK1QJubd1
        subject_person_id: p_4k5q41Lpp3YxQt3HUJUmD9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KEYFMRqtMGPe4QDG5jAsCy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zvZMHxkGx5iF4wGwu7K31x
          claim_id: c_XQ5TUqioaGvizrK1QJubd1
          source_id: s_iOlXOmA7ram19ksFDez7ri
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_iOlXOmA7ram19ksFDez7ri
            source_type: website
            title: 中文维基百科：王延翰
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E7%BF%B0
            external_identifier: Q2109907
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T14:17:42.905Z
            metadata_json: null
        - id: cs_DaEV8AySXr757VhtwuyhDx
          claim_id: c_XQ5TUqioaGvizrK1QJubd1
          source_id: s_XqG8bMamF8R9wahUh53HeM
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_4k5q41Lpp3YxQt3HUJUmD9
        status: active
        display_name: 王延翰
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 崔夫人

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 崔夫人 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4k5q41Lpp3YxQt3HUJUmD9 | 王延翰 | accepted |

## 外部来源

- [维基数据：崔夫人（Q4846238）](https://www.wikidata.org/wiki/Q4846238)
- [中文维基百科：王延翰](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E7%BF%B0)
