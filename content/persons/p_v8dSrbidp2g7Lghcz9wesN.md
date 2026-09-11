---
schema: wang-person/v1
id: p_v8dSrbidp2g7Lghcz9wesN
status: active
merged_into: null
display_name: 王胡仁
cbdb_id: 163698
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KNJAgNZq9H1ZG34Ct3D3Ev
        subject_person_id: p_v8dSrbidp2g7Lghcz9wesN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胡仁，唐人物。中国历代人物传记资料库（CBDB）以人物编号 163698 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_sz7Xpcchhz_Cso-ZH6S0_F
          claim_id: c_KNJAgNZq9H1ZG34Ct3D3Ev
          source_id: s_JawqLZZBF4PPHjLTF2YWZd
          stance: supports
          locator: CBDB:163698
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_JawqLZZBF4PPHjLTF2YWZd
            source_type: api_record
            title: 中国历代人物传记资料库：王胡仁（CBDB 163698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163698&o=json
            external_identifier: CBDB:163698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MpGHkagLZh1VR1pg7XVfK5
        subject_person_id: p_v8dSrbidp2g7Lghcz9wesN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胡仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SW7xxPzKHK9q6EuoZGG7Kt
          claim_id: c_MpGHkagLZh1VR1pg7XVfK5
          source_id: s_JawqLZZBF4PPHjLTF2YWZd
          stance: supports
          locator: CBDB:163698
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_JawqLZZBF4PPHjLTF2YWZd
            source_type: api_record
            title: 中国历代人物传记资料库：王胡仁（CBDB 163698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163698&o=json
            external_identifier: CBDB:163698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_D0P1KDoeH0YGIJvMY_33y4
        subject_person_id: p_v8dSrbidp2g7Lghcz9wesN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cb2pzan14ZR1ECvrVUNese
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XTQJio8eDigS65zVnPIaUE
          claim_id: c_D0P1KDoeH0YGIJvMY_33y4
          source_id: s_mtoajfRU5iL74uCLWmM7bH
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan6：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mtoajfRU5iL74uCLWmM7bH
            source_type: api_record
            title: 中国历代人物传记资料库：王胡（CBDB 142838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142838&o=json
            external_identifier: CBDB:142838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.217Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cb2pzan14ZR1ECvrVUNese
        status: active
        display_name: 王胡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王胡仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王胡仁，唐人物。中国历代人物传记资料库（CBDB）以人物编号 163698 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王胡仁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cb2pzan14ZR1ECvrVUNese | 王胡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王胡（CBDB 142838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142838&o=json)
- [中国历代人物传记资料库：王胡仁（CBDB 163698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163698&o=json)
