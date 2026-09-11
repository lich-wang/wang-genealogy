---
schema: wang-person/v1
id: p_44KAP5Fb5E2otJ3zj8FAG8
status: active
merged_into: null
display_name: 王學蘇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MuSMJBRzVt3H8P53X3Byb1
        subject_person_id: p_44KAP5Fb5E2otJ3zj8FAG8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學蘇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RrVsm5Tr9emm4uUzdWAavQ
          claim_id: c_MuSMJBRzVt3H8P53X3Byb1
          source_id: s_h3a9tHi5F24wVgXzxHhdfH
          stance: supports
          locator: CBDB:303182
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303182）
          source: &a1
            id: s_h3a9tHi5F24wVgXzxHhdfH
            source_type: api_record
            title: 中国历代人物传记资料库：王學蘇（CBDB 303182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303182&o=json
            external_identifier: CBDB:303182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nEiANkUNhWqZeYRm3MkBKp
        subject_person_id: p_44KAP5Fb5E2otJ3zj8FAG8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學蘇，明人物。嘉靖二十年進士，籍贯澤州。（中国历代人物传记资料库 CBDB 303182）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i1iGUgahu3XjvY8npJ6D4y
          claim_id: c_nEiANkUNhWqZeYRm3MkBKp
          source_id: s_h3a9tHi5F24wVgXzxHhdfH
          stance: supports
          locator: CBDB:303182
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

# 王學蘇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學蘇 | accepted |
| bio.summary | 王學蘇，明人物。嘉靖二十年進士，籍贯澤州。（中国历代人物传记资料库 CBDB 303182） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學蘇（CBDB 303182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303182&o=json)
