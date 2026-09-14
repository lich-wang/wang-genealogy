---
schema: wang-person/v1
id: p_HW595LoSX5sZYxTZGrBbPN
status: active
merged_into: null
display_name: 王正宗
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xN7E92BCVzLr3DXc1kS1Hq
        subject_person_id: p_HW595LoSX5sZYxTZGrBbPN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V51TgvDACrAdisbJw2Bvy3
          claim_id: c_xN7E92BCVzLr3DXc1kS1Hq
          source_id: s_eX7Dcsn4SPbNwQXEAQd9JU
          stance: supports
          locator: CBDB:201966
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201966）
          source: &a1
            id: s_eX7Dcsn4SPbNwQXEAQd9JU
            source_type: api_record
            title: 中国历代人物传记资料库：王正宗（CBDB 201966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201966&o=json
            external_identifier: CBDB:201966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.706Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uiPmARRAfZuSqPuAGFc2ZK
        subject_person_id: p_HW595LoSX5sZYxTZGrBbPN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1483年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6dtXTTQF6k3aQq3c7BRH8Z
          claim_id: c_uiPmARRAfZuSqPuAGFc2ZK
          source_id: s_eX7Dcsn4SPbNwQXEAQd9JU
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
        id: c_zQchvqXWCvZM2oyZBztTtX
        subject_person_id: p_HW595LoSX5sZYxTZGrBbPN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正宗（生于1483年），明人物。明清進士進士，籍贯固安，入仕進士。（中国历代人物传记资料库 CBDB 201966）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7G-MrGMYLdTVIIiWPnewr-
          claim_id: c_zQchvqXWCvZM2oyZBztTtX
          source_id: s_eX7Dcsn4SPbNwQXEAQd9JU
          stance: supports
          locator: CBDB:201966
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5GUbgDXf_FEvr6RoWNdj2Q
        subject_person_id: p_qEzMiRzsrE1MGWNCLuPUfF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HW595LoSX5sZYxTZGrBbPN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lwI1JjFDA8H3pGrqDA3arc
          claim_id: c_5GUbgDXf_FEvr6RoWNdj2Q
          source_id: s_J8QwDBMDYGtWNGvZbGp58c
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第六十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_J8QwDBMDYGtWNGvZbGp58c
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 281261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281261&o=json
            external_identifier: CBDB:281261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.049Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qEzMiRzsrE1MGWNCLuPUfF
        status: active
        display_name: 王澍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_L7rFhcH0Bjj3bRdet9NPmu
        subject_person_id: p_9mGmBKBWVvuM4UFQGHQYV5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HW595LoSX5sZYxTZGrBbPN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UA8-_o8df8G8Jy7KCPOpQ7
          claim_id: c_L7rFhcH0Bjj3bRdet9NPmu
          source_id: s_sn4YXNJvDBGBDZVuwoGLuH
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第六十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sn4YXNJvDBGBDZVuwoGLuH
            source_type: api_record
            title: 中国历代人物传记资料库：王從義（CBDB 281259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281259&o=json
            external_identifier: CBDB:281259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.048Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9mGmBKBWVvuM4UFQGHQYV5
        status: active
        display_name: 王從義
        merged_into_person_id: null
    - claim:
        id: c_gZ6zDesknBZ94pQVyQUxGC
        subject_person_id: p_vaaDJqj6Lngwb5zBjBERdY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HW595LoSX5sZYxTZGrBbPN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WG1z_Zasxpg2hldL61FP6l
          claim_id: c_gZ6zDesknBZ94pQVyQUxGC
          source_id: s_7VJNwWJJuNv7UxnpoLSRxL
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第六十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7VJNwWJJuNv7UxnpoLSRxL
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 281260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281260&o=json
            external_identifier: CBDB:281260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.049Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vaaDJqj6Lngwb5zBjBERdY
        status: active
        display_name: 王智
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_anVmA_0844lOaGbbXKPEf7
        subject_person_id: p_HW595LoSX5sZYxTZGrBbPN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Y39RCaP94GU9ZUQKggCsWM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eBvYu6m05qRC9TW3uSe7yf
          claim_id: c_anVmA_0844lOaGbbXKPEf7
          source_id: s_v1pblyyPBSIrhlhlQoFizD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201966 王正宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_v1pblyyPBSIrhlhlQoFizD
            source_type: api_record
            title: 中国历代人物传记资料库：王繼宗（CBDB 281266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281266&o=json
            external_identifier: CBDB:281266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y39RCaP94GU9ZUQKggCsWM
        status: active
        display_name: 王繼宗
        merged_into_person_id: null
---

# 王正宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正宗 | accepted |
| birth.date | 1483年 | accepted |
| bio.summary | 王正宗（生于1483年），明人物。明清進士進士，籍贯固安，入仕進士。（中国历代人物传记资料库 CBDB 201966） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qEzMiRzsrE1MGWNCLuPUfF | 王澍 | accepted |
| ancestors | p_9mGmBKBWVvuM4UFQGHQYV5 | 王從義 | accepted |
| ancestors | p_vaaDJqj6Lngwb5zBjBERdY | 王智 | accepted |
| other | p_Y39RCaP94GU9ZUQKggCsWM | 王繼宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從義（CBDB 281259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281259&o=json)
- [中国历代人物传记资料库：王繼宗（CBDB 281266）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281266&o=json)
- [中国历代人物传记资料库：王澍（CBDB 281261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281261&o=json)
- [中国历代人物传记资料库：王正宗（CBDB 201966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201966&o=json)
- [中国历代人物传记资料库：王智（CBDB 281260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281260&o=json)
