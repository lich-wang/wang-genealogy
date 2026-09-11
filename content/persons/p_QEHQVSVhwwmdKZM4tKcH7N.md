---
schema: wang-person/v1
id: p_QEHQVSVhwwmdKZM4tKcH7N
status: active
merged_into: null
display_name: 王可久
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SUg47uvjvHtUbrNE5SczFq
        subject_person_id: p_QEHQVSVhwwmdKZM4tKcH7N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可久
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8U2U6Z2Bh3RiUWbvxcUcSq
          claim_id: c_SUg47uvjvHtUbrNE5SczFq
          source_id: s_gNoPh6G17PspbgktgrTs4X
          stance: supports
          locator: CBDB:227987
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227987）
          source: &a1
            id: s_gNoPh6G17PspbgktgrTs4X
            source_type: api_record
            title: 中国历代人物传记资料库：王可久（CBDB 227987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227987&o=json
            external_identifier: CBDB:227987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.541Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1XgmWSvMYC3x6kKoWraUUe
        subject_person_id: p_QEHQVSVhwwmdKZM4tKcH7N
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
        - id: cs_EFS6jiF7HrHV3vuC9xmV3E
          claim_id: c_1XgmWSvMYC3x6kKoWraUUe
          source_id: s_gNoPh6G17PspbgktgrTs4X
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_MOmOPMS61IGV8ROuVD7Lw3
        subject_person_id: p_QEHQVSVhwwmdKZM4tKcH7N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yt96UUYNj3ASszrYuN2kTm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-FNiHZhEPh-DSptGZjgNyc
          claim_id: c_MOmOPMS61IGV8ROuVD7Lw3
          source_id: s_gNoPh6G17PspbgktgrTs4X
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第二百四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yt96UUYNj3ASszrYuN2kTm
        status: active
        display_name: 王嘉賓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王可久

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可久 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_yt96UUYNj3ASszrYuN2kTm | 王嘉賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王可久（CBDB 227987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227987&o=json)
