---
schema: wang-person/v1
id: p_e83ucJicuv1MxVjgd5jQ2Q
status: active
merged_into: null
display_name: 王實
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_inYazyX6tuAg7HtVXjMkAL
        subject_person_id: p_e83ucJicuv1MxVjgd5jQ2Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王實
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NaFETeSHetXR93YkB1RXiH
          claim_id: c_inYazyX6tuAg7HtVXjMkAL
          source_id: s_ZM79cVjL4EFt5fDNTw2Jrx
          stance: supports
          locator: CBDB:245702
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245702）
          source: &a1
            id: s_ZM79cVjL4EFt5fDNTw2Jrx
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 245702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245702&o=json
            external_identifier: CBDB:245702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.073Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4hsKSVn1b17WSzj5e5KFi8
        subject_person_id: p_e83ucJicuv1MxVjgd5jQ2Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王實，明人物。成化八年進士，籍贯文登。（中国历代人物传记资料库 CBDB 245702）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IULzDYmxDHRZZPM_k1--tD
          claim_id: c_4hsKSVn1b17WSzj5e5KFi8
          source_id: s_ZM79cVjL4EFt5fDNTw2Jrx
          stance: supports
          locator: CBDB:245702
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

# 王實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王實 | accepted |
| bio.summary | 王實，明人物。成化八年進士，籍贯文登。（中国历代人物传记资料库 CBDB 245702） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王實（CBDB 245702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245702&o=json)
