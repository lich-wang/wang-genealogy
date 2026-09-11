---
schema: wang-person/v1
id: p_BBMZKVuEpxR5WRY9AieqFs
status: active
merged_into: null
display_name: 王朗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BARp5pgGEeyKNJ5sZq8iJ2
        subject_person_id: p_BBMZKVuEpxR5WRY9AieqFs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7Mko5MAv1YJTe7v8Ls46zu
          claim_id: c_BARp5pgGEeyKNJ5sZq8iJ2
          source_id: s_gtGxwZcJjcb72zqCoXaPmc
          stance: supports
          locator: CBDB:162480
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（162480）
          source: &a1
            id: s_gtGxwZcJjcb72zqCoXaPmc
            source_type: api_record
            title: 中国历代人物传记资料库：王朗（CBDB 162480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162480&o=json
            external_identifier: CBDB:162480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.952Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p4PdYdjH4NScpetcGFNLBr
        subject_person_id: p_BBMZKVuEpxR5WRY9AieqFs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朗，唐人物。籍贯歙州，曾任著作郎。（中国历代人物传记资料库 CBDB 162480）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_86AifeofdaakgG8pp6Fkgo
          claim_id: c_p4PdYdjH4NScpetcGFNLBr
          source_id: s_gtGxwZcJjcb72zqCoXaPmc
          stance: supports
          locator: CBDB:162480
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xt8obXNTXKW1DgXhpmul9l
        subject_person_id: p_BBMZKVuEpxR5WRY9AieqFs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gE38wphVgSX2ysH6WXuLZH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ViH1wburT9pbVd7Q-dQJ2g
          claim_id: c_xt8obXNTXKW1DgXhpmul9l
          source_id: s_gtGxwZcJjcb72zqCoXaPmc
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Xianheng2：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gE38wphVgSX2ysH6WXuLZH
        status: active
        display_name: 王大禮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朗 | accepted |
| bio.summary | 王朗，唐人物。籍贯歙州，曾任著作郎。（中国历代人物传记资料库 CBDB 162480） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_gE38wphVgSX2ysH6WXuLZH | 王大禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朗（CBDB 162480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162480&o=json)
