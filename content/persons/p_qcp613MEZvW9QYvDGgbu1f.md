---
schema: wang-person/v1
id: p_qcp613MEZvW9QYvDGgbu1f
status: active
merged_into: null
display_name: 王寅
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KiDHgX8t2ZRBTtaPDgJCqL
        subject_person_id: p_qcp613MEZvW9QYvDGgbu1f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hwzokNMftnZt6YeTHwHLxP
          claim_id: c_KiDHgX8t2ZRBTtaPDgJCqL
          source_id: s_3GisQKn2kTcjaFFMkVtzdN
          stance: supports
          locator: CBDB:126668
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126668）
          source: &a1
            id: s_3GisQKn2kTcjaFFMkVtzdN
            source_type: api_record
            title: 中国历代人物传记资料库：王寅（CBDB 126668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126668&o=json
            external_identifier: CBDB:126668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.106Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hAbXDgpgN3tqhrzTMmeXoC
        subject_person_id: p_qcp613MEZvW9QYvDGgbu1f
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1458年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q3MxXbpYAeLAMM5r5FsnHi
          claim_id: c_hAbXDgpgN3tqhrzTMmeXoC
          source_id: s_3GisQKn2kTcjaFFMkVtzdN
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
        id: c_tY3THk9t8ExYvA3BLSrBFr
        subject_person_id: p_qcp613MEZvW9QYvDGgbu1f
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1514年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YAjXeypKP5oa8H94DJy7We
          claim_id: c_tY3THk9t8ExYvA3BLSrBFr
          source_id: s_3GisQKn2kTcjaFFMkVtzdN
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
        id: c_A4foQTyaNw8NN3gJLhFpMt
        subject_person_id: p_qcp613MEZvW9QYvDGgbu1f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TaDP8NrUbGPzcNLLw7NhGm
          claim_id: c_A4foQTyaNw8NN3gJLhFpMt
          source_id: s_3GisQKn2kTcjaFFMkVtzdN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Mj9NhUOZ1oLhNoCbcMtLby
        subject_person_id: p_7iitVAMc3DKp3oMEVJh77W
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qcp613MEZvW9QYvDGgbu1f
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GwXvgwZkOyrbLT78ssoJgW
          claim_id: c_Mj9NhUOZ1oLhNoCbcMtLby
          source_id: s_nWM2yTRXMjw7b8yX7AKvg8
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nWM2yTRXMjw7b8yX7AKvg8
            source_type: api_record
            title: 中国历代人物传记资料库：王能（CBDB 255754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255754&o=json
            external_identifier: CBDB:255754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7iitVAMc3DKp3oMEVJh77W
        status: active
        display_name: 王能
        merged_into_person_id: null
    - claim:
        id: c_n-5xQtdgmmWn9_ZtkvtY1R
        subject_person_id: p_W9K3ygtGHRzoKsD8PPraFy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qcp613MEZvW9QYvDGgbu1f
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3BJf1jmnlMkZtX54UhqNDR
          claim_id: c_n-5xQtdgmmWn9_ZtkvtY1R
          source_id: s_v4TxpuDjqCfSLuuBHYVaWF
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v4TxpuDjqCfSLuuBHYVaWF
            source_type: api_record
            title: 中国历代人物传记资料库：王興（CBDB 255753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255753&o=json
            external_identifier: CBDB:255753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_W9K3ygtGHRzoKsD8PPraFy
        status: active
        display_name: 王興
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王寅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寅 | accepted |
| birth.date | 1458年 | accepted |
| death.date | 1514年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_7iitVAMc3DKp3oMEVJh77W | 王能 | accepted |
| ancestors | p_W9K3ygtGHRzoKsD8PPraFy | 王興 | accepted |

## 外部来源

- [中国历代人物传记资料库：王能（CBDB 255754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255754&o=json)
- [中国历代人物传记资料库：王興（CBDB 255753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255753&o=json)
- [中国历代人物传记资料库：王寅（CBDB 126668）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126668&o=json)
