---
schema: wang-person/v1
id: p_re9jUCqxrWKFvcQX57pMDi
status: active
merged_into: null
display_name: 王繼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2dr8NGeKmx27BFVhHGQ7q4
        subject_person_id: p_re9jUCqxrWKFvcQX57pMDi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wetWksyAAFYKDpf95WRALb
          claim_id: c_2dr8NGeKmx27BFVhHGQ7q4
          source_id: s_x3BtTAcWJzHhgwJ4Hrp9KQ
          stance: supports
          locator: CBDB:264719
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264719）
          source: &a1
            id: s_x3BtTAcWJzHhgwJ4Hrp9KQ
            source_type: api_record
            title: 中国历代人物传记资料库：王繼（CBDB 264719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264719&o=json
            external_identifier: CBDB:264719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.663Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xFhtH7AqBMDhXzb3z9YQCo
        subject_person_id: p_re9jUCqxrWKFvcQX57pMDi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼，明人物。弘治六年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 264719）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MNsiAYtR02GfnTnIKr7k9r
          claim_id: c_xFhtH7AqBMDhXzb3z9YQCo
          source_id: s_x3BtTAcWJzHhgwJ4Hrp9KQ
          stance: supports
          locator: CBDB:264719
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

# 王繼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼 | accepted |
| bio.summary | 王繼，明人物。弘治六年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 264719） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼（CBDB 264719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264719&o=json)
