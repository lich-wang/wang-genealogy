---
schema: wang-person/v1
id: p_fvMhQ1gMuC7L5CYMrsmXDW
status: active
merged_into: null
display_name: 王生
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HjAmAkQG7tY4NTm5u1dHCf
        subject_person_id: p_fvMhQ1gMuC7L5CYMrsmXDW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V1VneFb6V6PVvh3HF2GrQp
          claim_id: c_HjAmAkQG7tY4NTm5u1dHCf
          source_id: s_vf1gDSVfKxGoDqVjyeUCgM
          stance: supports
          locator: CBDB:150541
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150541）
          source: &a1
            id: s_vf1gDSVfKxGoDqVjyeUCgM
            source_type: api_record
            title: 中国历代人物传记资料库：王生（CBDB 150541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150541&o=json
            external_identifier: CBDB:150541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yrhtqEN2PTTqrdeegh8R8s
        subject_person_id: p_fvMhQ1gMuC7L5CYMrsmXDW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王生，史料所见人物。本项目依据《中国历代人物传记资料库：王生（CBDB 150541）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h7LNIKLef-BdnK-sA6NF0z
          claim_id: c_yrhtqEN2PTTqrdeegh8R8s
          source_id: s_vf1gDSVfKxGoDqVjyeUCgM
          stance: supports
          locator: CBDB:150541
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Qo-0FaYvqSaejQuPA_oujS
        subject_person_id: p_fvMhQ1gMuC7L5CYMrsmXDW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V6Vh65UhA29fnCXkG6WPsA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__KSmte2uG6ggGIzzmObovx
          claim_id: c_Qo-0FaYvqSaejQuPA_oujS
          source_id: s_vf1gDSVfKxGoDqVjyeUCgM
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 68：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_V6Vh65UhA29fnCXkG6WPsA
        status: active
        display_name: 王某通
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王生 | accepted |
| bio.summary | 王生，史料所见人物。本项目依据《中国历代人物传记资料库：王生（CBDB 150541）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_V6Vh65UhA29fnCXkG6WPsA | 王某通 | accepted |

## 外部来源

- [中国历代人物传记资料库：王生（CBDB 150541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150541&o=json)
