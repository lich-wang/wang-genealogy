---
schema: wang-person/v1
id: p_Q5UjcCFn8KgmKVfcDfRBkY
status: active
merged_into: null
display_name: 王潮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BkkQh66NMp5S2gH9DzkHPY
        subject_person_id: p_Q5UjcCFn8KgmKVfcDfRBkY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eBGowooLf1dX62xx2GEahr
          claim_id: c_BkkQh66NMp5S2gH9DzkHPY
          source_id: s_pGCqFQ4pnPX8Et9Xfu2pQH
          stance: supports
          locator: CBDB:267895
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267895）
          source: &a1
            id: s_pGCqFQ4pnPX8Et9Xfu2pQH
            source_type: api_record
            title: 中国历代人物传记资料库：王潮（CBDB 267895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267895&o=json
            external_identifier: CBDB:267895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pk9LEdYLPuTGWuMqiyhvqA
        subject_person_id: p_Q5UjcCFn8KgmKVfcDfRBkY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潮，明人物。弘治九年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 267895）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YJgpjYne0EfqwzJIzGouep
          claim_id: c_Pk9LEdYLPuTGWuMqiyhvqA
          source_id: s_pGCqFQ4pnPX8Et9Xfu2pQH
          stance: supports
          locator: CBDB:267895
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-4ZkvCSaV7ZVhF8vtetoP_
        subject_person_id: p_Q9zuFMKzedcz4UHwq7tKH2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q5UjcCFn8KgmKVfcDfRBkY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GQoa0vErgRyfmqC_2L4EKV
          claim_id: c_-4ZkvCSaV7ZVhF8vtetoP_
          source_id: s_uLnJHnIFtQ77Iagy133DA_
          stance: supports
          locator: CBDB：兄弟 王鍭（201147）之父／母 王啟宏
          quotation: null
          interpretation_note: 由兄弟关系推断：王潮 与 王鍭 为同胞（CBDB 记「兄」），王鍭 之父／母即 王潮 之父／母。
          source:
            id: s_uLnJHnIFtQ77Iagy133DA_
            source_type: api_record
            title: 中国历代人物传记资料库：王潮（CBDB 267895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267895&o=json
            external_identifier: CBDB:267895
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
        id: c_YBdGB9MkySY0yY4MFwxpqu
        subject_person_id: p_Q5UjcCFn8KgmKVfcDfRBkY
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
        - id: cs_edvxHDxQ9agfAove14VVMI
          claim_id: c_YBdGB9MkySY0yY4MFwxpqu
          source_id: s_uLnJHnIFtQ77Iagy133DA_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201147 王鍭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uLnJHnIFtQ77Iagy133DA_
            source_type: api_record
            title: 中国历代人物传记资料库：王潮（CBDB 267895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267895&o=json
            external_identifier: CBDB:267895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oJbh5LgRt8jeK3L7dfcGm6
        status: active
        display_name: 王鍭
        merged_into_person_id: null
---

# 王潮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潮 | accepted |
| bio.summary | 王潮，明人物。弘治九年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 267895） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Q9zuFMKzedcz4UHwq7tKH2 | 王啟宏 | accepted |
| other | p_oJbh5LgRt8jeK3L7dfcGm6 | 王鍭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潮（CBDB 267895）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267895&o=json)
