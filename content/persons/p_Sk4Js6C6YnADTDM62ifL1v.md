---
schema: wang-person/v1
id: p_Sk4Js6C6YnADTDM62ifL1v
status: active
merged_into: null
display_name: 王國棟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cQc83Mmvqqt8wFMHT5mvw9
        subject_person_id: p_Sk4Js6C6YnADTDM62ifL1v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yHZH79ZH4rCvANYC6JVnXd
          claim_id: c_cQc83Mmvqqt8wFMHT5mvw9
          source_id: s_io2i4dttWreEUA7djN3pJP
          stance: supports
          locator: CBDB:71752
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71752）
          source: &a1
            id: s_io2i4dttWreEUA7djN3pJP
            source_type: api_record
            title: 中国历代人物传记资料库：王國棟（CBDB 71752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71752&o=json
            external_identifier: CBDB:71752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.857Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2rZR63TsgP43JwhFNE5GEW
        subject_person_id: p_Sk4Js6C6YnADTDM62ifL1v
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1692年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZREbojSKncWQACZRL3MeN5
          claim_id: c_2rZR63TsgP43JwhFNE5GEW
          source_id: s_io2i4dttWreEUA7djN3pJP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jJSWZFBZXu1jE4U2QcBnxX
        subject_person_id: p_Sk4Js6C6YnADTDM62ifL1v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國棟（生于1692年），清人物。籍贯興化，入仕副榜。（中国历代人物传记资料库 CBDB 71752）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ms821noHaMEuzi3J6bz15I
          claim_id: c_jJSWZFBZXu1jE4U2QcBnxX
          source_id: s_io2i4dttWreEUA7djN3pJP
          stance: supports
          locator: CBDB:71752
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
  ancestors:
    - claim:
        id: c_jnlzwLprofaRYINQihM0lx
        subject_person_id: p_BaBGwAY3dG3fHmNNNh37UZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Sk4Js6C6YnADTDM62ifL1v
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9ds_a1P2rbG6QUuLjsaVo2
          claim_id: c_jnlzwLprofaRYINQihM0lx
          source_id: s_5Ldbd7AEijGC4ni83wQR55
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），15075：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5Ldbd7AEijGC4ni83wQR55
            source_type: api_record
            title: 中国历代人物传记资料库：王貴一（CBDB 529403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529403&o=json
            external_identifier: CBDB:529403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.353Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BaBGwAY3dG3fHmNNNh37UZ
        status: active
        display_name: 王貴一
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王國棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國棟 | accepted |
| birth.date | 1692年 | accepted |
| bio.summary | 王國棟（生于1692年），清人物。籍贯興化，入仕副榜。（中国历代人物传记资料库 CBDB 71752） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_BaBGwAY3dG3fHmNNNh37UZ | 王貴一 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貴一（CBDB 529403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529403&o=json)
- [中国历代人物传记资料库：王國棟（CBDB 71752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71752&o=json)
