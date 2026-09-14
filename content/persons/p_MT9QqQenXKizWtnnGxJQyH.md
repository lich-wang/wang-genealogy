---
schema: wang-person/v1
id: p_MT9QqQenXKizWtnnGxJQyH
status: active
merged_into: null
display_name: 王輦
cbdb_id: 205182
revision: 12
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vamy71bAr5TQDD3qSEA59S
        subject_person_id: p_MT9QqQenXKizWtnnGxJQyH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輦（生于1524年），明人物。嘉靖四十一年進士，籍贯定遠，入仕進士。（中国历代人物传记资料库 CBDB 205182）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_kf30SaRrU4EiUUL-iT63iQ
          claim_id: c_Vamy71bAr5TQDD3qSEA59S
          source_id: s_qGfCe7Gq2C7AYTFBDCD7e2
          stance: supports
          locator: CBDB:205182
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qGfCe7Gq2C7AYTFBDCD7e2
            source_type: api_record
            title: 中国历代人物传记资料库：王輦（CBDB 205182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205182&o=json
            external_identifier: CBDB:205182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UvvTSFXXvzd2E66Jn1mgV6
        subject_person_id: p_MT9QqQenXKizWtnnGxJQyH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1524年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1524-01-01
            latest: 1524-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1JxfD5qeNE8D676ku5j7Bz
          claim_id: c_UvvTSFXXvzd2E66Jn1mgV6
          source_id: s_qGfCe7Gq2C7AYTFBDCD7e2
          stance: supports
          locator: CBDB:205182
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1524
          source:
            id: s_qGfCe7Gq2C7AYTFBDCD7e2
            source_type: api_record
            title: 中国历代人物传记资料库：王輦（CBDB 205182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205182&o=json
            external_identifier: CBDB:205182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DnLYKHV7AidpApJDz8npMu
        subject_person_id: p_MT9QqQenXKizWtnnGxJQyH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kPzHG4MsHGFkR8JHaZ6G2n
          claim_id: c_DnLYKHV7AidpApJDz8npMu
          source_id: s_qGfCe7Gq2C7AYTFBDCD7e2
          stance: supports
          locator: CBDB:205182
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1524
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GTyKZ3w_Znap-K66YHd5l9
        subject_person_id: p_rhYt9t4gYuDEpCnQq4aywZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MT9QqQenXKizWtnnGxJQyH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k8EY4a8Gz_njIp-qBgVYRu
          claim_id: c_GTyKZ3w_Znap-K66YHd5l9
          source_id: s_SzSeGZ9EqJCgsqiPZLij7C
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第二百零九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SzSeGZ9EqJCgsqiPZLij7C
            source_type: api_record
            title: 中国历代人物传记资料库：王利（CBDB 329344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329344&o=json
            external_identifier: CBDB:329344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.319Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rhYt9t4gYuDEpCnQq4aywZ
        status: active
        display_name: 王利
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_XXXmYPoXJhuKO-eXVxLpKU
        subject_person_id: p_fB2f5kPaQE17EaQLtLH8C3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MT9QqQenXKizWtnnGxJQyH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Zsle4xovo0ac9L4DOORXj
          claim_id: c_XXXmYPoXJhuKO-eXVxLpKU
          source_id: s_y7xhPJCWuwKHb9Nkhe7Pv8
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第二百零九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_y7xhPJCWuwKHb9Nkhe7Pv8
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 329341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329341&o=json
            external_identifier: CBDB:329341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.319Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fB2f5kPaQE17EaQLtLH8C3
        status: active
        display_name: 王憲
        merged_into_person_id: null
    - claim:
        id: c_vsxXfHklINCPaPsz3KzF6o
        subject_person_id: p_gWZRdtNLriuX74JT7yL7TH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MT9QqQenXKizWtnnGxJQyH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bw4wwvaba8SuRVvlRE9YvE
          claim_id: c_vsxXfHklINCPaPsz3KzF6o
          source_id: s_d8sFjEPAZK4EzjEHQKCVTe
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第二百零九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_d8sFjEPAZK4EzjEHQKCVTe
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 329342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329342&o=json
            external_identifier: CBDB:329342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.319Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gWZRdtNLriuX74JT7yL7TH
        status: active
        display_name: 王佐
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_oeui0gDlKuvnZEhouKk2_4
        subject_person_id: p_2omi1iD2DH3mmzWtSgzetd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MT9QqQenXKizWtnnGxJQyH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rAcONYFyArua8-mpxjTolg
          claim_id: c_oeui0gDlKuvnZEhouKk2_4
          source_id: s_v7AXsZ14glWfMtkh_TOnJA
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205182 王輦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_v7AXsZ14glWfMtkh_TOnJA
            source_type: api_record
            title: 中国历代人物传记资料库：王軫（CBDB 329352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329352&o=json
            external_identifier: CBDB:329352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2omi1iD2DH3mmzWtSgzetd
        status: active
        display_name: 王軫
        merged_into_person_id: null
    - claim:
        id: c_R-n03pyzcBY4T9BycHldFC
        subject_person_id: p_4gA1e5BWfPswHNcfbKTQ7T
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MT9QqQenXKizWtnnGxJQyH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QTkHZw27za0qzXqt7WeGRB
          claim_id: c_R-n03pyzcBY4T9BycHldFC
          source_id: s_0ICrKJpFfR1QihmBpsI2Xk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205182 王輦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0ICrKJpFfR1QihmBpsI2Xk
            source_type: api_record
            title: 中国历代人物传记资料库：王輻（CBDB 329357）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329357&o=json
            external_identifier: CBDB:329357
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4gA1e5BWfPswHNcfbKTQ7T
        status: active
        display_name: 王輻
        merged_into_person_id: null
    - claim:
        id: c_RgdyjittqqsvuRQiFRuJvh
        subject_person_id: p_6D72VCCtVu5zyK1zSakJfA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MT9QqQenXKizWtnnGxJQyH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xtfPaqV-hTo5NZni9_MiOE
          claim_id: c_RgdyjittqqsvuRQiFRuJvh
          source_id: s_HXbdI623hgvevUeElD_3SQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205182 王輦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HXbdI623hgvevUeElD_3SQ
            source_type: api_record
            title: 中国历代人物传记资料库：王輗（CBDB 329355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329355&o=json
            external_identifier: CBDB:329355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6D72VCCtVu5zyK1zSakJfA
        status: active
        display_name: 王輗
        merged_into_person_id: null
    - claim:
        id: c_7XfglUYSTPNIPZ2_m_7eIh
        subject_person_id: p_K7HhPzvcPxufDAUCR72Cf8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MT9QqQenXKizWtnnGxJQyH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N7ifwBv-orRlD2yDIogdq1
          claim_id: c_7XfglUYSTPNIPZ2_m_7eIh
          source_id: s_eVfBsVsUH72wx8DieOrS-q
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205182 王輦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eVfBsVsUH72wx8DieOrS-q
            source_type: api_record
            title: 中国历代人物传记资料库：王載（CBDB 329351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329351&o=json
            external_identifier: CBDB:329351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K7HhPzvcPxufDAUCR72Cf8
        status: active
        display_name: 王載
        merged_into_person_id: null
    - claim:
        id: c_waZLklElo_OUkIRDVOAItW
        subject_person_id: p_MT9QqQenXKizWtnnGxJQyH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SNxcwVE3mRaMhzML1z9b1H
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sj_A4wRR92B1tD5J-ezU2x
          claim_id: c_waZLklElo_OUkIRDVOAItW
          source_id: s_ClC3sF8nXjat-_f_PxI7XU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205182 王輦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ClC3sF8nXjat-_f_PxI7XU
            source_type: api_record
            title: 中国历代人物传记资料库：王軏（CBDB 329356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329356&o=json
            external_identifier: CBDB:329356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SNxcwVE3mRaMhzML1z9b1H
        status: active
        display_name: 王軏
        merged_into_person_id: null
    - claim:
        id: c_Htlw3v5YP76X1kRckjH9id
        subject_person_id: p_MT9QqQenXKizWtnnGxJQyH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Wre7pV46EMD77fsT1jQG8C
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Br5t4EIArF8zSV2j0LX9f
          claim_id: c_Htlw3v5YP76X1kRckjH9id
          source_id: s_16ke1tPqtNnUpyJVk-Qz-h
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205182 王輦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_16ke1tPqtNnUpyJVk-Qz-h
            source_type: api_record
            title: 中国历代人物传记资料库：王軔（CBDB 329350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329350&o=json
            external_identifier: CBDB:329350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Wre7pV46EMD77fsT1jQG8C
        status: active
        display_name: 王軔
        merged_into_person_id: null
    - claim:
        id: c_Yk5MZsPN8werk_rvxa2FkZ
        subject_person_id: p_MT9QqQenXKizWtnnGxJQyH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XPQGW4b2oZE9vHJ9vwQSw5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vm-VZvzHVeQwU287KCcRSS
          claim_id: c_Yk5MZsPN8werk_rvxa2FkZ
          source_id: s_IrLtd8ctAm-ZvIDfYBHupa
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205182 王輦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IrLtd8ctAm-ZvIDfYBHupa
            source_type: api_record
            title: 中国历代人物传记资料库：王範（CBDB 329348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329348&o=json
            external_identifier: CBDB:329348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XPQGW4b2oZE9vHJ9vwQSw5
        status: active
        display_name: 王範
        merged_into_person_id: null
    - claim:
        id: c_QVPRIjr3Q5Y9_jblkm-G5X
        subject_person_id: p_MT9QqQenXKizWtnnGxJQyH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e56pacND3mCEEv2EAQdG4F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-mG5OzaXrxg_rKzSXX3FOg
          claim_id: c_QVPRIjr3Q5Y9_jblkm-G5X
          source_id: s_RnBtdCrLMlKP8VaqnijpBI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205182 王輦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RnBtdCrLMlKP8VaqnijpBI
            source_type: api_record
            title: 中国历代人物传记资料库：王轂（CBDB 329353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329353&o=json
            external_identifier: CBDB:329353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e56pacND3mCEEv2EAQdG4F
        status: active
        display_name: 王轂
        merged_into_person_id: null
