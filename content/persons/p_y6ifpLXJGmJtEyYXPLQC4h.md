---
schema: wang-person/v1
id: p_y6ifpLXJGmJtEyYXPLQC4h
status: active
merged_into: null
display_name: 蔣氏
revision: 1
cbdb_id: 166396
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MplDkvQA6GKlp0grqo88gE
        subject_person_id: p_y6ifpLXJGmJtEyYXPLQC4h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蔣氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dIN7e3awQiGAYE4IoSRxdL
          claim_id: c_MplDkvQA6GKlp0grqo88gE
          source_id: s_49ee0bS15E-hPWS0P2fnhA
          stance: supports
          locator: CBDB:166396
          quotation: null
          interpretation_note: CBDB 明确记录的王汶配偶
          source: &a1
            id: s_49ee0bS15E-hPWS0P2fnhA
            source_type: api_record
            title: 中国历代人物传记资料库：蔣氏(王汶妻)（CBDB 166396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166396&o=json
            external_identifier: CBDB:166396
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
        id: c_RhDT4PLTiABvnN6B7op0eZ
        subject_person_id: p_xtyYrh2ceBwZ769mV4SDUW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_y6ifpLXJGmJtEyYXPLQC4h
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KXB60rRdYhdU6aRkFl3Foy
          claim_id: c_RhDT4PLTiABvnN6B7op0eZ
          source_id: s_49ee0bS15E-hPWS0P2fnhA
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Baoli3：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xtyYrh2ceBwZ769mV4SDUW
        status: active
        display_name: 王汶
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蔣氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 蔣氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_xtyYrh2ceBwZ769mV4SDUW | 王汶 | accepted |

## 外部来源

- [中国历代人物传记资料库：蔣氏(王汶妻)（CBDB 166396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166396&o=json)
