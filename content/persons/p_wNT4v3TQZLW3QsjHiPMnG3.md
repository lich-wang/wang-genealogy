---
schema: wang-person/v1
id: p_wNT4v3TQZLW3QsjHiPMnG3
status: active
merged_into: null
display_name: 王武宣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BRi3145RuczqwbyKzt3Wdr
        subject_person_id: p_wNT4v3TQZLW3QsjHiPMnG3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王武宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8up32kev3cVhN5HuNUZGh7
          claim_id: c_BRi3145RuczqwbyKzt3Wdr
          source_id: s_Cj2x3kfngmgsEyFSTsgQGy
          stance: supports
          locator: CBDB:32337
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（32337）
          source: &a1
            id: s_Cj2x3kfngmgsEyFSTsgQGy
            source_type: api_record
            title: 中国历代人物传记资料库：王武宣（CBDB 32337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32337&o=json
            external_identifier: CBDB:32337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.049Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KSPLiEcW4PC5JAKqz9KKxQ
        subject_person_id: p_wNT4v3TQZLW3QsjHiPMnG3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王武宣，唐人物。籍贯長安，曾任州刺史。（中国历代人物传记资料库 CBDB 32337）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y3rAZKMqHtG86fVgIqLejH
          claim_id: c_KSPLiEcW4PC5JAKqz9KKxQ
          source_id: s_Cj2x3kfngmgsEyFSTsgQGy
          stance: supports
          locator: CBDB:32337
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_C7wUQ38SGA41YVvZiEMBFX
        subject_person_id: p_wNT4v3TQZLW3QsjHiPMnG3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZZTuo2K7P1H9e4XxbJdru1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YaT-fCgdWmn0QCB1c2O0M6
          claim_id: c_C7wUQ38SGA41YVvZiEMBFX
          source_id: s_Cj2x3kfngmgsEyFSTsgQGy
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZZTuo2K7P1H9e4XxbJdru1
        status: active
        display_name: 王德本
        merged_into_person_id: null
    - claim:
        id: c_ri3J4PyysBICiwODJKwuLs
        subject_person_id: p_wNT4v3TQZLW3QsjHiPMnG3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4LvcHuUhu13Ctna78F2LzQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eU-_zvVGVGuHl3SD-jJXMo
          claim_id: c_ri3J4PyysBICiwODJKwuLs
          source_id: s_Cj2x3kfngmgsEyFSTsgQGy
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4LvcHuUhu13Ctna78F2LzQ
        status: active
        display_name: 王德真
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王武宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王武宣 | accepted |
| bio.summary | 王武宣，唐人物。籍贯長安，曾任州刺史。（中国历代人物传记资料库 CBDB 32337） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ZZTuo2K7P1H9e4XxbJdru1 | 王德本 | accepted |
| children | p_4LvcHuUhu13Ctna78F2LzQ | 王德真 | accepted |

## 外部来源

- [中国历代人物传记资料库：王武宣（CBDB 32337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32337&o=json)
