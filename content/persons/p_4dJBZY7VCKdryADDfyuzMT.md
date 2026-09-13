---
schema: wang-person/v1
id: p_4dJBZY7VCKdryADDfyuzMT
status: active
merged_into: null
display_name: 王命卿
cbdb_id: 343762
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_39VQneyEj4RDQ1X8AHTf2k
        subject_person_id: p_4dJBZY7VCKdryADDfyuzMT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命卿，明人物。明清進士進士，籍贯番禺，入仕進士。（中国历代人物传记资料库 CBDB 343762）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_81wuhDKKWuoqCP5fu02w9r
          claim_id: c_39VQneyEj4RDQ1X8AHTf2k
          source_id: s_itCSP44FE3yfWMBn5gFcfW
          stance: supports
          locator: CBDB:343762
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_itCSP44FE3yfWMBn5gFcfW
            source_type: api_record
            title: 中国历代人物传记资料库：王命卿（CBDB 343762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343762&o=json
            external_identifier: CBDB:343762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:19.877Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XEYCPqHd2SMhDQXLe8HF4i
        subject_person_id: p_4dJBZY7VCKdryADDfyuzMT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YEtFpd9FSkmWvqdQNY1UaM
          claim_id: c_XEYCPqHd2SMhDQXLe8HF4i
          source_id: s_itCSP44FE3yfWMBn5gFcfW
          stance: supports
          locator: CBDB:343762
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4701-4800）｜历史性依据：CBDB 朝代 = 明
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

# 王命卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王命卿，明人物。明清進士進士，籍贯番禺，入仕進士。（中国历代人物传记资料库 CBDB 343762） | accepted |
| name.primary | 王命卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王命卿（CBDB 343762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343762&o=json)
