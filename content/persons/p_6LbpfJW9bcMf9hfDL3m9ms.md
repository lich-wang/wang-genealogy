---
schema: wang-person/v1
id: p_6LbpfJW9bcMf9hfDL3m9ms
status: active
merged_into: null
display_name: 卓氏
revision: 1
cbdb_id: 37668
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_91gYL1fFJRhwAnwrfJc_S9
        subject_person_id: p_6LbpfJW9bcMf9hfDL3m9ms
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 卓氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X1hMfho2oPjjuKKDD-Bgvi
          claim_id: c_91gYL1fFJRhwAnwrfJc_S9
          source_id: s_OUz4bqCG8cxOFwLvI-CY-c
          stance: supports
          locator: CBDB:37668
          quotation: null
          interpretation_note: CBDB 明确记录的王居仁配偶
          source: &a1
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
          source: *a1
      object_person:
        id: p_JuL6KRGBPAuJfLJFh7jYmC
        status: active
        display_name: 王居仁
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 卓氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 卓氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_JuL6KRGBPAuJfLJFh7jYmC | 王居仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：卓氏(王居仁妻)（CBDB 37668）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37668&o=json)
