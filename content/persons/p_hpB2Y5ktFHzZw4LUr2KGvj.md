---
schema: wang-person/v1
id: p_hpB2Y5ktFHzZw4LUr2KGvj
status: active
merged_into: null
display_name: 王用楨
revision: 15
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NpZ9ZG66E3PCqSK5gkLPPu
        subject_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bAUM4LNNnXveDGTCj86snn
          claim_id: c_NpZ9ZG66E3PCqSK5gkLPPu
          source_id: s_D85CeigFJvAynjJ4gGyfWV
          stance: supports
          locator: CBDB:204826
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204826）
          source: &a1
            id: s_D85CeigFJvAynjJ4gGyfWV
            source_type: api_record
            title: 中国历代人物传记资料库：王用楨（CBDB 204826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204826&o=json
            external_identifier: CBDB:204826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8rrc8i324BGbB9J2ih71rP
        subject_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
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
        - id: cs_DLJCTSGeF6ysJCE7Mue4ft
          claim_id: c_8rrc8i324BGbB9J2ih71rP
          source_id: s_D85CeigFJvAynjJ4gGyfWV
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
        id: c_e1JLyLJxKqvcJR9QfBqyAT
        subject_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用楨（生于1531年），明人物。明清進士進士，籍贯南充，入仕進士。（中国历代人物传记资料库 CBDB 204826）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hFZMEbuQUcPKZL-SXBIg9k
          claim_id: c_e1JLyLJxKqvcJR9QfBqyAT
          source_id: s_D85CeigFJvAynjJ4gGyfWV
          stance: supports
          locator: CBDB:204826
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gW5ClgZTRF44P-BOnw_BSn
        subject_person_id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_128B9biG3SCqBi3RjuYvYI
          claim_id: c_gW5ClgZTRF44P-BOnw_BSn
          source_id: s_4y8cFGHpEpZcqM3DqnwKCq
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第六十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4y8cFGHpEpZcqM3DqnwKCq
            source_type: api_record
            title: 中国历代人物传记资料库：王纘宗（CBDB 324561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324561&o=json
            external_identifier: CBDB:324561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        status: active
        display_name: 王纘宗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_DmgZ36zhQ_P1qQASUWMjxK
        subject_person_id: p_C5baHBFGFpi4r39kKgCUFK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ile_5MJmoPWOgE6k989Qfd
          claim_id: c_DmgZ36zhQ_P1qQASUWMjxK
          source_id: s_3qNy7QMGUrfC1yGfge6mTU
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第六十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3qNy7QMGUrfC1yGfge6mTU
            source_type: api_record
            title: 中国历代人物传记资料库：王汾（CBDB 324560）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324560&o=json
            external_identifier: CBDB:324560
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.188Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C5baHBFGFpi4r39kKgCUFK
        status: active
        display_name: 王汾
        merged_into_person_id: null
    - claim:
        id: c_z8KbF2Dl_ePOWZMQmX6SFz
        subject_person_id: p_phM7XLeV2SMYTDK13TQXci
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SpYi-DmtzG3R9Sft26mt7J
          claim_id: c_z8KbF2Dl_ePOWZMQmX6SFz
          source_id: s_xuS8dfXfxskivPNArysg96
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第六十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xuS8dfXfxskivPNArysg96
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 324559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324559&o=json
            external_identifier: CBDB:324559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.187Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_phM7XLeV2SMYTDK13TQXci
        status: active
        display_name: 王儒
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_KQVqrBL0LI6Yhq7UlxtmjU
        subject_person_id: p_6GFNJN3RybBE7dopVUBEes
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_evK8mGlli5SxlzRkSwvJKX
          claim_id: c_KQVqrBL0LI6Yhq7UlxtmjU
          source_id: s_GBUWLbP0m8k1Ai7ScKTe2J
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204826 王用楨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GBUWLbP0m8k1Ai7ScKTe2J
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉（CBDB 324571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324571&o=json
            external_identifier: CBDB:324571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6GFNJN3RybBE7dopVUBEes
        status: active
        display_name: 王嘉
        merged_into_person_id: null
    - claim:
        id: c_yeQrU9WJNLgTxMWAkqPGiz
        subject_person_id: p_CtzM6SrBC88nz162s91Kx6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fu0j86N1rhgtdqYyFo-XNw
          claim_id: c_yeQrU9WJNLgTxMWAkqPGiz
          source_id: s_5IwcKFGZaB3bNW4H9a9lM7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204826 王用楨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5IwcKFGZaB3bNW4H9a9lM7
            source_type: api_record
            title: 中国历代人物传记资料库：王用官（CBDB 324566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324566&o=json
            external_identifier: CBDB:324566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CtzM6SrBC88nz162s91Kx6
        status: active
        display_name: 王用官
        merged_into_person_id: null
    - claim:
        id: c_ICzip-gVSuzK1nsj4lakh5
        subject_person_id: p_HaAN2bLNRjLhZBVymSE7kz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vb3azR_fOwejJCs-SE69GS
          claim_id: c_ICzip-gVSuzK1nsj4lakh5
          source_id: s_5P_v-w6ghkP5P4G2XcpS-Z
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204826 王用楨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5P_v-w6ghkP5P4G2XcpS-Z
            source_type: api_record
            title: 中国历代人物传记资料库：王用行（CBDB 324573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324573&o=json
            external_identifier: CBDB:324573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HaAN2bLNRjLhZBVymSE7kz
        status: active
        display_name: 王用行
        merged_into_person_id: null
    - claim:
        id: c_xyOuMbViXWmxPF8sdQ71uL
        subject_person_id: p_KQnaoBrw8SsaLnnF4L3Po3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zGnz29V4Qicv-nceVwi5V8
          claim_id: c_xyOuMbViXWmxPF8sdQ71uL
          source_id: s_BnCY1x4ZoaXB-39IIz_6bC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204826 王用楨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BnCY1x4ZoaXB-39IIz_6bC
            source_type: api_record
            title: 中国历代人物传记资料库：王疇（CBDB 324568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324568&o=json
            external_identifier: CBDB:324568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KQnaoBrw8SsaLnnF4L3Po3
        status: active
        display_name: 王疇
        merged_into_person_id: null
    - claim:
        id: c_iEkQYX2M66TEL2HCb5t95b
        subject_person_id: p_M6LEcXJ4fAxH6NMLaBJTYV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mMFOzBrZA8qMQewr76leOD
          claim_id: c_iEkQYX2M66TEL2HCb5t95b
          source_id: s_8LoXkFgmCiZ2ZowExxHmrx
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204826 王用楨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8LoXkFgmCiZ2ZowExxHmrx
            source_type: api_record
            title: 中国历代人物传记资料库：王達孚（CBDB 324570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324570&o=json
            external_identifier: CBDB:324570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_M6LEcXJ4fAxH6NMLaBJTYV
        status: active
        display_name: 王達孚
        merged_into_person_id: null
    - claim:
        id: c_tryihcj7ig6UjSdC3EfCSu
        subject_person_id: p_U7t29AJET8TEYjEiPgwzy7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rywSsDF2NhM6SuQaUPb1JZ
          claim_id: c_tryihcj7ig6UjSdC3EfCSu
          source_id: s_gGjC5Fy7xXdGd0kj42_Z5R
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204826 王用楨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gGjC5Fy7xXdGd0kj42_Z5R
            source_type: api_record
            title: 中国历代人物传记资料库：王用康（CBDB 324575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324575&o=json
            external_identifier: CBDB:324575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U7t29AJET8TEYjEiPgwzy7
        status: active
        display_name: 王用康
        merged_into_person_id: null
    - claim:
        id: c_CIOnVZeDaf8U9BUTrptwB_
        subject_person_id: p_VNNbh8NWTBE9vDh7X2rEN1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u-opRChXreDYQAAnXovHJ9
          claim_id: c_CIOnVZeDaf8U9BUTrptwB_
          source_id: s_YFtgSyuyP1EsFLM-MREwnV
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204826 王用楨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YFtgSyuyP1EsFLM-MREwnV
            source_type: api_record
            title: 中国历代人物传记资料库：王美銳（CBDB 324567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324567&o=json
            external_identifier: CBDB:324567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VNNbh8NWTBE9vDh7X2rEN1
        status: active
        display_name: 王美銳
        merged_into_person_id: null
    - claim:
        id: c_0G5wbZGXih3lHIMX3bOiwB
        subject_person_id: p_VnMF4vYCZBF1or3PKc5Tz3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4kPrLdkiy0tAwTf3QNNtAn
          claim_id: c_0G5wbZGXih3lHIMX3bOiwB
          source_id: s_-G7fBIBN9btKEGuhClctud
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204826 王用楨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-G7fBIBN9btKEGuhClctud
            source_type: api_record
            title: 中国历代人物传记资料库：王用賓（CBDB 324565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324565&o=json
            external_identifier: CBDB:324565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VnMF4vYCZBF1or3PKc5Tz3
        status: active
        display_name: 王用賓
        merged_into_person_id: null
    - claim:
        id: c_xyguT7YOczQftNozT1i5TL
        subject_person_id: p_WZhbbHJkMSdRjeeuQou9DY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1vrIDYkcMBkcsvcadl43zB
          claim_id: c_xyguT7YOczQftNozT1i5TL
          source_id: s_hioFLfz-T_vvlAONjVin5z
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204826 王用楨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hioFLfz-T_vvlAONjVin5z
            source_type: api_record
            title: 中国历代人物传记资料库：王用章（CBDB 324572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324572&o=json
            external_identifier: CBDB:324572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WZhbbHJkMSdRjeeuQou9DY
        status: active
        display_name: 王用章
        merged_into_person_id: null
    - claim:
        id: c_EsydNmhznpnTKh03lCv-33
        subject_person_id: p_Xu98awyac4YYMCq5HUoMnW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nmcs9uls_9DwXFoWWu6SX0
          claim_id: c_EsydNmhznpnTKh03lCv-33
          source_id: s_85MjhOqh_lKUTHTq7tYe1W
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204826 王用楨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_85MjhOqh_lKUTHTq7tYe1W
            source_type: api_record
            title: 中国历代人物传记资料库：王用予（CBDB 324576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324576&o=json
            external_identifier: CBDB:324576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Xu98awyac4YYMCq5HUoMnW
        status: active
        display_name: 王用予
        merged_into_person_id: null
    - claim:
        id: c_47H70x8d6E5ZJtNHv6Wfc1
        subject_person_id: p_g9VGzJxeEjCUMANz6T7gPv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2oOISs7HE3d7kFj6lDr9U2
          claim_id: c_47H70x8d6E5ZJtNHv6Wfc1
          source_id: s_N7UidzKA1FuuGTNrtZ8xWu
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204826 王用楨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_N7UidzKA1FuuGTNrtZ8xWu
            source_type: api_record
            title: 中国历代人物传记资料库：王茂孚（CBDB 324569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324569&o=json
            external_identifier: CBDB:324569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g9VGzJxeEjCUMANz6T7gPv
        status: active
        display_name: 王茂孚
        merged_into_person_id: null
