---
schema: wang-person/v1
id: p_s2Ci3S96sKz8q9W2YdX1pM
status: active
merged_into: null
display_name: 王審瓊
cbdb_id: 689254
revision: 14
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8h3uiuagtJcbnh5hVBhF6R
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王審瓊（卒于1005年），宋人物。籍贯屯留。（中国历代人物传记资料库 CBDB 689254）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ieF6d1sbPrGfYyYOTdeJE9
          claim_id: c_8h3uiuagtJcbnh5hVBhF6R
          source_id: s_JfVqmXA6KZKbZCUe4FFA5i
          stance: supports
          locator: CBDB:689254
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JfVqmXA6KZKbZCUe4FFA5i
            source_type: api_record
            title: 中国历代人物传记资料库：王審瓊（CBDB 689254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689254&o=json
            external_identifier: CBDB:689254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EvUQFsGC1kAtLWDHSCdSB6
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1005年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1005-01-01
            latest: 1005-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Xw2wb4imzpM345VFGQXP4L
          claim_id: c_EvUQFsGC1kAtLWDHSCdSB6
          source_id: s_JfVqmXA6KZKbZCUe4FFA5i
          stance: supports
          locator: CBDB:689254
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 卒年 = 1005
          source:
            id: s_JfVqmXA6KZKbZCUe4FFA5i
            source_type: api_record
            title: 中国历代人物传记资料库：王審瓊（CBDB 689254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689254&o=json
            external_identifier: CBDB:689254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bihx2YbJFGMGF6J1pUx9gR
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王審瓊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7GUZ2g4Y8bzK2WnVQCyL2K
          claim_id: c_bihx2YbJFGMGF6J1pUx9gR
          source_id: s_JfVqmXA6KZKbZCUe4FFA5i
          stance: supports
          locator: CBDB:689254
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 卒年 = 1005
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_31XvdoYJcQK8ykqEGgD7ot
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ew3NkC6K589nn45EjmCt81
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UYcwECh0Plg5jO_Hv26I01
          claim_id: c_31XvdoYJcQK8ykqEGgD7ot
          source_id: s_JqE6kMDRdPnYkYwS3qF6ox
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JqE6kMDRdPnYkYwS3qF6ox
            source_type: api_record
            title: 中国历代人物传记资料库：王知濬（CBDB 689300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689300&o=json
            external_identifier: CBDB:689300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.471Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ew3NkC6K589nn45EjmCt81
        status: active
        display_name: 王知濬
        merged_into_person_id: null
    - claim:
        id: c_3o9zApS3a2YfDT2el4GWW0
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XEBmM74iDRd9pWQEX3aW77
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OAMJvuUFXVKv46xf14ZLx4
          claim_id: c_3o9zApS3a2YfDT2el4GWW0
          source_id: s_tKeBR8Nf39CktHF7UrjKCn
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tKeBR8Nf39CktHF7UrjKCn
            source_type: api_record
            title: 中国历代人物传记资料库：王知誨（CBDB 689301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689301&o=json
            external_identifier: CBDB:689301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.471Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XEBmM74iDRd9pWQEX3aW77
        status: active
        display_name: 王知誨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_R6f1g9NDqUyYS-xBYCQX35
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iZ1s2ZuGvhTd4EXAvXUyws
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__axV5UmOMvHN80P8BFei9s
          claim_id: c_R6f1g9NDqUyYS-xBYCQX35
          source_id: s_1cDCzqQupnAg-z_08invpW
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1cDCzqQupnAg-z_08invpW
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王審瓊妻)（CBDB 689299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689299&o=json
            external_identifier: CBDB:689299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iZ1s2ZuGvhTd4EXAvXUyws
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_iWQxOKSiFx0sEobdvZDDVf
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_27uSqTLx5pXAroYbs1kCGZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D2dyM5QkkHnsXKVH8KuzMi
          claim_id: c_iWQxOKSiFx0sEobdvZDDVf
          source_id: s_zVQYTH97zqtkBsgUrjsgah
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zVQYTH97zqtkBsgUrjsgah
            source_type: api_record
            title: 中国历代人物传记资料库：王守旻（CBDB 689326）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689326&o=json
            external_identifier: CBDB:689326
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_27uSqTLx5pXAroYbs1kCGZ
        status: active
        display_name: 王守旻
        merged_into_person_id: null
    - claim:
        id: c_tl_6SUe4PfV_yH_K4MkcAK
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5KFz2XTNmFB2Vb5p3SFsG7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8td2mseel_66JyFUi0bouc
          claim_id: c_tl_6SUe4PfV_yH_K4MkcAK
          source_id: s_x1UqLrBAP1f2uqUwP1KbwE
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_x1UqLrBAP1f2uqUwP1KbwE
            source_type: api_record
            title: 中国历代人物传记资料库：王翁喜（CBDB 689353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689353&o=json
            external_identifier: CBDB:689353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5KFz2XTNmFB2Vb5p3SFsG7
        status: active
        display_name: 王翁喜
        merged_into_person_id: null
    - claim:
        id: c_d4QigsO7eJwBzUmYWBxWxy
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9cVZtJ85CH1LJNFC1g9w8T
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7sRXxhbI-wyAjN4Hwr4nQ9
          claim_id: c_d4QigsO7eJwBzUmYWBxWxy
          source_id: s_R8azHMeJu9V9FxPzN7bHED
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_R8azHMeJu9V9FxPzN7bHED
            source_type: api_record
            title: 中国历代人物传记资料库：王忙兒（CBDB 689334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689334&o=json
            external_identifier: CBDB:689334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9cVZtJ85CH1LJNFC1g9w8T
        status: active
        display_name: 王忙兒
        merged_into_person_id: null
    - claim:
        id: c_i82uoVJsRlCUoI8kRHiRs2
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_H7uCq1o1tuQS9BRNvhphjr
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YDzw3_xpKOz4Z3v_Ccr46q
          claim_id: c_i82uoVJsRlCUoI8kRHiRs2
          source_id: s_7fYWb3YH7c8G5EzFEfDmYJ
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7fYWb3YH7c8G5EzFEfDmYJ
            source_type: api_record
            title: 中国历代人物传记资料库：王吳兒（CBDB 689333）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689333&o=json
            external_identifier: CBDB:689333
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_H7uCq1o1tuQS9BRNvhphjr
        status: active
        display_name: 王吳兒
        merged_into_person_id: null
    - claim:
        id: c_yYvnNgEwGb7EdnQzXjcp04
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_L9vz1h1VZQD3DMRUmJUjoq
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iC349KUIMNiJ2Usr51gixg
          claim_id: c_yYvnNgEwGb7EdnQzXjcp04
          source_id: s_9rJ6oxjpqZZxD1DN8WysZ9
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9rJ6oxjpqZZxD1DN8WysZ9
            source_type: api_record
            title: 中国历代人物传记资料库：王要羅（CBDB 689360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689360&o=json
            external_identifier: CBDB:689360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_L9vz1h1VZQD3DMRUmJUjoq
        status: active
        display_name: 王要羅
        merged_into_person_id: null
    - claim:
        id: c_hxOmGr5LubKrWtCPM7C5ml
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nSJyU64RDm1XGBh2kWtdLx
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QsRbMbL6b5eb3Tb9NS9dRM
          claim_id: c_hxOmGr5LubKrWtCPM7C5ml
          source_id: s_qaReeRoc88cBj5JXa8toVk
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qaReeRoc88cBj5JXa8toVk
            source_type: api_record
            title: 中国历代人物传记资料库：王疥姐（CBDB 689359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689359&o=json
            external_identifier: CBDB:689359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nSJyU64RDm1XGBh2kWtdLx
        status: active
        display_name: 王疥姐
        merged_into_person_id: null
    - claim:
        id: c_3J7ODwl9rfNkseeLpXlV96
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_P9AZuQa6GrmDhsi8wm26FC
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rF8MlCnQ8tDTT5jMU-UY5v
          claim_id: c_3J7ODwl9rfNkseeLpXlV96
          source_id: s_MFUUcWrHfNVMhoU9FGjJLZ
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MFUUcWrHfNVMhoU9FGjJLZ
            source_type: api_record
            title: 中国历代人物传记资料库：王婆憎（CBDB 689361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689361&o=json
            external_identifier: CBDB:689361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_P9AZuQa6GrmDhsi8wm26FC
        status: active
        display_name: 王婆憎
        merged_into_person_id: null
    - claim:
        id: c_INhAXLp4x1ecBvM-5c0edz
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QN76kLww6aXF2YK9ZiUjHm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BBmOz6NrHFUHKNOfiYSoKM
          claim_id: c_INhAXLp4x1ecBvM-5c0edz
          source_id: s_81UwMqcv7wA9uLZ1C4PCpG
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_81UwMqcv7wA9uLZ1C4PCpG
            source_type: api_record
            title: 中国历代人物传记资料库：王大䔪（CBDB 689354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689354&o=json
            external_identifier: CBDB:689354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QN76kLww6aXF2YK9ZiUjHm
        status: active
        display_name: 王大䔪
        merged_into_person_id: null
    - claim:
        id: c_ng9IcJj5DMM0PLgzZzpfMO
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Y6hGSBTgj27TktBQCunLJM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_79BH7aHwE-JzIt51UEbXpD
          claim_id: c_ng9IcJj5DMM0PLgzZzpfMO
          source_id: s_1N7PwP2h7DF3wGxNJQXpB5
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1N7PwP2h7DF3wGxNJQXpB5
            source_type: api_record
            title: 中国历代人物传记资料库：王守忠（CBDB 689314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689314&o=json
            external_identifier: CBDB:689314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.550Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Y6hGSBTgj27TktBQCunLJM
        status: active
        display_name: 王守忠
        merged_into_person_id: null
    - claim:
        id: c_zxdRAomQ1pw1VdEi-tS5Ic
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YpHYkKy2dohfCHHUwrq8Mp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jtslq3Thv4KyAiRLcqeN5A
          claim_id: c_zxdRAomQ1pw1VdEi-tS5Ic
          source_id: s_WEEg1ye43sbS44Zic1B64h
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WEEg1ye43sbS44Zic1B64h
            source_type: api_record
            title: 中国历代人物传记资料库：王小䔪（CBDB 689358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689358&o=json
            external_identifier: CBDB:689358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YpHYkKy2dohfCHHUwrq8Mp
        status: active
        display_name: 王小䔪
        merged_into_person_id: null
    - claim:
        id: c_v0TPlDoeCIOkaf6AVFC2Oq
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zCt3C5WkPmrTGrUYKn2GeP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ciL6CQpEC_RMFhLXuEONLk
          claim_id: c_v0TPlDoeCIOkaf6AVFC2Oq
          source_id: s_JfVqmXA6KZKbZCUe4FFA5i
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JfVqmXA6KZKbZCUe4FFA5i
            source_type: api_record
            title: 中国历代人物传记资料库：王審瓊（CBDB 689254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689254&o=json
            external_identifier: CBDB:689254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_zCt3C5WkPmrTGrUYKn2GeP
        status: active
        display_name: 王忙兒
        merged_into_person_id: null
  other: []
