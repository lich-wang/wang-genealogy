---
schema: wang-person/v1
id: p_LXgtK5omn9xMb6WtWfebMn
status: active
merged_into: null
display_name: 王仁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jj5uchmCsstHr2GJ27oyPC
        subject_person_id: p_LXgtK5omn9xMb6WtWfebMn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DRKp4Krz5kHfg1Egt7gsTP
          claim_id: c_Jj5uchmCsstHr2GJ27oyPC
          source_id: s_UzhToTRNuKXC43W9g51CoV
          stance: supports
          locator: CBDB:702831
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（702831）
          source: &a1
            id: s_UzhToTRNuKXC43W9g51CoV
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 702831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702831&o=json
            external_identifier: CBDB:702831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.813Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BaKiacbQS5pE3sk3fAu28P
        subject_person_id: p_LXgtK5omn9xMb6WtWfebMn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁，明人物。籍贯上虞，曾任訓導、入名宦祠。（中国历代人物传记资料库 CBDB 702831）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k-pScXMFDDco9u0O1vN1cQ
          claim_id: c_BaKiacbQS5pE3sk3fAu28P
          source_id: s_UzhToTRNuKXC43W9g51CoV
          stance: supports
          locator: CBDB:702831
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tO1JHTj8vNo7znytbuOM03
        subject_person_id: p_APgCbU3BBu68y3JhFPX3Tu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LXgtK5omn9xMb6WtWfebMn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AduEr8pBPvE3ojZ61QAKq2
          claim_id: c_tO1JHTj8vNo7znytbuOM03
          source_id: s_UzhToTRNuKXC43W9g51CoV
          stance: supports
          locator: 上虞縣志，lgid=324833：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_APgCbU3BBu68y3JhFPX3Tu
        status: active
        display_name: 王進
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁 | accepted |
| bio.summary | 王仁，明人物。籍贯上虞，曾任訓導、入名宦祠。（中国历代人物传记资料库 CBDB 702831） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_APgCbU3BBu68y3JhFPX3Tu | 王進 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁（CBDB 702831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702831&o=json)
