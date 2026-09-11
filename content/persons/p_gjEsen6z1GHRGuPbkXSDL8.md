---
schema: wang-person/v1
id: p_gjEsen6z1GHRGuPbkXSDL8
status: active
merged_into: null
display_name: 王連彩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_okz2rWVYNMHShnHQ8Ww1A5
        subject_person_id: p_gjEsen6z1GHRGuPbkXSDL8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王連彩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4A2uCmgW3q9eMgBrydy7cc
          claim_id: c_okz2rWVYNMHShnHQ8Ww1A5
          source_id: s_8Ah7FzLN759RiUW7pMpC2M
          stance: supports
          locator: CBDB:640417
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640417）
          source: &a1
            id: s_8Ah7FzLN759RiUW7pMpC2M
            source_type: api_record
            title: 中国历代人物传记资料库：王連彩（CBDB 640417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640417&o=json
            external_identifier: CBDB:640417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.252Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b9aBQ258L4Ctb238DopMHB
        subject_person_id: p_gjEsen6z1GHRGuPbkXSDL8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王連彩，清人物。籍贯豐潤，曾任藍翎侍衛。（中国历代人物传记资料库 CBDB 640417）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Zl8VRktBy2jFyFc3UQItmb
          claim_id: c_b9aBQ258L4Ctb238DopMHB
          source_id: s_8Ah7FzLN759RiUW7pMpC2M
          stance: supports
          locator: CBDB:640417
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

# 王連彩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王連彩 | accepted |
| bio.summary | 王連彩，清人物。籍贯豐潤，曾任藍翎侍衛。（中国历代人物传记资料库 CBDB 640417） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王連彩（CBDB 640417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640417&o=json)
