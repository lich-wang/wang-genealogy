---
schema: wang-person/v1
id: p_DpH4HNkjrsP3PNvkueYKFC
status: active
merged_into: null
display_name: 王同道
revision: 13
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ck8wPskPiAHQFzxNXSq21F
        subject_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pk1V8PMnengarf7gK7Czin
          claim_id: c_ck8wPskPiAHQFzxNXSq21F
          source_id: s_prYwPBgaZQx5Jf7B7N4EJ9
          stance: supports
          locator: CBDB:205031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205031）
          source: &a1
            id: s_prYwPBgaZQx5Jf7B7N4EJ9
            source_type: api_record
            title: 中国历代人物传记资料库：王同道（CBDB 205031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205031&o=json
            external_identifier: CBDB:205031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.847Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1G51bBGpXh1NEEATJrD45C
        subject_person_id: p_DpH4HNkjrsP3PNvkueYKFC
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
        - id: cs_p9GPEiimYC9kTteYJTUPtN
          claim_id: c_1G51bBGpXh1NEEATJrD45C
          source_id: s_prYwPBgaZQx5Jf7B7N4EJ9
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
        id: c_rKecNjg5DNdwbKBZz2GBBM
        subject_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同道（生于1531年），明人物。明清進士進士，籍贯黃岡，入仕進士。（中国历代人物传记资料库 CBDB 205031）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1PMClMkvu3CHLN22nEzxeg
          claim_id: c_rKecNjg5DNdwbKBZz2GBBM
          source_id: s_prYwPBgaZQx5Jf7B7N4EJ9
          stance: supports
          locator: CBDB:205031
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_96VurjaNiZ5t0ttTLDfwRd
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WmXfH_TnTTPLLNW30SpiJp
          claim_id: c_96VurjaNiZ5t0ttTLDfwRd
          source_id: s_o4BwLyitFjcAFS4veow24B
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第二十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_o4BwLyitFjcAFS4veow24B
            source_type: api_record
            title: 中国历代人物传记资料库：王廷槐（CBDB 327381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327381&o=json
            external_identifier: CBDB:327381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.246Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A2Zw5HgNNKQfknjQ8rX9z5
        status: active
        display_name: 王廷槐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_dOuSXjC8NU2XT6jjN6Haui
        subject_person_id: p_xmyBLu1JaarZKDoabrYE3f
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HGmy16p5yzBTb_9CYW9BA9
          claim_id: c_dOuSXjC8NU2XT6jjN6Haui
          source_id: s_tvR3r7WBuzHh3cGy1zBB6C
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第二十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tvR3r7WBuzHh3cGy1zBB6C
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 327380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327380&o=json
            external_identifier: CBDB:327380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xmyBLu1JaarZKDoabrYE3f
        status: active
        display_name: 王麟
        merged_into_person_id: null
    - claim:
        id: c_rFwW74-eMPGY8XFQlNyX1X
        subject_person_id: p_GskJKyfESLHPKGMJw9EwoT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cIQJzrkRU9VwEYT_Mz9d10
          claim_id: c_rFwW74-eMPGY8XFQlNyX1X
          source_id: s_75nEyWVCNAvWrobeskeLTQ
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第二十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_75nEyWVCNAvWrobeskeLTQ
            source_type: api_record
            title: 中国历代人物传记资料库：王文凱（CBDB 327379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327379&o=json
            external_identifier: CBDB:327379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_GskJKyfESLHPKGMJw9EwoT
        status: active
        display_name: 王文凱
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_eH5TLBBLkNqhUSGnBsRAdM
        subject_person_id: p_BVxDQvKxYRbiPjfjhUiJGX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7dNGUKOa9DCbXZSBldOdw5
          claim_id: c_eH5TLBBLkNqhUSGnBsRAdM
          source_id: s_WfzBX4cuaNmda2NU--16oe
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205031 王同道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WfzBX4cuaNmda2NU--16oe
            source_type: api_record
            title: 中国历代人物传记资料库：王同辰（CBDB 327393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327393&o=json
            external_identifier: CBDB:327393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BVxDQvKxYRbiPjfjhUiJGX
        status: active
        display_name: 王同辰
        merged_into_person_id: null
    - claim:
        id: c_upqt7DemrDH-T1YpRO3xGl
        subject_person_id: p_CB5sZsdA8nvcULyQC2dvjd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-Np0cAPkLQ6Bkw7j5yABeT
          claim_id: c_upqt7DemrDH-T1YpRO3xGl
          source_id: s_Uml9Ye_cMv9FIDV5uOU8px
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205031 王同道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Uml9Ye_cMv9FIDV5uOU8px
            source_type: api_record
            title: 中国历代人物传记资料库：王同軌（CBDB 126517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126517&o=json
            external_identifier: CBDB:126517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CB5sZsdA8nvcULyQC2dvjd
        status: active
        display_name: 王同軌
        merged_into_person_id: null
    - claim:
        id: c_EklKzTEMvcJBUYLu3yL6aW
        subject_person_id: p_D3zLoGJHryvUYtjxdHz9Wz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aPnHlhayx3Z_dD0LWDsXs9
          claim_id: c_EklKzTEMvcJBUYLu3yL6aW
          source_id: s_VO0ZL7GQebE4ieYJC1FB7z
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205031 王同道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VO0ZL7GQebE4ieYJC1FB7z
            source_type: api_record
            title: 中国历代人物传记资料库：王同升（CBDB 327389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327389&o=json
            external_identifier: CBDB:327389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D3zLoGJHryvUYtjxdHz9Wz
        status: active
        display_name: 王同升
        merged_into_person_id: null
    - claim:
        id: c_IJcchkmUYDDEiAUrF2egIe
        subject_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HWzN3GY8T2zZAcA6vq37sD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kltbI8I3rEptEthyOVxYFS
          claim_id: c_IJcchkmUYDDEiAUrF2egIe
          source_id: s_-CH6we4vx85_FTDxRCoML9
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205031 王同道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-CH6we4vx85_FTDxRCoML9
            source_type: api_record
            title: 中国历代人物传记资料库：王同源（CBDB 327388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327388&o=json
            external_identifier: CBDB:327388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HWzN3GY8T2zZAcA6vq37sD
        status: active
        display_name: 王同源
        merged_into_person_id: null
    - claim:
        id: c_Lf5j9ojKKf3Bmsr69ITNbQ
        subject_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WdZJWag7NVLzgFyXvFmPou
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-6NYLJr43BRV1dC-iYoNC_
          claim_id: c_Lf5j9ojKKf3Bmsr69ITNbQ
          source_id: s_I14IDWSCm3oL2WNPnc0I4C
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205031 王同道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_I14IDWSCm3oL2WNPnc0I4C
            source_type: api_record
            title: 中国历代人物传记资料库：王同心（CBDB 327387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327387&o=json
            external_identifier: CBDB:327387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WdZJWag7NVLzgFyXvFmPou
        status: active
        display_name: 王同心
        merged_into_person_id: null
    - claim:
        id: c_O1Uek8mK0VP_p5YhqyyI0S
        subject_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_p6DeT9ribjKiKNGxKhBB1s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j6QOEYbfpOc8Clhy-YuMMn
          claim_id: c_O1Uek8mK0VP_p5YhqyyI0S
          source_id: s_YRKo4m2Rfu7X5tpsqLLeGl
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205031 王同道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YRKo4m2Rfu7X5tpsqLLeGl
            source_type: api_record
            title: 中国历代人物传记资料库：王同鶴（CBDB 327385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327385&o=json
            external_identifier: CBDB:327385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_p6DeT9ribjKiKNGxKhBB1s
        status: active
        display_name: 王同鶴
        merged_into_person_id: null
    - claim:
        id: c_2k5Ou9la4K-8pbvSDAt3IV
        subject_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rE8vLks7ydaDRFCsY8t126
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zT6Essue4KfkB1ImHBqpWo
          claim_id: c_2k5Ou9la4K-8pbvSDAt3IV
          source_id: s_FlSK7qED9hNGZkvBmwcJo2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205031 王同道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FlSK7qED9hNGZkvBmwcJo2
            source_type: api_record
            title: 中国历代人物传记资料库：王同慶（CBDB 327394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327394&o=json
            external_identifier: CBDB:327394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rE8vLks7ydaDRFCsY8t126
        status: active
        display_name: 王同慶
        merged_into_person_id: null
    - claim:
        id: c_HPHUBQ-ve71y3vfwlc6lnN
        subject_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ri2gaLdtCgSiuLfw1gnKUy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_239Nsbo0VOJtqyFgkVdblR
          claim_id: c_HPHUBQ-ve71y3vfwlc6lnN
          source_id: s_JtqU20obPD5Tz9RsF_MTTn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205031 王同道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JtqU20obPD5Tz9RsF_MTTn
            source_type: api_record
            title: 中国历代人物传记资料库：王同會（CBDB 327390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327390&o=json
            external_identifier: CBDB:327390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ri2gaLdtCgSiuLfw1gnKUy
        status: active
        display_name: 王同會
        merged_into_person_id: null
    - claim:
        id: c_0vG9ozNlXnF8g44iz4lhUZ
        subject_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tw582PUN9HRNyw2YDV8FVE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jny99RdWh1hhERa7wH9fau
          claim_id: c_0vG9ozNlXnF8g44iz4lhUZ
          source_id: s_GwxOo-55nIkxy4cciZaO82
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205031 王同道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GwxOo-55nIkxy4cciZaO82
            source_type: api_record
            title: 中国历代人物传记资料库：王同倫（CBDB 327392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327392&o=json
            external_identifier: CBDB:327392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tw582PUN9HRNyw2YDV8FVE
        status: active
        display_name: 王同倫
        merged_into_person_id: null
