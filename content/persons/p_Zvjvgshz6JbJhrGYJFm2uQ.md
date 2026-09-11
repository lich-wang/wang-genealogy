---
schema: wang-person/v1
id: p_Zvjvgshz6JbJhrGYJFm2uQ
status: active
merged_into: null
display_name: 王剛中
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cg1LceU13cNRVsSe55pKVC
        subject_person_id: p_Zvjvgshz6JbJhrGYJFm2uQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王剛中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J1HbhbCbY1gf3XKeuANdqU
          claim_id: c_Cg1LceU13cNRVsSe55pKVC
          source_id: s_eEepmYZas84z15WXEpE1gV
          stance: supports
          locator: CBDB:8151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（8151）
          source: &a1
            id: s_eEepmYZas84z15WXEpE1gV
            source_type: api_record
            title: 中国历代人物传记资料库：王剛中（CBDB 8151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8151&o=json
            external_identifier: CBDB:8151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.497Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_T5zuc6PxPKP5Zbhqp4R3uA
        subject_person_id: p_Zvjvgshz6JbJhrGYJFm2uQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1103年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3wGwZ1rkx3Vu5Zz6581rH3
          claim_id: c_T5zuc6PxPKP5Zbhqp4R3uA
          source_id: s_eEepmYZas84z15WXEpE1gV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Pg8Q5RdZaggsaGqE3XvBG7
        subject_person_id: p_Zvjvgshz6JbJhrGYJFm2uQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1165年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cEwyZFwuX9HrhL8ENpMxL8
          claim_id: c_Pg8Q5RdZaggsaGqE3XvBG7
          source_id: s_eEepmYZas84z15WXEpE1gV
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
        id: c_ScX7BL1oQMxZQiLuURGbce
        subject_person_id: p_Zvjvgshz6JbJhrGYJFm2uQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王剛中（1103年—1165年），宋人物。籍贯樂平，入仕進士，曾任同知樞密院事、朝散大夫、翰林學士。（中国历代人物传记资料库 CBDB 8151）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K4JxkRkpOPaKIz-QKkGyXW
          claim_id: c_ScX7BL1oQMxZQiLuURGbce
          source_id: s_eEepmYZas84z15WXEpE1gV
          stance: supports
          locator: CBDB:8151
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Z-JN0Q2J_75_MPj_z0YLka
        subject_person_id: p_3S1gvg5vQ6RL1wu23AJHJk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zvjvgshz6JbJhrGYJFm2uQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gcd71yWuL_DLi866q01FTZ
          claim_id: c_Z-JN0Q2J_75_MPj_z0YLka
          source_id: s_aKuiPaAct5MkYs4dfRfBVJ
          stance: supports
          locator: CBDB 双向互证（子 王剛中 ⇄ 父 王憲）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_aKuiPaAct5MkYs4dfRfBVJ
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 22091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22091&o=json
            external_identifier: CBDB:22091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.822Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3S1gvg5vQ6RL1wu23AJHJk
        status: active
        display_name: 王憲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_hM1M3h-IzuYb-AXzTkywTI
        subject_person_id: p_Zvjvgshz6JbJhrGYJFm2uQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oFC3wF68J8VCT2GFg7Cheh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TTP1QeYT9q75p6mAjrCMxs
          claim_id: c_hM1M3h-IzuYb-AXzTkywTI
          source_id: s_eEepmYZas84z15WXEpE1gV
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1824：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oFC3wF68J8VCT2GFg7Cheh
        status: active
        display_name: 王晉老
        merged_into_person_id: null
    - claim:
        id: c_gUz-uxTXVYtGo-ogSyVcfw
        subject_person_id: p_Zvjvgshz6JbJhrGYJFm2uQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vxVwgM9AvULBdi7p7TP9FE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R0L9dbxfudixxSS0sotVG9
          claim_id: c_gUz-uxTXVYtGo-ogSyVcfw
          source_id: s_eEepmYZas84z15WXEpE1gV
          stance: supports
          locator: CBDB 双向互证（孫 王元老 ⇄ 祖父 王剛中）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_vxVwgM9AvULBdi7p7TP9FE
        status: active
        display_name: 王元老
        merged_into_person_id: null
  other: []
---

# 王剛中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王剛中 | accepted |
| birth.date | 1103年 | accepted |
| death.date | 1165年 | accepted |
| bio.summary | 王剛中（1103年—1165年），宋人物。籍贯樂平，入仕進士，曾任同知樞密院事、朝散大夫、翰林學士。（中国历代人物传记资料库 CBDB 8151） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3S1gvg5vQ6RL1wu23AJHJk | 王憲 | accepted |
| descendants | p_oFC3wF68J8VCT2GFg7Cheh | 王晉老 | accepted |
| descendants | p_vxVwgM9AvULBdi7p7TP9FE | 王元老 | accepted |

## 外部来源

- [中国历代人物传记资料库：王剛中（CBDB 8151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8151&o=json)
- [中国历代人物传记资料库：王憲（CBDB 22091）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22091&o=json)
