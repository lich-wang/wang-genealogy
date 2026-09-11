---
schema: wang-person/v1
id: p_wNUAExUMWJWXbHkZtZE1MW
status: active
merged_into: null
display_name: 王周南
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HGinLpcMxYhwQzKYaxx6vb
        subject_person_id: p_wNUAExUMWJWXbHkZtZE1MW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王周南
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FUJfsQemJXjsFGCqDQrQia
          claim_id: c_HGinLpcMxYhwQzKYaxx6vb
          source_id: s_4rqr4qRtUPR5JU2tQmdamT
          stance: supports
          locator: CBDB:556794
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556794）
          source: &a1
            id: s_4rqr4qRtUPR5JU2tQmdamT
            source_type: api_record
            title: 中国历代人物传记资料库：王周南（CBDB 556794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556794&o=json
            external_identifier: CBDB:556794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.658Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RodTXyDEWnd6NhKzZmCuEw
        subject_person_id: p_wNUAExUMWJWXbHkZtZE1MW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王周南，清人物。籍贯唐縣。（中国历代人物传记资料库 CBDB 556794）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Bcnm8zOACeu8unwCUzVSRm
          claim_id: c_RodTXyDEWnd6NhKzZmCuEw
          source_id: s_4rqr4qRtUPR5JU2tQmdamT
          stance: supports
          locator: CBDB:556794
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6tDs0hGD5vaQTV6oioqpJb
        subject_person_id: p_MFQPEZjYLNvDyKX6WxZzHE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wNUAExUMWJWXbHkZtZE1MW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qvd7BJpLIzvitxbccs9ZeG
          claim_id: c_6tDs0hGD5vaQTV6oioqpJb
          source_id: s_X8xQFTYPJdtWWMby6UzhY6
          stance: supports
          locator: 南陽府志，lgid=878731：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_X8xQFTYPJdtWWMby6UzhY6
            source_type: api_record
            title: 中国历代人物传记资料库：王楷（CBDB 556792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556792&o=json
            external_identifier: CBDB:556792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.658Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MFQPEZjYLNvDyKX6WxZzHE
        status: active
        display_name: 王楷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王周南

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王周南 | accepted |
| bio.summary | 王周南，清人物。籍贯唐縣。（中国历代人物传记资料库 CBDB 556794） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MFQPEZjYLNvDyKX6WxZzHE | 王楷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王楷（CBDB 556792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556792&o=json)
- [中国历代人物传记资料库：王周南（CBDB 556794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556794&o=json)
