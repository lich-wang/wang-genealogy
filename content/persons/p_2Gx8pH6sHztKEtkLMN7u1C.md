---
schema: wang-person/v1
id: p_2Gx8pH6sHztKEtkLMN7u1C
status: active
merged_into: null
display_name: 王瑭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wASmoMD5YBpLSf7mLwBd1V
        subject_person_id: p_2Gx8pH6sHztKEtkLMN7u1C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ff2bDAgf14bEzP9FpArucz
          claim_id: c_wASmoMD5YBpLSf7mLwBd1V
          source_id: s_vXt7EfqfhFLQRHs9zkrC1p
          stance: supports
          locator: CBDB:199751
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199751）
          source: &a1
            id: s_vXt7EfqfhFLQRHs9zkrC1p
            source_type: api_record
            title: 中国历代人物传记资料库：王瑭（CBDB 199751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199751&o=json
            external_identifier: CBDB:199751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.577Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_32Ean72WyES7MrMz4vtJhU
        subject_person_id: p_2Gx8pH6sHztKEtkLMN7u1C
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1443年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BjeATicFArdzdEYAAZpxvT
          claim_id: c_32Ean72WyES7MrMz4vtJhU
          source_id: s_vXt7EfqfhFLQRHs9zkrC1p
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nPdJZhnzJufqfU8K33mxsA
        subject_person_id: p_2Gx8pH6sHztKEtkLMN7u1C
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
        - id: cs_pLAWzChgNyDUaVwQx1k74M
          claim_id: c_nPdJZhnzJufqfU8K33mxsA
          source_id: s_vXt7EfqfhFLQRHs9zkrC1p
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
  descendants: []
  other: []
---

# 王瑭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑭 | accepted |
| birth.date | 1443年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑭（CBDB 199751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199751&o=json)
