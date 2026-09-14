---
schema: wang-person/v1
id: p_FPuXLEGAJYG7bRWewEjk1X
status: active
merged_into: null
display_name: 王義
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1mvT9nM3V9S3Nq8cGzs4bm
        subject_person_id: p_FPuXLEGAJYG7bRWewEjk1X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2CrAv93VvoQkuksMYdRrEh
          claim_id: c_1mvT9nM3V9S3Nq8cGzs4bm
          source_id: s_1uV6KejwwsLF4cJJE2a1mk
          stance: supports
          locator: CBDB:328625
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328625）
          source: &a1
            id: s_1uV6KejwwsLF4cJJE2a1mk
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 328625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328625&o=json
            external_identifier: CBDB:328625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.307Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4BW9UaMSgDx5dpnz32z3Gv
        subject_person_id: p_FPuXLEGAJYG7bRWewEjk1X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義，明人物。嘉靖四十一年進士，籍贯醴泉。（中国历代人物传记资料库 CBDB 328625）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E54e8OasxsvwNnZ5Fs8B59
          claim_id: c_4BW9UaMSgDx5dpnz32z3Gv
          source_id: s_1uV6KejwwsLF4cJJE2a1mk
          stance: supports
          locator: CBDB:328625
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_9-fEapURkTST3HbPQaaQv4
        subject_person_id: p_FPuXLEGAJYG7bRWewEjk1X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kAp4jgFVdUZGBRH4zNTPTY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x4izBbGSxfT5zIAnuQKNYg
          claim_id: c_9-fEapURkTST3HbPQaaQv4
          source_id: s_1uV6KejwwsLF4cJJE2a1mk
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百三十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kAp4jgFVdUZGBRH4zNTPTY
        status: active
        display_name: 王承芳
        merged_into_person_id: null
    - claim:
        id: c_7jbOB9-7OkDjAR1OYVdhom
        subject_person_id: p_FPuXLEGAJYG7bRWewEjk1X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JyHxqfkSLbRgJ5iEEiGf3n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ti5kBOBkxI-5iZTDm099bp
          claim_id: c_7jbOB9-7OkDjAR1OYVdhom
          source_id: s_xQz_BN8-k1GrbHuLRA-fPX
          stance: supports
          locator: CBDB：兄弟 王承芳（205124）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王惟賓 与 王承芳 为同胞（CBDB 记「兄」），王承芳 之父／母即 王惟賓 之父／母。
          source:
            id: s_xQz_BN8-k1GrbHuLRA-fPX
            source_type: api_record
            title: 中国历代人物传记资料库：王惟賓（CBDB 328628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328628&o=json
            external_identifier: CBDB:328628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JyHxqfkSLbRgJ5iEEiGf3n
        status: active
        display_name: 王惟賓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| bio.summary | 王義，明人物。嘉靖四十一年進士，籍贯醴泉。（中国历代人物传记资料库 CBDB 328625） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kAp4jgFVdUZGBRH4zNTPTY | 王承芳 | accepted |
| children | p_JyHxqfkSLbRgJ5iEEiGf3n | 王惟賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟賓（CBDB 328628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328628&o=json)
- [中国历代人物传记资料库：王義（CBDB 328625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328625&o=json)
