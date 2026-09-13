---
schema: wang-person/v1
id: p_JuL6KRGBPAuJfLJFh7jYmC
status: active
merged_into: null
display_name: 王居仁
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8drQP97mnC4THJsw2JTQsn
        subject_person_id: p_JuL6KRGBPAuJfLJFh7jYmC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eQdAMXVdaZqJbccERue8Je
          claim_id: c_8drQP97mnC4THJsw2JTQsn
          source_id: s_UttvqztfzAk7H6HhzzdGf8
          stance: supports
          locator: CBDB:37667
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37667）
          source: &a1
            id: s_UttvqztfzAk7H6HhzzdGf8
            source_type: api_record
            title: 中国历代人物传记资料库：王居仁（CBDB 37667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37667&o=json
            external_identifier: CBDB:37667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.226Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tBT5gqUQRvFrSevguJmYM6
        subject_person_id: p_JuL6KRGBPAuJfLJFh7jYmC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居仁，宋人物。籍贯常寧，入仕進士，曾任縣令。（中国历代人物传记资料库 CBDB 37667）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__grjDQEqjaEeHc4tusczXZ
          claim_id: c_tBT5gqUQRvFrSevguJmYM6
          source_id: s_UttvqztfzAk7H6HhzzdGf8
          stance: supports
          locator: CBDB:37667
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
  spouses:
    - claim:
        id: c_k3mD_6YADOKto3Oh003MiB
        subject_person_id: p_JuL6KRGBPAuJfLJFh7jYmC
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6LbpfJW9bcMf9hfDL3m9ms
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YFFTesZAAmGfz-xCKyNktP
          claim_id: c_k3mD_6YADOKto3Oh003MiB
          source_id: s_OUz4bqCG8cxOFwLvI-CY-c
          stance: supports
          locator: CBDB 双向互证（妻子 卓氏(王居仁妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_OUz4bqCG8cxOFwLvI-CY-c
            source_type: api_record
            title: 中国历代人物传记资料库：卓氏(王居仁妻)（CBDB 37668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37668&o=json
            external_identifier: CBDB:37668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6LbpfJW9bcMf9hfDL3m9ms
        status: active
        display_name: 卓氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王居仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王居仁 | accepted |
| bio.summary | 王居仁，宋人物。籍贯常寧，入仕進士，曾任縣令。（中国历代人物传记资料库 CBDB 37667） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_6LbpfJW9bcMf9hfDL3m9ms | 卓氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王居仁（CBDB 37667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37667&o=json)
- [中国历代人物传记资料库：卓氏(王居仁妻)（CBDB 37668）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37668&o=json)
