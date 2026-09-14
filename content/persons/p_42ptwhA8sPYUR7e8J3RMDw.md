---
schema: wang-person/v1
id: p_42ptwhA8sPYUR7e8J3RMDw
status: active
merged_into: null
display_name: 王緯
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_riGmQE5KoAXoduJGGevu73
        subject_person_id: p_42ptwhA8sPYUR7e8J3RMDw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D2eTphF1WtUqinuJkFaXpq
          claim_id: c_riGmQE5KoAXoduJGGevu73
          source_id: s_FPCz3943KBkhXmTzWPQ1BL
          stance: supports
          locator: CBDB:262437
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262437）
          source: &a1
            id: s_FPCz3943KBkhXmTzWPQ1BL
            source_type: api_record
            title: 中国历代人物传记资料库：王緯（CBDB 262437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262437&o=json
            external_identifier: CBDB:262437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8hQcMRHSUfm6YDwCzy1n6J
        subject_person_id: p_42ptwhA8sPYUR7e8J3RMDw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緯，明人物。弘治三年進士，籍贯開州。（中国历代人物传记资料库 CBDB 262437）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k7qPoKGBOavu7oGwxUWJJ3
          claim_id: c_8hQcMRHSUfm6YDwCzy1n6J
          source_id: s_FPCz3943KBkhXmTzWPQ1BL
          stance: supports
          locator: CBDB:262437
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FdxBLHNpD3ReBurQ3hsGNI
        subject_person_id: p_wqJCDPhDuiWCbHqgtTnEn4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_42ptwhA8sPYUR7e8J3RMDw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LhW6NlKrCbYbaITmoXN4gi
          claim_id: c_FdxBLHNpD3ReBurQ3hsGNI
          source_id: s_wE7_1gk-iIk4RAEvQVTewb
          stance: supports
          locator: CBDB：兄弟 王綸（126788）之父／母 王琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王緯 与 王綸 为同胞（CBDB 记「兄」），王綸 之父／母即 王緯 之父／母。
          source:
            id: s_wE7_1gk-iIk4RAEvQVTewb
            source_type: api_record
            title: 中国历代人物传记资料库：王緯（CBDB 262437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262437&o=json
            external_identifier: CBDB:262437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wqJCDPhDuiWCbHqgtTnEn4
        status: active
        display_name: 王琮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PibSvbWza73HnO67YmoDJ-
        subject_person_id: p_42ptwhA8sPYUR7e8J3RMDw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_4rX1RM4YkpctdzscWgdRsh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s8Q-VCTEFYibuMB7cTJZor
          claim_id: c_PibSvbWza73HnO67YmoDJ-
          source_id: s_wE7_1gk-iIk4RAEvQVTewb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126788 王綸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wE7_1gk-iIk4RAEvQVTewb
            source_type: api_record
            title: 中国历代人物传记资料库：王緯（CBDB 262437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262437&o=json
            external_identifier: CBDB:262437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4rX1RM4YkpctdzscWgdRsh
        status: active
        display_name: 王綸
        merged_into_person_id: null
---

# 王緯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緯 | accepted |
| bio.summary | 王緯，明人物。弘治三年進士，籍贯開州。（中国历代人物传记资料库 CBDB 262437） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wqJCDPhDuiWCbHqgtTnEn4 | 王琮 | accepted |
| other | p_4rX1RM4YkpctdzscWgdRsh | 王綸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王緯（CBDB 262437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262437&o=json)
