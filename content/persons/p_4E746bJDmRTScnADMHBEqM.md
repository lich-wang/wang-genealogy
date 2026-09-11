---
schema: wang-person/v1
id: p_4E746bJDmRTScnADMHBEqM
status: active
merged_into: null
display_name: 王超烈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7hTzaiT3GdhoKxQv4gdURw
        subject_person_id: p_4E746bJDmRTScnADMHBEqM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王超烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EeikRCxNE2dkqfG3GoaaXt
          claim_id: c_7hTzaiT3GdhoKxQv4gdURw
          source_id: s_DQ8f6YZ7krJg2fKu2aMFLg
          stance: supports
          locator: CBDB:640362
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640362）
          source: &a1
            id: s_DQ8f6YZ7krJg2fKu2aMFLg
            source_type: api_record
            title: 中国历代人物传记资料库：王超烈（CBDB 640362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640362&o=json
            external_identifier: CBDB:640362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.235Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pVxDFNEn5EnLVPuDb6TCKe
        subject_person_id: p_4E746bJDmRTScnADMHBEqM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王超烈，清人物。籍贯沂州，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640362）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S8rux3qXF9Dm6KzTJv3bnZ
          claim_id: c_pVxDFNEn5EnLVPuDb6TCKe
          source_id: s_DQ8f6YZ7krJg2fKu2aMFLg
          stance: supports
          locator: CBDB:640362
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

# 王超烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王超烈 | accepted |
| bio.summary | 王超烈，清人物。籍贯沂州，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640362） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王超烈（CBDB 640362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640362&o=json)
