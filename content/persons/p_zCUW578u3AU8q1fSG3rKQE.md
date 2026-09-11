---
schema: wang-person/v1
id: p_zCUW578u3AU8q1fSG3rKQE
status: active
merged_into: null
display_name: 王義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3Gj3TGe4W5EExhmas9xD1U
        subject_person_id: p_zCUW578u3AU8q1fSG3rKQE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QtpDXRE59tmbpsCjFCRQ9B
          claim_id: c_3Gj3TGe4W5EExhmas9xD1U
          source_id: s_82GoUJz494a1CW8RcbyKfi
          stance: supports
          locator: CBDB:312059
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312059）
          source: &a1
            id: s_82GoUJz494a1CW8RcbyKfi
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 312059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312059&o=json
            external_identifier: CBDB:312059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h4RxErz2RNb3uH8Y7KsseT
        subject_person_id: p_zCUW578u3AU8q1fSG3rKQE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BdCmSdWPomdr2EURBfo9NW
          claim_id: c_h4RxErz2RNb3uH8Y7KsseT
          source_id: s_82GoUJz494a1CW8RcbyKfi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  descendants:
    - claim:
        id: c_gcBf36JDqbD5xQARb535S3
        subject_person_id: p_zCUW578u3AU8q1fSG3rKQE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qCF2nAdW3AwQM2sNjTW55F
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H3a717g-6q2xvR7rVBrnDW
          claim_id: c_gcBf36JDqbD5xQARb535S3
          source_id: s_82GoUJz494a1CW8RcbyKfi
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第三十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qCF2nAdW3AwQM2sNjTW55F
        status: active
        display_name: 王獻圖
        merged_into_person_id: null
  other: []
---

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_qCF2nAdW3AwQM2sNjTW55F | 王獻圖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王義（CBDB 312059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312059&o=json)
