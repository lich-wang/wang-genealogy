---
schema: wang-person/v1
id: p_SzmudFANutLUNPFEfPb11q
status: active
merged_into: null
display_name: 王定甡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LA3ECpzXd8p64zsvaaisZn
        subject_person_id: p_SzmudFANutLUNPFEfPb11q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定甡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5kVqPGfEVcM64e3zHL99ub
          claim_id: c_LA3ECpzXd8p64zsvaaisZn
          source_id: s_BEj87M7ttBck2YGc13b8ji
          stance: supports
          locator: CBDB:576099
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576099）
          source: &a1
            id: s_BEj87M7ttBck2YGc13b8ji
            source_type: api_record
            title: 中国历代人物传记资料库：王定甡（CBDB 576099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576099&o=json
            external_identifier: CBDB:576099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.699Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1YfzsQQESuKzpSyFPQQCaF
        subject_person_id: p_SzmudFANutLUNPFEfPb11q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定甡，清人物。籍贯正定，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576099）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FFAVhvbtgjS1INstGwKBKU
          claim_id: c_1YfzsQQESuKzpSyFPQQCaF
          source_id: s_BEj87M7ttBck2YGc13b8ji
          stance: supports
          locator: CBDB:576099
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

# 王定甡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定甡 | accepted |
| bio.summary | 王定甡，清人物。籍贯正定，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576099） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定甡（CBDB 576099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576099&o=json)
