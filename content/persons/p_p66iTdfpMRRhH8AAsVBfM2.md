---
schema: wang-person/v1
id: p_p66iTdfpMRRhH8AAsVBfM2
status: active
merged_into: null
display_name: 王成德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cv5NjxD3iWyXPS6dQf6f6T
        subject_person_id: p_p66iTdfpMRRhH8AAsVBfM2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sBPiq7YtKpLqcE5VX3SJ7E
          claim_id: c_Cv5NjxD3iWyXPS6dQf6f6T
          source_id: s_6vUQczhHGwiSGxsYEqV5nV
          stance: supports
          locator: CBDB:343378
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343378）
          source: &a1
            id: s_6vUQczhHGwiSGxsYEqV5nV
            source_type: api_record
            title: 中国历代人物传记资料库：王成德（CBDB 343378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343378&o=json
            external_identifier: CBDB:343378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.326Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dY545R7EvF1bAPD5SGVmti
        subject_person_id: p_p66iTdfpMRRhH8AAsVBfM2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成德，明人物。明清進士進士，籍贯臨清，入仕進士。（中国历代人物传记资料库 CBDB 343378）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZBHM4fc3f6NwVFd6hPaxgt
          claim_id: c_dY545R7EvF1bAPD5SGVmti
          source_id: s_6vUQczhHGwiSGxsYEqV5nV
          stance: supports
          locator: CBDB:343378
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

# 王成德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成德 | accepted |
| bio.summary | 王成德，明人物。明清進士進士，籍贯臨清，入仕進士。（中国历代人物传记资料库 CBDB 343378） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王成德（CBDB 343378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343378&o=json)
