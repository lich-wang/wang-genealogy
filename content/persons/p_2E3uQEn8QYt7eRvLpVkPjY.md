---
schema: wang-person/v1
id: p_2E3uQEn8QYt7eRvLpVkPjY
status: active
merged_into: null
display_name: 王會元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M1N7vycSWTZEZWHQCVn1fF
        subject_person_id: p_2E3uQEn8QYt7eRvLpVkPjY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BQbLVdeCGsCfCknmKUxvG6
          claim_id: c_M1N7vycSWTZEZWHQCVn1fF
          source_id: s_KWx4HAzWWiKSrDYVburFAc
          stance: supports
          locator: CBDB:638568
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638568）
          source: &a1
            id: s_KWx4HAzWWiKSrDYVburFAc
            source_type: api_record
            title: 中国历代人物传记资料库：王會元（CBDB 638568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638568&o=json
            external_identifier: CBDB:638568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GyxkL9RziEjmQbjKzGX7My
        subject_person_id: p_2E3uQEn8QYt7eRvLpVkPjY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王會元，清人物。籍贯陳州府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 638568）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w1ItM5OI-SEseMwV1d9Fnc
          claim_id: c_GyxkL9RziEjmQbjKzGX7My
          source_id: s_KWx4HAzWWiKSrDYVburFAc
          stance: supports
          locator: CBDB:638568
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

# 王會元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會元 | accepted |
| bio.summary | 王會元，清人物。籍贯陳州府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 638568） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王會元（CBDB 638568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638568&o=json)
