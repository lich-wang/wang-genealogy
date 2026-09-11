---
schema: wang-person/v1
id: p_pWNx3zDCMERFh1vNM5CjyZ
status: active
merged_into: null
display_name: 王韜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jB4FB4HSfq3bVo8iKuz2UL
        subject_person_id: p_pWNx3zDCMERFh1vNM5CjyZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hFANrfDH2ug4F5B7yia9Qz
          claim_id: c_jB4FB4HSfq3bVo8iKuz2UL
          source_id: s_z55Xx4XhFHrjXUB38hfRKL
          stance: supports
          locator: CBDB:65828
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（65828）
          source: &a1
            id: s_z55Xx4XhFHrjXUB38hfRKL
            source_type: api_record
            title: 中国历代人物传记资料库：王韜（CBDB 65828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65828&o=json
            external_identifier: CBDB:65828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nxavbHzDDHTBkaiykzqME7
        subject_person_id: p_pWNx3zDCMERFh1vNM5CjyZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1828年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XyWydNEr682cxympaW6G7A
          claim_id: c_nxavbHzDDHTBkaiykzqME7
          source_id: s_z55Xx4XhFHrjXUB38hfRKL
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
        id: c_ARAkWPTdYMYzEED37FMLHL
        subject_person_id: p_pWNx3zDCMERFh1vNM5CjyZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1890年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ysDYrxBPd5resCBi8Z5Ykh
          claim_id: c_ARAkWPTdYMYzEED37FMLHL
          source_id: s_z55Xx4XhFHrjXUB38hfRKL
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
        id: c_5j91JU1NBXgSCukAbPTZpK
        subject_person_id: p_pWNx3zDCMERFh1vNM5CjyZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f9xacJ5yQhp3s5uDdz9fti
          claim_id: c_5j91JU1NBXgSCukAbPTZpK
          source_id: s_z55Xx4XhFHrjXUB38hfRKL
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
        id: c_NIOd7T5vTSFV-T_3InlbEg
        subject_person_id: p_wFwEfChnSXSZSJHjuMQKKW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pWNx3zDCMERFh1vNM5CjyZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tvL24Sh1zNxf3SUe-i4X5i
          claim_id: c_NIOd7T5vTSFV-T_3InlbEg
          source_id: s_z55Xx4XhFHrjXUB38hfRKL
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9296：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wFwEfChnSXSZSJHjuMQKKW
        status: active
        display_name: 王昌桂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王韜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王韜 | accepted |
| birth.date | 1828年 | accepted |
| death.date | 1890年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wFwEfChnSXSZSJHjuMQKKW | 王昌桂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王韜（CBDB 65828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65828&o=json)
