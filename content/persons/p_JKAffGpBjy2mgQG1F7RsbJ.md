---
schema: wang-person/v1
id: p_JKAffGpBjy2mgQG1F7RsbJ
status: active
merged_into: null
display_name: 王怡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8sAPVZHr71sscZwp29LvkH
        subject_person_id: p_JKAffGpBjy2mgQG1F7RsbJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zHPaMn6Gy698FBTMRzYh27
          claim_id: c_8sAPVZHr71sscZwp29LvkH
          source_id: s_x1h5svkF8M38BNZqD6ygEV
          stance: supports
          locator: CBDB:380206
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（380206）
          source: &a1
            id: s_x1h5svkF8M38BNZqD6ygEV
            source_type: api_record
            title: 中国历代人物传记资料库：王怡（CBDB 380206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380206&o=json
            external_identifier: CBDB:380206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.716Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FtR6KQMg9Bz4TXTjtTHK4Y
        subject_person_id: p_JKAffGpBjy2mgQG1F7RsbJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怡，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380206）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_furntX4pQ2UgBJyv7arvxE
          claim_id: c_FtR6KQMg9Bz4TXTjtTHK4Y
          source_id: s_x1h5svkF8M38BNZqD6ygEV
          stance: supports
          locator: CBDB:380206
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

# 王怡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王怡 | accepted |
| bio.summary | 王怡，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380206） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王怡（CBDB 380206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380206&o=json)
