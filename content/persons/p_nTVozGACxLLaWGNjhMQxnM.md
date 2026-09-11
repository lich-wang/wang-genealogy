---
schema: wang-person/v1
id: p_nTVozGACxLLaWGNjhMQxnM
status: active
merged_into: null
display_name: 王肖翁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kJmFgzp3kgaK5qLJn7XnJb
        subject_person_id: p_nTVozGACxLLaWGNjhMQxnM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肖翁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wPKnwuSEmbzf1cKnrybC57
          claim_id: c_kJmFgzp3kgaK5qLJn7XnJb
          source_id: s_n75KUKbyAiDG91EHz3DJYN
          stance: supports
          locator: CBDB:10722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10722）
          source: &a1
            id: s_n75KUKbyAiDG91EHz3DJYN
            source_type: api_record
            title: 中国历代人物传记资料库：王肖翁（CBDB 10722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10722&o=json
            external_identifier: CBDB:10722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iSbkkrLuqpCDdS8HvhUDir
        subject_person_id: p_nTVozGACxLLaWGNjhMQxnM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1272年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4FsUZ55PwBAeREGwhW19V1
          claim_id: c_iSbkkrLuqpCDdS8HvhUDir
          source_id: s_n75KUKbyAiDG91EHz3DJYN
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
        id: c_ftwKsE8u2TFpprSLdsWQHT
        subject_person_id: p_nTVozGACxLLaWGNjhMQxnM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1336年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2AKa9kZUpg7cLHBqmkDDjn
          claim_id: c_ftwKsE8u2TFpprSLdsWQHT
          source_id: s_n75KUKbyAiDG91EHz3DJYN
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
        id: c_2SgwWh3DX9yRpSeRdywEaU
        subject_person_id: p_nTVozGACxLLaWGNjhMQxnM
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
        - id: cs_C2YxKJnKzDygwSJGBSLYxj
          claim_id: c_2SgwWh3DX9yRpSeRdywEaU
          source_id: s_n75KUKbyAiDG91EHz3DJYN
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
        id: c_vr7zgXSW31o23ulzOeyggm
        subject_person_id: p_jCAZd95vtUshZxHPbwJb25
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nTVozGACxLLaWGNjhMQxnM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ypaMY1yopJRj7eG4MarGya
          claim_id: c_vr7zgXSW31o23ulzOeyggm
          source_id: s_wXFzjAuVdZjStZZzgNb6nz
          stance: supports
          locator: CBDB 双向互证（子 王肖翁 ⇄ 父 王奇）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_wXFzjAuVdZjStZZzgNb6nz
            source_type: api_record
            title: 中国历代人物传记资料库：王奇（CBDB 386675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386675&o=json
            external_identifier: CBDB:386675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jCAZd95vtUshZxHPbwJb25
        status: active
        display_name: 王奇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_qSgaYiRKRtWJtKyBxreP_f
        subject_person_id: p_hJs7Qvo7BVHkNfA4qF2GpU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nTVozGACxLLaWGNjhMQxnM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vwy2LTJWoNcbt5IfdmGJY_
          claim_id: c_qSgaYiRKRtWJtKyBxreP_f
          source_id: s_95i5Te7uwSzC2L5Ks8gJJK
          stance: supports
          locator: CBDB 双向互证（孫 王肖翁 ⇄ 祖父 王佖）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_95i5Te7uwSzC2L5Ks8gJJK
            source_type: api_record
            title: 中国历代人物传记资料库：王佖（CBDB 10700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10700&o=json
            external_identifier: CBDB:10700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hJs7Qvo7BVHkNfA4qF2GpU
        status: active
        display_name: 王佖
        merged_into_person_id: null
    - claim:
        id: c_bj7ObDNUkS0VUNNenwqe7B
        subject_person_id: p_Kay7m1G1NMGwAheD73rEbt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nTVozGACxLLaWGNjhMQxnM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AFiSiBYzKBSMnnPcVAp3C7
          claim_id: c_bj7ObDNUkS0VUNNenwqe7B
          source_id: s_Cd2m3HdzzCnHy2zH6GM15W
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王肖翁 ⇄ 曾祖 王棟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Cd2m3HdzzCnHy2zH6GM15W
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 10721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10721&o=json
            external_identifier: CBDB:10721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.557Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Kay7m1G1NMGwAheD73rEbt
        status: active
        display_name: 王棟
        merged_into_person_id: null
    - claim:
        id: c_EF_yzh8jshcIK0N7eQ2Lnt
        subject_person_id: p_UvehpGMJTzc9aejBRt9mWN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nTVozGACxLLaWGNjhMQxnM
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nvidO7ZjYrD0-6M43Jv6Pt
          claim_id: c_EF_yzh8jshcIK0N7eQ2Lnt
          source_id: s_n75KUKbyAiDG91EHz3DJYN
          stance: supports
          locator: CBDB 双向互证（高祖;四世祖 王淮 ⇄ 玄孫;四世孫 王肖翁）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_UvehpGMJTzc9aejBRt9mWN
        status: active
        display_name: 王淮
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王肖翁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肖翁 | accepted |
| birth.date | 1272年 | accepted |
| death.date | 1336年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jCAZd95vtUshZxHPbwJb25 | 王奇 | accepted |
| ancestors | p_hJs7Qvo7BVHkNfA4qF2GpU | 王佖 | accepted |
| ancestors | p_Kay7m1G1NMGwAheD73rEbt | 王棟 | accepted |
| ancestors | p_UvehpGMJTzc9aejBRt9mWN | 王淮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佖（CBDB 10700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10700&o=json)
- [中国历代人物传记资料库：王棟（CBDB 10721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10721&o=json)
- [中国历代人物传记资料库：王奇（CBDB 386675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386675&o=json)
- [中国历代人物传记资料库：王肖翁（CBDB 10722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10722&o=json)
