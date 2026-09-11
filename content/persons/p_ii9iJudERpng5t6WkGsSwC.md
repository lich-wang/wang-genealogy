---
schema: wang-person/v1
id: p_ii9iJudERpng5t6WkGsSwC
status: active
merged_into: null
display_name: 王玭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_otULmtKi7xKcwdZf7TLDvy
        subject_person_id: p_ii9iJudERpng5t6WkGsSwC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hygG9cAbHhE3aBLsnf5DTR
          claim_id: c_otULmtKi7xKcwdZf7TLDvy
          source_id: s_AqcsU8NuzVNMTQ1Ajcej8G
          stance: supports
          locator: CBDB:341859
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341859）
          source: &a1
            id: s_AqcsU8NuzVNMTQ1Ajcej8G
            source_type: api_record
            title: 中国历代人物传记资料库：王玭（CBDB 341859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341859&o=json
            external_identifier: CBDB:341859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.733Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sy4gkYL1kt7JfX9an6m2iJ
        subject_person_id: p_ii9iJudERpng5t6WkGsSwC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玭，明人物。明清進士進士，籍贯嘉定，入仕進士。（中国历代人物传记资料库 CBDB 341859）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QDi5Dmr8RY0_0mHgduKEqP
          claim_id: c_sy4gkYL1kt7JfX9an6m2iJ
          source_id: s_AqcsU8NuzVNMTQ1Ajcej8G
          stance: supports
          locator: CBDB:341859
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

# 王玭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玭 | accepted |
| bio.summary | 王玭，明人物。明清進士進士，籍贯嘉定，入仕進士。（中国历代人物传记资料库 CBDB 341859） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玭（CBDB 341859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341859&o=json)
