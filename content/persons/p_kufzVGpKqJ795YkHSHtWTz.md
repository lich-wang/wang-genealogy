---
schema: wang-person/v1
id: p_kufzVGpKqJ795YkHSHtWTz
status: active
merged_into: null
display_name: 王鍾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nB8XH1CEvi5JhW2uBr7AwV
        subject_person_id: p_kufzVGpKqJ795YkHSHtWTz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d3RXYh9JZNbowHoVTkMJs3
          claim_id: c_nB8XH1CEvi5JhW2uBr7AwV
          source_id: s_Q9w7DrPaqo9YtFyBnE5HeQ
          stance: supports
          locator: CBDB:309980
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309980）
          source: &a1
            id: s_Q9w7DrPaqo9YtFyBnE5HeQ
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾（CBDB 309980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309980&o=json
            external_identifier: CBDB:309980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.837Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZT69Xe19NDbifbDQtoC2jG
        subject_person_id: p_kufzVGpKqJ795YkHSHtWTz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾，明人物。嘉靖二十六年進士，籍贯黃巖，入仕監生。（中国历代人物传记资料库 CBDB 309980）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9-WdxuRvFj9OtxEl8IY7Cc
          claim_id: c_ZT69Xe19NDbifbDQtoC2jG
          source_id: s_Q9w7DrPaqo9YtFyBnE5HeQ
          stance: supports
          locator: CBDB:309980
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ryyQQs5KRYI7puu16VVY2t
        subject_person_id: p_YosdMcUNtRPKhCPMJYVZTM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kufzVGpKqJ795YkHSHtWTz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A8WJM-036sg9bbajbHliim
          claim_id: c_ryyQQs5KRYI7puu16VVY2t
          source_id: s_OXLTEmXo80POyZ4iTEL8Ix
          stance: supports
          locator: CBDB：兄弟 王鈴（203785）之父／母 王堂
          quotation: null
          interpretation_note: 由兄弟关系推断：王鍾 与 王鈴 为同胞（CBDB 记「弟」），王鈴 之父／母即 王鍾 之父／母。
          source:
            id: s_OXLTEmXo80POyZ4iTEL8Ix
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾（CBDB 309980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309980&o=json
            external_identifier: CBDB:309980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YosdMcUNtRPKhCPMJYVZTM
        status: active
        display_name: 王堂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_mnqNtdz4tHAawCGZTT4qaA
        subject_person_id: p_kufzVGpKqJ795YkHSHtWTz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zCPZcY2xcN9dUGQk5upMkt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JpeL2hB3TaPv0sK2vHnIZ3
          claim_id: c_mnqNtdz4tHAawCGZTT4qaA
          source_id: s_OXLTEmXo80POyZ4iTEL8Ix
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203785 王鈴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OXLTEmXo80POyZ4iTEL8Ix
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾（CBDB 309980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309980&o=json
            external_identifier: CBDB:309980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zCPZcY2xcN9dUGQk5upMkt
        status: active
        display_name: 王鈴
        merged_into_person_id: null
---

# 王鍾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍾 | accepted |
| bio.summary | 王鍾，明人物。嘉靖二十六年進士，籍贯黃巖，入仕監生。（中国历代人物传记资料库 CBDB 309980） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YosdMcUNtRPKhCPMJYVZTM | 王堂 | accepted |
| other | p_zCPZcY2xcN9dUGQk5upMkt | 王鈴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鍾（CBDB 309980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309980&o=json)
