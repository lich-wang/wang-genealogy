---
schema: wang-person/v1
id: p_fZbrWDsmveSsmxodQqTf8K
status: active
merged_into: null
display_name: 王恕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HX8rTsg1HpnxJ37CngQSL8
        subject_person_id: p_fZbrWDsmveSsmxodQqTf8K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H4RJV75Xc85o6xL34tLXxk
          claim_id: c_HX8rTsg1HpnxJ37CngQSL8
          source_id: s_vx8xdWMFBiLMeGwZMbJQAc
          stance: supports
          locator: CBDB:38022
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38022）
          source: &a1
            id: s_vx8xdWMFBiLMeGwZMbJQAc
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 38022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38022&o=json
            external_identifier: CBDB:38022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.327Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7UBjRN78A9rzPQZje2ZVhA
        subject_person_id: p_fZbrWDsmveSsmxodQqTf8K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕，宋人物。籍贯寧海，入仕進士，曾任宣教郎。（中国历代人物传记资料库 CBDB 38022）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZqIgxijXT7AbUlbDQhcnr8
          claim_id: c_7UBjRN78A9rzPQZje2ZVhA
          source_id: s_vx8xdWMFBiLMeGwZMbJQAc
          stance: supports
          locator: CBDB:38022
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
  other:
    - claim:
        id: c_Pgpee-8ZVYVg4QcLkWx13t
        subject_person_id: p_AAxQGZ484s4cB5whrDBc9J
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fZbrWDsmveSsmxodQqTf8K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2IhcW_MhmdmMfWyjcX8xcJ
          claim_id: c_Pgpee-8ZVYVg4QcLkWx13t
          source_id: s_R9Nrg8JoL0BNLvqcpiOr8K
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 38022 王恕）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_R9Nrg8JoL0BNLvqcpiOr8K
            source_type: api_record
            title: 中国历代人物传记资料库：王齊輿（CBDB 38086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38086&o=json
            external_identifier: CBDB:38086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AAxQGZ484s4cB5whrDBc9J
        status: active
        display_name: 王齊輿
        merged_into_person_id: null
---

# 王恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恕 | accepted |
| bio.summary | 王恕，宋人物。籍贯寧海，入仕進士，曾任宣教郎。（中国历代人物传记资料库 CBDB 38022） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_AAxQGZ484s4cB5whrDBc9J | 王齊輿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王齊輿（CBDB 38086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38086&o=json)
- [中国历代人物传记资料库：王恕（CBDB 38022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38022&o=json)
