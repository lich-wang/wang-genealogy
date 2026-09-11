---
schema: wang-person/v1
id: p_XQvuxj6yd7R5MCE98MGmti
status: active
merged_into: null
display_name: 王青羅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HvArhTsxnyEdNAhxfazhdU
        subject_person_id: p_XQvuxj6yd7R5MCE98MGmti
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王青羅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yByP9oxFu9gh7wmjacJFJV
          claim_id: c_HvArhTsxnyEdNAhxfazhdU
          source_id: s_yEZeFBZGDsEk2W44jR42Jo
          stance: supports
          locator: CBDB:699426
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699426）
          source: &a1
            id: s_yEZeFBZGDsEk2W44jR42Jo
            source_type: api_record
            title: 中国历代人物传记资料库：王青羅（CBDB 699426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699426&o=json
            external_identifier: CBDB:699426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yQCC6hrg3y2K3LG7Ns7r41
        subject_person_id: p_XQvuxj6yd7R5MCE98MGmti
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王青羅，史料所见人物。本项目依据《中国历代人物传记资料库：王青羅（CBDB 699426）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eTmNNKD26pqzf__jutvHMo
          claim_id: c_yQCC6hrg3y2K3LG7Ns7r41
          source_id: s_yEZeFBZGDsEk2W44jR42Jo
          stance: supports
          locator: CBDB:699426
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
        id: c_ODAyegjYibd6KspEP7Qkw0
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XQvuxj6yd7R5MCE98MGmti
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DTLIA398OAAVq2pefKKSyi
          claim_id: c_ODAyegjYibd6KspEP7Qkw0
          source_id: s_yEZeFBZGDsEk2W44jR42Jo
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，80：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6r5VwfkrP2qbqzP6hHoNQi
        status: active
        display_name: 王弁
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王青羅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王青羅 | accepted |
| bio.summary | 王青羅，史料所见人物。本项目依据《中国历代人物传记资料库：王青羅（CBDB 699426）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_6r5VwfkrP2qbqzP6hHoNQi | 王弁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王青羅（CBDB 699426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699426&o=json)
