---
schema: wang-person/v1
id: p_GcKEHNN7xDuFEv8TuQJdGM
status: active
merged_into: null
display_name: 王裕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Q5kNVcZ2RZtbCuX1jLC1K
        subject_person_id: p_GcKEHNN7xDuFEv8TuQJdGM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fqUMa7qMdUfb1S6qDhiNSG
          claim_id: c_4Q5kNVcZ2RZtbCuX1jLC1K
          source_id: s_f1F8WDMMhd3C3CsmkvJL5G
          stance: supports
          locator: CBDB:28106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28106）
          source: &a1
            id: s_f1F8WDMMhd3C3CsmkvJL5G
            source_type: api_record
            title: 中国历代人物传记资料库：王裕（CBDB 28106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28106&o=json
            external_identifier: CBDB:28106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.964Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Seaeg6NBUsRJjNvhmkHzs6
        subject_person_id: p_GcKEHNN7xDuFEv8TuQJdGM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕，明人物。籍贯義烏。（中国历代人物传记资料库 CBDB 28106）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uJKDOvrEHrNVe3_KLvDNG8
          claim_id: c_Seaeg6NBUsRJjNvhmkHzs6
          source_id: s_f1F8WDMMhd3C3CsmkvJL5G
          stance: supports
          locator: CBDB:28106
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
  ancestors:
    - claim:
        id: c_uV7VktDM4NzoTwfyfIQ7cT
        subject_person_id: p_mp9fqPLVqRaYj9MBorGs2H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GcKEHNN7xDuFEv8TuQJdGM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GaGcXs8-pqylANotM7YNGD
          claim_id: c_uV7VktDM4NzoTwfyfIQ7cT
          source_id: s_f1F8WDMMhd3C3CsmkvJL5G
          stance: supports
          locator: CBDB 双向互证（祖父 王炎澤 ⇄ 孫 王裕）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_mp9fqPLVqRaYj9MBorGs2H
        status: active
        display_name: 王炎澤
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_JMTppmB_H5-n2opuMG0R7U
        subject_person_id: p_GcKEHNN7xDuFEv8TuQJdGM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xTfgwP195usJ93B9R8xhUq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5MeAYS2OiyZBAJIsf6XtCz
          claim_id: c_JMTppmB_H5-n2opuMG0R7U
          source_id: s_9UyeB-LrJ9vGwf2Y1yAJex
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 28106 王裕）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9UyeB-LrJ9vGwf2Y1yAJex
            source_type: api_record
            title: 中国历代人物传记资料库：王補（CBDB 28107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28107&o=json
            external_identifier: CBDB:28107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xTfgwP195usJ93B9R8xhUq
        status: active
        display_name: 王補
        merged_into_person_id: null
---

# 王裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王裕 | accepted |
| bio.summary | 王裕，明人物。籍贯義烏。（中国历代人物传记资料库 CBDB 28106） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_mp9fqPLVqRaYj9MBorGs2H | 王炎澤 | accepted |
| other | p_xTfgwP195usJ93B9R8xhUq | 王補 | accepted |

## 外部来源

- [中国历代人物传记资料库：王補（CBDB 28107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28107&o=json)
- [中国历代人物传记资料库：王裕（CBDB 28106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28106&o=json)
