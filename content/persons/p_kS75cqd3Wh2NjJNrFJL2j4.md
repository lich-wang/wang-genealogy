---
schema: wang-person/v1
id: p_kS75cqd3Wh2NjJNrFJL2j4
status: active
merged_into: null
display_name: 王遵
revision: 14
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WpboydzWUEFvzqUUTLtw6A
        subject_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p79QHjTADWX7ZHMV2EXqnH
          claim_id: c_WpboydzWUEFvzqUUTLtw6A
          source_id: s_LyDXjGHrEMFf51wBwew7nv
          stance: supports
          locator: CBDB:201860
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201860）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_n4Y5fNXSGC6msoqbNhU5r4
        subject_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1475年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aEzkRGrkFkteGVLCfncHx3
          claim_id: c_n4Y5fNXSGC6msoqbNhU5r4
          source_id: s_LyDXjGHrEMFf51wBwew7nv
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
        id: c_XgzEfez9xGRYAxQJFYEn1D
        subject_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵（生于1475年），明人物。明清進士進士，籍贯宣城，入仕進士。（中国历代人物传记资料库 CBDB 201860）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QJDZq_SZak36VKqivabsfx
          claim_id: c_XgzEfez9xGRYAxQJFYEn1D
          source_id: s_LyDXjGHrEMFf51wBwew7nv
          stance: supports
          locator: CBDB:201860
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
      object_person:
        id: p_QzvV4sG1QiUMXjGNxx2is5
        status: active
        display_name: 王度
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_j1bnQVZNUjqMt_2Co6EzgI
        subject_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4WnMCsmdFpjM4acDmatDdk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i-KfOSbjRmNpMN5JowGILq
          claim_id: c_j1bnQVZNUjqMt_2Co6EzgI
          source_id: s_v7gQil8zqpRpKEc7DUNYLN
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百三十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v7gQil8zqpRpKEc7DUNYLN
            source_type: api_record
            title: 中国历代人物传记资料库：吳氏(王遵妻)（CBDB 279341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279341&o=json
            external_identifier: CBDB:279341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4WnMCsmdFpjM4acDmatDdk
        status: active
        display_name: 吳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_C03lInwGysmqXFX9bmow6F
        subject_person_id: p_nkWyHwiFEDv5V7hhY7wDyM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BETSktlDOu46IaD9RrpoPx
          claim_id: c_C03lInwGysmqXFX9bmow6F
          source_id: s_LyDXjGHrEMFf51wBwew7nv
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百三十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nkWyHwiFEDv5V7hhY7wDyM
        status: active
        display_name: 王允中
        merged_into_person_id: null
    - claim:
        id: c_eZqWbuH3MXm4GetHL-kr-A
        subject_person_id: p_VsNGdGEQR2AMZPB6CKNQST
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OhHnudKHLjpOQ9F1jwSQ6F
          claim_id: c_eZqWbuH3MXm4GetHL-kr-A
          source_id: s_LyDXjGHrEMFf51wBwew7nv
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百三十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VsNGdGEQR2AMZPB6CKNQST
        status: active
        display_name: 王昌裔
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_X6mOpgvl9CQISNCM8FGRK4
        subject_person_id: p_7PPbQ1RDtPEHJAbco5SQ4P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D645voqy7Ky6RwLBW_GEoS
          claim_id: c_X6mOpgvl9CQISNCM8FGRK4
          source_id: s_v-0UEGe5KybZf2YIkhHYup
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201860 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_633-YFc0ghV1bs15P4JMN2
        subject_person_id: p_7aK2bt97N12vfMGhrFAYUt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KxMlVHCgRz4cOrK9BWHs24
          claim_id: c_633-YFc0ghV1bs15P4JMN2
          source_id: s_Uid5picjsRyEjcphDwkKiI
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201860 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_1aBuvM6dA7w1FSuNRgOg2w
        subject_person_id: p_7wWdd1QiYByBhZtCNM1XVj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rqRqu1vgTaJ_V_7aL53CjL
          claim_id: c_1aBuvM6dA7w1FSuNRgOg2w
          source_id: s_Y510BJwmz-InjJxNtXNXQL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201860 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_T001JpCAK-B4AolNx5FZq1
        subject_person_id: p_8mVNKzueP5UgXsSKLD5Ld7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pSxjMsjoRJ-YJiMTbwQkzQ
          claim_id: c_T001JpCAK-B4AolNx5FZq1
          source_id: s_GSe2GMZldBgsFCuF4MGAi-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201860 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_ngLqcARMxtBWMBJ2uCLnyZ
        subject_person_id: p_95ZhtaPS98s8KMvpQ7edRM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8tYEEaGN8ap7Mn4wraU5yp
          claim_id: c_ngLqcARMxtBWMBJ2uCLnyZ
          source_id: s_t54eAxPrGDGOsmB8OFUxeR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201860 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_Ga7sI5zU8UEIe4BCDkAHOu
        subject_person_id: p_K3LMX71NuopFidrizDU5pe
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eiiXj7V2PcRnyNIRNUlekH
          claim_id: c_Ga7sI5zU8UEIe4BCDkAHOu
          source_id: s_Mf0pNdDe0HOEh2_WF8SgGv
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201860 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_zoC7bUrvQuBvYwu3tRsdKd
        subject_person_id: p_K5NzL2z9MjiZNzHPbV64RE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_goxC9Moafj2pvQ7oGPlKhR
          claim_id: c_zoC7bUrvQuBvYwu3tRsdKd
          source_id: s_pDX4BLCKjz01gw6WzG9g2P
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201860 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_KEyiMguz12r5fCA4OlWObr
        subject_person_id: p_RYgMwSxmsGkqMF3MJDJ1BW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KnhJgTI9SXQJ29JVvYngFi
          claim_id: c_KEyiMguz12r5fCA4OlWObr
          source_id: s_sjAjjvDnN5vl-qHoK8mZtE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201860 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c__lPQrHyHtxiNtBMwZFQvrm
        subject_person_id: p_bfo5keoL8KwwCJ1osVbesR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sNo9e5rdhSoIbLoI6RrgAS
          claim_id: c__lPQrHyHtxiNtBMwZFQvrm
          source_id: s_-WBDIvqmO98AAdpF2z47Ja
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201860 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_CCBfiLxY0J9ETAtlu49kar
        subject_person_id: p_gSDPiy1J7eMQtU5Q7gPAnd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_szAkAFyChzHViipO2gejO9
          claim_id: c_CCBfiLxY0J9ETAtlu49kar
          source_id: s_uP3NhXzTffPSZx0eKI10mB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201860 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_0As2clE3Dzg4Nmv-SHrvSl
        subject_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yLwJvXnNDJviJsqYyLQGH9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0d3ac5hVhBVLMxo2sZzBuB
          claim_id: c_0As2clE3Dzg4Nmv-SHrvSl
          source_id: s_1ybqw1CedSuA5YKTnbRPzU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201860 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王遵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遵 | accepted |
