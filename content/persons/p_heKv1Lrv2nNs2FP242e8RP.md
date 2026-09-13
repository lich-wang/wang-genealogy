---
schema: wang-person/v1
id: p_heKv1Lrv2nNs2FP242e8RP
status: active
merged_into: null
display_name: 王士望
cbdb_id: 218704
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KNNyxUMU3etfRb6QfpoMZ9
        subject_person_id: p_heKv1Lrv2nNs2FP242e8RP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士望，史料所见人物。本项目依据《中国历代人物传记资料库：王士望（CBDB 218704）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_5Icw1Y6CQLXCB0kPDHR8yE
          claim_id: c_KNNyxUMU3etfRb6QfpoMZ9
          source_id: s_23MLmrvbVSk3aR9pLKCLpH
          stance: supports
          locator: CBDB:218704
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_23MLmrvbVSk3aR9pLKCLpH
            source_type: api_record
            title: 中国历代人物传记资料库：王士望（CBDB 218704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218704&o=json
            external_identifier: CBDB:218704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_avLmBjntnGxy1KJDV5RZH5
        subject_person_id: p_heKv1Lrv2nNs2FP242e8RP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士望
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WbrUZ9CV5JFM745B29nPRT
          claim_id: c_avLmBjntnGxy1KJDV5RZH5
          source_id: s_23MLmrvbVSk3aR9pLKCLpH
          stance: supports
          locator: CBDB:218704
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_e6ZqVMQoMaUzm3e_cCKYvo
        subject_person_id: p_heKv1Lrv2nNs2FP242e8RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sw_ptAPGEd8KZSn2zepDoq
          claim_id: c_e6ZqVMQoMaUzm3e_cCKYvo
          source_id: s_23MLmrvbVSk3aR9pLKCLpH
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第二甲第六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_23MLmrvbVSk3aR9pLKCLpH
            source_type: api_record
            title: 中国历代人物传记资料库：王士望（CBDB 218704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218704&o=json
            external_identifier: CBDB:218704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_P62PwvTysFNxEPkUXBg1Fm
        status: active
        display_name: 王德新
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士望

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士望，史料所见人物。本项目依据《中国历代人物传记资料库：王士望（CBDB 218704）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王士望 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_P62PwvTysFNxEPkUXBg1Fm | 王德新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士望（CBDB 218704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218704&o=json)
