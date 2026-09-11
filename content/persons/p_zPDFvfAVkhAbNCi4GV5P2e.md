---
schema: wang-person/v1
id: p_zPDFvfAVkhAbNCi4GV5P2e
status: active
merged_into: null
display_name: 王爚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ldzm8t4A44SfA58M7g8SWj
        subject_person_id: p_zPDFvfAVkhAbNCi4GV5P2e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y7vVw915WsAjwN3H1Jx7qW
          claim_id: c_Ldzm8t4A44SfA58M7g8SWj
          source_id: s_5zrnST9GjznrwFR3HKyLLc
          stance: supports
          locator: CBDB:45841
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45841）
          source: &a1
            id: s_5zrnST9GjznrwFR3HKyLLc
            source_type: api_record
            title: 中国历代人物传记资料库：王爚（CBDB 45841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45841&o=json
            external_identifier: CBDB:45841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.690Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U25Pgnqf7AQ8DAFRyXD9DD
        subject_person_id: p_zPDFvfAVkhAbNCi4GV5P2e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爚，宋人物。籍贯新昌，身份为書院山長，入仕進士，曾任樞密使、朝奉郎、丞相。（中国历代人物传记资料库 CBDB 45841）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BH7fALrLfxXsfpOfoTZHSI
          claim_id: c_U25Pgnqf7AQ8DAFRyXD9DD
          source_id: s_5zrnST9GjznrwFR3HKyLLc
          stance: supports
          locator: CBDB:45841
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fXUMZGJbFMg8k_qp1dUft3
        subject_person_id: p_Lu8SFfHjq365VBh6a3WrN1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zPDFvfAVkhAbNCi4GV5P2e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ehoJY99GF9o_Y8b26N_nCB
          claim_id: c_fXUMZGJbFMg8k_qp1dUft3
          source_id: s_B4SkCu3fEDMdbHGw9aKnKB
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1311;1312：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_B4SkCu3fEDMdbHGw9aKnKB
            source_type: api_record
            title: 中国历代人物传记资料库：王夢得（CBDB 45842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45842&o=json
            external_identifier: CBDB:45842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.692Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Lu8SFfHjq365VBh6a3WrN1
        status: active
        display_name: 王夢得
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王爚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爚 | accepted |
| bio.summary | 王爚，宋人物。籍贯新昌，身份为書院山長，入仕進士，曾任樞密使、朝奉郎、丞相。（中国历代人物传记资料库 CBDB 45841） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Lu8SFfHjq365VBh6a3WrN1 | 王夢得 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢得（CBDB 45842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45842&o=json)
- [中国历代人物传记资料库：王爚（CBDB 45841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45841&o=json)
