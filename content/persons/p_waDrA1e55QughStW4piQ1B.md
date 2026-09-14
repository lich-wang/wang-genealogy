---
schema: wang-person/v1
id: p_waDrA1e55QughStW4piQ1B
status: active
merged_into: null
display_name: 王宸
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HKW8Aw3vHvMjd4TxEQZ9xK
        subject_person_id: p_waDrA1e55QughStW4piQ1B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_szET53PUJBdoxV9miTMnci
          claim_id: c_HKW8Aw3vHvMjd4TxEQZ9xK
          source_id: s_GFSk34KApYDV8JrwtGuJh9
          stance: supports
          locator: CBDB:255760
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255760）
          source: &a1
            id: s_GFSk34KApYDV8JrwtGuJh9
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 255760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255760&o=json
            external_identifier: CBDB:255760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.353Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QJHRJF68Pi9KBPJmLE1qAB
        subject_person_id: p_waDrA1e55QughStW4piQ1B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸，明人物。成化十七年進士，籍贯容城。（中国历代人物传记资料库 CBDB 255760）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eSKupmkHtfy6sT7JAimdjB
          claim_id: c_QJHRJF68Pi9KBPJmLE1qAB
          source_id: s_GFSk34KApYDV8JrwtGuJh9
          stance: supports
          locator: CBDB:255760
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_a_VOSNPnOM6IuhtWlRnGOM
        subject_person_id: p_ZvcYSxF75Ub3o8A9bCQMfH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_waDrA1e55QughStW4piQ1B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EncgDfxNj_5KwE7mZi_VAa
          claim_id: c_a_VOSNPnOM6IuhtWlRnGOM
          source_id: s_kjL7DfDWvknUljovgfXWyT
          stance: supports
          locator: CBDB：兄弟 王寅（126668）之父／母 王志廣
          quotation: null
          interpretation_note: 由兄弟关系推断：王宸 与 王寅 为同胞（CBDB 记「兄」），王寅 之父／母即 王宸 之父／母。
          source:
            id: s_kjL7DfDWvknUljovgfXWyT
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 255760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255760&o=json
            external_identifier: CBDB:255760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZvcYSxF75Ub3o8A9bCQMfH
        status: active
        display_name: 王志廣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_TyI6K2wF0SxCoXAbc2lmiC
        subject_person_id: p_qcp613MEZvW9QYvDGgbu1f
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_waDrA1e55QughStW4piQ1B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v1ZHC68eBlmCbQaTATyFxE
          claim_id: c_TyI6K2wF0SxCoXAbc2lmiC
          source_id: s_kjL7DfDWvknUljovgfXWyT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126668 王寅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kjL7DfDWvknUljovgfXWyT
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 255760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255760&o=json
            external_identifier: CBDB:255760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qcp613MEZvW9QYvDGgbu1f
        status: active
        display_name: 王寅
        merged_into_person_id: null
---

# 王宸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宸 | accepted |
| bio.summary | 王宸，明人物。成化十七年進士，籍贯容城。（中国历代人物传记资料库 CBDB 255760） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZvcYSxF75Ub3o8A9bCQMfH | 王志廣 | accepted |
| other | p_qcp613MEZvW9QYvDGgbu1f | 王寅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宸（CBDB 255760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255760&o=json)
