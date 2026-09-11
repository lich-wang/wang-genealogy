---
schema: wang-person/v1
id: p_LnJ3Nr4YMiZKpG48tPtbYQ
status: active
merged_into: null
display_name: 王廷慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DDuqF8yLST5Up64f4vNNoc
        subject_person_id: p_LnJ3Nr4YMiZKpG48tPtbYQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J1RgRuQfQXPXpv4yiS4qZ1
          claim_id: c_DDuqF8yLST5Up64f4vNNoc
          source_id: s_nKMyLsVADbwU3P3q6z4vNT
          stance: supports
          locator: CBDB:637500
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637500）
          source: &a1
            id: s_nKMyLsVADbwU3P3q6z4vNT
            source_type: api_record
            title: 中国历代人物传记资料库：王廷慶（CBDB 637500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637500&o=json
            external_identifier: CBDB:637500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z3LLavWGAS1HzHKLTsJm5n
        subject_person_id: p_LnJ3Nr4YMiZKpG48tPtbYQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷慶，清人物。籍贯登州府，入仕進士，曾任教授。（中国历代人物传记资料库 CBDB 637500）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MP5Rzce9JKI-PtB5OGJW3v
          claim_id: c_z3LLavWGAS1HzHKLTsJm5n
          source_id: s_nKMyLsVADbwU3P3q6z4vNT
          stance: supports
          locator: CBDB:637500
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

# 王廷慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷慶 | accepted |
| bio.summary | 王廷慶，清人物。籍贯登州府，入仕進士，曾任教授。（中国历代人物传记资料库 CBDB 637500） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷慶（CBDB 637500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637500&o=json)
