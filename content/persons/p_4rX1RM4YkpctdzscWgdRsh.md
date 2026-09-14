---
schema: wang-person/v1
id: p_4rX1RM4YkpctdzscWgdRsh
status: active
merged_into: null
display_name: 王綸
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ATjyDvfC4y9w24DC6w98hi
        subject_person_id: p_4rX1RM4YkpctdzscWgdRsh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H8RpXmzGUiJ8fr2sAt4Yc9
          claim_id: c_ATjyDvfC4y9w24DC6w98hi
          source_id: s_tniXLNayvNhe4q9rD3xh4y
          stance: supports
          locator: CBDB:126788
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126788）
          source: &a1
            id: s_tniXLNayvNhe4q9rD3xh4y
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 126788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126788&o=json
            external_identifier: CBDB:126788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aM5tKrX2FNAJbAPpTEtABb
        subject_person_id: p_4rX1RM4YkpctdzscWgdRsh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1455年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JHVV5QwbQZu9Y2xz8EMSYv
          claim_id: c_aM5tKrX2FNAJbAPpTEtABb
          source_id: s_tniXLNayvNhe4q9rD3xh4y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jRkHG9YaNC2QxN4MSH43vR
        subject_person_id: p_4rX1RM4YkpctdzscWgdRsh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1511年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_boND5LWak3QMLYGG1YC5NC
          claim_id: c_jRkHG9YaNC2QxN4MSH43vR
          source_id: s_tniXLNayvNhe4q9rD3xh4y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5coA1qFNmJfPAmbt2JyK8w
        subject_person_id: p_4rX1RM4YkpctdzscWgdRsh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸（1455年—1511年），明人物。明清進士進士，籍贯開州，入仕進士，曾任府通判、知縣。（中国历代人物传记资料库 CBDB 126788）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tOhGHHFE9pRara6AUHMnYL
          claim_id: c_5coA1qFNmJfPAmbt2JyK8w
          source_id: s_tniXLNayvNhe4q9rD3xh4y
          stance: supports
          locator: CBDB:126788
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uWYEThEwjwWSrgz6W13qnx
        subject_person_id: p_wqJCDPhDuiWCbHqgtTnEn4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4rX1RM4YkpctdzscWgdRsh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bClc29gGYhHDIDnA8vVfl5
          claim_id: c_uWYEThEwjwWSrgz6W13qnx
          source_id: s_tniXLNayvNhe4q9rD3xh4y
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wqJCDPhDuiWCbHqgtTnEn4
        status: active
        display_name: 王琮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_UcrBlo-fxGlHw45ypvOa2j
        subject_person_id: p_4rX1RM4YkpctdzscWgdRsh
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_BkJTtmgexaTB7x5RPTuyq7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JlJ1xjNMJM_zuLvIeMHnoN
          claim_id: c_UcrBlo-fxGlHw45ypvOa2j
          source_id: s_L3nfm2q3FFfXSgKalqzeo4
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_L3nfm2q3FFfXSgKalqzeo4
            source_type: api_record
            title: 中国历代人物传记资料库：侯氏(王綸妻)（CBDB 262433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262433&o=json
            external_identifier: CBDB:262433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BkJTtmgexaTB7x5RPTuyq7
        status: active
        display_name: 侯氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_rSuyLcDvDOGLHTkgTo4kLe
        subject_person_id: p_ZkPW8egCF3X51BkY1Q26ri
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4rX1RM4YkpctdzscWgdRsh
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ad9859HKFmnY09mU5jfaZk
          claim_id: c_rSuyLcDvDOGLHTkgTo4kLe
          source_id: s_tniXLNayvNhe4q9rD3xh4y
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZkPW8egCF3X51BkY1Q26ri
        status: active
        display_name: 王浩
        merged_into_person_id: null
    - claim:
        id: c_PGh1AyfCRJ21QxgarVvczi
        subject_person_id: p_hr4owVcxQc5APCerqkGqH3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4rX1RM4YkpctdzscWgdRsh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8TIJMC5NCqoISq8ZJyOQC0
          claim_id: c_PGh1AyfCRJ21QxgarVvczi
          source_id: s_tniXLNayvNhe4q9rD3xh4y
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hr4owVcxQc5APCerqkGqH3
        status: active
        display_name: 王佑
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_PibSvbWza73HnO67YmoDJ-
        subject_person_id: p_42ptwhA8sPYUR7e8J3RMDw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_4rX1RM4YkpctdzscWgdRsh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s8Q-VCTEFYibuMB7cTJZor
          claim_id: c_PibSvbWza73HnO67YmoDJ-
          source_id: s_wE7_1gk-iIk4RAEvQVTewb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126788 王綸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wE7_1gk-iIk4RAEvQVTewb
            source_type: api_record
            title: 中国历代人物传记资料库：王緯（CBDB 262437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262437&o=json
            external_identifier: CBDB:262437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_42ptwhA8sPYUR7e8J3RMDw
        status: active
        display_name: 王緯
        merged_into_person_id: null
    - claim:
        id: c_7i28uaJ52JmU-TL0jyGseI
        subject_person_id: p_4rX1RM4YkpctdzscWgdRsh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HP72Pa9d9U5GKTJzHcb4kj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aVvO4XLzNtLs-240gor3Hp
          claim_id: c_7i28uaJ52JmU-TL0jyGseI
          source_id: s_2LrLnNLPwHOiyLi7rnxdZP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126788 王綸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2LrLnNLPwHOiyLi7rnxdZP
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 262435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262435&o=json
            external_identifier: CBDB:262435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HP72Pa9d9U5GKTJzHcb4kj
        status: active
        display_name: 王銘
        merged_into_person_id: null
    - claim:
        id: c_QJ0YpDDYxE_VJ2GTeNfR7C
        subject_person_id: p_4rX1RM4YkpctdzscWgdRsh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Znm4biBo5er9k6T2dRc7HC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_viJJwbjaNqs1Lj-TD4aiaT
          claim_id: c_QJ0YpDDYxE_VJ2GTeNfR7C
          source_id: s_XctUe2S5VKTIclqK0dz6xs
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126788 王綸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XctUe2S5VKTIclqK0dz6xs
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 262434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262434&o=json
            external_identifier: CBDB:262434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Znm4biBo5er9k6T2dRc7HC
        status: active
        display_name: 王鐸
        merged_into_person_id: null
