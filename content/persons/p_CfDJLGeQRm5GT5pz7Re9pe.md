---
schema: wang-person/v1
id: p_CfDJLGeQRm5GT5pz7Re9pe
status: active
merged_into: null
display_name: 王瑜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d1vJKMsZS1y6EKc59NKKC8
        subject_person_id: p_CfDJLGeQRm5GT5pz7Re9pe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_29RMhASH3tjhwkA7UTJfX1
          claim_id: c_d1vJKMsZS1y6EKc59NKKC8
          source_id: s_K6K9AHDcPZNSVWq15nKQK6
          stance: supports
          locator: CBDB:175678
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175678）
          source: &a1
            id: s_K6K9AHDcPZNSVWq15nKQK6
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 175678）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175678&o=json
            external_identifier: CBDB:175678
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.053Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_SYVr4dX5YG7aQTeC9P3AZs
        subject_person_id: p_CfDJLGeQRm5GT5pz7Re9pe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 663年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BUgVBqYk1CXLJV16uKqxkY
          claim_id: c_SYVr4dX5YG7aQTeC9P3AZs
          source_id: s_K6K9AHDcPZNSVWq15nKQK6
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
        id: c_qcRQRjiiqBioWEAvrH9dMG
        subject_person_id: p_CfDJLGeQRm5GT5pz7Re9pe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜（卒于663年），唐人物。籍贯琅琊，曾任侍御史。（中国历代人物传记资料库 CBDB 175678）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pl6j-rljiEqL8Ld28R92E5
          claim_id: c_qcRQRjiiqBioWEAvrH9dMG
          source_id: s_K6K9AHDcPZNSVWq15nKQK6
          stance: supports
          locator: CBDB:175678
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mBcCCxfG6wGrdKBr7Y4_xg
        subject_person_id: p_oLa6u987MQb63j3ya1tAqU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CfDJLGeQRm5GT5pz7Re9pe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__pk_7s6lvHqCv_rLwt3MtY
          claim_id: c_mBcCCxfG6wGrdKBr7Y4_xg
          source_id: s_K6K9AHDcPZNSVWq15nKQK6
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oLa6u987MQb63j3ya1tAqU
        status: active
        display_name: 王德素
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑜 | accepted |
| death.date | 663年 | accepted |
| bio.summary | 王瑜（卒于663年），唐人物。籍贯琅琊，曾任侍御史。（中国历代人物传记资料库 CBDB 175678） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oLa6u987MQb63j3ya1tAqU | 王德素 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑜（CBDB 175678）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175678&o=json)
