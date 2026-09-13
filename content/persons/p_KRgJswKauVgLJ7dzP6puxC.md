---
schema: wang-person/v1
id: p_KRgJswKauVgLJ7dzP6puxC
status: active
merged_into: null
display_name: 王新運
cbdb_id: 414758
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gVxECxaP4TJ4V1CVYQ6NTH
        subject_person_id: p_KRgJswKauVgLJ7dzP6puxC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新運，清人物。曾任訓導。（中国历代人物传记资料库 CBDB 414758）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_oiQIFuLsQL9ilGdDTrtlfA
          claim_id: c_gVxECxaP4TJ4V1CVYQ6NTH
          source_id: s_BXeuAiApuvGuLnhJqT7qQU
          stance: supports
          locator: CBDB:414758
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BXeuAiApuvGuLnhJqT7qQU
            source_type: api_record
            title: 中国历代人物传记资料库：王新運（CBDB 414758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414758&o=json
            external_identifier: CBDB:414758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:38.799Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nx8R4vq2eGtY8MxvE1cofo
        subject_person_id: p_KRgJswKauVgLJ7dzP6puxC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新運
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pTHXs5orQMwTACat8AkvKE
          claim_id: c_Nx8R4vq2eGtY8MxvE1cofo
          source_id: s_BXeuAiApuvGuLnhJqT7qQU
          stance: supports
          locator: CBDB:414758
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5701-5800）｜历史性依据：CBDB 朝代 = 清
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

# 王新運

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王新運，清人物。曾任訓導。（中国历代人物传记资料库 CBDB 414758） | accepted |
| name.primary | 王新運 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王新運（CBDB 414758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414758&o=json)
