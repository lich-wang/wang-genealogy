---
schema: wang-person/v1
id: p_Rd5KuPKo9AgSnV1MRD52bo
status: active
merged_into: null
display_name: 王敕
cbdb_id: 343404
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nM85uMT7bp7CS9kbYcEVoc
        subject_person_id: p_Rd5KuPKo9AgSnV1MRD52bo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敕，明人物。明清進士進士，籍贯歷城，入仕進士。（中国历代人物传记资料库 CBDB 343404）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_3qXtWbs0D9CGZMz3YbiaQT
          claim_id: c_nM85uMT7bp7CS9kbYcEVoc
          source_id: s_Gnrv1DzLHSjMZZF35YLG1T
          stance: supports
          locator: CBDB:343404
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Gnrv1DzLHSjMZZF35YLG1T
            source_type: api_record
            title: 中国历代人物传记资料库：王敕（CBDB 343404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343404&o=json
            external_identifier: CBDB:343404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:17.973Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nEbK3CPd7pK4Bd1JGBAzdC
        subject_person_id: p_Rd5KuPKo9AgSnV1MRD52bo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nsJBFMJbFgjHjj5eTMZiuC
          claim_id: c_nEbK3CPd7pK4Bd1JGBAzdC
          source_id: s_Gnrv1DzLHSjMZZF35YLG1T
          stance: supports
          locator: CBDB:343404
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4601-4700）｜历史性依据：CBDB 朝代 = 明
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

# 王敕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王敕，明人物。明清進士進士，籍贯歷城，入仕進士。（中国历代人物传记资料库 CBDB 343404） | accepted |
| name.primary | 王敕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敕（CBDB 343404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343404&o=json)
