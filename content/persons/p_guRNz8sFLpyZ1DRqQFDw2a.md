---
schema: wang-person/v1
id: p_guRNz8sFLpyZ1DRqQFDw2a
status: active
merged_into: null
display_name: 王世仁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C7M2HsbP9tE3VbKP6v2MXP
        subject_person_id: p_guRNz8sFLpyZ1DRqQFDw2a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XuFT36y1FFHUJaQMBdBGMq
          claim_id: c_C7M2HsbP9tE3VbKP6v2MXP
          source_id: s_cS5bXVwGN81Fugc9sUTPbA
          stance: supports
          locator: CBDB:283508
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283508）
          source: &a1
            id: s_cS5bXVwGN81Fugc9sUTPbA
            source_type: api_record
            title: 中国历代人物传记资料库：王世仁（CBDB 283508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283508&o=json
            external_identifier: CBDB:283508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.138Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B8hznPZTZqtMhqXx9ECH9c
        subject_person_id: p_guRNz8sFLpyZ1DRqQFDw2a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世仁，明人物。正德十六年進士，籍贯太倉州。（中国历代人物传记资料库 CBDB 283508）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y45COuL18VGsP0VX5hSpj8
          claim_id: c_B8hznPZTZqtMhqXx9ECH9c
          source_id: s_cS5bXVwGN81Fugc9sUTPbA
          stance: supports
          locator: CBDB:283508
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants: []
  other:
    - claim:
        id: c_9Uo72R4QEJoh_oQ7rD7gWp
        subject_person_id: p_guRNz8sFLpyZ1DRqQFDw2a
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_htEFhvA1GWN2EHqSp5mSSu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LTU2zeGVPJ5znAMtXBDpvh
          claim_id: c_9Uo72R4QEJoh_oQ7rD7gWp
          source_id: s_iKHAzMhy0PmEdLrEJ8ye4_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202098 王世芳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iKHAzMhy0PmEdLrEJ8ye4_
            source_type: api_record
            title: 中国历代人物传记资料库：王世仁（CBDB 283508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283508&o=json
            external_identifier: CBDB:283508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_htEFhvA1GWN2EHqSp5mSSu
        status: active
        display_name: 王世芳
        merged_into_person_id: null
---

# 王世仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世仁 | accepted |
| bio.summary | 王世仁，明人物。正德十六年進士，籍贯太倉州。（中国历代人物传记资料库 CBDB 283508） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_htEFhvA1GWN2EHqSp5mSSu | 王世芳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世仁（CBDB 283508）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283508&o=json)
