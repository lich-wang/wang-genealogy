---
schema: wang-person/v1
id: p_StpRQqqgHhK5fWuKMf7Cn3
status: active
merged_into: null
display_name: 王思本
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YtJY6SE6dREHVYE1hrrjx9
        subject_person_id: p_StpRQqqgHhK5fWuKMf7Cn3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5toHitw4AyUo9J2H19kahP
          claim_id: c_YtJY6SE6dREHVYE1hrrjx9
          source_id: s_prkY3PGyVRnF9dQr7j2HmK
          stance: supports
          locator: CBDB:169791
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169791）
          source: &a1
            id: s_prkY3PGyVRnF9dQr7j2HmK
            source_type: api_record
            title: 中国历代人物传记资料库：王思本（CBDB 169791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169791&o=json
            external_identifier: CBDB:169791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.025Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ALAw7Chn4U7JVASGnf7XLt
        subject_person_id: p_StpRQqqgHhK5fWuKMf7Cn3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 736年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CB1vLoh5mLP6meqrrMKpqz
          claim_id: c_ALAw7Chn4U7JVASGnf7XLt
          source_id: s_prkY3PGyVRnF9dQr7j2HmK
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
        id: c_7WXfLe86RTyjJgunPyiw6b
        subject_person_id: p_StpRQqqgHhK5fWuKMf7Cn3
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
        - id: cs_zj66DB2pccgYBUf9yHMrQd
          claim_id: c_7WXfLe86RTyjJgunPyiw6b
          source_id: s_prkY3PGyVRnF9dQr7j2HmK
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
        id: c_t5JtkTl0jWRRzeuC-LHWtQ
        subject_person_id: p_Zdi2Km3RGj7j9DbgDHE4J3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_StpRQqqgHhK5fWuKMf7Cn3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bPAOZX9igCabFAwhXjt8V7
          claim_id: c_t5JtkTl0jWRRzeuC-LHWtQ
          source_id: s_prkY3PGyVRnF9dQr7j2HmK
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Zdi2Km3RGj7j9DbgDHE4J3
        status: active
        display_name: 王謨
        merged_into_person_id: null
  children:
    - claim:
        id: c_IyslP-_4VrB_wurW-vGCK6
        subject_person_id: p_StpRQqqgHhK5fWuKMf7Cn3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k8MteqzSymg42KC6JQak6W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fjwsh2q7o1Nh49dvXSLd1a
          claim_id: c_IyslP-_4VrB_wurW-vGCK6
          source_id: s_BU6G7Wp9iyMTBEBLFLxaoD
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BU6G7Wp9iyMTBEBLFLxaoD
            source_type: api_record
            title: 中国历代人物传记资料库：王宙（CBDB 169232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169232&o=json
            external_identifier: CBDB:169232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.013Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_k8MteqzSymg42KC6JQak6W
        status: active
        display_name: 王宙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思本 | accepted |
| death.date | 736年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Zdi2Km3RGj7j9DbgDHE4J3 | 王謨 | accepted |
| children | p_k8MteqzSymg42KC6JQak6W | 王宙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思本（CBDB 169791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169791&o=json)
- [中国历代人物传记资料库：王宙（CBDB 169232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169232&o=json)
