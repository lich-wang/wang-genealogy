---
schema: wang-person/v1
id: p_VPBzVv78CoP5XVnnwvn14Q
status: active
merged_into: null
display_name: 王瓉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jq3WpA31Hv7KFUHV2786SS
        subject_person_id: p_VPBzVv78CoP5XVnnwvn14Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9ScX6CvAfAtyNqCG1WLr2W
          claim_id: c_jq3WpA31Hv7KFUHV2786SS
          source_id: s_A1C9YzwkWywV6QMCZabM5Q
          stance: supports
          locator: CBDB:294334
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294334）
          source: &a1
            id: s_A1C9YzwkWywV6QMCZabM5Q
            source_type: api_record
            title: 中国历代人物传记资料库：王瓉（CBDB 294334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294334&o=json
            external_identifier: CBDB:294334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.448Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dsVJ93xzkWH2UGMbuHG7DA
        subject_person_id: p_VPBzVv78CoP5XVnnwvn14Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓉，明人物。嘉靖十一年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 294334）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yVy_ll6wH1csc6ijKV_tTB
          claim_id: c_dsVJ93xzkWH2UGMbuHG7DA
          source_id: s_A1C9YzwkWywV6QMCZabM5Q
          stance: supports
          locator: CBDB:294334
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xZTocyECtKu0wQKD-vigZZ
        subject_person_id: p_Akvhk7vb2JMfzgR2hpBTHy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VPBzVv78CoP5XVnnwvn14Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F1wOe0HgCmDzMzNXi7vOka
          claim_id: c_xZTocyECtKu0wQKD-vigZZ
          source_id: s_vTSLNsM_bkakuNw3_wvqXY
          stance: supports
          locator: CBDB：兄弟 王瑛（126750）之父／母 王浦
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓉 与 王瑛 为同胞（CBDB 记「弟」），王瑛 之父／母即 王瓉 之父／母。
          source:
            id: s_vTSLNsM_bkakuNw3_wvqXY
            source_type: api_record
            title: 中国历代人物传记资料库：王瓉（CBDB 294334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294334&o=json
            external_identifier: CBDB:294334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Akvhk7vb2JMfzgR2hpBTHy
        status: active
        display_name: 王浦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fGxjdUb4sF_5EsWZrrMEXE
        subject_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VPBzVv78CoP5XVnnwvn14Q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SEX47Tu_BXYbrv3kpTxxG-
          claim_id: c_fGxjdUb4sF_5EsWZrrMEXE
          source_id: s_vTSLNsM_bkakuNw3_wvqXY
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126750 王瑛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vTSLNsM_bkakuNw3_wvqXY
            source_type: api_record
            title: 中国历代人物传记资料库：王瓉（CBDB 294334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294334&o=json
            external_identifier: CBDB:294334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AKiZ73AHqEtzATAkDq6m9S
        status: active
        display_name: 王瑛
        merged_into_person_id: null
---

# 王瓉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓉 | accepted |
| bio.summary | 王瓉，明人物。嘉靖十一年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 294334） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Akvhk7vb2JMfzgR2hpBTHy | 王浦 | accepted |
| other | p_AKiZ73AHqEtzATAkDq6m9S | 王瑛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓉（CBDB 294334）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294334&o=json)