---

# 王同道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同道 | accepted |
| birth.date | 1531年 | accepted |
| bio.summary | 王同道（生于1531年），明人物。明清進士進士，籍贯黃岡，入仕進士。（中国历代人物传记资料库 CBDB 205031） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A2Zw5HgNNKQfknjQ8rX9z5 | 王廷槐 | accepted |
| ancestors | p_xmyBLu1JaarZKDoabrYE3f | 王麟 | accepted |
| ancestors | p_GskJKyfESLHPKGMJw9EwoT | 王文凱 | accepted |
| other | p_BVxDQvKxYRbiPjfjhUiJGX | 王同辰 | accepted |
| other | p_CB5sZsdA8nvcULyQC2dvjd | 王同軌 | accepted |
| other | p_D3zLoGJHryvUYtjxdHz9Wz | 王同升 | accepted |
| other | p_HWzN3GY8T2zZAcA6vq37sD | 王同源 | accepted |
| other | p_WdZJWag7NVLzgFyXvFmPou | 王同心 | accepted |
| other | p_p6DeT9ribjKiKNGxKhBB1s | 王同鶴 | accepted |
| other | p_rE8vLks7ydaDRFCsY8t126 | 王同慶 | accepted |
| other | p_ri2gaLdtCgSiuLfw1gnKUy | 王同會 | accepted |
| other | p_tw582PUN9HRNyw2YDV8FVE | 王同倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王麟（CBDB 327380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327380&o=json)
- [中国历代人物传记资料库：王廷槐（CBDB 327381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327381&o=json)
- [中国历代人物传记资料库：王同辰（CBDB 327393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327393&o=json)
- [中国历代人物传记资料库：王同道（CBDB 205031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205031&o=json)
- [中国历代人物传记资料库：王同軌（CBDB 126517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126517&o=json)
- [中国历代人物传记资料库：王同鶴（CBDB 327385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327385&o=json)
- [中国历代人物传记资料库：王同會（CBDB 327390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327390&o=json)
- [中国历代人物传记资料库：王同倫（CBDB 327392）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327392&o=json)
- [中国历代人物传记资料库：王同慶（CBDB 327394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327394&o=json)
- [中国历代人物传记资料库：王同升（CBDB 327389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327389&o=json)
- [中国历代人物传记资料库：王同心（CBDB 327387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327387&o=json)
- [中国历代人物传记资料库：王同源（CBDB 327388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327388&o=json)
- [中国历代人物传记资料库：王文凱（CBDB 327379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327379&o=json)