---

# 王輦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王輦（生于1524年），明人物。嘉靖四十一年進士，籍贯定遠，入仕進士。（中国历代人物传记资料库 CBDB 205182） | accepted |
| birth.date | 1524年 | accepted |
| name.primary | 王輦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rhYt9t4gYuDEpCnQq4aywZ | 王利 | accepted |
| ancestors | p_fB2f5kPaQE17EaQLtLH8C3 | 王憲 | accepted |
| ancestors | p_gWZRdtNLriuX74JT7yL7TH | 王佐 | accepted |
| other | p_2omi1iD2DH3mmzWtSgzetd | 王軫 | accepted |
| other | p_4gA1e5BWfPswHNcfbKTQ7T | 王輻 | accepted |
| other | p_6D72VCCtVu5zyK1zSakJfA | 王輗 | accepted |
| other | p_K7HhPzvcPxufDAUCR72Cf8 | 王載 | accepted |
| other | p_SNxcwVE3mRaMhzML1z9b1H | 王軏 | accepted |
| other | p_Wre7pV46EMD77fsT1jQG8C | 王軔 | accepted |
| other | p_XPQGW4b2oZE9vHJ9vwQSw5 | 王範 | accepted |
| other | p_e56pacND3mCEEv2EAQdG4F | 王轂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王範（CBDB 329348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329348&o=json)
- [中国历代人物传记资料库：王輻（CBDB 329357）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329357&o=json)
- [中国历代人物传记资料库：王轂（CBDB 329353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329353&o=json)
- [中国历代人物传记资料库：王利（CBDB 329344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329344&o=json)
- [中国历代人物传记资料库：王輗（CBDB 329355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329355&o=json)
- [中国历代人物传记资料库：王輦（CBDB 205182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205182&o=json)
- [中国历代人物传记资料库：王軔（CBDB 329350）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329350&o=json)
- [中国历代人物传记资料库：王憲（CBDB 329341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329341&o=json)
- [中国历代人物传记资料库：王軏（CBDB 329356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329356&o=json)
- [中国历代人物传记资料库：王載（CBDB 329351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329351&o=json)
- [中国历代人物传记资料库：王軫（CBDB 329352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329352&o=json)
- [中国历代人物传记资料库：王佐（CBDB 329342）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329342&o=json)
