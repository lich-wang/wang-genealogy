---
schema: wang-person/v1
id: p_Vp1FNTZGTYbMMofE7BZv76
status: active
merged_into: null
display_name: 王騰望
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z9ovgvBCJCRMHyRa7nrMcz
        subject_person_id: p_Vp1FNTZGTYbMMofE7BZv76
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騰望
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zAowD2L8TCj8x5ECHXN8m8
          claim_id: c_z9ovgvBCJCRMHyRa7nrMcz
          source_id: s_nj5BrFGg31tFni1ba6LDTM
          stance: supports
          locator: CBDB:640898
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640898）
          source: &a1
            id: s_nj5BrFGg31tFni1ba6LDTM
            source_type: api_record
            title: 中国历代人物传记资料库：王騰望（CBDB 640898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640898&o=json
            external_identifier: CBDB:640898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.406Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Den6GAS5K61G22q3EcEgLt
        subject_person_id: p_Vp1FNTZGTYbMMofE7BZv76
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騰望，清人物。籍贯建德，入仕監生，曾任知事。（中国历代人物传记资料库 CBDB 640898）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PF-qfcbbthGHYSvq4fVGSa
          claim_id: c_Den6GAS5K61G22q3EcEgLt
          source_id: s_nj5BrFGg31tFni1ba6LDTM
          stance: supports
          locator: CBDB:640898
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

# 王騰望

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王騰望 | accepted |
| bio.summary | 王騰望，清人物。籍贯建德，入仕監生，曾任知事。（中国历代人物传记资料库 CBDB 640898） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王騰望（CBDB 640898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640898&o=json)
