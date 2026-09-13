---
schema: wang-person/v1
id: p_cCZKSey14o7Po5z49ZTLuG
status: active
merged_into: null
display_name: 王之駿
cbdb_id: 54866
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p7jdNYTCAgg9NDnjBQDsLh
        subject_person_id: p_cCZKSey14o7Po5z49ZTLuG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之駿，清人物。籍贯湘潭。（中国历代人物传记资料库 CBDB 54866）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_O2mM8MdIc42ZL1NtjbiN6l
          claim_id: c_p7jdNYTCAgg9NDnjBQDsLh
          source_id: s_jC2GJt89LExLCbkwtF6THS
          stance: supports
          locator: CBDB:54866
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jC2GJt89LExLCbkwtF6THS
            source_type: api_record
            title: 中国历代人物传记资料库：王之駿（CBDB 54866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54866&o=json
            external_identifier: CBDB:54866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wbpYxkMNqVY8nd9ZB6Aeje
        subject_person_id: p_cCZKSey14o7Po5z49ZTLuG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之駿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9aYiZMSsPABd9ES4nX7ycX
          claim_id: c_wbpYxkMNqVY8nd9ZB6Aeje
          source_id: s_jC2GJt89LExLCbkwtF6THS
          stance: supports
          locator: CBDB:54866
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 清
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

# 王之駿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之駿，清人物。籍贯湘潭。（中国历代人物传记资料库 CBDB 54866） | accepted |
| name.primary | 王之駿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之駿（CBDB 54866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54866&o=json)
