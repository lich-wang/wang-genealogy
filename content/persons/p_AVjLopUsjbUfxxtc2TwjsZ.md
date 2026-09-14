---
schema: wang-person/v1
id: p_AVjLopUsjbUfxxtc2TwjsZ
status: active
merged_into: null
display_name: 王萬銘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4cBb9oaJqoMkxZ8dKxrz5v
        subject_person_id: p_AVjLopUsjbUfxxtc2TwjsZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_njSj2P6wq8Cm1gdRexWgvx
          claim_id: c_4cBb9oaJqoMkxZ8dKxrz5v
          source_id: s_yPhhAajLqpJk35ENPVZFRp
          stance: supports
          locator: CBDB:700321
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700321）
          source: &a1
            id: s_yPhhAajLqpJk35ENPVZFRp
            source_type: api_record
            title: 中国历代人物传记资料库：王萬銘（CBDB 700321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700321&o=json
            external_identifier: CBDB:700321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.592Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QJjWHhCwGmsYwMn3Y8Rvfd
        subject_person_id: p_AVjLopUsjbUfxxtc2TwjsZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬銘，清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 700321）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eHXSlGbNPblYEi0oXBHcb4
          claim_id: c_QJjWHhCwGmsYwMn3Y8Rvfd
          source_id: s_yPhhAajLqpJk35ENPVZFRp
          stance: supports
          locator: CBDB:700321
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0hQ716IjCu4vnTJV2wgwMB
        subject_person_id: p_XgEAQzQVt489QyUMTNB972
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AVjLopUsjbUfxxtc2TwjsZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ppSTIviBtzyRrZV0uB9VL1
          claim_id: c_0hQ716IjCu4vnTJV2wgwMB
          source_id: s_Xuy1CWpMxX0Vy9AoMlJ3Yb
          stance: supports
          locator: CBDB：兄弟 王萬鑑（700317）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王萬銘 与 王萬鑑 为同胞（CBDB 记「兄」），王萬鑑 之父／母即 王萬銘 之父／母。
          source:
            id: s_Xuy1CWpMxX0Vy9AoMlJ3Yb
            source_type: api_record
            title: 中国历代人物传记资料库：王萬銘（CBDB 700321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700321&o=json
            external_identifier: CBDB:700321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XgEAQzQVt489QyUMTNB972
        status: active
        display_name: 王維城
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OEBYiPEJz588HcckY7JDYJ
        subject_person_id: p_AVjLopUsjbUfxxtc2TwjsZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GWFRAzEGpCz4Hv1DHTKVjt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_smBOAsJ1o2CFCp4MSyVCOp
          claim_id: c_OEBYiPEJz588HcckY7JDYJ
          source_id: s_Xuy1CWpMxX0Vy9AoMlJ3Yb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 700317 王萬鑑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Xuy1CWpMxX0Vy9AoMlJ3Yb
            source_type: api_record
            title: 中国历代人物传记资料库：王萬銘（CBDB 700321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700321&o=json
            external_identifier: CBDB:700321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GWFRAzEGpCz4Hv1DHTKVjt
        status: active
        display_name: 王萬鑑
        merged_into_person_id: null
---

# 王萬銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬銘 | accepted |
| bio.summary | 王萬銘，清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 700321） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XgEAQzQVt489QyUMTNB972 | 王維城 | accepted |
| other | p_GWFRAzEGpCz4Hv1DHTKVjt | 王萬鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王萬銘（CBDB 700321）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700321&o=json)
