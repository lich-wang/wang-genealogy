---
schema: wang-person/v1
id: p_yUzqviNoJXsLMPELJLBNQB
status: active
merged_into: null
display_name: 王昭素
cbdb_id: 37685
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yuBG8LD8xmpq8LBADJJ3ay
        subject_person_id: p_yUzqviNoJXsLMPELJLBNQB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭素，宋人物。中国历代人物传记资料库（CBDB）以人物编号 37685 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_MRhbc8RlFSIUXQJtbTxXFX
          claim_id: c_yuBG8LD8xmpq8LBADJJ3ay
          source_id: s_jUfiyf54KxBcejVukQGpXX
          stance: supports
          locator: CBDB:37685
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_jUfiyf54KxBcejVukQGpXX
            source_type: api_record
            title: 中国历代人物传记资料库：王昭素（CBDB 37685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37685&o=json
            external_identifier: CBDB:37685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7uqBszcEbqnpmEbPJFN59K
        subject_person_id: p_yUzqviNoJXsLMPELJLBNQB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Fg6hF9ykXidq1JW85w7aGY
          claim_id: c_7uqBszcEbqnpmEbPJFN59K
          source_id: s_jUfiyf54KxBcejVukQGpXX
          stance: supports
          locator: CBDB:37685
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1201-1300）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_jUfiyf54KxBcejVukQGpXX
            source_type: api_record
            title: 中国历代人物传记资料库：王昭素（CBDB 37685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37685&o=json
            external_identifier: CBDB:37685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OAoGPrXKeIKglpyLfTZpzY
        subject_person_id: p_yUzqviNoJXsLMPELJLBNQB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wHfrqfz22WN5KwU5HaW6zG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HcWGpMzivfDESSan8fFnPI
          claim_id: c_OAoGPrXKeIKglpyLfTZpzY
          source_id: s_pJhLDJVTDbYW6gguSz865r
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pJhLDJVTDbYW6gguSz865r
            source_type: api_record
            title: 中国历代人物传记资料库：王仁著（CBDB 38322）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38322&o=json
            external_identifier: CBDB:38322
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_wHfrqfz22WN5KwU5HaW6zG
        status: active
        display_name: 王仁著
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昭素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昭素，宋人物。中国历代人物传记资料库（CBDB）以人物编号 37685 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王昭素 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wHfrqfz22WN5KwU5HaW6zG | 王仁著 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁著（CBDB 38322）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38322&o=json)
- [中国历代人物传记资料库：王昭素（CBDB 37685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37685&o=json)
