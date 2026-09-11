---
schema: wang-person/v1
id: p_b5LjazcuNQVGpetcHs8CoP
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 691849
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wA_4h_eLmdG582Z4IlP6bl
        subject_person_id: p_b5LjazcuNQVGpetcHs8CoP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏，明人物。籍贯海鹽，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 691849）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z-Vk_69Fu0CsRL06aMBP9G
          claim_id: c_wA_4h_eLmdG582Z4IlP6bl
          source_id: s_iKDuexvKmY_BXpkCz2Jthw
          stance: supports
          locator: CBDB:691849
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yiBqYQ1AckjY81f0O7pUWu
        subject_person_id: p_b5LjazcuNQVGpetcHs8CoP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-ejNSC6glzjlVq0YBychN5
          claim_id: c_yiBqYQ1AckjY81f0O7pUWu
          source_id: s_iKDuexvKmY_BXpkCz2Jthw
          stance: supports
          locator: CBDB:691849
          quotation: null
          interpretation_note: CBDB 明确记录的王軏配偶
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
          source: *a1
      object_person:
        id: p_VaojNETSYyNLZ6vo2MHR8V
        status: active
        display_name: 王軏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陳氏，明人物。籍贯海鹽，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 691849） | accepted |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_VaojNETSYyNLZ6vo2MHR8V | 王軏 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王軏妻)（CBDB 691849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691849&o=json)
