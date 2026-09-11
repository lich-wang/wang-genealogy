---
schema: wang-person/v1
id: p_cnrphnKbozC4Hm5NTRcPPr
status: active
merged_into: null
display_name: 王振
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_34wxCyms3qWLh7vAy2SQ4y
        subject_person_id: p_cnrphnKbozC4Hm5NTRcPPr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nRcrC5KaLPeiNNd4YpZdPi
          claim_id: c_34wxCyms3qWLh7vAy2SQ4y
          source_id: s_KGNruFD3ehadPWAJWTcbCK
          stance: supports
          locator: CBDB:343361
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343361）
          source: &a1
            id: s_KGNruFD3ehadPWAJWTcbCK
            source_type: api_record
            title: 中国历代人物传记资料库：王振（CBDB 343361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343361&o=json
            external_identifier: CBDB:343361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oYTmYq8ctwPHSB2As2mG1i
        subject_person_id: p_cnrphnKbozC4Hm5NTRcPPr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振，明人物。明清進士進士，籍贯龍溪，入仕進士。（中国历代人物传记资料库 CBDB 343361）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_awG1LQFe1nsuTKXlH6zR50
          claim_id: c_oYTmYq8ctwPHSB2As2mG1i
          source_id: s_KGNruFD3ehadPWAJWTcbCK
          stance: supports
          locator: CBDB:343361
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

# 王振

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振 | accepted |
| bio.summary | 王振，明人物。明清進士進士，籍贯龍溪，入仕進士。（中国历代人物传记资料库 CBDB 343361） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振（CBDB 343361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343361&o=json)
