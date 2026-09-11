---
schema: wang-person/v1
id: p_yfoEBa3DYJcqYMHtEVXMu4
status: active
merged_into: null
display_name: 曹氏
revision: 1
cbdb_id: 556395
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DtsOlMoNDQTig700uJyq7W
        subject_person_id: p_yfoEBa3DYJcqYMHtEVXMu4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曹氏，清人物。籍贯唐縣，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 556395）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YKp3B4fV2qxd4-9Bvg5kA2
          claim_id: c_DtsOlMoNDQTig700uJyq7W
          source_id: s_08QWrtS0LGhHimJFxq1kvV
          stance: supports
          locator: CBDB:556395
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_08QWrtS0LGhHimJFxq1kvV
            source_type: api_record
            title: 中国历代人物传记资料库：曹氏(王國佐妻)（CBDB 556395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556395&o=json
            external_identifier: CBDB:556395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_h88oeevgQYD0WVjyo73MrJ
        subject_person_id: p_yfoEBa3DYJcqYMHtEVXMu4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曹氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AP0bWCWFOGNUGvrHuZUbzi
          claim_id: c_h88oeevgQYD0WVjyo73MrJ
          source_id: s_08QWrtS0LGhHimJFxq1kvV
          stance: supports
          locator: CBDB:556395
          quotation: null
          interpretation_note: CBDB 明确记录的王國佐配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_vzNtR9ATBEduNAmIfutdhU
        subject_person_id: p_goxQUY9X7pHEVZ7L3e4LiB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_yfoEBa3DYJcqYMHtEVXMu4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u3_QTX3m3WBTfGqpgIG4Cc
          claim_id: c_vzNtR9ATBEduNAmIfutdhU
          source_id: s_08QWrtS0LGhHimJFxq1kvV
          stance: supports
          locator: 南陽府志，lgid=878725：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_goxQUY9X7pHEVZ7L3e4LiB
        status: active
        display_name: 王國佐
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 曹氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 曹氏，清人物。籍贯唐縣，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 556395） | accepted |
| name.primary | 曹氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_goxQUY9X7pHEVZ7L3e4LiB | 王國佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：曹氏(王國佐妻)（CBDB 556395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556395&o=json)
