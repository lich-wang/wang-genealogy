---
schema: wang-person/v1
id: p_2jbUSp9pUyEuUdReswY15E
status: active
merged_into: null
display_name: 王載錫
cbdb_id: 245400
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2tQH2cv4QV94QGBGLwjJRh
        subject_person_id: p_2jbUSp9pUyEuUdReswY15E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王載錫，明人物。成化八年進士，籍贯新淦。（中国历代人物传记资料库 CBDB 245400）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_gmlHapg69pnupsX6TCRlyE
          claim_id: c_2tQH2cv4QV94QGBGLwjJRh
          source_id: s_VdWHMNqmNv9Ar47veuih7X
          stance: supports
          locator: CBDB:245400
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VdWHMNqmNv9Ar47veuih7X
            source_type: api_record
            title: 中国历代人物传记资料库：王載錫（CBDB 245400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245400&o=json
            external_identifier: CBDB:245400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_n4WeHC7ERCTp2eQ9HCYHF1
        subject_person_id: p_2jbUSp9pUyEuUdReswY15E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王載錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SF3NYC6nmBozm3SFM8a61N
          claim_id: c_n4WeHC7ERCTp2eQ9HCYHF1
          source_id: s_VdWHMNqmNv9Ar47veuih7X
          stance: supports
          locator: CBDB:245400
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wq_Nxe1Jy5Zc5h39Q82j7i
        subject_person_id: p_2jbUSp9pUyEuUdReswY15E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oQRajD9oDBfYHERmWbMNcH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j1zh7tyPfJW9OT0pI4GqJL
          claim_id: c_wq_Nxe1Jy5Zc5h39Q82j7i
          source_id: s_VdWHMNqmNv9Ar47veuih7X
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第三十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VdWHMNqmNv9Ar47veuih7X
            source_type: api_record
            title: 中国历代人物传记资料库：王載錫（CBDB 245400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245400&o=json
            external_identifier: CBDB:245400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_oQRajD9oDBfYHERmWbMNcH
        status: active
        display_name: 王宜
        merged_into_person_id: null
    - claim:
        id: c_JnXoqCfR0RppDVttdSUpnS
        subject_person_id: p_2jbUSp9pUyEuUdReswY15E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2jiDtJcEzmVTgiFj17asro
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pJVdzbeaPTanbhsgklRqW9
          claim_id: c_JnXoqCfR0RppDVttdSUpnS
          source_id: s_OGp4csjy-UaDWhwdTp6Lfi
          stance: supports
          locator: CBDB：兄弟 王宜（199464）之父／母 王載錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王恭 与 王宜 为同胞（CBDB 记「弟」），王宜 之父／母即 王恭 之父／母。
          source:
            id: s_OGp4csjy-UaDWhwdTp6Lfi
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 245404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245404&o=json
            external_identifier: CBDB:245404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2jiDtJcEzmVTgiFj17asro
        status: active
        display_name: 王恭
        merged_into_person_id: null
    - claim:
        id: c_vzoSIm8P3-B4lzu6_ZrdnJ
        subject_person_id: p_2jbUSp9pUyEuUdReswY15E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AjY4uuLwUkewQTAVP82yY4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YRJmpXxVBsSBAff857PZVP
          claim_id: c_vzoSIm8P3-B4lzu6_ZrdnJ
          source_id: s_Ys9M1m5MICDxdNJs_rMWLp
          stance: supports
          locator: CBDB：兄弟 王宜（199464）之父／母 王載錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王完 与 王宜 为同胞（CBDB 记「兄」），王宜 之父／母即 王完 之父／母。
          source:
            id: s_Ys9M1m5MICDxdNJs_rMWLp
            source_type: api_record
            title: 中国历代人物传记资料库：王完（CBDB 245411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245411&o=json
            external_identifier: CBDB:245411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AjY4uuLwUkewQTAVP82yY4
        status: active
        display_name: 王完
        merged_into_person_id: null
    - claim:
        id: c_6a9qiaJjDeKh66XK37t2HO
        subject_person_id: p_2jbUSp9pUyEuUdReswY15E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P1dhJmvwkpPFXSBCejW61q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2DD_FTpCdNvLMYNejKUZEp
          claim_id: c_6a9qiaJjDeKh66XK37t2HO
          source_id: s_9f8-G3hVwBYke823M00gJK
          stance: supports
          locator: CBDB：兄弟 王宜（199464）之父／母 王載錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王實 与 王宜 为同胞（CBDB 记「兄」），王宜 之父／母即 王實 之父／母。
          source:
            id: s_9f8-G3hVwBYke823M00gJK
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 245410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245410&o=json
            external_identifier: CBDB:245410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P1dhJmvwkpPFXSBCejW61q
        status: active
        display_name: 王實
        merged_into_person_id: null
    - claim:
        id: c_hvevfWRgSIUseYB-1w6dYV
        subject_person_id: p_2jbUSp9pUyEuUdReswY15E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Qew6FkicNHBdFy2ao39B1f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mVQ1kU5lwMutf6t1toB_p8
          claim_id: c_hvevfWRgSIUseYB-1w6dYV
          source_id: s_-GuveTvK2xAZJ3oiExCybh
          stance: supports
          locator: CBDB：兄弟 王宜（199464）之父／母 王載錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王安 与 王宜 为同胞（CBDB 记「兄」），王宜 之父／母即 王安 之父／母。
          source:
            id: s_-GuveTvK2xAZJ3oiExCybh
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 245409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245409&o=json
            external_identifier: CBDB:245409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Qew6FkicNHBdFy2ao39B1f
        status: active
        display_name: 王安
        merged_into_person_id: null
    - claim:
        id: c_1WcRApsMofYrOfaq6tI8GF
        subject_person_id: p_2jbUSp9pUyEuUdReswY15E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aMQx6YLDjNyrYxHCRb2hbE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7e1S56aZI7GO_v3NcEvqld
          claim_id: c_1WcRApsMofYrOfaq6tI8GF
          source_id: s_S9C0ccqyZGEBPFzcrYqnLD
          stance: supports
          locator: CBDB：兄弟 王宜（199464）之父／母 王載錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王賓 与 王宜 为同胞（CBDB 记「弟」），王宜 之父／母即 王賓 之父／母。
          source:
            id: s_S9C0ccqyZGEBPFzcrYqnLD
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 245406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245406&o=json
            external_identifier: CBDB:245406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aMQx6YLDjNyrYxHCRb2hbE
        status: active
        display_name: 王賓
        merged_into_person_id: null
    - claim:
        id: c_J9DZLgqd4w0ptoB3mZajzw
        subject_person_id: p_2jbUSp9pUyEuUdReswY15E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bHGif3qKmDZ2o1x8xJrXzB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_osLDdcaUzkoLJ925Eb99HO
          claim_id: c_J9DZLgqd4w0ptoB3mZajzw
          source_id: s_aIo-LJqtqAUxjri0rXfQYz
          stance: supports
          locator: CBDB：兄弟 王宜（199464）之父／母 王載錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王寬 与 王宜 为同胞（CBDB 记「弟」），王宜 之父／母即 王寬 之父／母。
          source:
            id: s_aIo-LJqtqAUxjri0rXfQYz
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 245405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245405&o=json
            external_identifier: CBDB:245405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bHGif3qKmDZ2o1x8xJrXzB
        status: active
        display_name: 王寬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王載錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王載錫，明人物。成化八年進士，籍贯新淦。（中国历代人物传记资料库 CBDB 245400） | accepted |
| name.primary | 王載錫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_oQRajD9oDBfYHERmWbMNcH | 王宜 | accepted |
| children | p_2jiDtJcEzmVTgiFj17asro | 王恭 | accepted |
| children | p_AjY4uuLwUkewQTAVP82yY4 | 王完 | accepted |
| children | p_P1dhJmvwkpPFXSBCejW61q | 王實 | accepted |
| children | p_Qew6FkicNHBdFy2ao39B1f | 王安 | accepted |
| children | p_aMQx6YLDjNyrYxHCRb2hbE | 王賓 | accepted |
| children | p_bHGif3qKmDZ2o1x8xJrXzB | 王寬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 245409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245409&o=json)
- [中国历代人物传记资料库：王賓（CBDB 245406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245406&o=json)
- [中国历代人物传记资料库：王恭（CBDB 245404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245404&o=json)
- [中国历代人物传记资料库：王寬（CBDB 245405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245405&o=json)
- [中国历代人物传记资料库：王實（CBDB 245410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245410&o=json)
- [中国历代人物传记资料库：王完（CBDB 245411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245411&o=json)
- [中国历代人物传记资料库：王載錫（CBDB 245400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245400&o=json)
