---
schema: wang-person/v1
id: p_b4UdtbQ2DqFm5BWNEf9uJj
status: active
merged_into: null
display_name: 王執璋
cbdb_id: 330527
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u85m19SJ9Vrtyo39GLur3x
        subject_person_id: p_b4UdtbQ2DqFm5BWNEf9uJj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王執璋，明人物。嘉靖四十四年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 330527）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_RwINHZpIHq3-lWuFZx0Z2d
          claim_id: c_u85m19SJ9Vrtyo39GLur3x
          source_id: s_ZKRyodQwhn4DBzRqmQ9tP6
          stance: supports
          locator: CBDB:330527
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZKRyodQwhn4DBzRqmQ9tP6
            source_type: api_record
            title: 中国历代人物传记资料库：王執璋（CBDB 330527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330527&o=json
            external_identifier: CBDB:330527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yws568DP1LNoNXzv3PWN8V
        subject_person_id: p_b4UdtbQ2DqFm5BWNEf9uJj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王執璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_59bC1hScNESVj6g1n8z6dB
          claim_id: c_yws568DP1LNoNXzv3PWN8V
          source_id: s_ZKRyodQwhn4DBzRqmQ9tP6
          stance: supports
          locator: CBDB:330527
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
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

# 王執璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王執璋，明人物。嘉靖四十四年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 330527） | accepted |
| name.primary | 王執璋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王執璋（CBDB 330527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330527&o=json)
