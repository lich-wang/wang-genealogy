---
schema: wang-person/v1
id: p_3SWv8LY5fsb1rb4ZwewsLo
status: active
merged_into: null
display_name: 王时中
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1QZPhKDZ0RC8RnjA5wvuSb
        subject_person_id: p_3SWv8LY5fsb1rb4ZwewsLo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王时中（1466年—1542年），史料所见人物。本项目依据《王时中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_TzI4SLD1_wQe5iGozdupkp
          claim_id: c_1QZPhKDZ0RC8RnjA5wvuSb
          source_id: s_6HmtB82CwUfnZsN8f8ZvkG
          stance: supports
          locator: Q15913916
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_6HmtB82CwUfnZsN8f8ZvkG
            source_type: api_record
            title: 维基数据：王时中（Q15913916）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15913916
            external_identifier: Q15913916
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:14.516Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_N8mFeFSRrS7cjcM7K9juyW
        subject_person_id: p_3SWv8LY5fsb1rb4ZwewsLo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1466年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1466-01-01
            latest: 1466-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6C8L5BY7jKtFagbUp9Yuf5
          claim_id: c_N8mFeFSRrS7cjcM7K9juyW
          source_id: s_6HmtB82CwUfnZsN8f8ZvkG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_6HmtB82CwUfnZsN8f8ZvkG
            source_type: api_record
            title: 维基数据：王时中（Q15913916）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15913916
            external_identifier: Q15913916
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:14.516Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_xhceEu7SBNkfcQCTDAyLwp
        subject_person_id: p_3SWv8LY5fsb1rb4ZwewsLo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1542年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1542-01-01
            latest: 1542-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_URJNKd8AfiySJCRa3fhRST
          claim_id: c_xhceEu7SBNkfcQCTDAyLwp
          source_id: s_6HmtB82CwUfnZsN8f8ZvkG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_6HmtB82CwUfnZsN8f8ZvkG
            source_type: api_record
            title: 维基数据：王时中（Q15913916）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15913916
            external_identifier: Q15913916
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:14.516Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gcap5eDPiqzAkh5stHCvnP
        subject_person_id: p_3SWv8LY5fsb1rb4ZwewsLo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王时中
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nMNiNScu3cM7TwFktrF1vY
          claim_id: c_gcap5eDPiqzAkh5stHCvnP
          source_id: s_6HmtB82CwUfnZsN8f8ZvkG
          stance: supports
          locator: Q15913916
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VCiHZEAoSLTMHEQ51TrfBj
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_3SWv8LY5fsb1rb4ZwewsLo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z2x2DBX5ZuQENYQ56txTPL
          claim_id: c_VCiHZEAoSLTMHEQ51TrfBj
          source_id: s_eD7NLF6NGLJdx2pWAXc9KE
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eD7NLF6NGLJdx2pWAXc9KE
            source_type: api_record
            title: 维基数据：王钻（Q45476540）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45476540
            external_identifier: Q45476540
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:38.937Z
            metadata_json: null
        - id: cs_jwrg2xHKcAGGxPFjveHny5
          claim_id: c_VCiHZEAoSLTMHEQ51TrfBj
          source_id: s_6HmtB82CwUfnZsN8f8ZvkG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6HmtB82CwUfnZsN8f8ZvkG
            source_type: api_record
            title: 维基数据：王时中（Q15913916）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15913916
            external_identifier: Q15913916
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:14.516Z
            metadata_json: null
      object_person:
        id: p_bVznNBP2hMh6tDWAzv1nG9
        status: active
        display_name: 王钻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_DHcrJF2jQjzpwJRLK5d3Sh
        subject_person_id: p_3SWv8LY5fsb1rb4ZwewsLo
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_uDws44fZu54Eq8cAigBHGN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3KJ8iyYf5o5nJPHcqqyuVs
          claim_id: c_DHcrJF2jQjzpwJRLK5d3Sh
          source_id: s_kmC97kGDVVwQFRHMuqZKMU
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_kmC97kGDVVwQFRHMuqZKMU
            source_type: api_record
            title: 维基数据：阎氏（Q65869000）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65869000
            external_identifier: Q65869000
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:43.085Z
            metadata_json: null
        - id: cs_BHxCEDrMnNsYTAkV2aB9UH
          claim_id: c_DHcrJF2jQjzpwJRLK5d3Sh
          source_id: s_6HmtB82CwUfnZsN8f8ZvkG
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_6HmtB82CwUfnZsN8f8ZvkG
            source_type: api_record
            title: 维基数据：王时中（Q15913916）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15913916
            external_identifier: Q15913916
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:14.516Z
            metadata_json: null
        - id: cs_nQw2czN7KNvniEadEbQfdY
          claim_id: c_DHcrJF2jQjzpwJRLK5d3Sh
          source_id: s_JbqBcgU9EH7wWKxkC1JgHf
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：弘治三年進士登科錄:一卷
          source:
            id: s_JbqBcgU9EH7wWKxkC1JgHf
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王時中（68328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68328&o=json
            external_identifier: CBDB:68328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:25.209Z
            metadata_json: null
      object_person:
        id: p_uDws44fZu54Eq8cAigBHGN
        status: active
        display_name: 阎氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_x_v8wDn3qrVkvb2eS8wYlP
        subject_person_id: p_3SWv8LY5fsb1rb4ZwewsLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_4sZsCTkJog26VjUtiqrNbQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hW67la40plvr4dUoaS1S7r
          claim_id: c_x_v8wDn3qrVkvb2eS8wYlP
          source_id: s__jYp9sg4gXNLik_BnFrPGg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68328 王時中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__jYp9sg4gXNLik_BnFrPGg
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 262456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262456&o=json
            external_identifier: CBDB:262456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4sZsCTkJog26VjUtiqrNbQ
        status: active
        display_name: 王儒
        merged_into_person_id: null
    - claim:
        id: c_Rvu86l1ukDer3-40TdJbh6
        subject_person_id: p_3SWv8LY5fsb1rb4ZwewsLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_D2HurMNg1r8qf63CEHwQek
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IxnB_5AB_Z4vuVyPK4hTj1
          claim_id: c_Rvu86l1ukDer3-40TdJbh6
          source_id: s_SiPyhp6TfuLQt6ukIhp-44
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68328 王時中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SiPyhp6TfuLQt6ukIhp-44
            source_type: api_record
            title: 中国历代人物传记资料库：王時（CBDB 262454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262454&o=json
            external_identifier: CBDB:262454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D2HurMNg1r8qf63CEHwQek
        status: active
        display_name: 王時
        merged_into_person_id: null
    - claim:
        id: c_Ezyj7QesTlHibT8hFziR9E
        subject_person_id: p_3SWv8LY5fsb1rb4ZwewsLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XVdUz1uj9P5L1HGhQ8MZA4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MZP3LahXYn0OMdyWTrHb_v
          claim_id: c_Ezyj7QesTlHibT8hFziR9E
          source_id: s_OHM_QnjZ_i4OYUu331Tab_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68328 王時中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OHM_QnjZ_i4OYUu331Tab_
            source_type: api_record
            title: 中国历代人物传记资料库：王价（CBDB 262459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262459&o=json
            external_identifier: CBDB:262459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XVdUz1uj9P5L1HGhQ8MZA4
        status: active
        display_name: 王价
        merged_into_person_id: null
    - claim:
        id: c_npqlMyEE-6JNNGKFH8-263
        subject_person_id: p_3SWv8LY5fsb1rb4ZwewsLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jcQHbkwimczLaQjkoGTR5R
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o34K2VU4D50SKdUupzVQOr
          claim_id: c_npqlMyEE-6JNNGKFH8-263
          source_id: s_Wd_WxuM8pYazeUyHAknrIr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68328 王時中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Wd_WxuM8pYazeUyHAknrIr
            source_type: api_record
            title: 中国历代人物传记资料库：王雍（CBDB 262455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262455&o=json
            external_identifier: CBDB:262455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jcQHbkwimczLaQjkoGTR5R
        status: active
        display_name: 王雍
        merged_into_person_id: null
    - claim:
        id: c_qcGEcapwPhhY9Rs3GPmaxM
        subject_person_id: p_3SWv8LY5fsb1rb4ZwewsLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kY5RkWuKny8vWpD2iFHL8p
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2veqHBrnfyc9fSNqQgFByr
          claim_id: c_qcGEcapwPhhY9Rs3GPmaxM
          source_id: s_K73is2EYtmgwZ8JhtqTTSf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68328 王時中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_K73is2EYtmgwZ8JhtqTTSf
            source_type: api_record
            title: 中国历代人物传记资料库：王佳（CBDB 262453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262453&o=json
            external_identifier: CBDB:262453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kY5RkWuKny8vWpD2iFHL8p
        status: active
        display_name: 王佳
        merged_into_person_id: null
    - claim:
        id: c_FklH3bjJm2ZPUCJV8gCm1J
        subject_person_id: p_3SWv8LY5fsb1rb4ZwewsLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mfkbALKA619DdyfJ7MisdA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HQcvyXJYSOrYhWFiSbt9uV
          claim_id: c_FklH3bjJm2ZPUCJV8gCm1J
          source_id: s_dtOErnHYuX3eKdQgdPIhjD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68328 王時中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dtOErnHYuX3eKdQgdPIhjD
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 262452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262452&o=json
            external_identifier: CBDB:262452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mfkbALKA619DdyfJ7MisdA
        status: active
        display_name: 王倫
        merged_into_person_id: null
    - claim:
        id: c_SrZKugwWs_4GeKeB4hBxiT
        subject_person_id: p_3SWv8LY5fsb1rb4ZwewsLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qg54QBXqwGojtESwYH4vEL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vdKI1musIKM7utmPXXqc72
          claim_id: c_SrZKugwWs_4GeKeB4hBxiT
          source_id: s_A3LkW0PoZnpBx369N8yLyn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68328 王時中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_A3LkW0PoZnpBx369N8yLyn
            source_type: api_record
            title: 中国历代人物传记资料库：王時正（CBDB 262457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262457&o=json
            external_identifier: CBDB:262457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qg54QBXqwGojtESwYH4vEL
        status: active
        display_name: 王時正
        merged_into_person_id: null
