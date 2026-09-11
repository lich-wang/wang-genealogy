---
schema: wang-person/v1
id: p_he2wMHyNK6nBCLNJF5nWDE
status: active
merged_into: null
display_name: 王志能
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_28mTTC4biSw8bDtJPi5iG1
        subject_person_id: p_he2wMHyNK6nBCLNJF5nWDE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志能
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GLNHVH5nP4fVei4VQrvc42
          claim_id: c_28mTTC4biSw8bDtJPi5iG1
          source_id: s_bNst2zfLLrqLXaCHvjCBjm
          stance: supports
          locator: CBDB:231793
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231793）
          source: &a1
            id: s_bNst2zfLLrqLXaCHvjCBjm
            source_type: api_record
            title: 中国历代人物传记资料库：王志能（CBDB 231793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231793&o=json
            external_identifier: CBDB:231793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.663Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1LVxcooKGJMYNHPzsDsq2D
        subject_person_id: p_he2wMHyNK6nBCLNJF5nWDE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志能，史料所见人物。本项目依据《中国历代人物传记资料库：王志能（CBDB 231793）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1pGA4o6UQr4K7Uk98BkEiQ
          claim_id: c_1LVxcooKGJMYNHPzsDsq2D
          source_id: s_bNst2zfLLrqLXaCHvjCBjm
          stance: supports
          locator: CBDB:231793
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_HJVzIHWlHT4VZYuQHEkW64
        subject_person_id: p_he2wMHyNK6nBCLNJF5nWDE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m3yi9K5yZsVRwPPF1yaNKL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PPlTKPbRX_2z1IEyufEaK1
          claim_id: c_HJVzIHWlHT4VZYuQHEkW64
          source_id: s_bNst2zfLLrqLXaCHvjCBjm
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百□名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_m3yi9K5yZsVRwPPF1yaNKL
        status: active
        display_name: 王國翼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王志能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志能 | accepted |
| bio.summary | 王志能，史料所见人物。本项目依据《中国历代人物传记资料库：王志能（CBDB 231793）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_m3yi9K5yZsVRwPPF1yaNKL | 王國翼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王志能（CBDB 231793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231793&o=json)
