---
schema: wang-person/v1
id: p_UCuWmdu88wkXMEGK9geKmL
status: active
merged_into: null
display_name: 王象蒙
cbdb_id: 206595
revision: 18
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pvt83iWTc727Vhdn5B9XWp
        subject_person_id: p_UCuWmdu88wkXMEGK9geKmL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象蒙（生于1552年），明人物。明清進士進士，籍贯新城，入仕進士，曾任大理寺丞。（中国历代人物传记资料库 CBDB 206595）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_XBDQHPZ3dHLv3MReN57FZB
          claim_id: c_Pvt83iWTc727Vhdn5B9XWp
          source_id: s_zLJ9Hfx1NHziz4NGzxh4Dr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_zLJ9Hfx1NHziz4NGzxh4Dr
            source_type: api_record
            title: 维基数据：王象蒙（Q45647401）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45647401
            external_identifier: Q45647401
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:02.160Z
            metadata_json: null
        - id: cs_cvHNUnPm8FYtxDkuo3aNv4
          claim_id: c_Pvt83iWTc727Vhdn5B9XWp
          source_id: s_zcmyoLPxLotZ84tb26zKRH
          stance: supports
          locator: CBDB:206595
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zcmyoLPxLotZ84tb26zKRH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王象蒙（206595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206595&o=json
            external_identifier: CBDB:206595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:02.345Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gdCY9LLjqzxQAMG8LQ8mZy
        subject_person_id: p_UCuWmdu88wkXMEGK9geKmL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1552年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1552-01-01
            latest: 1552-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1oUuhvk8eh5ZVA52vo3y93
          claim_id: c_gdCY9LLjqzxQAMG8LQ8mZy
          source_id: s_zLJ9Hfx1NHziz4NGzxh4Dr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_zLJ9Hfx1NHziz4NGzxh4Dr
            source_type: api_record
            title: 维基数据：王象蒙（Q45647401）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45647401
            external_identifier: Q45647401
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:02.160Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_N4hLGJyhcQ4XbaDVsMm7T8
        subject_person_id: p_UCuWmdu88wkXMEGK9geKmL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象蒙
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_91GstV4fDBuFYmfhdULR9i
          claim_id: c_N4hLGJyhcQ4XbaDVsMm7T8
          source_id: s_zcmyoLPxLotZ84tb26zKRH
          stance: supports
          locator: Q45647401
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_9N6JB1r81S6xPVVbPDprCW
          claim_id: c_N4hLGJyhcQ4XbaDVsMm7T8
          source_id: s_zLJ9Hfx1NHziz4NGzxh4Dr
          stance: supports
          locator: Q45647401
          quotation: null
          interpretation_note: null
          source:
            id: s_zLJ9Hfx1NHziz4NGzxh4Dr
            source_type: api_record
            title: 维基数据：王象蒙（Q45647401）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45647401
            external_identifier: Q45647401
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:02.160Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HQd1y4JpN62jWCE8R1ANwL
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NtA1LGCBXXUxZTMQG7E5fk
          claim_id: c_HQd1y4JpN62jWCE8R1ANwL
          source_id: s_HkowMqAvcFAYwo6YGrYb5f
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HkowMqAvcFAYwo6YGrYb5f
            source_type: api_record
            title: 维基数据：王之辅（Q16075319）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075319
            external_identifier: Q16075319
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E8%BC%94
        - id: cs_ra5d415KHHNV67vifC8FL7
          claim_id: c_HQd1y4JpN62jWCE8R1ANwL
          source_id: s_zLJ9Hfx1NHziz4NGzxh4Dr
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_VLPN2ybQtkqyCPrJiYL7vx
        status: active
        display_name: 王之辅
        merged_into_person_id: null
    - claim:
        id: c_p28v1fMHp-PUAgzFZb-BHe
        subject_person_id: p_mXerA6phDDMxBBp7YfS3mj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0W5Ne-FogkJ_coE-5oD8Hd
          claim_id: c_p28v1fMHp-PUAgzFZb-BHe
          source_id: s_abAtsZZxe726QTfCt7JHbH
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第八十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_abAtsZZxe726QTfCt7JHbH
            source_type: api_record
            title: 中国历代人物传记资料库：王之輔（CBDB 220263）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220263&o=json
            external_identifier: CBDB:220263
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mXerA6phDDMxBBp7YfS3mj
        status: active
        display_name: 王之輔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_2RDr867GXnM84rCZM27YC9
        subject_person_id: p_CoDhAE6fC5JFB1FsBJjCq1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rQS7S38PQQ5aCkYGFAmAF4
          claim_id: c_2RDr867GXnM84rCZM27YC9
          source_id: s_zLJ9Hfx1NHziz4NGzxh4Dr
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_WC1UGdDpFEgwqhcBHrFQca
          claim_id: c_2RDr867GXnM84rCZM27YC9
          source_id: s_wM3Ko6rz6aq7Jxb6fMnjDL
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_wM3Ko6rz6aq7Jxb6fMnjDL
            source_type: api_record
            title: 维基数据：邢氏（Q65823254）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65823254
            external_identifier: Q65823254
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_7qxBSe6zLgzKveAXD2Cbce
          claim_id: c_2RDr867GXnM84rCZM27YC9
          source_id: s_zcmyoLPxLotZ84tb26zKRH
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆八年進士登科錄:一卷
          source: *a1
      object_person:
        id: p_CoDhAE6fC5JFB1FsBJjCq1
        status: active
        display_name: 邢氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_KClhAyMfn6pNFK52zPT7mr
        subject_person_id: p_ekUUUcSyzN6WhRbt4eNPox
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I7SOF5ieNwyF3pF04fibWr
          claim_id: c_KClhAyMfn6pNFK52zPT7mr
          source_id: s_UPbhN87m2i3NV2QMsCPaZa
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第八十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UPbhN87m2i3NV2QMsCPaZa
            source_type: api_record
            title: 中国历代人物传记资料库：王重光（CBDB 220262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220262&o=json
            external_identifier: CBDB:220262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ekUUUcSyzN6WhRbt4eNPox
        status: active
        display_name: 王重光
        merged_into_person_id: null
    - claim:
        id: c_7MzhQ_wgdLFEWEMwoevtDD
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W7CSaf4PMQbVAuBx9ATPH1
          claim_id: c_7MzhQ_wgdLFEWEMwoevtDD
          source_id: s_3zCeacwcDkrZyMjH7kCBJZ
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第八十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3zCeacwcDkrZyMjH7kCBJZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王麟（220261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220261&o=json
            external_identifier: CBDB:220261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:09.445Z
            metadata_json: null
      object_person:
        id: p_dFBcsKbnFVcHN4YTvXeRwY
        status: active
        display_name: 王麟
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_3P-UyuPQLgdPwdZcF7gjg-
        subject_person_id: p_2Rw5jj5s9QHTFioRpUjkzn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PYp-mRtvTCKUMh9NJWFt9T
          claim_id: c_3P-UyuPQLgdPwdZcF7gjg-
          source_id: s_7cT9vmY6i4l1WG8BfdHyNT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7cT9vmY6i4l1WG8BfdHyNT
            source_type: api_record
            title: 中国历代人物传记资料库：王象泰（CBDB 220268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220268&o=json
            external_identifier: CBDB:220268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2Rw5jj5s9QHTFioRpUjkzn
        status: active
        display_name: 王象泰
        merged_into_person_id: null
    - claim:
        id: c_AunvSsEyLtXqvV9X-Xzpfr
        subject_person_id: p_2zR3kCcvdMr3eo1Lp4b4JK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WyID35qiTDXVt9839bjvSE
          claim_id: c_AunvSsEyLtXqvV9X-Xzpfr
          source_id: s_JJulMMA36XHWH2F5ZUf4SY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JJulMMA36XHWH2F5ZUf4SY
            source_type: api_record
            title: 中国历代人物传记资料库：王象某（CBDB 220283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220283&o=json
            external_identifier: CBDB:220283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2zR3kCcvdMr3eo1Lp4b4JK
        status: active
        display_name: 王象某
        merged_into_person_id: null
    - claim:
        id: c_MP80FVjjdEf9T7TDbU6bjR
        subject_person_id: p_HG83Xq1T22VH2Y4hMiiznb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_II3kpQJWo8JhYK7lwFFrtT
          claim_id: c_MP80FVjjdEf9T7TDbU6bjR
          source_id: s_NAyRL56KdXmtXCBbWTPK2f
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NAyRL56KdXmtXCBbWTPK2f
            source_type: api_record
            title: 中国历代人物传记资料库：王象旭（CBDB 220273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220273&o=json
            external_identifier: CBDB:220273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HG83Xq1T22VH2Y4hMiiznb
        status: active
        display_name: 王象旭
        merged_into_person_id: null
    - claim:
        id: c_8dwrQrS_dqJyeLxfnT63Pi
        subject_person_id: p_Hgd3GnFDoJXaS5y6oGWTa8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r0zNYdnfLVTQQDwFKIJvh9
          claim_id: c_8dwrQrS_dqJyeLxfnT63Pi
          source_id: s_xOum9hFoDYiQwWC51SQIhR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xOum9hFoDYiQwWC51SQIhR
            source_type: api_record
            title: 中国历代人物传记资料库：王象樞（CBDB 220270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220270&o=json
            external_identifier: CBDB:220270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hgd3GnFDoJXaS5y6oGWTa8
        status: active
        display_name: 王象樞
        merged_into_person_id: null
    - claim:
        id: c_ZsEj3GvDN-j0f18sHKELma
        subject_person_id: p_NQky6wpdi52zF5zHqq31bi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pS969vB5KHtDqDgIWxRSCs
          claim_id: c_ZsEj3GvDN-j0f18sHKELma
          source_id: s_W0F-qZ5WeQpGl3werGMttR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_W0F-qZ5WeQpGl3werGMttR
            source_type: api_record
            title: 中国历代人物传记资料库：王象恆（CBDB 220279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220279&o=json
            external_identifier: CBDB:220279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NQky6wpdi52zF5zHqq31bi
        status: active
        display_name: 王象恆
        merged_into_person_id: null
    - claim:
        id: c_kpWjJg94IBHdzmGDyl4gLv
        subject_person_id: p_PgasUHaEjzoamewhrqMvcz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_piHljBTzt-4suDn3QetHON
          claim_id: c_kpWjJg94IBHdzmGDyl4gLv
          source_id: s_1ruaTTtD99q4-xxqFZYbyF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1ruaTTtD99q4-xxqFZYbyF
            source_type: api_record
            title: 中国历代人物传记资料库：王象萃（CBDB 220275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220275&o=json
            external_identifier: CBDB:220275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PgasUHaEjzoamewhrqMvcz
        status: active
        display_name: 王象萃
        merged_into_person_id: null
    - claim:
        id: c_eoXEeT8DhQJqBce4Zi4oLq
        subject_person_id: p_TD1TvnKHWVi268fxKgzDuM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MX0NrcN8XPlZ_oEAB0g7ge
          claim_id: c_eoXEeT8DhQJqBce4Zi4oLq
          source_id: s_ncE1XNE-IywE3t9GEJxDe9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ncE1XNE-IywE3t9GEJxDe9
            source_type: api_record
            title: 中国历代人物传记资料库：王象晉（CBDB 65763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65763&o=json
            external_identifier: CBDB:65763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TD1TvnKHWVi268fxKgzDuM
        status: active
        display_name: 王象晉
        merged_into_person_id: null
    - claim:
        id: c_qCNB4Kog-Xc886pgW9Dz4V
        subject_person_id: p_TMNLd9dM66zM7H7cXHFoHD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T3zBN4QvDUbEnntMj_DOqw
          claim_id: c_qCNB4Kog-Xc886pgW9Dz4V
          source_id: s_2QzLcSQcUTI0g50eBdALc1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2QzLcSQcUTI0g50eBdALc1
            source_type: api_record
            title: 中国历代人物传记资料库：王象璧（CBDB 220274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220274&o=json
            external_identifier: CBDB:220274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TMNLd9dM66zM7H7cXHFoHD
        status: active
        display_name: 王象璧
        merged_into_person_id: null
    - claim:
        id: c_aiGFYeJlWt9U3HdQGKYkDJ
        subject_person_id: p_UCuWmdu88wkXMEGK9geKmL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YSMNigLFhWLTp4n8pE7PzU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9wEmxyTpt7-n_cL2HnkV0K
          claim_id: c_aiGFYeJlWt9U3HdQGKYkDJ
          source_id: s_q-QJOqHPIv5Lw9K0QaQRwf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_q-QJOqHPIv5Lw9K0QaQRwf
            source_type: api_record
            title: 中国历代人物传记资料库：王象臯（CBDB 220280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220280&o=json
            external_identifier: CBDB:220280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YSMNigLFhWLTp4n8pE7PzU
        status: active
        display_name: 王象臯
        merged_into_person_id: null
    - claim:
        id: c_WEEJFIQTLEObpEqnK8qyui
        subject_person_id: p_UCuWmdu88wkXMEGK9geKmL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bFe5gYR4uP8WejQqzqnxqy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MqCxJAYFdZX0J-YvTshFoW
          claim_id: c_WEEJFIQTLEObpEqnK8qyui
          source_id: s_kQf1PI7D-rgiyxHNTJrhlu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kQf1PI7D-rgiyxHNTJrhlu
            source_type: api_record
            title: 中国历代人物传记资料库：王象某（CBDB 220281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220281&o=json
            external_identifier: CBDB:220281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bFe5gYR4uP8WejQqzqnxqy
        status: active
        display_name: 王象某
        merged_into_person_id: null
    - claim:
        id: c_FfanOI0TBya-ZDu0_3zCtb
        subject_person_id: p_UCuWmdu88wkXMEGK9geKmL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_btyLjEDjLPQrn182pZi5zm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r7adHbF-PaBPzso9APXB0V
          claim_id: c_FfanOI0TBya-ZDu0_3zCtb
          source_id: s_XUCna2N0Hq78YI7xlBxyi_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XUCna2N0Hq78YI7xlBxyi_
            source_type: api_record
            title: 中国历代人物传记资料库：王象賁（CBDB 220269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220269&o=json
            external_identifier: CBDB:220269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_btyLjEDjLPQrn182pZi5zm
        status: active
        display_name: 王象賁
        merged_into_person_id: null
    - claim:
        id: c_am5Vd5AeYsvD8mELuKUQHm
        subject_person_id: p_UCuWmdu88wkXMEGK9geKmL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hTPxiW1KqFV4Pc5dYpNx4S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s6OZo9G3UefQUHgYdyf9JG
          claim_id: c_am5Vd5AeYsvD8mELuKUQHm
          source_id: s_H1NWuH3qju2c0-OsZYgHKy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_H1NWuH3qju2c0-OsZYgHKy
            source_type: api_record
            title: 中国历代人物传记资料库：王象震（CBDB 220276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220276&o=json
            external_identifier: CBDB:220276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hTPxiW1KqFV4Pc5dYpNx4S
        status: active
        display_name: 王象震
        merged_into_person_id: null
    - claim:
        id: c_RTdgjbTz9q3mNZAKg7U6o2
        subject_person_id: p_UCuWmdu88wkXMEGK9geKmL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kzcEa5LNsLbTbrKD29jnQ7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4b5S22siwSsxL1qjr5eovA
          claim_id: c_RTdgjbTz9q3mNZAKg7U6o2
          source_id: s_qaf0tJk9ctbjl4udhRB1F3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qaf0tJk9ctbjl4udhRB1F3
            source_type: api_record
            title: 中国历代人物传记资料库：王象節（CBDB 220272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220272&o=json
            external_identifier: CBDB:220272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kzcEa5LNsLbTbrKD29jnQ7
        status: active
        display_name: 王象節
        merged_into_person_id: null
