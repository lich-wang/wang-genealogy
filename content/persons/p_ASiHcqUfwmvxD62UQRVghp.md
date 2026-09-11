---
schema: wang-person/v1
id: p_ASiHcqUfwmvxD62UQRVghp
status: active
merged_into: null
display_name: 王通甫
cbdb_id: 239469
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JB5D3dAmyk5iHFwXr5FQuq
        subject_person_id: p_ASiHcqUfwmvxD62UQRVghp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通甫，明人物。中国历代人物传记资料库（CBDB）以人物编号 239469 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_KNoWloLk-_9Sr4fEgNXKZU
          claim_id: c_JB5D3dAmyk5iHFwXr5FQuq
          source_id: s_5noEhGF9vhYdWLm388h2YG
          stance: supports
          locator: CBDB:239469
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_5noEhGF9vhYdWLm388h2YG
            source_type: api_record
            title: 中国历代人物传记资料库：王通甫（CBDB 239469）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239469&o=json
            external_identifier: CBDB:239469
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lq8sP7MSs9KMdsqjFKCXTJ
        subject_person_id: p_ASiHcqUfwmvxD62UQRVghp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fS6JAaSnJW5DdTPCvV1CHK
          claim_id: c_Lq8sP7MSs9KMdsqjFKCXTJ
          source_id: s_5noEhGF9vhYdWLm388h2YG
          stance: supports
          locator: CBDB:239469
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_5noEhGF9vhYdWLm388h2YG
            source_type: api_record
            title: 中国历代人物传记资料库：王通甫（CBDB 239469）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239469&o=json
            external_identifier: CBDB:239469
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_AUnQ0uPqzvs6pwyi7YdXOZ
        subject_person_id: p_ASiHcqUfwmvxD62UQRVghp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_a2MgxrEcSzhbMSTAx75fb8
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_moun9_DIKe6GvFOSgTgXhX
          claim_id: c_AUnQ0uPqzvs6pwyi7YdXOZ
          source_id: s_7jwQZDGBhmgWHqs6bzeeYj
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7jwQZDGBhmgWHqs6bzeeYj
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 126766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126766&o=json
            external_identifier: CBDB:126766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.187Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_a2MgxrEcSzhbMSTAx75fb8
        status: active
        display_name: 王鉉
        merged_into_person_id: null
  other: []
---

# 王通甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王通甫，明人物。中国历代人物传记资料库（CBDB）以人物编号 239469 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王通甫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_a2MgxrEcSzhbMSTAx75fb8 | 王鉉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王通甫（CBDB 239469）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239469&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 126766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126766&o=json)
