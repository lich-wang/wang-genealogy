---
schema: wang-person/v1
id: p_aTTgB6h365MYEHtXPuq4vH
status: active
merged_into: null
display_name: 王公
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MtQ1M1KdfAm51BXztD2NPf
        subject_person_id: p_aTTgB6h365MYEHtXPuq4vH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LDFqr553JuudzEtFKRP6Zu
          claim_id: c_MtQ1M1KdfAm51BXztD2NPf
          source_id: s_8hKCJHubBiSaUK4CnMENZZ
          stance: supports
          locator: CBDB:139147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139147）
          source: &a1
            id: s_8hKCJHubBiSaUK4CnMENZZ
            source_type: api_record
            title: 中国历代人物传记资料库：王公（CBDB 139147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139147&o=json
            external_identifier: CBDB:139147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.390Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GA283CcacoFPvrznWgNpii
        subject_person_id: p_aTTgB6h365MYEHtXPuq4vH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 584年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Qbh1gHVm2aeaP1GpoMXPk
          claim_id: c_GA283CcacoFPvrznWgNpii
          source_id: s_8hKCJHubBiSaUK4CnMENZZ
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
        id: c_cttiJvPAigMfjdn9wM23CE
        subject_person_id: p_aTTgB6h365MYEHtXPuq4vH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 656年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PvvvHJf7HARCJdAxMk1RdM
          claim_id: c_cttiJvPAigMfjdn9wM23CE
          source_id: s_8hKCJHubBiSaUK4CnMENZZ
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
        id: c_Z3p4i9ZN44CaAeGqvuyHdd
        subject_person_id: p_aTTgB6h365MYEHtXPuq4vH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公（584年—656年），唐人物。籍贯晉陽。（中国历代人物传记资料库 CBDB 139147）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iVDqvlchOIcGej4W-8t0xf
          claim_id: c_Z3p4i9ZN44CaAeGqvuyHdd
          source_id: s_8hKCJHubBiSaUK4CnMENZZ
          stance: supports
          locator: CBDB:139147
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王公

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公 | accepted |
| birth.date | 584年 | accepted |
| death.date | 656年 | accepted |
| bio.summary | 王公（584年—656年），唐人物。籍贯晉陽。（中国历代人物传记资料库 CBDB 139147） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公（CBDB 139147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139147&o=json)
