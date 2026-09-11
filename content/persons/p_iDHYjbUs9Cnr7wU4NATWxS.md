---
schema: wang-person/v1
id: p_iDHYjbUs9Cnr7wU4NATWxS
status: active
merged_into: null
display_name: 王致遠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6RZxhJuEb3Xa6s6KLSoV9S
        subject_person_id: p_iDHYjbUs9Cnr7wU4NATWxS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pr5srUScCCWTHMLPgt7Xu9
          claim_id: c_6RZxhJuEb3Xa6s6KLSoV9S
          source_id: s_CBakdwAKt5Yhs5EzXoKTkB
          stance: supports
          locator: CBDB:257071
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257071）
          source: &a1
            id: s_CBakdwAKt5Yhs5EzXoKTkB
            source_type: api_record
            title: 中国历代人物传记资料库：王致遠（CBDB 257071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257071&o=json
            external_identifier: CBDB:257071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.406Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hy5MjdtchvHsvf2n3n29Vh
        subject_person_id: p_iDHYjbUs9Cnr7wU4NATWxS
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
        - id: cs_5vxY8PTgLNFxL6EwrKP72W
          claim_id: c_hy5MjdtchvHsvf2n3n29Vh
          source_id: s_CBakdwAKt5Yhs5EzXoKTkB
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
        id: c_wQS1gYHa432MDTblMe49jg
        subject_person_id: p_iDHYjbUs9Cnr7wU4NATWxS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FebULYZ1Mok5osGeZL97Vp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xcJi85E0RK4cMFmSF4z16b
          claim_id: c_wQS1gYHa432MDTblMe49jg
          source_id: s_CBakdwAKt5Yhs5EzXoKTkB
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百五十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FebULYZ1Mok5osGeZL97Vp
        status: active
        display_name: 王嶽
        merged_into_person_id: null
    - claim:
        id: c_tMv6fgFMjBVfk4U1Bt7Yeq
        subject_person_id: p_iDHYjbUs9Cnr7wU4NATWxS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vDzf6isJ8G9fr8y7scc2fq
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X2_VDbZkO9zS76DnUEHjLs
          claim_id: c_tMv6fgFMjBVfk4U1Bt7Yeq
          source_id: s_CBakdwAKt5Yhs5EzXoKTkB
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第四十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vDzf6isJ8G9fr8y7scc2fq
        status: active
        display_name: 王崑
        merged_into_person_id: null
  other: []
---

# 王致遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王致遠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_FebULYZ1Mok5osGeZL97Vp | 王嶽 | accepted |
| descendants | p_vDzf6isJ8G9fr8y7scc2fq | 王崑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王致遠（CBDB 257071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257071&o=json)
