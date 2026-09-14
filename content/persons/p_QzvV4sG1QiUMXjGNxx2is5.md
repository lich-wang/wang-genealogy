---
schema: wang-person/v1
id: p_QzvV4sG1QiUMXjGNxx2is5
status: active
merged_into: null
display_name: 王度
revision: 13
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_15CspxEUw7Z8zTudMCGmRm
        subject_person_id: p_QzvV4sG1QiUMXjGNxx2is5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K5q4RVAPTbRmWEo4zrK87G
          claim_id: c_15CspxEUw7Z8zTudMCGmRm
          source_id: s_kueV3CF9BF7fBGvgUfYKGd
          stance: supports
          locator: CBDB:279339
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279339）
          source: &a1
            id: s_kueV3CF9BF7fBGvgUfYKGd
            source_type: api_record
            title: 中国历代人物传记资料库：王度（CBDB 279339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279339&o=json
            external_identifier: CBDB:279339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VQ2qpL5DMkTjTNdGUUT4Ly
        subject_person_id: p_QzvV4sG1QiUMXjGNxx2is5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度，明人物。正德六年進士，籍贯宣城，曾任通判。（中国历代人物传记资料库 CBDB 279339）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c5mtg3IDK9DHbgyQvaTiCQ
          claim_id: c_VQ2qpL5DMkTjTNdGUUT4Ly
          source_id: s_kueV3CF9BF7fBGvgUfYKGd
          stance: supports
          locator: CBDB:279339
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_QrlKP3synvTNX3VAzdpZdx
        subject_person_id: p_QzvV4sG1QiUMXjGNxx2is5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EV_Cfx5-XOF9II7IrXm7zA
          claim_id: c_QrlKP3synvTNX3VAzdpZdx
          source_id: s_LyDXjGHrEMFf51wBwew7nv
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LyDXjGHrEMFf51wBwew7nv
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 201860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201860&o=json
            external_identifier: CBDB:201860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kS75cqd3Wh2NjJNrFJL2j4
        status: active
        display_name: 王遵
        merged_into_person_id: null
    - claim:
        id: c_Sv64JxfvWAebERGgd-XcoS
        subject_person_id: p_QzvV4sG1QiUMXjGNxx2is5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7PPbQ1RDtPEHJAbco5SQ4P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6nrpJl2AJpJIVUikGlv3CJ
          claim_id: c_Sv64JxfvWAebERGgd-XcoS
          source_id: s_v-0UEGe5KybZf2YIkhHYup
          stance: supports
          locator: CBDB：兄弟 王遵（201860）之父／母 王度
          quotation: null
          interpretation_note: 由兄弟关系推断：王芝 与 王遵 为同胞（CBDB 记「兄」），王遵 之父／母即 王芝 之父／母。
          source:
            id: s_v-0UEGe5KybZf2YIkhHYup
            source_type: api_record
            title: 中国历代人物传记资料库：王芝（CBDB 279354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279354&o=json
            external_identifier: CBDB:279354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7PPbQ1RDtPEHJAbco5SQ4P
        status: active
        display_name: 王芝
        merged_into_person_id: null
    - claim:
        id: c_OQpR1o5vS1voKGW5605c29
        subject_person_id: p_QzvV4sG1QiUMXjGNxx2is5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7aK2bt97N12vfMGhrFAYUt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VIOp5A94EJUOnDdpjQ7tSK
          claim_id: c_OQpR1o5vS1voKGW5605c29
          source_id: s_Uid5picjsRyEjcphDwkKiI
          stance: supports
          locator: CBDB：兄弟 王遵（201860）之父／母 王度
          quotation: null
          interpretation_note: 由兄弟关系推断：王遂 与 王遵 为同胞（CBDB 记「弟」），王遵 之父／母即 王遂 之父／母。
          source:
            id: s_Uid5picjsRyEjcphDwkKiI
            source_type: api_record
            title: 中国历代人物传记资料库：王遂（CBDB 279344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279344&o=json
            external_identifier: CBDB:279344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7aK2bt97N12vfMGhrFAYUt
        status: active
        display_name: 王遂
        merged_into_person_id: null
    - claim:
        id: c_QCmRoIbXYN3yECKr0iS4fr
        subject_person_id: p_QzvV4sG1QiUMXjGNxx2is5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7wWdd1QiYByBhZtCNM1XVj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ro1HWk4ouHaJho1WJCCipb
          claim_id: c_QCmRoIbXYN3yECKr0iS4fr
          source_id: s_Y510BJwmz-InjJxNtXNXQL
          stance: supports
          locator: CBDB：兄弟 王遵（201860）之父／母 王度
          quotation: null
          interpretation_note: 由兄弟关系推断：王棻 与 王遵 为同胞（CBDB 记「兄」），王遵 之父／母即 王棻 之父／母。
          source:
            id: s_Y510BJwmz-InjJxNtXNXQL
            source_type: api_record
            title: 中国历代人物传记资料库：王棻（CBDB 279351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279351&o=json
            external_identifier: CBDB:279351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7wWdd1QiYByBhZtCNM1XVj
        status: active
        display_name: 王棻
        merged_into_person_id: null
    - claim:
        id: c_zlIdXuWV85GULZ2-G5xNN0
        subject_person_id: p_QzvV4sG1QiUMXjGNxx2is5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8mVNKzueP5UgXsSKLD5Ld7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r0hGIPTg9RGkkj81n6asQ5
          claim_id: c_zlIdXuWV85GULZ2-G5xNN0
          source_id: s_GSe2GMZldBgsFCuF4MGAi-
          stance: supports
          locator: CBDB：兄弟 王遵（201860）之父／母 王度
          quotation: null
          interpretation_note: 由兄弟关系推断：王孳 与 王遵 为同胞（CBDB 记「兄」），王遵 之父／母即 王孳 之父／母。
          source:
            id: s_GSe2GMZldBgsFCuF4MGAi-
            source_type: api_record
            title: 中国历代人物传记资料库：王孳（CBDB 279350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279350&o=json
            external_identifier: CBDB:279350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8mVNKzueP5UgXsSKLD5Ld7
        status: active
        display_name: 王孳
        merged_into_person_id: null
    - claim:
        id: c_MvF1tBpBHHKTfO01SxWbuL
        subject_person_id: p_QzvV4sG1QiUMXjGNxx2is5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_95ZhtaPS98s8KMvpQ7edRM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uSGZKavvif4QL8It87EAnt
          claim_id: c_MvF1tBpBHHKTfO01SxWbuL
          source_id: s_t54eAxPrGDGOsmB8OFUxeR
          stance: supports
          locator: CBDB：兄弟 王遵（201860）之父／母 王度
          quotation: null
          interpretation_note: 由兄弟关系推断：王前 与 王遵 为同胞（CBDB 记「兄」），王遵 之父／母即 王前 之父／母。
          source:
            id: s_t54eAxPrGDGOsmB8OFUxeR
            source_type: api_record
            title: 中国历代人物传记资料库：王前（CBDB 279349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279349&o=json
            external_identifier: CBDB:279349
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_95ZhtaPS98s8KMvpQ7edRM
        status: active
        display_name: 王前
        merged_into_person_id: null
    - claim:
        id: c_7CYM0S8bi8fJg7klx74-oQ
        subject_person_id: p_QzvV4sG1QiUMXjGNxx2is5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K3LMX71NuopFidrizDU5pe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KHGhNAlqOv7gLGimZ25-6v
          claim_id: c_7CYM0S8bi8fJg7klx74-oQ
          source_id: s_Mf0pNdDe0HOEh2_WF8SgGv
          stance: supports
          locator: CBDB：兄弟 王遵（201860）之父／母 王度
          quotation: null
          interpretation_note: 由兄弟关系推断：王盖 与 王遵 为同胞（CBDB 记「弟」），王遵 之父／母即 王盖 之父／母。
          source:
            id: s_Mf0pNdDe0HOEh2_WF8SgGv
            source_type: api_record
            title: 中国历代人物传记资料库：王盖（CBDB 279345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279345&o=json
            external_identifier: CBDB:279345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K3LMX71NuopFidrizDU5pe
        status: active
        display_name: 王盖
        merged_into_person_id: null
    - claim:
        id: c_jewHuKP_azKqobb9zACWa_
        subject_person_id: p_QzvV4sG1QiUMXjGNxx2is5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K5NzL2z9MjiZNzHPbV64RE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_toJNg17CUKfP7bankEwM_v
          claim_id: c_jewHuKP_azKqobb9zACWa_
          source_id: s_pDX4BLCKjz01gw6WzG9g2P
          stance: supports
          locator: CBDB：兄弟 王遵（201860）之父／母 王度
          quotation: null
          interpretation_note: 由兄弟关系推断：王善 与 王遵 为同胞（CBDB 记「兄」），王遵 之父／母即 王善 之父／母。
          source:
            id: s_pDX4BLCKjz01gw6WzG9g2P
            source_type: api_record
            title: 中国历代人物传记资料库：王善（CBDB 279348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279348&o=json
            external_identifier: CBDB:279348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K5NzL2z9MjiZNzHPbV64RE
        status: active
        display_name: 王善
        merged_into_person_id: null
    - claim:
        id: c_uiPZQ0P81OW18iKSSPb8DD
        subject_person_id: p_QzvV4sG1QiUMXjGNxx2is5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RYgMwSxmsGkqMF3MJDJ1BW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1rA7m7bvR5hwXJyQsGcxCC
          claim_id: c_uiPZQ0P81OW18iKSSPb8DD
          source_id: s_sjAjjvDnN5vl-qHoK8mZtE
          stance: supports
          locator: CBDB：兄弟 王遵（201860）之父／母 王度
          quotation: null
          interpretation_note: 由兄弟关系推断：王益 与 王遵 为同胞（CBDB 记「弟」），王遵 之父／母即 王益 之父／母。
          source:
            id: s_sjAjjvDnN5vl-qHoK8mZtE
            source_type: api_record
            title: 中国历代人物传记资料库：王益（CBDB 279343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279343&o=json
            external_identifier: CBDB:279343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RYgMwSxmsGkqMF3MJDJ1BW
        status: active
        display_name: 王益
        merged_into_person_id: null
    - claim:
        id: c_Nndhb1gYmyTyWZ5ibBAptR
        subject_person_id: p_QzvV4sG1QiUMXjGNxx2is5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bfo5keoL8KwwCJ1osVbesR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xcAHBQIrgOCQgl0K6iOu24
          claim_id: c_Nndhb1gYmyTyWZ5ibBAptR
          source_id: s_-WBDIvqmO98AAdpF2z47Ja
          stance: supports
          locator: CBDB：兄弟 王遵（201860）之父／母 王度
          quotation: null
          interpretation_note: 由兄弟关系推断：王義 与 王遵 为同胞（CBDB 记「弟」），王遵 之父／母即 王義 之父／母。
          source:
            id: s_-WBDIvqmO98AAdpF2z47Ja
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 279347）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279347&o=json
            external_identifier: CBDB:279347
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bfo5keoL8KwwCJ1osVbesR
        status: active
        display_name: 王義
        merged_into_person_id: null
    - claim:
        id: c_DElxSONgdbIFzzJVq82aAZ
        subject_person_id: p_QzvV4sG1QiUMXjGNxx2is5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gSDPiy1J7eMQtU5Q7gPAnd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_daWce8_AX3aD2tMDdixEhN
          claim_id: c_DElxSONgdbIFzzJVq82aAZ
          source_id: s_uP3NhXzTffPSZx0eKI10mB
          stance: supports
          locator: CBDB：兄弟 王遵（201860）之父／母 王度
          quotation: null
          interpretation_note: 由兄弟关系推断：王芳 与 王遵 为同胞（CBDB 记「兄」），王遵 之父／母即 王芳 之父／母。
          source:
            id: s_uP3NhXzTffPSZx0eKI10mB
            source_type: api_record
            title: 中国历代人物传记资料库：王芳（CBDB 279352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279352&o=json
            external_identifier: CBDB:279352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gSDPiy1J7eMQtU5Q7gPAnd
        status: active
        display_name: 王芳
        merged_into_person_id: null
    - claim:
        id: c_RF6qIo2ZYOBJsnCYBohv_v
        subject_person_id: p_QzvV4sG1QiUMXjGNxx2is5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yLwJvXnNDJviJsqYyLQGH9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mHuBnG3Bgm7_xD9DpwqVYm
          claim_id: c_RF6qIo2ZYOBJsnCYBohv_v
          source_id: s_1ybqw1CedSuA5YKTnbRPzU
          stance: supports
          locator: CBDB：兄弟 王遵（201860）之父／母 王度
          quotation: null
          interpretation_note: 由兄弟关系推断：王羲 与 王遵 为同胞（CBDB 记「弟」），王遵 之父／母即 王羲 之父／母。
          source:
            id: s_1ybqw1CedSuA5YKTnbRPzU
            source_type: api_record
            title: 中国历代人物传记资料库：王羲（CBDB 279346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279346&o=json
            external_identifier: CBDB:279346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yLwJvXnNDJviJsqYyLQGH9
        status: active
        display_name: 王羲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王度

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王度 | accepted |
| bio.summary | 王度，明人物。正德六年進士，籍贯宣城，曾任通判。（中国历代人物传记资料库 CBDB 279339） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kS75cqd3Wh2NjJNrFJL2j4 | 王遵 | accepted |
| children | p_7PPbQ1RDtPEHJAbco5SQ4P | 王芝 | accepted |
| children | p_7aK2bt97N12vfMGhrFAYUt | 王遂 | accepted |
| children | p_7wWdd1QiYByBhZtCNM1XVj | 王棻 | accepted |
| children | p_8mVNKzueP5UgXsSKLD5Ld7 | 王孳 | accepted |
| children | p_95ZhtaPS98s8KMvpQ7edRM | 王前 | accepted |
| children | p_K3LMX71NuopFidrizDU5pe | 王盖 | accepted |
| children | p_K5NzL2z9MjiZNzHPbV64RE | 王善 | accepted |
| children | p_RYgMwSxmsGkqMF3MJDJ1BW | 王益 | accepted |
| children | p_bfo5keoL8KwwCJ1osVbesR | 王義 | accepted |
| children | p_gSDPiy1J7eMQtU5Q7gPAnd | 王芳 | accepted |
| children | p_yLwJvXnNDJviJsqYyLQGH9 | 王羲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王度（CBDB 279339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279339&o=json)
- [中国历代人物传记资料库：王芳（CBDB 279352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279352&o=json)
- [中国历代人物传记资料库：王棻（CBDB 279351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279351&o=json)
- [中国历代人物传记资料库：王盖（CBDB 279345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279345&o=json)
- [中国历代人物传记资料库：王前（CBDB 279349）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279349&o=json)
- [中国历代人物传记资料库：王善（CBDB 279348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279348&o=json)
- [中国历代人物传记资料库：王遂（CBDB 279344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279344&o=json)
- [中国历代人物传记资料库：王羲（CBDB 279346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279346&o=json)
- [中国历代人物传记资料库：王益（CBDB 279343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279343&o=json)
- [中国历代人物传记资料库：王義（CBDB 279347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279347&o=json)
- [中国历代人物传记资料库：王芝（CBDB 279354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279354&o=json)
- [中国历代人物传记资料库：王孳（CBDB 279350）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279350&o=json)
- [中国历代人物传记资料库：王遵（CBDB 201860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201860&o=json)
