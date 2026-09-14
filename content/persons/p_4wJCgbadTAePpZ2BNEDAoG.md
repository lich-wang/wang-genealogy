---
schema: wang-person/v1
id: p_4wJCgbadTAePpZ2BNEDAoG
status: active
merged_into: null
display_name: 王憲
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gE4RjDRxpwZDYQ5zyDkKMg
        subject_person_id: p_4wJCgbadTAePpZ2BNEDAoG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BM1KSMvk7ia4GKcLebdUnn
          claim_id: c_gE4RjDRxpwZDYQ5zyDkKMg
          source_id: s_j9QtHgAMFKQAVkqGX1LKYM
          stance: supports
          locator: CBDB:68238
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68238）
          source: &a1
            id: s_j9QtHgAMFKQAVkqGX1LKYM
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 68238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68238&o=json
            external_identifier: CBDB:68238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.060Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dtXjN1tcVrPextNerB3J2i
        subject_person_id: p_4wJCgbadTAePpZ2BNEDAoG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1537年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VYcLGMF8N1eMt27UGhEv1o
          claim_id: c_dtXjN1tcVrPextNerB3J2i
          source_id: s_j9QtHgAMFKQAVkqGX1LKYM
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
        id: c_SrCWBQ5Xq82b68BBt2H4nQ
        subject_person_id: p_4wJCgbadTAePpZ2BNEDAoG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲（卒于1537年），明人物。明清進士進士，籍贯東平州，入仕進士，曾任兵部尚書、兵部右侍郎、兵部左侍郎。（中国历代人物传记资料库 CBDB 68238）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z0eeZvf6ebCMFJX2H75Tot
          claim_id: c_SrCWBQ5Xq82b68BBt2H4nQ
          source_id: s_j9QtHgAMFKQAVkqGX1LKYM
          stance: supports
          locator: CBDB:68238
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_60qAvW-spV_zzdNT1pZkXk
        subject_person_id: p_rR2pkPMo5WGEMnvA2UogPQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4wJCgbadTAePpZ2BNEDAoG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tKSX25XywiK2A4nP_A25LU
          claim_id: c_60qAvW-spV_zzdNT1pZkXk
          source_id: s_j9QtHgAMFKQAVkqGX1LKYM
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第九十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rR2pkPMo5WGEMnvA2UogPQ
        status: active
        display_name: 王智
        merged_into_person_id: null
  children:
    - claim:
        id: c_E0tAvWkRgyDv9HVVwcDXdU
        subject_person_id: p_4wJCgbadTAePpZ2BNEDAoG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZCfGVDKighqeDmYkscbvFX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UJadP5G0UkErCTgDCdDeGx
          claim_id: c_E0tAvWkRgyDv9HVVwcDXdU
          source_id: s_j9QtHgAMFKQAVkqGX1LKYM
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11899：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZCfGVDKighqeDmYkscbvFX
        status: active
        display_name: 王汝中
        merged_into_person_id: null
    - claim:
        id: c_3-r_A48O7XEWKLn4alVog2
        subject_person_id: p_4wJCgbadTAePpZ2BNEDAoG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a55izxWr7XvDUXinjUvb7x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2e1foLIDFQUCdRgBBUeI4J
          claim_id: c_3-r_A48O7XEWKLn4alVog2
          source_id: s_j9QtHgAMFKQAVkqGX1LKYM
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11899：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_a55izxWr7XvDUXinjUvb7x
        status: active
        display_name: 王汝成
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_VMm3kGSryeIuNGOd9JgLv6
        subject_person_id: p_4wJCgbadTAePpZ2BNEDAoG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_qiz1ADn3UiK3ToTHZEZvss
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XMIMupdRG3l7MkXivKNJT2
          claim_id: c_VMm3kGSryeIuNGOd9JgLv6
          source_id: s_FUU6BVcin2z2VyVLNLtSWS
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第九十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FUU6BVcin2z2VyVLNLtSWS
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王憲妻)（CBDB 262691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262691&o=json
            external_identifier: CBDB:262691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qiz1ADn3UiK3ToTHZEZvss
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_gaBzOPXjciBHhvdXZWtYNP
        subject_person_id: p_uxhVLerRTcA9k5jQSTXvFT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4wJCgbadTAePpZ2BNEDAoG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j8BpcUGgV6808XOE_xR4iN
          claim_id: c_gaBzOPXjciBHhvdXZWtYNP
          source_id: s_j9QtHgAMFKQAVkqGX1LKYM
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第九十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uxhVLerRTcA9k5jQSTXvFT
        status: active
        display_name: 王敬祖
        merged_into_person_id: null
    - claim:
        id: c_rgPMLaB2mn06Unpl6bsdJw
        subject_person_id: p_JW6QLVzTN64649V23d5qrG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4wJCgbadTAePpZ2BNEDAoG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xz5YePrYH32_p4tS_CzfKl
          claim_id: c_rgPMLaB2mn06Unpl6bsdJw
          source_id: s_j9QtHgAMFKQAVkqGX1LKYM
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第九十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JW6QLVzTN64649V23d5qrG
        status: active
        display_name: 王海
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_D_Xp6rGMkqG3F_apECuDD2
        subject_person_id: p_4wJCgbadTAePpZ2BNEDAoG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_7SQ9xV3CVicwxUW9gYt7Kj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nZSPWjhcoyi4_GeuGYAzGO
          claim_id: c_D_Xp6rGMkqG3F_apECuDD2
          source_id: s_j3bLtsJS0hP5CL9C1PJcou
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68238 王憲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_j3bLtsJS0hP5CL9C1PJcou
            source_type: api_record
            title: 中国历代人物传记资料库：王思（CBDB 262695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262695&o=json
            external_identifier: CBDB:262695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7SQ9xV3CVicwxUW9gYt7Kj
        status: active
        display_name: 王思
        merged_into_person_id: null
    - claim:
        id: c_KqCpk1pv3GfAm-KlqCUE8V
        subject_person_id: p_4wJCgbadTAePpZ2BNEDAoG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_S7j6mAqwQWbFrBFdzyP9JA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uvyD8XwggdPfBK9sJpt4Hi
          claim_id: c_KqCpk1pv3GfAm-KlqCUE8V
          source_id: s_-uWAgf0CoJN6wAnDRfYqVS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68238 王憲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-uWAgf0CoJN6wAnDRfYqVS
            source_type: api_record
            title: 中国历代人物传记资料库：王忞（CBDB 262694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262694&o=json
            external_identifier: CBDB:262694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S7j6mAqwQWbFrBFdzyP9JA
        status: active
        display_name: 王忞
        merged_into_person_id: null
    - claim:
        id: c_nYvrafX6fijCCFhwNnymFh
        subject_person_id: p_4wJCgbadTAePpZ2BNEDAoG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xykbTcJ8iM1jL4AntEfovQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k6BPSR2DrIVtK8_-iCZRmW
          claim_id: c_nYvrafX6fijCCFhwNnymFh
          source_id: s_gaRnKBOtHdoDCKdy6H7DT7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68238 王憲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gaRnKBOtHdoDCKdy6H7DT7
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 262693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262693&o=json
            external_identifier: CBDB:262693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xykbTcJ8iM1jL4AntEfovQ
        status: active
        display_name: 王志
        merged_into_person_id: null
