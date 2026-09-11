---
schema: wang-person/v1
id: p_M5KxKvuqpJd2c6xSCDSY4t
status: active
merged_into: null
display_name: 王宣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8ABNFV7Au6oUVN57X3VfNu
        subject_person_id: p_M5KxKvuqpJd2c6xSCDSY4t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Tian4E46gU4YrLvCvFJP66
          claim_id: c_8ABNFV7Au6oUVN57X3VfNu
          source_id: s_1G7GC8E67pD61v2ZaAz8h3
          stance: supports
          locator: CBDB:231792
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231792）
          source: &a1
            id: s_1G7GC8E67pD61v2ZaAz8h3
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 231792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231792&o=json
            external_identifier: CBDB:231792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.662Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1uL4SEztVv6uFKhsNa3s3S
        subject_person_id: p_M5KxKvuqpJd2c6xSCDSY4t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1vAKfRboZV86KpLeQQAaBU
          claim_id: c_1uL4SEztVv6uFKhsNa3s3S
          source_id: s_1G7GC8E67pD61v2ZaAz8h3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  descendants:
    - claim:
        id: c_BYWX3Nw-dJOn8BYq4T8fDG
        subject_person_id: p_M5KxKvuqpJd2c6xSCDSY4t
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_m3yi9K5yZsVRwPPF1yaNKL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H5xYxWB719PYurjoWoy_dX
          claim_id: c_BYWX3Nw-dJOn8BYq4T8fDG
          source_id: s_1G7GC8E67pD61v2ZaAz8h3
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百□名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_m3yi9K5yZsVRwPPF1yaNKL
        status: active
        display_name: 王國翼
        merged_into_person_id: null
  other: []
---

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_m3yi9K5yZsVRwPPF1yaNKL | 王國翼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宣（CBDB 231792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231792&o=json)
