---
schema: wang-person/v1
id: p_zmKmGw5eGTqLZuiR7yMU8M
status: active
merged_into: null
display_name: 王助哥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LK4Z9Fzd7AmfNJo3M2SP66
        subject_person_id: p_zmKmGw5eGTqLZuiR7yMU8M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王助哥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xu37dApJNntX8T77imfqAK
          claim_id: c_LK4Z9Fzd7AmfNJo3M2SP66
          source_id: s_W28o1SV2qgdyZwwMQJBwtQ
          stance: supports
          locator: CBDB:699414
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699414）
          source: &a1
            id: s_W28o1SV2qgdyZwwMQJBwtQ
            source_type: api_record
            title: 中国历代人物传记资料库：王助哥（CBDB 699414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699414&o=json
            external_identifier: CBDB:699414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.579Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_57q11MGWmo4rXxRZEB12Hz
        subject_person_id: p_zmKmGw5eGTqLZuiR7yMU8M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王助哥，史料所见人物。本项目依据《中国历代人物传记资料库：王助哥（CBDB 699414）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KEOeJ2uvlO9KX2biQTa5lj
          claim_id: c_57q11MGWmo4rXxRZEB12Hz
          source_id: s_W28o1SV2qgdyZwwMQJBwtQ
          stance: supports
          locator: CBDB:699414
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
        id: c_4bes_dAwnGjL668jgi9nH-
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zmKmGw5eGTqLZuiR7yMU8M
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lenBn35G69blenUXGfIprV
          claim_id: c_4bes_dAwnGjL668jgi9nH-
          source_id: s_ebyTGK7ELo3HAFB92wqGA3
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，80：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ebyTGK7ELo3HAFB92wqGA3
            source_type: api_record
            title: 中国历代人物传记资料库：王弁（CBDB 699373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699373&o=json
            external_identifier: CBDB:699373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.754Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6r5VwfkrP2qbqzP6hHoNQi
        status: active
        display_name: 王弁
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王助哥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王助哥 | accepted |
| bio.summary | 王助哥，史料所见人物。本项目依据《中国历代人物传记资料库：王助哥（CBDB 699414）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_6r5VwfkrP2qbqzP6hHoNQi | 王弁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弁（CBDB 699373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699373&o=json)
- [中国历代人物传记资料库：王助哥（CBDB 699414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699414&o=json)
