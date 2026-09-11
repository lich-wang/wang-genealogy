---
schema: wang-person/v1
id: p_134eFWApSDSA3YicLLEfKS
status: active
merged_into: null
display_name: 王璽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S6TQsbvuYUSyCSHt22Zh1T
        subject_person_id: p_134eFWApSDSA3YicLLEfKS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Axg6Np1GMVj5j2iy2DTFpJ
          claim_id: c_S6TQsbvuYUSyCSHt22Zh1T
          source_id: s_5m9WsXb2WaCDksr1LrATcg
          stance: supports
          locator: CBDB:341760
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341760）
          source: &a1
            id: s_5m9WsXb2WaCDksr1LrATcg
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 341760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341760&o=json
            external_identifier: CBDB:341760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.698Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yQhQyceAVjgpX3LFbKtex3
        subject_person_id: p_134eFWApSDSA3YicLLEfKS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽，明人物。明清進士進士，籍贯魯山，入仕進士。（中国历代人物传记资料库 CBDB 341760）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Pp0kTDzK5YXbALdlzA0JwI
          claim_id: c_yQhQyceAVjgpX3LFbKtex3
          source_id: s_5m9WsXb2WaCDksr1LrATcg
          stance: supports
          locator: CBDB:341760
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

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| bio.summary | 王璽，明人物。明清進士進士，籍贯魯山，入仕進士。（中国历代人物传记资料库 CBDB 341760） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璽（CBDB 341760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341760&o=json)
