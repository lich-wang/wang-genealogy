---
schema: wang-person/v1
id: p_F9dvd97z2s8i3Tm2qF6G3k
status: active
merged_into: null
display_name: 王協
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y6zcnrxTCv1hvtUGU5YmH5
        subject_person_id: p_F9dvd97z2s8i3Tm2qF6G3k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王協
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F5dNni7wSzj4zMGuLZgp56
          claim_id: c_y6zcnrxTCv1hvtUGU5YmH5
          source_id: s_A9PPbCS7Y3gUzdUMa14L94
          stance: supports
          locator: CBDB:138989
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（138989）
          source: &a1
            id: s_A9PPbCS7Y3gUzdUMa14L94
            source_type: api_record
            title: 中国历代人物传记资料库：王協（CBDB 138989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138989&o=json
            external_identifier: CBDB:138989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.373Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5y29hLTPK3Mccam5686miE
        subject_person_id: p_F9dvd97z2s8i3Tm2qF6G3k
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 596年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NjV42CgBdybGALyAGEBm3L
          claim_id: c_5y29hLTPK3Mccam5686miE
          source_id: s_A9PPbCS7Y3gUzdUMa14L94
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
        id: c_ewdoTFvBJTqnc6noDVLTiw
        subject_person_id: p_F9dvd97z2s8i3Tm2qF6G3k
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 653年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yXPWQG4DeLbWgUEsA3mTM5
          claim_id: c_ewdoTFvBJTqnc6noDVLTiw
          source_id: s_A9PPbCS7Y3gUzdUMa14L94
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
        id: c_PH126Tb4z4hDhoVh2hREnR
        subject_person_id: p_F9dvd97z2s8i3Tm2qF6G3k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王協（596年—653年），唐人物。籍贯臨沂，曾任驃騎大將軍。（中国历代人物传记资料库 CBDB 138989）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KTaXH5ppSy34y_AG9TWbHz
          claim_id: c_PH126Tb4z4hDhoVh2hREnR
          source_id: s_A9PPbCS7Y3gUzdUMa14L94
          stance: supports
          locator: CBDB:138989
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

# 王協

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王協 | accepted |
| birth.date | 596年 | accepted |
| death.date | 653年 | accepted |
| bio.summary | 王協（596年—653年），唐人物。籍贯臨沂，曾任驃騎大將軍。（中国历代人物传记资料库 CBDB 138989） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王協（CBDB 138989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138989&o=json)
