---
schema: wang-person/v1
id: p_5CsnxPJ1Pqskb685MNmLx9
status: active
merged_into: null
display_name: 王鎬
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7i1SUi3n6vsNeNAzyRNctk
        subject_person_id: p_5CsnxPJ1Pqskb685MNmLx9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L7x8qFjNqveNzoG4M7s1BR
          claim_id: c_7i1SUi3n6vsNeNAzyRNctk
          source_id: s_HnV2yB88d2LDzZ44BKY5Y3
          stance: supports
          locator: CBDB:241137
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241137）
          source: &a1
            id: s_HnV2yB88d2LDzZ44BKY5Y3
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 241137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241137&o=json
            external_identifier: CBDB:241137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.945Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eDfUuEFbHiUAu2oPsvHE9Z
        subject_person_id: p_5CsnxPJ1Pqskb685MNmLx9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬，明人物。正統十三年進士，籍贯和州，曾任戶部員外郎。（中国历代人物传记资料库 CBDB 241137）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kTAVyPhRpAGUXAbo22n_Ey
          claim_id: c_eDfUuEFbHiUAu2oPsvHE9Z
          source_id: s_HnV2yB88d2LDzZ44BKY5Y3
          stance: supports
          locator: CBDB:241137
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LfEinVRzYAVCn_mf5oHGD-
        subject_person_id: p_5CsnxPJ1Pqskb685MNmLx9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UAY42Qb6NjwF-Mt8z5hFeq
          claim_id: c_LfEinVRzYAVCn_mf5oHGD-
          source_id: s_HnV2yB88d2LDzZ44BKY5Y3
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第五十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bF6WY3wgJWVigFgpBLaV3H
        status: active
        display_name: 王璽
        merged_into_person_id: null
    - claim:
        id: c_pNOU0Vt-DYU1k0naZ2OwBq
        subject_person_id: p_5CsnxPJ1Pqskb685MNmLx9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KAGyyPJ4MA1BSHCDetACZX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E5wVqwp1NT03lAIo9vs8qw
          claim_id: c_pNOU0Vt-DYU1k0naZ2OwBq
          source_id: s_echzJn33Iy__b3emBL5cws
          stance: supports
          locator: CBDB：兄弟 王璽（126869）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王琪 与 王璽 为同胞（CBDB 记「弟」），王璽 之父／母即 王琪 之父／母。
          source:
            id: s_echzJn33Iy__b3emBL5cws
            source_type: api_record
            title: 中国历代人物传记资料库：王琪（CBDB 241140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241140&o=json
            external_identifier: CBDB:241140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KAGyyPJ4MA1BSHCDetACZX
        status: active
        display_name: 王琪
        merged_into_person_id: null
    - claim:
        id: c_if2AfVir-QS8bSYbuCgXlO
        subject_person_id: p_5CsnxPJ1Pqskb685MNmLx9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mLduwh3PRLCgxrhBnwR2sb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fV97zW3IG9G44C9OQmxu3a
          claim_id: c_if2AfVir-QS8bSYbuCgXlO
          source_id: s_j2aqBVao9rLAqJQ0WbYebp
          stance: supports
          locator: CBDB：兄弟 王璽（126869）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑜 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王瑜 之父／母。
          source:
            id: s_j2aqBVao9rLAqJQ0WbYebp
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 241144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241144&o=json
            external_identifier: CBDB:241144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mLduwh3PRLCgxrhBnwR2sb
        status: active
        display_name: 王瑜
        merged_into_person_id: null
    - claim:
        id: c_RMCSwDL4CjiW-NZnzMI5Xp
        subject_person_id: p_5CsnxPJ1Pqskb685MNmLx9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mdGE4iAKLrnoGXRcNuRgmr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yTpy6bvB-vaeCuZZnUbaLc
          claim_id: c_RMCSwDL4CjiW-NZnzMI5Xp
          source_id: s_7St6wLZpaUNgyuGcnt1dxs
          stance: supports
          locator: CBDB：兄弟 王璽（126869）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王琮 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王琮 之父／母。
          source:
            id: s_7St6wLZpaUNgyuGcnt1dxs
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 241146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241146&o=json
            external_identifier: CBDB:241146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mdGE4iAKLrnoGXRcNuRgmr
        status: active
        display_name: 王琮
        merged_into_person_id: null
    - claim:
        id: c_gDF3uJ7G8-Eg0t-aVtc0IY
        subject_person_id: p_5CsnxPJ1Pqskb685MNmLx9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_myWGEdMf9oQRaYDVQ5B4AT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VHbgwPai5ctwU1DsXiu4oN
          claim_id: c_gDF3uJ7G8-Eg0t-aVtc0IY
          source_id: s_Ru1_5q5pi3Iw1cgED0OVGZ
          stance: supports
          locator: CBDB：兄弟 王璽（126869）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王珉 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王珉 之父／母。
          source:
            id: s_Ru1_5q5pi3Iw1cgED0OVGZ
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 241145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241145&o=json
            external_identifier: CBDB:241145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_myWGEdMf9oQRaYDVQ5B4AT
        status: active
        display_name: 王珉
        merged_into_person_id: null
    - claim:
        id: c_XNiv7jWmrPWOGiZMmDa1HH
        subject_person_id: p_5CsnxPJ1Pqskb685MNmLx9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qpXowMgyHyNwAFFkG4Vfky
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XrHHpsopIzyxiN9m2ev8P3
          claim_id: c_XNiv7jWmrPWOGiZMmDa1HH
          source_id: s___JZAw4TrrYB5-hraLM2SN
          stance: supports
          locator: CBDB：兄弟 王璽（126869）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王璟 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王璟 之父／母。
          source:
            id: s___JZAw4TrrYB5-hraLM2SN
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 241143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241143&o=json
            external_identifier: CBDB:241143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qpXowMgyHyNwAFFkG4Vfky
        status: active
        display_name: 王璟
        merged_into_person_id: null
    - claim:
        id: c_EIZY645RWzeJxq31vnO4C8
        subject_person_id: p_5CsnxPJ1Pqskb685MNmLx9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tq3WBS19JRoVJUH3RrY8U5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jdKeKW8rygzsizMCl7XxKS
          claim_id: c_EIZY645RWzeJxq31vnO4C8
          source_id: s_l_TCYOzPHS4qq57l8TBSU5
          stance: supports
          locator: CBDB：兄弟 王璽（126869）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王璿 与 王璽 为同胞（CBDB 记「弟」），王璽 之父／母即 王璿 之父／母。
          source:
            id: s_l_TCYOzPHS4qq57l8TBSU5
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 241141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241141&o=json
            external_identifier: CBDB:241141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tq3WBS19JRoVJUH3RrY8U5
        status: active
        display_name: 王璿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鎬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎬 | accepted |
