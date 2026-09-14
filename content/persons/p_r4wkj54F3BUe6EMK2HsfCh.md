---
schema: wang-person/v1
id: p_r4wkj54F3BUe6EMK2HsfCh
status: active
merged_into: null
display_name: 王璵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UZgGNgxyKgmagnvTLcgAZX
        subject_person_id: p_r4wkj54F3BUe6EMK2HsfCh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zJvTQfLi6GAE57sy7A2Ba8
          claim_id: c_UZgGNgxyKgmagnvTLcgAZX
          source_id: s_iQvb25GP1U5wSzK2i6jkrN
          stance: supports
          locator: CBDB:287106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287106）
          source: &a1
            id: s_iQvb25GP1U5wSzK2i6jkrN
            source_type: api_record
            title: 中国历代人物传记资料库：王璵（CBDB 287106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287106&o=json
            external_identifier: CBDB:287106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.257Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EZR3QbtsyNJ7Yp7ckbqdF3
        subject_person_id: p_r4wkj54F3BUe6EMK2HsfCh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璵，明人物。永樂十年進士，籍贯代州。（中国历代人物传记资料库 CBDB 287106）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_77jCK3tabZBc96CTLIgMM6
          claim_id: c_EZR3QbtsyNJ7Yp7ckbqdF3
          source_id: s_iQvb25GP1U5wSzK2i6jkrN
          stance: supports
          locator: CBDB:287106
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1QK-FEprzbHT9fG2LyfI0a
        subject_person_id: p_WPx4EjSn2rHqao5Mj3syGV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r4wkj54F3BUe6EMK2HsfCh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GRu60eW2a8lLmuwRtZAHsm
          claim_id: c_1QK-FEprzbHT9fG2LyfI0a
          source_id: s_NZvE1QBUdS7UE4zOlN--rx
          stance: supports
          locator: CBDB：兄弟 王璜（202374）之父／母 王安道
          quotation: null
          interpretation_note: 由兄弟关系推断：王璵 与 王璜 为同胞（CBDB 记「兄」），王璜 之父／母即 王璵 之父／母。
          source:
            id: s_NZvE1QBUdS7UE4zOlN--rx
            source_type: api_record
            title: 中国历代人物传记资料库：王璵（CBDB 287106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287106&o=json
            external_identifier: CBDB:287106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WPx4EjSn2rHqao5Mj3syGV
        status: active
        display_name: 王安道
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_cftA8L0p7sSolwt97mpP-I
        subject_person_id: p_hMbDUQB1GaYNgCJcxGcWWL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_r4wkj54F3BUe6EMK2HsfCh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fdLPAH4sTsTpQAr9W-rqXt
          claim_id: c_cftA8L0p7sSolwt97mpP-I
          source_id: s_NZvE1QBUdS7UE4zOlN--rx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202374 王璜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NZvE1QBUdS7UE4zOlN--rx
            source_type: api_record
            title: 中国历代人物传记资料库：王璵（CBDB 287106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287106&o=json
            external_identifier: CBDB:287106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hMbDUQB1GaYNgCJcxGcWWL
        status: active
        display_name: 王璜
        merged_into_person_id: null
---

# 王璵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璵 | accepted |
| bio.summary | 王璵，明人物。永樂十年進士，籍贯代州。（中国历代人物传记资料库 CBDB 287106） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WPx4EjSn2rHqao5Mj3syGV | 王安道 | accepted |
| other | p_hMbDUQB1GaYNgCJcxGcWWL | 王璜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璵（CBDB 287106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287106&o=json)
