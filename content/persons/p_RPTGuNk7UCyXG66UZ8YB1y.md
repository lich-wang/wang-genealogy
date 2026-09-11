---
schema: wang-person/v1
id: p_RPTGuNk7UCyXG66UZ8YB1y
status: active
merged_into: null
display_name: 王琮
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4dvQUXCjVSXtXLqFYnEQyd
        subject_person_id: p_RPTGuNk7UCyXG66UZ8YB1y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PsAYJMN5hoYASAmHnbfndw
          claim_id: c_4dvQUXCjVSXtXLqFYnEQyd
          source_id: s_8tSnny6Q8J4j8vh5TTuHjC
          stance: supports
          locator: CBDB:198919
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198919）
          source: &a1
            id: s_8tSnny6Q8J4j8vh5TTuHjC
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 198919）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198919&o=json
            external_identifier: CBDB:198919
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.523Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_J9NTLa6ko5VHpAJ5ckDQKb
        subject_person_id: p_RPTGuNk7UCyXG66UZ8YB1y
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1431年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ba3usKRAGwrCo7LGCZbLZM
          claim_id: c_J9NTLa6ko5VHpAJ5ckDQKb
          source_id: s_8tSnny6Q8J4j8vh5TTuHjC
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
        id: c_fBiDmYHhWMvQ6Ddv1p1Rbx
        subject_person_id: p_RPTGuNk7UCyXG66UZ8YB1y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮（生于1431年），明人物。明清進士進士，籍贯龍泉，入仕進士。（中国历代人物传记资料库 CBDB 198919）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2N6NBwqx8M-Clym0qiGwgc
          claim_id: c_fBiDmYHhWMvQ6Ddv1p1Rbx
          source_id: s_8tSnny6Q8J4j8vh5TTuHjC
          stance: supports
          locator: CBDB:198919
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Djd0UoEdLNpWjtsdwtUJwe
        subject_person_id: p_B13sM8QvvGK2XSdKQc64eH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RPTGuNk7UCyXG66UZ8YB1y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6_ooRH2GXMuu5s7SG2F46t
          claim_id: c_Djd0UoEdLNpWjtsdwtUJwe
          source_id: s_x18VEJHZvmVo1MhbWv1oZA
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第三十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_x18VEJHZvmVo1MhbWv1oZA
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 335621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335621&o=json
            external_identifier: CBDB:335621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_B13sM8QvvGK2XSdKQc64eH
        status: active
        display_name: 王敬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_4YlRr9B8Wm3lMUZuCUj0Vn
        subject_person_id: p_Tun4ZpFGowChscGqjoQKme
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RPTGuNk7UCyXG66UZ8YB1y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w3RhC8nGhZj8umE1gg_FER
          claim_id: c_4YlRr9B8Wm3lMUZuCUj0Vn
          source_id: s_uYP1QWJ2VMtMn5C9H3nSyf
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第三十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uYP1QWJ2VMtMn5C9H3nSyf
            source_type: api_record
            title: 中国历代人物传记资料库：王榮清（CBDB 335610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335610&o=json
            external_identifier: CBDB:335610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.462Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Tun4ZpFGowChscGqjoQKme
        status: active
        display_name: 王榮清
        merged_into_person_id: null
    - claim:
        id: c_-Hs5TKXiuyr7Zanls2On4B
        subject_person_id: p_V5tUM2QCfqRkrWxKniVuNJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RPTGuNk7UCyXG66UZ8YB1y
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8w0wivl2BIXFyA3RSvxk4x
          claim_id: c_-Hs5TKXiuyr7Zanls2On4B
          source_id: s_Z6TYHDpzGVQnDCHoopN24Q
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第三十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z6TYHDpzGVQnDCHoopN24Q
            source_type: api_record
            title: 中国历代人物传记资料库：王允中（CBDB 335599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335599&o=json
            external_identifier: CBDB:335599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_V5tUM2QCfqRkrWxKniVuNJ
        status: active
        display_name: 王允中
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琮 | accepted |
| birth.date | 1431年 | accepted |
| bio.summary | 王琮（生于1431年），明人物。明清進士進士，籍贯龍泉，入仕進士。（中国历代人物传记资料库 CBDB 198919） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B13sM8QvvGK2XSdKQc64eH | 王敬 | accepted |
| ancestors | p_Tun4ZpFGowChscGqjoQKme | 王榮清 | accepted |
| ancestors | p_V5tUM2QCfqRkrWxKniVuNJ | 王允中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 198919）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198919&o=json)
- [中国历代人物传记资料库：王敬（CBDB 335621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335621&o=json)
- [中国历代人物传记资料库：王榮清（CBDB 335610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335610&o=json)
- [中国历代人物传记资料库：王允中（CBDB 335599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335599&o=json)