| bio.summary | 王鎬，明人物。正統十三年進士，籍贯和州，曾任戶部員外郎。（中国历代人物传记资料库 CBDB 241137） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bF6WY3wgJWVigFgpBLaV3H | 王璽 | accepted |
| children | p_KAGyyPJ4MA1BSHCDetACZX | 王琪 | accepted |
| children | p_mLduwh3PRLCgxrhBnwR2sb | 王瑜 | accepted |
| children | p_mdGE4iAKLrnoGXRcNuRgmr | 王琮 | accepted |
| children | p_myWGEdMf9oQRaYDVQ5B4AT | 王珉 | accepted |
| children | p_qpXowMgyHyNwAFFkG4Vfky | 王璟 | accepted |
| children | p_tq3WBS19JRoVJUH3RrY8U5 | 王璿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 241146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241146&o=json)
- [中国历代人物传记资料库：王鎬（CBDB 241137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241137&o=json)
- [中国历代人物传记资料库：王璟（CBDB 241143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241143&o=json)
- [中国历代人物传记资料库：王珉（CBDB 241145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241145&o=json)
- [中国历代人物传记资料库：王琪（CBDB 241140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241140&o=json)
- [中国历代人物传记资料库：王璿（CBDB 241141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241141&o=json)
- [中国历代人物传记资料库：王瑜（CBDB 241144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241144&o=json)
