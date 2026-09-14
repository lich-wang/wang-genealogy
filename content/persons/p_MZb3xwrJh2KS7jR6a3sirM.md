---
schema: wang-person/v1
id: p_MZb3xwrJh2KS7jR6a3sirM
status: active
merged_into: null
display_name: 王佐
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fEwNFoiG2cy8CwJb3dWHsq
        subject_person_id: p_MZb3xwrJh2KS7jR6a3sirM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CR6cb1ikpigpJCFPysZdBQ
          claim_id: c_fEwNFoiG2cy8CwJb3dWHsq
          source_id: s_AnmcwaF7HkbiztAFAk43Qs
          stance: supports
          locator: CBDB:226918
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（226918）
          source: &a1
            id: s_AnmcwaF7HkbiztAFAk43Qs
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 226918）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226918&o=json
            external_identifier: CBDB:226918
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zEJXMktZWCNy2XAgE363Mf
        subject_person_id: p_MZb3xwrJh2KS7jR6a3sirM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐，明人物。萬曆丙戌科進士進士，籍贯晉府儀衛司。（中国历代人物传记资料库 CBDB 226918）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F57pfGQftY16gaGtoBqUdE
          claim_id: c_zEJXMktZWCNy2XAgE363Mf
          source_id: s_AnmcwaF7HkbiztAFAk43Qs
          stance: supports
          locator: CBDB:226918
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TjCUKgGprlC1jmECIfdCkq
        subject_person_id: p_MZb3xwrJh2KS7jR6a3sirM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NGHFT8W3h8WaBq7fkVhjck
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jWX_LtZ9MwE3xZ2cPu7yzE
          claim_id: c_TjCUKgGprlC1jmECIfdCkq
          source_id: s_AnmcwaF7HkbiztAFAk43Qs
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百一十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NGHFT8W3h8WaBq7fkVhjck
        status: active
        display_name: 王立賢
        merged_into_person_id: null
    - claim:
        id: c_C8DhwefxfZU1VmKSti-U8Q
        subject_person_id: p_MZb3xwrJh2KS7jR6a3sirM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6jyxGrjQkpKvXQeAuBSg3Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xq1So-qMZ1m0bdqmPdTis3
          claim_id: c_C8DhwefxfZU1VmKSti-U8Q
          source_id: s_w3MuKEHEGUv7NGOT-42DWm
          stance: supports
          locator: CBDB：兄弟 王立賢（207055）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王志賢 与 王立賢 为同胞（CBDB 记「弟」），王立賢 之父／母即 王志賢 之父／母。
          source:
            id: s_w3MuKEHEGUv7NGOT-42DWm
            source_type: api_record
            title: 中国历代人物传记资料库：王志賢（CBDB 226928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226928&o=json
            external_identifier: CBDB:226928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6jyxGrjQkpKvXQeAuBSg3Z
        status: active
        display_name: 王志賢
        merged_into_person_id: null
    - claim:
        id: c_n3styXeG48CiLxuXD73vUz
        subject_person_id: p_MZb3xwrJh2KS7jR6a3sirM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fHK3CiQCVAuSCPFGRi3c2V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oKM5Cwq773PxB9MsIiT1CC
          claim_id: c_n3styXeG48CiLxuXD73vUz
          source_id: s_pTPq_qQGIuvg8L2jptBg3-
          stance: supports
          locator: CBDB：兄弟 王立賢（207055）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚賢 与 王立賢 为同胞（CBDB 记「弟」），王立賢 之父／母即 王尚賢 之父／母。
          source:
            id: s_pTPq_qQGIuvg8L2jptBg3-
            source_type: api_record
            title: 中国历代人物传记资料库：王尚賢（CBDB 226924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226924&o=json
            external_identifier: CBDB:226924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fHK3CiQCVAuSCPFGRi3c2V
        status: active
        display_name: 王尚賢
        merged_into_person_id: null
    - claim:
        id: c_-TKvb92tDuVQjXbA4ALjGr
        subject_person_id: p_MZb3xwrJh2KS7jR6a3sirM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fTTzxHqWY2cgpXDKBo2Hbb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YZ2EWPcp-zhmN_siPYup2d
          claim_id: c_-TKvb92tDuVQjXbA4ALjGr
          source_id: s_eY9tZDgYIobF8UsN-Tf2UR
          stance: supports
          locator: CBDB：兄弟 王立賢（207055）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王思賢 与 王立賢 为同胞（CBDB 记「兄」），王立賢 之父／母即 王思賢 之父／母。
          source:
            id: s_eY9tZDgYIobF8UsN-Tf2UR
            source_type: api_record
            title: 中国历代人物传记资料库：王思賢（CBDB 226930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226930&o=json
            external_identifier: CBDB:226930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fTTzxHqWY2cgpXDKBo2Hbb
        status: active
        display_name: 王思賢
        merged_into_person_id: null
    - claim:
        id: c_pi3NYEgChb_BS9hRdjXGcn
        subject_person_id: p_MZb3xwrJh2KS7jR6a3sirM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gTGhhZ4wcQDFUnuFCv55s7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NavR1Z3vvBIkdgtaID5DaE
          claim_id: c_pi3NYEgChb_BS9hRdjXGcn
          source_id: s_9NL5a6dFwj52u8h1nRZTSO
          stance: supports
          locator: CBDB：兄弟 王立賢（207055）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王大賢 与 王立賢 为同胞（CBDB 记「兄」），王立賢 之父／母即 王大賢 之父／母。
          source:
            id: s_9NL5a6dFwj52u8h1nRZTSO
            source_type: api_record
            title: 中国历代人物传记资料库：王大賢（CBDB 226931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226931&o=json
            external_identifier: CBDB:226931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gTGhhZ4wcQDFUnuFCv55s7
        status: active
        display_name: 王大賢
        merged_into_person_id: null
    - claim:
        id: c_UFtSJWh_PxnJBcw4PVxJ1V
        subject_person_id: p_MZb3xwrJh2KS7jR6a3sirM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hQRdPGFD2WJB8vdwgYoRQF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mizbE-VAuU3k6YBNyL1F-T
          claim_id: c_UFtSJWh_PxnJBcw4PVxJ1V
          source_id: s_gGUtqNqahMp2S0yfAlyj7v
          stance: supports
          locator: CBDB：兄弟 王立賢（207055）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王用賢 与 王立賢 为同胞（CBDB 记「弟」），王立賢 之父／母即 王用賢 之父／母。
          source:
            id: s_gGUtqNqahMp2S0yfAlyj7v
            source_type: api_record
            title: 中国历代人物传记资料库：王用賢（CBDB 226925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226925&o=json
            external_identifier: CBDB:226925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hQRdPGFD2WJB8vdwgYoRQF
        status: active
        display_name: 王用賢
        merged_into_person_id: null
    - claim:
        id: c_fDtgt64geEAUdmd8sHcmAd
        subject_person_id: p_MZb3xwrJh2KS7jR6a3sirM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oDmyZQnkohzndg2BepUC45
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aIRubg6nWhgUxYs-q2xQGJ
          claim_id: c_fDtgt64geEAUdmd8sHcmAd
          source_id: s_M0SfqXKMEr5mdMI0qEeZFy
          stance: supports
          locator: CBDB：兄弟 王立賢（207055）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王進賢 与 王立賢 为同胞（CBDB 记「弟」），王立賢 之父／母即 王進賢 之父／母。
          source:
            id: s_M0SfqXKMEr5mdMI0qEeZFy
            source_type: api_record
            title: 中国历代人物传记资料库：王進賢（CBDB 226926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226926&o=json
            external_identifier: CBDB:226926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oDmyZQnkohzndg2BepUC45
        status: active
        display_name: 王進賢
        merged_into_person_id: null
    - claim:
        id: c_jX713ahrP7elNecMeQb1q5
        subject_person_id: p_MZb3xwrJh2KS7jR6a3sirM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t8nThH7iwXcayKJ61i6XPf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vfhacDvUIeySJ3ljS_bI0G
          claim_id: c_jX713ahrP7elNecMeQb1q5
          source_id: s_q0Kpx0afRllLEX6VcT3NhF
          stance: supports
          locator: CBDB：兄弟 王立賢（207055）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王舉賢 与 王立賢 为同胞（CBDB 记「兄」），王立賢 之父／母即 王舉賢 之父／母。
          source:
            id: s_q0Kpx0afRllLEX6VcT3NhF
            source_type: api_record
            title: 中国历代人物传记资料库：王舉賢（CBDB 226929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226929&o=json
            external_identifier: CBDB:226929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_t8nThH7iwXcayKJ61i6XPf
        status: active
        display_name: 王舉賢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | 王佐，明人物。萬曆丙戌科進士進士，籍贯晉府儀衛司。（中国历代人物传记资料库 CBDB 226918） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NGHFT8W3h8WaBq7fkVhjck | 王立賢 | accepted |
