---
schema: wang-person/v1
id: p_ciXb4UH2wKJZ363JCcVWVZ
status: active
merged_into: null
display_name: 王建忠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bgtgD1kKctHSUucMKLkjMp
        subject_person_id: p_ciXb4UH2wKJZ363JCcVWVZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ex55b8MgK48w5UFFKxep5Z
          claim_id: c_bgtgD1kKctHSUucMKLkjMp
          source_id: s_AN6Z6UACShNXPD2Heb8hTW
          stance: supports
          locator: CBDB:233803
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（233803）
          source: &a1
            id: s_AN6Z6UACShNXPD2Heb8hTW
            source_type: api_record
            title: 中国历代人物传记资料库：王建忠（CBDB 233803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233803&o=json
            external_identifier: CBDB:233803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WdieNA1HaDFWWK6eU3Tbyk
        subject_person_id: p_ciXb4UH2wKJZ363JCcVWVZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建忠，明人物。籍贯南充，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 233803）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WcK_SHrIZy8EAInz_d-cdg
          claim_id: c_WdieNA1HaDFWWK6eU3Tbyk
          source_id: s_AN6Z6UACShNXPD2Heb8hTW
          stance: supports
          locator: CBDB:233803
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_S_zk-ucIfrky9nhMnJ4iOG
        subject_person_id: p_z6ACPFtm9wPnLGvKH6v1N8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ciXb4UH2wKJZ363JCcVWVZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1IyaJVwfS_vzX7JMM80NUK
          claim_id: c_S_zk-ucIfrky9nhMnJ4iOG
          source_id: s__AFkybqQUFvlBj8qck5xZq
          stance: supports
          locator: CBDB：兄弟 王世蔭（207683）之父／母 王樓
          quotation: null
          interpretation_note: 由兄弟关系推断：王建忠 与 王世蔭 为同胞（CBDB 记「兄」），王世蔭 之父／母即 王建忠 之父／母。
          source:
            id: s__AFkybqQUFvlBj8qck5xZq
            source_type: api_record
            title: 中国历代人物传记资料库：王建忠（CBDB 233803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233803&o=json
            external_identifier: CBDB:233803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_z6ACPFtm9wPnLGvKH6v1N8
        status: active
        display_name: 王樓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XbxyKYh11eocaY_chmRHzy
        subject_person_id: p_Rv5ych5iExch2twdfSXkLP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ciXb4UH2wKJZ363JCcVWVZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ECGEiu_zX819KfQdzm19Gg
          claim_id: c_XbxyKYh11eocaY_chmRHzy
          source_id: s__AFkybqQUFvlBj8qck5xZq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207683 王世蔭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__AFkybqQUFvlBj8qck5xZq
            source_type: api_record
            title: 中国历代人物传记资料库：王建忠（CBDB 233803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233803&o=json
            external_identifier: CBDB:233803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Rv5ych5iExch2twdfSXkLP
        status: active
        display_name: 王世蔭
        merged_into_person_id: null
---

# 王建忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建忠 | accepted |
| bio.summary | 王建忠，明人物。籍贯南充，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 233803） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_z6ACPFtm9wPnLGvKH6v1N8 | 王樓 | accepted |
| other | p_Rv5ych5iExch2twdfSXkLP | 王世蔭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王建忠（CBDB 233803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233803&o=json)
