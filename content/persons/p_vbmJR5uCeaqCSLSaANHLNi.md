---
schema: wang-person/v1
id: p_vbmJR5uCeaqCSLSaANHLNi
status: active
merged_into: null
display_name: 王朝卿
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SnqMHAec5eFFCARho8ravu
        subject_person_id: p_vbmJR5uCeaqCSLSaANHLNi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PHFJBwm6YYiPiodNucvyZg
          claim_id: c_SnqMHAec5eFFCARho8ravu
          source_id: s_JPUoHK4HTPgdv3qDzUa2MG
          stance: supports
          locator: CBDB:233969
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（233969）
          source: &a1
            id: s_JPUoHK4HTPgdv3qDzUa2MG
            source_type: api_record
            title: 中国历代人物传记资料库：王朝卿（CBDB 233969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233969&o=json
            external_identifier: CBDB:233969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.733Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b4mCvgitRQvui3m3ZkWzTM
        subject_person_id: p_vbmJR5uCeaqCSLSaANHLNi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝卿，明人物。籍贯鄧州，曾任知縣、文林郎。（中国历代人物传记资料库 CBDB 233969）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-r6GF2SzZkTCNHVPlac0yQ
          claim_id: c_b4mCvgitRQvui3m3ZkWzTM
          source_id: s_JPUoHK4HTPgdv3qDzUa2MG
          stance: supports
          locator: CBDB:233969
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_WSjMToR4XmJm0VN3RvRcEq
        subject_person_id: p_vbmJR5uCeaqCSLSaANHLNi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vV52H1GLe4mb587k9pj5Z2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TrBfyqYzxE-wc6aO801TF7
          claim_id: c_WSjMToR4XmJm0VN3RvRcEq
          source_id: s_JPUoHK4HTPgdv3qDzUa2MG
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vV52H1GLe4mb587k9pj5Z2
        status: active
        display_name: 王聘
        merged_into_person_id: null
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
        id: p_araHbjoMHYRq9uqJtcwDVe
        status: active
        display_name: 王愛
        merged_into_person_id: null
    - claim:
        id: c_KF4JHYbJjRBXgFv4_gtBMh
        subject_person_id: p_vbmJR5uCeaqCSLSaANHLNi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rSZciCyS2LsAx5sqmuL67B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wAiXhi_-enB_So7o5DVfZj
          claim_id: c_KF4JHYbJjRBXgFv4_gtBMh
          source_id: s_7xPFkQq7FAmJdoz8a4lVpY
          stance: supports
          locator: CBDB：兄弟 王聘（207693）之父／母 王朝卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王取 与 王聘 为同胞（CBDB 记「兄」），王聘 之父／母即 王取 之父／母。
          source:
            id: s_7xPFkQq7FAmJdoz8a4lVpY
            source_type: api_record
            title: 中国历代人物传记资料库：王取（CBDB 233973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233973&o=json
            external_identifier: CBDB:233973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rSZciCyS2LsAx5sqmuL67B
        status: active
        display_name: 王取
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朝卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝卿 | accepted |
| bio.summary | 王朝卿，明人物。籍贯鄧州，曾任知縣、文林郎。（中国历代人物传记资料库 CBDB 233969） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_vV52H1GLe4mb587k9pj5Z2 | 王聘 | accepted |
| children | p_araHbjoMHYRq9uqJtcwDVe | 王愛 | accepted |
| children | p_rSZciCyS2LsAx5sqmuL67B | 王取 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愛（CBDB 233972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233972&o=json)
- [中国历代人物传记资料库：王朝卿（CBDB 233969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233969&o=json)
- [中国历代人物传记资料库：王取（CBDB 233973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233973&o=json)
