---
schema: wang-person/v1
id: p_T8eouqwAUPFRpMP85uAkrf
status: active
merged_into: null
display_name: 王清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p83NPtVMHYtofqJsHeGJV6
        subject_person_id: p_T8eouqwAUPFRpMP85uAkrf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8urc3aaPuN7jgcxs6xFpAg
          claim_id: c_p83NPtVMHYtofqJsHeGJV6
          source_id: s_FejiiqHqPJfSuDjc1JActD
          stance: supports
          locator: CBDB:342751
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342751）
          source: &a1
            id: s_FejiiqHqPJfSuDjc1JActD
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 342751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342751&o=json
            external_identifier: CBDB:342751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.051Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uRAdR98gmFWEMP3dN5D1me
        subject_person_id: p_T8eouqwAUPFRpMP85uAkrf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清，清人物。明清進士進士，籍贯海豐，入仕進士，曾任會試考官、內閣學士、同考官。（中国历代人物传记资料库 CBDB 342751）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Nm65ka5YZItxB8v_fZ38Bp
          claim_id: c_uRAdR98gmFWEMP3dN5D1me
          source_id: s_FejiiqHqPJfSuDjc1JActD
          stance: supports
          locator: CBDB:342751
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

# 王清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清 | accepted |
| bio.summary | 王清，清人物。明清進士進士，籍贯海豐，入仕進士，曾任會試考官、內閣學士、同考官。（中国历代人物传记资料库 CBDB 342751） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 342751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342751&o=json)
