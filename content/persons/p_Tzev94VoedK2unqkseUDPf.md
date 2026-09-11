---
schema: wang-person/v1
id: p_Tzev94VoedK2unqkseUDPf
status: active
merged_into: null
display_name: 王絡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X5izAnn8DmHN4rHa4zYqEy
        subject_person_id: p_Tzev94VoedK2unqkseUDPf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王絡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NTmoEfDoCiVN22AgHCAAN6
          claim_id: c_X5izAnn8DmHN4rHa4zYqEy
          source_id: s_B1AJM8oPYse2pH6V4QFaNM
          stance: supports
          locator: CBDB:327958
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327958）
          source: &a1
            id: s_B1AJM8oPYse2pH6V4QFaNM
            source_type: api_record
            title: 中国历代人物传记资料库：王絡（CBDB 327958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327958&o=json
            external_identifier: CBDB:327958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.277Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uT3gC2uvmNrLqufCbn1AtZ
        subject_person_id: p_Tzev94VoedK2unqkseUDPf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王絡，明人物。嘉靖四十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 327958）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X1_tUmWdOPjH_yPL5mHjG5
          claim_id: c_uT3gC2uvmNrLqufCbn1AtZ
          source_id: s_B1AJM8oPYse2pH6V4QFaNM
          stance: supports
          locator: CBDB:327958
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

# 王絡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王絡 | accepted |
| bio.summary | 王絡，明人物。嘉靖四十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 327958） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王絡（CBDB 327958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327958&o=json)
