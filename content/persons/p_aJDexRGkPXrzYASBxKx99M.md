---
schema: wang-person/v1
id: p_aJDexRGkPXrzYASBxKx99M
status: active
merged_into: null
display_name: 王世初
cbdb_id: 526182
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F2gNkprWrGvsp583dpM49f
        subject_person_id: p_aJDexRGkPXrzYASBxKx99M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世初，明人物。中国历代人物传记资料库（CBDB）以人物编号 526182 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs__Kef2gvxqtO2ozdc1pvSET
          claim_id: c_F2gNkprWrGvsp583dpM49f
          source_id: s_8CVE9zDzyPUGHG5EGF6gFJ
          stance: supports
          locator: CBDB:526182
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_8CVE9zDzyPUGHG5EGF6gFJ
            source_type: api_record
            title: 中国历代人物传记资料库：王世初（CBDB 526182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526182&o=json
            external_identifier: CBDB:526182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iEyz3P9Rzzbx8Rw959XwZ1
        subject_person_id: p_aJDexRGkPXrzYASBxKx99M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世初
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AKVUKUDAsgYJcJpAbQDCzf
          claim_id: c_iEyz3P9Rzzbx8Rw959XwZ1
          source_id: s_8CVE9zDzyPUGHG5EGF6gFJ
          stance: supports
          locator: CBDB:526182
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_8CVE9zDzyPUGHG5EGF6gFJ
            source_type: api_record
            title: 中国历代人物传记资料库：王世初（CBDB 526182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526182&o=json
            external_identifier: CBDB:526182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Vk0aOYDm-MEeGEUoW4lrVw
        subject_person_id: p_LLGe2GmPfUs7BA3oMMA3HB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aJDexRGkPXrzYASBxKx99M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0QOZbTLORmhohlnR8As2Bw
          claim_id: c_Vk0aOYDm-MEeGEUoW4lrVw
          source_id: s_i47QWNYELrmp7NsSP8yrhj
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12018：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_i47QWNYELrmp7NsSP8yrhj
            source_type: api_record
            title: 中国历代人物传记资料库：王學夔（CBDB 68346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68346&o=json
            external_identifier: CBDB:68346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.069Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LLGe2GmPfUs7BA3oMMA3HB
        status: active
        display_name: 王學夔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世初

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世初，明人物。中国历代人物传记资料库（CBDB）以人物编号 526182 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王世初 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LLGe2GmPfUs7BA3oMMA3HB | 王學夔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世初（CBDB 526182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526182&o=json)
- [中国历代人物传记资料库：王學夔（CBDB 68346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68346&o=json)
