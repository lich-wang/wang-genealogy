---
schema: wang-person/v1
id: p_VaojNETSYyNLZ6vo2MHR8V
status: active
merged_into: null
display_name: 王軏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TeNQRcWvhnpnukY5UCAog3
        subject_person_id: p_VaojNETSYyNLZ6vo2MHR8V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gqutp5tJyciCV1JVz8ZU4K
          claim_id: c_TeNQRcWvhnpnukY5UCAog3
          source_id: s_LCjmV1NhF8386FYpF7qDUz
          stance: supports
          locator: CBDB:691850
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691850）
          source: &a1
            id: s_LCjmV1NhF8386FYpF7qDUz
            source_type: api_record
            title: 中国历代人物传记资料库：王軏（CBDB 691850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691850&o=json
            external_identifier: CBDB:691850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.625Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tErhMECnRpQotFVQ8YjBPE
        subject_person_id: p_VaojNETSYyNLZ6vo2MHR8V
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
        - id: cs_YsnJodWkmG1Bzvdu37DHch
          claim_id: c_tErhMECnRpQotFVQ8YjBPE
          source_id: s_LCjmV1NhF8386FYpF7qDUz
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
  spouses:
    - claim:
        id: c_t6PtFWjnPFX6vzMQviMk5p
        subject_person_id: p_VaojNETSYyNLZ6vo2MHR8V
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_b5LjazcuNQVGpetcHs8CoP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QY40hkrZp2gy1RT8ClGihY
          claim_id: c_t6PtFWjnPFX6vzMQviMk5p
          source_id: s_iKDuexvKmY_BXpkCz2Jthw
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294154：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iKDuexvKmY_BXpkCz2Jthw
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王軏妻)（CBDB 691849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691849&o=json
            external_identifier: CBDB:691849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_b5LjazcuNQVGpetcHs8CoP
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王軏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軏 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_b5LjazcuNQVGpetcHs8CoP | 陳氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王軏妻)（CBDB 691849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691849&o=json)
- [中国历代人物传记资料库：王軏（CBDB 691850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691850&o=json)
