---
schema: wang-person/v1
id: p_BZq6RRGKhw4BNUyBCvMgpE
status: active
merged_into: null
display_name: 王炳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Jv6bjNGEVAW38iLgLSxid
        subject_person_id: p_BZq6RRGKhw4BNUyBCvMgpE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J91PmY1T4uiNEj3hsnD4nM
          claim_id: c_4Jv6bjNGEVAW38iLgLSxid
          source_id: s_6hkiCUp7gdXmwQguww1Nzb
          stance: supports
          locator: CBDB:38247
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38247）
          source: &a1
            id: s_6hkiCUp7gdXmwQguww1Nzb
            source_type: api_record
            title: 中国历代人物传记资料库：王炳（CBDB 38247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38247&o=json
            external_identifier: CBDB:38247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.399Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KFQuJ9ZRL764P6t8BgtnKi
        subject_person_id: p_BZq6RRGKhw4BNUyBCvMgpE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳，宋人物。曾任尚書省兵部職方司員外郎。（中国历代人物传记资料库 CBDB 38247）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IwhLy9xUF5YA3iTJwu9C95
          claim_id: c_KFQuJ9ZRL764P6t8BgtnKi
          source_id: s_6hkiCUp7gdXmwQguww1Nzb
          stance: supports
          locator: CBDB:38247
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

# 王炳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳 | accepted |
| bio.summary | 王炳，宋人物。曾任尚書省兵部職方司員外郎。（中国历代人物传记资料库 CBDB 38247） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炳（CBDB 38247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38247&o=json)