---

# 王时中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王时中（1466年—1542年），史料所见人物。本项目依据《王时中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1466年 | accepted |
| death.date | 1542年 | accepted |
| name.primary | 王时中 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bVznNBP2hMh6tDWAzv1nG9 | 王钻 | accepted |
| spouses | p_uDws44fZu54Eq8cAigBHGN | 阎氏 | accepted |
| other | p_4sZsCTkJog26VjUtiqrNbQ | 王儒 | accepted |
| other | p_D2HurMNg1r8qf63CEHwQek | 王時 | accepted |
| other | p_XVdUz1uj9P5L1HGhQ8MZA4 | 王价 | accepted |
| other | p_jcQHbkwimczLaQjkoGTR5R | 王雍 | accepted |
| other | p_kY5RkWuKny8vWpD2iFHL8p | 王佳 | accepted |
| other | p_mfkbALKA619DdyfJ7MisdA | 王倫 | accepted |
| other | p_qg54QBXqwGojtESwYH4vEL | 王時正 | accepted |

## 外部来源

- [维基数据：王时中（Q15913916）](https://www.wikidata.org/wiki/Q15913916)
- [维基数据：王钻（Q45476540）](https://www.wikidata.org/wiki/Q45476540)
- [维基数据：阎氏（Q65869000）](https://www.wikidata.org/wiki/Q65869000)
- [中国历代人物传记资料库：王佳（CBDB 262453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262453&o=json)
- [中国历代人物传记资料库：王价（CBDB 262459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262459&o=json)
- [中国历代人物传记资料库：王倫（CBDB 262452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262452&o=json)
- [中国历代人物传记资料库：王儒（CBDB 262456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262456&o=json)
- [中国历代人物传记资料库：王時（CBDB 262454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262454&o=json)
- [中国历代人物传记资料库：王時正（CBDB 262457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262457&o=json)
- [中国历代人物传记资料库：王雍（CBDB 262455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262455&o=json)
- [CBDB 中国历代人物传记资料库：王時中（68328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68328&o=json)
