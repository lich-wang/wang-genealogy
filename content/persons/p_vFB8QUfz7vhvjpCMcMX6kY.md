---
schema: wang-person/v1
id: p_vFB8QUfz7vhvjpCMcMX6kY
status: active
merged_into: null
display_name: 王采
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WVteZpLh9CKuf4XK5jtCdc
        subject_person_id: p_vFB8QUfz7vhvjpCMcMX6kY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王采
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y9Ed2F33nCwKDdA3gxZaan
          claim_id: c_WVteZpLh9CKuf4XK5jtCdc
          source_id: s_HLNprQwbf8qCzEuqhbCVjT
          stance: supports
          locator: CBDB:342121
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342121）
          source: &a1
            id: s_HLNprQwbf8qCzEuqhbCVjT
            source_type: api_record
            title: 中国历代人物传记资料库：王采（CBDB 342121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342121&o=json
            external_identifier: CBDB:342121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TB13rqQCd89n6GQ4iXHDTP
        subject_person_id: p_vFB8QUfz7vhvjpCMcMX6kY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王采，明人物。明清進士進士，籍贯澤州，入仕進士。（中国历代人物传记资料库 CBDB 342121）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SF1R1AwEWHxtnJZ-UmWJbZ
          claim_id: c_TB13rqQCd89n6GQ4iXHDTP
          source_id: s_HLNprQwbf8qCzEuqhbCVjT
          stance: supports
          locator: CBDB:342121
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

# 王采

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王采 | accepted |
| bio.summary | 王采，明人物。明清進士進士，籍贯澤州，入仕進士。（中国历代人物传记资料库 CBDB 342121） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王采（CBDB 342121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342121&o=json)
