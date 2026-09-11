---
schema: wang-person/v1
id: p_X3KgUwftEJuFzG5Sp9xV61
status: active
merged_into: null
display_name: 王公晟
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oD8sGVUGiH7uQbXx1iqpPg
        subject_person_id: p_X3KgUwftEJuFzG5Sp9xV61
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公晟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7Qs7xBE4Q85knsXFnBsugT
          claim_id: c_oD8sGVUGiH7uQbXx1iqpPg
          source_id: s_rBBH9nEcpb3em36UBKxGK7
          stance: supports
          locator: CBDB:142034
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142034）
          source: &a1
            id: s_rBBH9nEcpb3em36UBKxGK7
            source_type: api_record
            title: 中国历代人物传记资料库：王公晟（CBDB 142034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142034&o=json
            external_identifier: CBDB:142034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.210Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QFUGSpVshHE6J8aHeCcBbY
        subject_person_id: p_X3KgUwftEJuFzG5Sp9xV61
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 802年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x1EtLsFi776hooDK4CvL1K
          claim_id: c_QFUGSpVshHE6J8aHeCcBbY
          source_id: s_rBBH9nEcpb3em36UBKxGK7
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
        id: c_JggHB32dYwKy8YzbB4BneG
        subject_person_id: p_X3KgUwftEJuFzG5Sp9xV61
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 870年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o8sVeupBMXZ9tzb1RFYeNQ
          claim_id: c_JggHB32dYwKy8YzbB4BneG
          source_id: s_rBBH9nEcpb3em36UBKxGK7
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
        id: c_GBCqxtDCnGy5DApQhq27so
        subject_person_id: p_X3KgUwftEJuFzG5Sp9xV61
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
        - id: cs_9vNoL7QuNpUmU4gQmhy9JT
          claim_id: c_GBCqxtDCnGy5DApQhq27so
          source_id: s_rBBH9nEcpb3em36UBKxGK7
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
        id: c_TndneamgrlLEy_T0fdEGK5
        subject_person_id: p_XcrjBrqM3ku2jpjG6EWXUd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X3KgUwftEJuFzG5Sp9xV61
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8pDIi3k911z6VjGz5UksW7
          claim_id: c_TndneamgrlLEy_T0fdEGK5
          source_id: s_s1LBXji5R8yCybzRkFX9pZ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 83：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_s1LBXji5R8yCybzRkFX9pZ
            source_type: api_record
            title: 中国历代人物传记资料库：王盈（CBDB 160793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160793&o=json
            external_identifier: CBDB:160793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XcrjBrqM3ku2jpjG6EWXUd
        status: active
        display_name: 王盈
        merged_into_person_id: null
  children:
    - claim:
        id: c_Fq3yi6aToSf30VzD86AEEu
        subject_person_id: p_X3KgUwftEJuFzG5Sp9xV61
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1BdwrzHXbPpt9SaMHCG8WV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wb8CzWq9HEgAaSI307V1Vw
          claim_id: c_Fq3yi6aToSf30VzD86AEEu
          source_id: s_BkUdow2hQk9cGM6jLouH8c
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 83：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；端点按 CBDB ID 唯一映射。
          source:
            id: s_BkUdow2hQk9cGM6jLouH8c
            source_type: api_record
            title: 中国历代人物传记资料库：王弘楚（CBDB 160325）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160325&o=json
            external_identifier: CBDB:160325
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.938Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1BdwrzHXbPpt9SaMHCG8WV
        status: active
        display_name: 王弘楚
        merged_into_person_id: null
    - claim:
        id: c_Q0Pi1RXfIKlLyuVTGgXzBU
        subject_person_id: p_X3KgUwftEJuFzG5Sp9xV61
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j1EQwBRr8jvQr1qcKXLVj7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3sfDDZXis3LfgqGCY-f2yZ
          claim_id: c_Q0Pi1RXfIKlLyuVTGgXzBU
          source_id: s_hSJ6LBk8ozfimzTR2m2wwb
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 83：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hSJ6LBk8ozfimzTR2m2wwb
            source_type: api_record
            title: 中国历代人物传记资料库：王弘寂（CBDB 160795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160795&o=json
            external_identifier: CBDB:160795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_j1EQwBRr8jvQr1qcKXLVj7
        status: active
        display_name: 王弘寂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Q3kUxe5bT4L2lN40M-D2PJ
        subject_person_id: p_wYdGtG5JQEKNtrrjFh5BBV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_X3KgUwftEJuFzG5Sp9xV61
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_trBSLcOK3EBiQO7wTVBP68
          claim_id: c_Q3kUxe5bT4L2lN40M-D2PJ
          source_id: s_5493GJ8gPz1GBx66jnGpJg
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 83：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5493GJ8gPz1GBx66jnGpJg
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 160791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160791&o=json
            external_identifier: CBDB:160791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wYdGtG5JQEKNtrrjFh5BBV
        status: active
        display_name: 王清
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王公晟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公晟 | accepted |
| birth.date | 802年 | accepted |
| death.date | 870年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XcrjBrqM3ku2jpjG6EWXUd | 王盈 | accepted |
| children | p_1BdwrzHXbPpt9SaMHCG8WV | 王弘楚 | accepted |
| children | p_j1EQwBRr8jvQr1qcKXLVj7 | 王弘寂 | accepted |
| ancestors | p_wYdGtG5JQEKNtrrjFh5BBV | 王清 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公晟（CBDB 142034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142034&o=json)
- [中国历代人物传记资料库：王弘楚（CBDB 160325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160325&o=json)
- [中国历代人物传记资料库：王弘寂（CBDB 160795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160795&o=json)
- [中国历代人物传记资料库：王清（CBDB 160791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160791&o=json)
- [中国历代人物传记资料库：王盈（CBDB 160793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160793&o=json)
