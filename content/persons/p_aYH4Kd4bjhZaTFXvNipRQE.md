---
schema: wang-person/v1
id: p_aYH4Kd4bjhZaTFXvNipRQE
status: active
merged_into: null
display_name: 王坦
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_soaZJ4h1m5VNcRJNoBWdBn
        subject_person_id: p_aYH4Kd4bjhZaTFXvNipRQE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T6gXeK73VcEoXmY3w9H6Tj
          claim_id: c_soaZJ4h1m5VNcRJNoBWdBn
          source_id: s_CGQ86w881YJNLc94NAKZrQ
          stance: supports
          locator: CBDB:126565
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126565）
          source: &a1
            id: s_CGQ86w881YJNLc94NAKZrQ
            source_type: api_record
            title: 中国历代人物传记资料库：王坦（CBDB 126565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126565&o=json
            external_identifier: CBDB:126565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.027Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ALXAsehpZxdNfvWN9DX3bw
        subject_person_id: p_aYH4Kd4bjhZaTFXvNipRQE
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
        - id: cs_np8N1mmzd1Pjedh2DFchft
          claim_id: c_ALXAsehpZxdNfvWN9DX3bw
          source_id: s_CGQ86w881YJNLc94NAKZrQ
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
        id: c_DqDQpziK0pf_e9Ujy3Ozn4
        subject_person_id: p_ggxQ1jnked4p4GU2cPQ9m8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aYH4Kd4bjhZaTFXvNipRQE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jd1ynIK4XLYOwBeE-ZoI62
          claim_id: c_DqDQpziK0pf_e9Ujy3Ozn4
          source_id: s_CGQ86w881YJNLc94NAKZrQ
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百零六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ggxQ1jnked4p4GU2cPQ9m8
        status: active
        display_name: 王蕃
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_iosLSW9TRT75cBl-SFr-0m
        subject_person_id: p_aYH4Kd4bjhZaTFXvNipRQE
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_stPYyh5i8ARh4iAiyvt4Rb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sGUKci4gC-WQ4_VYgtTjYT
          claim_id: c_iosLSW9TRT75cBl-SFr-0m
          source_id: s_-3gV1HcK2jEHXZjRlkQTjs
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百零六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_-3gV1HcK2jEHXZjRlkQTjs
            source_type: api_record
            title: 中国历代人物传记资料库：裴氏(王坦妻)（CBDB 244423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244423&o=json
            external_identifier: CBDB:244423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_stPYyh5i8ARh4iAiyvt4Rb
        status: active
        display_name: 裴氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_csIROvfm54W9cMamhpvEVg
        subject_person_id: p_Veg2M7nUgAFT9N4pPNmHnp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aYH4Kd4bjhZaTFXvNipRQE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PuB9FsY9HUbyFWg-gDPdEb
          claim_id: c_csIROvfm54W9cMamhpvEVg
          source_id: s_CGQ86w881YJNLc94NAKZrQ
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百零六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Veg2M7nUgAFT9N4pPNmHnp
        status: active
        display_name: 王敬先
        merged_into_person_id: null
    - claim:
        id: c_4RHMbJbKqJTQiq7JY9IBrd
        subject_person_id: p_iY2r8Cj8DivnJ9A9qbetgy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aYH4Kd4bjhZaTFXvNipRQE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HtzGPJ8Drm4i-Bb_4L20hR
          claim_id: c_4RHMbJbKqJTQiq7JY9IBrd
          source_id: s_CGQ86w881YJNLc94NAKZrQ
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百零六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iY2r8Cj8DivnJ9A9qbetgy
        status: active
        display_name: 王瑛
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王坦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王坦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ggxQ1jnked4p4GU2cPQ9m8 | 王蕃 | accepted |
| spouses | p_stPYyh5i8ARh4iAiyvt4Rb | 裴氏 | accepted |
| ancestors | p_Veg2M7nUgAFT9N4pPNmHnp | 王敬先 | accepted |
| ancestors | p_iY2r8Cj8DivnJ9A9qbetgy | 王瑛 | accepted |

## 外部来源

- [中国历代人物传记资料库：裴氏(王坦妻)（CBDB 244423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244423&o=json)
- [中国历代人物传记资料库：王坦（CBDB 126565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126565&o=json)
