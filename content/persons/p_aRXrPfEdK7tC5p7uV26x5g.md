---
schema: wang-person/v1
id: p_aRXrPfEdK7tC5p7uV26x5g
status: active
merged_into: null
display_name: 王璣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KgpmS6PcCA1JDyBSAgDWZ6
        subject_person_id: p_aRXrPfEdK7tC5p7uV26x5g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qfwAmDF2u2DeerrG9xLHxB
          claim_id: c_KgpmS6PcCA1JDyBSAgDWZ6
          source_id: s_2kqSjBJQHaDwAFzPF8HV8C
          stance: supports
          locator: CBDB:341886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341886）
          source: &a1
            id: s_2kqSjBJQHaDwAFzPF8HV8C
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 341886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341886&o=json
            external_identifier: CBDB:341886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.751Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qQh2i8xC3P2AdBKLNVjTCi
        subject_person_id: p_aRXrPfEdK7tC5p7uV26x5g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璣，明人物。明清進士進士，籍贯開州，入仕進士。（中国历代人物传记资料库 CBDB 341886）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hz1BY51IH3L_6uQOmSGd-L
          claim_id: c_qQh2i8xC3P2AdBKLNVjTCi
          source_id: s_2kqSjBJQHaDwAFzPF8HV8C
          stance: supports
          locator: CBDB:341886
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

# 王璣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璣 | accepted |
| bio.summary | 王璣，明人物。明清進士進士，籍贯開州，入仕進士。（中国历代人物传记资料库 CBDB 341886） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璣（CBDB 341886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341886&o=json)
