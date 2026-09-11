---
schema: wang-person/v1
id: p_Cn69EMt8ooB5ikYYJQTWaC
status: active
merged_into: null
display_name: 王葆
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WPeEp8Chp4eDveHd2h5feD
        subject_person_id: p_Cn69EMt8ooB5ikYYJQTWaC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_31NBFcKJA8V58aLPHK9AjY
          claim_id: c_WPeEp8Chp4eDveHd2h5feD
          source_id: s_HQNCQHGfWAKThYhXeZgUZ3
          stance: supports
          locator: CBDB:175693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175693）
          source: &a1
            id: s_HQNCQHGfWAKThYhXeZgUZ3
            source_type: api_record
            title: 中国历代人物传记资料库：王葆（CBDB 175693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175693&o=json
            external_identifier: CBDB:175693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.060Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EG7GAac8fb1r7J3wsfkXCk
        subject_person_id: p_Cn69EMt8ooB5ikYYJQTWaC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 885年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UBPQdjNqD9UHLs4GQmqtSn
          claim_id: c_EG7GAac8fb1r7J3wsfkXCk
          source_id: s_HQNCQHGfWAKThYhXeZgUZ3
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
        id: c_gMi7d6rZg3xLrNhL7ghq7Y
        subject_person_id: p_Cn69EMt8ooB5ikYYJQTWaC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葆（卒于885年），唐人物。籍贯萬年，曾任未詳。（中国历代人物传记资料库 CBDB 175693）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BAqqaDjD9N2tJImkEvrHEx
          claim_id: c_gMi7d6rZg3xLrNhL7ghq7Y
          source_id: s_HQNCQHGfWAKThYhXeZgUZ3
          stance: supports
          locator: CBDB:175693
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_N5LxkyjN-VDiUixNqWBcq5
        subject_person_id: p_wgfYedxmMy9VG8HzciXPDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Cn69EMt8ooB5ikYYJQTWaC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_woc2pcfzR_dpT3LWWChGdp
          claim_id: c_N5LxkyjN-VDiUixNqWBcq5
          source_id: s_HQNCQHGfWAKThYhXeZgUZ3
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wgfYedxmMy9VG8HzciXPDK
        status: active
        display_name: 王貞伯
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王葆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王葆 | accepted |
| death.date | 885年 | accepted |
| bio.summary | 王葆（卒于885年），唐人物。籍贯萬年，曾任未詳。（中国历代人物传记资料库 CBDB 175693） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wgfYedxmMy9VG8HzciXPDK | 王貞伯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王葆（CBDB 175693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175693&o=json)
