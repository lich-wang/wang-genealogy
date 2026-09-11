---
schema: wang-person/v1
id: p_U5FMQEkajEK4bTGxWx93U5
status: active
merged_into: null
display_name: 王善
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MRHcwxECf2esi6Zi7eA6U6
        subject_person_id: p_U5FMQEkajEK4bTGxWx93U5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zrc36LPPWutYLXY2PpyFVZ
          claim_id: c_MRHcwxECf2esi6Zi7eA6U6
          source_id: s_YsL8Q41HGWd5bruj6SL45g
          stance: supports
          locator: CBDB:100815
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100815）
          source: &a1
            id: s_YsL8Q41HGWd5bruj6SL45g
            source_type: api_record
            title: 中国历代人物传记资料库：王善（CBDB 100815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100815&o=json
            external_identifier: CBDB:100815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.468Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_24JduVRbx92adD1JTMLpo8
        subject_person_id: p_U5FMQEkajEK4bTGxWx93U5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1183年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GSFpRP4AdmV9bPMZWUMB88
          claim_id: c_24JduVRbx92adD1JTMLpo8
          source_id: s_YsL8Q41HGWd5bruj6SL45g
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
        id: c_5hr7qYdJoKHDC61fh5aqYZ
        subject_person_id: p_U5FMQEkajEK4bTGxWx93U5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1243年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e5r9TDdhExHVWbVcnQTyLN
          claim_id: c_5hr7qYdJoKHDC61fh5aqYZ
          source_id: s_YsL8Q41HGWd5bruj6SL45g
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
        id: c_WorWaP6xiD99D9NGTLCwQY
        subject_person_id: p_U5FMQEkajEK4bTGxWx93U5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NWCA1hp63TLGUPDq63Ec4k
          claim_id: c_WorWaP6xiD99D9NGTLCwQY
          source_id: s_YsL8Q41HGWd5bruj6SL45g
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
        id: c_-Gxu4IqY1VnTeQ1iaiZz-Z
        subject_person_id: p_U5FMQEkajEK4bTGxWx93U5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8djKPSryCKKAhjwQnxe8qo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QtXF4xGK1l7pmFfNdvy5fy
          claim_id: c_-Gxu4IqY1VnTeQ1iaiZz-Z
          source_id: s_ZabM26HyCMvhpHCTN1b54k
          stance: supports
          locator: 元人傳記資料索引，1292：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZabM26HyCMvhpHCTN1b54k
            source_type: api_record
            title: 中国历代人物传记资料库：王慶端（CBDB 101432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101432&o=json
            external_identifier: CBDB:101432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8djKPSryCKKAhjwQnxe8qo
        status: active
        display_name: 王慶端
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王善 | accepted |
| birth.date | 1183年 | accepted |
| death.date | 1243年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8djKPSryCKKAhjwQnxe8qo | 王慶端 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶端（CBDB 101432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101432&o=json)
- [中国历代人物传记资料库：王善（CBDB 100815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100815&o=json)