| children | p_6jyxGrjQkpKvXQeAuBSg3Z | 王志賢 | accepted |
| children | p_fHK3CiQCVAuSCPFGRi3c2V | 王尚賢 | accepted |
| children | p_fTTzxHqWY2cgpXDKBo2Hbb | 王思賢 | accepted |
| children | p_gTGhhZ4wcQDFUnuFCv55s7 | 王大賢 | accepted |
| children | p_hQRdPGFD2WJB8vdwgYoRQF | 王用賢 | accepted |
| children | p_oDmyZQnkohzndg2BepUC45 | 王進賢 | accepted |
| children | p_t8nThH7iwXcayKJ61i6XPf | 王舉賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大賢（CBDB 226931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226931&o=json)
- [中国历代人物传记资料库：王進賢（CBDB 226926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226926&o=json)
- [中国历代人物传记资料库：王舉賢（CBDB 226929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226929&o=json)
- [中国历代人物传记资料库：王尚賢（CBDB 226924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226924&o=json)
- [中国历代人物传记资料库：王思賢（CBDB 226930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226930&o=json)
- [中国历代人物传记资料库：王用賢（CBDB 226925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226925&o=json)
- [中国历代人物传记资料库：王志賢（CBDB 226928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226928&o=json)
- [中国历代人物传记资料库：王佐（CBDB 226918）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226918&o=json)
