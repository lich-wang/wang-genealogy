---
schema: wang-person/v1
id: p_95nZsbuk9P1PGgHusUKx9n
status: active
merged_into: null
display_name: 王琅
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KQnthPFmyY2y2nf3QWc93z
        subject_person_id: p_95nZsbuk9P1PGgHusUKx9n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jVR1Y2dj2jF17FcDtNQLtx
          claim_id: c_KQnthPFmyY2y2nf3QWc93z
          source_id: s_HbceVDq1n2G3YcS9iMn7oN
          stance: supports
          locator: CBDB:267893
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267893）
          source: &a1
            id: s_HbceVDq1n2G3YcS9iMn7oN
            source_type: api_record
            title: 中国历代人物传记资料库：王琅（CBDB 267893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267893&o=json
            external_identifier: CBDB:267893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.790Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2kcjhFR9wXEUUtBKUCLUPC
        subject_person_id: p_95nZsbuk9P1PGgHusUKx9n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琅，明人物。弘治九年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 267893）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5XBYTJJSaDwRoOk20T7qrg
          claim_id: c_2kcjhFR9wXEUUtBKUCLUPC
          source_id: s_HbceVDq1n2G3YcS9iMn7oN
          stance: supports
          locator: CBDB:267893
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DduFXHWvKu9ZszcfyIc1vY
        subject_person_id: p_Q9zuFMKzedcz4UHwq7tKH2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_95nZsbuk9P1PGgHusUKx9n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YHzDKl7PDX2wXTVI7rWKF7
          claim_id: c_DduFXHWvKu9ZszcfyIc1vY
          source_id: s_SydldJZUIL39i_-1PjuRI4
          stance: supports
          locator: CBDB：兄弟 王鍭（201147）之父／母 王啟宏
          quotation: null
          interpretation_note: 由兄弟关系推断：王琅 与 王鍭 为同胞（CBDB 记「弟」），王鍭 之父／母即 王琅 之父／母。
          source:
            id: s_SydldJZUIL39i_-1PjuRI4
            source_type: api_record
            title: 中国历代人物传记资料库：王琅（CBDB 267893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267893&o=json
            external_identifier: CBDB:267893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q9zuFMKzedcz4UHwq7tKH2
        status: active
        display_name: 王啟宏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_lMp0i2MlBLFbrZ-v4xup3G
        subject_person_id: p_95nZsbuk9P1PGgHusUKx9n
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o62erezyYbukBF-jNEugoU
          claim_id: c_lMp0i2MlBLFbrZ-v4xup3G
          source_id: s_SydldJZUIL39i_-1PjuRI4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201147 王鍭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SydldJZUIL39i_-1PjuRI4
            source_type: api_record
            title: 中国历代人物传记资料库：王琅（CBDB 267893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267893&o=json
            external_identifier: CBDB:267893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oJbh5LgRt8jeK3L7dfcGm6
        status: active
        display_name: 王鍭
        merged_into_person_id: null
---

# 王琅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琅 | accepted |
| bio.summary | 王琅，明人物。弘治九年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 267893） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Q9zuFMKzedcz4UHwq7tKH2 | 王啟宏 | accepted |
| other | p_oJbh5LgRt8jeK3L7dfcGm6 | 王鍭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琅（CBDB 267893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267893&o=json)
