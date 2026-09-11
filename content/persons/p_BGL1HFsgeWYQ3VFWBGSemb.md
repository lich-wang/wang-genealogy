---
schema: wang-person/v1
id: p_BGL1HFsgeWYQ3VFWBGSemb
status: active
merged_into: null
display_name: 王琮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mfYZ8pT4SkaJvwrWoDYt6v
        subject_person_id: p_BGL1HFsgeWYQ3VFWBGSemb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KMfaoaSY66aQbUtdUZJ7yz
          claim_id: c_mfYZ8pT4SkaJvwrWoDYt6v
          source_id: s_xBqdQS3J8npNXQbvVRSH9d
          stance: supports
          locator: CBDB:276414
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276414）
          source: &a1
            id: s_xBqdQS3J8npNXQbvVRSH9d
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 276414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276414&o=json
            external_identifier: CBDB:276414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mCrYGP65aqYy4JEw7jv1yN
        subject_person_id: p_BGL1HFsgeWYQ3VFWBGSemb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮，明人物。正德六年進士，籍贯武城。（中国历代人物传记资料库 CBDB 276414）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rfOZrTvg3IrIYWUE5pOtbJ
          claim_id: c_mCrYGP65aqYy4JEw7jv1yN
          source_id: s_xBqdQS3J8npNXQbvVRSH9d
          stance: supports
          locator: CBDB:276414
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_auFESy6ttH1cvrseo4KPKH
        subject_person_id: p_BGL1HFsgeWYQ3VFWBGSemb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eny2nQ8kjY0ScXe9UJu8bS
          claim_id: c_auFESy6ttH1cvrseo4KPKH
          source_id: s_xBqdQS3J8npNXQbvVRSH9d
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eQSeau4TnN2P1YHAKu1a3t
        status: active
        display_name: 王道
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琮 | accepted |
| bio.summary | 王琮，明人物。正德六年進士，籍贯武城。（中国历代人物传记资料库 CBDB 276414） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_eQSeau4TnN2P1YHAKu1a3t | 王道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 276414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276414&o=json)
