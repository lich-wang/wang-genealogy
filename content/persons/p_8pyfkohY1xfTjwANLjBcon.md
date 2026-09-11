---
schema: wang-person/v1
id: p_8pyfkohY1xfTjwANLjBcon
status: active
merged_into: null
display_name: 王欽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T8LFi33HCyhjoiPvjLcgzr
        subject_person_id: p_8pyfkohY1xfTjwANLjBcon
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FtpnEP7ZwVNNw73Hv7s6f8
          claim_id: c_T8LFi33HCyhjoiPvjLcgzr
          source_id: s_5gVxXFH6oiBgFvgV3mgNEQ
          stance: supports
          locator: CBDB:451960
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（451960）
          source: &a1
            id: s_5gVxXFH6oiBgFvgV3mgNEQ
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 451960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=451960&o=json
            external_identifier: CBDB:451960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.305Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3Efm3Ytoi1LUYoZVEKP1WS
        subject_person_id: p_8pyfkohY1xfTjwANLjBcon
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽，明人物。入仕進士，曾任典史、知縣。（中国历代人物传记资料库 CBDB 451960）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pDYHbhhJ1f31jzyCobKh-y
          claim_id: c_3Efm3Ytoi1LUYoZVEKP1WS
          source_id: s_5gVxXFH6oiBgFvgV3mgNEQ
          stance: supports
          locator: CBDB:451960
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

# 王欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽 | accepted |
| bio.summary | 王欽，明人物。入仕進士，曾任典史、知縣。（中国历代人物传记资料库 CBDB 451960） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王欽（CBDB 451960）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=451960&o=json)
