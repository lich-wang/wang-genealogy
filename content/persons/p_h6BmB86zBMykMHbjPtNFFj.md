---
schema: wang-person/v1
id: p_h6BmB86zBMykMHbjPtNFFj
status: active
merged_into: null
display_name: 王傑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_34Pm5gJwn4TNiHxmMyVLcm
        subject_person_id: p_h6BmB86zBMykMHbjPtNFFj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2qTcioJdq7GfLjndDysVeb
          claim_id: c_34Pm5gJwn4TNiHxmMyVLcm
          source_id: s_jJMAu1ANH2TaSVooM5PB6f
          stance: supports
          locator: CBDB:268957
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（268957）
          source: &a1
            id: s_jJMAu1ANH2TaSVooM5PB6f
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 268957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268957&o=json
            external_identifier: CBDB:268957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MJuW6ndXQ6JQ2psQ15sEP1
        subject_person_id: p_h6BmB86zBMykMHbjPtNFFj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑，明人物。弘治九年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 268957）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r1Qc3evqlYlKjqrlGXYaKs
          claim_id: c_MJuW6ndXQ6JQ2psQ15sEP1
          source_id: s_jJMAu1ANH2TaSVooM5PB6f
          stance: supports
          locator: CBDB:268957
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_y5Mh_U7u8yu9L-dV-iYwb_
        subject_person_id: p_h6BmB86zBMykMHbjPtNFFj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aE8BJNQJMvShc1BQ8KJMip
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k75jrb2grVoSrYKkoYAApz
          claim_id: c_y5Mh_U7u8yu9L-dV-iYwb_
          source_id: s_jJMAu1ANH2TaSVooM5PB6f
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百一十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aE8BJNQJMvShc1BQ8KJMip
        status: active
        display_name: 王士昭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| bio.summary | 王傑，明人物。弘治九年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 268957） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aE8BJNQJMvShc1BQ8KJMip | 王士昭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 268957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268957&o=json)