---

# 王綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綸 | accepted |
| birth.date | 1455年 | accepted |
| death.date | 1511年 | accepted |
| bio.summary | 王綸（1455年—1511年），明人物。明清進士進士，籍贯開州，入仕進士，曾任府通判、知縣。（中国历代人物传记资料库 CBDB 126788） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wqJCDPhDuiWCbHqgtTnEn4 | 王琮 | accepted |
| spouses | p_BkJTtmgexaTB7x5RPTuyq7 | 侯氏 | accepted |
| ancestors | p_ZkPW8egCF3X51BkY1Q26ri | 王浩 | accepted |
| ancestors | p_hr4owVcxQc5APCerqkGqH3 | 王佑 | accepted |
| other | p_42ptwhA8sPYUR7e8J3RMDw | 王緯 | accepted |
| other | p_HP72Pa9d9U5GKTJzHcb4kj | 王銘 | accepted |
| other | p_Znm4biBo5er9k6T2dRc7HC | 王鐸 | accepted |

## 外部来源

- [中国历代人物传记资料库：侯氏(王綸妻)（CBDB 262433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262433&o=json)
- [中国历代人物传记资料库：王鐸（CBDB 262434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262434&o=json)
- [中国历代人物传记资料库：王綸（CBDB 126788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126788&o=json)
- [中国历代人物传记资料库：王銘（CBDB 262435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262435&o=json)
- [中国历代人物传记资料库：王緯（CBDB 262437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262437&o=json)
