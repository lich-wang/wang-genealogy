---
schema: wang-person/v1
id: p_4whdppUwRDQhMSPhYjRRva
status: active
merged_into: null
display_name: 王慎知
cbdb_id: 151489
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3f339vjJptvePLUjzBbcgm
        subject_person_id: p_4whdppUwRDQhMSPhYjRRva
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎知，唐人物。中国历代人物传记资料库（CBDB）以人物编号 151489 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_U-SKH2DqFyg70Ju6rA8hlm
          claim_id: c_3f339vjJptvePLUjzBbcgm
          source_id: s_RsAN84bmNsz4uYh362HfwA
          stance: supports
          locator: CBDB:151489
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_RsAN84bmNsz4uYh362HfwA
            source_type: api_record
            title: 中国历代人物传记资料库：王慎知（CBDB 151489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151489&o=json
            external_identifier: CBDB:151489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LxW68bA4D7KVZLjbAYXFMm
        subject_person_id: p_4whdppUwRDQhMSPhYjRRva
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎知
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_v9jyebZxPRks41Ts9HXs75
          claim_id: c_LxW68bA4D7KVZLjbAYXFMm
          source_id: s_RsAN84bmNsz4uYh362HfwA
          stance: supports
          locator: CBDB:151489
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_RsAN84bmNsz4uYh362HfwA
            source_type: api_record
            title: 中国历代人物传记资料库：王慎知（CBDB 151489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151489&o=json
            external_identifier: CBDB:151489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rhq1_pwJ18DDYQj4spjhp1
        subject_person_id: p_eqQL1ccr8qFyDd29v6B9ui
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4whdppUwRDQhMSPhYjRRva
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n33hfBFObIMhD_bE4ntE-F
          claim_id: c_rhq1_pwJ18DDYQj4spjhp1
          source_id: s_dKWFbw4nTEroGpFfAb4Bkd
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 105：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dKWFbw4nTEroGpFfAb4Bkd
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 140379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140379&o=json
            external_identifier: CBDB:140379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.499Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eqQL1ccr8qFyDd29v6B9ui
        status: active
        display_name: 王慶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慎知

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王慎知，唐人物。中国历代人物传记资料库（CBDB）以人物编号 151489 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王慎知 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eqQL1ccr8qFyDd29v6B9ui | 王慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶（CBDB 140379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140379&o=json)
- [中国历代人物传记资料库：王慎知（CBDB 151489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151489&o=json)
