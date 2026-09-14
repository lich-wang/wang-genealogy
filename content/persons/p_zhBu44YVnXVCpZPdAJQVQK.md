---
schema: wang-person/v1
id: p_zhBu44YVnXVCpZPdAJQVQK
status: active
merged_into: null
display_name: 王汝梅
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hwhZZk99vK1RXohh8PufCE
        subject_person_id: p_zhBu44YVnXVCpZPdAJQVQK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝梅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5PFB2rBSPFVG1ic2fZVCny
          claim_id: c_hwhZZk99vK1RXohh8PufCE
          source_id: s_C4UBeXfs2nBtQg4EvhxKSF
          stance: supports
          locator: CBDB:205063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205063）
          source: &a1
            id: s_C4UBeXfs2nBtQg4EvhxKSF
            source_type: api_record
            title: 中国历代人物传记资料库：王汝梅（CBDB 205063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205063&o=json
            external_identifier: CBDB:205063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.849Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6mAzt5DSE9HHWHBP2unZiu
        subject_person_id: p_zhBu44YVnXVCpZPdAJQVQK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1531年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bHCCNk58PSMQu5aoBxeM2n
          claim_id: c_6mAzt5DSE9HHWHBP2unZiu
          source_id: s_C4UBeXfs2nBtQg4EvhxKSF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9y1xiE5A3nPajgfWN2DN4q
        subject_person_id: p_zhBu44YVnXVCpZPdAJQVQK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝梅（生于1531年），明人物。明清進士進士，籍贯安肅，入仕進士。（中国历代人物传记资料库 CBDB 205063）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PmyvZgwykoYcVy8BPsh4rN
          claim_id: c_9y1xiE5A3nPajgfWN2DN4q
          source_id: s_C4UBeXfs2nBtQg4EvhxKSF
          stance: supports
          locator: CBDB:205063
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6sLabh4TSAHrIeJfUc6t7_
        subject_person_id: p_UKG4Ew4EBc4jxmGX5ju4GS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zhBu44YVnXVCpZPdAJQVQK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0K6NeP675w1r-DCjX6PGk7
          claim_id: c_6sLabh4TSAHrIeJfUc6t7_
          source_id: s_rW3JPZvgLDcwDZ3eCYqxaB
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第六十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rW3JPZvgLDcwDZ3eCYqxaB
            source_type: api_record
            title: 中国历代人物传记资料库：王廷珪（CBDB 327811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327811&o=json
            external_identifier: CBDB:327811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UKG4Ew4EBc4jxmGX5ju4GS
        status: active
        display_name: 王廷珪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_WVJKlRDNcE53BudrTN7j8z
        subject_person_id: p_5JWhrgQ55KJzgg5Qr1fEwL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zhBu44YVnXVCpZPdAJQVQK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a0bIBlLvqgK2efu1jTyDyr
          claim_id: c_WVJKlRDNcE53BudrTN7j8z
          source_id: s_wpXb4VmDxxADhyGZ4QTLxP
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第六十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wpXb4VmDxxADhyGZ4QTLxP
            source_type: api_record
            title: 中国历代人物传记资料库：王天章（CBDB 327810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327810&o=json
            external_identifier: CBDB:327810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5JWhrgQ55KJzgg5Qr1fEwL
        status: active
        display_name: 王天章
        merged_into_person_id: null
    - claim:
        id: c_80rtDoRJSCe8sW_lR9XvXO
        subject_person_id: p_q4Bw5w4JjtG4gYfTpWG8zM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zhBu44YVnXVCpZPdAJQVQK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cJpS1qFmkRVuvccScioYIz
          claim_id: c_80rtDoRJSCe8sW_lR9XvXO
          source_id: s_fHnuR38ukYSTFJx6xo94a8
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第六十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fHnuR38ukYSTFJx6xo94a8
            source_type: api_record
            title: 中国历代人物传记资料库：王輅（CBDB 327809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327809&o=json
            external_identifier: CBDB:327809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.258Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_q4Bw5w4JjtG4gYfTpWG8zM
        status: active
        display_name: 王輅
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_hubbOG5-zmAmjstpS4u7fp
        subject_person_id: p_1Wxa53xetb3J3sQw5Cyh8C
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zhBu44YVnXVCpZPdAJQVQK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oJyZL6JNQ88uQHEzmwMVtr
          claim_id: c_hubbOG5-zmAmjstpS4u7fp
          source_id: s_LVJHwP32kITf88fsctVxDS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205063 王汝梅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LVJHwP32kITf88fsctVxDS
            source_type: api_record
            title: 中国历代人物传记资料库：王汝極（CBDB 327815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327815&o=json
            external_identifier: CBDB:327815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1Wxa53xetb3J3sQw5Cyh8C
        status: active
        display_name: 王汝極
        merged_into_person_id: null
    - claim:
        id: c_2ssaH_9SqOupn6JymPwiYH
        subject_person_id: p_CiLSTCC3N8DAUR8xAJgkdT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zhBu44YVnXVCpZPdAJQVQK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bbeWNfYSs-qLwDoqor9apx
          claim_id: c_2ssaH_9SqOupn6JymPwiYH
          source_id: s_b3L2WkSzzeyYCmeQgXfgw1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205063 王汝梅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_b3L2WkSzzeyYCmeQgXfgw1
            source_type: api_record
            title: 中国历代人物传记资料库：王汝霖（CBDB 327816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327816&o=json
            external_identifier: CBDB:327816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CiLSTCC3N8DAUR8xAJgkdT
        status: active
        display_name: 王汝霖
        merged_into_person_id: null
    - claim:
        id: c_EWzuNI4vdWAXbVUU9JYYk8
        subject_person_id: p_MvDJZDEzqAS25HLuuBsUHX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zhBu44YVnXVCpZPdAJQVQK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ogkj8FpuB1vdEFtlDmLatB
          claim_id: c_EWzuNI4vdWAXbVUU9JYYk8
          source_id: s_-6da2U72qen45CSjSgfwtf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205063 王汝梅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-6da2U72qen45CSjSgfwtf
            source_type: api_record
            title: 中国历代人物传记资料库：王汝樞（CBDB 327814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327814&o=json
            external_identifier: CBDB:327814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MvDJZDEzqAS25HLuuBsUHX
        status: active
        display_name: 王汝樞
        merged_into_person_id: null