| birth.date | 1475年 | accepted |
| bio.summary | 王遵（生于1475年），明人物。明清進士進士，籍贯宣城，入仕進士。（中国历代人物传记资料库 CBDB 201860） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QzvV4sG1QiUMXjGNxx2is5 | 王度 | accepted |
| spouses | p_4WnMCsmdFpjM4acDmatDdk | 吳氏 | accepted |
| ancestors | p_nkWyHwiFEDv5V7hhY7wDyM | 王允中 | accepted |
| ancestors | p_VsNGdGEQR2AMZPB6CKNQST | 王昌裔 | accepted |
| other | p_7PPbQ1RDtPEHJAbco5SQ4P | 王芝 | accepted |
| other | p_7aK2bt97N12vfMGhrFAYUt | 王遂 | accepted |
| other | p_7wWdd1QiYByBhZtCNM1XVj | 王棻 | accepted |
| other | p_8mVNKzueP5UgXsSKLD5Ld7 | 王孳 | accepted |
| other | p_95ZhtaPS98s8KMvpQ7edRM | 王前 | accepted |
| other | p_K3LMX71NuopFidrizDU5pe | 王盖 | accepted |
| other | p_K5NzL2z9MjiZNzHPbV64RE | 王善 | accepted |
| other | p_RYgMwSxmsGkqMF3MJDJ1BW | 王益 | accepted |
| other | p_bfo5keoL8KwwCJ1osVbesR | 王義 | accepted |
| other | p_gSDPiy1J7eMQtU5Q7gPAnd | 王芳 | accepted |
| other | p_yLwJvXnNDJviJsqYyLQGH9 | 王羲 | accepted |

## 外部来源

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
- [中国历代人物传记资料库：吳氏(王遵妻)（CBDB 279341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279341&o=json)
