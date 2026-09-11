---
schema: wang-person/v1
id: p_cpa88FnT8xpUzJrWwpTN6E
status: active
merged_into: null
display_name: 王好問
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gA6AHPXSqALZy25ca67bRH
        subject_person_id: p_cpa88FnT8xpUzJrWwpTN6E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好問
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M2tAhfxcZDYC635gTCc36c
          claim_id: c_gA6AHPXSqALZy25ca67bRH
          source_id: s_uHGvmYCwbuZ674c9NX899w
          stance: supports
          locator: CBDB:555422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555422）
          source: &a1
            id: s_uHGvmYCwbuZ674c9NX899w
            source_type: api_record
            title: 中国历代人物传记资料库：王好問（CBDB 555422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555422&o=json
            external_identifier: CBDB:555422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.637Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r1z3zWmhR18vJTXdUqPKDw
        subject_person_id: p_cpa88FnT8xpUzJrWwpTN6E
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
        - id: cs_FFnA5DPhEVJaDw2ECd9QiN
          claim_id: c_r1z3zWmhR18vJTXdUqPKDw
          source_id: s_uHGvmYCwbuZ674c9NX899w
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
        id: c_2PK_vCoPBALD0O6ynpSG_w
        subject_person_id: p_cpa88FnT8xpUzJrWwpTN6E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9VVDG6DC23nE1KHBNqwemc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ElZADY5pb3UYw1A9CwLdpp
          claim_id: c_2PK_vCoPBALD0O6ynpSG_w
          source_id: s_bWGNAwYDy21jDbZEDkndpN
          stance: supports
          locator: 南陽府志，lgid=878700：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bWGNAwYDy21jDbZEDkndpN
            source_type: api_record
            title: 中国历代人物传记资料库：王納諫（CBDB 555434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555434&o=json
            external_identifier: CBDB:555434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9VVDG6DC23nE1KHBNqwemc
        status: active
        display_name: 王納諫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_G3HyOchJmo7YPeEpDhDKUB
        subject_person_id: p_cpa88FnT8xpUzJrWwpTN6E
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_m7eZMCpYgpMEKPkTcctMuN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_glYNN9FF6tpywZ3veUNFcl
          claim_id: c_G3HyOchJmo7YPeEpDhDKUB
          source_id: s_VBZ5Ncwzu-tmQZBo4DBs9P
          stance: supports
          locator: 南陽府志，lgid=878700：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VBZ5Ncwzu-tmQZBo4DBs9P
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王好問妻)（CBDB 555423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555423&o=json
            external_identifier: CBDB:555423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_m7eZMCpYgpMEKPkTcctMuN
        status: active
        display_name: 趙氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王好問

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王好問 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9VVDG6DC23nE1KHBNqwemc | 王納諫 | accepted |
| spouses | p_m7eZMCpYgpMEKPkTcctMuN | 趙氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王好問（CBDB 555422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555422&o=json)
- [中国历代人物传记资料库：王納諫（CBDB 555434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555434&o=json)
- [中国历代人物传记资料库：趙氏(王好問妻)（CBDB 555423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555423&o=json)
