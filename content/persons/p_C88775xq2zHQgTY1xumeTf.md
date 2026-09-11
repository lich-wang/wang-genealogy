---
schema: wang-person/v1
id: p_C88775xq2zHQgTY1xumeTf
status: active
merged_into: null
display_name: 王寶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MfLYHxXFsXLss6n3YbFaGK
        subject_person_id: p_C88775xq2zHQgTY1xumeTf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CieSNWGoD5sgA4qPoMfdcB
          claim_id: c_MfLYHxXFsXLss6n3YbFaGK
          source_id: s_t1U6hwsteumkK77QA2ZT1d
          stance: supports
          locator: CBDB:149754
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（149754）
          source: &a1
            id: s_t1U6hwsteumkK77QA2ZT1d
            source_type: api_record
            title: 中国历代人物传记资料库：王寶（CBDB 149754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149754&o=json
            external_identifier: CBDB:149754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.797Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5j9q29nTSE1nQ9RMB82n6H
        subject_person_id: p_C88775xq2zHQgTY1xumeTf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶，唐人物。籍贯北市，曾任王府文學。（中国历代人物传记资料库 CBDB 149754）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OnSnKwO2yGSEIQ6hDpD8pm
          claim_id: c_5j9q29nTSE1nQ9RMB82n6H
          source_id: s_t1U6hwsteumkK77QA2ZT1d
          stance: supports
          locator: CBDB:149754
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_J9WOUrYnJdmDmIRK0qQw5e
        subject_person_id: p_C88775xq2zHQgTY1xumeTf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_szEBL83gaSG1HYz3165Upo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VxUF4SnXFlVkeEITbNcjch
          claim_id: c_J9WOUrYnJdmDmIRK0qQw5e
          source_id: s_t1U6hwsteumkK77QA2ZT1d
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yanzai 5：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_szEBL83gaSG1HYz3165Upo
        status: active
        display_name: 王乾福
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶 | accepted |
| bio.summary | 王寶，唐人物。籍贯北市，曾任王府文學。（中国历代人物传记资料库 CBDB 149754） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_szEBL83gaSG1HYz3165Upo | 王乾福 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寶（CBDB 149754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149754&o=json)
