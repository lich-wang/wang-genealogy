---
schema: wang-person/v1
id: p_WsQdswFPVeJMXASRh62LhN
status: active
merged_into: null
display_name: 王銳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s5bN1ZF9hUzKiPfjjLoNGC
        subject_person_id: p_WsQdswFPVeJMXASRh62LhN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HM8ev5xCHbn3zzVFBowKWq
          claim_id: c_s5bN1ZF9hUzKiPfjjLoNGC
          source_id: s_x6ZScvTWfX4JEehxSsAu7M
          stance: supports
          locator: CBDB:192093
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192093）
          source: &a1
            id: s_x6ZScvTWfX4JEehxSsAu7M
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 192093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192093&o=json
            external_identifier: CBDB:192093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.389Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_KPnVTFhF4vAxvRWFFnRvpp
        subject_person_id: p_WsQdswFPVeJMXASRh62LhN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 766年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SiYMtG5YqMQDuySHqACznc
          claim_id: c_KPnVTFhF4vAxvRWFFnRvpp
          source_id: s_x6ZScvTWfX4JEehxSsAu7M
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
        id: c_vQ9gg87DgmNoxpjVN7Ppd9
        subject_person_id: p_WsQdswFPVeJMXASRh62LhN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳（卒于766年），唐人物。籍贯同州，曾任縣主簿。（中国历代人物传记资料库 CBDB 192093）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PTK1OuaXpYHZfqe14VYef0
          claim_id: c_vQ9gg87DgmNoxpjVN7Ppd9
          source_id: s_x6ZScvTWfX4JEehxSsAu7M
          stance: supports
          locator: CBDB:192093
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zrpvDeA8m9Ev3Grb7j2t6u
        subject_person_id: p_Xo72nBkt9GeaSUwYosPGVj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WsQdswFPVeJMXASRh62LhN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hGDdvPJOAA1MPIf_w85z2L
          claim_id: c_zrpvDeA8m9Ev3Grb7j2t6u
          source_id: s_x6ZScvTWfX4JEehxSsAu7M
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Xo72nBkt9GeaSUwYosPGVj
        status: active
        display_name: 王貫
        merged_into_person_id: null
  children:
    - claim:
        id: c_H2hGsoXKoeZRJ1DKRt-A3A
        subject_person_id: p_WsQdswFPVeJMXASRh62LhN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5CTwruY7yW5nTk6MMQRgu2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8bP5p89QNL2Twch5i6rL59
          claim_id: c_H2hGsoXKoeZRJ1DKRt-A3A
          source_id: s_PkErSKEdFmSqE2SS4nrGxJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PkErSKEdFmSqE2SS4nrGxJ
            source_type: api_record
            title: 中国历代人物传记资料库：王秘（CBDB 192092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192092&o=json
            external_identifier: CBDB:192092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.388Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5CTwruY7yW5nTk6MMQRgu2
        status: active
        display_name: 王秘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳 | accepted |
| death.date | 766年 | accepted |
| bio.summary | 王銳（卒于766年），唐人物。籍贯同州，曾任縣主簿。（中国历代人物传记资料库 CBDB 192093） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xo72nBkt9GeaSUwYosPGVj | 王貫 | accepted |
| children | p_5CTwruY7yW5nTk6MMQRgu2 | 王秘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秘（CBDB 192092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192092&o=json)
- [中国历代人物传记资料库：王銳（CBDB 192093）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192093&o=json)
