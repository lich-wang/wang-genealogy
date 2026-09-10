---
schema: wang-person/v1
id: p_m9QLtFof8trVhJCPC8QcyA
status: active
merged_into: null
display_name: 王憲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LJSGpi6uTQze8WC1sSdRzi
        subject_person_id: p_m9QLtFof8trVhJCPC8QcyA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3aTLbE2NxQSTxED4wVRhDG
          claim_id: c_LJSGpi6uTQze8WC1sSdRzi
          source_id: s_JC4R2MyKEcQbbK6CpJyFY8
          stance: supports
          locator: CBDB:324275
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324275）
          source: &a1
            id: s_JC4R2MyKEcQbbK6CpJyFY8
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 324275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324275&o=json
            external_identifier: CBDB:324275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.170Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eAVph1LPMcdhMB2CRQoh9G
        subject_person_id: p_m9QLtFof8trVhJCPC8QcyA
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
        - id: cs_EvZyoThn9Unh4EiXgd1RxD
          claim_id: c_eAVph1LPMcdhMB2CRQoh9G
          source_id: s_JC4R2MyKEcQbbK6CpJyFY8
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
        id: c_2d7JWQ_ZcHGByFmaBQ5GYp
        subject_person_id: p_RpANZtrRwU83qAy8Q8XYEf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m9QLtFof8trVhJCPC8QcyA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e2KthGj8BR39VYyN-LiK_h
          claim_id: c_2d7JWQ_ZcHGByFmaBQ5GYp
          source_id: s_aqLBfQMHvnd42UxRDzycyR
          stance: supports
          locator: 嘉靖三十八年進士登科錄，第三甲第三十三名：祖父王實、父王憲
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a2
            id: s_aqLBfQMHvnd42UxRDzycyR
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 204801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204801&o=json
            external_identifier: CBDB:204801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RpANZtrRwU83qAy8Q8XYEf
        status: active
        display_name: 王實
        merged_into_person_id: null
  children:
    - claim:
        id: c_QnTtQavYrcaTDiEisXOO_8
        subject_person_id: p_m9QLtFof8trVhJCPC8QcyA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_16nv23omiPWM5bXpCbD3EC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__o0t5XjDIJkbG1YYJcn02H
          claim_id: c_QnTtQavYrcaTDiEisXOO_8
          source_id: s_aqLBfQMHvnd42UxRDzycyR
          stance: supports
          locator: 嘉靖三十八年進士登科錄，第三甲第三十三名：父王憲
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_16nv23omiPWM5bXpCbD3EC
        status: active
        display_name: 王儒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RpANZtrRwU83qAy8Q8XYEf | 王實 | accepted |
| children | p_16nv23omiPWM5bXpCbD3EC | 王儒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儒（CBDB 204801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204801&o=json)
- [中国历代人物传记资料库：王憲（CBDB 324275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324275&o=json)
