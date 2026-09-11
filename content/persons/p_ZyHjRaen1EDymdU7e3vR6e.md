---
schema: wang-person/v1
id: p_ZyHjRaen1EDymdU7e3vR6e
status: active
merged_into: null
display_name: 王鳴盛
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pRGxGxmTtU1x4iFMVN4VvJ
        subject_person_id: p_ZyHjRaen1EDymdU7e3vR6e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴盛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5ciWmvBucv7axFsZ2jncuH
          claim_id: c_pRGxGxmTtU1x4iFMVN4VvJ
          source_id: s_hmRPxUWfAta8p1JV8P6aso
          stance: supports
          locator: CBDB:29898
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29898）
          source: &a1
            id: s_hmRPxUWfAta8p1JV8P6aso
            source_type: api_record
            title: 中国历代人物传记资料库：王鳴盛（CBDB 29898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29898&o=json
            external_identifier: CBDB:29898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.011Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oXMsw3mw8yuQr6aouz59Ew
        subject_person_id: p_ZyHjRaen1EDymdU7e3vR6e
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1722年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q7e3putdGvfWCYA1Y9CYHs
          claim_id: c_oXMsw3mw8yuQr6aouz59Ew
          source_id: s_hmRPxUWfAta8p1JV8P6aso
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
        id: c_gGxKGNrtwMG8LmceGZLKFo
        subject_person_id: p_ZyHjRaen1EDymdU7e3vR6e
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1797年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zHqzwm7XgqDBzE4i9gDJWV
          claim_id: c_gGxKGNrtwMG8LmceGZLKFo
          source_id: s_hmRPxUWfAta8p1JV8P6aso
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
        id: c_jKpe4GQHd6uiczCJ4jD36A
        subject_person_id: p_ZyHjRaen1EDymdU7e3vR6e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CMsQ9xopjPHYZZF4s5zV5X
          claim_id: c_jKpe4GQHd6uiczCJ4jD36A
          source_id: s_hmRPxUWfAta8p1JV8P6aso
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-Tlp8PUTJKu6tr9IXp0dyP
        subject_person_id: p_ZyHjRaen1EDymdU7e3vR6e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WL2eC49AZSBn6E8obwFKry
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PBCIhHKjPZQRfNuUTQx0PB
          claim_id: c_-Tlp8PUTJKu6tr9IXp0dyP
          source_id: s_HsGNitiUYyx5TmWFX15MLH
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9286：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HsGNitiUYyx5TmWFX15MLH
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣穫（CBDB 522351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522351&o=json
            external_identifier: CBDB:522351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.317Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WL2eC49AZSBn6E8obwFKry
        status: active
        display_name: 王嗣穫
        merged_into_person_id: null
    - claim:
        id: c_BvWtstDmCHWFp4I4CNyGJN
        subject_person_id: p_ZyHjRaen1EDymdU7e3vR6e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zkwZsLLQjFZ5N6EjaRwRDi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f_CfwWjUgfGvhv64zUktLA
          claim_id: c_BvWtstDmCHWFp4I4CNyGJN
          source_id: s_hmRPxUWfAta8p1JV8P6aso
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9286：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zkwZsLLQjFZ5N6EjaRwRDi
        status: active
        display_name: 王嗣構
        merged_into_person_id: null
    - claim:
        id: c_xHWfiFtaM7ytuF7yvkA1tP
        subject_person_id: p_ZyHjRaen1EDymdU7e3vR6e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pth7Wt1GjSMUzqmVpJWYW9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oOm7RnP9sl_uAMj_waF-5o
          claim_id: c_xHWfiFtaM7ytuF7yvkA1tP
          source_id: s_hmRPxUWfAta8p1JV8P6aso
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9286：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pth7Wt1GjSMUzqmVpJWYW9
        status: active
        display_name: 王嗣疇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_c0cE90spUhxctnGjrR9mNd
        subject_person_id: p_G6TTy42oGuEaEe7C4FnKVc
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ZyHjRaen1EDymdU7e3vR6e
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xQx5Y385_bY21rOHxengCm
          claim_id: c_c0cE90spUhxctnGjrR9mNd
          source_id: s_Cj8bPn2vFwwXM8em8h2ayZ
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1770, HuWenKai #576：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Cj8bPn2vFwwXM8em8h2ayZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：陳玉（100029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100029&o=json
            external_identifier: CBDB:100029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:17.869Z
            metadata_json: null
      object_person:
        id: p_G6TTy42oGuEaEe7C4FnKVc
        status: active
        display_name: 陈玉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王鳴盛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳴盛 | accepted |
| birth.date | 1722年 | accepted |
| death.date | 1797年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_WL2eC49AZSBn6E8obwFKry | 王嗣穫 | accepted |
| children | p_zkwZsLLQjFZ5N6EjaRwRDi | 王嗣構 | accepted |
| children | p_pth7Wt1GjSMUzqmVpJWYW9 | 王嗣疇 | accepted |
| spouses | p_G6TTy42oGuEaEe7C4FnKVc | 陈玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳴盛（CBDB 29898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29898&o=json)
- [中国历代人物传记资料库：王嗣穫（CBDB 522351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522351&o=json)
- [CBDB 中国历代人物传记资料库：陳玉（100029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100029&o=json)
