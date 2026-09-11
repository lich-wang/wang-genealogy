---
schema: wang-person/v1
id: p_2afg5fJh6eK8ri93vPGdkG
status: active
merged_into: null
display_name: 水氏
revision: 1
cbdb_id: 283642
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c__P_Ox_KMa3A49gQ3DxMR0w
        subject_person_id: p_2afg5fJh6eK8ri93vPGdkG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 水氏，明人物。洪武四年進士。（中国历代人物传记资料库 CBDB 283642）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n6z4Zo-1W_PGquadSDlCXH
          claim_id: c__P_Ox_KMa3A49gQ3DxMR0w
          source_id: s_ur60PZO4qWqUztXNaUD1eM
          stance: supports
          locator: CBDB:283642
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ur60PZO4qWqUztXNaUD1eM
            source_type: api_record
            title: 中国历代人物传记资料库：水氏(王敬中妻)（CBDB 283642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283642&o=json
            external_identifier: CBDB:283642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qahLLO6Pp89GEjI8F_hTD5
        subject_person_id: p_2afg5fJh6eK8ri93vPGdkG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 水氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fkd_DXNUURxYUtvx1MQmu3
          claim_id: c_qahLLO6Pp89GEjI8F_hTD5
          source_id: s_ur60PZO4qWqUztXNaUD1eM
          stance: supports
          locator: CBDB:283642
          quotation: null
          interpretation_note: CBDB 明确记录的王敬中配偶
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
        id: c_CdTosjMu1aEY_sPpULpEDF
        subject_person_id: p_2bM722d9X3YmbYXbBeCDTM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2afg5fJh6eK8ri93vPGdkG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DIDvRGhOXodXfRuxAW6iEB
          claim_id: c_CdTosjMu1aEY_sPpULpEDF
          source_id: s_ur60PZO4qWqUztXNaUD1eM
          stance: supports
          locator: 洪武四年進士登科錄:一卷，第二甲第七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2bM722d9X3YmbYXbBeCDTM
        status: active
        display_name: 王敬中
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 水氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 水氏，明人物。洪武四年進士。（中国历代人物传记资料库 CBDB 283642） | accepted |
| name.primary | 水氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2bM722d9X3YmbYXbBeCDTM | 王敬中 | accepted |

## 外部来源

- [中国历代人物传记资料库：水氏(王敬中妻)（CBDB 283642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283642&o=json)
