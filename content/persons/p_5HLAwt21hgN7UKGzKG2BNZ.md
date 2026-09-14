---
schema: wang-person/v1
id: p_5HLAwt21hgN7UKGzKG2BNZ
status: active
merged_into: null
display_name: 王璘
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uMxZCsbJ3HRDfzzxgQfioW
        subject_person_id: p_5HLAwt21hgN7UKGzKG2BNZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M8yVLDu8v3v4wYeqg3w98W
          claim_id: c_uMxZCsbJ3HRDfzzxgQfioW
          source_id: s_VQ1w5GCNNwxFizLZSJC9Ld
          stance: supports
          locator: CBDB:22213
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22213）
          source: &a1
            id: s_VQ1w5GCNNwxFizLZSJC9Ld
            source_type: api_record
            title: 中国历代人物传记资料库：王璘（CBDB 22213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22213&o=json
            external_identifier: CBDB:22213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.848Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_a8W6w8diWQHzZ8i5uxLN98
        subject_person_id: p_5HLAwt21hgN7UKGzKG2BNZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 922年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_18fi5sjSnR7AW7J5HZWbaN
          claim_id: c_a8W6w8diWQHzZ8i5uxLN98
          source_id: s_VQ1w5GCNNwxFizLZSJC9Ld
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_X4Vn3eT92ZB2pYu87QpmMS
        subject_person_id: p_5HLAwt21hgN7UKGzKG2BNZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 984年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JLtKeewmVKqn39KaFn3ceU
          claim_id: c_X4Vn3eT92ZB2pYu87QpmMS
          source_id: s_VQ1w5GCNNwxFizLZSJC9Ld
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uTToV1LjQRJx5FBJNve6wM
        subject_person_id: p_5HLAwt21hgN7UKGzKG2BNZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璘（922年—984年），宋人物。籍贯臨城，入仕封贈，曾任州上佐。（中国历代人物传记资料库 CBDB 22213）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Tp6s_7z4c1K7s7oUsYHCVG
          claim_id: c_uTToV1LjQRJx5FBJNve6wM
          source_id: s_VQ1w5GCNNwxFizLZSJC9Ld
          stance: supports
          locator: CBDB:22213
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yMGxJaBFG0kzp-_QZRqXvW
        subject_person_id: p_QKqRb3WxFKBxBgiGZhQ1YL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5HLAwt21hgN7UKGzKG2BNZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XaYLeOSn1d7Yw5WNlKsQRZ
          claim_id: c_yMGxJaBFG0kzp-_QZRqXvW
          source_id: s_VQ1w5GCNNwxFizLZSJC9Ld
          stance: supports
          locator: CBDB 双向互证（父 王忠信 ⇄ 子 王璘）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_QKqRb3WxFKBxBgiGZhQ1YL
        status: active
        display_name: 王忠信
        merged_into_person_id: null
  children:
    - claim:
        id: c_XsBxmOSKLt_QvjMj-2g2wj
        subject_person_id: p_5HLAwt21hgN7UKGzKG2BNZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1EatzxCEuA8v7SeSNyZF3y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XqQQdl6jZdeoFCvu4ey9Pq
          claim_id: c_XsBxmOSKLt_QvjMj-2g2wj
          source_id: s_LFSav72YdHRoFFrNfNU1Jf
          stance: supports
          locator: 宋代墓誌輯釋，大宋贈秘書少監王府君（璘）墓誌銘并序：五男
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LFSav72YdHRoFFrNfNU1Jf
            source_type: api_record
            title: 中国历代人物传记资料库：王仲方（CBDB 690111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690111&o=json
            external_identifier: CBDB:690111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.480Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1EatzxCEuA8v7SeSNyZF3y
        status: active
        display_name: 王仲方
        merged_into_person_id: null
    - claim:
        id: c_pJZsV2yTKcprY57MTsGhPz
        subject_person_id: p_5HLAwt21hgN7UKGzKG2BNZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_74h9Xaur9r63q3McbnuK7q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hLpnzjXEfbSkw4G6m6_MRN
          claim_id: c_pJZsV2yTKcprY57MTsGhPz
          source_id: s_o7Nk3SEYM5vBbhsK8ykKF_
          stance: supports
          locator: CBDB 亲属：父（KinPerson 22213）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_o7Nk3SEYM5vBbhsK8ykKF_
            source_type: api_record
            title: 中国历代人物传记资料库：王德方（CBDB 690110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690110&o=json
            external_identifier: CBDB:690110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_74h9Xaur9r63q3McbnuK7q
        status: active
        display_name: 王德方
        merged_into_person_id: null
    - claim:
        id: c_rAc6hTrBYVKKJ4fZw6m069
        subject_person_id: p_5HLAwt21hgN7UKGzKG2BNZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_US4eLy7x2zzLSMfjLbzrxz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GeBWzo7B9q9RQIa9fbN9ek
          claim_id: c_rAc6hTrBYVKKJ4fZw6m069
          source_id: s_aDAVqpFo2X-5IZW3CHo0eb
          stance: supports
          locator: CBDB 亲属：父（KinPerson 22213）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_aDAVqpFo2X-5IZW3CHo0eb
            source_type: api_record
            title: 中国历代人物传记资料库：王鬴（CBDB 690113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690113&o=json
            external_identifier: CBDB:690113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_US4eLy7x2zzLSMfjLbzrxz
        status: active
        display_name: 王鬴
        merged_into_person_id: null
    - claim:
        id: c_LkouFS8-Fz0EX2RAFr4qnN
        subject_person_id: p_5HLAwt21hgN7UKGzKG2BNZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dCCDXRHgBkU81qJnpQC4CC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Pj8c_Xz0Pgv_9CHBfodT2D
          claim_id: c_LkouFS8-Fz0EX2RAFr4qnN
          source_id: s_-kfDKVO0f3Bd8Zf5NP6U6q
          stance: supports
          locator: CBDB 亲属：父（KinPerson 22213）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_-kfDKVO0f3Bd8Zf5NP6U6q
            source_type: api_record
            title: 中国历代人物传记资料库：王義方（CBDB 690109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690109&o=json
            external_identifier: CBDB:690109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dCCDXRHgBkU81qJnpQC4CC
        status: active
        display_name: 王義方
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_DAcE9UwdezF23Ti84FrBQ9
        subject_person_id: p_5HLAwt21hgN7UKGzKG2BNZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qRpWWBuEscFAJ2egEJ7Za7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oepBuu0N4D-XAgVXzxeqUo
          claim_id: c_DAcE9UwdezF23Ti84FrBQ9
          source_id: s_VQ1w5GCNNwxFizLZSJC9Ld
          stance: supports
          locator: CBDB 双向互证（孫 王淳 ⇄ 祖父 王璘）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_qRpWWBuEscFAJ2egEJ7Za7
        status: active
        display_name: 王淳
        merged_into_person_id: null
    - claim:
        id: c_22BzDokw3MU9YGwxGWXM0p
        subject_person_id: p_5HLAwt21hgN7UKGzKG2BNZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cZE8zfM6oQN4r6dSAfrgZq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LqMNPEKhzcHGizcTfiIWtk
          claim_id: c_22BzDokw3MU9YGwxGWXM0p
          source_id: s_VQ1w5GCNNwxFizLZSJC9Ld
          stance: supports
          locator: CBDB 双向互证（孫 王正猷 ⇄ 祖父 王璘）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_cZE8zfM6oQN4r6dSAfrgZq
        status: active
        display_name: 王正猷
        merged_into_person_id: null
    - claim:
        id: c_BNnCB44aqjJv_Psx98Aujl
        subject_person_id: p_5HLAwt21hgN7UKGzKG2BNZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ekok2QicRh9xT1ABB2vgky
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hmtQ3bZQXpfWoXejfiTCI8
          claim_id: c_BNnCB44aqjJv_Psx98Aujl
          source_id: s_VQ1w5GCNNwxFizLZSJC9Ld
          stance: supports
          locator: CBDB 双向互证（孫 王正己 ⇄ 祖父 王璘）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Ekok2QicRh9xT1ABB2vgky
        status: active
        display_name: 王正己
        merged_into_person_id: null
    - claim:
        id: c_9i3G6ov08xNeIuFZEdXOun
        subject_person_id: p_5HLAwt21hgN7UKGzKG2BNZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Kj4ytmcahCKQUcRDjse4D7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_57SKX72sXi4OLcNbnMM6AK
          claim_id: c_9i3G6ov08xNeIuFZEdXOun
          source_id: s_VQ1w5GCNNwxFizLZSJC9Ld
          stance: supports
          locator: CBDB 双向互证（孫 王正平 ⇄ 祖父 王璘）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Kj4ytmcahCKQUcRDjse4D7
        status: active
        display_name: 王正平
        merged_into_person_id: null
    - claim:
        id: c_pW0qBDhFQDNuWObVTjHNJq
        subject_person_id: p_5HLAwt21hgN7UKGzKG2BNZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JkUMbeQ2ftZGvT2p3qULjf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rASvsSyqEcTXcCrFdWyq5M
          claim_id: c_pW0qBDhFQDNuWObVTjHNJq
          source_id: s_VQ1w5GCNNwxFizLZSJC9Ld
          stance: supports
          locator: CBDB 双向互证（孫 王正規 ⇄ 祖父 王璘）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_JkUMbeQ2ftZGvT2p3qULjf
        status: active
        display_name: 王正規
        merged_into_person_id: null
    - claim:
        id: c_60tDoz02sD4O0eumCJu6bN
        subject_person_id: p_5HLAwt21hgN7UKGzKG2BNZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gXd4mm2C3Ftk3v6NRSLbkx
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FOWMJtMc375tiYz0U7-kC_
          claim_id: c_60tDoz02sD4O0eumCJu6bN
          source_id: s_VQ1w5GCNNwxFizLZSJC9Ld
          stance: supports
          locator: CBDB 双向互证（孫 王正臣 ⇄ 祖父 王璘）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_gXd4mm2C3Ftk3v6NRSLbkx
        status: active
        display_name: 王正臣
        merged_into_person_id: null
  other: []
