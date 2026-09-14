---
schema: wang-person/v1
id: p_N7qE8Uar4CzK9TTK6UVM28
status: active
merged_into: null
display_name: 王希文
revision: 16
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vBfGmJ7XW1EDd3XveA7fKb
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_69RqQ1nuVURmvDYnpwRqdi
          claim_id: c_vBfGmJ7XW1EDd3XveA7fKb
          source_id: s_FrwWZRDBNt6pNGFBizNerf
          stance: supports
          locator: CBDB:209884
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209884）
          source: &a1
            id: s_FrwWZRDBNt6pNGFBizNerf
            source_type: api_record
            title: 中国历代人物传记资料库：王希文（CBDB 209884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209884&o=json
            external_identifier: CBDB:209884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_788H9oo1iZdrPbf6C4R922
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希文，明人物。隆慶五年進士，籍贯南充，曾任都察院左都御史、戶部主事、資政大夫。（中国历代人物传记资料库 CBDB 209884）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JWGgPlLJpDIzyShkE5CQn-
          claim_id: c_788H9oo1iZdrPbf6C4R922
          source_id: s_FrwWZRDBNt6pNGFBizNerf
          stance: supports
          locator: CBDB:209884
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_SAq00vkjeQ3LjQdsD9jVkr
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tf_N6S-JbExOFrEBhbss55
          claim_id: c_SAq00vkjeQ3LjQdsD9jVkr
          source_id: s_FrwWZRDBNt6pNGFBizNerf
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pv2pDE9A1jj2uMGHCGpC7T
        status: active
        display_name: 王廷
        merged_into_person_id: null
    - claim:
        id: c_ITKQCyz89pS-LlyKL7IKsM
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PeNwc61mxTnzddmv7sBFLN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bJeiUuB-9FGIocVQ5Y2K5H
          claim_id: c_ITKQCyz89pS-LlyKL7IKsM
          source_id: s_FrwWZRDBNt6pNGFBizNerf
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第九十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PeNwc61mxTnzddmv7sBFLN
        status: active
        display_name: 王延
        merged_into_person_id: null
    - claim:
        id: c_MFCKvSRGDsXndpdZ2D4wzk
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1TVKvp1a17v9go5ENtPAQ8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4RakIhw_mBW0LNe8bNr0HO
          claim_id: c_MFCKvSRGDsXndpdZ2D4wzk
          source_id: s_ZapI3GK4XE2aWtcvnOKiqV
          stance: supports
          locator: CBDB：兄弟 王廷（69148）之父／母 王希文
          quotation: null
          interpretation_note: 由兄弟关系推断：王進 与 王廷 为同胞（CBDB 记「兄」），王廷 之父／母即 王進 之父／母。
          source:
            id: s_ZapI3GK4XE2aWtcvnOKiqV
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 290824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290824&o=json
            external_identifier: CBDB:290824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1TVKvp1a17v9go5ENtPAQ8
        status: active
        display_name: 王進
        merged_into_person_id: null
    - claim:
        id: c_npr5KYdyjldzM9IxNwpIH5
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2UaPva3PJ4SimEwsC8AKh3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ySAdUyrOWU1H2_eY8317XF
          claim_id: c_npr5KYdyjldzM9IxNwpIH5
          source_id: s_OZKCRe-FoVy8x6JMTLYS3d
          stance: supports
          locator: CBDB：兄弟 王廷（69148）之父／母 王希文
          quotation: null
          interpretation_note: 由兄弟关系推断：王謙 与 王廷 为同胞（CBDB 记「兄」），王廷 之父／母即 王謙 之父／母。
          source:
            id: s_OZKCRe-FoVy8x6JMTLYS3d
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 290823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290823&o=json
            external_identifier: CBDB:290823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2UaPva3PJ4SimEwsC8AKh3
        status: active
        display_name: 王謙
        merged_into_person_id: null
    - claim:
        id: c_DiI9ghqMjVeEPjMW6sEqoK
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2b3kEpBDNX9UQbK8kWgjC2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qo7wY-8ap7PbkFBYfKaISA
          claim_id: c_DiI9ghqMjVeEPjMW6sEqoK
          source_id: s_GRbwsk73PZmEcRelpPGdQm
          stance: supports
          locator: CBDB：兄弟 王廷（69148）之父／母 王希文
          quotation: null
          interpretation_note: 由兄弟关系推断：王迨 与 王廷 为同胞（CBDB 记「兄」），王廷 之父／母即 王迨 之父／母。
          source:
            id: s_GRbwsk73PZmEcRelpPGdQm
            source_type: api_record
            title: 中国历代人物传记资料库：王迨（CBDB 290825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290825&o=json
            external_identifier: CBDB:290825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2b3kEpBDNX9UQbK8kWgjC2
        status: active
        display_name: 王迨
        merged_into_person_id: null
    - claim:
        id: c_0XllfvcFBrkOqT_BYx4pi3
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DETEvzeBubX45FgE9jDjJB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yZ4ZdZ10XrG2euMEJUCUST
          claim_id: c_0XllfvcFBrkOqT_BYx4pi3
          source_id: s_ZnYlEhSpijw83RTOtCcBTK
          stance: supports
          locator: CBDB：兄弟 王廷（69148）之父／母 王希文
          quotation: null
          interpretation_note: 由兄弟关系推断：王邁 与 王廷 为同胞（CBDB 记「兄」），王廷 之父／母即 王邁 之父／母。
          source:
            id: s_ZnYlEhSpijw83RTOtCcBTK
            source_type: api_record
            title: 中国历代人物传记资料库：王邁（CBDB 290821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290821&o=json
            external_identifier: CBDB:290821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DETEvzeBubX45FgE9jDjJB
        status: active
        display_name: 王邁
        merged_into_person_id: null
    - claim:
        id: c__CiQSprX-Y-Bx8XE0AJ8Ne
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EhLuzakM77Au4WLhNNyX41
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PQIPgcBhtbxWm9dGDUFxcT
          claim_id: c__CiQSprX-Y-Bx8XE0AJ8Ne
          source_id: s_MHqRX7mOhkmgJF2ufs8kt3
          stance: supports
          locator: CBDB：兄弟 王廷（69148）之父／母 王希文
          quotation: null
          interpretation_note: 由兄弟关系推断：王遴 与 王廷 为同胞（CBDB 记「兄」），王廷 之父／母即 王遴 之父／母。
          source:
            id: s_MHqRX7mOhkmgJF2ufs8kt3
            source_type: api_record
            title: 中国历代人物传记资料库：王遴（CBDB 290820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290820&o=json
            external_identifier: CBDB:290820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EhLuzakM77Au4WLhNNyX41
        status: active
        display_name: 王遴
        merged_into_person_id: null
    - claim:
        id: c_4Yx--wfI07veaXdjdGPi1r
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HNXh67GiFTsu28KiwC1hUX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_np9XLiigDkBooUW3Wiezhv
          claim_id: c_4Yx--wfI07veaXdjdGPi1r
          source_id: s_Mf8a11WACOkEsRDIrSbUax
          stance: supports
          locator: CBDB：兄弟 王廷（69148）之父／母 王希文
          quotation: null
          interpretation_note: 由兄弟关系推断：王遷 与 王廷 为同胞（CBDB 记「弟」），王廷 之父／母即 王遷 之父／母。
          source:
            id: s_Mf8a11WACOkEsRDIrSbUax
            source_type: api_record
            title: 中国历代人物传记资料库：王遷（CBDB 290812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290812&o=json
            external_identifier: CBDB:290812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HNXh67GiFTsu28KiwC1hUX
        status: active
        display_name: 王遷
        merged_into_person_id: null
    - claim:
        id: c_bvHbmoqK__WhKUNBx8TaFx
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PsXxCSg8UX48nkvZWrXMv2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qTqoBS_2i3gXTOOP8RACH7
          claim_id: c_bvHbmoqK__WhKUNBx8TaFx
          source_id: s_ZpAnqmYRLSBAADlr4GyEjY
          stance: supports
          locator: CBDB：兄弟 王廷（69148）之父／母 王希文
          quotation: null
          interpretation_note: 由兄弟关系推断：王郁 与 王廷 为同胞（CBDB 记「兄」），王廷 之父／母即 王郁 之父／母。
          source:
            id: s_ZpAnqmYRLSBAADlr4GyEjY
            source_type: api_record
            title: 中国历代人物传记资料库：王郁（CBDB 290819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290819&o=json
            external_identifier: CBDB:290819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PsXxCSg8UX48nkvZWrXMv2
        status: active
        display_name: 王郁
        merged_into_person_id: null
    - claim:
        id: c_Momy-ZXLzoj91e21hLOLgF
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QKjMqf1kcgRnbebgJAAErq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y_FLOj47vumFYgwrjy_v4A
          claim_id: c_Momy-ZXLzoj91e21hLOLgF
          source_id: s_1xRqa87Xvd7XnOgMEibN98
          stance: supports
          locator: CBDB：兄弟 王廷（69148）之父／母 王希文
          quotation: null
          interpretation_note: 由兄弟关系推断：王選 与 王廷 为同胞（CBDB 记「弟」），王廷 之父／母即 王選 之父／母。
          source:
            id: s_1xRqa87Xvd7XnOgMEibN98
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 290811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290811&o=json
            external_identifier: CBDB:290811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QKjMqf1kcgRnbebgJAAErq
        status: active
        display_name: 王選
        merged_into_person_id: null
    - claim:
        id: c_Rx_bHFlnz9xTCT1NH0XDcg
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SXrnVya55CwoArA8f7hzUE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hz4LpkNOcLBWCxRKrfOXvc
          claim_id: c_Rx_bHFlnz9xTCT1NH0XDcg
          source_id: s_Ny-f8fa-XjaDXXbzmxGDYo
          stance: supports
          locator: CBDB：兄弟 王廷（69148）之父／母 王希文
          quotation: null
          interpretation_note: 由兄弟关系推断：王達 与 王廷 为同胞（CBDB 记「弟」），王廷 之父／母即 王達 之父／母。
          source:
            id: s_Ny-f8fa-XjaDXXbzmxGDYo
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 290813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290813&o=json
            external_identifier: CBDB:290813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SXrnVya55CwoArA8f7hzUE
        status: active
        display_name: 王達
        merged_into_person_id: null
    - claim:
        id: c_lq9gL5i18uYyoMlykEy7rs
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bqXS9vVUEtwfuY1c1KuxB5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UnajaOr8QOCqYjnYxoAed1
          claim_id: c_lq9gL5i18uYyoMlykEy7rs
          source_id: s_r1PGKFijZzYi9sqGrXGwns
          stance: supports
          locator: CBDB：兄弟 王廷（69148）之父／母 王希文
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑤 与 王廷 为同胞（CBDB 记「弟」），王廷 之父／母即 王瑤 之父／母。
          source:
            id: s_r1PGKFijZzYi9sqGrXGwns
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 290814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290814&o=json
            external_identifier: CBDB:290814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bqXS9vVUEtwfuY1c1KuxB5
        status: active
        display_name: 王瑤
        merged_into_person_id: null
    - claim:
        id: c_9PyFkRPh5i4jo_4n7--Vgl
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fbzKwFnip9EhEf2G4NEZSx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bqiyNTeU62xSQ6VCR0Rj1s
          claim_id: c_9PyFkRPh5i4jo_4n7--Vgl
          source_id: s_gYbq4vwudUBHSAnV_hMsX3
          stance: supports
          locator: CBDB：兄弟 王廷（69148）之父／母 王希文
          quotation: null
          interpretation_note: 由兄弟关系推断：王追 与 王廷 为同胞（CBDB 记「兄」），王廷 之父／母即 王追 之父／母。
          source:
            id: s_gYbq4vwudUBHSAnV_hMsX3
            source_type: api_record
            title: 中国历代人物传记资料库：王追（CBDB 290817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290817&o=json
            external_identifier: CBDB:290817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fbzKwFnip9EhEf2G4NEZSx
        status: active
        display_name: 王追
        merged_into_person_id: null
    - claim:
        id: c_IHO1_EArwDOalAN7t3qLV9
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vziyz3zwW1ehQDqEhJYHHM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xEXoszpNjIbrmOtZfHgduH
          claim_id: c_IHO1_EArwDOalAN7t3qLV9
          source_id: s_fH1gHnG06eydvN7UbVROaF
          stance: supports
          locator: CBDB：兄弟 王延（205861）之父／母 王希文
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷 与 王延 为同胞（CBDB 记「弟」），王延 之父／母即 王廷 之父／母。
          source:
            id: s_fH1gHnG06eydvN7UbVROaF
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 209887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209887&o=json
            external_identifier: CBDB:209887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vziyz3zwW1ehQDqEhJYHHM
        status: active
        display_name: 王廷
        merged_into_person_id: null
    - claim:
        id: c_lRPhup-yEq98pJMeMKenvM
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wx11a4tsD5E2d3K8rANk2m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qbYH4PEiih3zX25BIYp2xH
          claim_id: c_lRPhup-yEq98pJMeMKenvM
          source_id: s_77Q7xXzra0Hi_QL4t_AeKj
          stance: supports
          locator: CBDB：兄弟 王廷（69148）之父／母 王希文
          quotation: null
          interpretation_note: 由兄弟关系推断：王逢 与 王廷 为同胞（CBDB 记「兄」），王廷 之父／母即 王逢 之父／母。
          source:
            id: s_77Q7xXzra0Hi_QL4t_AeKj
            source_type: api_record
            title: 中国历代人物传记资料库：王逢（CBDB 290822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290822&o=json
            external_identifier: CBDB:290822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wx11a4tsD5E2d3K8rANk2m
        status: active
        display_name: 王逢
        merged_into_person_id: null
    - claim:
        id: c_o3qvLc1GBNcWX-BZhNk2P2
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z41LnXqzG7vpYKebnbHsJk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D4cZvl_ix_trh3HqZpzf3v
          claim_id: c_o3qvLc1GBNcWX-BZhNk2P2
          source_id: s_hQgIAuGDD-j4A1cztr4-Pv
          stance: supports
          locator: CBDB：兄弟 王廷（69148）之父／母 王希文
          quotation: null
          interpretation_note: 由兄弟关系推断：王迎 与 王廷 为同胞（CBDB 记「兄」），王廷 之父／母即 王迎 之父／母。
          source:
            id: s_hQgIAuGDD-j4A1cztr4-Pv
            source_type: api_record
            title: 中国历代人物传记资料库：王迎（CBDB 290815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290815&o=json
            external_identifier: CBDB:290815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_z41LnXqzG7vpYKebnbHsJk
        status: active
        display_name: 王迎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王希文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希文 | accepted |
