---
schema: wang-person/v1
id: p_ABhP9dLJkoCKUQ61Qu5HUw
status: active
merged_into: null
display_name: 王昪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9aR7VB55CyLPkb7EuqWGM2
        subject_person_id: p_ABhP9dLJkoCKUQ61Qu5HUw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VNSLniDaQPaaNLTwvK5MbC
          claim_id: c_9aR7VB55CyLPkb7EuqWGM2
          source_id: s_3uUvSiF32n3jreDLQ9Ftpn
          stance: supports
          locator: CBDB:175910
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175910）
          source: &a1
            id: s_3uUvSiF32n3jreDLQ9Ftpn
            source_type: api_record
            title: 中国历代人物传记资料库：王昪（CBDB 175910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175910&o=json
            external_identifier: CBDB:175910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.194Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ahHAtHHrktrSaT9a5q41hj
        subject_person_id: p_ABhP9dLJkoCKUQ61Qu5HUw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 745年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xhcnbjTa2Z95JbxrUCSk9V
          claim_id: c_ahHAtHHrktrSaT9a5q41hj
          source_id: s_3uUvSiF32n3jreDLQ9Ftpn
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
        id: c_aMj7Bkr6p9JaYBHi62eRxw
        subject_person_id: p_ABhP9dLJkoCKUQ61Qu5HUw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FZCEp5agDG6WFXH32zdvtL
          claim_id: c_aMj7Bkr6p9JaYBHi62eRxw
          source_id: s_3uUvSiF32n3jreDLQ9Ftpn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ogHZjx3FluXIPM18IeyTIS
        subject_person_id: p_AKZ2gftZZgX4FrpAuoEmrr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ABhP9dLJkoCKUQ61Qu5HUw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sjCACd4XbgKX1YAd3zhvHO
          claim_id: c_ogHZjx3FluXIPM18IeyTIS
          source_id: s_3uUvSiF32n3jreDLQ9Ftpn
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AKZ2gftZZgX4FrpAuoEmrr
        status: active
        display_name: 王大璡
        merged_into_person_id: null
  children:
    - claim:
        id: c_f2qoN5eOUeWPjPMjS1Vaq1
        subject_person_id: p_ABhP9dLJkoCKUQ61Qu5HUw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6YDDamD31FqdZsDuahyiXX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XSj6GBFjPBumSlK4MHA9Qj
          claim_id: c_f2qoN5eOUeWPjPMjS1Vaq1
          source_id: s_mdsYqnaUWb8rvkx4qY5hGx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mdsYqnaUWb8rvkx4qY5hGx
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 145608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145608&o=json
            external_identifier: CBDB:145608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.684Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6YDDamD31FqdZsDuahyiXX
        status: active
        display_name: 王恕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昪 | accepted |
| death.date | 745年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AKZ2gftZZgX4FrpAuoEmrr | 王大璡 | accepted |
| children | p_6YDDamD31FqdZsDuahyiXX | 王恕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昪（CBDB 175910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175910&o=json)
- [中国历代人物传记资料库：王恕（CBDB 145608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145608&o=json)
