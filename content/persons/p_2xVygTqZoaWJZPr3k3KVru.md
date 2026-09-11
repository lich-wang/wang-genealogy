---
schema: wang-person/v1
id: p_2xVygTqZoaWJZPr3k3KVru
status: active
merged_into: null
display_name: 王寰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EEZg8fhfGq6gwBEWkGpDFj
        subject_person_id: p_2xVygTqZoaWJZPr3k3KVru
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3sLspe78yoj6EyqEuqvvXP
          claim_id: c_EEZg8fhfGq6gwBEWkGpDFj
          source_id: s_XD6LofnkHt84jKnYi2PXmq
          stance: supports
          locator: CBDB:304147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304147）
          source: &a1
            id: s_XD6LofnkHt84jKnYi2PXmq
            source_type: api_record
            title: 中国历代人物传记资料库：王寰（CBDB 304147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304147&o=json
            external_identifier: CBDB:304147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hBhwh5HHT9pQQ7Sbx6VTde
        subject_person_id: p_2xVygTqZoaWJZPr3k3KVru
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寰，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 304147）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yGagJKlZZlPwBsLvuaqZMA
          claim_id: c_hBhwh5HHT9pQQ7Sbx6VTde
          source_id: s_XD6LofnkHt84jKnYi2PXmq
          stance: supports
          locator: CBDB:304147
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_rpfCSFqHRlsmxDZmpzQyj6
        subject_person_id: p_2xVygTqZoaWJZPr3k3KVru
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uZ4pZvj3ZF3zGc9SL1t6Jf
          claim_id: c_rpfCSFqHRlsmxDZmpzQyj6
          source_id: s_XD6LofnkHt84jKnYi2PXmq
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百零六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_V5Z6bC9P1YiqepVeP78NQA
        status: active
        display_name: 王惟中
        merged_into_person_id: null
  other: []
---

# 王寰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寰 | accepted |
| bio.summary | 王寰，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 304147） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_V5Z6bC9P1YiqepVeP78NQA | 王惟中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寰（CBDB 304147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304147&o=json)
