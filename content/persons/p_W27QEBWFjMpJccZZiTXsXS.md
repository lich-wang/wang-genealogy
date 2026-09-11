---
schema: wang-person/v1
id: p_W27QEBWFjMpJccZZiTXsXS
status: active
merged_into: null
display_name: 王裕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GhDRksdwwFqZ1hgc4kMqEt
        subject_person_id: p_W27QEBWFjMpJccZZiTXsXS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1ZWCJMV1JYGqns4NBSQWBt
          claim_id: c_GhDRksdwwFqZ1hgc4kMqEt
          source_id: s_AwViaG3CP4PWVCBo6MaA94
          stance: supports
          locator: CBDB:556936
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556936）
          source: &a1
            id: s_AwViaG3CP4PWVCBo6MaA94
            source_type: api_record
            title: 中国历代人物传记资料库：王裕（CBDB 556936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556936&o=json
            external_identifier: CBDB:556936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.661Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q2MwHQzAc6LZabp9f3A9Fh
        subject_person_id: p_W27QEBWFjMpJccZZiTXsXS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jyPV7tcTZemjWccXQLuTCp
          claim_id: c_q2MwHQzAc6LZabp9f3A9Fh
          source_id: s_AwViaG3CP4PWVCBo6MaA94
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EX3BPEksuSJdF03tncJXNH
        subject_person_id: p_bMGwWQFb7a3S9AsNFQHq5w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W27QEBWFjMpJccZZiTXsXS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1SAXMqgDlxasJ9suiHV21L
          claim_id: c_EX3BPEksuSJdF03tncJXNH
          source_id: s_15qce7SRcTSEB2Pj7cqFoF
          stance: supports
          locator: 江西通志，Igid=1197684：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_15qce7SRcTSEB2Pj7cqFoF
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 66848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66848&o=json
            external_identifier: CBDB:66848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bMGwWQFb7a3S9AsNFQHq5w
        status: active
        display_name: 王英
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王裕 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bMGwWQFb7a3S9AsNFQHq5w | 王英 | accepted |

## 外部来源

- [中国历代人物传记资料库：王英（CBDB 66848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66848&o=json)
- [中国历代人物传记资料库：王裕（CBDB 556936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556936&o=json)
