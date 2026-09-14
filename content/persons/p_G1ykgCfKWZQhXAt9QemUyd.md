---
schema: wang-person/v1
id: p_G1ykgCfKWZQhXAt9QemUyd
status: active
merged_into: null
display_name: 王紹績
cbdb_id: 222279
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ud6rthbYPb6yaYy9AfmYGg
        subject_person_id: p_G1ykgCfKWZQhXAt9QemUyd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹績，明人物。萬曆十一年進士，籍贯咸寧。（中国历代人物传记资料库 CBDB 222279）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_sZ6-liWSgBUUDjEGyGIeTe
          claim_id: c_Ud6rthbYPb6yaYy9AfmYGg
          source_id: s_w8Xyc7YJqH7Ab5cHFVSKkz
          stance: supports
          locator: CBDB:222279
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_w8Xyc7YJqH7Ab5cHFVSKkz
            source_type: api_record
            title: 中国历代人物传记资料库：王紹績（CBDB 222279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222279&o=json
            external_identifier: CBDB:222279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sz5kDb259ARCrCou5YFRhj
        subject_person_id: p_G1ykgCfKWZQhXAt9QemUyd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹績
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aS62JvP9FN8rv85MW9c4Jc
          claim_id: c_Sz5kDb259ARCrCou5YFRhj
          source_id: s_w8Xyc7YJqH7Ab5cHFVSKkz
          stance: supports
          locator: CBDB:222279
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_M-cZ51l6uBFUgzpuqDsG-7
        subject_person_id: p_MzjvisS65eTZTH4c6EA4mL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G1ykgCfKWZQhXAt9QemUyd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2LL8iOdba-CB1degjK1L03
          claim_id: c_M-cZ51l6uBFUgzpuqDsG-7
          source_id: s_0_h0FChb9_0eJrFbV_xotM
          stance: supports
          locator: CBDB：兄弟 王紹先（206726）之父／母 王昌功
          quotation: null
          interpretation_note: 由兄弟关系推断：王紹績 与 王紹先 为同胞（CBDB 记「兄」），王紹先 之父／母即 王紹績 之父／母。
          source:
            id: s_0_h0FChb9_0eJrFbV_xotM
            source_type: api_record
            title: 中国历代人物传记资料库：王紹績（CBDB 222279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222279&o=json
            external_identifier: CBDB:222279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MzjvisS65eTZTH4c6EA4mL
        status: active
        display_name: 王昌功
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_eVWhAfvyXy1phHIT4cDwaw
        subject_person_id: p_G1ykgCfKWZQhXAt9QemUyd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_stumq3LKUX83aY7FDSYoQ9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qCjdklvK-Hw2FC0Yc1_myL
          claim_id: c_eVWhAfvyXy1phHIT4cDwaw
          source_id: s_0_h0FChb9_0eJrFbV_xotM
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206726 王紹先）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0_h0FChb9_0eJrFbV_xotM
            source_type: api_record
            title: 中国历代人物传记资料库：王紹績（CBDB 222279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222279&o=json
            external_identifier: CBDB:222279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_stumq3LKUX83aY7FDSYoQ9
        status: active
        display_name: 王紹先
        merged_into_person_id: null
---

# 王紹績

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王紹績，明人物。萬曆十一年進士，籍贯咸寧。（中国历代人物传记资料库 CBDB 222279） | accepted |
| name.primary | 王紹績 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MzjvisS65eTZTH4c6EA4mL | 王昌功 | accepted |
| other | p_stumq3LKUX83aY7FDSYoQ9 | 王紹先 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹績（CBDB 222279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222279&o=json)
