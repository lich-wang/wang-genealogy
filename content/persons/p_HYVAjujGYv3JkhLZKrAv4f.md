---
schema: wang-person/v1
id: p_HYVAjujGYv3JkhLZKrAv4f
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 558207
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qw2v60AdJUxD3GVjZb3Ug2
        subject_person_id: p_HYVAjujGYv3JkhLZKrAv4f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏，清人物。籍贯新野，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 558207）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wgykWmjXf9ut5E6dRXxWHA
          claim_id: c_Qw2v60AdJUxD3GVjZb3Ug2
          source_id: s_NIHrTbkGxCJkT32jWkjSo9
          stance: supports
          locator: CBDB:558207
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NIHrTbkGxCJkT32jWkjSo9
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王鉞妻)（CBDB 558207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558207&o=json
            external_identifier: CBDB:558207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yI_F4xthii9XIyJdE6jiF4
        subject_person_id: p_HYVAjujGYv3JkhLZKrAv4f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FWMzMXLeO6ux6vIG2k7wQF
          claim_id: c_yI_F4xthii9XIyJdE6jiF4
          source_id: s_NIHrTbkGxCJkT32jWkjSo9
          stance: supports
          locator: CBDB:558207
          quotation: null
          interpretation_note: CBDB 明确记录的王鉞配偶
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
        id: c_6IfosfyMYZU8X2fbl21mbI
        subject_person_id: p_uRs1dBvGfLVZFwWBK4Lb79
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HYVAjujGYv3JkhLZKrAv4f
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XRSxF5RXLMiPM93jkOpqJu
          claim_id: c_6IfosfyMYZU8X2fbl21mbI
          source_id: s_NIHrTbkGxCJkT32jWkjSo9
          stance: supports
          locator: 南陽府志，lgid=878826：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uRs1dBvGfLVZFwWBK4Lb79
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張氏，清人物。籍贯新野，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 558207） | accepted |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_uRs1dBvGfLVZFwWBK4Lb79 | 王鉞 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王鉞妻)（CBDB 558207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558207&o=json)