| bio.summary | 王希文，明人物。隆慶五年進士，籍贯南充，曾任都察院左都御史、戶部主事、資政大夫。（中国历代人物传记资料库 CBDB 209884） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_pv2pDE9A1jj2uMGHCGpC7T | 王廷 | accepted |
| children | p_PeNwc61mxTnzddmv7sBFLN | 王延 | accepted |
| children | p_1TVKvp1a17v9go5ENtPAQ8 | 王進 | accepted |
| children | p_2UaPva3PJ4SimEwsC8AKh3 | 王謙 | accepted |
| children | p_2b3kEpBDNX9UQbK8kWgjC2 | 王迨 | accepted |
| children | p_DETEvzeBubX45FgE9jDjJB | 王邁 | accepted |
| children | p_EhLuzakM77Au4WLhNNyX41 | 王遴 | accepted |
| children | p_HNXh67GiFTsu28KiwC1hUX | 王遷 | accepted |
| children | p_PsXxCSg8UX48nkvZWrXMv2 | 王郁 | accepted |
| children | p_QKjMqf1kcgRnbebgJAAErq | 王選 | accepted |
| children | p_SXrnVya55CwoArA8f7hzUE | 王達 | accepted |
| children | p_bqXS9vVUEtwfuY1c1KuxB5 | 王瑤 | accepted |
| children | p_fbzKwFnip9EhEf2G4NEZSx | 王追 | accepted |
| children | p_vziyz3zwW1ehQDqEhJYHHM | 王廷 | accepted |
| children | p_wx11a4tsD5E2d3K8rANk2m | 王逢 | accepted |
| children | p_z41LnXqzG7vpYKebnbHsJk | 王迎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 290813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290813&o=json)
- [中国历代人物传记资料库：王迨（CBDB 290825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290825&o=json)
- [中国历代人物传记资料库：王逢（CBDB 290822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290822&o=json)
- [中国历代人物传记资料库：王進（CBDB 290824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290824&o=json)
- [中国历代人物传记资料库：王遴（CBDB 290820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290820&o=json)
- [中国历代人物传记资料库：王邁（CBDB 290821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290821&o=json)
- [中国历代人物传记资料库：王遷（CBDB 290812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290812&o=json)
- [中国历代人物传记资料库：王謙（CBDB 290823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290823&o=json)
- [中国历代人物传记资料库：王廷（CBDB 209887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209887&o=json)
- [中国历代人物传记资料库：王希文（CBDB 209884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209884&o=json)
- [中国历代人物传记资料库：王選（CBDB 290811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290811&o=json)
- [中国历代人物传记资料库：王瑤（CBDB 290814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290814&o=json)
- [中国历代人物传记资料库：王迎（CBDB 290815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290815&o=json)
- [中国历代人物传记资料库：王郁（CBDB 290819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290819&o=json)
- [中国历代人物传记资料库：王追（CBDB 290817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290817&o=json)
