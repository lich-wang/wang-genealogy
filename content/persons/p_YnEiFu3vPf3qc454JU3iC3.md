---
schema: wang-person/v1
id: p_YnEiFu3vPf3qc454JU3iC3
status: active
merged_into: null
display_name: 王廷賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XtpqWwhdM9bC8cGKYnCaLN
        subject_person_id: p_YnEiFu3vPf3qc454JU3iC3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1KWMEKJja3QWR1AgMqUjfv
          claim_id: c_XtpqWwhdM9bC8cGKYnCaLN
          source_id: s_9iMzSUazBq5oDziiTt3L73
          stance: supports
          locator: CBDB:341922
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341922）
          source: &a1
            id: s_9iMzSUazBq5oDziiTt3L73
            source_type: api_record
            title: 中国历代人物传记资料库：王廷賓（CBDB 341922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341922&o=json
            external_identifier: CBDB:341922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dm8KgnkhuKvBXtNp5MY4yu
        subject_person_id: p_YnEiFu3vPf3qc454JU3iC3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷賓，明人物。明清進士進士，籍贯澄城，入仕進士。（中国历代人物传记资料库 CBDB 341922）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JbxFQ8Of_zoe-B2b0UKcUE
          claim_id: c_dm8KgnkhuKvBXtNp5MY4yu
          source_id: s_9iMzSUazBq5oDziiTt3L73
          stance: supports
          locator: CBDB:341922
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

# 王廷賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷賓 | accepted |
| bio.summary | 王廷賓，明人物。明清進士進士，籍贯澄城，入仕進士。（中国历代人物传记资料库 CBDB 341922） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷賓（CBDB 341922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341922&o=json)
