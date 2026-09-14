---
schema: wang-person/v1
id: p_RDUubsZPdvnDciWfTLLW4b
status: active
merged_into: null
display_name: 王植
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FahMNmHbRksxtFH5AX7C7M
        subject_person_id: p_RDUubsZPdvnDciWfTLLW4b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王植
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4S6VRUFiq91LLh1rsm9ZYA
          claim_id: c_FahMNmHbRksxtFH5AX7C7M
          source_id: s_1MjKNiJRJvcsohLhD8y2zi
          stance: supports
          locator: CBDB:29206
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29206）
          source: &a1
            id: s_1MjKNiJRJvcsohLhD8y2zi
            source_type: api_record
            title: 中国历代人物传记资料库：王植（CBDB 29206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29206&o=json
            external_identifier: CBDB:29206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xrj4CHmELLbhP4BjtCfs8G
        subject_person_id: p_RDUubsZPdvnDciWfTLLW4b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王植，元人物。籍贯寧晉。（中国历代人物传记资料库 CBDB 29206）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PV-iyCVM8luLupYSxiHEny
          claim_id: c_xrj4CHmELLbhP4BjtCfs8G
          source_id: s_1MjKNiJRJvcsohLhD8y2zi
          stance: supports
          locator: CBDB:29206
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tcXRfMU4xu1TnNA6CJLVt6
        subject_person_id: p_XVBiZo5rSMuhnxXwBu1Wf6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RDUubsZPdvnDciWfTLLW4b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Fk5CIXMArVWch4ekJ3dkpI
          claim_id: c_tcXRfMU4xu1TnNA6CJLVt6
          source_id: s_H3quh88WULI1byU0qEwCvY
          stance: supports
          locator: CBDB 亲属：父（KinPerson 29203）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_H3quh88WULI1byU0qEwCvY
            source_type: api_record
            title: 中国历代人物传记资料库：王植（CBDB 29206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29206&o=json
            external_identifier: CBDB:29206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XVBiZo5rSMuhnxXwBu1Wf6
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王植

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王植 | accepted |
| bio.summary | 王植，元人物。籍贯寧晉。（中国历代人物传记资料库 CBDB 29206） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XVBiZo5rSMuhnxXwBu1Wf6 | 王義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王植（CBDB 29206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29206&o=json)
