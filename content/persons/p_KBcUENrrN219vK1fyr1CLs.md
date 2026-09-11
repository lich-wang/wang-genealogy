---
schema: wang-person/v1
id: p_KBcUENrrN219vK1fyr1CLs
status: active
merged_into: null
display_name: 魏氏
revision: 1
cbdb_id: 337558
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1-23ZtrEh6V6GKFaNcPMji
        subject_person_id: p_KBcUENrrN219vK1fyr1CLs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 魏氏，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 337558）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_16TB5J6P3xKTogl9zKjs7C
          claim_id: c_1-23ZtrEh6V6GKFaNcPMji
          source_id: s_D8nibGKQUTeOEa3QHLvNDM
          stance: supports
          locator: CBDB:337558
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_D8nibGKQUTeOEa3QHLvNDM
            source_type: api_record
            title: 中国历代人物传记资料库：魏氏(王一誠妻)（CBDB 337558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337558&o=json
            external_identifier: CBDB:337558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_0ovrDEKwTLxJacg9iazOOg
        subject_person_id: p_KBcUENrrN219vK1fyr1CLs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 魏氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aY6j-xd8FcYCYrzhBWaRxR
          claim_id: c_0ovrDEKwTLxJacg9iazOOg
          source_id: s_D8nibGKQUTeOEa3QHLvNDM
          stance: supports
          locator: CBDB:337558
          quotation: null
          interpretation_note: CBDB 明确记录的王一誠配偶
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
        id: c_0AmRX49CKNS8rD0vj2oIyM
        subject_person_id: p_2CCGS25AmJvxKtCikhBKeQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KBcUENrrN219vK1fyr1CLs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_amvnN1SV1uoOv5AiHggfVw
          claim_id: c_0AmRX49CKNS8rD0vj2oIyM
          source_id: s_D8nibGKQUTeOEa3QHLvNDM
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第三百名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2CCGS25AmJvxKtCikhBKeQ
        status: active
        display_name: 王一誠
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 魏氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 魏氏，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 337558） | accepted |
| name.primary | 魏氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2CCGS25AmJvxKtCikhBKeQ | 王一誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：魏氏(王一誠妻)（CBDB 337558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337558&o=json)
