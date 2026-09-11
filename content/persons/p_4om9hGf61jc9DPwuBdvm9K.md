---
schema: wang-person/v1
id: p_4om9hGf61jc9DPwuBdvm9K
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 148734
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c___-T_mcES1BHjjCQv_4DEC
        subject_person_id: p_4om9hGf61jc9DPwuBdvm9K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏，史料所见人物。本项目依据《中国历代人物传记资料库：陳氏(王則妻)（CBDB 148734）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d7qlnaUxFtywif_Fla1Nib
          claim_id: c___-T_mcES1BHjjCQv_4DEC
          source_id: s_qSrtdz1dqR6a5zZuo0oAPF
          stance: supports
          locator: CBDB:148734
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_qSrtdz1dqR6a5zZuo0oAPF
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王則妻)（CBDB 148734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148734&o=json
            external_identifier: CBDB:148734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ty1KxClcRu9-a15II2c-Zh
        subject_person_id: p_4om9hGf61jc9DPwuBdvm9K
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
        - id: cs_W1Z_GhQeH5GeEJOTPJLdGD
          claim_id: c_Ty1KxClcRu9-a15II2c-Zh
          source_id: s_qSrtdz1dqR6a5zZuo0oAPF
          stance: supports
          locator: CBDB:148734
          quotation: null
          interpretation_note: CBDB 明确记录的王則配偶
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
        id: c_SwKQ_xMeMD5Iz-fKh_o02N
        subject_person_id: p_mnvKHycESEfEuUPkT5JFdS
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4om9hGf61jc9DPwuBdvm9K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uzggfXMOjMDrbuBaHni-b5
          claim_id: c_SwKQ_xMeMD5Iz-fKh_o02N
          source_id: s_qSrtdz1dqR6a5zZuo0oAPF
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 100：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mnvKHycESEfEuUPkT5JFdS
        status: active
        display_name: 王則
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
| bio.summary | 陳氏，史料所见人物。本项目依据《中国历代人物传记资料库：陳氏(王則妻)（CBDB 148734）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_mnvKHycESEfEuUPkT5JFdS | 王則 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王則妻)（CBDB 148734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148734&o=json)
