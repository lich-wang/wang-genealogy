---
schema: wang-person/v1
id: p_LdvrUdWsW3HbSnggXgAxD3
status: active
merged_into: null
display_name: 王玹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7CG9MGrCp4B9o1nxi1pdjb
        subject_person_id: p_LdvrUdWsW3HbSnggXgAxD3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6EHTwB2whnP27GyBc36VZt
          claim_id: c_7CG9MGrCp4B9o1nxi1pdjb
          source_id: s_5ic67GW34JZAZ3oZ7V2LwA
          stance: supports
          locator: CBDB:457744
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（457744）
          source: &a1
            id: s_5ic67GW34JZAZ3oZ7V2LwA
            source_type: api_record
            title: 中国历代人物传记资料库：王玹（CBDB 457744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457744&o=json
            external_identifier: CBDB:457744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1vCtCYCx2ZyDsQCi46EZKR
        subject_person_id: p_LdvrUdWsW3HbSnggXgAxD3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玹，明人物。曾任教授。（中国历代人物传记资料库 CBDB 457744）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ap9VIqLvz6HdGsjKS9W4vd
          claim_id: c_1vCtCYCx2ZyDsQCi46EZKR
          source_id: s_5ic67GW34JZAZ3oZ7V2LwA
          stance: supports
          locator: CBDB:457744
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

# 王玹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玹 | accepted |
| bio.summary | 王玹，明人物。曾任教授。（中国历代人物传记资料库 CBDB 457744） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玹（CBDB 457744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457744&o=json)
