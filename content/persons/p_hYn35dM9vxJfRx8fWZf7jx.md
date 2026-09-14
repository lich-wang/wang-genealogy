---
schema: wang-person/v1
id: p_hYn35dM9vxJfRx8fWZf7jx
status: active
merged_into: null
display_name: 王撫民
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PHTK3jvPnHgBss8zWwyA9w
        subject_person_id: p_hYn35dM9vxJfRx8fWZf7jx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撫民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a9zxJaUTro9CQ5p3XWMtxG
          claim_id: c_PHTK3jvPnHgBss8zWwyA9w
          source_id: s_gvmN9L8q5G1ePp6BD45Nem
          stance: supports
          locator: CBDB:203316
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203316）
          source: &a1
            id: s_gvmN9L8q5G1ePp6BD45Nem
            source_type: api_record
            title: 中国历代人物传记资料库：王撫民（CBDB 203316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203316&o=json
            external_identifier: CBDB:203316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.781Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NW1R37Fy5hRdPHh4LmWixF
        subject_person_id: p_hYn35dM9vxJfRx8fWZf7jx
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1515年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4u5TnynUqSXt3icrm9H3SK
          claim_id: c_NW1R37Fy5hRdPHh4LmWixF
          source_id: s_gvmN9L8q5G1ePp6BD45Nem
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
        id: c_2NMV4rJ91cePCTK38CiXKP
        subject_person_id: p_hYn35dM9vxJfRx8fWZf7jx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撫民（生于1515年），明人物。明清進士進士，籍贯清源，入仕進士。（中国历代人物传记资料库 CBDB 203316）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_53EGUNGqIXMXtbZRNW7jAI
          claim_id: c_2NMV4rJ91cePCTK38CiXKP
          source_id: s_gvmN9L8q5G1ePp6BD45Nem
          stance: supports
          locator: CBDB:203316
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8ADC_J9dTZ_pZrWbuCeDIE
        subject_person_id: p_icxXq3mTNniLra2C3qpkmV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hYn35dM9vxJfRx8fWZf7jx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aC4wrzh8UNOlRM2tlpiS-3
          claim_id: c_8ADC_J9dTZ_pZrWbuCeDIE
          source_id: s_gvmN9L8q5G1ePp6BD45Nem
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第八十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_icxXq3mTNniLra2C3qpkmV
        status: active
        display_name: 王佑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_iIoC1BHa6rHnybGq-OuB8d
        subject_person_id: p_hYn35dM9vxJfRx8fWZf7jx
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QHCCGVeb94PEkQ5kEGxKfz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JYWKRsxo01yN3HKMVNIgwS
          claim_id: c_iIoC1BHa6rHnybGq-OuB8d
          source_id: s_RuHzgFc47PJ_blfHlD6q7X
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第八十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RuHzgFc47PJ_blfHlD6q7X
            source_type: api_record
            title: 中国历代人物传记资料库：任氏(王撫民妻)（CBDB 302953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302953&o=json
            external_identifier: CBDB:302953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QHCCGVeb94PEkQ5kEGxKfz
        status: active
        display_name: 任氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_Yz8m2apQ9RCUnpwl1Ojl4z
        subject_person_id: p_PgoiUvZcQsZszmNYM1gvRj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hYn35dM9vxJfRx8fWZf7jx
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UVFXHpMXC51UOD1DqWH8E4
          claim_id: c_Yz8m2apQ9RCUnpwl1Ojl4z
          source_id: s_gvmN9L8q5G1ePp6BD45Nem
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第八十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PgoiUvZcQsZszmNYM1gvRj
        status: active
        display_name: 王璋
        merged_into_person_id: null
    - claim:
        id: c_Kwy4G0RM9e33b4Wn4f-PvM
        subject_person_id: p_t6QqM5xbMVQvFriG2QzRgf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hYn35dM9vxJfRx8fWZf7jx
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2hCud_d59cX_BXj7DMxgWf
          claim_id: c_Kwy4G0RM9e33b4Wn4f-PvM
          source_id: s_gvmN9L8q5G1ePp6BD45Nem
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第八十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_t6QqM5xbMVQvFriG2QzRgf
        status: active
        display_name: 王連
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_6SjONxyMROoloDo6ef6gh6
        subject_person_id: p_4qyiGoTomPMaVqCYdNj2Re
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hYn35dM9vxJfRx8fWZf7jx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pdjz8GuStSOG9mhQcGh5MN
          claim_id: c_6SjONxyMROoloDo6ef6gh6
          source_id: s_YEVkHD5ns21gPBtTSZa0HY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203316 王撫民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YEVkHD5ns21gPBtTSZa0HY
            source_type: api_record
            title: 中国历代人物传记资料库：王育民（CBDB 302954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302954&o=json
            external_identifier: CBDB:302954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4qyiGoTomPMaVqCYdNj2Re
        status: active
        display_name: 王育民
        merged_into_person_id: null
    - claim:
        id: c_iJieqhSh2zQ6MDLloeQfhm
        subject_person_id: p_B2VkSjF2KwfP8yam62xbhV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hYn35dM9vxJfRx8fWZf7jx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vO0xZEfPaGo2OGUwd20BJ6
          claim_id: c_iJieqhSh2zQ6MDLloeQfhm
          source_id: s_xcP_xqUfwhtpIYkpkiePaS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203316 王撫民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xcP_xqUfwhtpIYkpkiePaS
            source_type: api_record
            title: 中国历代人物传记资料库：王新民（CBDB 302955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302955&o=json
            external_identifier: CBDB:302955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_B2VkSjF2KwfP8yam62xbhV
        status: active
        display_name: 王新民
        merged_into_person_id: null
    - claim:
        id: c_WQu6TGrzijv8z36-zJD1Nz
        subject_person_id: p_S8VqMzrrBmph6miumBK4Wk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hYn35dM9vxJfRx8fWZf7jx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oAz7efBckshZtK3fw1g51W
          claim_id: c_WQu6TGrzijv8z36-zJD1Nz
          source_id: s_wLaD7bioi_5sSiJ2hJV-C3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203316 王撫民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wLaD7bioi_5sSiJ2hJV-C3
            source_type: api_record
            title: 中国历代人物传记资料库：王澤民（CBDB 302956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302956&o=json
            external_identifier: CBDB:302956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S8VqMzrrBmph6miumBK4Wk
        status: active
        display_name: 王澤民
        merged_into_person_id: null
