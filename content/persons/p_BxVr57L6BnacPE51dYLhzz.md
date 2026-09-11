---
schema: wang-person/v1
id: p_BxVr57L6BnacPE51dYLhzz
status: active
merged_into: null
display_name: 王枚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iy5cgEjA6BeJbcP5X8sdsS
        subject_person_id: p_BxVr57L6BnacPE51dYLhzz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王枚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oho5VP3x35e1fe2uqepF7M
          claim_id: c_iy5cgEjA6BeJbcP5X8sdsS
          source_id: s_L6h4y2JCPLPaeC3eUgxEck
          stance: supports
          locator: CBDB:343327
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343327）
          source: &a1
            id: s_L6h4y2JCPLPaeC3eUgxEck
            source_type: api_record
            title: 中国历代人物传记资料库：王枚（CBDB 343327）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343327&o=json
            external_identifier: CBDB:343327
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.296Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DBhb6eM1ChnY43z7tj1CEQ
        subject_person_id: p_BxVr57L6BnacPE51dYLhzz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王枚，清人物。明清進士進士，籍贯慈溪，入仕進士。（中国历代人物传记资料库 CBDB 343327）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EVJCjK0YveMN1T0AjWdtf2
          claim_id: c_DBhb6eM1ChnY43z7tj1CEQ
          source_id: s_L6h4y2JCPLPaeC3eUgxEck
          stance: supports
          locator: CBDB:343327
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

# 王枚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王枚 | accepted |
| bio.summary | 王枚，清人物。明清進士進士，籍贯慈溪，入仕進士。（中国历代人物传记资料库 CBDB 343327） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王枚（CBDB 343327）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343327&o=json)
