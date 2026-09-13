---
schema: wang-person/v1
id: p_cUHFpK4uLF1JjUJFFBaYi4
status: active
merged_into: null
display_name: 王杉
cbdb_id: 274258
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fq71Wp7tHS7tgdnJ2wzw13
        subject_person_id: p_cUHFpK4uLF1JjUJFFBaYi4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杉，明人物。弘治十八年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 274258）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_u0Nmt0A96qOxdKSsbDF22q
          claim_id: c_fq71Wp7tHS7tgdnJ2wzw13
          source_id: s_D6yqKBSYzoKuA6V4aT8DgG
          stance: supports
          locator: CBDB:274258
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_D6yqKBSYzoKuA6V4aT8DgG
            source_type: api_record
            title: 中国历代人物传记资料库：王杉（CBDB 274258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274258&o=json
            external_identifier: CBDB:274258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zWHLxLauvXgT2zwi8wkJa5
        subject_person_id: p_cUHFpK4uLF1JjUJFFBaYi4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GHqnpkk6p6hm3PsePyCHc6
          claim_id: c_zWHLxLauvXgT2zwi8wkJa5
          source_id: s_D6yqKBSYzoKuA6V4aT8DgG
          stance: supports
          locator: CBDB:274258
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
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

# 王杉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王杉，明人物。弘治十八年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 274258） | accepted |
| name.primary | 王杉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王杉（CBDB 274258）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274258&o=json)
