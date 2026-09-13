---
schema: wang-person/v1
id: p_xEHw9dCD6Nqfs9ejJPDUUE
status: active
merged_into: null
display_name: 王文貞
cbdb_id: 162295
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KddjztaqQSbu9XtJJiSGzy
        subject_person_id: p_xEHw9dCD6Nqfs9ejJPDUUE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文貞，唐人物。籍贯琅琊。（中国历代人物传记资料库 CBDB 162295）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5MDjMfiPLEQrWUPlZqF5H9
          claim_id: c_KddjztaqQSbu9XtJJiSGzy
          source_id: s_E9fwedprRFYNeniBhhKfdb
          stance: supports
          locator: CBDB:162295
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_E9fwedprRFYNeniBhhKfdb
            source_type: api_record
            title: 中国历代人物传记资料库：王文貞（CBDB 162295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162295&o=json
            external_identifier: CBDB:162295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2mxGkg96zfoLHwT1wk6E9y
        subject_person_id: p_xEHw9dCD6Nqfs9ejJPDUUE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gMfvJcPyL2k8sQAx5cxezC
          claim_id: c_2mxGkg96zfoLHwT1wk6E9y
          source_id: s_E9fwedprRFYNeniBhhKfdb
          stance: supports
          locator: CBDB:162295
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wTTYRRhovV6vA5WikyGkRl
        subject_person_id: p_B5KZt7a7y3pDdyg18Yfg3Y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xEHw9dCD6Nqfs9ejJPDUUE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kbNnQ8cMprVHPxbPYeASo-
          claim_id: c_wTTYRRhovV6vA5WikyGkRl
          source_id: s_hhLZZVAQJy3rSAS5gYjS5Y
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Longshuo27：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hhLZZVAQJy3rSAS5gYjS5Y
            source_type: api_record
            title: 中国历代人物传记资料库：王方大（CBDB 142534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142534&o=json
            external_identifier: CBDB:142534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.217Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_B5KZt7a7y3pDdyg18Yfg3Y
        status: active
        display_name: 王方大
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文貞，唐人物。籍贯琅琊。（中国历代人物传记资料库 CBDB 162295） | accepted |
| name.primary | 王文貞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B5KZt7a7y3pDdyg18Yfg3Y | 王方大 | accepted |

## 外部来源

- [中国历代人物传记资料库：王方大（CBDB 142534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142534&o=json)
- [中国历代人物传记资料库：王文貞（CBDB 162295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162295&o=json)