---

# 王審瓊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王審瓊（卒于1005年），宋人物。籍贯屯留。（中国历代人物传记资料库 CBDB 689254） | accepted |
| death.date | 1005年 | accepted |
| name.primary | 王審瓊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ew3NkC6K589nn45EjmCt81 | 王知濬 | accepted |
| children | p_XEBmM74iDRd9pWQEX3aW77 | 王知誨 | accepted |
| spouses | p_iZ1s2ZuGvhTd4EXAvXUyws | 張氏 | accepted |
| descendants | p_27uSqTLx5pXAroYbs1kCGZ | 王守旻 | accepted |
| descendants | p_5KFz2XTNmFB2Vb5p3SFsG7 | 王翁喜 | accepted |
| descendants | p_9cVZtJ85CH1LJNFC1g9w8T | 王忙兒 | accepted |
| descendants | p_H7uCq1o1tuQS9BRNvhphjr | 王吳兒 | accepted |
| descendants | p_L9vz1h1VZQD3DMRUmJUjoq | 王要羅 | accepted |
| descendants | p_nSJyU64RDm1XGBh2kWtdLx | 王疥姐 | accepted |
| descendants | p_P9AZuQa6GrmDhsi8wm26FC | 王婆憎 | accepted |
| descendants | p_QN76kLww6aXF2YK9ZiUjHm | 王大䔪 | accepted |
| descendants | p_Y6hGSBTgj27TktBQCunLJM | 王守忠 | accepted |
| descendants | p_YpHYkKy2dohfCHHUwrq8Mp | 王小䔪 | accepted |
| descendants | p_zCt3C5WkPmrTGrUYKn2GeP | 王忙兒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大䔪（CBDB 689354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689354&o=json)
- [中国历代人物传记资料库：王疥姐（CBDB 689359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689359&o=json)
- [中国历代人物传记资料库：王忙兒（CBDB 689334）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689334&o=json)
- [中国历代人物传记资料库：王婆憎（CBDB 689361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689361&o=json)
- [中国历代人物传记资料库：王審瓊（CBDB 689254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689254&o=json)
- [中国历代人物传记资料库：王守旻（CBDB 689326）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689326&o=json)
- [中国历代人物传记资料库：王守忠（CBDB 689314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689314&o=json)
- [中国历代人物传记资料库：王翁喜（CBDB 689353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689353&o=json)
- [中国历代人物传记资料库：王吳兒（CBDB 689333）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689333&o=json)
- [中国历代人物传记资料库：王小䔪（CBDB 689358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689358&o=json)
- [中国历代人物传记资料库：王要羅（CBDB 689360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689360&o=json)
- [中国历代人物传记资料库：王知誨（CBDB 689301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689301&o=json)
- [中国历代人物传记资料库：王知濬（CBDB 689300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689300&o=json)
- [中国历代人物传记资料库：張氏(王審瓊妻)（CBDB 689299）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689299&o=json)