---

# 王憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲 | accepted |
| death.date | 1537年 | accepted |
| bio.summary | 王憲（卒于1537年），明人物。明清進士進士，籍贯東平州，入仕進士，曾任兵部尚書、兵部右侍郎、兵部左侍郎。（中国历代人物传记资料库 CBDB 68238） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rR2pkPMo5WGEMnvA2UogPQ | 王智 | accepted |
| children | p_ZCfGVDKighqeDmYkscbvFX | 王汝中 | accepted |
| children | p_a55izxWr7XvDUXinjUvb7x | 王汝成 | accepted |
| spouses | p_qiz1ADn3UiK3ToTHZEZvss | 劉氏 | accepted |
| ancestors | p_uxhVLerRTcA9k5jQSTXvFT | 王敬祖 | accepted |
| ancestors | p_JW6QLVzTN64649V23d5qrG | 王海 | accepted |
| other | p_7SQ9xV3CVicwxUW9gYt7Kj | 王思 | accepted |
| other | p_S7j6mAqwQWbFrBFdzyP9JA | 王忞 | accepted |
| other | p_xykbTcJ8iM1jL4AntEfovQ | 王志 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王憲妻)（CBDB 262691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262691&o=json)
- [中国历代人物传记资料库：王忞（CBDB 262694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262694&o=json)
- [中国历代人物传记资料库：王思（CBDB 262695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262695&o=json)
- [中国历代人物传记资料库：王憲（CBDB 68238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68238&o=json)
- [中国历代人物传记资料库：王志（CBDB 262693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262693&o=json)
