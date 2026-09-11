---
schema: wang-person/v1
id: p_r5PHCmmMJLpuKZnnJnSt3a
status: active
merged_into: null
display_name: 王昱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HJ57i5MhD2M34SNfcjLHjm
        subject_person_id: p_r5PHCmmMJLpuKZnnJnSt3a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xaD9PnQqtD4WsdQginDCB1
          claim_id: c_HJ57i5MhD2M34SNfcjLHjm
          source_id: s_A35YNP9t2raQR3o7FF3Su9
          stance: supports
          locator: CBDB:22938
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22938）
          source: &a1
            id: s_A35YNP9t2raQR3o7FF3Su9
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 22938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22938&o=json
            external_identifier: CBDB:22938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.867Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_722qnN3EUxqHCwJyYsKSNM
        subject_person_id: p_r5PHCmmMJLpuKZnnJnSt3a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JC5FtpFn1oTBLHKEUTnFVK
          claim_id: c_722qnN3EUxqHCwJyYsKSNM
          source_id: s_A35YNP9t2raQR3o7FF3Su9
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
        id: c_3sroPRdeVFg_v8X3zVGW-P
        subject_person_id: p_bGbFrt8zgP3DNAX52qKMAV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r5PHCmmMJLpuKZnnJnSt3a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TDTPMjC3bqHl_ltbsNxbQY
          claim_id: c_3sroPRdeVFg_v8X3zVGW-P
          source_id: s_CWHj8rzqmtARNth31z8736
          stance: supports
          locator: CBDB 双向互证（子 王昱 ⇄ 父 王宗浩）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_CWHj8rzqmtARNth31z8736
            source_type: api_record
            title: 中国历代人物传记资料库：王宗浩（CBDB 22937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22937&o=json
            external_identifier: CBDB:22937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bGbFrt8zgP3DNAX52qKMAV
        status: active
        display_name: 王宗浩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昱 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bGbFrt8zgP3DNAX52qKMAV | 王宗浩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昱（CBDB 22938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22938&o=json)
- [中国历代人物传记资料库：王宗浩（CBDB 22937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22937&o=json)
