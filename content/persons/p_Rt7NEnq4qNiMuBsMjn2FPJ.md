---
schema: wang-person/v1
id: p_Rt7NEnq4qNiMuBsMjn2FPJ
status: active
merged_into: null
display_name: 王文煃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kMz55PcHTmqX7BVgDVhAGR
        subject_person_id: p_Rt7NEnq4qNiMuBsMjn2FPJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文煃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gNACRgKi6VUFWk51M7FUYT
          claim_id: c_kMz55PcHTmqX7BVgDVhAGR
          source_id: s_F1vJ24YNtoazvUguUp17Pa
          stance: supports
          locator: CBDB:638256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638256）
          source: &a1
            id: s_F1vJ24YNtoazvUguUp17Pa
            source_type: api_record
            title: 中国历代人物传记资料库：王文煃（CBDB 638256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638256&o=json
            external_identifier: CBDB:638256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.573Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wPpgBui1c1FJuqjhdCQEhF
        subject_person_id: p_Rt7NEnq4qNiMuBsMjn2FPJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文煃，清人物。籍贯眉州直隸州直轄地方，入仕優貢生，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 638256）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fOPtHRgnjsi8Odq0paW2Bl
          claim_id: c_wPpgBui1c1FJuqjhdCQEhF
          source_id: s_F1vJ24YNtoazvUguUp17Pa
          stance: supports
          locator: CBDB:638256
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
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文煃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文煃 | accepted |
| bio.summary | 王文煃，清人物。籍贯眉州直隸州直轄地方，入仕優貢生，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 638256） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文煃（CBDB 638256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638256&o=json)
