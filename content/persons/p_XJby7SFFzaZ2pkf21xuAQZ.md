---
schema: wang-person/v1
id: p_XJby7SFFzaZ2pkf21xuAQZ
status: active
merged_into: null
display_name: 王珏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7WQ1bPARJSz77Z5ZYnTEW3
        subject_person_id: p_XJby7SFFzaZ2pkf21xuAQZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nLTbHYayhSA1ojZJSk1BqY
          claim_id: c_7WQ1bPARJSz77Z5ZYnTEW3
          source_id: s_CQd9sSe5AxgtqdGS6BPgCu
          stance: supports
          locator: CBDB:264766
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264766）
          source: &a1
            id: s_CQd9sSe5AxgtqdGS6BPgCu
            source_type: api_record
            title: 中国历代人物传记资料库：王珏（CBDB 264766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264766&o=json
            external_identifier: CBDB:264766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.670Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kef6yVuze4EXsYpUa2BiYb
        subject_person_id: p_XJby7SFFzaZ2pkf21xuAQZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珏，明人物。弘治六年進士，籍贯太和，曾任通判。（中国历代人物传记资料库 CBDB 264766）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_14poh-h4sv_ckLMwHprOvy
          claim_id: c_kef6yVuze4EXsYpUa2BiYb
          source_id: s_CQd9sSe5AxgtqdGS6BPgCu
          stance: supports
          locator: CBDB:264766
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZJe_NnPcufdJ9nc7wb8vR5
        subject_person_id: p_XJby7SFFzaZ2pkf21xuAQZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QeQKrjZirVTXRydZQsQCp7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hYar2cU2tIN5POGCRlt6ZH
          claim_id: c_ZJe_NnPcufdJ9nc7wb8vR5
          source_id: s_CQd9sSe5AxgtqdGS6BPgCu
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QeQKrjZirVTXRydZQsQCp7
        status: active
        display_name: 王應奎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珏 | accepted |
| bio.summary | 王珏，明人物。弘治六年進士，籍贯太和，曾任通判。（中国历代人物传记资料库 CBDB 264766） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_QeQKrjZirVTXRydZQsQCp7 | 王應奎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珏（CBDB 264766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264766&o=json)