---

# 王象蒙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王象蒙（生于1552年），明人物。明清進士進士，籍贯新城，入仕進士，曾任大理寺丞。（中国历代人物传记资料库 CBDB 206595） | accepted |
| birth.date | 1552年 | accepted |
| name.primary | 王象蒙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VLPN2ybQtkqyCPrJiYL7vx | 王之辅 | accepted |
| parents | p_mXerA6phDDMxBBp7YfS3mj | 王之輔 | accepted |
| spouses | p_CoDhAE6fC5JFB1FsBJjCq1 | 邢氏 | accepted |
| ancestors | p_ekUUUcSyzN6WhRbt4eNPox | 王重光 | accepted |
| ancestors | p_dFBcsKbnFVcHN4YTvXeRwY | 王麟 | accepted |
| other | p_2Rw5jj5s9QHTFioRpUjkzn | 王象泰 | accepted |
| other | p_2zR3kCcvdMr3eo1Lp4b4JK | 王象某 | accepted |
| other | p_HG83Xq1T22VH2Y4hMiiznb | 王象旭 | accepted |
| other | p_Hgd3GnFDoJXaS5y6oGWTa8 | 王象樞 | accepted |
| other | p_NQky6wpdi52zF5zHqq31bi | 王象恆 | accepted |
| other | p_PgasUHaEjzoamewhrqMvcz | 王象萃 | accepted |
| other | p_TD1TvnKHWVi268fxKgzDuM | 王象晉 | accepted |
| other | p_TMNLd9dM66zM7H7cXHFoHD | 王象璧 | accepted |
| other | p_YSMNigLFhWLTp4n8pE7PzU | 王象臯 | accepted |
| other | p_bFe5gYR4uP8WejQqzqnxqy | 王象某 | accepted |
| other | p_btyLjEDjLPQrn182pZi5zm | 王象賁 | accepted |
| other | p_hTPxiW1KqFV4Pc5dYpNx4S | 王象震 | accepted |
| other | p_kzcEa5LNsLbTbrKD29jnQ7 | 王象節 | accepted |

