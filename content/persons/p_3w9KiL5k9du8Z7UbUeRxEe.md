---
schema: wang-person/v1
id: p_3w9KiL5k9du8Z7UbUeRxEe
status: active
merged_into: null
display_name: 王楚鳳
cbdb_id: 305534
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w3fD19DSS3Q7CU9NV13ayr
        subject_person_id: p_3w9KiL5k9du8Z7UbUeRxEe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楚鳳，明人物。嘉靖二十三年進士，籍贯富順。（中国历代人物传记资料库 CBDB 305534）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_G8ZT8CjGa2JISwwHtlC0-B
          claim_id: c_w3fD19DSS3Q7CU9NV13ayr
          source_id: s_HKsE92Q1zr71u5JPeo8ZE7
          stance: supports
          locator: CBDB:305534
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HKsE92Q1zr71u5JPeo8ZE7
            source_type: api_record
            title: 中国历代人物传记资料库：王楚鳳（CBDB 305534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305534&o=json
            external_identifier: CBDB:305534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_w7cPaUXx9JACHK7BkhE7jM
        subject_person_id: p_3w9KiL5k9du8Z7UbUeRxEe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楚鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FeAuCksULRxwBYkAfbiaEf
          claim_id: c_w7cPaUXx9JACHK7BkhE7jM
          source_id: s_HKsE92Q1zr71u5JPeo8ZE7
          stance: supports
          locator: CBDB:305534
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8avPhPGZPVSH2tSP5IY0eC
        subject_person_id: p_3w9KiL5k9du8Z7UbUeRxEe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MM7KWyMsCLLasX9X9VAU7R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1fAIecKwn6AhqbzE_CIPBo
          claim_id: c_8avPhPGZPVSH2tSP5IY0eC
          source_id: s_HKsE92Q1zr71u5JPeo8ZE7
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第二十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HKsE92Q1zr71u5JPeo8ZE7
            source_type: api_record
            title: 中国历代人物传记资料库：王楚鳳（CBDB 305534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305534&o=json
            external_identifier: CBDB:305534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_MM7KWyMsCLLasX9X9VAU7R
        status: active
        display_name: 王宗堯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王楚鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王楚鳳，明人物。嘉靖二十三年進士，籍贯富順。（中国历代人物传记资料库 CBDB 305534） | accepted |
| name.primary | 王楚鳳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_MM7KWyMsCLLasX9X9VAU7R | 王宗堯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王楚鳳（CBDB 305534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305534&o=json)
