---
schema: wang-person/v1
id: p_W1g5DMbRCMBxAF6VW27SvZ
status: active
merged_into: null
display_name: 王燮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NVCASYAmacWkGs6L7GQRF9
        subject_person_id: p_W1g5DMbRCMBxAF6VW27SvZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_upR1SMr92SDguAcN1HjS2v
          claim_id: c_NVCASYAmacWkGs6L7GQRF9
          source_id: s_noFJk8K8rUeQdjj7XfEUiZ
          stance: supports
          locator: CBDB:71294
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71294）
          source: &a1
            id: s_noFJk8K8rUeQdjj7XfEUiZ
            source_type: api_record
            title: 中国历代人物传记资料库：王燮（CBDB 71294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71294&o=json
            external_identifier: CBDB:71294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.577Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aqfvjHfzuzSroByUHQyMMB
        subject_person_id: p_W1g5DMbRCMBxAF6VW27SvZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1868年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fKAyFErBrLu7rugV52w6B8
          claim_id: c_aqfvjHfzuzSroByUHQyMMB
          source_id: s_noFJk8K8rUeQdjj7XfEUiZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_iK2vDP4nuXb54KKrJiyvMc
        subject_person_id: p_W1g5DMbRCMBxAF6VW27SvZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1918年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FKnhyALDJNJT5i5r84c6tW
          claim_id: c_iK2vDP4nuXb54KKrJiyvMc
          source_id: s_noFJk8K8rUeQdjj7XfEUiZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t7FvctukrBBekCT8Vop2a8
        subject_person_id: p_W1g5DMbRCMBxAF6VW27SvZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燮（1868年—1918年），中華民國人物。籍贯仁和，曾任糧儲道。（中国历代人物传记资料库 CBDB 71294）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Izqlp28gFiJGHOexfxhFsW
          claim_id: c_t7FvctukrBBekCT8Vop2a8
          source_id: s_noFJk8K8rUeQdjj7XfEUiZ
          stance: supports
          locator: CBDB:71294
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

# 王燮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燮 | accepted |
| birth.date | 1868年 | accepted |
| death.date | 1918年 | accepted |
| bio.summary | 王燮（1868年—1918年），中華民國人物。籍贯仁和，曾任糧儲道。（中国历代人物传记资料库 CBDB 71294） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王燮（CBDB 71294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71294&o=json)
