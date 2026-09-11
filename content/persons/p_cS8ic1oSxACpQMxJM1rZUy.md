---
schema: wang-person/v1
id: p_cS8ic1oSxACpQMxJM1rZUy
status: active
merged_into: null
display_name: 王岩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eMzg8QmkULYCoL8rLEA3DP
        subject_person_id: p_cS8ic1oSxACpQMxJM1rZUy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岩
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5kHEsaFu8ELFfb8pxVWTMp
          claim_id: c_eMzg8QmkULYCoL8rLEA3DP
          source_id: s_5XUf74FSHTSoKSkaikM4bT
          stance: supports
          locator: CBDB:71104
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71104）
          source: &a1
            id: s_5XUf74FSHTSoKSkaikM4bT
            source_type: api_record
            title: 中国历代人物传记资料库：王岩（CBDB 71104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71104&o=json
            external_identifier: CBDB:71104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EMhyrK4iDr8g4WjE2J5S4N
        subject_person_id: p_cS8ic1oSxACpQMxJM1rZUy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1605年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_96vtbvydaJ52wdUSwfCBeD
          claim_id: c_EMhyrK4iDr8g4WjE2J5S4N
          source_id: s_5XUf74FSHTSoKSkaikM4bT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4DMras3wohRVdo7RGaJKaM
        subject_person_id: p_cS8ic1oSxACpQMxJM1rZUy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岩（生于1605年），清人物。籍贯寶應。（中国历代人物传记资料库 CBDB 71104）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MoCvuJcAJTNlOrQTjxL2qz
          claim_id: c_4DMras3wohRVdo7RGaJKaM
          source_id: s_5XUf74FSHTSoKSkaikM4bT
          stance: supports
          locator: CBDB:71104
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

# 王岩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王岩 | accepted |
| birth.date | 1605年 | accepted |
| bio.summary | 王岩（生于1605年），清人物。籍贯寶應。（中国历代人物传记资料库 CBDB 71104） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王岩（CBDB 71104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71104&o=json)
