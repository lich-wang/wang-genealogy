---
schema: wang-person/v1
id: p_axq8URLSpJG5GjJ2ugi2TC
status: active
merged_into: null
display_name: 王閏兒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NXtMJAXALxDMxpDYgwPoJ5
        subject_person_id: p_axq8URLSpJG5GjJ2ugi2TC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閏兒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o72sMCa5MMK9Y4D8FLHs3b
          claim_id: c_NXtMJAXALxDMxpDYgwPoJ5
          source_id: s_6BPbjNQm4D2Cw9Ep3xteG2
          stance: supports
          locator: CBDB:699459
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699459）
          source: &a1
            id: s_6BPbjNQm4D2Cw9Ep3xteG2
            source_type: api_record
            title: 中国历代人物传记资料库：王閏兒（CBDB 699459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699459&o=json
            external_identifier: CBDB:699459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.585Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BrbUJvHFijew8CaBj3UGtc
        subject_person_id: p_axq8URLSpJG5GjJ2ugi2TC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閏兒，史料所见人物。本项目依据《中国历代人物传记资料库：王閏兒（CBDB 699459）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1QJz0JxYU7Gf1mqVkdu4TK
          claim_id: c_BrbUJvHFijew8CaBj3UGtc
          source_id: s_6BPbjNQm4D2Cw9Ep3xteG2
          stance: supports
          locator: CBDB:699459
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Jg3Ax_0hhbIwVoMNu694VS
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_axq8URLSpJG5GjJ2ugi2TC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K3cPcz77_ocUnMuUj2fjEY
          claim_id: c_Jg3Ax_0hhbIwVoMNu694VS
          source_id: s_6BPbjNQm4D2Cw9Ep3xteG2
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，48：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P9pk3GX9ak89DEB5HLBBuW
        status: active
        display_name: 王用
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王閏兒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王閏兒 | accepted |
| bio.summary | 王閏兒，史料所见人物。本项目依据《中国历代人物传记资料库：王閏兒（CBDB 699459）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_P9pk3GX9ak89DEB5HLBBuW | 王用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王閏兒（CBDB 699459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699459&o=json)
