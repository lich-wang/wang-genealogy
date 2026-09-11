---
schema: wang-person/v1
id: p_5jrDZnpuo7D8jQo9dtTQev
status: active
merged_into: null
display_name: 王韶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YJ8gQrbCon9kjWdKLSZacF
        subject_person_id: p_5jrDZnpuo7D8jQo9dtTQev
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5vTRWCs7TvVGz8C78b4UNz
          claim_id: c_YJ8gQrbCon9kjWdKLSZacF
          source_id: s_Ynd7vGfp1yfYqS9tZC9TGC
          stance: supports
          locator: CBDB:162759
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（162759）
          source: &a1
            id: s_Ynd7vGfp1yfYqS9tZC9TGC
            source_type: api_record
            title: 中国历代人物传记资料库：王韶（CBDB 162759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162759&o=json
            external_identifier: CBDB:162759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.954Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yWWks4ZAxEdFuez5YQLwtQ
        subject_person_id: p_5jrDZnpuo7D8jQo9dtTQev
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韶，史料所见人物。本项目依据《中国历代人物传记资料库：王韶（CBDB 162759）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BD-KGM9ddrOB6u3tttMHnp
          claim_id: c_yWWks4ZAxEdFuez5YQLwtQ
          source_id: s_Ynd7vGfp1yfYqS9tZC9TGC
          stance: supports
          locator: CBDB:162759
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_RClD--BvNdvHueMGgY3BIW
        subject_person_id: p_5jrDZnpuo7D8jQo9dtTQev
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6YpXxeKRMWr6vVrAX9K1Tv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HrGoC59xYgY86nrLiUJb5u
          claim_id: c_RClD--BvNdvHueMGgY3BIW
          source_id: s_KFkS5hiMaGh1959L5ARJrJ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yongchun3：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KFkS5hiMaGh1959L5ARJrJ
            source_type: api_record
            title: 中国历代人物传记资料库：王婉（CBDB 142690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142690&o=json
            external_identifier: CBDB:142690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.589Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6YpXxeKRMWr6vVrAX9K1Tv
        status: active
        display_name: 王婉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王韶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王韶 | accepted |
| bio.summary | 王韶，史料所见人物。本项目依据《中国历代人物传记资料库：王韶（CBDB 162759）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6YpXxeKRMWr6vVrAX9K1Tv | 王婉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王韶（CBDB 162759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162759&o=json)
- [中国历代人物传记资料库：王婉（CBDB 142690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142690&o=json)
