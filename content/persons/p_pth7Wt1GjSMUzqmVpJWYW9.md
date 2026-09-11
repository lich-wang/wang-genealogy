---
schema: wang-person/v1
id: p_pth7Wt1GjSMUzqmVpJWYW9
status: active
merged_into: null
display_name: 王嗣疇
cbdb_id: 522350
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J6SfVXqAM22sZ7LAbzMYX3
        subject_person_id: p_pth7Wt1GjSMUzqmVpJWYW9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣疇，清人物。中国历代人物传记资料库（CBDB）以人物编号 522350 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_wf7tgvXDhYVaNTxZEezK82
          claim_id: c_J6SfVXqAM22sZ7LAbzMYX3
          source_id: s_FcBoVbKrfju6hXnqKjBTJ4
          stance: supports
          locator: CBDB:522350
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_FcBoVbKrfju6hXnqKjBTJ4
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣疇（CBDB 522350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522350&o=json
            external_identifier: CBDB:522350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_z93Pb3PjQ7kwrYcuHFLFzu
        subject_person_id: p_pth7Wt1GjSMUzqmVpJWYW9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣疇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bMVuctFWooHSYgL7rGnL32
          claim_id: c_z93Pb3PjQ7kwrYcuHFLFzu
          source_id: s_FcBoVbKrfju6hXnqKjBTJ4
          stance: supports
          locator: CBDB:522350
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_FcBoVbKrfju6hXnqKjBTJ4
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣疇（CBDB 522350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522350&o=json
            external_identifier: CBDB:522350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xHWfiFtaM7ytuF7yvkA1tP
        subject_person_id: p_ZyHjRaen1EDymdU7e3vR6e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pth7Wt1GjSMUzqmVpJWYW9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oOm7RnP9sl_uAMj_waF-5o
          claim_id: c_xHWfiFtaM7ytuF7yvkA1tP
          source_id: s_hmRPxUWfAta8p1JV8P6aso
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9286：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hmRPxUWfAta8p1JV8P6aso
            source_type: api_record
            title: 中国历代人物传记资料库：王鳴盛（CBDB 29898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29898&o=json
            external_identifier: CBDB:29898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.011Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZyHjRaen1EDymdU7e3vR6e
        status: active
        display_name: 王鳴盛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嗣疇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嗣疇，清人物。中国历代人物传记资料库（CBDB）以人物编号 522350 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王嗣疇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZyHjRaen1EDymdU7e3vR6e | 王鳴盛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳴盛（CBDB 29898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29898&o=json)
- [中国历代人物传记资料库：王嗣疇（CBDB 522350）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522350&o=json)
