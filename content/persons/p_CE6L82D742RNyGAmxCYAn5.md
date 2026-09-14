---
schema: wang-person/v1
id: p_CE6L82D742RNyGAmxCYAn5
status: active
merged_into: null
display_name: 王三陽
cbdb_id: 206708
revision: 11
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1iAB8pX7wTxD9QXCeMw6Y1
        subject_person_id: p_CE6L82D742RNyGAmxCYAn5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三陽（生于1550年），明人物。明清進士進士，籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 206708）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_HJtnWz4r2n923tFtoCNLZd
          claim_id: c_1iAB8pX7wTxD9QXCeMw6Y1
          source_id: s_oJ9DpvgfJA2Q12P1wHjea9
          stance: supports
          locator: CBDB:206708
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oJ9DpvgfJA2Q12P1wHjea9
            source_type: api_record
            title: 中国历代人物传记资料库：王三陽（CBDB 206708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206708&o=json
            external_identifier: CBDB:206708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1JLuqZq4Q7J9dAvH7jo7AK
        subject_person_id: p_CE6L82D742RNyGAmxCYAn5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1550年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1550-01-01
            latest: 1550-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AZks54VPUvYdCM1VrjDKqv
          claim_id: c_1JLuqZq4Q7J9dAvH7jo7AK
          source_id: s_oJ9DpvgfJA2Q12P1wHjea9
          stance: supports
          locator: CBDB:206708
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1550
          source:
            id: s_oJ9DpvgfJA2Q12P1wHjea9
            source_type: api_record
            title: 中国历代人物传记资料库：王三陽（CBDB 206708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206708&o=json
            external_identifier: CBDB:206708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KEbuD7bYK7HLJJvLEWej1w
        subject_person_id: p_CE6L82D742RNyGAmxCYAn5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rXDnXM4p8LZysFJg7GGNpL
          claim_id: c_KEbuD7bYK7HLJJvLEWej1w
          source_id: s_oJ9DpvgfJA2Q12P1wHjea9
          stance: supports
          locator: CBDB:206708
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1550
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VpbYKBRriixX-j-VCSiL40
        subject_person_id: p_iEzBpfQksvKwtnLVgiEPSK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CE6L82D742RNyGAmxCYAn5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6xIuN4YcGk8gU-I0o5Zgw2
          claim_id: c_VpbYKBRriixX-j-VCSiL40
          source_id: s_pN9PhH6Q1bdeAFPm8DGGiB
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百二十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pN9PhH6Q1bdeAFPm8DGGiB
            source_type: api_record
            title: 中国历代人物传记资料库：王賜良（CBDB 221864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221864&o=json
            external_identifier: CBDB:221864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_iEzBpfQksvKwtnLVgiEPSK
        status: active
        display_name: 王賜良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_R-5hp6QtAMSZH3OWZrkPCy
        subject_person_id: p_Eadd6mMaXChvMX3qCq7Z3P
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CE6L82D742RNyGAmxCYAn5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IWKvfoSg8orieM3ld-3Xpq
          claim_id: c_R-5hp6QtAMSZH3OWZrkPCy
          source_id: s_DSRV9jMjzb3raA6Jv7LWVW
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百二十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DSRV9jMjzb3raA6Jv7LWVW
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 221863）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221863&o=json
            external_identifier: CBDB:221863
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.345Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Eadd6mMaXChvMX3qCq7Z3P
        status: active
        display_name: 王寬
        merged_into_person_id: null
    - claim:
        id: c_7Nv0wvDta4IJ5vxybd2ZXM
        subject_person_id: p_vA2EkkQ3G2YuHPZyYeeo8p
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CE6L82D742RNyGAmxCYAn5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l6qQcBPQeT2_mJJnQcdfmV
          claim_id: c_7Nv0wvDta4IJ5vxybd2ZXM
          source_id: s_NgfSfKjDHBJtX3FZyj5967
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百二十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NgfSfKjDHBJtX3FZyj5967
            source_type: api_record
            title: 中国历代人物传记资料库：王杞（CBDB 221862）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221862&o=json
            external_identifier: CBDB:221862
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.345Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vA2EkkQ3G2YuHPZyYeeo8p
        status: active
        display_name: 王杞
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_PBT7E7o-O49VryZxyts2qt
        subject_person_id: p_3ego6qZ7Tga1Q5Ykt4yXW3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CE6L82D742RNyGAmxCYAn5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QZhiuoruPG99LxpcLz59gM
          claim_id: c_PBT7E7o-O49VryZxyts2qt
          source_id: s_-qnOJwRby484dSUFx-KrBw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206708 王三陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-qnOJwRby484dSUFx-KrBw
            source_type: api_record
            title: 中国历代人物传记资料库：王應璧（CBDB 221872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221872&o=json
            external_identifier: CBDB:221872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3ego6qZ7Tga1Q5Ykt4yXW3
        status: active
        display_name: 王應璧
        merged_into_person_id: null
    - claim:
        id: c_g725Aaji6FgBsVjIlNQO4j
        subject_person_id: p_6G7ptwRpCYfMhqCPVfSHjK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CE6L82D742RNyGAmxCYAn5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0wtZi3LHb0iZ-BjKo_PcW9
          claim_id: c_g725Aaji6FgBsVjIlNQO4j
          source_id: s_Dl0YtOvr5uAs2kgxKQuJkG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206708 王三陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Dl0YtOvr5uAs2kgxKQuJkG
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰陽（CBDB 221874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221874&o=json
            external_identifier: CBDB:221874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6G7ptwRpCYfMhqCPVfSHjK
        status: active
        display_name: 王鑰陽
        merged_into_person_id: null
    - claim:
        id: c_m-LGPpTA9LLgyibYJxYzhi
        subject_person_id: p_8b3iLW9bXH42d3DjadCJky
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CE6L82D742RNyGAmxCYAn5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tcA9oMLOB_H6ujcrf4VnqP
          claim_id: c_m-LGPpTA9LLgyibYJxYzhi
          source_id: s_PK99z-EQZ-11RjkkwcpNXh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206708 王三陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PK99z-EQZ-11RjkkwcpNXh
            source_type: api_record
            title: 中国历代人物传记资料库：王少陽（CBDB 221868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221868&o=json
            external_identifier: CBDB:221868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8b3iLW9bXH42d3DjadCJky
        status: active
        display_name: 王少陽
        merged_into_person_id: null
    - claim:
        id: c_jm2E8wRFyxQ5qWArZORu79
        subject_person_id: p_9qTTjc7i8iEzzkt9QoCuqQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CE6L82D742RNyGAmxCYAn5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qO-meP_CswvDeixUpb6JYA
          claim_id: c_jm2E8wRFyxQ5qWArZORu79
          source_id: s_t4FHbhA9MtyCoBHTxB4N9A
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206708 王三陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_t4FHbhA9MtyCoBHTxB4N9A
            source_type: api_record
            title: 中国历代人物传记资料库：王應奎（CBDB 221870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221870&o=json
            external_identifier: CBDB:221870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9qTTjc7i8iEzzkt9QoCuqQ
        status: active
        display_name: 王應奎
        merged_into_person_id: null
    - claim:
        id: c_LWJN6re-jQOYKtgFNf6k_e
        subject_person_id: p_CE6L82D742RNyGAmxCYAn5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FSJo4VJrVMANcpQMQhv6T8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0HF9CK8r5uEHc_V5GJbxu_
          claim_id: c_LWJN6re-jQOYKtgFNf6k_e
          source_id: s_wB3YjYL39BFimN2Qs0sTrs
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206708 王三陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wB3YjYL39BFimN2Qs0sTrs
            source_type: api_record
            title: 中国历代人物传记资料库：王一陽（CBDB 221867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221867&o=json
            external_identifier: CBDB:221867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FSJo4VJrVMANcpQMQhv6T8
        status: active
        display_name: 王一陽
        merged_into_person_id: null
    - claim:
        id: c_U0SleH__sb8awZez_HgBTq
        subject_person_id: p_CE6L82D742RNyGAmxCYAn5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FevaTQqGRsGYKYJvmbE9em
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q_PzCCAWMwLIWCClYlFROF
          claim_id: c_U0SleH__sb8awZez_HgBTq
          source_id: s_W5Uhfi77KoKES6moU3zU_n
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206708 王三陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_W5Uhfi77KoKES6moU3zU_n
            source_type: api_record
            title: 中国历代人物传记资料库：王銓陽（CBDB 221873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221873&o=json
            external_identifier: CBDB:221873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FevaTQqGRsGYKYJvmbE9em
        status: active
        display_name: 王銓陽
        merged_into_person_id: null
    - claim:
        id: c_cjB2bLSQ_CHEDk9MpHjk0R
        subject_person_id: p_CE6L82D742RNyGAmxCYAn5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jEge1NAq3ePJ9ur7GpBHiF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XHeyRDiA7krGXcpeqH_n-1
          claim_id: c_cjB2bLSQ_CHEDk9MpHjk0R
          source_id: s_wxXlsBcVauFaIqymvCWS6H
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206708 王三陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wxXlsBcVauFaIqymvCWS6H
            source_type: api_record
            title: 中国历代人物传记资料库：王承陽（CBDB 221869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221869&o=json
            external_identifier: CBDB:221869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jEge1NAq3ePJ9ur7GpBHiF
        status: active
        display_name: 王承陽
        merged_into_person_id: null
