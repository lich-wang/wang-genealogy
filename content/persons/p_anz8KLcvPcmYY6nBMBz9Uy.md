---
schema: wang-person/v1
id: p_anz8KLcvPcmYY6nBMBz9Uy
status: active
merged_into: null
display_name: 王燇
cbdb_id: 232094
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Nk9T55iPbxZa442sAu7wA3
        subject_person_id: p_anz8KLcvPcmYY6nBMBz9Uy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燇，明人物。中国历代人物传记资料库（CBDB）以人物编号 232094 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_G6Dvdz4zhsvEBc_CNUcygp
          claim_id: c_Nk9T55iPbxZa442sAu7wA3
          source_id: s_Hu5TCjqNY7MJm7EVg6Pns5
          stance: supports
          locator: CBDB:232094
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_Hu5TCjqNY7MJm7EVg6Pns5
            source_type: api_record
            title: 中国历代人物传记资料库：王燇（CBDB 232094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232094&o=json
            external_identifier: CBDB:232094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FGnY3XdkEz9SpKvQvB6W5d
        subject_person_id: p_anz8KLcvPcmYY6nBMBz9Uy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9XFBoG45m7yumRXQq5LAru
          claim_id: c_FGnY3XdkEz9SpKvQvB6W5d
          source_id: s_Hu5TCjqNY7MJm7EVg6Pns5
          stance: supports
          locator: CBDB:232094
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_Hu5TCjqNY7MJm7EVg6Pns5
            source_type: api_record
            title: 中国历代人物传记资料库：王燇（CBDB 232094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232094&o=json
            external_identifier: CBDB:232094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-IOlXSCseQhPNcEmV12SCM
        subject_person_id: p_anz8KLcvPcmYY6nBMBz9Uy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vZskfyWDenRTEAgQsuQKb4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wyyx-0pulanpVw62BSPmJI
          claim_id: c_-IOlXSCseQhPNcEmV12SCM
          source_id: s_3PdmacMQMiX3FXHx2VZoyR
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百五十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3PdmacMQMiX3FXHx2VZoyR
            source_type: api_record
            title: 中国历代人物传记资料库：王福徵（CBDB 207439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207439&o=json
            external_identifier: CBDB:207439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vZskfyWDenRTEAgQsuQKb4
        status: active
        display_name: 王福徵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王燇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王燇，明人物。中国历代人物传记资料库（CBDB）以人物编号 232094 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王燇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_vZskfyWDenRTEAgQsuQKb4 | 王福徵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福徵（CBDB 207439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207439&o=json)
- [中国历代人物传记资料库：王燇（CBDB 232094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232094&o=json)
