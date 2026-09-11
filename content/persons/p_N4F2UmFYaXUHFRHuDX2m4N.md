---
schema: wang-person/v1
id: p_N4F2UmFYaXUHFRHuDX2m4N
status: active
merged_into: null
display_name: 王廷植
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qCiuUQdhJgRL9xD6JuCiar
        subject_person_id: p_N4F2UmFYaXUHFRHuDX2m4N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷植
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GrST5HYb83KPAX8zzqxD4f
          claim_id: c_qCiuUQdhJgRL9xD6JuCiar
          source_id: s_U7P7kRLJyQZ8JtXJgTCPes
          stance: supports
          locator: CBDB:637511
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637511）
          source: &a1
            id: s_U7P7kRLJyQZ8JtXJgTCPes
            source_type: api_record
            title: 中国历代人物传记资料库：王廷植（CBDB 637511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637511&o=json
            external_identifier: CBDB:637511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.343Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4jpQoHzFxj23SzWu3PrNTu
        subject_person_id: p_N4F2UmFYaXUHFRHuDX2m4N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷植，清人物。籍贯廬陵，入仕進士，曾任郎中、主事。（中国历代人物传记资料库 CBDB 637511）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K2Sujo-54JGvC_ysOSulLA
          claim_id: c_4jpQoHzFxj23SzWu3PrNTu
          source_id: s_U7P7kRLJyQZ8JtXJgTCPes
          stance: supports
          locator: CBDB:637511
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

# 王廷植

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷植 | accepted |
| bio.summary | 王廷植，清人物。籍贯廬陵，入仕進士，曾任郎中、主事。（中国历代人物传记资料库 CBDB 637511） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷植（CBDB 637511）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637511&o=json)
