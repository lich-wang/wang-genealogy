---
schema: wang-person/v1
id: p_DBR449nrckE1GSQfK5x9ms
status: active
merged_into: null
display_name: 王明宰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6rw3DqEX9AwmcBTNwQatyN
        subject_person_id: p_DBR449nrckE1GSQfK5x9ms
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明宰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ikB1ciKbUnZDRB8ycCZb8w
          claim_id: c_6rw3DqEX9AwmcBTNwQatyN
          source_id: s_KnP4NYn6GP3WRyYS3CVKVB
          stance: supports
          locator: CBDB:561977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（561977）
          source: &a1
            id: s_KnP4NYn6GP3WRyYS3CVKVB
            source_type: api_record
            title: 中国历代人物传记资料库：王明宰（CBDB 561977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561977&o=json
            external_identifier: CBDB:561977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.765Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SFbFJdCjrdL2rWuLDAC4bB
        subject_person_id: p_DBR449nrckE1GSQfK5x9ms
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王明宰，明人物。籍贯蕭山，身份为孝子/孝女，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 561977）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G1BLGlPUsdkRR6ocMJ3Rdn
          claim_id: c_SFbFJdCjrdL2rWuLDAC4bB
          source_id: s_KnP4NYn6GP3WRyYS3CVKVB
          stance: supports
          locator: CBDB:561977
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

# 王明宰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明宰 | accepted |
| bio.summary | 王明宰，明人物。籍贯蕭山，身份为孝子/孝女，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 561977） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明宰（CBDB 561977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561977&o=json)
