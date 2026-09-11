---
schema: wang-person/v1
id: p_zYXhpkznuXwAQtmJKGgBs3
status: active
merged_into: null
display_name: 王俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YY8QAbMKiKCDPZws4EuVGt
        subject_person_id: p_zYXhpkznuXwAQtmJKGgBs3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SXjH8ohiiPg52wbpD53Xek
          claim_id: c_YY8QAbMKiKCDPZws4EuVGt
          source_id: s_a1nAmX5MZhWC3oR38BWCke
          stance: supports
          locator: CBDB:452541
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（452541）
          source: &a1
            id: s_a1nAmX5MZhWC3oR38BWCke
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 452541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452541&o=json
            external_identifier: CBDB:452541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZFiHPBN8VEWbSnGagPwQjc
        subject_person_id: p_zYXhpkznuXwAQtmJKGgBs3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊，宋人物。曾任縣令。（中国历代人物传记资料库 CBDB 452541）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-lVzTKDk8Ls8fbdXFoAhqi
          claim_id: c_ZFiHPBN8VEWbSnGagPwQjc
          source_id: s_a1nAmX5MZhWC3oR38BWCke
          stance: supports
          locator: CBDB:452541
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

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | 王俊，宋人物。曾任縣令。（中国历代人物传记资料库 CBDB 452541） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 452541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452541&o=json)
