---
schema: wang-person/v1
id: p_dSXaHGfxZk39n9qckAbpLw
status: active
merged_into: null
display_name: 王用政
cbdb_id: 250477
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vmY5EVnpeSLc6PadbMrZcq
        subject_person_id: p_dSXaHGfxZk39n9qckAbpLw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用政，明人物。成化十一年進士，籍贯南城。（中国历代人物传记资料库 CBDB 250477）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_RuPQ12xBaRbNuxRE9jkv2K
          claim_id: c_vmY5EVnpeSLc6PadbMrZcq
          source_id: s_sTuAW34aPExbNHoS859wLd
          stance: supports
          locator: CBDB:250477
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sTuAW34aPExbNHoS859wLd
            source_type: api_record
            title: 中国历代人物传记资料库：王用政（CBDB 250477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250477&o=json
            external_identifier: CBDB:250477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rHsGzzYcBavQghbC8DCVtA
        subject_person_id: p_dSXaHGfxZk39n9qckAbpLw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NFjaCP7FLJurVNGDpk5xBs
          claim_id: c_rHsGzzYcBavQghbC8DCVtA
          source_id: s_sTuAW34aPExbNHoS859wLd
          stance: supports
          locator: CBDB:250477
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_imeFj_bjg4ONGm85_2Ng4S
        subject_person_id: p_dSXaHGfxZk39n9qckAbpLw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6EMaiK2d7QYsew9Vg9gPZP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_luxAdm4IeT2eGs0EbRwLSU
          claim_id: c_imeFj_bjg4ONGm85_2Ng4S
          source_id: s_U4WGeE3TRg6Y2JCL5J84jy
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百八十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_U4WGeE3TRg6Y2JCL5J84jy
            source_type: api_record
            title: 中国历代人物传记资料库：王華（CBDB 199850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199850&o=json
            external_identifier: CBDB:199850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.580Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6EMaiK2d7QYsew9Vg9gPZP
        status: active
        display_name: 王華
        merged_into_person_id: null
    - claim:
        id: c_0VKLEEK3krV_4ze-1xq-rK
        subject_person_id: p_dSXaHGfxZk39n9qckAbpLw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BzGsAVd9TumPWKG2eq2hgp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u6tzCNMWd7kTKmQoyneNo1
          claim_id: c_0VKLEEK3krV_4ze-1xq-rK
          source_id: s_1-3ywJjjF4X27_3U_SFRao
          stance: supports
          locator: CBDB：兄弟 王華（199850）之父／母 王用政
          quotation: null
          interpretation_note: 由兄弟关系推断：王應 与 王華 为同胞（CBDB 记「弟」），王華 之父／母即 王應 之父／母。
          source:
            id: s_1-3ywJjjF4X27_3U_SFRao
            source_type: api_record
            title: 中国历代人物传记资料库：王應（CBDB 250482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250482&o=json
            external_identifier: CBDB:250482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BzGsAVd9TumPWKG2eq2hgp
        status: active
        display_name: 王應
        merged_into_person_id: null
    - claim:
        id: c_Pd8799k0AyufWnyMU876Te
        subject_person_id: p_dSXaHGfxZk39n9qckAbpLw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LVtLzJDudEzv5t7C27iLF7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DC2uMCiJIb-mVcRULxMQYy
          claim_id: c_Pd8799k0AyufWnyMU876Te
          source_id: s_G2iCiGepGEdpcfAzzUqL_l
          stance: supports
          locator: CBDB：兄弟 王華（199850）之父／母 王用政
          quotation: null
          interpretation_note: 由兄弟关系推断：王毓 与 王華 为同胞（CBDB 记「弟」），王華 之父／母即 王毓 之父／母。
          source:
            id: s_G2iCiGepGEdpcfAzzUqL_l
            source_type: api_record
            title: 中国历代人物传记资料库：王毓（CBDB 250481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250481&o=json
            external_identifier: CBDB:250481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LVtLzJDudEzv5t7C27iLF7
        status: active
        display_name: 王毓
        merged_into_person_id: null
    - claim:
        id: c_KgQpTJ9dwzGxf_CiSp90g3
        subject_person_id: p_dSXaHGfxZk39n9qckAbpLw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PDLPEeLMYTFTPAT1U5cVk9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6q_XnJAhtrPvQTFl3M8SfY
          claim_id: c_KgQpTJ9dwzGxf_CiSp90g3
          source_id: s_SUHG387S-B_zJco9A81BDj
          stance: supports
          locator: CBDB：兄弟 王華（199850）之父／母 王用政
          quotation: null
          interpretation_note: 由兄弟关系推断：王衍 与 王華 为同胞（CBDB 记「弟」），王華 之父／母即 王衍 之父／母。
          source:
            id: s_SUHG387S-B_zJco9A81BDj
            source_type: api_record
            title: 中国历代人物传记资料库：王衍（CBDB 250480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250480&o=json
            external_identifier: CBDB:250480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PDLPEeLMYTFTPAT1U5cVk9
        status: active
        display_name: 王衍
        merged_into_person_id: null
    - claim:
        id: c_iQS_XQf8RE7OcFQDjqAyet
        subject_person_id: p_dSXaHGfxZk39n9qckAbpLw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gXAAygEUDixJCtwBnHQQ1f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xELPcKqseof7fNAE9RerlQ
          claim_id: c_iQS_XQf8RE7OcFQDjqAyet
          source_id: s_ootj-W77i_RCeOAaiNU_AE
          stance: supports
          locator: CBDB：兄弟 王華（199850）之父／母 王用政
          quotation: null
          interpretation_note: 由兄弟关系推断：王滿 与 王華 为同胞（CBDB 记「兄」），王華 之父／母即 王滿 之父／母。
          source:
            id: s_ootj-W77i_RCeOAaiNU_AE
            source_type: api_record
            title: 中国历代人物传记资料库：王滿（CBDB 250484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250484&o=json
            external_identifier: CBDB:250484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gXAAygEUDixJCtwBnHQQ1f
        status: active
        display_name: 王滿
        merged_into_person_id: null
    - claim:
        id: c_ozisQZ0EJHeTebc393Et-i
        subject_person_id: p_dSXaHGfxZk39n9qckAbpLw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mLy2ewwCYiLbkxCnx6WDTe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eMzBXXThtte59OW5fbDpgw
          claim_id: c_ozisQZ0EJHeTebc393Et-i
          source_id: s_MqpPLCUoZwqUCQKEefBhGk
          stance: supports
          locator: CBDB：兄弟 王華（199850）之父／母 王用政
          quotation: null
          interpretation_note: 由兄弟关系推断：王顯 与 王華 为同胞（CBDB 记「弟」），王華 之父／母即 王顯 之父／母。
          source:
            id: s_MqpPLCUoZwqUCQKEefBhGk
            source_type: api_record
            title: 中国历代人物传记资料库：王顯（CBDB 250483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250483&o=json
            external_identifier: CBDB:250483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mLy2ewwCYiLbkxCnx6WDTe
        status: active
        display_name: 王顯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王用政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王用政，明人物。成化十一年進士，籍贯南城。（中国历代人物传记资料库 CBDB 250477） | accepted |
| name.primary | 王用政 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6EMaiK2d7QYsew9Vg9gPZP | 王華 | accepted |
| children | p_BzGsAVd9TumPWKG2eq2hgp | 王應 | accepted |
| children | p_LVtLzJDudEzv5t7C27iLF7 | 王毓 | accepted |
| children | p_PDLPEeLMYTFTPAT1U5cVk9 | 王衍 | accepted |
| children | p_gXAAygEUDixJCtwBnHQQ1f | 王滿 | accepted |
| children | p_mLy2ewwCYiLbkxCnx6WDTe | 王顯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王華（CBDB 199850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199850&o=json)
- [中国历代人物传记资料库：王滿（CBDB 250484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250484&o=json)
- [中国历代人物传记资料库：王顯（CBDB 250483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250483&o=json)
- [中国历代人物传记资料库：王衍（CBDB 250480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250480&o=json)
- [中国历代人物传记资料库：王應（CBDB 250482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250482&o=json)
- [中国历代人物传记资料库：王用政（CBDB 250477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250477&o=json)
- [中国历代人物传记资料库：王毓（CBDB 250481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250481&o=json)
