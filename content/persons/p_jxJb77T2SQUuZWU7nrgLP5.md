---
schema: wang-person/v1
id: p_jxJb77T2SQUuZWU7nrgLP5
status: active
merged_into: null
display_name: 王同倫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iKEfeh5bNYL2z9XD3xWyfz
        subject_person_id: p_jxJb77T2SQUuZWU7nrgLP5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同倫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PesU3gy6AozXGoCXTWNvP9
          claim_id: c_iKEfeh5bNYL2z9XD3xWyfz
          source_id: s_2wGjdALaD45tx6N97DN7RH
          stance: supports
          locator: CBDB:204603
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204603）
          source: &a1
            id: s_2wGjdALaD45tx6N97DN7RH
            source_type: api_record
            title: 中国历代人物传记资料库：王同倫（CBDB 204603）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204603&o=json
            external_identifier: CBDB:204603
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BqLWd2WB2NMtUDrRH1FxjM
        subject_person_id: p_jxJb77T2SQUuZWU7nrgLP5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1531年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5kXncwjPfWk6YoNrD1KPr5
          claim_id: c_BqLWd2WB2NMtUDrRH1FxjM
          source_id: s_2wGjdALaD45tx6N97DN7RH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FjP9xm9PYER53tEprZCkTX
        subject_person_id: p_jxJb77T2SQUuZWU7nrgLP5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同倫（生于1531年），明人物。明清進士進士，籍贯輝縣，入仕進士。（中国历代人物传记资料库 CBDB 204603）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c08ltHkIkmWxBRL711xotg
          claim_id: c_FjP9xm9PYER53tEprZCkTX
          source_id: s_2wGjdALaD45tx6N97DN7RH
          stance: supports
          locator: CBDB:204603
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_26II9FsoqingD6qrhGmSZm
        subject_person_id: p_kSZuSxLVRUx1AX2npsBxe9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jxJb77T2SQUuZWU7nrgLP5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fHIEJzV939JmaGIroE_54K
          claim_id: c_26II9FsoqingD6qrhGmSZm
          source_id: s_2wGjdALaD45tx6N97DN7RH
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百三十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kSZuSxLVRUx1AX2npsBxe9
        status: active
        display_name: 王垽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_E3tywPGcWSlenKtGb4DeFx
        subject_person_id: p_jxJb77T2SQUuZWU7nrgLP5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_kjPSoZR76QsUF99CdurwiQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CYc192mpINZQS4LIKxsiCY
          claim_id: c_E3tywPGcWSlenKtGb4DeFx
          source_id: s_7oKKzDlWNKW3Qop3up64Rb
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百三十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7oKKzDlWNKW3Qop3up64Rb
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王同倫妻)（CBDB 321410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321410&o=json
            external_identifier: CBDB:321410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kjPSoZR76QsUF99CdurwiQ
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_8niB_fcoS8Q6Z9SQ7ejgJa
        subject_person_id: p_kK9zSdM9HPzF6bPSwAPxfV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jxJb77T2SQUuZWU7nrgLP5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1egTNCu8Exmynf0NDJ4j8_
          claim_id: c_8niB_fcoS8Q6Z9SQ7ejgJa
          source_id: s_2wGjdALaD45tx6N97DN7RH
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百三十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kK9zSdM9HPzF6bPSwAPxfV
        status: active
        display_name: 王昭
        merged_into_person_id: null
    - claim:
        id: c_UTAnL4eBYlLXCT8u0xjN6j
        subject_person_id: p_Rwuy9n9CHqHdWUzkFfFBwF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jxJb77T2SQUuZWU7nrgLP5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eEwtWQbZ0dfO0xtKEChdz3
          claim_id: c_UTAnL4eBYlLXCT8u0xjN6j
          source_id: s_2wGjdALaD45tx6N97DN7RH
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百三十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Rwuy9n9CHqHdWUzkFfFBwF
        status: active
        display_name: 王煦
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王同倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同倫 | accepted |
| birth.date | 1531年 | accepted |
| bio.summary | 王同倫（生于1531年），明人物。明清進士進士，籍贯輝縣，入仕進士。（中国历代人物传记资料库 CBDB 204603） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kSZuSxLVRUx1AX2npsBxe9 | 王垽 | accepted |
| spouses | p_kjPSoZR76QsUF99CdurwiQ | 張氏 | accepted |
| ancestors | p_kK9zSdM9HPzF6bPSwAPxfV | 王昭 | accepted |
| ancestors | p_Rwuy9n9CHqHdWUzkFfFBwF | 王煦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同倫（CBDB 204603）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204603&o=json)
- [中国历代人物传记资料库：張氏(王同倫妻)（CBDB 321410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321410&o=json)
