---
schema: wang-person/v1
id: p_ZjuF9BMneyLuUjQuike359
status: active
merged_into: null
display_name: 王鍃
cbdb_id: 199647
revision: 14
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_46gJF2ZoQkHjYKG84WExyB
        subject_person_id: p_ZjuF9BMneyLuUjQuike359
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍃（生于1442年），明人物。成化十一年進士，籍贯慈溪，入仕進士。（中国历代人物传记资料库 CBDB 199647）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_99lwWR-EghKK6cWWZWQdc2
          claim_id: c_46gJF2ZoQkHjYKG84WExyB
          source_id: s_ujotuErWBYZKYB7SBkb6Dx
          stance: supports
          locator: CBDB:199647
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ujotuErWBYZKYB7SBkb6Dx
            source_type: api_record
            title: 中国历代人物传记资料库：王鍃（CBDB 199647）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199647&o=json
            external_identifier: CBDB:199647
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VcxE5s81LxV7HZ8Z4WW1f1
        subject_person_id: p_ZjuF9BMneyLuUjQuike359
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1442年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1442-01-01
            latest: 1442-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FQNEJHnNG7Ee9YvYSRmkgh
          claim_id: c_VcxE5s81LxV7HZ8Z4WW1f1
          source_id: s_ujotuErWBYZKYB7SBkb6Dx
          stance: supports
          locator: CBDB:199647
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1442
          source:
            id: s_ujotuErWBYZKYB7SBkb6Dx
            source_type: api_record
            title: 中国历代人物传记资料库：王鍃（CBDB 199647）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199647&o=json
            external_identifier: CBDB:199647
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_j2GEpTbjDd2gGpYoM6xP1D
        subject_person_id: p_ZjuF9BMneyLuUjQuike359
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_E4ciS3QMnB9McyD9R4U1x1
          claim_id: c_j2GEpTbjDd2gGpYoM6xP1D
          source_id: s_ujotuErWBYZKYB7SBkb6Dx
          stance: supports
          locator: CBDB:199647
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1442
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7S9B0nRR_Nt552O7Y4OlqJ
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZjuF9BMneyLuUjQuike359
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cdL8oxnH6I3BT8AlityvOB
          claim_id: c_7S9B0nRR_Nt552O7Y4OlqJ
          source_id: s_ZPcP2xH4Y4hnxAihVeKS3n
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第二十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZPcP2xH4Y4hnxAihVeKS3n
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 247835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247835&o=json
            external_identifier: CBDB:247835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.140Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gyKQYKFYiRFh2ZMNQQhCtN
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_XiOaT_8su7RJENQDR2Bfar
        subject_person_id: p_FSNJ3GNcw4NoiJCe5wgrG6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZjuF9BMneyLuUjQuike359
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ySA-gz3obruHu4xW8UL7gY
          claim_id: c_XiOaT_8su7RJENQDR2Bfar
          source_id: s_dzdVL1VqoHsmkF2S2X24A7
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第二十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dzdVL1VqoHsmkF2S2X24A7
            source_type: api_record
            title: 中国历代人物传记资料库：王桓（CBDB 247833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247833&o=json
            external_identifier: CBDB:247833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.136Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FSNJ3GNcw4NoiJCe5wgrG6
        status: active
        display_name: 王桓
        merged_into_person_id: null
    - claim:
        id: c_rqxPqM0beCjYPQXdUI9F6g
        subject_person_id: p_zDkCVKJDedjgm5kDDP1yKA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZjuF9BMneyLuUjQuike359
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tOdcxLfwQpQGZnGXpxOExZ
          claim_id: c_rqxPqM0beCjYPQXdUI9F6g
          source_id: s_99ZEhiJB1guMvp77knJN9Y
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第二十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_99ZEhiJB1guMvp77knJN9Y
            source_type: api_record
            title: 中国历代人物传记资料库：王曛（CBDB 247834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247834&o=json
            external_identifier: CBDB:247834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.139Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zDkCVKJDedjgm5kDDP1yKA
        status: active
        display_name: 王曛
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_J8eOXun5ikBRGy_sdg4Fn7
        subject_person_id: p_55xEZhj724uNRKr93TgaRB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZjuF9BMneyLuUjQuike359
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OxMuRFKgpUGXZujQVTo75A
          claim_id: c_J8eOXun5ikBRGy_sdg4Fn7
          source_id: s_GBVGajtdGBWdEoTEc_54EA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199647 王鍃）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GBVGajtdGBWdEoTEc_54EA
            source_type: api_record
            title: 中国历代人物传记资料库：王鍊（CBDB 247843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247843&o=json
            external_identifier: CBDB:247843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_55xEZhj724uNRKr93TgaRB
        status: active
        display_name: 王鍊
        merged_into_person_id: null
    - claim:
        id: c_rnu7zDcoTgwInhpuZwQdYg
        subject_person_id: p_A1rGAZCMMfWMfybx9mSqau
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZjuF9BMneyLuUjQuike359
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8dWrsXAOBDnJ02at_Ky1oS
          claim_id: c_rnu7zDcoTgwInhpuZwQdYg
          source_id: s_-TZhrlz-iC40Fr3UoADRsN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199647 王鍃）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-TZhrlz-iC40Fr3UoADRsN
            source_type: api_record
            title: 中国历代人物传记资料库：王錥（CBDB 247848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247848&o=json
            external_identifier: CBDB:247848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A1rGAZCMMfWMfybx9mSqau
        status: active
        display_name: 王錥
        merged_into_person_id: null
    - claim:
        id: c_NyRlN5saWMwWm687GkD9u0
        subject_person_id: p_EHZKGF4FH9JFRqQEosFwci
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZjuF9BMneyLuUjQuike359
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BQM7l-zkYWd9kbVoecKDTH
          claim_id: c_NyRlN5saWMwWm687GkD9u0
          source_id: s_ftAg57M41EEHTcrbV8eqAE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199647 王鍃）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ftAg57M41EEHTcrbV8eqAE
            source_type: api_record
            title: 中国历代人物传记资料库：王鋘（CBDB 247846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247846&o=json
            external_identifier: CBDB:247846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EHZKGF4FH9JFRqQEosFwci
        status: active
        display_name: 王鋘
        merged_into_person_id: null
    - claim:
        id: c_5sZOfIZ8T-8olMK-RPa90E
        subject_person_id: p_HUa84XWDNujDpsdaNdZ2Ys
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZjuF9BMneyLuUjQuike359
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YCSopuxJAie0UoVY5pnveI
          claim_id: c_5sZOfIZ8T-8olMK-RPa90E
          source_id: s_rlxeLYW5Dve1OjDEzDc6Zz
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199647 王鍃）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rlxeLYW5Dve1OjDEzDc6Zz
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 247844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247844&o=json
            external_identifier: CBDB:247844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HUa84XWDNujDpsdaNdZ2Ys
        status: active
        display_name: 王錦
        merged_into_person_id: null
    - claim:
        id: c_nvoY7cU6Q9kUM8BFrZrYms
        subject_person_id: p_Js51emuVCs9EH4s4W7BXTR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZjuF9BMneyLuUjQuike359
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AmuocLW7UzSUcxpIgdNSDB
          claim_id: c_nvoY7cU6Q9kUM8BFrZrYms
          source_id: s_OqXxhcAA9GAttQE9dwRDU2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199647 王鍃）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OqXxhcAA9GAttQE9dwRDU2
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 247849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247849&o=json
            external_identifier: CBDB:247849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Js51emuVCs9EH4s4W7BXTR
        status: active
        display_name: 王鉉
        merged_into_person_id: null
    - claim:
        id: c_gR9x1aEBa6nWw2iB1oI81w
        subject_person_id: p_NCUgiWasKpCG1soTZ2QcFB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZjuF9BMneyLuUjQuike359
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VDdYVsqyhyYm5xGwLXsIme
          claim_id: c_gR9x1aEBa6nWw2iB1oI81w
          source_id: s_NxUy5kE6XVQ9zA8LYSVDXn
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199647 王鍃）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NxUy5kE6XVQ9zA8LYSVDXn
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 247840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247840&o=json
            external_identifier: CBDB:247840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NCUgiWasKpCG1soTZ2QcFB
        status: active
        display_name: 王鎬
        merged_into_person_id: null
    - claim:
        id: c_7ZciGt042yTXdAFcLGKb8D
        subject_person_id: p_XTPQLKJJmF45fkXfXdssNp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZjuF9BMneyLuUjQuike359
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k4TeTGoYEuE-kJcmNFV7nw
          claim_id: c_7ZciGt042yTXdAFcLGKb8D
          source_id: s_3Diwk7A8qSN_9sSU4XpQ_H
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199647 王鍃）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3Diwk7A8qSN_9sSU4XpQ_H
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 247847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247847&o=json
            external_identifier: CBDB:247847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XTPQLKJJmF45fkXfXdssNp
        status: active
        display_name: 王銳
        merged_into_person_id: null
    - claim:
        id: c_xp4VrP28-ckUTGKoLHAMyw
        subject_person_id: p_ZjuF9BMneyLuUjQuike359
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_g22PHPpya8TKAiPuSDpXaf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z1pdjJbc-oAlsZ7gSuAOA4
          claim_id: c_xp4VrP28-ckUTGKoLHAMyw
          source_id: s_qwp7waz_no74P3mAgZZegk
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199647 王鍃）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qwp7waz_no74P3mAgZZegk
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 247839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247839&o=json
            external_identifier: CBDB:247839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g22PHPpya8TKAiPuSDpXaf
        status: active
        display_name: 王鐸
        merged_into_person_id: null
    - claim:
        id: c_D8bSs1sSYwTi1s-AYaX_5N
        subject_person_id: p_ZjuF9BMneyLuUjQuike359
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nAUNQxetZCDDk4ZynrR94s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JOKHAI1UnUb9dUNaU1mVzn
          claim_id: c_D8bSs1sSYwTi1s-AYaX_5N
          source_id: s_GFb1mNCXQgiEL1XlY8AHkH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199647 王鍃）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GFb1mNCXQgiEL1XlY8AHkH
            source_type: api_record
            title: 中国历代人物传记资料库：王鍈（CBDB 247845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247845&o=json
            external_identifier: CBDB:247845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nAUNQxetZCDDk4ZynrR94s
        status: active
        display_name: 王鍈
        merged_into_person_id: null
    - claim:
        id: c_LvaBUElz3-5USEMqkaCHet
        subject_person_id: p_ZjuF9BMneyLuUjQuike359
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s82ECNPB7fnFjYkrxsywhE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-yWIN8X0ymun1tm3As7KtP
          claim_id: c_LvaBUElz3-5USEMqkaCHet
          source_id: s_Gr__sDHf5Cp-_K1Ykb26PP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199647 王鍃）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Gr__sDHf5Cp-_K1Ykb26PP
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 247841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247841&o=json
            external_identifier: CBDB:247841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s82ECNPB7fnFjYkrxsywhE
        status: active
        display_name: 王鑰
        merged_into_person_id: null
