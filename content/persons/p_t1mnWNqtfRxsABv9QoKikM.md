---
schema: wang-person/v1
id: p_t1mnWNqtfRxsABv9QoKikM
status: active
merged_into: null
display_name: 王翼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Le9ZYdDX59R711pEKrM9Bz
        subject_person_id: p_t1mnWNqtfRxsABv9QoKikM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ERYmhJ2T7uwm8rb52Wu3YM
          claim_id: c_Le9ZYdDX59R711pEKrM9Bz
          source_id: s_F8wiRSCUYsvckpkAA1EHn5
          stance: supports
          locator: CBDB:186626
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186626）
          source: &a1
            id: s_F8wiRSCUYsvckpkAA1EHn5
            source_type: api_record
            title: 中国历代人物传记资料库：王翼（CBDB 186626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186626&o=json
            external_identifier: CBDB:186626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.281Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_omYXMMybzn3YJMT4CZa37b
        subject_person_id: p_t1mnWNqtfRxsABv9QoKikM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 732年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d6YAfTEPA9tkd5sBoL66zj
          claim_id: c_omYXMMybzn3YJMT4CZa37b
          source_id: s_F8wiRSCUYsvckpkAA1EHn5
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
        id: c_2JcG1CbVMbL138dU5LuRWy
        subject_person_id: p_t1mnWNqtfRxsABv9QoKikM
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
        - id: cs_fYY5cT4vpfWU75s5Mbvtkp
          claim_id: c_2JcG1CbVMbL138dU5LuRWy
          source_id: s_F8wiRSCUYsvckpkAA1EHn5
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
        id: c_Or7Bij-5fDDrAE7ES0Q48q
        subject_person_id: p_t1mnWNqtfRxsABv9QoKikM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3sZPWogK9QRQPhpNWt3jQB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7dDNPgTRXmyH2gO8h_oo2i
          claim_id: c_Or7Bij-5fDDrAE7ES0Q48q
          source_id: s_ZgjvdJwTsdPcuy61c35X88
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZgjvdJwTsdPcuy61c35X88
            source_type: api_record
            title: 中国历代人物传记资料库：王穎（CBDB 186625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186625&o=json
            external_identifier: CBDB:186625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3sZPWogK9QRQPhpNWt3jQB
        status: active
        display_name: 王穎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王翼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翼 | accepted |
| death.date | 732年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3sZPWogK9QRQPhpNWt3jQB | 王穎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翼（CBDB 186626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186626&o=json)
- [中国历代人物传记资料库：王穎（CBDB 186625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186625&o=json)
