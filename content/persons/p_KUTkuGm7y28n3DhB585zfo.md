---
schema: wang-person/v1
id: p_KUTkuGm7y28n3DhB585zfo
status: active
merged_into: null
display_name: 王德滋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q4XtFcBBLJzDVhcgV53arH
        subject_person_id: p_KUTkuGm7y28n3DhB585zfo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德滋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aKUZ8cCthY5vWFaCgZYkgk
          claim_id: c_Q4XtFcBBLJzDVhcgV53arH
          source_id: s_4jBS7T4BaqMAUde85JWKgc
          stance: supports
          locator: CBDB:574616
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574616）
          source: &a1
            id: s_4jBS7T4BaqMAUde85JWKgc
            source_type: api_record
            title: 中国历代人物传记资料库：王德滋（CBDB 574616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574616&o=json
            external_identifier: CBDB:574616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.682Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c9Ax7Fb28GZ33qoX1R1hqx
        subject_person_id: p_KUTkuGm7y28n3DhB585zfo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王德滋，清人物。籍贯安陸，入仕學校: 生員(庠生)，曾任知州。（中国历代人物传记资料库 CBDB 574616）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Nx-xdlmj8tVFXfQEhCZYnT
          claim_id: c_c9Ax7Fb28GZ33qoX1R1hqx
          source_id: s_4jBS7T4BaqMAUde85JWKgc
          stance: supports
          locator: CBDB:574616
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

# 王德滋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德滋 | accepted |
| bio.summary | 王德滋，清人物。籍贯安陸，入仕學校: 生員(庠生)，曾任知州。（中国历代人物传记资料库 CBDB 574616） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德滋（CBDB 574616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574616&o=json)
