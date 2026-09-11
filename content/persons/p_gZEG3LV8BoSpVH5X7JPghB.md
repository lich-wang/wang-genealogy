---
schema: wang-person/v1
id: p_gZEG3LV8BoSpVH5X7JPghB
status: active
merged_into: null
display_name: 王崇獻
cbdb_id: 126689
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9VokJW5zKEGG4YsV6GEjWR
        subject_person_id: p_gZEG3LV8BoSpVH5X7JPghB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇獻，明人物。中国历代人物传记资料库（CBDB）以人物编号 126689 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_l3N8KpGVcl1nB86mMdjpGu
          claim_id: c_9VokJW5zKEGG4YsV6GEjWR
          source_id: s_MS7yU4QGLr6gtNGbAPtcdR
          stance: supports
          locator: CBDB:126689
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_MS7yU4QGLr6gtNGbAPtcdR
            source_type: api_record
            title: 中国历代人物传记资料库：王崇獻（CBDB 126689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126689&o=json
            external_identifier: CBDB:126689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_A2DuErwjZHoVcTNXMUwH1E
        subject_person_id: p_gZEG3LV8BoSpVH5X7JPghB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇獻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6ngUKsdzGtvJpZkXFi3ZsD
          claim_id: c_A2DuErwjZHoVcTNXMUwH1E
          source_id: s_MS7yU4QGLr6gtNGbAPtcdR
          stance: supports
          locator: CBDB:126689
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_MS7yU4QGLr6gtNGbAPtcdR
            source_type: api_record
            title: 中国历代人物传记资料库：王崇獻（CBDB 126689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126689&o=json
            external_identifier: CBDB:126689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ShpgqvRn2jpDmeoOwW8lmn
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gZEG3LV8BoSpVH5X7JPghB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HIPL68xmmUFYqYB6vX3jQG
          claim_id: c_ShpgqvRn2jpDmeoOwW8lmn
          source_id: s_Vys9dZU9Gy34qAcr5P9Ciw
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第二十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Vys9dZU9Gy34qAcr5P9Ciw
            source_type: api_record
            title: 中国历代人物传记资料库：王珣（CBDB 266132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266132&o=json
            external_identifier: CBDB:266132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.716Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7xPYAwpK8PS9R7QKy5varP
        status: active
        display_name: 王珣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_0_R2WdQ5of0MvdW42ZwkL-
        subject_person_id: p_DHkLaNrhXTyY2QbEp4wQXF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gZEG3LV8BoSpVH5X7JPghB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_drO1BnGtb3IoE5nSLTGcpe
          claim_id: c_0_R2WdQ5of0MvdW42ZwkL-
          source_id: s_h91pP7drCfPBv5PNUZEpMa
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第二十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_h91pP7drCfPBv5PNUZEpMa
            source_type: api_record
            title: 中国历代人物传记资料库：王導（CBDB 266130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266130&o=json
            external_identifier: CBDB:266130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.713Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DHkLaNrhXTyY2QbEp4wQXF
        status: active
        display_name: 王導
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王崇獻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王崇獻，明人物。中国历代人物传记资料库（CBDB）以人物编号 126689 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王崇獻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7xPYAwpK8PS9R7QKy5varP | 王珣 | accepted |
| ancestors | p_DHkLaNrhXTyY2QbEp4wQXF | 王導 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇獻（CBDB 126689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126689&o=json)
- [中国历代人物传记资料库：王導（CBDB 266130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266130&o=json)
- [中国历代人物传记资料库：王珣（CBDB 266132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266132&o=json)