---

# 王撫民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王撫民 | accepted |
| birth.date | 1515年 | accepted |
| bio.summary | 王撫民（生于1515年），明人物。明清進士進士，籍贯清源，入仕進士。（中国历代人物传记资料库 CBDB 203316） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_icxXq3mTNniLra2C3qpkmV | 王佑 | accepted |
| spouses | p_QHCCGVeb94PEkQ5kEGxKfz | 任氏 | accepted |
| ancestors | p_PgoiUvZcQsZszmNYM1gvRj | 王璋 | accepted |
| ancestors | p_t6QqM5xbMVQvFriG2QzRgf | 王連 | accepted |
| other | p_4qyiGoTomPMaVqCYdNj2Re | 王育民 | accepted |
| other | p_B2VkSjF2KwfP8yam62xbhV | 王新民 | accepted |
| other | p_S8VqMzrrBmph6miumBK4Wk | 王澤民 | accepted |

## 外部来源

- [中国历代人物传记资料库：任氏(王撫民妻)（CBDB 302953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302953&o=json)
- [中国历代人物传记资料库：王撫民（CBDB 203316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203316&o=json)
- [中国历代人物传记资料库：王新民（CBDB 302955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302955&o=json)
- [中国历代人物传记资料库：王育民（CBDB 302954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302954&o=json)
- [中国历代人物传记资料库：王澤民（CBDB 302956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302956&o=json)
