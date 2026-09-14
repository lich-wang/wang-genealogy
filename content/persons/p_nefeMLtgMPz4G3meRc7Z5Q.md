---
schema: wang-person/v1
id: p_nefeMLtgMPz4G3meRc7Z5Q
status: active
merged_into: null
display_name: 王瓛
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jbx8KoHQSabpdAzz7T7LNz
        subject_person_id: p_nefeMLtgMPz4G3meRc7Z5Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uK7xpVXxYZQx6JFZ3M7EFL
          claim_id: c_jbx8KoHQSabpdAzz7T7LNz
          source_id: s_qwSc6bmPqL899TaQSVBL38
          stance: supports
          locator: CBDB:239747
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239747）
          source: &a1
            id: s_qwSc6bmPqL899TaQSVBL38
            source_type: api_record
            title: 中国历代人物传记资料库：王瓛（CBDB 239747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239747&o=json
            external_identifier: CBDB:239747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c5cNYrzNvR3WaDWg3Pn3Jo
        subject_person_id: p_nefeMLtgMPz4G3meRc7Z5Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓛，明人物。正统十年進士，籍贯屯留，曾任府知事。（中国历代人物传记资料库 CBDB 239747）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wnIvVqW30GpC3J6Vq3G2Qq
          claim_id: c_c5cNYrzNvR3WaDWg3Pn3Jo
          source_id: s_qwSc6bmPqL899TaQSVBL38
          stance: supports
          locator: CBDB:239747
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ykx-Trx3toUgmrlYzU-pgR
        subject_person_id: p_nefeMLtgMPz4G3meRc7Z5Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kFVLZcH5HhGCPzncqbfvAU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZH5buxZAuueWtAxWZQwCPU
          claim_id: c_ykx-Trx3toUgmrlYzU-pgR
          source_id: s_aqtLHn9baQNrzeFNcSJGxm
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第五十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aqtLHn9baQNrzeFNcSJGxm
            source_type: api_record
            title: 中国历代人物传记资料库：王紹（CBDB 208052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208052&o=json
            external_identifier: CBDB:208052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.940Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kFVLZcH5HhGCPzncqbfvAU
        status: active
        display_name: 王紹
        merged_into_person_id: null
    - claim:
        id: c_UvwaQ1mpuTJurIgc2bprv4
        subject_person_id: p_nefeMLtgMPz4G3meRc7Z5Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1Tt4aVX8zyaJZH9P96tGYP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8dwhO-R44pwfNynBZXyx9A
          claim_id: c_UvwaQ1mpuTJurIgc2bprv4
          source_id: s_UjYtWOwNzq1A-4FBJhqJ0n
          stance: supports
          locator: CBDB：兄弟 王紹（208052）之父／母 王瓛
          quotation: null
          interpretation_note: 由兄弟关系推断：王肅 与 王紹 为同胞（CBDB 记「弟」），王紹 之父／母即 王肅 之父／母。
          source:
            id: s_UjYtWOwNzq1A-4FBJhqJ0n
            source_type: api_record
            title: 中国历代人物传记资料库：王肅（CBDB 239750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239750&o=json
            external_identifier: CBDB:239750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1Tt4aVX8zyaJZH9P96tGYP
        status: active
        display_name: 王肅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瓛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓛 | accepted |
| bio.summary | 王瓛，明人物。正统十年進士，籍贯屯留，曾任府知事。（中国历代人物传记资料库 CBDB 239747） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kFVLZcH5HhGCPzncqbfvAU | 王紹 | accepted |
| children | p_1Tt4aVX8zyaJZH9P96tGYP | 王肅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓛（CBDB 239747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239747&o=json)
- [中国历代人物传记资料库：王紹（CBDB 208052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208052&o=json)
- [中国历代人物传记资料库：王肅（CBDB 239750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239750&o=json)
