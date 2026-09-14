---
schema: wang-person/v1
id: p_CJwfhVhpTHWmgtuhYxLMbJ
status: active
merged_into: null
display_name: 王潤
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RYuY7Y4REZR2UNSk4kcBWh
        subject_person_id: p_CJwfhVhpTHWmgtuhYxLMbJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wj35kucJeBQE6pE8kf5Wr2
          claim_id: c_RYuY7Y4REZR2UNSk4kcBWh
          source_id: s_Sm85q85m5Hzo6xnQcLvhvx
          stance: supports
          locator: CBDB:297880
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297880）
          source: &a1
            id: s_Sm85q85m5Hzo6xnQcLvhvx
            source_type: api_record
            title: 中国历代人物传记资料库：王潤（CBDB 297880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297880&o=json
            external_identifier: CBDB:297880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GygxN31Q2n9jAK34Drk3Q3
        subject_person_id: p_CJwfhVhpTHWmgtuhYxLMbJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤，明人物。天順元年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 297880）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-vpCgLp-zQYjKpLPxeE8XN
          claim_id: c_GygxN31Q2n9jAK34Drk3Q3
          source_id: s_Sm85q85m5Hzo6xnQcLvhvx
          stance: supports
          locator: CBDB:297880
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HvLycox2j_QMhSDx653xh1
        subject_person_id: p_t7N3FS2FJZpX5ZRC4cp82b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CJwfhVhpTHWmgtuhYxLMbJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SuTtA03ttJSzQ5LVXb1ghn
          claim_id: c_HvLycox2j_QMhSDx653xh1
          source_id: s_NaiRiQmbS2TCLKCzGaI_3T
          stance: supports
          locator: CBDB：兄弟 王淵（67719）之父／母 王鑰
          quotation: null
          interpretation_note: 由兄弟关系推断：王潤 与 王淵 为同胞（CBDB 记「兄」），王淵 之父／母即 王潤 之父／母。
          source:
            id: s_NaiRiQmbS2TCLKCzGaI_3T
            source_type: api_record
            title: 中国历代人物传记资料库：王潤（CBDB 297880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297880&o=json
            external_identifier: CBDB:297880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_t7N3FS2FJZpX5ZRC4cp82b
        status: active
        display_name: 王鑰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0nwPPl4CQcLoVTv2HeeGHC
        subject_person_id: p_CJwfhVhpTHWmgtuhYxLMbJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JCqwAkFqCg6AEXKEULaDMW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F3CO7t_nYSI9E-EWBdQE3Q
          claim_id: c_0nwPPl4CQcLoVTv2HeeGHC
          source_id: s_NaiRiQmbS2TCLKCzGaI_3T
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67719 王淵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NaiRiQmbS2TCLKCzGaI_3T
            source_type: api_record
            title: 中国历代人物传记资料库：王潤（CBDB 297880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297880&o=json
            external_identifier: CBDB:297880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JCqwAkFqCg6AEXKEULaDMW
        status: active
        display_name: 王淵
        merged_into_person_id: null
---

# 王潤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潤 | accepted |
| bio.summary | 王潤，明人物。天順元年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 297880） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_t7N3FS2FJZpX5ZRC4cp82b | 王鑰 | accepted |
| other | p_JCqwAkFqCg6AEXKEULaDMW | 王淵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潤（CBDB 297880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297880&o=json)
