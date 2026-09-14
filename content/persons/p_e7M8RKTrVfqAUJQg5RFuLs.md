---
schema: wang-person/v1
id: p_e7M8RKTrVfqAUJQg5RFuLs
status: active
merged_into: null
display_name: 王璉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pU3S2ULi7N47LsLmCNffQK
        subject_person_id: p_e7M8RKTrVfqAUJQg5RFuLs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eEQnL7LRA2HLZSa5dyy1D4
          claim_id: c_pU3S2ULi7N47LsLmCNffQK
          source_id: s_Qhb946qDbE4tcnnuDfojHu
          stance: supports
          locator: CBDB:297101
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297101）
          source: &a1
            id: s_Qhb946qDbE4tcnnuDfojHu
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 297101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297101&o=json
            external_identifier: CBDB:297101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.546Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HMZ19USC8dWJu6qTJkjz6D
        subject_person_id: p_e7M8RKTrVfqAUJQg5RFuLs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉，明人物。景泰二年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 297101）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jGk7cbOLEr0LJjvRVIw3P1
          claim_id: c_HMZ19USC8dWJu6qTJkjz6D
          source_id: s_Qhb946qDbE4tcnnuDfojHu
          stance: supports
          locator: CBDB:297101
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eJlb-Jeg1jN2O_SKIinYcU
        subject_person_id: p_y8yYQA2hfedBaXHUn1hFL3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e7M8RKTrVfqAUJQg5RFuLs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N8Arj3qFtnirsaUN6rAtAH
          claim_id: c_eJlb-Jeg1jN2O_SKIinYcU
          source_id: s_oIPBHCmnI0cBcNOBMuAYJq
          stance: supports
          locator: CBDB：兄弟 王琳（198163）之父／母 王德威
          quotation: null
          interpretation_note: 由兄弟关系推断：王璉 与 王琳 为同胞（CBDB 记「兄」），王琳 之父／母即 王璉 之父／母。
          source:
            id: s_oIPBHCmnI0cBcNOBMuAYJq
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 297101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297101&o=json
            external_identifier: CBDB:297101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y8yYQA2hfedBaXHUn1hFL3
        status: active
        display_name: 王德威
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NfJyk_1KPCJ9Uluy1jtEqe
        subject_person_id: p_Va27aZRgdi5W8FWJiWP4zt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e7M8RKTrVfqAUJQg5RFuLs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DD2iP3APDnwZoP-kma1Z7q
          claim_id: c_NfJyk_1KPCJ9Uluy1jtEqe
          source_id: s_oIPBHCmnI0cBcNOBMuAYJq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198163 王琳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oIPBHCmnI0cBcNOBMuAYJq
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 297101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297101&o=json
            external_identifier: CBDB:297101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Va27aZRgdi5W8FWJiWP4zt
        status: active
        display_name: 王琳
        merged_into_person_id: null
---

# 王璉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璉 | accepted |
| bio.summary | 王璉，明人物。景泰二年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 297101） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_y8yYQA2hfedBaXHUn1hFL3 | 王德威 | accepted |
| other | p_Va27aZRgdi5W8FWJiWP4zt | 王琳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璉（CBDB 297101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297101&o=json)