---

# 王鍃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鍃（生于1442年），明人物。成化十一年進士，籍贯慈溪，入仕進士。（中国历代人物传记资料库 CBDB 199647） | accepted |
| birth.date | 1442年 | accepted |
| name.primary | 王鍃 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gyKQYKFYiRFh2ZMNQQhCtN | 王鼎 | accepted |
| ancestors | p_FSNJ3GNcw4NoiJCe5wgrG6 | 王桓 | accepted |
| ancestors | p_zDkCVKJDedjgm5kDDP1yKA | 王曛 | accepted |
| other | p_55xEZhj724uNRKr93TgaRB | 王鍊 | accepted |
| other | p_A1rGAZCMMfWMfybx9mSqau | 王錥 | accepted |
| other | p_EHZKGF4FH9JFRqQEosFwci | 王鋘 | accepted |
| other | p_HUa84XWDNujDpsdaNdZ2Ys | 王錦 | accepted |
| other | p_Js51emuVCs9EH4s4W7BXTR | 王鉉 | accepted |
| other | p_NCUgiWasKpCG1soTZ2QcFB | 王鎬 | accepted |
| other | p_XTPQLKJJmF45fkXfXdssNp | 王銳 | accepted |
| other | p_g22PHPpya8TKAiPuSDpXaf | 王鐸 | accepted |
| other | p_nAUNQxetZCDDk4ZynrR94s | 王鍈 | accepted |
| other | p_s82ECNPB7fnFjYkrxsywhE | 王鑰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 247835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247835&o=json)
- [中国历代人物传记资料库：王鐸（CBDB 247839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247839&o=json)
- [中国历代人物传记资料库：王鎬（CBDB 247840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247840&o=json)
- [中国历代人物传记资料库：王鋘（CBDB 247846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247846&o=json)
- [中国历代人物传记资料库：王桓（CBDB 247833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247833&o=json)
- [中国历代人物传记资料库：王鍃（CBDB 199647）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199647&o=json)
- [中国历代人物传记资料库：王錦（CBDB 247844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247844&o=json)
- [中国历代人物传记资料库：王鍊（CBDB 247843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247843&o=json)
- [中国历代人物传记资料库：王銳（CBDB 247847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247847&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 247849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247849&o=json)
- [中国历代人物传记资料库：王曛（CBDB 247834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247834&o=json)
- [中国历代人物传记资料库：王鑰（CBDB 247841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247841&o=json)
- [中国历代人物传记资料库：王鍈（CBDB 247845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247845&o=json)
- [中国历代人物传记资料库：王錥（CBDB 247848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247848&o=json)
