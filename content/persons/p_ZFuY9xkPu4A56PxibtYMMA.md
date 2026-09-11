---
schema: wang-person/v1
id: p_ZFuY9xkPu4A56PxibtYMMA
status: active
merged_into: null
display_name: 王延齡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bNTWsP68KFKnJqfk3yexCN
        subject_person_id: p_ZFuY9xkPu4A56PxibtYMMA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_haTDf7J4LAwn1rJ4PSRg6Q
          claim_id: c_bNTWsP68KFKnJqfk3yexCN
          source_id: s_2363VsPXWYNCP2xSB1ZdQP
          stance: supports
          locator: CBDB:637476
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637476）
          source: &a1
            id: s_2363VsPXWYNCP2xSB1ZdQP
            source_type: api_record
            title: 中国历代人物传记资料库：王延齡（CBDB 637476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637476&o=json
            external_identifier: CBDB:637476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.407Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yF4y321J2zKAgFf4Cs8E8z
        subject_person_id: p_ZFuY9xkPu4A56PxibtYMMA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延齡，清人物。籍贯天門，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637476）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wYSgDpbux98jXe8gdOG27Z
          claim_id: c_yF4y321J2zKAgFf4Cs8E8z
          source_id: s_2363VsPXWYNCP2xSB1ZdQP
          stance: supports
          locator: CBDB:637476
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

# 王延齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延齡 | accepted |
| bio.summary | 王延齡，清人物。籍贯天門，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637476） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王延齡（CBDB 637476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637476&o=json)
