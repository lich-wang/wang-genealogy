---
schema: wang-person/v1
id: p_4gDHDzqgN3GaDot2cS7vhM
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 135912
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sXGPQ0dyV8bzf5mmQJtkr0
        subject_person_id: p_4gDHDzqgN3GaDot2cS7vhM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XuA2tRw8hXl9K9wqvKe1SB
          claim_id: c_sXGPQ0dyV8bzf5mmQJtkr0
          source_id: s_qfTvAcLr-_VBCuop7t_DMa
          stance: supports
          locator: CBDB:135912
          quotation: null
          interpretation_note: CBDB 明确记录的王忠彥配偶
          source: &a1
            id: s_qfTvAcLr-_VBCuop7t_DMa
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王忠彥妻)（CBDB 135912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135912&o=json
            external_identifier: CBDB:135912
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
        id: c_1sAI2axrFIGJQ8sCi_OSQv
        subject_person_id: p_x4bp5Ci45FMuKz82qKbkW6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4gDHDzqgN3GaDot2cS7vhM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5JgvFDu6dwheH6mKVXEcgN
          claim_id: c_1sAI2axrFIGJQ8sCi_OSQv
          source_id: s_qfTvAcLr-_VBCuop7t_DMa
          stance: supports
          locator: 紹興十八年同年小錄，289：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x4bp5Ci45FMuKz82qKbkW6
        status: active
        display_name: 王忠彥
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_x4bp5Ci45FMuKz82qKbkW6 | 王忠彥 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王忠彥妻)（CBDB 135912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135912&o=json)
