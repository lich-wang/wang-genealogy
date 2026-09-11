---
schema: wang-person/v1
id: p_cJPjdNwsR6729BhxkY9bu9
status: active
merged_into: null
display_name: 王撫民
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EAVLnYzMwJLysmcL3Km2Bs
        subject_person_id: p_cJPjdNwsR6729BhxkY9bu9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撫民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H7deTNYoUmQv5vhWkEx4qK
          claim_id: c_EAVLnYzMwJLysmcL3Km2Bs
          source_id: s_fX2NiBK6X1E4F19HSQV43o
          stance: supports
          locator: CBDB:210428
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210428）
          source: &a1
            id: s_fX2NiBK6X1E4F19HSQV43o
            source_type: api_record
            title: 中国历代人物传记资料库：王撫民（CBDB 210428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210428&o=json
            external_identifier: CBDB:210428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gPn953nJHptgc7KCTo1b9d
        subject_person_id: p_cJPjdNwsR6729BhxkY9bu9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撫民，明人物。隆慶五年進士，籍贯清源，曾任提刑按察使司副使。（中国历代人物传记资料库 CBDB 210428）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L4yEc-qPupaIiXGm1R4tQQ
          claim_id: c_gPn953nJHptgc7KCTo1b9d
          source_id: s_fX2NiBK6X1E4F19HSQV43o
          stance: supports
          locator: CBDB:210428
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wLHNayD-BMiX-fwj_amy1n
        subject_person_id: p_cJPjdNwsR6729BhxkY9bu9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k3fw4jn7UF1hujd81L3vBe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BS0Jzn4pTaobnYPano6J-t
          claim_id: c_wLHNayD-BMiX-fwj_amy1n
          source_id: s_fX2NiBK6X1E4F19HSQV43o
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百四十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_k3fw4jn7UF1hujd81L3vBe
        status: active
        display_name: 王蔚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王撫民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王撫民 | accepted |
| bio.summary | 王撫民，明人物。隆慶五年進士，籍贯清源，曾任提刑按察使司副使。（中国历代人物传记资料库 CBDB 210428） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_k3fw4jn7UF1hujd81L3vBe | 王蔚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王撫民（CBDB 210428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210428&o=json)