---

# 王璘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璘 | accepted |
| birth.date | 922年 | accepted |
| death.date | 984年 | accepted |
| bio.summary | 王璘（922年—984年），宋人物。籍贯臨城，入仕封贈，曾任州上佐。（中国历代人物传记资料库 CBDB 22213） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QKqRb3WxFKBxBgiGZhQ1YL | 王忠信 | accepted |
| children | p_1EatzxCEuA8v7SeSNyZF3y | 王仲方 | accepted |
| children | p_74h9Xaur9r63q3McbnuK7q | 王德方 | accepted |
| children | p_US4eLy7x2zzLSMfjLbzrxz | 王鬴 | accepted |
| children | p_dCCDXRHgBkU81qJnpQC4CC | 王義方 | accepted |
| descendants | p_qRpWWBuEscFAJ2egEJ7Za7 | 王淳 | accepted |
| descendants | p_cZE8zfM6oQN4r6dSAfrgZq | 王正猷 | accepted |
| descendants | p_Ekok2QicRh9xT1ABB2vgky | 王正己 | accepted |
| descendants | p_Kj4ytmcahCKQUcRDjse4D7 | 王正平 | accepted |
| descendants | p_JkUMbeQ2ftZGvT2p3qULjf | 王正規 | accepted |
| descendants | p_gXd4mm2C3Ftk3v6NRSLbkx | 王正臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德方（CBDB 690110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690110&o=json)
- [中国历代人物传记资料库：王鬴（CBDB 690113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690113&o=json)
- [中国历代人物传记资料库：王璘（CBDB 22213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22213&o=json)
- [中国历代人物传记资料库：王義方（CBDB 690109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690109&o=json)
- [中国历代人物传记资料库：王仲方（CBDB 690111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690111&o=json)
