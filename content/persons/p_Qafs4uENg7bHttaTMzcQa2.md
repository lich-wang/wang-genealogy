---
schema: wang-person/v1
id: p_Qafs4uENg7bHttaTMzcQa2
status: active
merged_into: null
display_name: 王琰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CytUe98bXEYrGn8SUGYW1n
        subject_person_id: p_Qafs4uENg7bHttaTMzcQa2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9pABQ9Bjs4hngeSG1MCNg9
          claim_id: c_CytUe98bXEYrGn8SUGYW1n
          source_id: s_vMnM2DGnm4P96KmiZMoWHB
          stance: supports
          locator: CBDB:261503
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261503）
          source: &a1
            id: s_vMnM2DGnm4P96KmiZMoWHB
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 261503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261503&o=json
            external_identifier: CBDB:261503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.546Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6ZcGUjt5dLTCuaotNEWpxy
        subject_person_id: p_Qafs4uENg7bHttaTMzcQa2
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
        - id: cs_KuKkZMgFCuPq1sDwftEJPH
          claim_id: c_6ZcGUjt5dLTCuaotNEWpxy
          source_id: s_vMnM2DGnm4P96KmiZMoWHB
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
  ancestors: []
  descendants:
    - claim:
        id: c_AWIU2FW9Dpd9PvX0g6ShXT
        subject_person_id: p_Qafs4uENg7bHttaTMzcQa2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_99gNXAHSy7CHUSg6MDVZmM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r1b7JiO8Ulxqmd69O4WN7J
          claim_id: c_AWIU2FW9Dpd9PvX0g6ShXT
          source_id: s_HNnvggNwswDJGWDv9EXqk2
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HNnvggNwswDJGWDv9EXqk2
            source_type: api_record
            title: 中国历代人物传记资料库：王常（CBDB 198354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198354&o=json
            external_identifier: CBDB:198354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.482Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_99gNXAHSy7CHUSg6MDVZmM
        status: active
        display_name: 王常
        merged_into_person_id: null
  other: []
---

# 王琰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_99gNXAHSy7CHUSg6MDVZmM | 王常 | accepted |

## 外部来源

- [中国历代人物传记资料库：王常（CBDB 198354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198354&o=json)
- [中国历代人物传记资料库：王琰（CBDB 261503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261503&o=json)
