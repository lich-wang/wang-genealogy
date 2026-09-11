---
schema: wang-person/v1
id: p_Q3nWKrtrk1fxAXUkvipx72
status: active
merged_into: null
display_name: 王殖
cbdb_id: 17886
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CpDrAXo5M3ZFPBAR59yTEn
        subject_person_id: p_Q3nWKrtrk1fxAXUkvipx72
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殖，宋人物。中国历代人物传记资料库（CBDB）以人物编号 17886 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_5dwp6eKs6yvZ9gsRXqAuTe
          claim_id: c_CpDrAXo5M3ZFPBAR59yTEn
          source_id: s_BLMETFnrJchZrhpBfWdJvP
          stance: supports
          locator: CBDB:17886
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_BLMETFnrJchZrhpBfWdJvP
            source_type: api_record
            title: 中国历代人物传记资料库：王殖（CBDB 17886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17886&o=json
            external_identifier: CBDB:17886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vPB4QZKNATNuW7t94MDGGr
        subject_person_id: p_Q3nWKrtrk1fxAXUkvipx72
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xynx6MVCkF4e7XPH79P5jL
          claim_id: c_vPB4QZKNATNuW7t94MDGGr
          source_id: s_BLMETFnrJchZrhpBfWdJvP
          stance: supports
          locator: CBDB:17886
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_BLMETFnrJchZrhpBfWdJvP
            source_type: api_record
            title: 中国历代人物传记资料库：王殖（CBDB 17886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17886&o=json
            external_identifier: CBDB:17886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EN5B7Na40Wh8DV8RfaqvOT
        subject_person_id: p_goJF8MJfNWY7M84o4rFghT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q3nWKrtrk1fxAXUkvipx72
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y7R0wINeVW0gT7eFwyWlWQ
          claim_id: c_EN5B7Na40Wh8DV8RfaqvOT
          source_id: s_VtgWLkpGQtAeU3kVJLsmjD
          stance: supports
          locator: 宋人傳記資料索引(電子版)，977：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VtgWLkpGQtAeU3kVJLsmjD
            source_type: api_record
            title: 中国历代人物传记资料库：王師約（CBDB 3973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3973&o=json
            external_identifier: CBDB:3973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_goJF8MJfNWY7M84o4rFghT
        status: active
        display_name: 王師約
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王殖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王殖，宋人物。中国历代人物传记资料库（CBDB）以人物编号 17886 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王殖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_goJF8MJfNWY7M84o4rFghT | 王師約 | accepted |

## 外部来源

- [中国历代人物传记资料库：王師約（CBDB 3973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3973&o=json)
- [中国历代人物传记资料库：王殖（CBDB 17886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17886&o=json)