---

# 王用楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用楨 | accepted |
| birth.date | 1531年 | accepted |
| bio.summary | 王用楨（生于1531年），明人物。明清進士進士，籍贯南充，入仕進士。（中国历代人物传记资料库 CBDB 204826） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oZ4kQSFi4x4MxZ3DEL5Xbj | 王纘宗 | accepted |
| ancestors | p_C5baHBFGFpi4r39kKgCUFK | 王汾 | accepted |
| ancestors | p_phM7XLeV2SMYTDK13TQXci | 王儒 | accepted |
| other | p_6GFNJN3RybBE7dopVUBEes | 王嘉 | accepted |
| other | p_CtzM6SrBC88nz162s91Kx6 | 王用官 | accepted |
| other | p_HaAN2bLNRjLhZBVymSE7kz | 王用行 | accepted |
| other | p_KQnaoBrw8SsaLnnF4L3Po3 | 王疇 | accepted |
| other | p_M6LEcXJ4fAxH6NMLaBJTYV | 王達孚 | accepted |
| other | p_U7t29AJET8TEYjEiPgwzy7 | 王用康 | accepted |
| other | p_VNNbh8NWTBE9vDh7X2rEN1 | 王美銳 | accepted |
| other | p_VnMF4vYCZBF1or3PKc5Tz3 | 王用賓 | accepted |
| other | p_WZhbbHJkMSdRjeeuQou9DY | 王用章 | accepted |
| other | p_Xu98awyac4YYMCq5HUoMnW | 王用予 | accepted |
| other | p_g9VGzJxeEjCUMANz6T7gPv | 王茂孚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王疇（CBDB 324568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324568&o=json)
- [中国历代人物传记资料库：王達孚（CBDB 324570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324570&o=json)
- [中国历代人物传记资料库：王汾（CBDB 324560）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324560&o=json)
- [中国历代人物传记资料库：王嘉（CBDB 324571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324571&o=json)
- [中国历代人物传记资料库：王茂孚（CBDB 324569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324569&o=json)
- [中国历代人物传记资料库：王美銳（CBDB 324567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324567&o=json)
- [中国历代人物传记资料库：王儒（CBDB 324559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324559&o=json)
- [中国历代人物传记资料库：王用賓（CBDB 324565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324565&o=json)
- [中国历代人物传记资料库：王用官（CBDB 324566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324566&o=json)
- [中国历代人物传记资料库：王用康（CBDB 324575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324575&o=json)
- [中国历代人物传记资料库：王用行（CBDB 324573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324573&o=json)
- [中国历代人物传记资料库：王用予（CBDB 324576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324576&o=json)
- [中国历代人物传记资料库：王用章（CBDB 324572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324572&o=json)
- [中国历代人物传记资料库：王用楨（CBDB 204826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204826&o=json)
- [中国历代人物传记资料库：王纘宗（CBDB 324561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324561&o=json)
