---
schema: wang-person/v1
id: p_e2o94MbpJJ2QJ9VhCZ1Pb3
status: active
merged_into: null
display_name: 王元素
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w9vCYsaSTm4mN4mwUTLQ4f
        subject_person_id: p_e2o94MbpJJ2QJ9VhCZ1Pb3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TAWa7Rs5mBpFj8FhX7kL3G
          claim_id: c_w9vCYsaSTm4mN4mwUTLQ4f
          source_id: s_GpYSJKsQ1rYrmVE39Hi3ME
          stance: supports
          locator: CBDB:194720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（194720）
          source: &a1
            id: s_GpYSJKsQ1rYrmVE39Hi3ME
            source_type: api_record
            title: 中国历代人物传记资料库：王元素（CBDB 194720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194720&o=json
            external_identifier: CBDB:194720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.455Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_98KmiFxmHUVVX2WYd42ts8
        subject_person_id: p_e2o94MbpJJ2QJ9VhCZ1Pb3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 626年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TQmhUpmuzyPkybT2V7S2g7
          claim_id: c_98KmiFxmHUVVX2WYd42ts8
          source_id: s_GpYSJKsQ1rYrmVE39Hi3ME
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CB8k16AipPtGeLTq8Ju8h8
        subject_person_id: p_e2o94MbpJJ2QJ9VhCZ1Pb3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元素（卒于626年），唐人物。籍贯濮陽，曾任州司倉參軍。（中国历代人物传记资料库 CBDB 194720）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zSe9HvJAB78fqX3x5KnbHF
          claim_id: c_CB8k16AipPtGeLTq8Ju8h8
          source_id: s_GpYSJKsQ1rYrmVE39Hi3ME
          stance: supports
          locator: CBDB:194720
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_113MxgJHGXBTsttZ_yHbCU
        subject_person_id: p_e2o94MbpJJ2QJ9VhCZ1Pb3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JxEYiWJMLgfMQCKTGKDyVa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_emzCo5_UtFePyQ4eGbgjvx
          claim_id: c_113MxgJHGXBTsttZ_yHbCU
          source_id: s_GpYSJKsQ1rYrmVE39Hi3ME
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JxEYiWJMLgfMQCKTGKDyVa
        status: active
        display_name: 王瓌
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元素 | accepted |
| death.date | 626年 | accepted |
| bio.summary | 王元素（卒于626年），唐人物。籍贯濮陽，曾任州司倉參軍。（中国历代人物传记资料库 CBDB 194720） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_JxEYiWJMLgfMQCKTGKDyVa | 王瓌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元素（CBDB 194720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194720&o=json)
