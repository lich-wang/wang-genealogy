---
schema: wang-person/v1
id: p_8FQahN2M34nM7B4mb79g6G
status: active
merged_into: null
display_name: 王燮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eu9M4VKtzq2KZQZXDYhg5P
        subject_person_id: p_8FQahN2M34nM7B4mb79g6G
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
        - id: cs_Zd73LPS9NNu29zHH3vCG86
          claim_id: c_eu9M4VKtzq2KZQZXDYhg5P
          source_id: s_4x6YQGwimhjCQTNP9mrxyS
          stance: supports
          locator: CBDB:71293
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71293）
          source: &a1
            id: s_4x6YQGwimhjCQTNP9mrxyS
            source_type: api_record
            title: 中国历代人物传记资料库：王燮（CBDB 71293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71293&o=json
            external_identifier: CBDB:71293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.576Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_N33XBTSFdaxLgDEgwLt2XK
        subject_person_id: p_8FQahN2M34nM7B4mb79g6G
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1856年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tpwSf7z3S5a9WcQdYujMFm
          claim_id: c_N33XBTSFdaxLgDEgwLt2XK
          source_id: s_4x6YQGwimhjCQTNP9mrxyS
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
        id: c_7gxkB9povXsjvrL7iskugY
        subject_person_id: p_8FQahN2M34nM7B4mb79g6G
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1900年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sW3HDrVpP32mbYvoGthtGB
          claim_id: c_7gxkB9povXsjvrL7iskugY
          source_id: s_4x6YQGwimhjCQTNP9mrxyS
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
        id: c_jkxfHANcuMrNnjxUFEXSCz
        subject_person_id: p_8FQahN2M34nM7B4mb79g6G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DqQftMwUbSFmF3U7qeKu9M
          claim_id: c_jkxfHANcuMrNnjxUFEXSCz
          source_id: s_4x6YQGwimhjCQTNP9mrxyS
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
        id: c_MdZb1qJ8DkK3lzyEIr5BI9
        subject_person_id: p_8FQahN2M34nM7B4mb79g6G
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L41jgvNQ6w8JjJzaNKsowV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5cex85Ci-9t0SWtza50cSp
          claim_id: c_MdZb1qJ8DkK3lzyEIr5BI9
          source_id: s_4x6YQGwimhjCQTNP9mrxyS
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13213：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_L41jgvNQ6w8JjJzaNKsowV
        status: active
        display_name: 王綏圻
        merged_into_person_id: null
    - claim:
        id: c_qVybeqBIM3NX2E5Dp5KOOI
        subject_person_id: p_8FQahN2M34nM7B4mb79g6G
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xrBWsuTJASiC9n8hS1Ba4D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VlIc1iiuIXiiLdCuJOiSnZ
          claim_id: c_qVybeqBIM3NX2E5Dp5KOOI
          source_id: s_4x6YQGwimhjCQTNP9mrxyS
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13213：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xrBWsuTJASiC9n8hS1Ba4D
        status: active
        display_name: 王綏垣
        merged_into_person_id: null
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
| birth.date | 1856年 | accepted |
| death.date | 1900年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_L41jgvNQ6w8JjJzaNKsowV | 王綏圻 | accepted |
| children | p_xrBWsuTJASiC9n8hS1Ba4D | 王綏垣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王燮（CBDB 71293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71293&o=json)
