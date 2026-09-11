---
schema: wang-person/v1
id: p_wWApByJ4C128PwLJ8AeXkW
status: active
merged_into: null
display_name: 王玘
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6qaKt3G2NAJXkjC54Cs9KF
        subject_person_id: p_wWApByJ4C128PwLJ8AeXkW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n1556ur75BrmvoRxMuonfZ
          claim_id: c_6qaKt3G2NAJXkjC54Cs9KF
          source_id: s_eMxHftbN1KJEp6uEz3FW26
          stance: supports
          locator: CBDB:200231
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200231）
          source: &a1
            id: s_eMxHftbN1KJEp6uEz3FW26
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 200231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200231&o=json
            external_identifier: CBDB:200231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.597Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UQNCxBNm9ds8B5gSxSvB7q
        subject_person_id: p_wWApByJ4C128PwLJ8AeXkW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1435年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LA8DtRh1eEvLxfkzq4ayon
          claim_id: c_UQNCxBNm9ds8B5gSxSvB7q
          source_id: s_eMxHftbN1KJEp6uEz3FW26
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
        id: c_9SFzDasr9AeUWQhPh7H8BP
        subject_person_id: p_wWApByJ4C128PwLJ8AeXkW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘（生于1435年），明人物。明清進士進士，籍贯遂昌，入仕進士。（中国历代人物传记资料库 CBDB 200231）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a0vobcyowGatZEoDk-L_Jj
          claim_id: c_9SFzDasr9AeUWQhPh7H8BP
          source_id: s_eMxHftbN1KJEp6uEz3FW26
          stance: supports
          locator: CBDB:200231
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kkRaXDcfCVLtMeegbgHIez
        subject_person_id: p_fjK5xkTrjhA9J7fxinn84J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wWApByJ4C128PwLJ8AeXkW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jAHiblJ6euVNr-iTWrC76m
          claim_id: c_kkRaXDcfCVLtMeegbgHIez
          source_id: s_AdRUVTjS2EN7ctZGmapXud
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第四十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AdRUVTjS2EN7ctZGmapXud
            source_type: api_record
            title: 中国历代人物传记资料库：王思武（CBDB 255187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255187&o=json
            external_identifier: CBDB:255187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fjK5xkTrjhA9J7fxinn84J
        status: active
        display_name: 王思武
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_r56s1b1t_xnD5fQlzuN4_G
        subject_person_id: p_KQFY2M9KXQu1Yuk476BENK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wWApByJ4C128PwLJ8AeXkW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jJeAomZtimxZLhhUwm4klE
          claim_id: c_r56s1b1t_xnD5fQlzuN4_G
          source_id: s_YfeLNShjCEw96xzhpt3QVH
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第四十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YfeLNShjCEw96xzhpt3QVH
            source_type: api_record
            title: 中国历代人物传记资料库：王得正（CBDB 255186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255186&o=json
            external_identifier: CBDB:255186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_KQFY2M9KXQu1Yuk476BENK
        status: active
        display_name: 王得正
        merged_into_person_id: null
    - claim:
        id: c_POmWCfprHs7_nKvIyxEL2W
        subject_person_id: p_r3ehqbXQLwhqP91iTNcswN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wWApByJ4C128PwLJ8AeXkW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MHXzIhhr0s40qwaIdW5GLo
          claim_id: c_POmWCfprHs7_nKvIyxEL2W
          source_id: s_uBJjAJ8KFrGnobtydpZR53
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第四十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uBJjAJ8KFrGnobtydpZR53
            source_type: api_record
            title: 中国历代人物传记资料库：王理之（CBDB 255185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255185&o=json
            external_identifier: CBDB:255185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_r3ehqbXQLwhqP91iTNcswN
        status: active
        display_name: 王理之
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王玘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玘 | accepted |
| birth.date | 1435年 | accepted |
| bio.summary | 王玘（生于1435年），明人物。明清進士進士，籍贯遂昌，入仕進士。（中国历代人物传记资料库 CBDB 200231） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fjK5xkTrjhA9J7fxinn84J | 王思武 | accepted |
| ancestors | p_KQFY2M9KXQu1Yuk476BENK | 王得正 | accepted |
| ancestors | p_r3ehqbXQLwhqP91iTNcswN | 王理之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王得正（CBDB 255186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255186&o=json)
- [中国历代人物传记资料库：王理之（CBDB 255185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255185&o=json)
- [中国历代人物传记资料库：王玘（CBDB 200231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200231&o=json)
- [中国历代人物传记资料库：王思武（CBDB 255187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255187&o=json)
