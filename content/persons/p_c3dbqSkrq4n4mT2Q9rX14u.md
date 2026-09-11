---
schema: wang-person/v1
id: p_c3dbqSkrq4n4mT2Q9rX14u
status: active
merged_into: null
display_name: 王然
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cYCws8ihCEaRbFkNRoBCLi
        subject_person_id: p_c3dbqSkrq4n4mT2Q9rX14u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王然
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5g9GKxjjyLLQB5DtsWnDsd
          claim_id: c_cYCws8ihCEaRbFkNRoBCLi
          source_id: s_gKg3ie7TUYcNUxxM97bym4
          stance: supports
          locator: CBDB:309652
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309652）
          source: &a1
            id: s_gKg3ie7TUYcNUxxM97bym4
            source_type: api_record
            title: 中国历代人物传记资料库：王然（CBDB 309652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309652&o=json
            external_identifier: CBDB:309652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r2m3FPjDkvGsPY4NKyaPU9
        subject_person_id: p_c3dbqSkrq4n4mT2Q9rX14u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王然，明人物。嘉靖二十六年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 309652）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B78o6noKJPIFE-tZXr5FSE
          claim_id: c_r2m3FPjDkvGsPY4NKyaPU9
          source_id: s_gKg3ie7TUYcNUxxM97bym4
          stance: supports
          locator: CBDB:309652
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

# 王然

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王然 | accepted |
| bio.summary | 王然，明人物。嘉靖二十六年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 309652） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王然（CBDB 309652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309652&o=json)
