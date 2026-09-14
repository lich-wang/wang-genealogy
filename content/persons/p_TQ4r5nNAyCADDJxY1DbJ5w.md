---
schema: wang-person/v1
id: p_TQ4r5nNAyCADDJxY1DbJ5w
status: active
merged_into: null
display_name: 王嘉節
cbdb_id: 304779
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rMHydMWCkGZGCDkCGCuj1v
        subject_person_id: p_TQ4r5nNAyCADDJxY1DbJ5w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉節，明人物。嘉靖二十年進士，籍贯鈞州。（中国历代人物传记资料库 CBDB 304779）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_xladdIJnndkl7mKL_0y2VZ
          claim_id: c_rMHydMWCkGZGCDkCGCuj1v
          source_id: s_gnHtFUB3AhPNXy3WziLkX2
          stance: supports
          locator: CBDB:304779
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gnHtFUB3AhPNXy3WziLkX2
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉節（CBDB 304779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304779&o=json
            external_identifier: CBDB:304779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GeCNRopF6Dv84YE4ZgtqGP
        subject_person_id: p_TQ4r5nNAyCADDJxY1DbJ5w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉節
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BZTBa4vgF747M1P8d6qm7J
          claim_id: c_GeCNRopF6Dv84YE4ZgtqGP
          source_id: s_gnHtFUB3AhPNXy3WziLkX2
          stance: supports
          locator: CBDB:304779
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cyIpeWXzZfH6DFk6efLM7w
        subject_person_id: p_Rh1K2iP8xhRWnRgvAy7R1F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TQ4r5nNAyCADDJxY1DbJ5w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HiGOz1KfzhnZMdXxv10kJ-
          claim_id: c_cyIpeWXzZfH6DFk6efLM7w
          source_id: s_sb_coMJHgf4Zot3nD2T3Wa
          stance: supports
          locator: CBDB：兄弟 王嘉孝（203440）之父／母 王時庸
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉節 与 王嘉孝 为同胞（CBDB 记「兄」），王嘉孝 之父／母即 王嘉節 之父／母。
          source:
            id: s_sb_coMJHgf4Zot3nD2T3Wa
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉節（CBDB 304779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304779&o=json
            external_identifier: CBDB:304779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Rh1K2iP8xhRWnRgvAy7R1F
        status: active
        display_name: 王時庸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_KJBkt0G5p9e2RKnCUdd-34
        subject_person_id: p_TQ4r5nNAyCADDJxY1DbJ5w
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_W4Uw5tx84WkFrLAeBu8JGu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wdfh4OwrtaWFvs_Wcqx6f7
          claim_id: c_KJBkt0G5p9e2RKnCUdd-34
          source_id: s_sb_coMJHgf4Zot3nD2T3Wa
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203440 王嘉孝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sb_coMJHgf4Zot3nD2T3Wa
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉節（CBDB 304779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304779&o=json
            external_identifier: CBDB:304779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W4Uw5tx84WkFrLAeBu8JGu
        status: active
        display_name: 王嘉孝
        merged_into_person_id: null
---

# 王嘉節

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嘉節，明人物。嘉靖二十年進士，籍贯鈞州。（中国历代人物传记资料库 CBDB 304779） | accepted |
| name.primary | 王嘉節 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Rh1K2iP8xhRWnRgvAy7R1F | 王時庸 | accepted |
| other | p_W4Uw5tx84WkFrLAeBu8JGu | 王嘉孝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉節（CBDB 304779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304779&o=json)