## 外部来源

- [维基数据：王象蒙（Q45647401）](https://www.wikidata.org/wiki/Q45647401)
- [维基数据：王之辅（Q16075319）](https://www.wikidata.org/wiki/Q16075319)
- [维基数据：邢氏（Q65823254）](https://www.wikidata.org/wiki/Q65823254)
- [中国历代人物传记资料库：王象賁（CBDB 220269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220269&o=json)
- [中国历代人物传记资料库：王象璧（CBDB 220274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220274&o=json)
- [中国历代人物传记资料库：王象萃（CBDB 220275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220275&o=json)
- [中国历代人物传记资料库：王象臯（CBDB 220280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220280&o=json)
- [中国历代人物传记资料库：王象恆（CBDB 220279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220279&o=json)
- [中国历代人物传记资料库：王象節（CBDB 220272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220272&o=json)
- [中国历代人物传记资料库：王象晉（CBDB 65763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65763&o=json)
- [中国历代人物传记资料库：王象某（CBDB 220281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220281&o=json)
- [中国历代人物传记资料库：王象某（CBDB 220283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220283&o=json)
- [中国历代人物传记资料库：王象樞（CBDB 220270）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220270&o=json)
- [中国历代人物传记资料库：王象泰（CBDB 220268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220268&o=json)
- [中国历代人物传记资料库：王象旭（CBDB 220273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220273&o=json)
- [中国历代人物传记资料库：王象震（CBDB 220276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220276&o=json)
- [中国历代人物传记资料库：王之輔（CBDB 220263）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220263&o=json)
- [中国历代人物传记资料库：王重光（CBDB 220262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220262&o=json)
- [CBDB 中国历代人物传记资料库：王麟（220261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220261&o=json)
- [CBDB 中国历代人物传记资料库：王象蒙（206595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206595&o=json)
