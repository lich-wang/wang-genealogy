---
schema: wang-person/v1
id: p_qGJVFZkuRKHVFh7GLw4ymy
status: active
merged_into: null
display_name: 王溥霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3vBtoENqBbxJbAdD16GTxV
        subject_person_id: p_qGJVFZkuRKHVFh7GLw4ymy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uR1vEFAh1JFnt3P8hM6FQx
          claim_id: c_3vBtoENqBbxJbAdD16GTxV
          source_id: s_dsjHxXtGEeDM59L5aNW3V8
          stance: supports
          locator: CBDB:560227
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（560227）
          source: &a1
            id: s_dsjHxXtGEeDM59L5aNW3V8
            source_type: api_record
            title: 中国历代人物传记资料库：王溥霖（CBDB 560227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560227&o=json
            external_identifier: CBDB:560227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.550Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jAqBHUECL4bZc6i6rqRMQj
        subject_person_id: p_qGJVFZkuRKHVFh7GLw4ymy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥霖，明人物。籍贯南康。（中国历代人物传记资料库 CBDB 560227）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0Q-93G_zCZNkCbOguNiu5_
          claim_id: c_jAqBHUECL4bZc6i6rqRMQj
          source_id: s_dsjHxXtGEeDM59L5aNW3V8
          stance: supports
          locator: CBDB:560227
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王溥霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥霖 | accepted |
| bio.summary | 王溥霖，明人物。籍贯南康。（中国历代人物传记资料库 CBDB 560227） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王溥霖（CBDB 560227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560227&o=json)
