---
schema: wang-person/v1
id: p_araHbjoMHYRq9uqJtcwDVe
status: active
merged_into: null
display_name: 王愛
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dveqyYmNuxL869Qwqw8JMj
        subject_person_id: p_araHbjoMHYRq9uqJtcwDVe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4XKtHmKZCf3qzRCDNQ4P49
          claim_id: c_dveqyYmNuxL869Qwqw8JMj
          source_id: s_pzyDbCJy52tq6SMHvG815w
          stance: supports
          locator: CBDB:233972
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（233972）
          source: &a1
            id: s_pzyDbCJy52tq6SMHvG815w
            source_type: api_record
            title: 中国历代人物传记资料库：王愛（CBDB 233972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233972&o=json
            external_identifier: CBDB:233972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.734Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eFJc3SQWfA8abWKUXWBfVS
        subject_person_id: p_araHbjoMHYRq9uqJtcwDVe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愛，明人物。籍贯鄧州。（中国历代人物传记资料库 CBDB 233972）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GlKRht0LnF8CDaJygYMw_P
          claim_id: c_eFJc3SQWfA8abWKUXWBfVS
          source_id: s_pzyDbCJy52tq6SMHvG815w
          stance: supports
          locator: CBDB:233972
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ySJQ-Dx2vS-6UAymmjyaVu
        subject_person_id: p_vbmJR5uCeaqCSLSaANHLNi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_araHbjoMHYRq9uqJtcwDVe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QCIWWSNScB9Brc-nofALgD
          claim_id: c_ySJQ-Dx2vS-6UAymmjyaVu
          source_id: s_VTIQVMV0YKeOf4bb0FLZkC
          stance: supports
          locator: CBDB：兄弟 王聘（207693）之父／母 王朝卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王愛 与 王聘 为同胞（CBDB 记「兄」），王聘 之父／母即 王愛 之父／母。
          source:
            id: s_VTIQVMV0YKeOf4bb0FLZkC
            source_type: api_record
            title: 中国历代人物传记资料库：王愛（CBDB 233972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233972&o=json
            external_identifier: CBDB:233972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vbmJR5uCeaqCSLSaANHLNi
        status: active
        display_name: 王朝卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_1WmXuzYv4_l7_flqiUZAJ1
        subject_person_id: p_araHbjoMHYRq9uqJtcwDVe
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vV52H1GLe4mb587k9pj5Z2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BfawCHF2nlt6S3Ctobhpd3
          claim_id: c_1WmXuzYv4_l7_flqiUZAJ1
          source_id: s_VTIQVMV0YKeOf4bb0FLZkC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207693 王聘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VTIQVMV0YKeOf4bb0FLZkC
            source_type: api_record
            title: 中国历代人物传记资料库：王愛（CBDB 233972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233972&o=json
            external_identifier: CBDB:233972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vV52H1GLe4mb587k9pj5Z2
        status: active
        display_name: 王聘
        merged_into_person_id: null
---

# 王愛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愛 | accepted |
| bio.summary | 王愛，明人物。籍贯鄧州。（中国历代人物传记资料库 CBDB 233972） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vbmJR5uCeaqCSLSaANHLNi | 王朝卿 | accepted |
| other | p_vV52H1GLe4mb587k9pj5Z2 | 王聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愛（CBDB 233972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233972&o=json)