---

# 王汝梅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝梅 | accepted |
| birth.date | 1531年 | accepted |
| bio.summary | 王汝梅（生于1531年），明人物。明清進士進士，籍贯安肅，入仕進士。（中国历代人物传记资料库 CBDB 205063） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UKG4Ew4EBc4jxmGX5ju4GS | 王廷珪 | accepted |
| ancestors | p_5JWhrgQ55KJzgg5Qr1fEwL | 王天章 | accepted |
| ancestors | p_q4Bw5w4JjtG4gYfTpWG8zM | 王輅 | accepted |
| other | p_1Wxa53xetb3J3sQw5Cyh8C | 王汝極 | accepted |
| other | p_CiLSTCC3N8DAUR8xAJgkdT | 王汝霖 | accepted |
| other | p_MvDJZDEzqAS25HLuuBsUHX | 王汝樞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輅（CBDB 327809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327809&o=json)
- [中国历代人物传记资料库：王汝極（CBDB 327815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327815&o=json)
- [中国历代人物传记资料库：王汝霖（CBDB 327816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327816&o=json)
- [中国历代人物传记资料库：王汝梅（CBDB 205063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205063&o=json)
- [中国历代人物传记资料库：王汝樞（CBDB 327814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327814&o=json)
- [中国历代人物传记资料库：王天章（CBDB 327810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327810&o=json)
- [中国历代人物传记资料库：王廷珪（CBDB 327811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327811&o=json)
