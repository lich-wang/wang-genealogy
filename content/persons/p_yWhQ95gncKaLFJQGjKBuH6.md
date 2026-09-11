---
schema: wang-person/v1
id: p_yWhQ95gncKaLFJQGjKBuH6
status: active
merged_into: null
display_name: 王涓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b3J6obHsaA5AbHBoz6Exmx
        subject_person_id: p_yWhQ95gncKaLFJQGjKBuH6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王涓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NMaBAXdyECcWBGrzEzAyGA
          claim_id: c_b3J6obHsaA5AbHBoz6Exmx
          source_id: s_KTYqPvMBPjzXaBU4HxMWs8
          stance: supports
          locator: CBDB:143298
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143298）
          source: &a1
            id: s_KTYqPvMBPjzXaBU4HxMWs8
            source_type: api_record
            title: 中国历代人物传记资料库：王涓（CBDB 143298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143298&o=json
            external_identifier: CBDB:143298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.621Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KnB388Gy3D9MW42S8HDj9p
        subject_person_id: p_yWhQ95gncKaLFJQGjKBuH6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 774年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dNDaXP7hCxw17Kz6P1pjVf
          claim_id: c_KnB388Gy3D9MW42S8HDj9p
          source_id: s_KTYqPvMBPjzXaBU4HxMWs8
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
        id: c_14UbZRK8rKvjomsNdjmCZN
        subject_person_id: p_yWhQ95gncKaLFJQGjKBuH6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 818年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UpL8pQiwKWPUkfcBa3bTdN
          claim_id: c_14UbZRK8rKvjomsNdjmCZN
          source_id: s_KTYqPvMBPjzXaBU4HxMWs8
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
        id: c_LmHPoD9yTgZDLBsrvC1CTG
        subject_person_id: p_yWhQ95gncKaLFJQGjKBuH6
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
        - id: cs_zaDdo2o8hdrWpQ3EzdhwSV
          claim_id: c_LmHPoD9yTgZDLBsrvC1CTG
          source_id: s_KTYqPvMBPjzXaBU4HxMWs8
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
        id: c_Zemb989FHulzvq65a2iss2
        subject_person_id: p_yWhQ95gncKaLFJQGjKBuH6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2BKh9xzYNrFBwSQ8JZFMXU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CAe3b-mWkCF7-d0AG8Ah_G
          claim_id: c_Zemb989FHulzvq65a2iss2
          source_id: s_6sTeGHk7JTRD15QqMHV4tj
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yuanhe73：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6sTeGHk7JTRD15QqMHV4tj
            source_type: api_record
            title: 中国历代人物传记资料库：王正宗（CBDB 166263）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166263&o=json
            external_identifier: CBDB:166263
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2BKh9xzYNrFBwSQ8JZFMXU
        status: active
        display_name: 王正宗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王涓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王涓 | accepted |
| birth.date | 774年 | accepted |
| death.date | 818年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2BKh9xzYNrFBwSQ8JZFMXU | 王正宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王涓（CBDB 143298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143298&o=json)
- [中国历代人物传记资料库：王正宗（CBDB 166263）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166263&o=json)