---

# 王三陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王三陽（生于1550年），明人物。明清進士進士，籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 206708） | accepted |
| birth.date | 1550年 | accepted |
| name.primary | 王三陽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iEzBpfQksvKwtnLVgiEPSK | 王賜良 | accepted |
| ancestors | p_Eadd6mMaXChvMX3qCq7Z3P | 王寬 | accepted |
| ancestors | p_vA2EkkQ3G2YuHPZyYeeo8p | 王杞 | accepted |
| other | p_3ego6qZ7Tga1Q5Ykt4yXW3 | 王應璧 | accepted |
| other | p_6G7ptwRpCYfMhqCPVfSHjK | 王鑰陽 | accepted |
| other | p_8b3iLW9bXH42d3DjadCJky | 王少陽 | accepted |
| other | p_9qTTjc7i8iEzzkt9QoCuqQ | 王應奎 | accepted |
| other | p_FSJo4VJrVMANcpQMQhv6T8 | 王一陽 | accepted |
| other | p_FevaTQqGRsGYKYJvmbE9em | 王銓陽 | accepted |
| other | p_jEge1NAq3ePJ9ur7GpBHiF | 王承陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承陽（CBDB 221869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221869&o=json)
- [中国历代人物传记资料库：王賜良（CBDB 221864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221864&o=json)
- [中国历代人物传记资料库：王寬（CBDB 221863）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221863&o=json)
- [中国历代人物传记资料库：王杞（CBDB 221862）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221862&o=json)
- [中国历代人物传记资料库：王銓陽（CBDB 221873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221873&o=json)
- [中国历代人物传记资料库：王三陽（CBDB 206708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206708&o=json)
- [中国历代人物传记资料库：王少陽（CBDB 221868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221868&o=json)
- [中国历代人物传记资料库：王鑰陽（CBDB 221874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221874&o=json)
- [中国历代人物传记资料库：王一陽（CBDB 221867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221867&o=json)
- [中国历代人物传记资料库：王應璧（CBDB 221872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221872&o=json)
- [中国历代人物传记资料库：王應奎（CBDB 221870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221870&o=json)
