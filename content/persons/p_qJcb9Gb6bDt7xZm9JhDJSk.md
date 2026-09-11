---
schema: wang-person/v1
id: p_qJcb9Gb6bDt7xZm9JhDJSk
status: active
merged_into: null
display_name: 王偁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dqbPE1wz3nfQ5BfxzAQ1i1
        subject_person_id: p_qJcb9Gb6bDt7xZm9JhDJSk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HuPxCfh6opcECE1Wob8QKx
          claim_id: c_dqbPE1wz3nfQ5BfxzAQ1i1
          source_id: s_iwi4hzVq4V3hKCKG95B17V
          stance: supports
          locator: CBDB:481536
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（481536）
          source: &a1
            id: s_iwi4hzVq4V3hKCKG95B17V
            source_type: api_record
            title: 中国历代人物传记资料库：王偁（CBDB 481536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=481536&o=json
            external_identifier: CBDB:481536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.691Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ya13rqhNzxiiNU2Sgmt3s9
        subject_person_id: p_qJcb9Gb6bDt7xZm9JhDJSk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偁，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 481536）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rOlbXBE1OdmVmlMaV0Jp54
          claim_id: c_Ya13rqhNzxiiNU2Sgmt3s9
          source_id: s_iwi4hzVq4V3hKCKG95B17V
          stance: supports
          locator: CBDB:481536
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

# 王偁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偁 | accepted |
| bio.summary | 王偁，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 481536） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王偁（CBDB 481536）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=481536&o=json)
