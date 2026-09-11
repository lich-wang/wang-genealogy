---
schema: wang-person/v1
id: p_E8E8ihQC2SrCHhBnBQvfcv
status: active
merged_into: null
display_name: 王韜
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kv1BHJYShqTwM55Z6cvViM
        subject_person_id: p_E8E8ihQC2SrCHhBnBQvfcv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sa6rt9KQBMuHDQAP8iCZnv
          claim_id: c_kv1BHJYShqTwM55Z6cvViM
          source_id: s_PFEW3GJN3tErU4q7RDJLuo
          stance: supports
          locator: CBDB:139727
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139727）
          source: &a1
            id: s_PFEW3GJN3tErU4q7RDJLuo
            source_type: api_record
            title: 中国历代人物传记资料库：王韜（CBDB 139727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139727&o=json
            external_identifier: CBDB:139727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.447Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yeZ25SL4dDSd6Ck7WNhJSj
        subject_person_id: p_E8E8ihQC2SrCHhBnBQvfcv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 635年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A1md7G1K3yPsckrHAH8gow
          claim_id: c_yeZ25SL4dDSd6Ck7WNhJSj
          source_id: s_PFEW3GJN3tErU4q7RDJLuo
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
        id: c_pWvbTUhoAuRuhaGyTHQfKt
        subject_person_id: p_E8E8ihQC2SrCHhBnBQvfcv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 679年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VMSXkhvN3959ejWjeEN5M3
          claim_id: c_pWvbTUhoAuRuhaGyTHQfKt
          source_id: s_PFEW3GJN3tErU4q7RDJLuo
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
        id: c_G77SivCAaQtVgGptAVsCch
        subject_person_id: p_E8E8ihQC2SrCHhBnBQvfcv
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
        - id: cs_zUaQFu56aHgqVVwfGytGWU
          claim_id: c_G77SivCAaQtVgGptAVsCch
          source_id: s_PFEW3GJN3tErU4q7RDJLuo
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
        id: c_Ei_ecxIjDdE2i1dX36JHLh
        subject_person_id: p_5u5bCm6Fan8p596uS1v7sn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E8E8ihQC2SrCHhBnBQvfcv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cleRDxGFKM1Q_-gpPtMmMp
          claim_id: c_Ei_ecxIjDdE2i1dX36JHLh
          source_id: s_9nHPC38NywQkA7zrpfGBF8
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yifeng 37：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9nHPC38NywQkA7zrpfGBF8
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 148878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148878&o=json
            external_identifier: CBDB:148878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.776Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5u5bCm6Fan8p596uS1v7sn
        status: active
        display_name: 王義
        merged_into_person_id: null
  children:
    - claim:
        id: c_146ewVP9EykMlXaRTgODoh
        subject_person_id: p_E8E8ihQC2SrCHhBnBQvfcv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HwzFLqxbVsRUv4XG7D989R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GEi-IK8WV9T3R4qxGQKLQ7
          claim_id: c_146ewVP9EykMlXaRTgODoh
          source_id: s_nJBCBqEkaRGRis7dmTb7X5
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yifeng 37：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nJBCBqEkaRGRis7dmTb7X5
            source_type: api_record
            title: 中国历代人物传记资料库：王賢本（CBDB 148879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148879&o=json
            external_identifier: CBDB:148879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_HwzFLqxbVsRUv4XG7D989R
        status: active
        display_name: 王賢本
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王韜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王韜 | accepted |
| birth.date | 635年 | accepted |
| death.date | 679年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5u5bCm6Fan8p596uS1v7sn | 王義 | accepted |
| children | p_HwzFLqxbVsRUv4XG7D989R | 王賢本 | accepted |

## 外部来源

- [中国历代人物传记资料库：王韜（CBDB 139727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139727&o=json)
- [中国历代人物传记资料库：王賢本（CBDB 148879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148879&o=json)
- [中国历代人物传记资料库：王義（CBDB 148878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148878&o=json)
