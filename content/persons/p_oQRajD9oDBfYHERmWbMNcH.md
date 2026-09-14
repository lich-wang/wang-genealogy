---
schema: wang-person/v1
id: p_oQRajD9oDBfYHERmWbMNcH
status: active
merged_into: null
display_name: 王宜
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1WEyizj47QAtyTrhGTBcg3
        subject_person_id: p_oQRajD9oDBfYHERmWbMNcH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DRcE1MhVwFPbMxWRgHHAJq
          claim_id: c_1WEyizj47QAtyTrhGTBcg3
          source_id: s_pxKRkkesbs3vBQ15WkCXH7
          stance: supports
          locator: CBDB:199464
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199464）
          source: &a1
            id: s_pxKRkkesbs3vBQ15WkCXH7
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 199464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199464&o=json
            external_identifier: CBDB:199464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.549Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YZoncwrPM9jVmu2fvShJcP
        subject_person_id: p_oQRajD9oDBfYHERmWbMNcH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1439年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ibEZNHioWqdj7pDWHxqN1T
          claim_id: c_YZoncwrPM9jVmu2fvShJcP
          source_id: s_pxKRkkesbs3vBQ15WkCXH7
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
        id: c_D7nMgQLQyZbKNp7PmiVqEk
        subject_person_id: p_oQRajD9oDBfYHERmWbMNcH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜（生于1439年），明人物。明清進士進士，籍贯新淦，入仕進士。（中国历代人物传记资料库 CBDB 199464）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pvEEjDMAEAzEdZ3x2lUiR8
          claim_id: c_D7nMgQLQyZbKNp7PmiVqEk
          source_id: s_pxKRkkesbs3vBQ15WkCXH7
          stance: supports
          locator: CBDB:199464
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_2jbUSp9pUyEuUdReswY15E
        status: active
        display_name: 王載錫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_APvnKsvEZCNG2jONjnC-GN
        subject_person_id: p_kDNRN3YCCEhvPfBk6vn2qH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oQRajD9oDBfYHERmWbMNcH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XgVJ_6hXsaISMyXZde-iAy
          claim_id: c_APvnKsvEZCNG2jONjnC-GN
          source_id: s_E8hf8zFmpnYfKRw2dQnh4X
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第三十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E8hf8zFmpnYfKRw2dQnh4X
            source_type: api_record
            title: 中国历代人物传记资料库：王伯清（CBDB 245398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245398&o=json
            external_identifier: CBDB:245398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.060Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kDNRN3YCCEhvPfBk6vn2qH
        status: active
        display_name: 王伯清
        merged_into_person_id: null
    - claim:
        id: c_MpmMzbrirlF8whng0IX_Hz
        subject_person_id: p_za3b1aKjpz5jYSp7iVS3Fk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oQRajD9oDBfYHERmWbMNcH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OE_XghFlBrFERRBELR9uQb
          claim_id: c_MpmMzbrirlF8whng0IX_Hz
          source_id: s_P9HLub7kY9XpjZ3HfuiUta
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第三十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P9HLub7kY9XpjZ3HfuiUta
            source_type: api_record
            title: 中国历代人物传记资料库：王景昌（CBDB 245399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245399&o=json
            external_identifier: CBDB:245399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_za3b1aKjpz5jYSp7iVS3Fk
        status: active
        display_name: 王景昌
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_D9-yHxNTEAxf22tA3X30SU
        subject_person_id: p_2jiDtJcEzmVTgiFj17asro
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oQRajD9oDBfYHERmWbMNcH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_erEJQQupB89NYgsmAbv-1y
          claim_id: c_D9-yHxNTEAxf22tA3X30SU
          source_id: s_OGp4csjy-UaDWhwdTp6Lfi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199464 王宜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_wqU9jJO4R6r6uSSyNjrpXl
        subject_person_id: p_AjY4uuLwUkewQTAVP82yY4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oQRajD9oDBfYHERmWbMNcH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kdwfX4AZ_jxqDujDmTgaPL
          claim_id: c_wqU9jJO4R6r6uSSyNjrpXl
          source_id: s_Ys9M1m5MICDxdNJs_rMWLp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199464 王宜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_Em7TLSic7A-1eJJ5yyJbn5
        subject_person_id: p_P1dhJmvwkpPFXSBCejW61q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oQRajD9oDBfYHERmWbMNcH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EmozsGpMU-uIzsNU7vFJO3
          claim_id: c_Em7TLSic7A-1eJJ5yyJbn5
          source_id: s_9f8-G3hVwBYke823M00gJK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199464 王宜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_CQ6V1cB8Wcc8zsOJVvkbf0
        subject_person_id: p_Qew6FkicNHBdFy2ao39B1f
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oQRajD9oDBfYHERmWbMNcH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OXHSpi3_K6t56FMMREyxgr
          claim_id: c_CQ6V1cB8Wcc8zsOJVvkbf0
          source_id: s_-GuveTvK2xAZJ3oiExCybh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199464 王宜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_J8OWhvwMQDhrub8nW2Y6Cy
        subject_person_id: p_aMQx6YLDjNyrYxHCRb2hbE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oQRajD9oDBfYHERmWbMNcH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x46gGR5EDCSjNRlIu1FddQ
          claim_id: c_J8OWhvwMQDhrub8nW2Y6Cy
          source_id: s_S9C0ccqyZGEBPFzcrYqnLD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199464 王宜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_463eHU2fMndPjlNeb1PPXK
        subject_person_id: p_bHGif3qKmDZ2o1x8xJrXzB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oQRajD9oDBfYHERmWbMNcH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5v_q4U5MlqlOgTMQ07jtQk
          claim_id: c_463eHU2fMndPjlNeb1PPXK
          source_id: s_aIo-LJqtqAUxjri0rXfQYz
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199464 王宜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王宜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宜 | accepted |
| birth.date | 1439年 | accepted |
| bio.summary | 王宜（生于1439年），明人物。明清進士進士，籍贯新淦，入仕進士。（中国历代人物传记资料库 CBDB 199464） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2jbUSp9pUyEuUdReswY15E | 王載錫 | accepted |
| ancestors | p_kDNRN3YCCEhvPfBk6vn2qH | 王伯清 | accepted |
| ancestors | p_za3b1aKjpz5jYSp7iVS3Fk | 王景昌 | accepted |
| other | p_2jiDtJcEzmVTgiFj17asro | 王恭 | accepted |
| other | p_AjY4uuLwUkewQTAVP82yY4 | 王完 | accepted |
| other | p_P1dhJmvwkpPFXSBCejW61q | 王實 | accepted |
| other | p_Qew6FkicNHBdFy2ao39B1f | 王安 | accepted |
| other | p_aMQx6YLDjNyrYxHCRb2hbE | 王賓 | accepted |
| other | p_bHGif3qKmDZ2o1x8xJrXzB | 王寬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 245409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245409&o=json)
- [中国历代人物传记资料库：王賓（CBDB 245406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245406&o=json)
- [中国历代人物传记资料库：王伯清（CBDB 245398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245398&o=json)
- [中国历代人物传记资料库：王恭（CBDB 245404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245404&o=json)
- [中国历代人物传记资料库：王景昌（CBDB 245399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245399&o=json)
- [中国历代人物传记资料库：王寬（CBDB 245405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245405&o=json)
- [中国历代人物传记资料库：王實（CBDB 245410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245410&o=json)
- [中国历代人物传记资料库：王完（CBDB 245411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245411&o=json)
- [中国历代人物传记资料库：王宜（CBDB 199464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199464&o=json)
- [中国历代人物传记资料库：王載錫（CBDB 245400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245400&o=json)
