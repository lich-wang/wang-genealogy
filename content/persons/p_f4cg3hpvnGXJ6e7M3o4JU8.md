---
schema: wang-person/v1
id: p_f4cg3hpvnGXJ6e7M3o4JU8
status: active
merged_into: null
display_name: 王𠠹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cpsPKcyXqhCW5LCgjV7dwv
        subject_person_id: p_f4cg3hpvnGXJ6e7M3o4JU8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𠠹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WbpHsveyhJxnBxgDaghtCS
          claim_id: c_cpsPKcyXqhCW5LCgjV7dwv
          source_id: s_bi28NPpqXtAUs3XnhPYcMw
          stance: supports
          locator: CBDB:578613
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（578613）
          source: &a1
            id: s_bi28NPpqXtAUs3XnhPYcMw
            source_type: api_record
            title: 中国历代人物传记资料库：王𠠹（CBDB 578613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578613&o=json
            external_identifier: CBDB:578613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.732Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mMdNcvoCUFbKP7MPHuAftm
        subject_person_id: p_f4cg3hpvnGXJ6e7M3o4JU8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𠠹，清人物。籍贯長安，入仕副貢生。（中国历代人物传记资料库 CBDB 578613）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4utkzlyZO2ooCmp2TRXwi5
          claim_id: c_mMdNcvoCUFbKP7MPHuAftm
          source_id: s_bi28NPpqXtAUs3XnhPYcMw
          stance: supports
          locator: CBDB:578613
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
  ancestors:
    - claim:
        id: c_QehhlnSnx8MJa72VCr9weJ
        subject_person_id: p_XBdYGhhY6KYRHheCG3YBMX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_f4cg3hpvnGXJ6e7M3o4JU8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GrMjcj0MYTLRfvX8-ULqWE
          claim_id: c_QehhlnSnx8MJa72VCr9weJ
          source_id: s_bi28NPpqXtAUs3XnhPYcMw
          stance: supports
          locator: 長安縣志，488：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XBdYGhhY6KYRHheCG3YBMX
        status: active
        display_name: 王平
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王𠠹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王𠠹 | accepted |
| bio.summary | 王𠠹，清人物。籍贯長安，入仕副貢生。（中国历代人物传记资料库 CBDB 578613） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_XBdYGhhY6KYRHheCG3YBMX | 王平 | accepted |

## 外部来源

- [中国历代人物传记资料库：王𠠹（CBDB 578613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578613&o=json)
