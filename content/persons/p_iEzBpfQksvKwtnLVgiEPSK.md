---
schema: wang-person/v1
id: p_iEzBpfQksvKwtnLVgiEPSK
status: active
merged_into: null
display_name: 王賜良
cbdb_id: 221864
revision: 9
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tzHJhg8TWchSiPCss2bk3D
        subject_person_id: p_iEzBpfQksvKwtnLVgiEPSK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賜良，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221864）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_v1mWl8KP88pVmrKha75XL4
          claim_id: c_tzHJhg8TWchSiPCss2bk3D
          source_id: s_pN9PhH6Q1bdeAFPm8DGGiB
          stance: supports
          locator: CBDB:221864
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EJDDzBumCn3tKi71t4gdP4
        subject_person_id: p_iEzBpfQksvKwtnLVgiEPSK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賜良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eHCKWKNGL138DLA4DdMNSF
          claim_id: c_EJDDzBumCn3tKi71t4gdP4
          source_id: s_pN9PhH6Q1bdeAFPm8DGGiB
          stance: supports
          locator: CBDB:221864
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
        id: p_CE6L82D742RNyGAmxCYAn5
        status: active
        display_name: 王三陽
        merged_into_person_id: null
    - claim:
        id: c_t8r5oQ1-ff6cVVK2xx1wNn
        subject_person_id: p_iEzBpfQksvKwtnLVgiEPSK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3ego6qZ7Tga1Q5Ykt4yXW3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zQrHtwIbXYD3SFkcBCjCP-
          claim_id: c_t8r5oQ1-ff6cVVK2xx1wNn
          source_id: s_-qnOJwRby484dSUFx-KrBw
          stance: supports
          locator: CBDB：兄弟 王三陽（206708）之父／母 王賜良
          quotation: null
          interpretation_note: 由兄弟关系推断：王應璧 与 王三陽 为同胞（CBDB 记「兄」），王三陽 之父／母即 王應璧 之父／母。
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
        id: c_iZVYHhLLzpS_ubIoPUz_sm
        subject_person_id: p_iEzBpfQksvKwtnLVgiEPSK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6G7ptwRpCYfMhqCPVfSHjK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IW8Fgg-0ApnuJom8KQhLy1
          claim_id: c_iZVYHhLLzpS_ubIoPUz_sm
          source_id: s_Dl0YtOvr5uAs2kgxKQuJkG
          stance: supports
          locator: CBDB：兄弟 王三陽（206708）之父／母 王賜良
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑰陽 与 王三陽 为同胞（CBDB 记「兄」），王三陽 之父／母即 王鑰陽 之父／母。
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
        id: c_ZYfBzIrUk_mQofulm2QI5P
        subject_person_id: p_iEzBpfQksvKwtnLVgiEPSK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8b3iLW9bXH42d3DjadCJky
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_53g_oL9Satwjr9V5R0CYi6
          claim_id: c_ZYfBzIrUk_mQofulm2QI5P
          source_id: s_PK99z-EQZ-11RjkkwcpNXh
          stance: supports
          locator: CBDB：兄弟 王三陽（206708）之父／母 王賜良
          quotation: null
          interpretation_note: 由兄弟关系推断：王少陽 与 王三陽 为同胞（CBDB 记「弟」），王三陽 之父／母即 王少陽 之父／母。
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
        id: c_Yl4G8xqqszHdyJhNBZJ3zN
        subject_person_id: p_iEzBpfQksvKwtnLVgiEPSK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9qTTjc7i8iEzzkt9QoCuqQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dqnWGAbJlTSefrEzeFAR4T
          claim_id: c_Yl4G8xqqszHdyJhNBZJ3zN
          source_id: s_t4FHbhA9MtyCoBHTxB4N9A
          stance: supports
          locator: CBDB：兄弟 王三陽（206708）之父／母 王賜良
          quotation: null
          interpretation_note: 由兄弟关系推断：王應奎 与 王三陽 为同胞（CBDB 记「兄」），王三陽 之父／母即 王應奎 之父／母。
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
        id: c_6AyJNiEysFLQFnX7qCURoY
        subject_person_id: p_iEzBpfQksvKwtnLVgiEPSK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FSJo4VJrVMANcpQMQhv6T8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xX_mLqv-hU950Ph2_YN1OP
          claim_id: c_6AyJNiEysFLQFnX7qCURoY
          source_id: s_wB3YjYL39BFimN2Qs0sTrs
          stance: supports
          locator: CBDB：兄弟 王三陽（206708）之父／母 王賜良
          quotation: null
          interpretation_note: 由兄弟关系推断：王一陽 与 王三陽 为同胞（CBDB 记「弟」），王三陽 之父／母即 王一陽 之父／母。
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
        id: c_zBLpMTZ-Cu7wymtSPuZHH2
        subject_person_id: p_iEzBpfQksvKwtnLVgiEPSK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FevaTQqGRsGYKYJvmbE9em
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x8sCFximye2vdhdTrLHYa8
          claim_id: c_zBLpMTZ-Cu7wymtSPuZHH2
          source_id: s_W5Uhfi77KoKES6moU3zU_n
          stance: supports
          locator: CBDB：兄弟 王三陽（206708）之父／母 王賜良
          quotation: null
          interpretation_note: 由兄弟关系推断：王銓陽 与 王三陽 为同胞（CBDB 记「兄」），王三陽 之父／母即 王銓陽 之父／母。
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
        id: c_cHg1nDPAVboeJ7TwF08bs5
        subject_person_id: p_iEzBpfQksvKwtnLVgiEPSK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jEge1NAq3ePJ9ur7GpBHiF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1GQZUc6MMPNxKrlMM5qPPs
          claim_id: c_cHg1nDPAVboeJ7TwF08bs5
          source_id: s_wxXlsBcVauFaIqymvCWS6H
          stance: supports
          locator: CBDB：兄弟 王三陽（206708）之父／母 王賜良
          quotation: null
          interpretation_note: 由兄弟关系推断：王承陽 与 王三陽 为同胞（CBDB 记「兄」），王三陽 之父／母即 王承陽 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王賜良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王賜良，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221864） | accepted |
| name.primary | 王賜良 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CE6L82D742RNyGAmxCYAn5 | 王三陽 | accepted |
| children | p_3ego6qZ7Tga1Q5Ykt4yXW3 | 王應璧 | accepted |
| children | p_6G7ptwRpCYfMhqCPVfSHjK | 王鑰陽 | accepted |
| children | p_8b3iLW9bXH42d3DjadCJky | 王少陽 | accepted |
| children | p_9qTTjc7i8iEzzkt9QoCuqQ | 王應奎 | accepted |
| children | p_FSJo4VJrVMANcpQMQhv6T8 | 王一陽 | accepted |
| children | p_FevaTQqGRsGYKYJvmbE9em | 王銓陽 | accepted |
| children | p_jEge1NAq3ePJ9ur7GpBHiF | 王承陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承陽（CBDB 221869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221869&o=json)
- [中国历代人物传记资料库：王賜良（CBDB 221864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221864&o=json)
- [中国历代人物传记资料库：王銓陽（CBDB 221873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221873&o=json)
- [中国历代人物传记资料库：王少陽（CBDB 221868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221868&o=json)
- [中国历代人物传记资料库：王鑰陽（CBDB 221874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221874&o=json)
- [中国历代人物传记资料库：王一陽（CBDB 221867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221867&o=json)
- [中国历代人物传记资料库：王應璧（CBDB 221872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221872&o=json)
- [中国历代人物传记资料库：王應奎（CBDB 221870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221870&o=json)
